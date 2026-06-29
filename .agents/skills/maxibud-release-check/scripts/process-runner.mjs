import { spawn } from 'node:child_process'
import process from 'node:process'

function executableFor(command) {
  if (process.platform === 'win32' && ['pnpm', 'npm', 'yarn', 'bun'].includes(command)) {
    return `${command}.cmd`
  }

  return command
}

function formatCommand(command, args) {
  return [command, ...args]
    .map(part => /\s/u.test(part) ? JSON.stringify(part) : part)
    .join(' ')
}

export function runProcess(command, args, options = {}) {
  return new Promise((resolve) => {
    const executable = executableFor(command)
    const startedAt = Date.now()
    let settled = false
    let stdout = ''
    let stderr = ''

    const finish = payload => {
      if (!settled) {
        settled = true
        resolve(payload)
      }
    }

    const child = spawn(executable, args, {
      cwd: options.cwd,
      env: options.env ?? process.env,
      shell: false,
      windowsHide: true,
      stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit'
    })

    if (options.capture) {
      child.stdout.on('data', chunk => { stdout += chunk.toString() })
      child.stderr.on('data', chunk => { stderr += chunk.toString() })
    }

    child.on('error', error => finish({
      command: formatCommand(executable, args),
      exitCode: null,
      error: error.message,
      stdout,
      stderr,
      durationMs: Date.now() - startedAt
    }))

    child.on('close', exitCode => finish({
      command: formatCommand(executable, args),
      exitCode,
      stdout,
      stderr,
      durationMs: Date.now() - startedAt
    }))
  })
}
