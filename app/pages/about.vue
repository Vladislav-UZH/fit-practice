<script setup lang="ts">
import { aboutPageContent, type InformationLocale } from '~/data/information-pages'

const { locale } = useI18n()
const localePath = useLocalePath()

const content = computed(() => aboutPageContent[locale.value as InformationLocale] ?? aboutPageContent.uk)

usePageSeo(
  computed(() => content.value.seoTitle),
  computed(() => content.value.seoDescription)
)
</script>

<template>
  <article data-testid="about-page" class="pb-20 sm:pb-28">
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

    <section aria-labelledby="about-project-heading" class="py-16 sm:py-24">
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
              {{ content.projectEyebrow }}
            </p>
            <h2 id="about-project-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.projectTitle }}
            </h2>
          </div>
          <div class="max-w-3xl lg:col-span-7 lg:col-start-6">
            <p
              v-for="(paragraph, index) in content.projectParagraphs"
              :key="paragraph"
              class="text-base leading-7 text-black/65"
              :class="{ 'mt-5': index > 0, 'text-xl font-semibold leading-8 text-black': index === 0 }"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-white py-16 sm:py-24" aria-labelledby="about-goals-heading">
      <UContainer>
        <h2 id="about-goals-heading" class="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
          {{ content.goalsTitle }}
        </h2>
        <div class="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          <article
            v-for="(goal, index) in content.goals"
            :key="goal.title"
            data-testid="about-goal"
            class="border-t border-black/15 pt-5"
          >
            <p class="font-mono text-xs text-black/35" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-3 text-xl font-semibold">{{ goal.title }}</h3>
            <p class="mt-3 max-w-xl text-sm leading-6 text-black/65">{{ goal.description }}</p>
          </article>
        </div>
      </UContainer>
    </section>

    <section class="bg-[#171b19] py-16 text-white sm:py-24" aria-labelledby="about-stack-heading">
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c8f43d]">
              {{ content.stackEyebrow }}
            </p>
            <h2 id="about-stack-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {{ content.stackTitle }}
            </h2>
            <p class="mt-5 max-w-2xl text-base leading-7 text-white/65">{{ content.stackDescription }}</p>
          </div>
          <div class="lg:col-span-5">
            <ul class="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label="Technology stack">
              <li
                v-for="item in content.stack"
                :key="item"
                data-testid="about-stack-item"
                class="min-w-0 border border-white/15 bg-white/[0.03] px-3 py-3 text-center font-mono text-xs text-white/75"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-16 sm:py-24" aria-labelledby="about-quality-heading">
      <UContainer>
        <div class="max-w-3xl">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
            {{ content.qualityEyebrow }}
          </p>
          <h2 id="about-quality-heading" class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {{ content.qualityTitle }}
          </h2>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          <article
            v-for="item in content.quality"
            :key="item.title"
            data-testid="about-quality-item"
            class="min-w-0 border border-black/15 bg-white p-6"
          >
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
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
            <UButton :to="localePath('contact')" color="neutral" variant="outline" size="lg" class="justify-center border-black/30 text-[#171b19]">
              {{ content.contactAction }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </article>
</template>
