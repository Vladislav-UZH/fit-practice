<script setup lang="ts">
const { t } = useI18n()
usePageSeo(computed(() => t('pages.legal.seoTitle')), computed(() => t('pages.legal.seoDescription')))

const legalSections = computed(() => [
  'educationalStatus',
  'productStatus',
  'commercialStatus',
  'contactData',
  'assets'
])
</script>

<template>
  <div data-testid="legal-page" class="pb-20 sm:pb-28">
    <PageIntro
      :eyebrow="$t('pages.legal.eyebrow')"
      :title="$t('pages.legal.title')"
      :description="$t('pages.legal.description')"
    />

    <section aria-labelledby="legal-disclosure-heading">
      <UContainer>
        <div class="grid gap-6 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.legal.sectionsEyebrow') }}
            </p>
            <h2 id="legal-disclosure-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ $t('pages.legal.sectionsTitle') }}
            </h2>
          </div>

          <div class="space-y-5 lg:col-span-8">
            <article
              v-for="section in legalSections"
              :key="section"
              class="border border-black/15 bg-white p-6 sm:p-8"
            >
              <h3 class="text-xl font-semibold">
                {{ $t(`pages.legal.sections.${section}.title`) }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-black/65">
                {{ $t(`pages.legal.sections.${section}.description`) }}
              </p>
            </article>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
