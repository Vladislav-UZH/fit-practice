<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <div class="min-w-0 max-w-3xl">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#637b13]">
          {{ eyebrow }}
        </p>
        <h1 class="mt-5 min-w-0 break-words text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
          {{ title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-black/65">
          {{ description }}
        </p>
      </div>
    </UContainer>
  </section>
</template>
