<script setup lang="ts">
const { t, locale } = useI18n()

const { data: products } = await useFetch('/api/products', {
  query: computed(() => ({ locale: locale.value })),
  watch: [locale]
})

const productList = computed(() => products.value ?? [])

usePageSeo(computed(() => t('pages.compare.seoTitle')), computed(() => t('pages.compare.seoDescription')))
</script>

<template>
  <div>
    <PageIntro
      :eyebrow="$t('pages.compare.eyebrow')"
      :title="$t('pages.compare.title')"
      :description="$t('pages.compare.description')"
    />

    <FullProductComparison :products="productList" />
  </div>
</template>
