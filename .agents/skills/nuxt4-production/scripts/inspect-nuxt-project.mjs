#!/usr/bin/env node

import { access, readFile, readdir, stat } from 'node:fs/promises'
import { constants } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = path.resolve(process.argv[2] ?? process.cwd())

async function exists(target) {
  try {
    await access(target, constants.F_OK)
    return true
  } catch {
    return false
  }
}

async function readJson(target) {
  try {
    return JSON.parse(await readFile(target, 'utf8'))
  } catch (error) {
    return {
      __error: error instanceof Error ? error.message : String(error)
    }
  }
}

function pickDependencies(packageJson) {
  const all = {
    ...(packageJson.dependencies ?? {}),
    ...(packageJson.devDependencies ?? {})
  }

  const relevantNames = [
    'nuxt',
    'vue',
    'typescript',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/test-utils',
    'vitest',
    '@playwright/test',
    'playwright',
    'zod',
    'eslint',
    '@nuxt/eslint'
  ]

  return Object.fromEntries(
    relevantNames
      .filter(name => all[name])
      .map(name => [name, all[name]])
  )
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

async function listExisting(relativePaths) {
  const result = {}

  for (const relativePath of relativePaths) {
    result[relativePath] = await exists(path.join(root, relativePath))
  }

  return result
}

async function countFiles(relativeDirectory) {
  const absoluteDirectory = path.join(root, relativeDirectory)

  if (!(await exists(absoluteDirectory))) {
    return null
  }

  let count = 0

  async function walk(directory) {
    const entries = await readdir(directory, { withFileTypes: true })

    for (const entry of entries) {
      const target = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        if (['node_modules', '.nuxt', '.output', '.git'].includes(entry.name)) {
          continue
        }

        await walk(target)
      } else if (entry.isFile()) {
        count += 1
      }
    }
  }

  await walk(absoluteDirectory)
  return count
}

const packageJsonPath = path.join(root, 'package.json')
const packageJsonExists = await exists(packageJsonPath)
const packageJson = packageJsonExists ? await readJson(packageJsonPath) : {}

const packageManagers = await detectPackageManager()
const paths = await listExisting([
  'AGENTS.md',
  'AGENTS.override.md',
  'nuxt.config.ts',
  'nuxt.config.js',
  'app.config.ts',
  'content.config.ts',
  'tsconfig.json',
  'eslint.config.mjs',
  'eslint.config.js',
  'vitest.config.ts',
  'vitest.config.mts',
  'playwright.config.ts',
  'app',
  'app/pages',
  'app/layouts',
  'app/components',
  'app/composables',
  'content',
  'server',
  'shared',
  'public',
  'test',
  'tests'
])

const report = {
  root,
  packageJson: {
    exists: packageJsonExists,
    name: packageJson.name ?? null,
    private: packageJson.private ?? null,
    type: packageJson.type ?? null,
    engines: packageJson.engines ?? null,
    packageManagerField: packageJson.packageManager ?? null,
    scripts: packageJson.scripts ?? {},
    relevantDependencies: pickDependencies(packageJson),
    parseError: packageJson.__error ?? null
  },
  lockfiles: packageManagers,
  warnings: [],
  paths,
  fileCounts: {
    app: await countFiles('app'),
    content: await countFiles('content'),
    server: await countFiles('server'),
    shared: await countFiles('shared'),
    test: (await countFiles('test')) ?? (await countFiles('tests'))
  }
}

if (!packageJsonExists) {
  report.warnings.push('package.json is missing')
}

if (packageManagers.length === 0) {
  report.warnings.push('No supported lockfile detected')
}

if (packageManagers.length > 1) {
  report.warnings.push('Multiple package-manager lockfiles detected')
}

if (!report.packageJson.relevantDependencies.nuxt) {
  report.warnings.push('Nuxt dependency not detected in package.json')
}

if (!paths['nuxt.config.ts'] && !paths['nuxt.config.js']) {
  report.warnings.push('Nuxt configuration file not detected')
}

if (paths.content && !paths['content.config.ts']) {
  report.warnings.push('content/ exists without content.config.ts; verify whether implicit content import is intentional')
}

if (paths['app/pages'] && !paths.app) {
  report.warnings.push('Unexpected pages path state detected')
}

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
