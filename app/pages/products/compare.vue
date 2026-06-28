<script setup lang="ts">
const { t } = useI18n()
usePageSeo(computed(() => t('pages.compare.seoTitle')), computed(() => t('pages.compare.seoDescription')))
</script>

<template>
  <PageIntro
    :eyebrow="$t('pages.compare.eyebrow')"
    :title="$t('pages.compare.title')"
    :description="$t('pages.compare.description')"
  />
</template>
