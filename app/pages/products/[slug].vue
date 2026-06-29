<script setup lang="ts">
const route = useRoute('products-slug')
const { locale } = useI18n()

const slug = computed(() => String(route.params.slug))

const [{ data: product }, { data: products }] = await Promise.all([
  useFetch(
    () => `/api/products/${slug.value}`,
    {
      query: computed(() => ({ locale: locale.value })),
      watch: [locale, slug]
    }
  ),
  useFetch('/api/products', {
    query: computed(() => ({ locale: locale.value })),
    watch: [locale]
  })
])

if (!product.value || !products.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

usePageSeo(
  computed(() => product.value?.seo.title ?? ''),
  computed(() => product.value?.seo.description ?? '')
)
</script>

<template>
  <ProductDetail v-if="product && products" :product="product" :products="products" />
</template>
