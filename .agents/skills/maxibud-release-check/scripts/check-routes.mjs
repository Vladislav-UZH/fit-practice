#!/usr/bin/env node

import { access } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const rootArg = args.find(arg => !arg.startsWith('--')) ?? '.'
const root = path.resolve(rootArg)
const jsonOutput = args.includes('--json')

async function exists(relative) {
  try {
    await access(path.join(root, relative))
    return true
  } catch {
    return false
  }
}

async function firstExisting(candidates) {
  for (const candidate of candidates) {
    if (await exists(candidate)) {
      return candidate
    }
  }
  return null
}

const checks = [
  {
    code: 'HOME_PAGE',
    severity: 'BLOCKER',
    label: 'Homepage',
    candidates: ['app/pages/index.vue', 'pages/index.vue']
  },
  {
    code: 'PRODUCTS_INDEX',
    severity: 'BLOCKER',
    label: 'Products index',
    candidates: ['app/pages/products/index.vue', 'pages/products/index.vue']
  },
  {
    code: 'PRODUCT_DYNAMIC_ROUTE',
    severity: 'BLOCKER',
    label: 'Dynamic product route',
    candidates: ['app/pages/products/[slug].vue', 'pages/products/[slug].vue']
  },
  {
    code: 'COMPARE_PAGE',
    severity: 'BLOCKER',
    label: 'Comparison page',
    candidates: ['app/pages/products/compare.vue', 'pages/products/compare.vue']
  },
  {
    code: 'TECHNOLOGY_PAGE',
    severity: 'BLOCKER',
    label: 'Technology page',
    candidates: ['app/pages/technology.vue', 'pages/technology.vue']
  },
  {
    code: 'ABOUT_PAGE',
    severity: 'BLOCKER',
    label: 'About page',
    candidates: ['app/pages/about.vue', 'pages/about.vue']
  },
  {
    code: 'CONTACT_PAGE',
    severity: 'BLOCKER',
    label: 'Contact page',
    candidates: ['app/pages/contact.vue', 'pages/contact.vue']
  },
  {
    code: 'LEGAL_PAGE',
    severity: 'BLOCKER',
    label: 'Legal page',
    candidates: ['app/pages/legal.vue', 'pages/legal.vue']
  },
  {
    code: 'ERROR_PAGE',
    severity: 'HIGH',
    label: 'Branded error page',
    candidates: ['app/error.vue', 'error.vue']
  },
  {
    code: 'CONTACT_ENDPOINT',
    severity: 'BLOCKER',
    label: 'Contact endpoint',
    candidates: [
      'server/api/contact.post.ts',
      'server/api/contact.post.js',
      'server/api/contact.ts',
      'server/api/contact.js'
    ]
  },
  {
    code: 'NUXT_CONFIG',
    severity: 'BLOCKER',
    label: 'Nuxt config',
    candidates: ['nuxt.config.ts', 'nuxt.config.js']
  },
  {
    code: 'CONTENT_CONFIG',
    severity: 'HIGH',
    label: 'Content config',
    candidates: ['content.config.ts', 'content.config.js']
  },
  {
    code: 'README',
    severity: 'MEDIUM',
    label: 'README',
    candidates: ['README.md']
  },
  {
    code: 'ENV_EXAMPLE',
    severity: 'MEDIUM',
    label: 'Environment example',
    candidates: ['.env.example']
  }
]

const result = {
  check: 'routes-and-structure',
  root,
  status: 'PASS',
  items: [],
  findings: []
}

for (const check of checks) {
  const found = await firstExisting(check.candidates)

  result.items.push({
    code: check.code,
    label: check.label,
    found
  })

  if (!found) {
    result.findings.push({
      severity: check.severity,
      code: `${check.code}_MISSING`,
      message: `${check.label} was not found.`,
      expected: check.candidates
    })
  }
}

const appExists = await exists('app')
const legacyPagesExists = await exists('pages')

if (!appExists && legacyPagesExists) {
  result.findings.push({
    severity: 'MEDIUM',
    code: 'LEGACY_SOURCE_LAYOUT',
    message: 'The repository uses root pages/ without app/. Verify whether srcDir or migration requirements justify this structure.'
  })
}

if (appExists && legacyPagesExists) {
  result.findings.push({
    severity: 'HIGH',
    code: 'MIXED_PAGE_ROOTS',
    message: 'Both app/ and root pages/ exist. Verify that routes are not split accidentally.'
  })
}

if (result.findings.some(item => item.severity === 'BLOCKER' || item.severity === 'HIGH')) {
  result.status = 'FAIL'
} else if (result.findings.length > 0) {
  result.status = 'WARN'
}

if (jsonOutput) {
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
} else {
  console.log(`route check: ${result.status}`)
  console.log(`root: ${root}`)

  for (const item of result.items) {
    console.log(`${item.found ? 'PASS' : 'MISS'} ${item.label}: ${item.found ?? 'not found'}`)
  }

  for (const finding of result.findings) {
    console.log(`[${finding.severity}] ${finding.code}: ${finding.message}`)
  }
}

process.exitCode = result.status === 'FAIL' ? 1 : 0
