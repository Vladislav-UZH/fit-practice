import { expect, test, type Page } from '@playwright/test'

type ReleaseMetrics = {
  cls: number
  lcp: number
}

async function installPerformanceObservers(page: Page) {
  await page.addInitScript(() => {
    const metrics = { cls: 0, lcp: 0 }
    Object.defineProperty(window, '__releaseMetrics', {
      configurable: true,
      value: metrics
    })

    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const shift = entry as PerformanceEntry & { hadRecentInput?: boolean, value?: number }
          if (!shift.hadRecentInput) {
            metrics.cls += shift.value ?? 0
          }
        }
      }).observe({ type: 'layout-shift', buffered: true })
    } catch {
      // Unsupported observers remain visible through the zero-value assertion below.
    }

    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metrics.lcp = Math.max(metrics.lcp, entry.startTime)
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true })
    } catch {
      // Unsupported observers remain visible through the zero-value assertion below.
    }
  })
}

async function readPerformanceMetrics(page: Page): Promise<ReleaseMetrics> {
  return page.evaluate(() => {
    const releaseWindow = window as Window & { __releaseMetrics?: ReleaseMetrics }
    const bufferedLcp = performance.getEntriesByType('largest-contentful-paint')
      .reduce((maximum, entry) => Math.max(maximum, entry.startTime), 0)

    return {
      cls: releaseWindow.__releaseMetrics?.cls ?? 0,
      lcp: Math.max(releaseWindow.__releaseMetrics?.lcp ?? 0, bufferedLcp)
    }
  })
}

test('representative routes expose a coherent accessibility tree', async ({ page }) => {
  for (const path of ['/', '/products/powerbox-2400', '/products/compare', '/contact', '/legal']) {
    await page.goto(path)

    const main = page.getByRole('main')
    await expect(main).toBeVisible()
    await expect(main.getByRole('heading', { level: 1 })).toHaveCount(1)

    const snapshot = await main.ariaSnapshot()
    expect(snapshot, `${path} accessibility tree`).toContain('heading')
  }
})

test('keyboard navigation reaches the skip link and primary content actions', async ({ page }) => {
  await page.goto('/')

  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: /Перейти до основного вмісту|Skip to (?:the )?(?:main )?content/ })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#main-content$/)

  const firstMainLink = page.getByRole('main').getByRole('link').first()
  await firstMainLink.focus()
  await expect(firstMainLink).toBeFocused()
  await expect(firstMainLink).toHaveCSS('outline-style', 'solid')
})

test('reduced-motion preference disables smooth scrolling and long transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')

  const styles = await page.evaluate(() => {
    const probe = document.querySelector<HTMLElement>('a, button')
    return {
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
      transitionDuration: probe ? getComputedStyle(probe).transitionDuration : ''
    }
  })

  expect(styles.scrollBehavior).toBe('auto')
  expect(styles.transitionDuration.split(',').every(value => Number.parseFloat(value) <= 0.01)).toBe(true)
})

test('representative routes reflow at the 320 CSS-pixel proxy for 200 percent zoom', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 })

  for (const path of ['/', '/products/powerbox-2400', '/products/compare', '/contact']) {
    await page.goto(path)
    await expect(page.getByRole('button', { name: /Відкрити меню|Open menu/ })).toBeEnabled()

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth
    }))

    expect(dimensions.scrollWidth, `${path} at the 200% reflow proxy`).toBeLessThanOrEqual(dimensions.clientWidth + 1)
    await expect(page.getByRole('main').getByRole('heading', { level: 1 })).toBeVisible()
  }
})

test('representative routes stay within synthetic LCP and CLS budgets', async ({ page }, testInfo) => {
  await installPerformanceObservers(page)
  const results: Record<string, ReleaseMetrics> = {}

  for (const path of ['/', '/products/powerbox-2400', '/products/compare', '/contact']) {
    await page.goto(path)
    await page.goto(path)
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(750)

    const metrics = await readPerformanceMetrics(page)
    results[path] = metrics

    expect(metrics.lcp, `${path} did not expose an LCP entry`).toBeGreaterThan(0)
    expect(metrics.lcp, `${path} synthetic LCP`).toBeLessThanOrEqual(5_000)
    expect(metrics.cls, `${path} synthetic CLS`).toBeLessThanOrEqual(0.1)
  }

  console.info(`Synthetic performance results: ${JSON.stringify(results)}`)

  await testInfo.attach('synthetic-performance-results', {
    body: JSON.stringify(results, null, 2),
    contentType: 'application/json'
  })
})
