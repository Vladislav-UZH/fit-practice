<script setup lang="ts">
const { t } = useI18n()
usePageSeo(computed(() => t('pages.contact.seoTitle')), computed(() => t('pages.contact.seoDescription')))
</script>

<template>
  <PageIntro
    :eyebrow="$t('pages.contact.eyebrow')"
    :title="$t('pages.contact.title')"
    :description="$t('pages.contact.description')"
  />
</template>
