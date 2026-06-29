<script setup lang="ts">
interface ProofItem {
  label: string
  value: string
}

defineProps<{
  items: ProofItem[]
}>()
</script>

<template>
  <section data-testid="portfolio-proof-strip" class="border-y border-black/10 bg-white/55">
    <UContainer>
      <dl class="grid sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, index) in items"
          :key="item.label"
          class="border-b border-black/10 py-5 sm:px-5 sm:odd:border-r sm:odd:pl-0 lg:border-b-0 lg:border-r-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
        >
          <div class="flex items-center gap-3">
            <span class="font-mono text-[0.6875rem] text-black/35" aria-hidden="true">0{{ index + 1 }}</span>
            <dt class="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-black/45">{{ item.label }}</dt>
          </div>
          <dd class="mt-2 text-sm font-semibold leading-5 text-black/80">{{ item.value }}</dd>
        </div>
      </dl>
    </UContainer>
  </section>
</template>
