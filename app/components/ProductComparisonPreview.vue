<script setup lang="ts">
type ProductSlug = 'powerbox-2400' | 'homecore-5' | 'sitehub-10'
type ComparisonKey = 'capacity' | 'output' | 'format'

interface ProductComparison {
  capacity: string
  output: string
  format: string
}

interface ComparisonProduct {
  slug: ProductSlug
  name: string
  category: string
  lineup: {
    comparison: ProductComparison
  }
}

interface ComparisonMetric {
  key: ComparisonKey
  label: string
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

const metrics = computed<ComparisonMetric[]>(() => [
  {
    key: 'capacity',
    label: t('pages.home.comparison.capacity')
  },
  {
    key: 'output',
    label: t('pages.home.comparison.output')
  },
  {
    key: 'format',
    label: t('pages.home.comparison.format')
  }
])
</script>

<template>
  <section
    data-testid="comparison-preview"
    class="bg-[#171b19] py-16 text-white sm:py-24 lg:py-28"
  >
    <UContainer>
      <div class="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-7">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#c8f43d]">
            {{ $t('pages.home.comparisonPreview.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {{ $t('pages.home.comparisonPreview.title') }}
          </h2>
        </div>

        <div class="max-w-xl lg:col-span-5 lg:justify-self-end">
          <p class="text-base leading-7 text-white/65">
            {{ $t('pages.home.comparisonPreview.description') }}
          </p>
          <p class="mt-3 text-sm leading-6 text-white/45">
            {{ $t('pages.home.comparisonPreview.disclosure') }}
          </p>
        </div>
      </div>

      <div v-if="orderedProducts.length === 3" class="mt-10 sm:mt-12">
        <div class="hidden lg:block">
          <div class="border border-white/15 bg-white/[0.035] p-1">
            <table data-testid="comparison-preview-table" class="w-full table-fixed border-collapse">
              <caption class="sr-only">
                {{ $t('pages.home.comparisonPreview.caption') }}
              </caption>
              <colgroup>
                <col class="w-[19%]">
                <col class="w-[27%]">
                <col class="w-[27%]">
                <col class="w-[27%]">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="border-b border-r border-white/15 p-5 text-left align-bottom">
                    <span class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/40">
                      {{ $t('pages.home.comparisonPreview.metricsLabel') }}
                    </span>
                  </th>
                  <th
                    v-for="product in orderedProducts"
                    :key="product.slug"
                    scope="col"
                    data-testid="comparison-preview-column"
                    class="border-b border-r border-white/15 p-5 text-left align-bottom last:border-r-0"
                  >
                    <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#c8f43d]">
                      {{ product.category }}
                    </p>
                    <NuxtLink
                      :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
                      class="mt-3 inline-flex text-2xl font-semibold tracking-[-0.03em] text-white hover:text-[#c8f43d] focus-visible:text-[#c8f43d]"
                    >
                      {{ product.name }}
                    </NuxtLink>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="metric in metrics" :key="metric.key">
                  <th
                    scope="row"
                    class="border-b border-r border-white/15 p-5 text-left font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/45"
                  >
                    {{ metric.label }}
                  </th>
                  <td
                    v-for="product in orderedProducts"
                    :key="`${product.slug}-${metric.key}`"
                    class="border-b border-r border-white/15 p-5 text-lg font-semibold leading-7 text-white/85 last:border-r-0"
                  >
                    {{ product.lineup.comparison[metric.key] }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" class="border-r border-white/15 p-5 text-left font-mono text-xs uppercase tracking-[0.14em] text-white/35">
                    {{ $t('pages.home.comparisonPreview.detailsLabel') }}
                  </th>
                  <td
                    v-for="product in orderedProducts"
                    :key="`${product.slug}-action`"
                    class="border-r border-white/15 p-5 last:border-r-0"
                  >
                    <UButton
                      :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
                      color="neutral"
                      variant="outline"
                      size="sm"
                      trailing-icon="i-lucide-arrow-right"
                      class="border-white/25 text-white hover:bg-white/10"
                    >
                      {{ $t('actions.viewProduct') }}
                    </UButton>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div data-testid="comparison-preview-mobile-list" class="space-y-4 lg:hidden">
          <article
            v-for="(product, index) in orderedProducts"
            :key="product.slug"
            data-testid="comparison-preview-mobile-card"
            class="border border-white/15 bg-white/[0.035] p-5 sm:p-6"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#c8f43d]">
                  {{ product.category }}
                </p>
                <h3 class="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {{ product.name }}
                </h3>
              </div>
              <span class="font-mono text-xs text-white/35" aria-hidden="true">
                0{{ index + 1 }}
              </span>
            </div>

            <dl class="mt-6 divide-y divide-white/10 border-y border-white/10">
              <div
                v-for="metric in metrics"
                :key="metric.key"
                class="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 py-4"
              >
                <dt class="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/45">
                  {{ metric.label }}
                </dt>
                <dd class="text-right text-sm font-semibold leading-6 text-white/85">
                  {{ product.lineup.comparison[metric.key] }}
                </dd>
              </div>
            </dl>

            <UButton
              :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
              color="neutral"
              variant="outline"
              size="sm"
              trailing-icon="i-lucide-arrow-right"
              class="mt-6 border-white/25 text-white hover:bg-white/10"
            >
              {{ $t('actions.viewProduct') }}
            </UButton>
          </article>
        </div>

        <div class="mt-8 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p class="max-w-2xl text-sm leading-6 text-white/45">
            {{ $t('pages.home.comparisonPreview.footerNote') }}
          </p>
          <UButton
            :to="localePath('products-compare')"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="shrink-0"
          >
            {{ $t('actions.compare') }}
          </UButton>
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
