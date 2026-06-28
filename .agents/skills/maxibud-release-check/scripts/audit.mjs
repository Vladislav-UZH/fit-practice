#!/usr/bin/env node

import { access, readFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const rootArg = args.find(arg => !arg.startsWith('--')) ?? '.'
const root = path.resolve(rootArg)
const jsonOutput = args.includes('--json')
const runProjectChecks = args.includes('--run-project-checks')
const skipE2E = args.includes('--skip-e2e')

const thisFile = fileURLToPath(import.meta.url)
const scriptsDirectory = path.dirname(thisFile)

async function exists(target) {
  try {
    await access(target)
    return true
  } catch {
    return false
  }
}

async function readPackageJson() {
  const target = path.join(root, 'package.json')
  if (!(await exists(target))) {
    return null
  }

  try {
    return JSON.parse(await readFile(target, 'utf8'))
  } catch {
    return null
  }
}

async function detectPackageManager() {
  const candidates = [
    ['pnpm', 'pnpm-lock.yaml'],
    ['npm', 'package-lock.json'],
    ['yarn', 'yarn.lock'],
    ['bun', 'bun.lock'],
    ['bun', 'bun.lockb']
  ]

  const found = []

  for (const [manager, file] of candidates) {
    if (await exists(path.join(root, file))) {
      found.push({ manager, file })
    }
  }

  return found
}

function run(command, commandArgs, options = {}) {
  return new Promise(resolve => {
    const startedAt = Date.now()
    const child = spawn(command, commandArgs, {
      cwd: root,
      env: process.env,
      shell: process.platform === 'win32',
      stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit'
    })

    let stdout = ''
    let stderr = ''

    if (options.capture) {
      child.stdout.on('data', chunk => {
        stdout += chunk.toString()
      })

      child.stderr.on('data', chunk => {
        stderr += chunk.toString()
      })
    }

    child.on('error', error => {
      resolve({
        command: [command, ...commandArgs].join(' '),
        exitCode: null,
        error: error.message,
        stdout,
        stderr,
        durationMs: Date.now() - startedAt
      })
    })

    child.on('close', code => {
      resolve({
        command: [command, ...commandArgs].join(' '),
        exitCode: code,
        stdout,
        stderr,
        durationMs: Date.now() - startedAt
      })
    })
  })
}

const packageJson = await readPackageJson()
const managers = await detectPackageManager()
const report = {
  check: 'maxibud-release-audit',
  root,
  status: 'PASS',
  packageManager: managers,
  warnings: [],
  staticChecks: [],
  projectChecks: []
}

if (!packageJson) {
  report.warnings.push('package.json is missing or invalid.')
  report.status = 'FAIL'
}

if (managers.length === 0) {
  report.warnings.push('No supported lockfile detected.')
  report.status = 'FAIL'
}

if (managers.length > 1) {
  report.warnings.push('Multiple package-manager lockfiles detected.')
  report.status = 'FAIL'
}

const staticScripts = [
  'check-content.mjs',
  'check-routes.mjs',
  'check-i18n.mjs'
]

for (const script of staticScripts) {
  const result = await run(
    process.execPath,
    [path.join(scriptsDirectory, script), root, '--json'],
    { capture: true }
  )

  let parsed = null
  try {
    parsed = JSON.parse(result.stdout)
  } catch {
    parsed = {
      check: script,
      status: 'FAIL',
      findings: [{
        severity: 'BLOCKER',
        code: 'SCRIPT_OUTPUT_INVALID',
        message: result.stderr || 'The script did not return valid JSON.'
      }]
    }
  }

  report.staticChecks.push({
    script,
    exitCode: result.exitCode,
    durationMs: result.durationMs,
    result: parsed
  })

  if (result.exitCode !== 0 || parsed.status === 'FAIL') {
    report.status = 'FAIL'
  } else if (parsed.status === 'WARN' && report.status === 'PASS') {
    report.status = 'WARN'
  }
}

if (runProjectChecks && packageJson && managers.length === 1) {
  const manager = managers[0].manager
  const availableScripts = packageJson.scripts ?? {}
  const desired = ['lint', 'typecheck', 'test', 'test:e2e', 'build']

  for (const script of desired) {
    if (skipE2E && script === 'test:e2e') {
      report.projectChecks.push({
        script,
        status: 'SKIPPED',
        reason: '--skip-e2e'
      })
      continue
    }

    if (!availableScripts[script]) {
      report.projectChecks.push({
        script,
        status: 'SKIPPED',
        reason: 'script not defined in package.json'
      })
      continue
    }

    const commandArgs = manager === 'npm'
      ? ['run', script]
      : ['run', script]

    const result = await run(manager, commandArgs)

    report.projectChecks.push({
      script,
      command: result.command,
      exitCode: result.exitCode,
      durationMs: result.durationMs,
      status: result.exitCode === 0 ? 'PASS' : 'FAIL',
      error: result.error ?? null
    })

    if (result.exitCode !== 0) {
      report.status = 'FAIL'
    }
  }
}

if (jsonOutput) {
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
} else {
  console.log(`MAXIBUD release audit: ${report.status}`)
  console.log(`root: ${root}`)

  if (report.packageManager.length === 1) {
    console.log(`package manager: ${report.packageManager[0].manager} (${report.packageManager[0].file})`)
  }

  for (const warning of report.warnings) {
    console.log(`[WARNING] ${warning}`)
  }

  console.log('\nStatic checks:')
  for (const check of report.staticChecks) {
    console.log(`- ${check.script}: ${check.result.status} (${check.durationMs} ms)`)
    for (const finding of check.result.findings ?? []) {
      console.log(`  [${finding.severity}] ${finding.code}: ${finding.message}`)
    }
  }

  if (runProjectChecks) {
    console.log('\nProject checks:')
    for (const check of report.projectChecks) {
      console.log(`- ${check.script}: ${check.status}${check.reason ? ` (${check.reason})` : ''}`)
    }
  } else {
    console.log('\nProject checks were not executed. Use --run-project-checks to run available package scripts.')
  }
}

process.exitCode = report.status === 'FAIL' ? 1 : 0
