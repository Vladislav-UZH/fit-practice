<script setup lang="ts">
type ProductSlug = 'powerbox-2400' | 'homecore-5' | 'sitehub-10'
type UseCaseId = 'home' | 'mobile' | 'site'

interface ProductLineup {
  context: string
  distinction: string
  reasons: string[]
  comparison: {
    capacity: string
    output: string
    format: string
  }
  visualDescription: string
}

interface RecommendationProduct {
  slug: ProductSlug
  name: string
  category: string
  lineup: ProductLineup
}

interface RecommendationItem {
  id: UseCaseId
  icon: string
  product: RecommendationProduct
  label: string
  title: string
  description: string
}

const props = defineProps<{
  products: RecommendationProduct[]
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const definitions = [
  { id: 'home', productSlug: 'homecore-5', icon: 'i-lucide-house' },
  { id: 'mobile', productSlug: 'powerbox-2400', icon: 'i-lucide-briefcase-business' },
  { id: 'site', productSlug: 'sitehub-10', icon: 'i-lucide-hard-hat' }
] as const

const activeId = ref<UseCaseId>('home')
const interactiveReady = ref(false)

const recommendations = computed<RecommendationItem[]>(() =>
  definitions.flatMap((definition) => {
    const product = props.products.find(item => item.slug === definition.productSlug)

    if (!product) {
      return []
    }

    return [{
      id: definition.id,
      icon: definition.icon,
      product,
      label: t(`pages.home.recommendation.contexts.${definition.id}.label`),
      title: t(`pages.home.recommendation.contexts.${definition.id}.title`),
      description: t(`pages.home.recommendation.contexts.${definition.id}.description`)
    }]
  })
)

const activeRecommendation = computed(() =>
  recommendations.value.find(item => item.id === activeId.value) ?? recommendations.value[0]
)

onMounted(() => {
  interactiveReady.value = true
})

function tabId(id: UseCaseId) {
  return `use-case-tab-${id}`
}

async function activateAt(index: number) {
  const item = recommendations.value[index]

  if (!item) {
    return
  }

  activeId.value = item.id
  await nextTick()

  if (import.meta.client) {
    document.getElementById(tabId(item.id))?.focus()
  }
}

function handleTabKeydown(event: KeyboardEvent, index: number) {
  const lastIndex = recommendations.value.length - 1
  let nextIndex: number | undefined

  if (event.key === 'ArrowRight') {
    nextIndex = index === lastIndex ? 0 : index + 1
  } else if (event.key === 'ArrowLeft') {
    nextIndex = index === 0 ? lastIndex : index - 1
  } else if (event.key === 'Home') {
    nextIndex = 0
  } else if (event.key === 'End') {
    nextIndex = lastIndex
  }

  if (nextIndex === undefined) {
    return
  }

  event.preventDefault()
  void activateAt(nextIndex)
}
</script>

<template>
  <section
    data-testid="use-case-recommendation"
    class="border-y border-black/10 bg-white/50 py-16 sm:py-24 lg:py-28"
  >
    <UContainer>
      <div class="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-7">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
            {{ $t('pages.home.recommendation.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {{ $t('pages.home.recommendation.title') }}
          </h2>
        </div>
        <div class="max-w-xl lg:col-span-5 lg:justify-self-end">
          <p class="text-base leading-7 text-black/60">
            {{ $t('pages.home.recommendation.description') }}
          </p>
          <p class="mt-3 text-sm leading-6 text-black/45">
            {{ $t('pages.home.recommendation.disclaimer') }}
          </p>
        </div>
      </div>

      <div v-if="recommendations.length === 3" class="mt-10 sm:mt-12">
        <div class="hidden lg:block">
          <div
            role="tablist"
            :aria-label="$t('a11y.useCaseTabs')"
            :aria-busy="!interactiveReady"
            class="grid grid-cols-3 border border-black/15 bg-[#ebeae4] p-1"
          >
            <button
              v-for="(item, index) in recommendations"
              :id="tabId(item.id)"
              :key="item.id"
              type="button"
              role="tab"
              aria-controls="use-case-panel"
              :aria-selected="activeId === item.id"
              :tabindex="activeId === item.id ? 0 : -1"
              :disabled="!interactiveReady"
              class="flex min-h-16 items-center gap-3 px-5 py-3 text-left text-sm font-semibold transition-colors focus-visible:z-10 disabled:cursor-wait disabled:opacity-55"
              :class="activeId === item.id ? 'bg-[#171b19] text-white' : 'text-black/60 hover:bg-white/70 hover:text-black'"
              @click="activeId = item.id"
              @keydown="handleTabKeydown($event, index)"
            >
              <span
                class="grid size-9 shrink-0 place-items-center border"
                :class="activeId === item.id ? 'border-white/20 bg-white/5 text-[#c8f43d]' : 'border-black/10 bg-white/60 text-black/55'"
                aria-hidden="true"
              >
                <UIcon :name="item.icon" class="size-4" />
              </span>
              <span>{{ item.label }}</span>
            </button>
          </div>

          <div
            v-if="activeRecommendation"
            id="use-case-panel"
            data-testid="use-case-panel"
            role="tabpanel"
            :aria-labelledby="tabId(activeRecommendation.id)"
            tabindex="0"
            class="mt-4 min-h-[36rem] border border-black/15 bg-[#f3f2ed] p-6 sm:p-8"
          >
            <div class="grid min-h-[32rem] items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div class="lg:col-span-5">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#637b13]">
                    {{ activeRecommendation.title }}
                  </span>
                  <span class="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-black/50">
                    {{ $t('pages.home.recommendation.recommendedLabel') }}
                  </span>
                </div>

                <h3 class="mt-5 text-4xl font-semibold tracking-[-0.04em]">
                  {{ activeRecommendation.product.name }}
                </h3>
                <p class="mt-4 text-xl font-semibold leading-tight">
                  {{ activeRecommendation.product.lineup.distinction }}
                </p>
                <p class="mt-5 text-base leading-7 text-black/60">
                  {{ activeRecommendation.description }}
                </p>

                <p class="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-black/45">
                  {{ $t('pages.home.recommendation.reasonsTitle') }}
                </p>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="reason in activeRecommendation.product.lineup.reasons"
                    :key="reason"
                    class="grid grid-cols-[0.75rem_1fr] gap-3 text-sm leading-6 text-black/70"
                  >
                    <span class="mt-2.5 block h-0.5 bg-[#7b9816]" aria-hidden="true" />
                    <span>{{ reason }}</span>
                  </li>
                </ul>

                <div class="mt-8 flex flex-wrap gap-3">
                  <UButton
                    :to="localePath({ name: 'products-slug', params: { slug: activeRecommendation.product.slug } })"
                    color="primary"
                    trailing-icon="i-lucide-arrow-right"
                  >
                    {{ $t('actions.viewProduct') }}
                  </UButton>
                  <UButton
                    :to="localePath('products-compare')"
                    color="neutral"
                    variant="outline"
                  >
                    {{ $t('actions.compare') }}
                  </UButton>
                </div>
              </div>

              <div class="lg:col-span-7">
                <ProductLineupVisual
                  :slug="activeRecommendation.product.slug"
                  :accessible-label="activeRecommendation.product.lineup.visualDescription"
                />
              </div>
            </div>
          </div>
        </div>

        <div data-testid="use-case-mobile-list" class="space-y-4 lg:hidden">
          <article
            v-for="item in recommendations"
            :key="item.id"
            data-testid="use-case-mobile-card"
            class="border border-black/15 bg-[#f3f2ed] p-5 sm:p-6"
          >
            <div class="flex items-start gap-4">
              <span class="grid size-10 shrink-0 place-items-center bg-[#171b19] text-[#c8f43d]" aria-hidden="true">
                <UIcon :name="item.icon" class="size-4" />
              </span>
              <div>
                <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#637b13]">
                  {{ item.title }}
                </p>
                <h3 class="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {{ item.product.name }}
                </h3>
              </div>
            </div>

            <p class="mt-5 text-lg font-semibold leading-tight">
              {{ item.product.lineup.distinction }}
            </p>
            <p class="mt-3 text-sm leading-6 text-black/60">
              {{ item.description }}
            </p>

            <ul class="mt-5 space-y-3">
              <li
                v-for="reason in item.product.lineup.reasons"
                :key="reason"
                class="grid grid-cols-[0.75rem_1fr] gap-3 text-sm leading-6 text-black/70"
              >
                <span class="mt-2.5 block h-0.5 bg-[#7b9816]" aria-hidden="true" />
                <span>{{ reason }}</span>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-3">
              <UButton
                :to="localePath({ name: 'products-slug', params: { slug: item.product.slug } })"
                color="primary"
                size="sm"
                trailing-icon="i-lucide-arrow-right"
              >
                {{ $t('actions.viewProduct') }}
              </UButton>
              <UButton
                :to="localePath('products-compare')"
                color="neutral"
                variant="outline"
                size="sm"
              >
                {{ $t('actions.compare') }}
              </UButton>
            </div>
          </article>
        </div>
      </div>

      <UAlert
        v-else
        class="mt-10"
        color="neutral"
        variant="subtle"
        :title="$t('states.productsUnavailableTitle')"
        :description="$t('states.productsUnavailableDescription')"
      />
    </UContainer>
  </section>
</template>
