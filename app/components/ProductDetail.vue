<script setup lang="ts">
import type {
  ComparisonValueStatus,
  ProductContent
} from '~~/shared/schemas/product'

const props = defineProps<{
  product: ProductContent
  products: ProductContent[]
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const relatedProducts = computed(() =>
  props.products
    .filter(product => product.slug !== props.product.slug)
    .sort((a, b) => a.order - b.order)
)

const consultationPath = computed(() => localePath({
  name: 'contact',
  query: { product: props.product.slug }
}))

function statusLabel(status: ComparisonValueStatus) {
  if (status === 'configuration-dependent') {
    return t('pages.product.status.configurationDependent')
  }

  if (status === 'unavailable') {
    return t('pages.product.status.unavailable')
  }

  return null
}
</script>

<template>
  <article data-testid="product-detail" class="pb-20 sm:pb-28">
    <header class="py-14 sm:py-20 lg:py-24">
      <UContainer>
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="min-w-0 lg:col-span-6">
            <div class="flex flex-wrap items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.14em]">
              <span class="text-[#637b13]">{{ product.category }}</span>
              <span class="border border-black/15 bg-white px-2.5 py-1 text-black/55">
                {{ $t('disclosure.shortTitle') }}
              </span>
            </div>
            <h1 class="mt-5 break-words text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
              {{ product.name }}
            </h1>
            <p class="mt-5 text-xl font-semibold leading-tight sm:text-2xl">
              {{ product.tagline }}
            </p>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              {{ product.summary }}
            </p>
            <p class="mt-5 max-w-2xl font-mono text-xs uppercase tracking-[0.12em] text-black/50">
              {{ product.lineup.context }} · {{ product.lineup.distinction }}
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <UButton
                :to="consultationPath"
                color="primary"
                size="lg"
                trailing-icon="i-lucide-arrow-up-right"
              >
                {{ $t('actions.consultation') }}
              </UButton>
              <UButton
                :to="localePath('products-compare')"
                color="neutral"
                variant="outline"
                size="lg"
              >
                {{ $t('actions.compare') }}
              </UButton>
            </div>
          </div>

          <div class="min-w-0 lg:col-span-6">
            <ProductLineupVisual
              :slug="product.slug"
              :accessible-label="product.detailVisualDescription"
            />
          </div>
        </div>

        <dl class="mt-12 grid border-y border-black/15 sm:grid-cols-3">
          <div
            v-for="(highlight, index) in product.highlights"
            :key="highlight.label"
            class="min-w-0 py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0"
            :class="{ 'border-t border-black/10 sm:border-l sm:border-t-0': index > 0 }"
          >
            <dt class="text-sm text-black/50">{{ highlight.label }}</dt>
            <dd class="mt-2 break-words font-mono text-2xl font-semibold">{{ highlight.value }}</dd>
            <p v-if="highlight.qualifier" class="mt-1 text-xs leading-5 text-black/50">
              {{ highlight.qualifier }}
            </p>
          </div>
        </dl>
      </UContainer>
    </header>

    <section aria-labelledby="product-overview-heading" class="border-t border-black/10 py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.product.overviewEyebrow') }}
            </p>
            <h2 id="product-overview-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ $t('pages.product.overviewTitle') }}
            </h2>
          </div>
          <div class="max-w-3xl lg:col-span-7 lg:col-start-6">
            <p class="text-xl font-semibold leading-8">{{ product.overview.lead }}</p>
            <p
              v-for="paragraph in product.overview.paragraphs"
              :key="paragraph"
              class="mt-5 text-base leading-7 text-black/65"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="product-features-heading" class="bg-white py-16 sm:py-24">
      <UContainer>
        <h2 id="product-features-heading" class="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
          {{ $t('pages.product.featuresTitle') }}
        </h2>
        <div class="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          <article
            v-for="(feature, index) in product.features"
            :key="feature.title"
            class="border-t border-black/15 pt-5"
          >
            <p class="font-mono text-xs text-black/35" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-3 text-xl font-semibold">{{ feature.title }}</h3>
            <p class="mt-3 max-w-xl leading-7 text-black/65">{{ feature.description }}</p>
          </article>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="product-applications-heading" class="py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <h2 id="product-applications-heading" class="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ $t('pages.product.applicationsTitle') }}
            </h2>
            <p class="mt-5 max-w-sm text-sm leading-6 text-black/60">
              {{ $t('pages.product.applicationsDisclosure') }}
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <article
              v-for="application in product.applications"
              :key="application.title"
              class="min-w-0 border border-black/15 bg-white p-5 sm:p-6"
            >
              <h3 class="text-lg font-semibold">{{ application.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-black/65">{{ application.description }}</p>
            </article>
          </div>
        </div>
      </UContainer>
    </section>

    <section
      data-testid="product-specifications"
      aria-labelledby="product-specifications-heading"
      class="bg-[#171b19] py-16 text-white sm:py-24"
    >
      <UContainer>
        <div class="max-w-3xl">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c8f43d]">
            {{ $t('pages.product.specificationsEyebrow') }}
          </p>
          <h2 id="product-specifications-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {{ $t('pages.product.specificationsTitle') }}
          </h2>
          <p class="mt-5 text-base leading-7 text-white/65">{{ product.conceptNotice }}</p>
        </div>

        <div class="mt-10 space-y-5">
          <section
            v-for="group in product.specifications"
            :key="group.id"
            data-testid="product-specification-group"
            :data-group-id="group.id"
            class="border border-white/15 bg-white/[0.03]"
          >
            <header class="border-b border-white/15 p-5 sm:p-6">
              <h3 class="text-xl font-semibold">{{ group.title }}</h3>
              <p class="mt-2 text-xs leading-5 text-white/55">
                {{ $t('pages.product.specificationDisclosure') }}
              </p>
            </header>
            <dl class="divide-y divide-white/10">
              <div
                v-for="item in group.items"
                :key="item.key"
                data-testid="product-specification-item"
                class="grid min-w-0 gap-2 p-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:p-6"
              >
                <dt class="text-sm font-semibold leading-6 text-white/60">{{ item.label }}</dt>
                <dd class="min-w-0 break-words text-sm leading-6">
                  <span
                    v-if="statusLabel(item.value.status)"
                    class="mb-2 inline-flex border border-white/20 px-2 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-white/70"
                  >
                    {{ statusLabel(item.value.status) }}
                  </span>
                  <span class="block font-medium">{{ item.value.value }}</span>
                  <span v-if="item.note" class="mt-1 block text-xs leading-5 text-white/50">
                    {{ item.note }}
                  </span>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </UContainer>
    </section>

    <section
      v-if="product.documents.length"
      data-testid="product-documents"
      aria-labelledby="product-documents-heading"
      class="py-16 sm:py-24"
    >
      <UContainer>
        <h2 id="product-documents-heading" class="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
          {{ $t('pages.product.documentsTitle') }}
        </h2>
        <ul class="mt-8 grid gap-4 md:grid-cols-2">
          <li v-for="document in product.documents" :key="document.url">
            <UButton
              :to="document.url"
              external
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-download"
            >
              {{ document.title }}
            </UButton>
          </li>
        </ul>
      </UContainer>
    </section>

    <section aria-labelledby="related-products-heading" class="border-t border-black/10 py-16 sm:py-24">
      <UContainer>
        <div class="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.product.relatedEyebrow') }}
            </p>
            <h2 id="related-products-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ $t('pages.product.relatedTitle') }}
            </h2>
          </div>
          <UButton :to="localePath('products')" color="neutral" variant="link" trailing-icon="i-lucide-arrow-right">
            {{ $t('actions.viewProducts') }}
          </UButton>
        </div>
        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <article
            v-for="related in relatedProducts"
            :key="related.slug"
            data-testid="related-product"
            class="min-w-0 border border-black/15 bg-white p-6"
          >
            <p class="font-mono text-xs uppercase tracking-[0.12em] text-[#637b13]">{{ related.category }}</p>
            <h3 class="mt-3 text-2xl font-semibold">{{ related.name }}</h3>
            <p class="mt-3 text-sm leading-6 text-black/65">{{ related.lineup.distinction }}</p>
            <UButton
              :to="localePath({ name: 'products-slug', params: { slug: related.slug } })"
              color="neutral"
              variant="link"
              trailing-icon="i-lucide-arrow-right"
              class="mt-4 px-0"
            >
              {{ $t('actions.viewProduct') }}
            </UButton>
          </article>
        </div>
      </UContainer>
    </section>

    <section class="pb-4">
      <UContainer>
        <div class="grid gap-6 bg-[#e8e8e1] p-6 sm:p-9 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-8">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.product.consultationEyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-[-0.035em]">
              {{ $t('pages.product.consultationTitle', { product: product.name }) }}
            </h2>
            <p class="mt-3 max-w-2xl text-sm leading-6 text-black/60">
              {{ $t('pages.product.consultationDisclosure') }}
            </p>
          </div>
          <div class="lg:col-span-4 lg:text-right">
            <UButton
              :to="consultationPath"
              color="primary"
              size="lg"
              trailing-icon="i-lucide-arrow-up-right"
            >
              {{ $t('actions.consultation') }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </article>
</template>
