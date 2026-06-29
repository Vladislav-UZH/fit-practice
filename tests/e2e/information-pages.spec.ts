import { expect, test, type Page } from '@playwright/test'

async function mobileLayoutDiagnostics(page: Page) {
  return page.evaluate(() => {
    const clientWidth = document.documentElement.clientWidth
    const scrollWidth = document.documentElement.scrollWidth
    const root = document.querySelector<HTMLElement>('[data-testid="technology-page"], [data-testid="about-page"]')

    const offenders = Array.from(document.querySelectorAll<HTMLElement>('body *'))
      .map((element) => {
        const rect = element.getBoundingClientRect()
        return {
          tag: element.tagName.toLowerCase(),
          className: typeof element.className === 'string' ? element.className : '',
          testId: element.dataset.testid ?? '',
          text: (element.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80),
          left: Math.round(rect.left * 10) / 10,
          right: Math.round(rect.right * 10) / 10,
          width: Math.round(rect.width * 10) / 10
        }
      })
      .filter(item => item.width > 0 && (item.left < -1 || item.right > clientWidth + 1))
      .sort((a, b) => b.right - a.right)
      .slice(0, 12)

    const sectionImpact = root
      ? Array.from(root.children).map((child, index) => {
          const element = child as HTMLElement
          const previousDisplay = element.style.display
          element.style.display = 'none'
          const widthWithoutSection = document.documentElement.scrollWidth
          element.style.display = previousDisplay

          return {
            index,
            tag: element.tagName.toLowerCase(),
            className: element.className,
            heading: element.querySelector('h1, h2')?.textContent?.trim().slice(0, 80) ?? '',
            widthWithoutSection
          }
        })
      : []

    const activeElement = document.activeElement as HTMLElement | null
    const active = activeElement
      ? {
          tag: activeElement.tagName.toLowerCase(),
          className: activeElement.className,
          text: (activeElement.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80)
        }
      : null

    const initialScrollX = window.scrollX
    window.scrollTo({ left: Math.max(0, scrollWidth - clientWidth), behavior: 'instant' })
    const rightEdgeHits = Array.from({ length: 16 }, (_, index) => 24 + index * 44)
      .map(y => document.elementFromPoint(clientWidth - 1, Math.min(y, window.innerHeight - 1)) as HTMLElement | null)
      .filter((element): element is HTMLElement => Boolean(element))
      .map(element => ({
        tag: element.tagName.toLowerCase(),
        className: element.className,
        testId: element.dataset.testid ?? '',
        text: (element.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80)
      }))
      .filter((item, index, items) => items.findIndex(candidate => JSON.stringify(candidate) === JSON.stringify(item)) === index)
    window.scrollTo({ left: initialScrollX, behavior: 'instant' })

    return { clientWidth, scrollWidth, offenders, sectionImpact, active, rightEdgeHits }
  })
}

test('technology page renders complete Ukrainian and English content', async ({ page }) => {
  await page.goto('/technology')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Спільні принципи без вигаданої універсальності')
  await expect(page.getByTestId('technology-page-principle')).toHaveCount(4)
  await expect(page.getByTestId('technology-format')).toHaveCount(3)
  await expect(page.getByTestId('technology-page-diagram')).toHaveAttribute('role', 'img')
  await expect(page.getByText('Схема показує інформаційну модель портфеля.')).toBeVisible()
  await expect(page.getByTestId('technology-page').getByRole('link', { name: 'Переглянути продукти' })).toHaveAttribute('href', '/products')
  await expect(page.getByTestId('technology-page').getByRole('link', { name: 'Порівняти системи' })).toHaveAttribute('href', '/products/compare')

  await page.goto('/en/technology')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Shared principles without invented universality')
  await expect(page.getByTestId('technology-page-principle')).toHaveCount(4)
  await expect(page.getByTestId('technology-format')).toHaveCount(3)
  await expect(page.getByText('The diagram presents the portfolio information model.')).toBeVisible()
  await expect(page.getByTestId('technology-page').getByRole('link', { name: 'View products' })).toHaveAttribute('href', '/en/products')
  await expect(page.getByTestId('technology-page').getByRole('link', { name: 'Compare systems' })).toHaveAttribute('href', '/en/products/compare')
})

test('about page renders verified project context in both locales', async ({ page }) => {
  await page.goto('/about')

  const aboutPage = page.getByTestId('about-page')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Навчальний продуктовий сайт із повним технічним контуром')
  await expect(page.getByTestId('about-capability')).toHaveCount(4)
  await expect(page.getByTestId('about-process-step')).toHaveCount(4)
  await expect(page.getByText('Програмний проєкт, а не історія виробника')).toBeVisible()
  await expect(page.getByText('Немає цін, кошика, оплати')).toBeVisible()
  await expect(aboutPage.getByRole('link', { name: 'Отримати консультацію' })).toHaveAttribute('href', '/contact')
  await expect(aboutPage.getByRole('link', { name: 'Правова інформація' })).toHaveAttribute('href', '/legal')

  await page.goto('/en/about')

  const englishAboutPage = page.getByTestId('about-page')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('An educational product site with a complete technical flow')
  await expect(page.getByTestId('about-capability')).toHaveCount(4)
  await expect(page.getByTestId('about-process-step')).toHaveCount(4)
  await expect(page.getByText('A software project, not a manufacturer history')).toBeVisible()
  await expect(page.getByText('No pricing, cart, payment')).toBeVisible()
  await expect(englishAboutPage.getByRole('link', { name: 'Request consultation' })).toHaveAttribute('href', '/en/contact')
  await expect(englishAboutPage.getByRole('link', { name: 'Legal' })).toHaveAttribute('href', '/en/legal')
})

test('information pages remain stable at 320 pixels after hydration', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })

  for (const path of ['/technology', '/about', '/en/technology', '/en/about']) {
    await page.goto(path)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('button', { name: /Відкрити меню|Open menu/ })).toBeEnabled()

    const diagnostics = await mobileLayoutDiagnostics(page)
    expect(
      diagnostics.scrollWidth,
      `${path} layout diagnostics: ${JSON.stringify(diagnostics, null, 2)}`
    ).toBeLessThanOrEqual(diagnostics.clientWidth + 1)
  }
})
