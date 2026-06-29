<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <section
    data-testid="homepage-final-cta"
    class="bg-[#c8f43d] py-14 text-[#171b19] sm:py-20 lg:py-24"
  >
    <UContainer>
      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-8">
          <div class="flex flex-wrap items-center gap-3">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
              {{ $t('pages.home.finalCta.eyebrow') }}
            </p>
            <span class="rounded-full border border-black/15 bg-black/[0.04] px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-black/60">
              {{ $t('disclosure.shortTitle') }}
            </span>
          </div>

          <h2 class="mt-5 max-w-5xl text-[clamp(2.5rem,5.8vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
            {{ $t('pages.home.finalCta.title') }}
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            {{ $t('pages.home.finalCta.description') }}
          </p>
        </div>

        <div class="lg:col-span-4 lg:justify-self-end">
          <div class="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <UButton
              :to="localePath('contact')"
              color="neutral"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="justify-center bg-[#171b19] text-white hover:bg-black"
            >
              {{ $t('actions.consultation') }}
            </UButton>
            <UButton
              :to="localePath('products')"
              color="neutral"
              variant="outline"
              size="xl"
              class="justify-center border-black/30 text-[#171b19] hover:bg-black/5"
            >
              {{ $t('actions.viewProducts') }}
            </UButton>
          </div>
        </div>
      </div>

      <div class="mt-10 grid gap-5 border-t border-black/20 pt-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12">
        <p class="text-sm leading-6 text-black/60 sm:col-span-1 lg:col-span-7">
          {{ $t('pages.home.finalCta.disclosure') }}
        </p>
        <p class="font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.12em] text-black/60 sm:text-right lg:col-span-5">
          {{ $t('pages.home.finalCta.processNote') }}
        </p>
      </div>
    </UContainer>
  </section>
</template>
