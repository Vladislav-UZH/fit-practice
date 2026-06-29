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

export const productFeatureSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1)
})

export const productApplicationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1)
})

export const productSpecificationItemSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  value: comparisonValueSchema,
  note: z.string().min(1).optional()
})

export const specificationGroupIdSchema = z.enum([
  'energy',
  'output-input',
  'physical',
  'environment',
  'controls'
])

const specificationGroupSchema = z.object({
  id: specificationGroupIdSchema,
  title: z.string().min(1),
  items: z.array(productSpecificationItemSchema).min(1)
})

const specificationGroupOrder = specificationGroupIdSchema.options

export const productSpecificationsSchema = z
  .array(specificationGroupSchema)
  .length(specificationGroupOrder.length)
  .superRefine((groups, context) => {
    groups.forEach((group, index) => {
      if (group.id !== specificationGroupOrder[index]) {
        context.addIssue({
          code: 'custom',
          path: [index, 'id'],
          message: `Expected specification group ${specificationGroupOrder[index]}`
        })
      }
    })
  })

export const productDocumentSchema = z.object({
  title: z.string().min(1),
  type: z.enum(['overview', 'datasheet', 'presentation']),
  url: z.string().startsWith('/documents/'),
  language: localeSchema,
  conceptual: z.literal(true)
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
  conceptProduct: z.literal(true),
  name: z.string().min(1),
  category: z.string().min(1),
  tagline: z.string().min(1),
  summary: z.string().min(1),
  overview: z.object({
    lead: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(2).max(3)
  }),
  features: z.array(productFeatureSchema).min(4).max(6),
  applications: z.array(productApplicationSchema).min(3).max(7),
  detailVisualDescription: z.string().min(1),
  conceptNotice: z.string().min(1),
  highlights: z.array(productHighlightSchema).min(3).max(5),
  specifications: productSpecificationsSchema,
  documents: z.array(productDocumentSchema),
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
export type ProductFeature = z.infer<typeof productFeatureSchema>
export type ProductApplication = z.infer<typeof productApplicationSchema>
export type ProductSpecificationItem = z.infer<typeof productSpecificationItemSchema>
export type ProductSpecifications = z.infer<typeof productSpecificationsSchema>
export type ProductDocument = z.infer<typeof productDocumentSchema>
export type ProductComparison = z.infer<typeof productComparisonSchema>
export type ProductContent = z.infer<typeof productContentSchema>
