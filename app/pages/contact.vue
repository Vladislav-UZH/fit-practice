<script setup lang="ts">
import { contactProductSchema, type ContactProduct } from '~~/shared/schemas/contact'

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

usePageSeo(computed(() => t('pages.contact.seoTitle')), computed(() => t('pages.contact.seoDescription')))

const initialProduct = computed<ContactProduct>(() => {
  const queryValue = Array.isArray(route.query.product)
    ? route.query.product[0]
    : route.query.product

  const parsedProduct = contactProductSchema.safeParse(queryValue)

  return parsedProduct.success ? parsedProduct.data : 'unsure'
})
</script>

<template>
  <div data-testid="contact-page" class="min-w-0 overflow-x-clip pb-20 sm:pb-28">
    <PageIntro
      :eyebrow="$t('pages.contact.eyebrow')"
      :title="$t('pages.contact.title')"
      :description="$t('pages.contact.description')"
    />

    <section aria-labelledby="contact-service-heading" class="pb-12 sm:pb-16">
      <UContainer>
        <div class="grid min-w-0 gap-6 lg:grid-cols-12">
          <article class="min-w-0 border border-black/15 bg-white p-6 sm:p-8 lg:col-span-7">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.contact.serviceEyebrow') }}
            </p>
            <h2 id="contact-service-heading" class="mt-4 break-words text-3xl font-semibold tracking-[-0.035em]">
              {{ $t('pages.contact.serviceTitle') }}
            </h2>
            <p class="mt-4 break-words text-base leading-7 text-black/65">
              {{ $t('pages.contact.serviceDescription') }}
            </p>
            <p class="mt-4 break-words border-l-4 border-[#8aaa12] pl-4 text-sm leading-6 text-black/60">
              {{ $t('pages.contact.demoDisclosure') }}
            </p>
          </article>

          <aside class="min-w-0 border border-black/15 bg-[#171b19] p-6 text-white sm:p-8 lg:col-span-5">
            <h2 class="break-words text-2xl font-semibold tracking-[-0.025em]">
              {{ $t('pages.contact.boundariesTitle') }}
            </h2>
            <ul class="mt-5 min-w-0 space-y-3 text-sm leading-6 text-white/70">
              <li class="break-words">{{ $t('pages.contact.boundaries.noSalesDelivery') }}</li>
              <li class="break-words">{{ $t('pages.contact.boundaries.noPermanentStorage') }}</li>
              <li class="break-words">{{ $t('pages.contact.boundaries.noEngineeringSizing') }}</li>
            </ul>
            <UButton
              :to="localePath('legal')"
              color="neutral"
              variant="outline"
              size="sm"
              class="mt-6 border-white/30 text-white hover:bg-white/10"
            >
              {{ $t('pages.contact.legalLink') }}
            </UButton>
          </aside>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="contact-form-heading">
      <UContainer>
        <div class="grid min-w-0 gap-8 lg:grid-cols-12">
          <div class="min-w-0 lg:col-span-4">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ $t('pages.contact.formEyebrow') }}
            </p>
            <h2 id="contact-form-heading" class="mt-4 break-words text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ $t('pages.contact.formTitle') }}
            </h2>
            <p class="mt-5 max-w-sm break-words text-sm leading-6 text-black/60">
              {{ $t('pages.contact.formDescription') }}
            </p>
          </div>

          <div class="min-w-0 lg:col-span-8">
            <ContactInquiryForm :initial-product="initialProduct" />
          </div>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="contact-next-heading" class="mt-16 sm:mt-24">
      <UContainer>
        <div class="grid min-w-0 gap-6 border-y border-black/15 py-8 md:grid-cols-2">
          <div class="min-w-0">
            <h2 id="contact-next-heading" class="break-words text-2xl font-semibold">
              {{ $t('pages.contact.nextTitle') }}
            </h2>
            <p class="mt-3 break-words text-sm leading-6 text-black/60">
              {{ $t('pages.contact.nextDescription') }}
            </p>
          </div>
          <nav :aria-label="$t('pages.contact.relatedNavigation')" class="flex min-w-0 flex-wrap gap-3 md:justify-end">
            <UButton :to="localePath('products')" color="neutral" variant="outline">
              {{ $t('actions.viewProducts') }}
            </UButton>
            <UButton :to="localePath('products-compare')" color="neutral" variant="outline">
              {{ $t('actions.compare') }}
            </UButton>
          </nav>
        </div>
      </UContainer>
    </section>
  </div>
</template>
