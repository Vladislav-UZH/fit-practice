import { queryCollection } from '@nuxt/content/server'
import { localeSchema } from '../../../shared/schemas/product'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const parsedLocale = localeSchema.safeParse(query.locale)

  if (!parsedLocale.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Unsupported locale'
    })
  }

  return queryCollection(event, 'products')
    .where('locale', '=', parsedLocale.data)
    .order('order', 'ASC')
    .all()
})
