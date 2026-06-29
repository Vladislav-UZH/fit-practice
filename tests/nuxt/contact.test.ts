import { flushPromises } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ContactInquiryForm from '~/components/ContactInquiryForm.vue'
import ContactPage from '~/pages/contact.vue'

describe('ContactInquiryForm', () => {
  it('preselects an approved product and renders accessible form controls', async () => {
    const wrapper = await mountSuspended(ContactInquiryForm, {
      props: {
        initialProduct: 'homecore-5'
      }
    })

    expect((wrapper.get('select[name="product"]').element as HTMLSelectElement).value).toBe('homecore-5')
    expect(wrapper.find('input[name="website"]').exists()).toBe(true)
    expect(wrapper.get('label[for="contact-name"]').text()).toBeTruthy()
    expect(wrapper.get('label[for="contact-email"]').text()).toBeTruthy()
    expect(wrapper.get('label[for="contact-message"]').text()).toBeTruthy()
  })

  it('shows field errors before submitting invalid input to the server', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('$fetch', fetchMock)

    const wrapper = await mountSuspended(ContactInquiryForm, {
      props: {
        initialProduct: 'unsure'
      }
    })

    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(wrapper.find('[data-testid="contact-error-summary"]').exists()).toBe(true)
    expect(wrapper.get('#contact-name').attributes('aria-invalid')).toBe('true')
    expect(fetchMock).not.toHaveBeenCalled()

    vi.unstubAllGlobals()
  })

  it('submits normalized valid input and renders the truthful success state', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      code: 'ACCEPTED',
      received: {
        locale: 'en',
        product: 'sitehub-10',
        inquiryType: 'cooperation'
      }
    })
    vi.stubGlobal('$fetch', fetchMock)

    const wrapper = await mountSuspended(ContactInquiryForm, {
      props: {
        initialProduct: 'sitehub-10'
      }
    })

    await wrapper.get('input[name="name"]').setValue('  Ada User  ')
    await wrapper.get('input[name="email"]').setValue('  ADA@example.COM ')
    await wrapper.get('select[name="inquiryType"]').setValue('cooperation')
    await wrapper.get('textarea[name="message"]').setValue('This is a complete valid demonstration inquiry.')
    await wrapper.get('input[name="consent"]').setValue(true)
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
      method: 'POST',
      body: expect.objectContaining({
        name: 'Ada User',
        email: 'ada@example.com',
        product: 'sitehub-10',
        inquiryType: 'cooperation'
      })
    }))
    expect(wrapper.get('[data-testid="contact-status"]').text()).toContain('Запит перевірено')

    vi.unstubAllGlobals()
  })
})

describe('ContactPage', () => {
  it('preselects only approved product query values', async () => {
    const selected = await mountSuspended(ContactPage, {
      route: '/contact?product=powerbox-2400'
    })

    expect((selected.get('select[name="product"]').element as HTMLSelectElement).value).toBe('powerbox-2400')

    const fallback = await mountSuspended(ContactPage, {
      route: '/contact?product=unknown-product'
    })

    expect((fallback.get('select[name="product"]').element as HTMLSelectElement).value).toBe('unsure')
  })
})
