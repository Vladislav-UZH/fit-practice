import { describe, expect, it } from 'vitest'
import {
  comparisonValueSchema,
  productComparisonSchema,
  productDocumentSchema,
  productSpecificationsSchema,
  productSlugSchema
} from '../../shared/schemas/product'
import type { ComparisonValueStatus } from '../../shared/schemas/product'

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

describe('productSpecificationsSchema', () => {
  const group = (id: string, status: ComparisonValueStatus = 'value') => ({
    id,
    title: id,
    items: [{
      key: `${id}-value`,
      label: id,
      value: { value: 'Illustrative value', status }
    }]
  })

  it('requires the documented five-group order', () => {
    const specifications = [
      group('energy'),
      group('output-input'),
      group('physical'),
      group('environment'),
      group('controls')
    ]

    expect(productSpecificationsSchema.parse(specifications).map(item => item.id)).toEqual([
      'energy',
      'output-input',
      'physical',
      'environment',
      'controls'
    ])

    expect(() => productSpecificationsSchema.parse([
      specifications[1],
      specifications[0],
      ...specifications.slice(2)
    ])).toThrow()
  })

  it('preserves ordinary, configuration-dependent, and unavailable values', () => {
    const specifications = [
      group('energy', 'unavailable'),
      group('output-input', 'configuration-dependent'),
      group('physical'),
      group('environment'),
      group('controls')
    ]

    const parsed = productSpecificationsSchema.parse(specifications)

    expect(parsed[0].items[0]!.value.status).toBe('unavailable')
    expect(parsed[1].items[0]!.value.status).toBe('configuration-dependent')
    expect(parsed[2].items[0]!.value.status).toBe('value')
  })
})

describe('productDocumentSchema', () => {
  it('accepts only explicitly conceptual repository document paths', () => {
    expect(productDocumentSchema.parse({
      title: 'Concept overview',
      type: 'overview',
      url: '/documents/en/powerbox-2400-overview.pdf',
      language: 'en',
      conceptual: true
    }).conceptual).toBe(true)

    expect(() => productDocumentSchema.parse({
      title: 'External file',
      type: 'datasheet',
      url: 'https://example.com/file.pdf',
      language: 'en',
      conceptual: true
    })).toThrow()
  })
})
