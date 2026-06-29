import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PageIntro from '~/components/PageIntro.vue'
import ProductFamilyStage from '~/components/ProductFamilyStage.vue'
import ProductLineupChapter from '~/components/ProductLineupChapter.vue'

describe('PageIntro', () => {
  it('renders the page heading and supporting copy', async () => {
    const wrapper = await mountSuspended(PageIntro, {
      props: {
        eyebrow: 'Products',
        title: 'Three formats',
        description: 'A concise description.'
      }
    })

    expect(wrapper.get('h1').text()).toBe('Three formats')
    expect(wrapper.text()).toContain('A concise description.')
  })
})

describe('ProductFamilyStage', () => {
  it('exposes an accessible portfolio visual and all product labels', async () => {
    const wrapper = await mountSuspended(ProductFamilyStage, {
      props: {
        accessibleLabel: 'Three product formats at relative scale',
        caption: 'One product family',
        products: [
          { name: 'PowerBox 2400', context: 'Mobile work' },
          { name: 'HomeCore 5', context: 'Home backup' },
          { name: 'SiteHub 10', context: 'Professional sites' }
        ]
      }
    })

    expect(wrapper.get('[role="img"]').attributes('aria-label')).toBe('Three product formats at relative scale')
    expect(wrapper.text()).toContain('PowerBox 2400')
    expect(wrapper.text()).toContain('HomeCore 5')
    expect(wrapper.text()).toContain('SiteHub 10')
  })
})

describe('ProductLineupChapter', () => {
  it('renders decision content, aligned comparison values, and an accessible visual', async () => {
    const wrapper = await mountSuspended(ProductLineupChapter, {
      props: {
        index: 0,
        to: '/products/powerbox-2400',
        product: {
          slug: 'powerbox-2400',
          name: 'MAXIBUD PowerBox 2400',
          category: 'Portable system',
          summary: 'A portable concept for mobile work.',
          lineup: {
            context: 'Mobile work',
            distinction: 'The most compact format',
            reasons: [
              'Compact enclosure for movement between work areas.',
              'Straightforward capacity and output comparison.'
            ],
            comparison: {
              capacity: '2.4 kWh',
              output: '2.4 kW',
              format: 'Portable · 28 kg'
            },
            visualDescription: 'Portable product concept diagram.'
          }
        }
      }
    })

    expect(wrapper.get('h3').text()).toBe('MAXIBUD PowerBox 2400')
    expect(wrapper.text()).toContain('The most compact format')
    expect(wrapper.text()).toContain('2.4 kWh')
    expect(wrapper.text()).toContain('Portable · 28 kg')
    expect(wrapper.get('[data-testid="product-lineup-visual"]').attributes('aria-label')).toBe('Portable product concept diagram.')
  })
})
