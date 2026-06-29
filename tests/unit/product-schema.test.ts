import { describe, expect, it } from 'vitest'
import {
  comparisonValueSchema,
  productComparisonSchema,
  productSlugSchema
} from '../../shared/schemas/product'

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

describe('productComparisonSchema', () => {
  it('defaults ordinary values and preserves truthful exception states', () => {
    expect(comparisonValueSchema.parse({ value: '2.4 kW' }).status).toBe('value')
    expect(comparisonValueSchema.parse({
      value: 'Depends on configuration',
      status: 'configuration-dependent'
    }).status).toBe('configuration-dependent')
    expect(comparisonValueSchema.parse({
      value: 'Not available',
      status: 'unavailable'
    }).status).toBe('unavailable')
  })

  it('rejects an incomplete comparison matrix', () => {
    expect(() => productComparisonSchema.parse({
      context: 'Portable concept',
      values: {
        primaryUse: { value: 'Mobile work' }
      }
    })).toThrow()
  })
})
