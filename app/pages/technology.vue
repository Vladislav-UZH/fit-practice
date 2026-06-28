<script setup lang="ts">
const { t } = useI18n()
usePageSeo(computed(() => t('pages.technology.seoTitle')), computed(() => t('pages.technology.seoDescription')))
</script>

<template>
  <PageIntro
    :eyebrow="$t('pages.technology.eyebrow')"
    :title="$t('pages.technology.title')"
    :description="$t('pages.technology.description')"
  />
</template>
