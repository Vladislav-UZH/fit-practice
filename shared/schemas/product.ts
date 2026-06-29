import { z } from 'zod/v4'

export const localeSchema = z.enum(['uk', 'en'])

export const productSlugSchema = z.enum([
  'powerbox-2400',
  'homecore-5',
  'sitehub-10'
])

export const productHighlightSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  qualifier: z.string().optional()
})

export const productLineupSchema = z.object({
  context: z.string().min(1),
  distinction: z.string().min(1),
  reasons: z.array(z.string().min(1)).length(2),
  comparison: z.object({
    capacity: z.string().min(1),
    output: z.string().min(1),
    format: z.string().min(1)
  }),
  visualDescription: z.string().min(1)
})

export const comparisonValueStatusSchema = z.enum([
  'value',
  'configuration-dependent',
  'unavailable'
])

export const comparisonValueSchema = z.object({
  value: z.string().min(1),
  status: comparisonValueStatusSchema.default('value')
})

export const productComparisonSchema = z.object({
  context: z.string().min(1),
  values: z.object({
    primaryUse: comparisonValueSchema,
    recommendedUser: comparisonValueSchema,
    energy: comparisonValueSchema,
    ratedOutput: comparisonValueSchema,
    peakOutput: comparisonValueSchema,
    mobility: comparisonValueSchema,
    installation: comparisonValueSchema,
    charging: comparisonValueSchema,
    protection: comparisonValueSchema,
    weight: comparisonValueSchema,
    expansion: comparisonValueSchema,
    monitoring: comparisonValueSchema
  })
})

export const productContentSchema = z.object({
  locale: localeSchema,
  order: z.number().int().min(1).max(3),
  slug: productSlugSchema,
  name: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  conceptNotice: z.string().min(1),
  highlights: z.array(productHighlightSchema).min(3).max(5),
  lineup: productLineupSchema,
  comparison: productComparisonSchema,
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1)
  })
})

export type ProductSlug = z.infer<typeof productSlugSchema>
export type ProductHighlight = z.infer<typeof productHighlightSchema>
export type ProductLineup = z.infer<typeof productLineupSchema>
export type ComparisonValueStatus = z.infer<typeof comparisonValueStatusSchema>
export type ProductComparison = z.infer<typeof productComparisonSchema>
export type ProductContent = z.infer<typeof productContentSchema>
