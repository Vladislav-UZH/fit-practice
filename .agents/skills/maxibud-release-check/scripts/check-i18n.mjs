#!/usr/bin/env node

import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const rootArg = args.find(arg => !arg.startsWith('--')) ?? '.'
const root = path.resolve(rootArg)
const jsonOutput = args.includes('--json')

async function exists(target) {
  try {
    await access(target)
    return true
  } catch {
    return false
  }
}

async function findLocaleFile(locale) {
  const candidates = [
    `i18n/locales/${locale}.json`,
    `locales/${locale}.json`,
    `app/locales/${locale}.json`,
    `i18n/${locale}.json`
  ]

  for (const relative of candidates) {
    const absolute = path.join(root, relative)
    if (await exists(absolute)) {
      return { relative, absolute }
    }
  }

  return null
}

function flatten(value, prefix = '', output = new Map()) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      const key = prefix ? `${prefix}.${index}` : String(index)
      flatten(item, key, output)
    })
    return output
  }

  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${key}` : key
      flatten(child, next, output)
    }
    return output
  }

  output.set(prefix, value)
  return output
}

async function parseJson(file) {
  try {
    const text = await readFile(file.absolute, 'utf8')
    return {
      ok: true,
      data: JSON.parse(text),
      text
    }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

const result = {
  check: 'i18n',
  root,
  status: 'PASS',
  files: {},
  findings: []
}

const ukFile = await findLocaleFile('uk')
const enFile = await findLocaleFile('en')

result.files.uk = ukFile?.relative ?? null
result.files.en = enFile?.relative ?? null

if (!ukFile) {
  result.findings.push({
    severity: 'BLOCKER',
    code: 'UK_LOCALE_MISSING',
    message: 'Ukrainian locale JSON file was not found.'
  })
}

if (!enFile) {
  result.findings.push({
    severity: 'BLOCKER',
    code: 'EN_LOCALE_MISSING',
    message: 'English locale JSON file was not found.'
  })
}

if (ukFile && enFile) {
  const [ukParsed, enParsed] = await Promise.all([
    parseJson(ukFile),
    parseJson(enFile)
  ])

  if (!ukParsed.ok) {
    result.findings.push({
      severity: 'BLOCKER',
      code: 'UK_LOCALE_INVALID_JSON',
      message: ukParsed.error
    })
  }

  if (!enParsed.ok) {
    result.findings.push({
      severity: 'BLOCKER',
      code: 'EN_LOCALE_INVALID_JSON',
      message: enParsed.error
    })
  }

  if (ukParsed.ok && enParsed.ok) {
    const uk = flatten(ukParsed.data)
    const en = flatten(enParsed.data)

    for (const key of uk.keys()) {
      if (!en.has(key)) {
        result.findings.push({
          severity: 'HIGH',
          code: 'KEY_MISSING_IN_EN',
          key,
          message: `Translation key "${key}" exists in Ukrainian but not English.`
        })
      }
    }

    for (const key of en.keys()) {
      if (!uk.has(key)) {
        result.findings.push({
          severity: 'HIGH',
          code: 'KEY_MISSING_IN_UK',
          key,
          message: `Translation key "${key}" exists in English but not Ukrainian.`
        })
      }
    }

    for (const [locale, map] of [['uk', uk], ['en', en]]) {
      for (const [key, value] of map.entries()) {
        if (typeof value === 'string' && value.trim() === '') {
          result.findings.push({
            severity: 'MEDIUM',
            code: 'EMPTY_TRANSLATION',
            locale,
            key,
            message: `Translation key "${key}" is empty in ${locale}.`
          })
        }
      }
    }
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
  console.log(`i18n check: ${result.status}`)
  console.log(`root: ${root}`)
  console.log(`uk: ${result.files.uk ?? 'not found'}`)
  console.log(`en: ${result.files.en ?? 'not found'}`)

  if (result.findings.length === 0) {
    console.log('No translation-key defects detected.')
  } else {
    for (const finding of result.findings) {
      console.log(`[${finding.severity}] ${finding.code}: ${finding.message}`)
    }
  }
}

process.exitCode = result.status === 'FAIL' ? 1 : 0
