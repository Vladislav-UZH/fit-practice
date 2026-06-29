import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FullProductComparison from '~/components/FullProductComparison.vue'
import type { ProductComparison, ProductSlug } from '../../shared/schemas/product'

function comparison(overrides: Partial<ProductComparison['values']> = {}): ProductComparison {
  return {
    context: 'Concept context',
    values: {
      primaryUse: { value: 'Primary use', status: 'value' },
      recommendedUser: { value: 'Intended user', status: 'value' },
      energy: { value: '2.4 kWh', status: 'value' },
      ratedOutput: { value: '2.4 kW', status: 'value' },
      peakOutput: { value: '4.8 kW', status: 'value' },
      mobility: { value: 'Carryable', status: 'value' },
      installation: { value: 'Temporary placement', status: 'value' },
      charging: { value: 'Grid and solar', status: 'value' },
      protection: { value: 'IP44 concept', status: 'value' },
      weight: { value: '28 kg', status: 'value' },
      expansion: { value: 'Not available', status: 'unavailable' },
      monitoring: { value: 'Local status', status: 'value' },
      ...overrides
    }
  }
}

const products = [
  {
    slug: 'powerbox-2400' as ProductSlug,
    name: 'MAXIBUD PowerBox 2400',
    category: 'Portable system',
    comparison: comparison()
  },
  {
    slug: 'homecore-5' as ProductSlug,
    name: 'MAXIBUD HomeCore 5',
    category: 'Modular home system',
    comparison: comparison({
      energy: { value: '5.12 kWh per module', status: 'value' },
      peakOutput: {
        value: 'Depends on the compatible configuration',
        status: 'configuration-dependent'
      },
      expansion: { value: 'Up to four modules', status: 'value' }
    })
  },
  {
    slug: 'sitehub-10' as ProductSlug,
    name: 'MAXIBUD SiteHub 10',
    category: 'Professional mobile system',
    comparison: comparison({
      energy: { value: '10.24 kWh', status: 'value' },
      ratedOutput: { value: '6 kW', status: 'value' },
      peakOutput: { value: '12 kW', status: 'value' }
    })
  }
]

describe('FullProductComparison', () => {
  it('restores portfolio order and renders a semantic grouped desktop table', async () => {
    const wrapper = await mountSuspended(FullProductComparison, {
      props: { products: [...products].reverse() }
    })

    const table = wrapper.get('[data-testid="full-comparison-table"]')
    const columns = wrapper.findAll('[data-testid="full-comparison-column"]')

    expect(table.find('caption').text()).toBeTruthy()
    expect(columns).toHaveLength(3)
    expect(columns[0]!.text()).toContain('MAXIBUD PowerBox 2400')
    expect(columns[1]!.text()).toContain('MAXIBUD HomeCore 5')
    expect(columns[2]!.text()).toContain('MAXIBUD SiteHub 10')
    expect(table.findAll('tbody')).toHaveLength(4)
    expect(table.findAll('th[scope="row"]')).toHaveLength(12)
    expect(table.text()).toContain('5.12 kWh per module')
    expect(table.text()).toMatch(/Configuration-dependent|Залежить від конфігурації/)
    expect(table.text()).toMatch(/Not available|Не передбачено/)
  })

  it('renders every grouped value product by product for mobile', async () => {
    const wrapper = await mountSuspended(FullProductComparison, {
      props: { products }
    })

    const mobileProducts = wrapper.findAll('[data-testid="full-comparison-mobile-product"]')

    expect(mobileProducts).toHaveLength(3)
    expect(mobileProducts[0]!.text()).toContain('MAXIBUD PowerBox 2400')
    expect(mobileProducts[1]!.text()).toContain('MAXIBUD HomeCore 5')
    expect(mobileProducts[2]!.text()).toContain('MAXIBUD SiteHub 10')
    expect(mobileProducts.every(product => product.findAll('section').length === 4)).toBe(true)
    expect(mobileProducts.every(product => product.findAll('dt').length === 12)).toBe(true)
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/products"]').exists()).toBe(true)
  })
})
