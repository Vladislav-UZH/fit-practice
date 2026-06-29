import { expect, test } from '@playwright/test'

const products = [
  {
    slug: 'powerbox-2400',
    name: 'MAXIBUD PowerBox 2400',
    ukValue: '2,4 кВт·год',
    enValue: '2.4 kWh'
  },
  {
    slug: 'homecore-5',
    name: 'MAXIBUD HomeCore 5',
    ukValue: '5,12 кВт·год на модуль',
    enValue: '5.12 kWh per module'
  },
  {
    slug: 'sitehub-10',
    name: 'MAXIBUD SiteHub 10',
    ukValue: '10,24 кВт·год',
    enValue: '10.24 kWh'
  }
]

for (const product of products) {
  test(`renders the complete Ukrainian ${product.name} detail route`, async ({ page }) => {
    await page.goto(`/products/${product.slug}`)

    const detail = page.getByTestId('product-detail')
    const specifications = page.getByTestId('product-specifications')

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(product.name)
    await expect(page.getByRole('heading', { name: 'Детальний огляд' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Ключові особливості' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Концептуальні сценарії' })).toBeVisible()
    await expect(specifications.getByTestId('product-specification-group')).toHaveCount(5)
    await expect(specifications.getByTestId('product-specification-group').nth(0)).toHaveAttribute('data-group-id', 'energy')
    await expect(specifications.getByTestId('product-specification-group').nth(4)).toHaveAttribute('data-group-id', 'controls')
    await expect(specifications).toContainText(product.ukValue)
    await expect(specifications).toContainText('Ілюстративні значення концепту')
    await expect(detail.getByRole('link', { name: 'Порівняти системи' })).toHaveAttribute('href', '/products/compare')
    await expect(detail.getByRole('link', { name: 'Отримати консультацію' }).first())
      .toHaveAttribute('href', `/contact?product=${product.slug}`)
    await expect(detail.getByTestId('product-documents')).toHaveCount(0)
    await expect(page).toHaveTitle(new RegExp(product.name))
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `http://localhost:3000/products/${product.slug}`
    )
  })

  test(`renders the complete English ${product.name} detail route`, async ({ page }) => {
    await page.goto(`/en/products/${product.slug}`)

    const detail = page.getByTestId('product-detail')
    const specifications = page.getByTestId('product-specifications')

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(product.name)
    await expect(page.getByRole('heading', { name: 'Detailed overview' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Key product features' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Conceptual applications' })).toBeVisible()
    await expect(specifications.getByTestId('product-specification-group')).toHaveCount(5)
    await expect(specifications).toContainText(product.enValue)
    await expect(specifications).toContainText('Illustrative concept values')
    await expect(detail.getByRole('link', { name: 'Compare systems' })).toHaveAttribute('href', '/en/products/compare')
    await expect(detail.getByRole('link', { name: 'Request consultation' }).first())
      .toHaveAttribute('href', `/en/contact?product=${product.slug}`)
    await expect(detail.getByTestId('product-documents')).toHaveCount(0)
    await expect(page).toHaveTitle(new RegExp(product.name))
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `http://localhost:3000/en/products/${product.slug}`
    )
  })
}

test('keeps product-detail values consistent with the comparison records', async ({ request }) => {
  const response = await request.get('/api/products?locale=en')
  expect(response.status()).toBe(200)

  const records = await response.json()

  for (const record of records) {
    const specificationItems = record.specifications.flatMap(
      (group: { items: Array<{ key: string, value: { value: string, status: string } }> }) => group.items
    )
    const byKey = Object.fromEntries(
      specificationItems.map((item: { key: string, value: { value: string, status: string } }) => [item.key, item.value])
    )

    expect(byKey.weight.value).toContain(record.comparison.values.weight.value.split(' ')[0])
    expect(byKey.monitoring.value).toBe(record.comparison.values.monitoring.value)
    expect(byKey.expansion.status).toBe(record.comparison.values.expansion.status)

    if (record.slug === 'homecore-5') {
      expect(byKey.continuousOutput.value).toBe(record.comparison.values.ratedOutput.value)
      expect(byKey.peakOutput.status).toBe(record.comparison.values.peakOutput.status)
    }
    else {
      const ratedKilowatts = Number(byKey.ratedOutput.value.replace(/[^\d]/g, '')) / 1000
      const peakKilowatts = Number(byKey.peakOutput.value.replace(/[^\d]/g, '')) / 1000

      expect(`${ratedKilowatts} kW`).toBe(record.comparison.values.ratedOutput.value)
      expect(`${peakKilowatts} kW`).toBe(record.comparison.values.peakOutput.value)
    }
  }
})

test('returns an intentional 404 for an unknown product slug', async ({ page }) => {
  const response = await page.goto('/products/not-a-product')

  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Сторінку не знайдено')
})

test('keeps keyboard actions visible and the complete page stable at 320 by 800', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto('/products/powerbox-2400')

  const consultation = page.getByTestId('product-detail').getByRole('link', { name: 'Отримати консультацію' }).first()
  await consultation.focus()
  await expect(consultation).toBeFocused()
  await expect(consultation).toBeVisible()
  await expect(page.getByTestId('product-specification-group')).toHaveCount(5)

  const hasHorizontalOverflow = await page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  )

  expect(hasHorizontalOverflow).toBe(false)
})
