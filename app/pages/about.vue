<script setup lang="ts">
import { informationPageContent, resolveInformationLocale } from '~/data/information-pages'

const { locale } = useI18n()
const localePath = useLocalePath()

const content = computed(() => informationPageContent[resolveInformationLocale(locale.value)].about)

const capabilityIcons = {
  content: 'i-lucide-database',
  rendering: 'i-lucide-server-cog',
  localization: 'i-lucide-languages',
  quality: 'i-lucide-badge-check'
} as const

usePageSeo(
  computed(() => content.value.seoTitle),
  computed(() => content.value.seoDescription)
)
</script>

<template>
  <div data-testid="about-page" class="pb-20 sm:pb-28">
    <PageIntro
      :eyebrow="content.eyebrow"
      :title="content.title"
      :description="content.description"
    />

    <section aria-labelledby="about-identity-heading" class="pb-16 sm:pb-24">
      <UContainer>
        <div class="grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="min-w-0 lg:col-span-7">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.identityEyebrow }}
            </p>
            <h2 id="about-identity-heading" class="mt-4 break-words text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.identityTitle }}
            </h2>
            <p class="mt-6 text-xl font-semibold leading-8">
              {{ content.identityLead }}
            </p>
            <p
              v-for="paragraph in content.identityParagraphs"
              :key="paragraph"
              class="mt-5 max-w-3xl text-base leading-7 text-black/65"
            >
              {{ paragraph }}
            </p>
          </div>

          <aside class="min-w-0 border border-black/15 bg-[#171b19] p-6 text-white sm:p-8 lg:col-span-5">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c8f43d]">
              MAXIBUD ENERGY
            </p>
            <p class="mt-4 text-2xl font-semibold tracking-[-0.025em]">
              MAXIBUD LLC / ТОВ «МАКСІБУД»
            </p>
            <p class="mt-4 text-sm leading-6 text-white/70">
              {{ $t('disclosure.full') }}
            </p>
            <UButton
              :to="localePath('legal')"
              color="neutral"
              variant="outline"
              size="sm"
              class="mt-6 border-white/30 text-white hover:bg-white/10"
            >
              {{ $t('nav.legal') }}
            </UButton>
          </aside>
        </div>

        <dl data-testid="about-facts" class="mt-12 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(fact, index) in content.facts"
            :key="fact.label"
            class="min-w-0 py-5 sm:px-5 sm:first:pl-0 lg:border-l lg:first:border-l-0"
            :class="{ 'border-t border-black/10 sm:border-t-0': index > 0 }"
          >
            <dt class="text-sm leading-6 text-black/55">{{ fact.label }}</dt>
            <dd class="mt-2 break-words font-mono text-2xl font-semibold">{{ fact.value }}</dd>
          </div>
        </dl>
      </UContainer>
    </section>

    <section aria-labelledby="about-capabilities-heading" class="border-y border-black/10 bg-white py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.capabilitiesEyebrow }}
            </p>
            <h2 id="about-capabilities-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.capabilitiesTitle }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-7 text-black/65 lg:col-span-5 lg:justify-self-end">
            {{ content.capabilitiesDescription }}
          </p>
        </div>

        <div data-testid="about-capabilities" class="mt-10 border-t border-black/15">
          <article
            v-for="(capability, index) in content.capabilities"
            :key="capability.id"
            data-testid="about-capability"
            class="grid min-w-0 gap-5 border-b border-black/15 py-6 md:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start"
          >
            <div class="grid size-12 place-items-center border border-black/10 bg-[#f3f2ed] text-[#637b13]" aria-hidden="true">
              <UIcon :name="capabilityIcons[capability.id]" class="size-5" />
            </div>
            <div class="min-w-0">
              <span class="font-mono text-xs text-black/40" aria-hidden="true">0{{ index + 1 }}</span>
              <h3 class="mt-2 break-words text-xl font-semibold tracking-[-0.02em]">
                {{ capability.title }}
              </h3>
            </div>
            <p class="text-sm leading-6 text-black/65">
              {{ capability.description }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="about-process-heading" class="py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.processEyebrow }}
            </p>
            <h2 id="about-process-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.processTitle }}
            </h2>
          </div>

          <ol data-testid="about-process" class="relative border-l border-black/20 pl-8 lg:col-span-6 lg:col-start-7">
            <li
              v-for="(step, index) in content.processSteps"
              :key="step.title"
              data-testid="about-process-step"
              class="relative pb-8 last:pb-0"
            >
              <span class="absolute -left-[2.55rem] grid size-5 place-items-center rounded-full border border-black/20 bg-[#ebeae4] font-mono text-[0.5625rem] text-black/55" aria-hidden="true">
                {{ index + 1 }}
              </span>
              <h3 class="text-xl font-semibold">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-black/65">{{ step.description }}</p>
            </li>
          </ol>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="about-scope-heading" class="bg-[#171b19] py-16 text-white sm:py-24">
      <UContainer>
        <div class="grid gap-9 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c8f43d]">
              {{ content.scopeEyebrow }}
            </p>
            <h2 id="about-scope-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.scopeTitle }}
            </h2>
            <p class="mt-5 max-w-xl text-base leading-7 text-white/70">
              {{ content.scopeDescription }}
            </p>
          </div>

          <ul class="border-t border-white/15 lg:col-span-6 lg:col-start-7">
            <li
              v-for="(item, index) in content.scopeItems"
              :key="item"
              class="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-white/15 py-5"
            >
              <span class="font-mono text-xs text-white/45" aria-hidden="true">0{{ index + 1 }}</span>
              <span class="text-sm leading-6 text-white/75">{{ item }}</span>
            </li>
          </ul>
        </div>
      </UContainer>
    </section>

    <section class="bg-[#c8f43d] py-14 text-[#171b19] sm:py-20">
      <UContainer>
        <div class="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <h2 class="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.ctaTitle }}
            </h2>
            <p class="mt-5 max-w-2xl text-base leading-7 text-black/65">
              {{ content.ctaDescription }}
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
            <UButton
              :to="localePath('products')"
              color="neutral"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
              class="justify-center bg-[#171b19] text-white hover:bg-black"
            >
              {{ $t('actions.viewProducts') }}
            </UButton>
            <UButton
              :to="localePath('contact')"
              color="neutral"
              variant="outline"
              size="lg"
              class="justify-center border-black/30 text-[#171b19] hover:bg-black/5"
            >
              {{ $t('actions.consultation') }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
