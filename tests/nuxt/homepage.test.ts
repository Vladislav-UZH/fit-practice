import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PageIntro from '~/components/PageIntro.vue'
import ProductFamilyStage from '~/components/ProductFamilyStage.vue'

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
        ariaLabel: 'Three product formats at relative scale',
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
