import { expect, test } from '@playwright/test'

test('renders Ukrainian and English home routes', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Автономна енергія')
  await expect(page.getByTestId('product-family-stage')).toBeVisible()
  await expect(page.getByTestId('portfolio-proof-strip')).toContainText('3 цільові формати')

  await page.goto('/en')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Independent power')
  await expect(page.getByTestId('portfolio-proof-strip')).toContainText('3 use-focused formats')
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

  const missingResponse = await page.request.get('/api/products/not-a-product?locale=uk')
  expect(missingResponse.status()).toBe(404)
})
