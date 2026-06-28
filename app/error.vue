<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-[#f3f2ed] px-6 py-16 text-[#111412]">
    <div class="max-w-xl text-center">
      <p class="font-mono text-sm text-black/50">{{ error.statusCode }}</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight">{{ $t('error.title') }}</h1>
      <p class="mt-4 text-black/65">{{ $t('error.description') }}</p>
      <UButton class="mt-8" color="primary" @click="handleError">
        {{ $t('error.backHome') }}
      </UButton>
    </div>
  </div>
</template>
