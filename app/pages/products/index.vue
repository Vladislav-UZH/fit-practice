<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: products } = await useFetch('/api/products', {
  query: computed(() => ({ locale: locale.value })),
  watch: [locale]
})

usePageSeo(
  computed(() => t('pages.products.seoTitle')),
  computed(() => t('pages.products.seoDescription'))
)
</script>

<template>
  <div>
    <PageIntro
      :eyebrow="$t('pages.products.eyebrow')"
      :title="$t('pages.products.title')"
      :description="$t('pages.products.description')"
    />

    <UContainer class="pb-20">
      <div v-if="products?.length" class="grid gap-8 lg:grid-cols-3">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :category="product.category"
          :summary="product.summary"
          :highlights="product.highlights"
          :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
        />
      </div>
    </UContainer>
  </div>
</template>
