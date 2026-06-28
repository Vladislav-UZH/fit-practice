import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PageIntro from '~/components/PageIntro.vue'

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
