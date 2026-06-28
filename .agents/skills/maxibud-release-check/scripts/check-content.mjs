#!/usr/bin/env node

import { access, readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const rootArg = args.find(arg => !arg.startsWith('--')) ?? '.'
const root = path.resolve(rootArg)
const jsonOutput = args.includes('--json')

const requiredProducts = [
  {
    slug: 'powerbox-2400',
    approved: ['2.4 kWh', '2,400 W', '4,800 W', '28 kg']
  },
  {
    slug: 'homecore-5',
    approved: ['5.12 kWh', '20.48 kWh', '5 kW', '54 kg']
  },
  {
    slug: 'sitehub-10',
    approved: ['10.24 kWh', '6,000 W', '12,000 W', '118 kg']
  }
]

const locales = ['uk', 'en']

const forbiddenPatterns = [
  { pattern: /\bbuy now\b/i, label: 'buy now' },
  { pattern: /\border now\b/i, label: 'order now' },
  { pattern: /\bin stock\b/i, label: 'in stock' },
  { pattern: /\bmarket leader\b/i, label: 'market leader' },
  { pattern: /\btrusted by\b/i, label: 'trusted by' },
  { pattern: /\bmilitary grade\b/i, label: 'military grade' },
  { pattern: /\bCE certified\b/i, label: 'CE certified' },
  { pattern: /\bUL certified\b/i, label: 'UL certified' },
  { pattern: /\bкупити\b/i, label: 'купити' },
  { pattern: /\bзамовити\b/i, label: 'замовити' },
  { pattern: /\bв наявності\b/i, label: 'в наявності' },
  { pattern: /\bлідер ринку\b/i, label: 'лідер ринку' },
  { pattern: /\bвійськового класу\b/i, label: 'військового класу' }
]

const placeholderPatterns = [
  { pattern: /lorem ipsum/i, label: 'lorem ipsum' },
  { pattern: /\bTBD\b/, label: 'TBD' },
  { pattern: /\bTODO\b/, label: 'TODO' },
  { pattern: /\bFIXME\b/, label: 'FIXME' },
  { pattern: /placeholder image/i, label: 'placeholder image' }
]

async function exists(target) {
  try {
    await access(target)
    return true
  } catch {
    return false
  }
}

async function walk(directory, output = []) {
  if (!(await exists(directory))) {
    return output
  }

  const entries = await readdir(directory, { withFileTypes: true })

  for (const entry of entries) {
    if (['node_modules', '.nuxt', '.output', '.git'].includes(entry.name)) {
      continue
    }

    const target = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      await walk(target, output)
    } else if (entry.isFile()) {
      output.push(target)
    }
  }

  return output
}

function relative(target) {
  return path.relative(root, target).split(path.sep).join('/')
}

function excerpt(text, index, length = 100) {
  const start = Math.max(0, index - 40)
  const end = Math.min(text.length, index + length)
  return text.slice(start, end).replace(/\s+/g, ' ').trim()
}

const result = {
  check: 'content-integrity',
  root,
  status: 'PASS',
  productFiles: {},
  findings: []
}

const contentRoot = path.join(root, 'content', 'products')

for (const locale of locales) {
  result.productFiles[locale] = {}

  for (const product of requiredProducts) {
    const candidates = [
      path.join(contentRoot, locale, `${product.slug}.md`),
      path.join(contentRoot, locale, `${product.slug}.yml`),
      path.join(contentRoot, locale, `${product.slug}.yaml`),
      path.join(contentRoot, locale, `${product.slug}.json`)
    ]

    let found = null
    for (const candidate of candidates) {
      if (await exists(candidate)) {
        found = candidate
        break
      }
    }

    result.productFiles[locale][product.slug] = found ? relative(found) : null

    if (!found) {
      result.findings.push({
        severity: 'BLOCKER',
        code: 'PRODUCT_LOCALE_FILE_MISSING',
        locale,
        slug: product.slug,
        message: `Missing ${locale} content file for ${product.slug}.`
      })
      continue
    }

    const text = await readFile(found, 'utf8')

    if (!text.includes(product.slug)) {
      result.findings.push({
        severity: 'HIGH',
        code: 'PRODUCT_SLUG_NOT_PRESENT',
        file: relative(found),
        slug: product.slug,
        message: `The file does not contain the expected slug "${product.slug}".`
      })
    }

    const hasConceptMarker = /conceptProduct\s*:\s*true/i.test(text)
      || /concept product/i.test(text)
      || /концептуальн/i.test(text)

    if (!hasConceptMarker) {
      result.findings.push({
        severity: 'HIGH',
        code: 'CONCEPT_MARKER_MISSING',
        file: relative(found),
        message: 'No concept-product marker was detected.'
      })
    }

    for (const approvedValue of product.approved) {
      if (!text.includes(approvedValue)) {
        result.findings.push({
          severity: 'MEDIUM',
          code: 'APPROVED_VALUE_NOT_DETECTED',
          file: relative(found),
          slug: product.slug,
          value: approvedValue,
          message: `Approved value "${approvedValue}" was not detected. Manual review required for localized formatting.`
        })
      }
    }
  }
}

