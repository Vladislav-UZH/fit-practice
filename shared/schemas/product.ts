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

export const productContentSchema = z.object({
  locale: localeSchema,
  order: z.number().int().min(1).max(3),
  slug: productSlugSchema,
  name: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  conceptNotice: z.string().min(1),
  highlights: z.array(productHighlightSchema).min(3).max(5),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1)
  })
})

export type ProductSlug = z.infer<typeof productSlugSchema>
export type ProductHighlight = z.infer<typeof productHighlightSchema>
export type ProductContent = z.infer<typeof productContentSchema>
