import { queryCollection } from '@nuxt/content/server'
import { localeSchema, productSlugSchema } from '../../../shared/schemas/product'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const parsedLocale = localeSchema.safeParse(query.locale)
  const parsedSlug = productSlugSchema.safeParse(getRouterParam(event, 'slug'))

  if (!parsedLocale.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Unsupported locale'
    })
  }

  if (!parsedSlug.success) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  const product = await queryCollection(event, 'products')
    .where('locale', '=', parsedLocale.data)
    .where('slug', '=', parsedSlug.data)
    .first()

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return product
})
