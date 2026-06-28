<script setup lang="ts">
const { t } = useI18n()
usePageSeo(computed(() => t('pages.legal.seoTitle')), computed(() => t('pages.legal.seoDescription')))
</script>

<template>
  <PageIntro
    :eyebrow="$t('pages.legal.eyebrow')"
    :title="$t('pages.legal.title')"
    :description="$t('pages.legal.description')"
  />
</template>
