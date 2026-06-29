<script setup lang="ts">
import type { ComparisonValueStatus, ProductComparison, ProductSlug } from '~~/shared/schemas/product'

type ComparisonValueKey = keyof ProductComparison['values']

interface ComparisonProduct {
  slug: ProductSlug
  name: string
  category: string
  comparison: ProductComparison
}

interface ComparisonGroup {
  id: 'context' | 'energy-output' | 'format' | 'system'
  label: string
  rows: Array<{
    key: ComparisonValueKey
    label: string
  }>
}

const props = defineProps<{
  products: ComparisonProduct[]
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const portfolioOrder: ProductSlug[] = [
  'powerbox-2400',
  'homecore-5',
  'sitehub-10'
]

const orderedProducts = computed(() =>
  portfolioOrder.flatMap((slug) => {
    const product = props.products.find(item => item.slug === slug)
    return product ? [product] : []
  })
)

const groups = computed<ComparisonGroup[]>(() => [
  {
    id: 'context',
    label: t('pages.compare.groups.context'),
    rows: [
      { key: 'primaryUse', label: t('pages.compare.rows.primaryUse') },
      { key: 'recommendedUser', label: t('pages.compare.rows.recommendedUser') }
    ]
  },
  {
    id: 'energy-output',
    label: t('pages.compare.groups.energyOutput'),
    rows: [
      { key: 'energy', label: t('pages.compare.rows.energy') },
      { key: 'ratedOutput', label: t('pages.compare.rows.ratedOutput') },
      { key: 'peakOutput', label: t('pages.compare.rows.peakOutput') }
    ]
  },
  {
    id: 'format',
    label: t('pages.compare.groups.format'),
    rows: [
      { key: 'mobility', label: t('pages.compare.rows.mobility') },
      { key: 'installation', label: t('pages.compare.rows.installation') },
      { key: 'weight', label: t('pages.compare.rows.weight') },
      { key: 'protection', label: t('pages.compare.rows.protection') }
    ]
  },
  {
    id: 'system',
    label: t('pages.compare.groups.system'),
    rows: [
      { key: 'charging', label: t('pages.compare.rows.charging') },
      { key: 'expansion', label: t('pages.compare.rows.expansion') },
      { key: 'monitoring', label: t('pages.compare.rows.monitoring') }
    ]
  }
])

function statusLabel(status: ComparisonValueStatus) {
  if (status === 'configuration-dependent') {
    return t('pages.compare.status.configurationDependent')
  }

  if (status === 'unavailable') {
    return t('pages.compare.status.unavailable')
  }

  return null
}
</script>

<template>
  <section data-testid="full-comparison" class="pb-20 sm:pb-28">
    <UContainer>
      <div v-if="orderedProducts.length === 3">
        <div class="hidden lg:block">
          <table
            data-testid="full-comparison-table"
            class="w-full table-fixed border-collapse border border-black/15 bg-white"
          >
            <caption class="sr-only">
              {{ $t('pages.compare.caption') }}
            </caption>
            <colgroup>
              <col class="w-[19%]">
              <col class="w-[27%]">
              <col class="w-[27%]">
              <col class="w-[27%]">
            </colgroup>
            <thead class="sticky top-0 z-10 bg-[#171b19] text-white shadow-[0_1px_0_rgba(255,255,255,0.2)]">
              <tr>
                <th scope="col" class="border-r border-white/15 p-5 text-left align-bottom">
                  <span class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/60">
                    {{ $t('pages.compare.metricLabel') }}
                  </span>
                </th>
                <th
                  v-for="product in orderedProducts"
                  :key="product.slug"
                  scope="col"
                  data-testid="full-comparison-column"
                  class="border-r border-white/15 p-5 text-left align-bottom last:border-r-0"
                >
                  <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#c8f43d]">
                    {{ product.category }}
                  </p>
                  <NuxtLink
                    :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
                    class="mt-2 inline-flex text-xl font-semibold tracking-[-0.025em] text-white hover:text-[#c8f43d] focus-visible:text-[#c8f43d]"
                  >
                    {{ product.name }}
                  </NuxtLink>
                  <p class="mt-2 text-sm font-normal leading-5 text-white/70">
                    {{ product.comparison.context }}
                  </p>
                </th>
              </tr>
            </thead>

            <tbody
              v-for="group in groups"
              :key="group.id"
              :data-testid="`full-comparison-group-${group.id}`"
            >
              <tr class="bg-[#e8e8e1]">
                <th colspan="4" scope="colgroup" class="border-y border-black/15 p-5 text-left">
                  <span class="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                    {{ group.label }}
                  </span>
                  <span class="ml-4 text-sm font-normal normal-case tracking-normal text-black/60">
                    {{ $t('pages.compare.groupDisclosure') }}
                  </span>
                </th>
              </tr>
              <tr v-for="row in group.rows" :key="row.key">
                <th
                  scope="row"
                  class="border-b border-r border-black/15 p-5 text-left text-sm font-semibold leading-6"
                >
                  {{ row.label }}
                </th>
                <td
                  v-for="product in orderedProducts"
                  :key="`${product.slug}-${row.key}`"
                  class="border-b border-r border-black/15 p-5 align-top text-sm leading-6 last:border-r-0"
                >
                  <span
                    v-if="statusLabel(product.comparison.values[row.key].status)"
                    class="mb-2 inline-flex border border-black/20 bg-[#f3f2ed] px-2 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-black/65"
                  >
                    {{ statusLabel(product.comparison.values[row.key].status) }}
                  </span>
                  <span class="block font-medium text-black/80">
                    {{ product.comparison.values[row.key].value }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div data-testid="full-comparison-mobile-list" class="space-y-6 lg:hidden">
          <article
            v-for="(product, productIndex) in orderedProducts"
            :key="product.slug"
            data-testid="full-comparison-mobile-product"
            class="min-w-0 border border-black/15 bg-white"
          >
            <header class="bg-[#171b19] p-5 text-white sm:p-6">
              <div class="flex min-w-0 items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#c8f43d]">
                    {{ product.category }}
                  </p>
                  <h2 class="mt-2 break-words text-2xl font-semibold tracking-[-0.03em]">
                    {{ product.name }}
                  </h2>
                </div>
                <span class="shrink-0 font-mono text-xs text-white/50" aria-hidden="true">
                  0{{ productIndex + 1 }}
                </span>
              </div>
              <p class="mt-3 text-sm leading-6 text-white/70">
                {{ product.comparison.context }}
              </p>
            </header>

            <section
              v-for="group in groups"
              :key="group.id"
              :data-testid="`mobile-group-${group.id}`"
              class="border-b border-black/15 p-5 last:border-b-0 sm:p-6"
            >
              <h3 class="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                {{ group.label }}
              </h3>
              <p class="mt-2 text-xs leading-5 text-black/60">
                {{ $t('pages.compare.groupDisclosure') }}
              </p>
              <dl class="mt-4 divide-y divide-black/10 border-y border-black/10">
                <div v-for="row in group.rows" :key="row.key" class="py-4">
                  <dt class="text-xs font-semibold leading-5 text-black/55">
                    {{ row.label }}
                  </dt>
                  <dd class="mt-2 break-words text-sm font-medium leading-6 text-black/80">
                    <span
                      v-if="statusLabel(product.comparison.values[row.key].status)"
                      class="mb-2 inline-flex border border-black/20 bg-[#f3f2ed] px-2 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-black/65"
                    >
                      {{ statusLabel(product.comparison.values[row.key].status) }}
                    </span>
                    <span class="block">
                      {{ product.comparison.values[row.key].value }}
                    </span>
                  </dd>
                </div>
              </dl>
            </section>

            <div class="border-t border-black/15 p-5 sm:p-6">
              <UButton
                :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
                color="neutral"
                variant="outline"
                trailing-icon="i-lucide-arrow-right"
              >
                {{ $t('actions.viewProduct') }}
              </UButton>
            </div>
          </article>
        </div>

        <div class="mt-10 grid gap-6 border-t border-black/15 pt-8 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.compare.nextStepEyebrow') }}
            </p>
            <p class="mt-3 max-w-2xl text-lg font-semibold leading-7">
              {{ $t('pages.compare.nextStep') }}
            </p>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-black/60">
              {{ $t('pages.compare.consultationDisclosure') }}
            </p>
          </div>
          <div class="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <UButton
              :to="localePath('contact')"
              color="primary"
              size="lg"
              trailing-icon="i-lucide-arrow-up-right"
            >
              {{ $t('actions.consultation') }}
            </UButton>
            <UButton :to="localePath('products')" color="neutral" variant="outline" size="lg">
              {{ $t('actions.viewProducts') }}
            </UButton>
          </div>
        </div>
      </div>

      <UAlert
        v-else
        color="neutral"
        variant="subtle"
        :title="$t('states.productsUnavailableTitle')"
        :description="$t('states.productsUnavailableDescription')"
      />
    </UContainer>
  </section>
</template>
