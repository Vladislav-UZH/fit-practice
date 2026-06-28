<script setup lang="ts">
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const navigation = computed(() => [
  { label: t('nav.products'), to: localePath('products') },
  { label: t('nav.compare'), to: localePath('products-compare') },
  { label: t('nav.technology'), to: localePath('technology') },
  { label: t('nav.about'), to: localePath('about') }
])

const alternateLocale = computed(() =>
  locales.value.find(item => item.code !== locale.value)
)
</script>

<template>
  <header class="relative z-40 border-b border-black/10 bg-[#f3f2ed]/95 backdrop-blur">
    <UContainer class="flex min-h-18 items-center justify-between gap-3 py-3 sm:gap-6">
      <NuxtLinkLocale
        to="index"
        class="flex min-w-0 shrink items-center gap-3 font-semibold tracking-tight"
        :aria-label="$t('brand.homeLabel')"
      >
        <span class="grid size-8 shrink-0 place-items-center rounded-md bg-[#171b19] text-sm font-bold text-[#d4ff49]">M</span>
        <span class="truncate">MAXIBUD <span class="hidden sm:inline">ENERGY</span></span>
      </NuxtLinkLocale>

      <nav class="hidden items-center gap-6 lg:flex" :aria-label="$t('a11y.primaryNavigation')">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-black/65 transition-colors hover:text-black"
          active-class="text-black"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex shrink-0 items-center gap-1 sm:gap-2">
        <UButton
          v-if="alternateLocale"
          :to="switchLocalePath(alternateLocale.code)"
          color="neutral"
          variant="ghost"
          size="sm"
          :aria-label="$t('a11y.switchLanguage', { language: alternateLocale.name })"
        >
          {{ alternateLocale.code.toUpperCase() }}
        </UButton>

        <UButton
          :to="localePath('contact')"
          color="primary"
          trailing-icon="i-lucide-arrow-up-right"
          class="hidden sm:inline-flex"
        >
          {{ $t('actions.consultation') }}
        </UButton>

        <details class="group relative lg:hidden">
          <summary
            class="flex min-h-11 cursor-pointer list-none items-center rounded-md border border-black/15 px-3 text-sm font-semibold marker:content-none"
          >
            {{ $t('nav.menu') }}
          </summary>
          <nav
            class="absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-2rem))] border border-black/10 bg-[#f3f2ed] p-3 shadow-lg"
            :aria-label="$t('a11y.mobileNavigation')"
          >
            <ul class="space-y-1">
              <li v-for="item in navigation" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-black/5"
                  active-class="bg-black/5"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
              <li class="sm:hidden">
                <NuxtLink
                  :to="localePath('contact')"
                  class="block rounded-md bg-[#171b19] px-3 py-3 text-sm font-semibold text-white"
                >
                  {{ $t('actions.consultation') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </UContainer>
  </header>
</template>
