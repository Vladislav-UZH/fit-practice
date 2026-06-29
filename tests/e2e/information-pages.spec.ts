import { expect, test } from '@playwright/test'

const routes = [
  {
    path: '/technology',
    heading: 'Спільні принципи платформи без вигаданих інженерних обіцянок',
    disclosure: 'Матеріал описує навчальну концепцію портфеля',
    principles: 'technology-page-principle',
    items: 'technology-format'
  },
  {
    path: '/en/technology',
    heading: 'Shared platform principles without invented engineering promises',
    disclosure: 'The material describes an educational portfolio concept',
    principles: 'technology-page-principle',
    items: 'technology-format'
  },
  {
    path: '/about',
    heading: 'Двомовна інформаційна вебсистема для концептуальної продуктової лінійки',
    disclosure: 'Сторінка описує програмний проєкт',
    principles: 'about-goal',
    items: 'about-quality-item'
  },
  {
    path: '/en/about',
    heading: 'A bilingual information website for a conceptual product portfolio',
    disclosure: 'This page describes the software project',
    principles: 'about-goal',
    items: 'about-quality-item'
  }
]

for (const route of routes) {
  test(`${route.path} renders complete localized informational content`, async ({ page }) => {
    await page.goto(route.path)

    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toContainText(route.heading)
    await expect(page.getByText(route.disclosure, { exact: false })).toBeVisible()
    await expect(page.getByTestId(route.principles)).toHaveCount(route.path.includes('technology') ? 3 : 4)
    await expect(page.getByTestId(route.items)).toHaveCount(3)
    await expect(page.locator('main')).toHaveCount(1)
  })
}

test('technology diagram exposes one accessible image label', async ({ page }) => {
  await page.goto('/technology')
  const diagram = page.getByTestId('technology-page-diagram')

  await expect(diagram).toHaveAttribute('role', 'img')
  await expect(diagram).toHaveAttribute('aria-label', /LiFePO4/)
})

for (const path of ['/technology', '/en/technology', '/about', '/en/about']) {
  test(`${path} has no horizontal overflow at 320px`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 })
    await page.goto(path)

    const widths = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth
    }))

    expect(widths.scrollWidth).toBeLessThanOrEqual(widths.clientWidth)
  })
}
