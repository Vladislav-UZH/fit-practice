import { expect, test } from '@playwright/test'

test('renders Ukrainian and English home routes', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Автономна енергія')
  await expect(page.getByText('MAXIBUD ENERGY', { exact: false }).first()).toBeVisible()

  await page.goto('/en')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Independent power')
})

test('renders localized product data and returns an intentional 404', async ({ page }) => {
  await page.goto('/products/powerbox-2400')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('MAXIBUD PowerBox 2400')
  await expect(page.getByText('Концептуальний продукт')).toBeVisible()

  const missingResponse = await page.request.get('/api/products/not-a-product?locale=uk')
  expect(missingResponse.status()).toBe(404)
})
