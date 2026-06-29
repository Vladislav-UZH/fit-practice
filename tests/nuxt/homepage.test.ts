import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PageIntro from '~/components/PageIntro.vue'
import ProductFamilyStage from '~/components/ProductFamilyStage.vue'
import ProductLineupChapter from '~/components/ProductLineupChapter.vue'
import UseCaseRecommendation from '~/components/UseCaseRecommendation.vue'

const recommendationProducts = [
  {
    slug: 'powerbox-2400' as const,
    name: 'MAXIBUD PowerBox 2400',
    category: 'Portable system',
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
  },
  {
    slug: 'homecore-5' as const,
    name: 'MAXIBUD HomeCore 5',
    category: 'Modular home system',
    lineup: {
      context: 'Home and small office',
      distinction: 'A modular stationary format',
      reasons: [
        'A base module supports conceptual expansion.',
        'The wall-mounted format separates home use from mobile products.'
      ],
      comparison: {
        capacity: '5.12–20.48 kWh',
        output: '5 kW',
        format: 'Stationary · modular'
      },
      visualDescription: 'Stationary product concept diagram.'
    }
  },
  {
    slug: 'sitehub-10' as const,
    name: 'MAXIBUD SiteHub 10',
    category: 'Professional mobile system',
    lineup: {
      context: 'Construction sites',
      distinction: 'The highest-output transportable format',
      reasons: [
        'Greater capacity for longer professional scenarios.',
        'A wheeled frame supports frequent conceptual relocation.'
      ],
      comparison: {
        capacity: '10.24 kWh',
        output: '6 kW',
        format: 'Wheeled · 118 kg'
      },
      visualDescription: 'Professional product concept diagram.'
    }
  }
]

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
          lineup: recommendationProducts[0].lineup
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

describe('UseCaseRecommendation', () => {
  it('maps use cases to existing products and exposes all mobile recommendations', async () => {
    const wrapper = await mountSuspended(UseCaseRecommendation, {
      props: {
        products: recommendationProducts
      }
    })

    const tabs = wrapper.findAll('[role="tab"]')
    const mobileCards = wrapper.findAll('[data-testid="use-case-mobile-card"]')

    expect(tabs).toHaveLength(3)
    expect(mobileCards).toHaveLength(3)
    expect(tabs[0].attributes('aria-selected')).toBe('true')
    expect(wrapper.get('[role="tabpanel"]').text()).toContain('MAXIBUD HomeCore 5')
  })

  it('supports arrow, Home, and End keyboard navigation', async () => {
    const wrapper = await mountSuspended(UseCaseRecommendation, {
      props: {
        products: recommendationProducts
      }
    })

    const tabs = wrapper.findAll('[role="tab"]')

    await tabs[0].trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(tabs[1].attributes('aria-selected')).toBe('true')
    expect(wrapper.get('[role="tabpanel"]').text()).toContain('MAXIBUD PowerBox 2400')

    await tabs[1].trigger('keydown', { key: 'End' })
    await nextTick()
    expect(tabs[2].attributes('aria-selected')).toBe('true')
    expect(wrapper.get('[role="tabpanel"]').text()).toContain('MAXIBUD SiteHub 10')

    await tabs[2].trigger('keydown', { key: 'Home' })
    await nextTick()
    expect(tabs[0].attributes('aria-selected')).toBe('true')
    expect(wrapper.get('[role="tabpanel"]').text()).toContain('MAXIBUD HomeCore 5')
  })
})
