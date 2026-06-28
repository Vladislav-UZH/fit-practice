<script setup lang="ts">
const { t } = useI18n()
usePageSeo(computed(() => t('pages.about.seoTitle')), computed(() => t('pages.about.seoDescription')))
</script>

<template>
  <PageIntro
    :eyebrow="$t('pages.about.eyebrow')"
    :title="$t('pages.about.title')"
    :description="$t('pages.about.description')"
  />
</template>
