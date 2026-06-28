<script setup lang="ts">
interface ProductHighlight {
  label: string
  value: string
  qualifier?: string
}

defineProps<{
  name: string
  category: string
  summary: string
  highlights: ProductHighlight[]
  to: string
}>()
</script>

<template>
  <article class="flex h-full flex-col border-t border-black/20 py-6">
    <p class="font-mono text-xs uppercase tracking-[0.14em] text-black/50">
      {{ category }}
    </p>
    <h2 class="mt-3 text-2xl font-semibold tracking-tight">
      {{ name }}
    </h2>
    <p class="mt-3 text-sm leading-6 text-black/65">
      {{ summary }}
    </p>

    <dl class="mt-8 grid grid-cols-3 gap-4">
      <div v-for="highlight in highlights.slice(0, 3)" :key="highlight.label">
        <dt class="text-xs leading-5 text-black/50">{{ highlight.label }}</dt>
        <dd class="mt-1 font-mono text-base font-semibold">{{ highlight.value }}</dd>
      </div>
    </dl>

    <UButton
      :to="to"
      color="neutral"
      variant="link"
      trailing-icon="i-lucide-arrow-right"
      class="mt-8 w-fit px-0"
    >
      {{ $t('actions.viewProduct') }}
    </UButton>
  </article>
</template>
