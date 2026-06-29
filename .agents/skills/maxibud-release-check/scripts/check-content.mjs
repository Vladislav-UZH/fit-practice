#!/usr/bin/env node

import { access, readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const rootArg = args.find(arg => !arg.startsWith('--')) ?? '.'
const root = path.resolve(rootArg)
const jsonOutput = args.includes('--json')
const locales = ['uk', 'en']

const requiredProducts = [
  {
    slug: 'powerbox-2400',
    approvedGroups: [
      ['2.4 kWh', '2,4 kWh', '2.4 кВт·год', '2,4 кВт·год'],
      ['2,400 W', '2400 W', '2.4 kW', '2,4 kW', '2,4 кВт'],
      ['4,800 W', '4800 W', '4.8 kW', '4,8 kW', '4,8 кВт'],
      ['28 kg', '28 кг']
    ]
  },
  {
    slug: 'homecore-5',
    approvedGroups: [
      ['5.12 kWh', '5,12 kWh', '5.12 кВт·год', '5,12 кВт·год'],
      ['20.48 kWh', '20,48 kWh', '20.48 кВт·год', '20,48 кВт·год'],
      ['5 kW', '5 кВт'],
      ['54 kg', '54 кг']
    ]
  },
  {
    slug: 'sitehub-10',
    approvedGroups: [
      ['10.24 kWh', '10,24 kWh', '10.24 кВт·год', '10,24 кВт·год'],
      ['6,000 W', '6000 W', '6 kW', '6 кВт'],
      ['12,000 W', '12000 W', '12 kW', '12 кВт'],
      ['118 kg', '118 кг']
    ]
  }
]

const forbiddenPatterns = [
  { pattern: /\bbuy now\b/gi, label: 'buy now' },
  { pattern: /\border now\b/gi, label: 'order now' },
  { pattern: /\bin stock\b/gi, label: 'in stock' },
  { pattern: /\bmarket leader\b/gi, label: 'market leader' },
  { pattern: /\btrusted by\b/gi, label: 'trusted by' },
  { pattern: /\bmilitary grade\b/gi, label: 'military grade' },
  { pattern: /\bCE certified\b/gi, label: 'CE certified' },
  { pattern: /\bUL certified\b/gi, label: 'UL certified' },
  { pattern: /\bкупити\b/giu, label: 'купити' },
  { pattern: /\bзамовити\b/giu, label: 'замовити' },
  { pattern: /\bв наявності\b/giu, label: 'в наявності' },
  { pattern: /\bлідер ринку\b/giu, label: 'лідер ринку' },
  { pattern: /\bвійськового класу\b/giu, label: 'військового класу' }
]

const placeholderPatterns = [
  { pattern: /lorem ipsum/gi, label: 'lorem ipsum' },
  { pattern: /\bTBD\b/g, label: 'TBD' },
  { pattern: /\bTODO\b/g, label: 'TODO' },
  { pattern: /\bFIXME\b/g, label: 'FIXME' },
  { pattern: /placeholder image/gi, label: 'placeholder image' }
]

const auditableExtensions = new Set(['.md', '.vue', '.ts', '.js', '.json', '.yaml', '.yml', '.html'])
const scanTargets = ['app', 'content', 'i18n', 'locales', 'public', 'server', 'shared', 'README.md']
const ignoredDirectoryNames = new Set(['node_modules', '.nuxt', '.output', '.git', 'tests', 'test', '__tests__', 'coverage'])

async function exists(target) {
  try {
    await access(target)
    return true
  } catch {
    return false
  }
}

async function walk(target, output = []) {
  if (!(await exists(target))) {
    return output
  }

  for (const entry of await readdir(target, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectoryNames.has(entry.name)) {
      continue
    }

    const absolute = path.join(target, entry.name)
    if (entry.isDirectory()) {
      await walk(absolute, output)
    } else if (entry.isFile()) {
      output.push(absolute)
    }
  }

  return output
}

async function collectAuditableFiles() {
  const files = []

  for (const target of scanTargets) {
    const absolute = path.join(root, target)
    if (!(await exists(absolute))) {
      continue
    }

    if (path.extname(target)) {
      if (auditableExtensions.has(path.extname(absolute))) {
        files.push(absolute)
      }
      continue
    }

    for (const file of await walk(absolute)) {
      if (auditableExtensions.has(path.extname(file))) {
        files.push(file)
      }
    }
  }

  return [...new Set(files)]
}

function relative(target) {
  return path.relative(root, target).split(path.sep).join('/')
}

function excerpt(text, index, radius = 120) {
  return text.slice(Math.max(0, index - radius), Math.min(text.length, index + radius))
    .replace(/\s+/g, ' ')
    .trim()
}

function lineAt(text, index) {
  const start = text.lastIndexOf('\n', index - 1) + 1
  const next = text.indexOf('\n', index)
  return text.slice(start, next === -1 ? text.length : next).trim()
}

function isLikelyCommentLine(line) {
  return /^(?:\/\/|\/\*|\*|<!--|#(?!\s+\w))/u.test(line)
}

function isNegatedContext(context) {
  const patterns = [
    /\bnot\b.{0,80}\b(certified|available|in stock|a commercial offer|for sale|trusted by|market leader)\b/i,
    /\bdo not\b.{0,80}\b(buy now|order now|claim|state|imply|use)\b/i,
    /\bwithout\b.{0,60}\b(certification|evidence|availability)\b/i,
    /\bno\b.{0,40}\b(certification|warranty|availability|reviews|customers|partners)\b/i,
    /\bне\b.{0,80}\b(сертифікован|доступн|в наявності|комерційн|гарантован|партнер)\w*/iu,
    /\bне слід\b.{0,80}\b(писати|заявляти|використовувати)\b/iu,
    /\bбез\b.{0,60}\b(сертифікац|доказ|підтверджен)\w*/iu,
    /\bнемає\b.{0,60}\b(сертифікат|гаранті|відгук|клієнт|партнер)\w*/iu
  ]

  return patterns.some(pattern => pattern.test(context.toLowerCase()))
}

function flattenMessages(value, prefix = '', output = new Map()) {
  if (typeof value === 'string') {
    output.set(prefix, value)
    return output
  }

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return output
  }

  for (const [key, nested] of Object.entries(value)) {
    flattenMessages(nested, prefix ? `${prefix}.${key}` : key, output)
  }

  return output
}

async function loadMessages() {
  const output = new Map()

  for (const locale of locales) {
    const candidates = [
      path.join(root, 'i18n', 'locales', `${locale}.json`),
      path.join(root, 'locales', `${locale}.json`)
    ]

    for (const candidate of candidates) {
      if (!(await exists(candidate))) {
        continue
      }

      try {
        const parsed = JSON.parse(await readFile(candidate, 'utf8'))
        output.set(locale, flattenMessages(parsed))
      } catch {
        output.set(locale, new Map())
      }
      break
    }
  }

  return output
}

function referencedTranslationPrefixes(source) {
  const keys = new Set()
  const pattern = /(?:\$t|\bt)\(\s*['"`]([^'"`]+)['"`]/g

  for (const match of source.matchAll(pattern)) {
    const key = match[1]
    if (!key.includes('${')) {
      keys.add(key)
    }
  }

  return [...keys].map((key) => {
    const segments = key.split('.')
    return segments.length >= 3 ? segments.slice(0, 2).join('.') : segments[0]
  })
}

function localizedSourceText(source, messagesByLocale) {
  const prefixes = referencedTranslationPrefixes(source)
  const values = []

  for (const messages of messagesByLocale.values()) {
    for (const [key, value] of messages.entries()) {
      if (prefixes.some(prefix => key === prefix || key.startsWith(`${prefix}.`))) {
        values.push(value)
      }
    }
  }

  return values.join(' ')
}

function hasDisclosure(source, messagesByLocale) {
  const combined = `${source} ${localizedSourceText(source, messagesByLocale)}`
  return /concept|fictional|illustrative|концептуальн|вигадан|ілюстративн/iu.test(combined)
}

function isAvailableDocumentReference(text, index) {
  const start = Math.max(text.lastIndexOf('\n  - ', index), text.lastIndexOf('\n- ', index), text.lastIndexOf('\n{', index), 0)
  const ends = [text.indexOf('\n  - ', index + 1), text.indexOf('\n- ', index + 1), text.indexOf('\n}', index + 1)]
    .filter(value => value !== -1)
  const end = ends.length ? Math.min(...ends) : Math.min(text.length, index + 600)
  const block = text.slice(start, end)

  return !/available\s*:\s*false/i.test(block) && /available\s*:\s*true/i.test(block)
}

const result = {
  check: 'content-integrity',
  root,
  status: 'PASS',
  scanTargets,
  scannedFiles: [],
  productFiles: {},
  findings: []
}

const contentRoot = path.join(root, 'content', 'products')

for (const locale of locales) {
  result.productFiles[locale] = {}

  for (const product of requiredProducts) {
    const candidates = ['md', 'yml', 'yaml', 'json'].map(extension => path.join(contentRoot, locale, `${product.slug}.${extension}`))
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
      result.findings.push({ severity: 'HIGH', code: 'PRODUCT_SLUG_NOT_PRESENT', file: relative(found), slug: product.slug, message: `The file does not contain the expected slug "${product.slug}".` })
    }

    if (!/conceptProduct\s*:\s*true|concept product|концептуальн/iu.test(text)) {
      result.findings.push({ severity: 'HIGH', code: 'CONCEPT_MARKER_MISSING', file: relative(found), message: 'No concept-product marker was detected.' })
    }

    for (const variants of product.approvedGroups) {
      if (!variants.some(value => text.includes(value))) {
        result.findings.push({ severity: 'MEDIUM', code: 'APPROVED_VALUE_NOT_DETECTED', file: relative(found), slug: product.slug, acceptedVariants: variants, message: `No approved formatting variant was detected for: ${variants.join(' | ')}.` })
      }
    }
  }
}

const filesToScan = await collectAuditableFiles()
result.scannedFiles = filesToScan.map(relative)

for (const file of filesToScan) {
  const text = await readFile(file, 'utf8')
  const fileName = relative(file)

  for (const entry of forbiddenPatterns) {
    entry.pattern.lastIndex = 0
    for (const match of text.matchAll(entry.pattern)) {
      const line = lineAt(text, match.index)
      const context = excerpt(text, match.index)
      if (!isLikelyCommentLine(line) && !isNegatedContext(context)) {
        result.findings.push({ severity: 'HIGH', code: 'POTENTIAL_UNSUPPORTED_CLAIM', file: fileName, term: entry.label, excerpt: context, message: `Review user-facing use of "${entry.label}".` })
      }
    }
  }

  for (const entry of placeholderPatterns) {
    entry.pattern.lastIndex = 0
    for (const match of text.matchAll(entry.pattern)) {
      if (!isLikelyCommentLine(lineAt(text, match.index))) {
        result.findings.push({ severity: 'MEDIUM', code: 'PLACEHOLDER_DETECTED', file: fileName, term: entry.label, excerpt: excerpt(text, match.index), message: `Placeholder marker "${entry.label}" was detected in auditable project content.` })
      }
    }
  }

  for (const match of text.matchAll(/(?:url|href)\s*[:=]\s*["']?(\/documents\/[^"' \n]+)/g)) {
    if (!isAvailableDocumentReference(text, match.index)) {
      continue
    }

    const url = match[1].replace(/[),\]}]+$/, '')
    if (!(await exists(path.join(root, 'public', url.replace(/^\//, ''))))) {
      result.findings.push({ severity: 'HIGH', code: 'MISSING_AVAILABLE_DOCUMENT_TARGET', file: fileName, url, message: `Document is marked available but does not exist at public${url}.` })
    }
  }
}

const messagesByLocale = await loadMessages()
const disclosureGroups = [
  {
    label: 'footer',
    candidates: [
      'app/components/SiteFooter.vue',
      'app/components/layout/AppFooter.vue',
      'app/components/AppFooter.vue',
      'app/components/layout/TheFooter.vue',
      'app/components/TheFooter.vue'
    ]
  },
  {
    label: 'legal page',
    candidates: ['app/pages/legal.vue', 'pages/legal.vue']
  }
]

for (const group of disclosureGroups) {
  let target = null
  for (const candidate of group.candidates) {
    if (await exists(path.join(root, candidate))) {
      target = candidate
      break
    }
  }

  if (!target) {
    result.findings.push({ severity: 'BLOCKER', code: 'DISCLOSURE_TARGET_MISSING', message: `Required ${group.label} target was not found.` })
    continue
  }

  const source = await readFile(path.join(root, target), 'utf8')
  if (!hasDisclosure(source, messagesByLocale)) {
    result.findings.push({ severity: 'BLOCKER', code: 'DISCLOSURE_NOT_DETECTED', file: target, message: `Required concept disclosure was not detected in the ${group.label}, including referenced locale messages.` })
  }
}

if (result.findings.some(item => item.severity === 'BLOCKER' || item.severity === 'HIGH')) {
  result.status = 'FAIL'
} else if (result.findings.length) {
  result.status = 'WARN'
}

if (jsonOutput) {
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
} else {
  console.log(`content check: ${result.status}`)
  console.log(`root: ${root}`)
  console.log(`scanned files: ${result.scannedFiles.length}`)

  for (const locale of locales) {
    for (const product of requiredProducts) {
      const file = result.productFiles[locale][product.slug]
      console.log(`${file ? 'PASS' : 'MISS'} ${locale}/${product.slug}: ${file ?? 'not found'}`)
    }
  }

  if (!result.findings.length) {
    console.log('No content-integrity defects detected by the heuristic audit.')
  } else {
    for (const finding of result.findings) {
      const location = finding.file ? ` ${finding.file}` : ''
      console.log(`[${finding.severity}] ${finding.code}:${location} ${finding.message}`)
    }
  }
}

process.exitCode = result.status === 'FAIL' ? 1 : 0
