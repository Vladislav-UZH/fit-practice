import { expect, test } from '@playwright/test'

test('technology page renders complete Ukrainian and English content', async ({ page }) => {
  await page.goto('/technology')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Спільні принципи без вигаданої універсальності')
  await expect(page.getByTestId('technology-page-principle')).toHaveCount(4)
  await expect(page.getByTestId('technology-format')).toHaveCount(3)
  await expect(page.getByTestId('technology-page-diagram')).toHaveAttribute('role', 'img')
  await expect(page.getByText('Схема показує інформаційну модель портфеля.')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Переглянути продукти' })).toHaveAttribute('href', '/products')
  await expect(page.getByRole('link', { name: 'Порівняти системи' })).toHaveAttribute('href', '/products/compare')

  await page.goto('/en/technology')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Shared principles without invented universality')
  await expect(page.getByTestId('technology-page-principle')).toHaveCount(4)
  await expect(page.getByTestId('technology-format')).toHaveCount(3)
  await expect(page.getByText('The diagram presents the portfolio information model.')).toBeVisible()
  await expect(page.getByRole('link', { name: 'View products' })).toHaveAttribute('href', '/en/products')
  await expect(page.getByRole('link', { name: 'Compare systems' })).toHaveAttribute('href', '/en/products/compare')
})

test('about page renders verified project context in both locales', async ({ page }) => {
  await page.goto('/about')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Навчальний продуктовий сайт із повним технічним контуром')
  await expect(page.getByTestId('about-capability')).toHaveCount(4)
  await expect(page.getByTestId('about-process-step')).toHaveCount(4)
  await expect(page.getByText('Програмний проєкт, а не історія виробника')).toBeVisible()
  await expect(page.getByText('Немає цін, кошика, оплати')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Отримати консультацію' })).toHaveAttribute('href', '/contact')
  await expect(page.getByRole('link', { name: 'Правова інформація' })).toHaveAttribute('href', '/legal')

  await page.goto('/en/about')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('An educational product site with a complete technical flow')
  await expect(page.getByTestId('about-capability')).toHaveCount(4)
  await expect(page.getByTestId('about-process-step')).toHaveCount(4)
  await expect(page.getByText('A software project, not a manufacturer history')).toBeVisible()
  await expect(page.getByText('No pricing, cart, payment')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Request consultation' })).toHaveAttribute('href', '/en/contact')
  await expect(page.getByRole('link', { name: 'Legal' })).toHaveAttribute('href', '/en/legal')
})

test('information pages remain stable at 320 pixels', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })

  for (const path of ['/technology', '/about', '/en/technology', '/en/about']) {
    await page.goto(path)
    await expect(page.locator('h1')).toHaveCount(1)

    const hasHorizontalOverflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    )

    expect(hasHorizontalOverflow).toBe(false)
  }
})