const auditableExtensions = new Set([
  '.md', '.vue', '.ts', '.js', '.json', '.yaml', '.yml', '.html'
])

const filesToScan = (await walk(root)).filter(file => auditableExtensions.has(path.extname(file)))

for (const file of filesToScan) {
  const text = await readFile(file, 'utf8')
  const fileName = relative(file)

  for (const entry of forbiddenPatterns) {
    const match = entry.pattern.exec(text)
    if (match) {
      const context = excerpt(text, match.index)
      const isNegated = /\bnot\b.{0,30}(certified|available|in stock|a commercial offer)/i.test(context)
        || /не.{0,30}(сертифікован|в наявності|комерційною пропозицією)/i.test(context)

      result.findings.push({
        severity: isNegated ? 'LOW' : 'HIGH',
        code: isNegated ? 'FORBIDDEN_TERM_IN_NEGATED_CONTEXT' : 'POTENTIAL_UNSUPPORTED_CLAIM',
        file: fileName,
        term: entry.label,
        excerpt: context,
        message: `Review use of "${entry.label}".`
      })
    }
  }

  for (const entry of placeholderPatterns) {
    const match = entry.pattern.exec(text)
    if (match) {
      result.findings.push({
        severity: 'MEDIUM',
        code: 'PLACEHOLDER_DETECTED',
        file: fileName,
        term: entry.label,
        excerpt: excerpt(text, match.index),
        message: `Placeholder marker "${entry.label}" was detected.`
      })
    }
  }

  const documentMatches = [...text.matchAll(/(?:url|href)\s*[:=]\s*["']?(\/documents\/[^"' \n]+)/g)]
  for (const match of documentMatches) {
    const url = match[1].replace(/[),\]}]+$/, '')
    const absolute = path.join(root, 'public', url.replace(/^\//, ''))

    if (!(await exists(absolute))) {
      result.findings.push({
        severity: 'HIGH',
        code: 'MISSING_DOCUMENT_TARGET',
        file: fileName,
        url,
        message: `Referenced document does not exist at public${url}.`
      })
    }
  }
}

const disclosureTargets = [
  'app/components/layout/AppFooter.vue',
  'app/components/AppFooter.vue',
  'app/pages/legal.vue',
  'pages/legal.vue'
]

for (const target of disclosureTargets) {
  const absolute = path.join(root, target)
  if (!(await exists(absolute))) {
    continue
  }

  const text = await readFile(absolute, 'utf8')
  if (!/concept|концептуальн/i.test(text)) {
    result.findings.push({
      severity: 'BLOCKER',
      code: 'DISCLOSURE_NOT_DETECTED',
      file: target,
      message: 'Required concept disclosure was not detected.'
    })
  }
}

if (result.findings.some(item => item.severity === 'BLOCKER' || item.severity === 'HIGH')) {
  result.status = 'FAIL'
} else if (result.findings.length > 0) {
  result.status = 'WARN'
}

if (jsonOutput) {
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
} else {
  console.log(`content check: ${result.status}`)
  console.log(`root: ${root}`)

  for (const locale of locales) {
    for (const product of requiredProducts) {
      const file = result.productFiles[locale][product.slug]
      console.log(`${file ? 'PASS' : 'MISS'} ${locale}/${product.slug}: ${file ?? 'not found'}`)
    }
  }

  if (result.findings.length === 0) {
    console.log('No content-integrity defects detected by the heuristic audit.')
  } else {
    for (const finding of result.findings) {
      const location = finding.file ? ` ${finding.file}` : ''
      console.log(`[${finding.severity}] ${finding.code}:${location} ${finding.message}`)
    }
  }
}

process.exitCode = result.status === 'FAIL' ? 1 : 0
