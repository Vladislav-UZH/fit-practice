<script setup lang="ts">
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const mobileOpen = ref(false)
const mobileTrigger = ref<HTMLButtonElement | null>(null)

const navigation = computed(() => [
  { label: t('nav.products'), to: localePath('products') },
  { label: t('nav.compare'), to: localePath('products-compare') },
  { label: t('nav.technology'), to: localePath('technology') },
  { label: t('nav.about'), to: localePath('about') }
])

const alternateLocale = computed(() =>
  locales.value.find(item => item.code !== locale.value)
)

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)

watch(mobileOpen, async (open, wasOpen) => {
  if (!open && wasOpen) {
    await nextTick()
    mobileTrigger.value?.focus()
  }
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-black/10 bg-[#f3f2ed]/95 backdrop-blur-xl">
    <UContainer class="flex min-h-18 items-center justify-between gap-3 py-3 sm:gap-6">
      <NuxtLinkLocale
        to="index"
        class="flex min-w-0 shrink items-center gap-3 font-semibold tracking-tight"
        :aria-label="$t('brand.homeLabel')"
      >
        <span class="grid size-9 shrink-0 place-items-center rounded-md bg-[#171b19] text-sm font-bold text-[#d4ff49]">M</span>
        <span class="truncate text-sm sm:text-base">MAXIBUD <span class="hidden sm:inline">ENERGY</span></span>
      </NuxtLinkLocale>

      <nav class="hidden items-stretch self-stretch lg:flex" :aria-label="$t('a11y.primaryNavigation')">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="flex items-center border-b-2 border-transparent px-4 text-sm font-medium text-black/60 transition-colors hover:text-black"
          active-class="border-[#171b19] text-black"
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

        <button
          ref="mobileTrigger"
          type="button"
          class="grid size-11 place-items-center rounded-md text-black/70 transition-colors hover:bg-black/5 hover:text-black lg:hidden"
          :aria-label="$t('a11y.openMenu')"
          aria-haspopup="dialog"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = true"
        >
          <UIcon name="i-lucide-menu" class="size-5" aria-hidden="true" />
        </button>

        <UDrawer
          v-model:open="mobileOpen"
          direction="right"
          :handle="false"
          :title="$t('nav.menu')"
          :description="$t('nav.menuDescription')"
        >
          <template #body>
            <nav :aria-label="$t('a11y.mobileNavigation')">
              <ul class="space-y-1">
                <li v-for="item in navigation" :key="item.to">
                  <NuxtLink
                    :to="item.to"
                    class="flex min-h-12 items-center justify-between rounded-md px-3 py-3 text-base font-semibold hover:bg-black/5"
                    active-class="bg-black/5"
                  >
                    <span>{{ item.label }}</span>
                    <UIcon name="i-lucide-arrow-up-right" class="size-4 text-black/35" />
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </template>

          <template #footer>
            <UButton
              :to="localePath('contact')"
              color="primary"
              size="lg"
              trailing-icon="i-lucide-arrow-up-right"
              class="w-full justify-center"
            >
              {{ $t('actions.consultation') }}
            </UButton>
          </template>
        </UDrawer>
      </div>
    </UContainer>
  </header>
</template>
