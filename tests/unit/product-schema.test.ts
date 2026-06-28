import { describe, expect, it } from 'vitest'
import { productSlugSchema } from '../../shared/schemas/product'

describe('productSlugSchema', () => {
  it('accepts every approved product slug', () => {
    expect(productSlugSchema.parse('powerbox-2400')).toBe('powerbox-2400')
    expect(productSlugSchema.parse('homecore-5')).toBe('homecore-5')
    expect(productSlugSchema.parse('sitehub-10')).toBe('sitehub-10')
  })

  it('rejects unknown product slugs', () => {
    expect(() => productSlugSchema.parse('unknown-product')).toThrow()
  })
})
