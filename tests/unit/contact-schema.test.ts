import { describe, expect, it } from 'vitest'
import {
  contactInquiryTypeSchema,
  contactProductSchema,
  contactRequestSchema
} from '../../shared/schemas/contact'

const validRequest = {
  locale: 'en',
  name: '  Ada User  ',
  email: '  ADA@example.COM ',
  phone: '  ',
  company: '  MAXIBUD test  ',
  product: 'homecore-5',
  inquiryType: 'technical',
  message: '  This is a valid demonstration request message.  ',
  consent: true,
  website: ''
}

describe('contactProductSchema', () => {
  it('accepts the three product slugs and unsure', () => {
    expect(contactProductSchema.parse('powerbox-2400')).toBe('powerbox-2400')
    expect(contactProductSchema.parse('homecore-5')).toBe('homecore-5')
    expect(contactProductSchema.parse('sitehub-10')).toBe('sitehub-10')
    expect(contactProductSchema.parse('unsure')).toBe('unsure')
  })

  it('rejects unknown product query values', () => {
    expect(() => contactProductSchema.parse('unknown-product')).toThrow()
  })
})

describe('contactInquiryTypeSchema', () => {
  it('accepts the documented inquiry types', () => {
    expect(contactInquiryTypeSchema.parse('consultation')).toBe('consultation')
    expect(contactInquiryTypeSchema.parse('technical')).toBe('technical')
    expect(contactInquiryTypeSchema.parse('distribution')).toBe('distribution')
    expect(contactInquiryTypeSchema.parse('cooperation')).toBe('cooperation')
    expect(contactInquiryTypeSchema.parse('other')).toBe('other')
  })
})

describe('contactRequestSchema', () => {
  it('trims and normalizes a valid request without preserving empty optional strings', () => {
    const parsed = contactRequestSchema.parse(validRequest)

    expect(parsed.name).toBe('Ada User')
    expect(parsed.email).toBe('ada@example.com')
    expect(parsed.phone).toBeUndefined()
    expect(parsed.company).toBe('MAXIBUD test')
    expect(parsed.product).toBe('homecore-5')
  })

  it('rejects malformed email, short message, missing consent, and filled honeypot', () => {
    expect(() => contactRequestSchema.parse({
      ...validRequest,
      email: 'not-email'
    })).toThrow()

    expect(() => contactRequestSchema.parse({
      ...validRequest,
      message: 'too short'
    })).toThrow()

    expect(() => contactRequestSchema.parse({
      ...validRequest,
      consent: false
    })).toThrow()

    expect(() => contactRequestSchema.parse({
      ...validRequest,
      website: 'filled'
    })).toThrow()
  })
})
