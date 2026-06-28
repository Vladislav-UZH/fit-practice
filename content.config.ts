import { defineCollection, defineContentConfig } from '@nuxt/content'
import { productContentSchema } from './shared/schemas/product'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/**/*.yml',
      schema: productContentSchema,
      indexes: [
        { columns: ['locale'] },
        { columns: ['slug'] },
        { columns: ['locale', 'slug'], unique: true }
      ]
    })
  }
})
