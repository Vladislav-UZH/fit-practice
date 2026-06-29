import { expect, test } from '@playwright/test'

test('renders Ukrainian and English home routes', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Автономна енергія')
  await expect(page.getByTestId('product-family-stage')).toBeVisible()
  await expect(page.getByTestId('portfolio-proof-strip')).toContainText('3 цільові формати')
  await expect(page.getByTestId('product-lineup-chapter')).toHaveCount(3)

  await page.goto('/en')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Independent power')
  await expect(page.getByTestId('portfolio-proof-strip')).toContainText('3 use-focused formats')
  await expect(page.getByTestId('product-lineup-chapter')).toHaveCount(3)
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

test('product lineup fits a 320 pixel viewport without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto('/')

  await expect(page.getByTestId('product-lineup-chapter')).toHaveCount(3)

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
