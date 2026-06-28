<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: products } = await useFetch('/api/products', {
  query: computed(() => ({ locale: locale.value })),
  watch: [locale]
})

usePageSeo(
  computed(() => t('pages.home.seoTitle')),
  computed(() => t('pages.home.seoDescription'))
)
</script>

<template>
  <div>
    <section class="py-16 sm:py-24 lg:py-32">
      <UContainer>
        <div class="grid items-end gap-12 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
              {{ $t('pages.home.eyebrow') }}
            </p>
            <h1 class="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-7xl">
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

          <div class="lg:col-span-6">
            <div class="aspect-[4/3] border border-black/10 bg-[#171b19] p-6 text-white sm:p-10">
              <div class="flex h-full flex-col justify-between">
                <div class="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-white/55">
                  <span>{{ $t('pages.home.visualLabel') }}</span>
                  <span>01 / 03</span>
                </div>
                <div>
                  <div class="h-2 w-24 bg-[#c8f43d]" />
                  <p class="mt-5 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
                    {{ $t('pages.home.visualText') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-y border-black/10 bg-white/55 py-6">
      <UContainer>
        <ul class="grid gap-4 text-sm font-medium sm:grid-cols-2 lg:grid-cols-4">
          <li>{{ $t('pages.home.proof.formats') }}</li>
          <li>{{ $t('pages.home.proof.platform') }}</li>
          <li>{{ $t('pages.home.proof.mobile') }}</li>
          <li>{{ $t('pages.home.proof.languages') }}</li>
        </ul>
      </UContainer>
    </section>

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
