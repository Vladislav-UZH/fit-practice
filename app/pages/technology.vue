<script setup lang="ts">
import { informationPageContent, resolveInformationLocale } from '~/data/information-pages'

const { locale } = useI18n()
const localePath = useLocalePath()

const content = computed(() => informationPageContent[resolveInformationLocale(locale.value)].technology)

const principleIcons = {
  chemistry: 'i-lucide-battery-charging',
  inputs: 'i-lucide-sun-medium',
  protection: 'i-lucide-shield-check',
  monitoring: 'i-lucide-activity'
} as const

usePageSeo(
  computed(() => content.value.seoTitle),
  computed(() => content.value.seoDescription)
)
</script>

<template>
  <div data-testid="technology-page" class="pb-20 sm:pb-28">
    <PageIntro
      :eyebrow="content.eyebrow"
      :title="content.title"
      :description="content.description"
    />

    <section aria-labelledby="technology-platform-heading" class="pb-16 sm:pb-24">
      <UContainer>
        <div class="grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="min-w-0 lg:col-span-6">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.platformEyebrow }}
            </p>
            <h2 id="technology-platform-heading" class="mt-4 break-words text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.platformTitle }}
            </h2>
            <p class="mt-6 max-w-2xl text-base leading-7 text-black/65">
              {{ content.platformDescription }}
            </p>

            <div data-testid="technology-principles" class="mt-10 border-t border-black/15">
              <article
                v-for="(principle, index) in content.principles"
                :key="principle.id"
                data-testid="technology-page-principle"
                class="grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-black/15 py-6"
              >
                <div class="grid size-11 place-items-center border border-black/10 bg-white text-[#637b13]" aria-hidden="true">
                  <UIcon :name="principleIcons[principle.id]" class="size-5" />
                </div>
                <div class="min-w-0">
                  <div class="flex min-w-0 items-baseline gap-3">
                    <span class="shrink-0 font-mono text-[0.6875rem] text-black/40" aria-hidden="true">
                      0{{ index + 1 }}
                    </span>
                    <h3 class="break-words text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                      {{ principle.title }}
                    </h3>
                  </div>
                  <p class="mt-2 text-sm leading-6 text-black/65">
                    {{ principle.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div class="min-w-0 lg:col-span-6">
            <div class="min-w-0 border border-black/15 bg-[#171b19] p-5 text-white sm:p-8">
              <div class="border-b border-white/15 pb-4">
                <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#c8f43d]">
                  {{ content.diagram.eyebrow }}
                </p>
                <h2 class="mt-2 text-2xl font-semibold tracking-[-0.025em]">
                  {{ content.diagram.title }}
                </h2>
              </div>

              <div
                data-testid="technology-page-diagram"
                role="img"
                :aria-label="content.diagram.accessibleLabel"
                class="relative mt-6 min-h-[23rem] min-w-0 overflow-hidden border border-white/10 bg-black/10 sm:aspect-[4/3] sm:min-h-0"
              >
                <svg
                  viewBox="0 0 640 480"
                  preserveAspectRatio="xMidYMid meet"
                  class="absolute inset-0 size-full"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <pattern id="technology-page-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
                    </pattern>
                  </defs>
                  <rect width="640" height="480" fill="url(#technology-page-grid)" />
                  <circle cx="320" cy="235" r="95" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                  <circle cx="320" cy="235" r="61" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2" />
                  <path d="M291 205H349V269H291Z" fill="none" stroke="#fff" stroke-width="4" />
                  <path d="M310 190H330V205H310Z" fill="#c8f43d" />
                  <path d="M304 237H336M320 221V253" stroke="#c8f43d" stroke-width="4" />
                  <path d="M320 140V78M225 235H112M415 235H528M320 330V402" stroke="#c8f43d" stroke-width="3" />
                  <path d="M253 168L188 111M387 168L452 111M253 302L188 359M387 302L452 359" stroke="rgba(255,255,255,0.28)" stroke-width="2" />
                  <circle cx="188" cy="111" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                  <circle cx="452" cy="111" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                  <circle cx="188" cy="359" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                  <circle cx="452" cy="359" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                  <rect x="74" y="196" width="76" height="78" rx="4" fill="#232927" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                  <path d="M91 216H133M91 235H124M91 254H130" stroke="#c8f43d" stroke-width="3" />
                  <rect x="490" y="190" width="76" height="90" rx="4" fill="#232927" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                  <circle cx="528" cy="216" r="10" fill="none" stroke="#c8f43d" stroke-width="3" />
                  <path d="M508 244H548M508 261H540" stroke="rgba(255,255,255,0.7)" stroke-width="3" />
                  <rect x="279" y="38" width="82" height="46" rx="23" fill="#c8f43d" />
                  <path d="M301 61H339" stroke="#171b19" stroke-width="4" />
                  <rect x="271" y="398" width="98" height="45" rx="4" fill="#232927" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                  <path d="M290 420H350" stroke="#c8f43d" stroke-width="4" />
                </svg>

                <div class="absolute inset-x-3 bottom-3 grid min-w-0 grid-cols-2 gap-2 sm:inset-x-6 sm:bottom-6 sm:grid-cols-5">
                  <span class="min-w-0 border border-white/15 bg-[#171b19]/95 px-2 py-2 text-center font-mono text-[0.5625rem] uppercase leading-4 tracking-[0.05em] text-white/70 sm:text-[0.625rem]">
                    {{ content.diagram.labels.chemistry }}
                  </span>
                  <span class="min-w-0 border border-white/15 bg-[#171b19]/95 px-2 py-2 text-center font-mono text-[0.5625rem] uppercase leading-4 tracking-[0.05em] text-white/70 sm:text-[0.625rem]">
                    {{ content.diagram.labels.inputs }}
                  </span>
                  <span class="min-w-0 border border-white/15 bg-[#171b19]/95 px-2 py-2 text-center font-mono text-[0.5625rem] uppercase leading-4 tracking-[0.05em] text-white/70 sm:text-[0.625rem]">
                    {{ content.diagram.labels.protection }}
                  </span>
                  <span class="min-w-0 border border-white/15 bg-[#171b19]/95 px-2 py-2 text-center font-mono text-[0.5625rem] uppercase leading-4 tracking-[0.05em] text-white/70 sm:text-[0.625rem]">
                    {{ content.diagram.labels.monitoring }}
                  </span>
                  <span class="col-span-2 min-w-0 border border-white/15 bg-[#171b19]/95 px-2 py-2 text-center font-mono text-[0.5625rem] uppercase leading-4 tracking-[0.05em] text-white/70 sm:col-span-1 sm:text-[0.625rem]">
                    {{ content.diagram.labels.formats }}
                  </span>
                </div>
              </div>

              <p class="mt-4 text-xs leading-5 text-white/65">
                {{ content.diagram.note }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="technology-formats-heading" class="border-y border-black/10 bg-white py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.formatsEyebrow }}
            </p>
            <h2 id="technology-formats-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.formatsTitle }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-7 text-black/65 lg:col-span-5 lg:justify-self-end">
            {{ content.formatsDescription }}
          </p>
        </div>

        <div data-testid="technology-formats" class="mt-10 grid gap-5 lg:grid-cols-3">
          <article
            v-for="(format, index) in content.formats"
            :key="format.slug"
            data-testid="technology-format"
            class="min-w-0 border border-black/15 bg-[#f3f2ed] p-6"
          >
            <div class="flex items-start justify-between gap-4">
              <p class="font-mono text-xs uppercase tracking-[0.12em] text-[#637b13]">
                {{ format.context }}
              </p>
              <span class="font-mono text-xs text-black/35" aria-hidden="true">0{{ index + 1 }}</span>
            </div>
            <h3 class="mt-4 text-2xl font-semibold tracking-[-0.025em]">
              {{ format.name }}
            </h3>
            <p class="mt-4 text-sm leading-6 text-black/65">
              {{ format.description }}
            </p>
            <UButton
              :to="localePath({ name: 'products-slug', params: { slug: format.slug } })"
              color="neutral"
              variant="link"
              trailing-icon="i-lucide-arrow-right"
              class="mt-5 px-0"
            >
              {{ $t('actions.viewProduct') }}
            </UButton>
          </article>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="technology-boundaries-heading" class="py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.boundariesEyebrow }}
            </p>
            <h2 id="technology-boundaries-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.boundariesTitle }}
            </h2>
            <p class="mt-5 max-w-xl text-base leading-7 text-black/65">
              {{ content.boundariesDescription }}
            </p>
          </div>
          <ul class="border-t border-black/15 lg:col-span-6 lg:col-start-7">
            <li
              v-for="(boundary, index) in content.boundaries"
              :key="boundary"
              class="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-black/15 py-5"
            >
              <span class="font-mono text-xs text-black/40" aria-hidden="true">0{{ index + 1 }}</span>
              <span class="text-sm leading-6 text-black/70">{{ boundary }}</span>
            </li>
          </ul>
        </div>
      </UContainer>
    </section>

    <section class="bg-[#c8f43d] py-14 sm:py-20">
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
              :to="localePath('products-compare')"
              color="neutral"
              variant="outline"
              size="lg"
              class="justify-center border-black/30 text-[#171b19] hover:bg-black/5"
            >
              {{ $t('actions.compare') }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
