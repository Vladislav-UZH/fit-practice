<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: products } = await useFetch('/api/products', {
  query: computed(() => ({ locale: locale.value })),
  watch: [locale]
})

const stageProducts = computed(() => [
  {
    name: t('pages.home.stageProducts.powerbox.name'),
    context: t('pages.home.stageProducts.powerbox.context')
  },
  {
    name: t('pages.home.stageProducts.homecore.name'),
    context: t('pages.home.stageProducts.homecore.context')
  },
  {
    name: t('pages.home.stageProducts.sitehub.name'),
    context: t('pages.home.stageProducts.sitehub.context')
  }
])

const proofItems = computed(() => [
  {
    label: t('pages.home.proof.formats.label'),
    value: t('pages.home.proof.formats.value')
  },
  {
    label: t('pages.home.proof.mobility.label'),
    value: t('pages.home.proof.mobility.value')
  },
  {
    label: t('pages.home.proof.platform.label'),
    value: t('pages.home.proof.platform.value')
  },
  {
    label: t('pages.home.proof.languages.label'),
    value: t('pages.home.proof.languages.value')
  }
])

usePageSeo(
  computed(() => t('pages.home.seoTitle')),
  computed(() => t('pages.home.seoDescription'))
)
</script>

<template>
  <div>
    <section class="overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <UContainer>
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-5">
            <div class="flex flex-wrap items-center gap-3">
              <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
                {{ $t('pages.home.eyebrow') }}
              </p>
              <span class="rounded-full border border-black/10 bg-white/55 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-black/55">
                {{ $t('pages.home.conceptLabel') }}
              </span>
            </div>

            <h1 class="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.058em]">
              {{ $t('pages.home.title') }}
            </h1>
            <p class="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              {{ $t('pages.home.description') }}
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <UButton :to="localePath('products')" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
                {{ $t('actions.viewProducts') }}
              </UButton>
              <UButton :to="localePath('products-compare')" color="neutral" variant="outline" size="lg">
                {{ $t('actions.compare') }}
              </UButton>
            </div>
          </div>

          <div class="lg:col-span-7">
            <ProductFamilyStage
              :aria-label="$t('a11y.productFamilyVisual')"
              :caption="$t('pages.home.stageCaption')"
              :products="stageProducts"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <PortfolioProofStrip :items="proofItems" />

    <section class="py-16 sm:py-24">
      <UContainer>
        <div class="max-w-2xl">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
            {{ $t('pages.home.productsEyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            {{ $t('pages.home.productsTitle') }}
          </h2>
        </div>

        <div v-if="products?.length" class="mt-12 grid gap-8 lg:grid-cols-3">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :category="product.category"
            :summary="product.summary"
            :highlights="product.highlights"
            :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
          />
        </div>

        <UAlert
          v-else
          class="mt-12"
          color="neutral"
          variant="subtle"
          :title="$t('states.productsUnavailableTitle')"
          :description="$t('states.productsUnavailableDescription')"
        />
      </UContainer>
    </section>
  </div>
</template>
