import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AboutPage from '~/pages/about.vue'
import TechnologyPage from '~/pages/technology.vue'
import { aboutPageContent, technologyPageContent } from '~/data/information-pages'

describe('technology informational page', () => {
  it('renders complete conceptual content and safe boundaries', async () => {
    const wrapper = await mountSuspended(TechnologyPage)

    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.findAll('[data-testid="technology-page-principle"]')).toHaveLength(3)
    expect(wrapper.findAll('[data-testid="technology-format"]')).toHaveLength(3)
    expect(wrapper.get('[data-testid="technology-page-diagram"]').attributes('role')).toBe('img')
    expect(wrapper.get('[data-testid="technology-page-diagram"]').attributes('aria-label')).toBeTruthy()
    expect(wrapper.text()).toContain('не є схемою підключення')
    expect(wrapper.find('a[href="/products"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/products/compare"]').exists()).toBe(true)
  })

  it('keeps Ukrainian and English content structurally equivalent', () => {
    expect(technologyPageContent.uk.principles).toHaveLength(technologyPageContent.en.principles.length)
    expect(technologyPageContent.uk.architecture).toHaveLength(technologyPageContent.en.architecture.length)
    expect(technologyPageContent.uk.boundaries).toHaveLength(technologyPageContent.en.boundaries.length)
  })
})

describe('about informational page', () => {
  it('renders project context, goals, stack, quality, and claim boundaries', async () => {
    const wrapper = await mountSuspended(AboutPage)

    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.findAll('[data-testid="about-goal"]')).toHaveLength(4)
    expect(wrapper.findAll('[data-testid="about-stack-item"]')).toHaveLength(11)
    expect(wrapper.findAll('[data-testid="about-quality-item"]')).toHaveLength(3)
    expect(wrapper.text()).toContain('не підтверджує історію компанії')
    expect(wrapper.find('a[href="/products"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true)
  })

  it('keeps Ukrainian and English content structurally equivalent', () => {
    expect(aboutPageContent.uk.projectParagraphs).toHaveLength(aboutPageContent.en.projectParagraphs.length)
    expect(aboutPageContent.uk.goals).toHaveLength(aboutPageContent.en.goals.length)
    expect(aboutPageContent.uk.stack).toEqual(aboutPageContent.en.stack)
    expect(aboutPageContent.uk.quality).toHaveLength(aboutPageContent.en.quality.length)
    expect(aboutPageContent.uk.boundaries).toHaveLength(aboutPageContent.en.boundaries.length)
  })
})
