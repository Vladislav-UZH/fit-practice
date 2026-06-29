<script setup lang="ts">
import { technologyPageContent, type InformationLocale } from '~/data/information-pages'

const { locale } = useI18n()
const localePath = useLocalePath()

const content = computed(() => technologyPageContent[locale.value as InformationLocale] ?? technologyPageContent.uk)

usePageSeo(
  computed(() => content.value.seoTitle),
  computed(() => content.value.seoDescription)
)
</script>

<template>
  <article data-testid="technology-page" class="pb-20 sm:pb-28">
    <header class="border-b border-black/10 py-14 sm:py-20 lg:py-24">
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
              {{ content.eyebrow }}
            </p>
            <h1 class="mt-5 max-w-5xl text-[clamp(2.75rem,6vw,6rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              {{ content.title }}
            </h1>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-black/65">
              {{ content.description }}
            </p>
          </div>
          <div class="lg:col-span-4">
            <UAlert
              color="neutral"
              variant="subtle"
              icon="i-lucide-info"
              :title="$t('disclosure.shortTitle')"
              :description="content.disclosure"
            />
          </div>
        </div>
      </UContainer>
    </header>

    <section aria-labelledby="technology-platform-heading" class="py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.platformEyebrow }}
            </p>
            <h2 id="technology-platform-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.platformTitle }}
            </h2>
            <p class="mt-5 text-base leading-7 text-black/65">
              {{ content.platformDescription }}
            </p>
          </div>

          <div class="lg:col-span-7">
            <div class="border-t border-black/15">
              <article
                v-for="(principle, index) in content.principles"
                :key="principle.title"
                data-testid="technology-page-principle"
                class="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-black/15 py-6"
              >
                <span class="font-mono text-xs text-black/35" aria-hidden="true">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div class="min-w-0">
                  <h3 class="text-xl font-semibold tracking-[-0.02em]">{{ principle.title }}</h3>
                  <p class="mt-3 max-w-2xl text-sm leading-6 text-black/65">{{ principle.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-[#171b19] py-16 text-white sm:py-24">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div class="min-w-0 lg:col-span-7">
            <div
              data-testid="technology-page-diagram"
              role="img"
              :aria-label="content.diagramLabel"
              class="relative min-h-[22rem] overflow-hidden border border-white/15 bg-black/10 sm:aspect-[4/3]"
            >
              <svg viewBox="0 0 720 540" class="absolute inset-0 size-full" aria-hidden="true" focusable="false">
                <defs>
                  <pattern id="technology-page-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path d="M36 0H0V36" fill="none" stroke="rgba(255,255,255,.07)" />
                  </pattern>
                </defs>
                <rect width="720" height="540" fill="url(#technology-page-grid)" />
                <circle cx="360" cy="270" r="86" fill="#232927" stroke="#c8f43d" stroke-width="4" />
                <rect x="326" y="225" width="68" height="90" fill="none" stroke="#fff" stroke-width="4" />
                <rect x="345" y="208" width="30" height="17" fill="#c8f43d" />
                <path d="M340 270h40M360 250v40" stroke="#c8f43d" stroke-width="5" />
                <path d="M274 270H150M446 270H570M360 184V92" stroke="#c8f43d" stroke-width="3" />
                <rect x="72" y="218" width="120" height="104" rx="6" fill="#232927" stroke="rgba(255,255,255,.45)" stroke-width="2" />
                <path d="M95 245h74M95 270h55M95 295h67" stroke="#c8f43d" stroke-width="4" />
                <rect x="528" y="205" width="120" height="130" rx="6" fill="#232927" stroke="rgba(255,255,255,.45)" stroke-width="2" />
                <circle cx="588" cy="242" r="18" fill="none" stroke="#c8f43d" stroke-width="4" />
                <path d="M552 283h72M552 306h54" stroke="rgba(255,255,255,.7)" stroke-width="4" />
                <rect x="302" y="46" width="116" height="70" rx="35" fill="#c8f43d" />
                <path d="M332 81h56" stroke="#171b19" stroke-width="6" />
              </svg>
              <div class="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6 sm:gap-3">
                <span class="border border-white/15 bg-[#171b19]/90 px-2 py-2 text-center font-mono text-[0.625rem] uppercase tracking-[0.08em] text-white/65">LiFePO4</span>
                <span class="border border-white/15 bg-[#171b19]/90 px-2 py-2 text-center font-mono text-[0.625rem] uppercase tracking-[0.08em] text-white/65">3 formats</span>
                <span class="border border-white/15 bg-[#171b19]/90 px-2 py-2 text-center font-mono text-[0.625rem] uppercase tracking-[0.08em] text-white/65">status</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c8f43d]">
              {{ content.architectureEyebrow }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.diagramTitle }}
            </h2>
            <p class="mt-5 text-base leading-7 text-white/65">
              {{ content.diagramDescription }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section aria-labelledby="technology-architecture-heading" class="py-16 sm:py-24">
      <UContainer>
        <div class="max-w-3xl">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
            {{ content.architectureEyebrow }}
          </p>
          <h2 id="technology-architecture-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {{ content.architectureTitle }}
          </h2>
          <p class="mt-5 text-base leading-7 text-black/65">{{ content.architectureDescription }}</p>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          <article
            v-for="item in content.architecture"
            :key="item.title"
            data-testid="technology-format"
            class="min-w-0 border border-black/15 bg-white p-6"
          >
            <p class="font-mono text-xs text-[#637b13]">{{ item.label }}</p>
            <h3 class="mt-4 text-2xl font-semibold">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-black/65">{{ item.description }}</p>
          </article>
        </div>
      </UContainer>
    </section>

    <section class="border-y border-black/10 bg-[#ebeae4] py-16 sm:py-20">
      <UContainer>
        <div class="grid gap-8 lg:grid-cols-12">
          <h2 class="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:col-span-4">
            {{ content.boundariesTitle }}
          </h2>
          <ul class="space-y-4 lg:col-span-7 lg:col-start-6">
            <li v-for="boundary in content.boundaries" :key="boundary" class="flex gap-3 border-t border-black/15 pt-4 text-sm leading-6 text-black/65">
              <span class="mt-2 size-1.5 shrink-0 rounded-full bg-[#637b13]" aria-hidden="true" />
              <span>{{ boundary }}</span>
            </li>
          </ul>
        </div>
      </UContainer>
    </section>

    <section class="py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-7 bg-[#c8f43d] p-7 sm:p-10 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <h2 class="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{{ content.ctaTitle }}</h2>
            <p class="mt-4 max-w-2xl text-base leading-7 text-black/65">{{ content.ctaDescription }}</p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
            <UButton :to="localePath('products')" color="neutral" size="lg" class="justify-center bg-[#171b19] text-white">
              {{ content.productsAction }}
            </UButton>
            <UButton :to="localePath('products-compare')" color="neutral" variant="outline" size="lg" class="justify-center border-black/30 text-[#171b19]">
              {{ content.compareAction }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </article>
</template>
