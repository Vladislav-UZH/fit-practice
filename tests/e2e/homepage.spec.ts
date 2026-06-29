import { expect, test } from '@playwright/test'

test('renders Ukrainian and English home routes', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Автономна енергія')
  await expect(page.getByTestId('product-family-stage')).toBeVisible()
  await expect(page.getByTestId('portfolio-proof-strip')).toContainText('3 цільові формати')
  await expect(page.getByTestId('product-lineup-chapter')).toHaveCount(3)
  await expect(page.getByTestId('use-case-recommendation')).toContainText('Почніть із робочого контексту')

  await page.goto('/en')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Independent power')
  await expect(page.getByTestId('portfolio-proof-strip')).toContainText('3 use-focused formats')
  await expect(page.getByTestId('product-lineup-chapter')).toHaveCount(3)
  await expect(page.getByTestId('use-case-recommendation')).toContainText('Start with the working context')
})

test('renders a difference-first product lineup in portfolio order', async ({ page }) => {
  await page.goto('/')

  const chapters = page.getByTestId('product-lineup-chapter')
  await expect(chapters).toHaveCount(3)
  await expect(chapters.nth(0).getByRole('heading', { level: 3 })).toHaveText('MAXIBUD PowerBox 2400')
  await expect(chapters.nth(1).getByRole('heading', { level: 3 })).toHaveText('MAXIBUD HomeCore 5')
  await expect(chapters.nth(2).getByRole('heading', { level: 3 })).toHaveText('MAXIBUD SiteHub 10')
  await expect(chapters.nth(0)).toContainText('Найкомпактніший формат лінійки')
  await expect(chapters.nth(1)).toContainText('5,12–20,48 кВт·год')
  await expect(chapters.nth(2)).toContainText('Колісний · 118 кг')

  await page.goto('/en')
  await expect(page.getByTestId('product-lineup-chapter').nth(0)).toContainText('The most compact format in the portfolio')
  await expect(page.getByTestId('product-lineup-chapter').nth(1)).toContainText('Stationary · modular')
  await expect(page.getByTestId('product-lineup-chapter').nth(2)).toContainText('The highest-output transportable format')
})

test('use-case tabs support keyboard navigation without panel layout shift', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  const section = page.getByTestId('use-case-recommendation')
  const tabs = section.getByRole('tab')
  const panel = section.getByRole('tabpanel')

  await expect(tabs).toHaveCount(3)
  await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true')
  await expect(panel).toContainText('MAXIBUD HomeCore 5')

  const initialHeight = await panel.evaluate(element => element.getBoundingClientRect().height)

  await tabs.nth(0).focus()
  await page.keyboard.press('ArrowRight')
  await expect(tabs.nth(1)).toBeFocused()
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
  await expect(panel).toContainText('MAXIBUD PowerBox 2400')

  await page.keyboard.press('End')
  await expect(tabs.nth(2)).toBeFocused()
  await expect(panel).toContainText('MAXIBUD SiteHub 10')

  const finalHeight = await panel.evaluate(element => element.getBoundingClientRect().height)
  expect(Math.abs(finalHeight - initialHeight)).toBeLessThan(2)
})

test('mobile recommendation exposes every use case without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto('/')

  const section = page.getByTestId('use-case-recommendation')
  const cards = section.getByTestId('use-case-mobile-card')

  await expect(cards).toHaveCount(3)
  await expect(cards.nth(0)).toContainText('MAXIBUD HomeCore 5')
  await expect(cards.nth(1)).toContainText('MAXIBUD PowerBox 2400')
  await expect(cards.nth(2)).toContainText('MAXIBUD SiteHub 10')
  await expect(section.getByRole('tablist')).not.toBeVisible()

  const hasHorizontalOverflow = await page.evaluate(() =>
    document.documentElement.scrollWidth > window.innerWidth + 1
  )

  expect(hasHorizontalOverflow).toBe(false)
})

test('mobile menu opens, closes with Escape, and restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const trigger = page.getByRole('button', { name: 'Відкрити меню' })
  await trigger.click()

  const navigation = page.getByRole('navigation', { name: 'Мобільна навігація' })
  await expect(navigation).toBeVisible()
  await expect(navigation.getByRole('link', { name: 'Продукти' })).toBeVisible()

  await page.keyboard.press('Escape')
  await expect(navigation).not.toBeVisible()
  await expect(trigger).toBeFocused()
})

test('renders localized product data and returns an intentional 404', async ({ page }) => {
  await page.goto('/products/powerbox-2400')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('MAXIBUD PowerBox 2400')
  await expect(page.getByText('Концептуальний продукт')).toBeVisible()

  const productResponse = await page.request.get('/api/products?locale=en')
  expect(productResponse.status()).toBe(200)
  const productList = await productResponse.json()
  expect(productList[0].lineup.comparison.capacity).toBe('2.4 kWh')

  const missingResponse = await page.request.get('/api/products/not-a-product?locale=uk')
  expect(missingResponse.status()).toBe(404)
})
