import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProductDetail from '~/components/ProductDetail.vue'
import type { ProductContent, ProductSlug } from '../../shared/schemas/product'

function product(
  slug: ProductSlug,
  order: number,
  name: string,
  statuses: {
    energy?: 'value' | 'configuration-dependent' | 'unavailable'
    output?: 'value' | 'configuration-dependent' | 'unavailable'
  } = {}
): ProductContent {
  return {
    locale: 'en',
    order,
    slug,
    conceptProduct: true,
    name,
    category: 'Concept category',
    tagline: `${name} tagline`,
    summary: `${name} summary`,
    overview: {
      lead: `${name} detailed overview`,
      paragraphs: [
        `${name} intended context.`,
        `${name} distinction without unsupported claims.`
      ]
    },
    features: [
      { title: 'Feature one', description: 'Feature one description.' },
      { title: 'Feature two', description: 'Feature two description.' },
      { title: 'Feature three', description: 'Feature three description.' },
      { title: 'Feature four', description: 'Feature four description.' }
    ],
    applications: [
      { title: 'Application one', description: 'Application one description.' },
      { title: 'Application two', description: 'Application two description.' },
      { title: 'Application three', description: 'Application three description.' }
    ],
    detailVisualDescription: `${name} original concept illustration.`,
    conceptNotice: `${name} specifications are illustrative.`,
    highlights: [
      { label: 'Capacity', value: '2.4 kWh' },
      { label: 'Output', value: '2.4 kW' },
      { label: 'Weight', value: '28 kg' }
    ],
    specifications: [
      {
        id: 'energy',
        title: 'Energy',
        items: [{
          key: 'energy',
          label: 'Energy',
          value: { value: '2.4 kWh', status: statuses.energy ?? 'value' }
        }]
      },
      {
        id: 'output-input',
        title: 'Input and output',
        items: [{
          key: 'output',
          label: 'Output',
          value: { value: '2.4 kW', status: statuses.output ?? 'value' }
        }]
      },
      {
        id: 'physical',
        title: 'Physical characteristics',
        items: [{
          key: 'weight',
          label: 'Weight',
          value: { value: '28 kg', status: 'value' }
        }]
      },
      {
        id: 'environment',
        title: 'Environment',
        items: [{
          key: 'protection',
          label: 'Enclosure',
          value: { value: 'IP44 concept', status: 'value' }
        }]
      },
      {
        id: 'controls',
        title: 'Controls and monitoring',
        items: [{
          key: 'monitoring',
          label: 'Monitoring',
          value: { value: 'Local status concept', status: 'value' }
        }]
      }
    ],
    documents: [],
    lineup: {
      context: `${name} context`,
      distinction: `${name} distinction`,
      reasons: ['Reason one.', 'Reason two.'],
      comparison: {
        capacity: '2.4 kWh',
        output: '2.4 kW',
        format: 'Concept format'
      },
      visualDescription: `${name} lineup illustration.`
    },
    comparison: {
      context: `${name} comparison context`,
      values: {
        primaryUse: { value: 'Primary use', status: 'value' },
        recommendedUser: { value: 'Intended user', status: 'value' },
        energy: { value: '2.4 kWh', status: statuses.energy ?? 'value' },
        ratedOutput: { value: '2.4 kW', status: 'value' },
        peakOutput: { value: '4.8 kW', status: statuses.output ?? 'value' },
        mobility: { value: 'Concept mobility', status: 'value' },
        installation: { value: 'Concept placement', status: 'value' },
        charging: { value: 'Concept charging', status: 'value' },
        protection: { value: 'IP44 concept', status: 'value' },
        weight: { value: '28 kg', status: 'value' },
        expansion: { value: 'Not available', status: 'unavailable' },
        monitoring: { value: 'Local status concept', status: 'value' }
      }
    },
    seo: {
      title: `${name} concept`,
      description: `${name} concept description.`
    }
  }
}

const products = [
  product('powerbox-2400', 1, 'MAXIBUD PowerBox 2400', { energy: 'unavailable' }),
  product('homecore-5', 2, 'MAXIBUD HomeCore 5', { output: 'configuration-dependent' }),
  product('sitehub-10', 3, 'MAXIBUD SiteHub 10')
]

describe('ProductDetail', () => {
  it.each(products)('uses the shared complete template for $name', async (currentProduct) => {
    const wrapper = await mountSuspended(ProductDetail, {
      props: {
        product: currentProduct,
        products
      }
    })

    expect(wrapper.get('h1').text()).toBe(currentProduct.name)
    expect(wrapper.text()).toContain(currentProduct.overview.lead)
    expect(wrapper.text()).toContain(currentProduct.features[0]!.title)
    expect(wrapper.text()).toContain(currentProduct.applications[0]!.title)
    expect(wrapper.get('[data-testid="product-lineup-visual"]').attributes('aria-label'))
      .toBe(currentProduct.detailVisualDescription)
    expect(wrapper.findAll('[data-testid="product-specification-group"]').map(group => group.attributes('data-group-id')))
      .toEqual(['energy', 'output-input', 'physical', 'environment', 'controls'])
    expect(wrapper.findAll('[data-testid="related-product"]')).toHaveLength(2)
    expect(wrapper.find('[data-testid="product-documents"]').exists()).toBe(false)
    expect(wrapper.find(`a[href="/contact?product=${currentProduct.slug}"]`).exists()).toBe(true)
    expect(wrapper.find('a[href="/products/compare"]').exists()).toBe(true)
    expect(wrapper.text()).toContain(currentProduct.conceptNotice)
  })

  it('renders explicit structured value states', async () => {
    const wrapper = await mountSuspended(ProductDetail, {
      props: {
        product: products[1]!,
        products
      }
    })

    expect(wrapper.text()).toMatch(/Configuration-dependent|Залежить від конфігурації/)
    expect(wrapper.text()).toContain('2.4 kW')
  })
})
