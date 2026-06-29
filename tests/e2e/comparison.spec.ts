import { expect, test } from '@playwright/test'

test('renders the localized semantic desktop comparison matrix', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/products/compare')

  await expect(page.getByRole('heading', { level: 1 })).toContainText('Порівняйте формати')

  const comparison = page.getByTestId('full-comparison')
  const table = comparison.getByTestId('full-comparison-table')
  const columns = comparison.getByTestId('full-comparison-column')

  await expect(table).toBeVisible()
  await expect(columns).toHaveCount(3)
  await expect(columns.nth(0)).toContainText('MAXIBUD PowerBox 2400')
  await expect(columns.nth(1)).toContainText('MAXIBUD HomeCore 5')
  await expect(columns.nth(2)).toContainText('MAXIBUD SiteHub 10')
  await expect(table.locator('tbody')).toHaveCount(4)
  await expect(table.locator('th[scope="row"]')).toHaveCount(12)
  await expect(table).toContainText('2,4 кВт·год корисної енергії')
  await expect(table).toContainText('Залежить від конфігурації')
  await expect(table).toContainText('Не передбачено')
  await expect(comparison.getByRole('link', { name: 'Отримати консультацію' })).toHaveAttribute('href', '/contact')
  await expect(comparison.getByRole('link', { name: 'Переглянути продукти' })).toHaveAttribute('href', '/products')

  await page.goto('/en/products/compare')

  const englishComparison = page.getByTestId('full-comparison')
  const englishTable = englishComparison.getByTestId('full-comparison-table')

  await expect(page.getByRole('heading', { level: 1 })).toContainText('Compare formats')
  await expect(englishTable).toContainText('5.12 kWh nominal energy per module')
  await expect(englishTable).toContainText('Configuration-dependent')
  await expect(englishTable).toContainText('Not available')
  await expect(englishComparison.getByRole('link', { name: 'Request consultation' })).toHaveAttribute('href', '/en/contact')
  await expect(englishComparison.getByRole('link', { name: 'View products' })).toHaveAttribute('href', '/en/products')
})

test('renders every product and group at 320 px without horizontal scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto('/products/compare')

  const comparison = page.getByTestId('full-comparison')
  const mobileProducts = comparison.getByTestId('full-comparison-mobile-product')

  await expect(comparison.getByTestId('full-comparison-table')).not.toBeVisible()
  await expect(mobileProducts).toHaveCount(3)
  await expect(mobileProducts.nth(0)).toContainText('MAXIBUD PowerBox 2400')
  await expect(mobileProducts.nth(1)).toContainText('MAXIBUD HomeCore 5')
  await expect(mobileProducts.nth(2)).toContainText('MAXIBUD SiteHub 10')

  for (const product of await mobileProducts.all()) {
    await expect(product.locator('section')).toHaveCount(4)
    await expect(product.locator('dt')).toHaveCount(12)
  }

  const hasHorizontalOverflow = await page.evaluate(() =>
    document.documentElement.scrollWidth > window.innerWidth + 1
  )

  expect(hasHorizontalOverflow).toBe(false)
})
