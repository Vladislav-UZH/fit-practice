<script setup lang="ts">
const route = useRoute('products-slug')
const { locale } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => String(route.params.slug))

const { data: product } = await useFetch(
  () => `/api/products/${slug.value}`,
  {
    query: computed(() => ({ locale: locale.value })),
    watch: [locale, slug]
  }
)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

usePageSeo(
  computed(() => product.value?.seo.title ?? ''),
  computed(() => product.value?.seo.description ?? '')
)
</script>

<template>
  <article v-if="product" class="py-16 sm:py-24">
    <UContainer>
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
            {{ product.category }}
          </p>
          <h1 class="mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
            {{ product.name }}
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-8 text-black/65">
            {{ product.summary }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton :to="localePath('contact')" color="primary" trailing-icon="i-lucide-arrow-up-right">
              {{ $t('actions.consultation') }}
            </UButton>
            <UButton :to="localePath('products-compare')" color="neutral" variant="outline">
              {{ $t('actions.compare') }}
            </UButton>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="aspect-[4/3] bg-[#171b19] p-8 text-white">
            <div class="flex h-full items-end">
              <p class="max-w-sm text-xl font-semibold leading-snug">
                {{ $t('pages.product.visualPlaceholder') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <dl class="mt-14 grid gap-6 border-y border-black/15 py-8 sm:grid-cols-3">
        <div v-for="highlight in product.highlights" :key="highlight.label">
          <dt class="text-sm text-black/50">{{ highlight.label }}</dt>
          <dd class="mt-2 font-mono text-2xl font-semibold">{{ highlight.value }}</dd>
          <p v-if="highlight.qualifier" class="mt-1 text-xs text-black/50">{{ highlight.qualifier }}</p>
        </div>
      </dl>

      <UAlert
        class="mt-10"
        color="neutral"
        variant="subtle"
        icon="i-lucide-info"
        :title="$t('disclosure.shortTitle')"
        :description="product.conceptNotice"
      />
    </UContainer>
  </article>
</template>
