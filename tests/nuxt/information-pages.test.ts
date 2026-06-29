import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AboutPage from '~/pages/about.vue'
import TechnologyPage from '~/pages/technology.vue'

describe('TechnologyPage', () => {
  it('renders the complete conceptual platform structure', async () => {
    const wrapper = await mountSuspended(TechnologyPage, {
      route: '/technology'
    })

    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.findAll('[data-testid="technology-page-principle"]')).toHaveLength(4)
    expect(wrapper.findAll('[data-testid="technology-format"]')).toHaveLength(3)

    const diagram = wrapper.get('[data-testid="technology-page-diagram"]')
    expect(diagram.attributes('role')).toBe('img')
    expect(diagram.attributes('aria-label')).toBeTruthy()

    expect(wrapper.find('a[href="/products"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/products/compare"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/products/powerbox-2400"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('не є електричною схемою')
  })
})

describe('AboutPage', () => {
  it('renders verified project facts, capabilities, process, and boundaries', async () => {
    const wrapper = await mountSuspended(AboutPage, {
      route: '/about'
    })

    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.findAll('[data-testid="about-facts"] div')).toHaveLength(4)
    expect(wrapper.findAll('[data-testid="about-capability"]')).toHaveLength(4)
    expect(wrapper.findAll('[data-testid="about-process-step"]')).toHaveLength(4)

    expect(wrapper.text()).toContain('навчальному контексті')
    expect(wrapper.text()).toContain('Немає цін, кошика, оплати')
    expect(wrapper.find('a[href="/products"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/legal"]').exists()).toBe(true)
  })
})
