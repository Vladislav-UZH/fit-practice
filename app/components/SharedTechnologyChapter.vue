<script setup lang="ts">
interface TechnologyPrinciple {
  id: 'chemistry' | 'architecture' | 'monitoring'
  icon: string
  title: string
  description: string
}

const { t } = useI18n()
const localePath = useLocalePath()

const principles = computed<TechnologyPrinciple[]>(() => [
  {
    id: 'chemistry',
    icon: 'i-lucide-battery-charging',
    title: t('pages.home.sharedTechnology.principles.chemistry.title'),
    description: t('pages.home.sharedTechnology.principles.chemistry.description')
  },
  {
    id: 'architecture',
    icon: 'i-lucide-blocks',
    title: t('pages.home.sharedTechnology.principles.architecture.title'),
    description: t('pages.home.sharedTechnology.principles.architecture.description')
  },
  {
    id: 'monitoring',
    icon: 'i-lucide-activity',
    title: t('pages.home.sharedTechnology.principles.monitoring.title'),
    description: t('pages.home.sharedTechnology.principles.monitoring.description')
  }
])
</script>

<template>
  <section
    data-testid="shared-technology"
    class="border-b border-black/10 bg-[#ebeae4] py-16 sm:py-24 lg:py-28"
  >
    <UContainer>
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6">
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
            {{ $t('pages.home.sharedTechnology.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {{ $t('pages.home.sharedTechnology.title') }}
          </h2>
          <p class="mt-6 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            {{ $t('pages.home.sharedTechnology.description') }}
          </p>

          <div data-testid="technology-principles" class="mt-10 border-t border-black/15">
            <article
              v-for="(principle, index) in principles"
              :key="principle.id"
              data-testid="technology-principle"
              class="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-black/15 py-6"
            >
              <div class="grid size-11 place-items-center border border-black/10 bg-white/45 text-[#637b13]" aria-hidden="true">
                <UIcon :name="principle.icon" class="size-5" />
              </div>
              <div>
                <div class="flex items-baseline gap-3">
                  <span class="font-mono text-[0.6875rem] text-black/35" aria-hidden="true">
                    0{{ index + 1 }}
                  </span>
                  <h3 class="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                    {{ principle.title }}
                  </h3>
                </div>
                <p class="mt-2 text-sm leading-6 text-black/60">
                  {{ principle.description }}
                </p>
              </div>
            </article>
          </div>

          <div class="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <UButton
              :to="localePath('technology')"
              color="primary"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
            >
              {{ $t('actions.exploreTechnology') }}
            </UButton>
            <p class="max-w-sm text-sm leading-6 text-black/45">
              {{ $t('pages.home.sharedTechnology.disclaimer') }}
            </p>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="relative overflow-hidden border border-black/15 bg-[#171b19] p-5 text-white sm:p-8">
            <div class="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
              <div>
                <p class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#c8f43d]">
                  {{ $t('pages.home.sharedTechnology.diagram.eyebrow') }}
                </p>
                <p class="mt-2 text-lg font-semibold tracking-[-0.02em]">
                  {{ $t('pages.home.sharedTechnology.diagram.title') }}
                </p>
              </div>
              <span class="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/35">
                03 / 01
              </span>
            </div>

            <div
              data-testid="technology-diagram"
              role="img"
              :aria-label="$t('a11y.technologyDiagram')"
              class="relative mt-6 aspect-[4/3] min-h-72 overflow-hidden border border-white/10 bg-black/10"
            >
              <svg
                viewBox="0 0 640 480"
                class="absolute inset-0 size-full"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <pattern id="technology-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
                  </pattern>
                </defs>
                <rect width="640" height="480" fill="url(#technology-grid)" />
                <path d="M320 130V82M320 350V398M190 240H100M450 240H540" stroke="#c8f43d" stroke-width="3" />
                <path d="M232 176L172 124M408 176L468 124M232 304L172 356M408 304L468 356" stroke="rgba(255,255,255,0.26)" stroke-width="2" />
                <circle cx="320" cy="240" r="102" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                <circle cx="320" cy="240" r="70" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2" />
                <path d="M292 207H348V273H292Z" fill="none" stroke="#ffffff" stroke-width="4" />
                <path d="M310 191H330V207H310Z" fill="#c8f43d" />
                <path d="M304 237H336M320 221V253" stroke="#c8f43d" stroke-width="4" />
                <rect x="68" y="199" width="74" height="82" rx="4" fill="#232927" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
                <path d="M84 218H126M84 236H116M84 254H123" stroke="#c8f43d" stroke-width="3" />
                <rect x="498" y="191" width="74" height="98" rx="4" fill="#232927" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
                <circle cx="535" cy="219" r="10" fill="none" stroke="#c8f43d" stroke-width="3" />
                <path d="M516 246H554M516 263H546" stroke="rgba(255,255,255,0.65)" stroke-width="3" />
                <rect x="282" y="39" width="76" height="48" rx="24" fill="#c8f43d" />
                <path d="M304 63H336" stroke="#171b19" stroke-width="4" />
                <rect x="273" y="393" width="94" height="48" rx="4" fill="#232927" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
                <path d="M292 417H348" stroke="#c8f43d" stroke-width="4" />
                <circle cx="172" cy="124" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                <circle cx="468" cy="124" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                <circle cx="172" cy="356" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
                <circle cx="468" cy="356" r="13" fill="#232927" stroke="#c8f43d" stroke-width="3" />
              </svg>

              <div class="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6 sm:gap-3">
                <div class="border border-white/15 bg-[#171b19]/90 px-2 py-2 text-center sm:px-3">
                  <span class="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-white/50">
                    {{ $t('pages.home.sharedTechnology.diagram.labels.chemistry') }}
                  </span>
                </div>
                <div class="border border-white/15 bg-[#171b19]/90 px-2 py-2 text-center sm:px-3">
                  <span class="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-white/50">
                    {{ $t('pages.home.sharedTechnology.diagram.labels.form') }}
                  </span>
                </div>
                <div class="border border-white/15 bg-[#171b19]/90 px-2 py-2 text-center sm:px-3">
                  <span class="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-white/50">
                    {{ $t('pages.home.sharedTechnology.diagram.labels.status') }}
                  </span>
                </div>
              </div>
            </div>

            <p class="mt-4 text-xs leading-5 text-white/40">
              {{ $t('pages.home.sharedTechnology.diagram.note') }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
