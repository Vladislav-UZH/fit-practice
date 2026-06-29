<script setup lang="ts">
type ProductSlug = 'powerbox-2400' | 'homecore-5' | 'sitehub-10'

interface ProductComparison {
  capacity: string
  output: string
  format: string
}

interface ProductLineup {
  context: string
  distinction: string
  reasons: string[]
  comparison: ProductComparison
  visualDescription: string
}

interface LineupProduct {
  slug: ProductSlug
  name: string
  category: string
  summary: string
  lineup: ProductLineup
}

const props = defineProps<{
  product: LineupProduct
  index: number
  to: string
}>()

const chapterNumber = computed(() => String(props.index + 1).padStart(2, '0'))
const reversed = computed(() => props.index % 2 === 1)
</script>

<template>
  <article
    data-testid="product-lineup-chapter"
    :data-product-slug="product.slug"
    class="border-t border-black/15 py-12 sm:py-16 lg:py-20"
  >
    <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div
        class="lg:col-span-5"
        :class="reversed ? 'lg:order-2' : 'lg:order-1'"
      >
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
          <span class="text-black/35" aria-hidden="true">{{ chapterNumber }}</span>
          <span class="text-[#637b13]">{{ product.category }}</span>
          <span class="rounded-full border border-black/10 bg-white/55 px-2.5 py-1 text-black/50">
            {{ $t('disclosure.shortTitle') }}
          </span>
        </div>

        <h3 class="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
          {{ product.name }}
        </h3>
        <p class="mt-4 text-xl font-semibold leading-tight sm:text-2xl">
          {{ product.lineup.distinction }}
        </p>
        <p class="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-black/45">
          {{ product.lineup.context }}
        </p>
        <p class="mt-6 max-w-xl text-base leading-7 text-black/65">
          {{ product.summary }}
        </p>

        <ul class="mt-7 space-y-3">
          <li
            v-for="reason in product.lineup.reasons"
            :key="reason"
            class="grid grid-cols-[0.75rem_1fr] gap-3 text-sm leading-6 text-black/70"
          >
            <span class="mt-2.5 block h-0.5 bg-[#7b9816]" aria-hidden="true" />
            <span>{{ reason }}</span>
          </li>
        </ul>

        <dl class="mt-8 grid border-y border-black/15 sm:grid-cols-3">
          <div class="py-4 sm:pr-4">
            <dt class="text-xs text-black/45">{{ $t('pages.home.comparison.capacity') }}</dt>
            <dd class="mt-2 font-mono text-sm font-semibold leading-5">{{ product.lineup.comparison.capacity }}</dd>
          </div>
          <div class="border-t border-black/10 py-4 sm:border-l sm:border-t-0 sm:px-4">
            <dt class="text-xs text-black/45">{{ $t('pages.home.comparison.output') }}</dt>
            <dd class="mt-2 font-mono text-sm font-semibold leading-5">{{ product.lineup.comparison.output }}</dd>
          </div>
          <div class="border-t border-black/10 py-4 sm:border-l sm:border-t-0 sm:pl-4">
            <dt class="text-xs text-black/45">{{ $t('pages.home.comparison.format') }}</dt>
            <dd class="mt-2 font-mono text-sm font-semibold leading-5">{{ product.lineup.comparison.format }}</dd>
          </div>
        </dl>

        <UButton
          :to="to"
          color="neutral"
          variant="link"
          trailing-icon="i-lucide-arrow-right"
          class="mt-7 px-0"
        >
          {{ $t('actions.viewProduct') }}
        </UButton>
      </div>

      <div
        class="lg:col-span-7"
        :class="reversed ? 'lg:order-1' : 'lg:order-2'"
      >
        <ProductLineupVisual
          :slug="product.slug"
          :accessible-label="product.lineup.visualDescription"
        />
      </div>
    </div>
  </article>
</template>
