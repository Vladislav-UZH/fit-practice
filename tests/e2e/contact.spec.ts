import { expect, test, type Page } from '@playwright/test'

const validEnglishRequest = {
  locale: 'en',
  name: 'API User',
  email: 'api.user@example.com',
  phone: '',
  company: '',
  product: 'powerbox-2400',
  inquiryType: 'consultation',
  message: 'This is a valid demonstration request sent through the API.',
  consent: true,
  website: ''
}

async function fillUkrainianForm(page: Page) {
  const form = page.getByTestId('contact-form')

  await form.getByLabel('Ім’я').fill('Тестовий користувач')
  await form.getByLabel('Електронна пошта').fill('user@example.com')
  await form.getByLabel('Тип запиту').selectOption('technical')
  await form.getByLabel('Повідомлення').fill('Потрібна демонстраційна інформація про сценарій використання продукту.')
  await form.getByLabel('Погоджуюся з описаною обробкою даних').check()
}

async function fillEnglishForm(page: Page) {
  const form = page.getByTestId('contact-form')

  await form.getByLabel('Name').fill('Test User')
  await form.getByLabel('Email').fill('user.en@example.com')
  await form.getByLabel('Inquiry type').selectOption('cooperation')
  await form.getByLabel('Message').fill('This is a demonstration inquiry for an English product page context.')
  await form.getByLabel('I agree to the described data handling').check()
}

async function mobileLayoutDiagnostics(page: Page) {
  return page.evaluate(() => {
    const clientWidth = document.documentElement.clientWidth
    const scrollWidth = document.documentElement.scrollWidth
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

    return { clientWidth, scrollWidth, offenders }
  })
}

test('renders and submits the Ukrainian contact route with product preselection', async ({ page }) => {
  await page.goto('/contact?product=homecore-5')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Опишіть свій сценарій')
  await expect(page.getByTestId('contact-page')).toContainText('Демонстраційний сервіс')
  await expect(page.getByTestId('contact-form').getByLabel('Продукт')).toHaveValue('homecore-5')

  await fillUkrainianForm(page)
  await page.getByTestId('contact-form').getByRole('button', { name: 'Надіслати запит' }).click()

  await expect(page.getByTestId('contact-status')).toContainText('Запит перевірено')
  await expect(page.getByTestId('contact-status')).toContainText('не вважаються переданими реальному відділу продажу')
  await expect(page.getByRole('link', { name: 'Переглянути продукти' })).toHaveAttribute('href', '/products')
  await expect(page.getByRole('link', { name: 'Порівняти системи' }).last()).toHaveAttribute('href', '/products/compare')
})

test('renders and submits the English contact route with product preselection', async ({ page }) => {
  await page.goto('/en/contact?product=sitehub-10')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Describe your use case')
  await expect(page.getByTestId('contact-page')).toContainText('Demonstration service')
  await expect(page.getByTestId('contact-form').getByLabel('Product')).toHaveValue('sitehub-10')

  await fillEnglishForm(page)
  await page.getByTestId('contact-form').getByRole('button', { name: 'Submit request' }).click()

  await expect(page.getByTestId('contact-status')).toContainText('validated and accepted')
  await expect(page.getByTestId('contact-status')).toContainText('not considered delivered to a real sales team')
  await expect(page.getByRole('link', { name: 'View products' })).toHaveAttribute('href', '/en/products')
  await expect(page.getByRole('link', { name: 'Compare systems' }).last()).toHaveAttribute('href', '/en/products/compare')
})

test('falls back from an invalid product query to unsure without redirecting', async ({ page }) => {
  await page.goto('/en/contact?product=not-a-product')

  await expect(page).toHaveURL('/en/contact?product=not-a-product')
  await expect(page.getByTestId('contact-form').getByLabel('Product')).toHaveValue('unsure')
})

test('shows client-side validation errors and keeps focus visible', async ({ page }) => {
  await page.goto('/contact')

  const form = page.getByTestId('contact-form')
  const submit = form.getByRole('button', { name: 'Надіслати запит' })
  await expect(submit).toBeEnabled()
  await submit.focus()
  await expect(submit).toBeFocused()
  await submit.click()

  await expect(page.getByTestId('contact-error-summary')).toBeVisible()
  await expect(form.getByLabel('Ім’я')).toHaveAttribute('aria-invalid', 'true')
  await expect(form.getByLabel('Ім’я')).toBeFocused()
})

test('returns structured API errors for invalid, honeypot, and rate-limited requests', async ({ request }) => {
  const invalid = await request.post('/api/contact', {
    data: {
      ...validEnglishRequest,
      product: 'unknown-product'
    },
    headers: {
      'x-forwarded-for': '203.0.113.10'
    }
  })
  expect(invalid.status()).toBe(422)
  expect(await invalid.json()).toEqual(expect.objectContaining({
    ok: false,
    code: 'VALIDATION_ERROR',
    fields: expect.objectContaining({
      product: expect.any(String)
    })
  }))

  const honeypot = await request.post('/api/contact', {
    data: {
      ...validEnglishRequest,
      website: 'filled'
    },
    headers: {
      'x-forwarded-for': '203.0.113.11'
    }
  })
  expect(honeypot.status()).toBe(422)
  expect(await honeypot.json()).toEqual(expect.objectContaining({
    ok: false,
    code: 'VALIDATION_ERROR',
    fields: expect.objectContaining({
      website: expect.any(String)
    })
  }))

  const rateLimitedHeaders = {
    'x-forwarded-for': '203.0.113.12'
  }
  const responses = []

  for (let index = 0; index < 6; index += 1) {
    responses.push(await request.post('/api/contact', {
      data: {
        ...validEnglishRequest,
        email: `rate-${index}@example.com`
      },
      headers: rateLimitedHeaders
    }))
  }

  expect(responses.at(-1)?.status()).toBe(429)
  expect(await responses.at(-1)!.json()).toEqual(expect.objectContaining({
    ok: false,
    code: 'RATE_LIMITED'
  }))
})

test('keeps the hydrated contact flow usable without horizontal overflow at 320 by 800', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto('/contact?product=powerbox-2400')

  const form = page.getByTestId('contact-form')
  await expect(form.getByLabel('Продукт')).toHaveValue('powerbox-2400')
  await expect(form.getByRole('button', { name: 'Надіслати запит' })).toBeEnabled()
  await expect(page.getByRole('button', { name: 'Відкрити меню' })).toBeEnabled()

  const diagnostics = await mobileLayoutDiagnostics(page)
  expect(
    diagnostics.scrollWidth,
    `Overflow offenders: ${JSON.stringify(diagnostics.offenders, null, 2)}`
  ).toBeLessThanOrEqual(diagnostics.clientWidth + 1)
})
