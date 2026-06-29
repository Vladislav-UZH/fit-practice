<script setup lang="ts">
type ProductSlug = 'powerbox-2400' | 'homecore-5' | 'sitehub-10'

defineProps<{
  slug: ProductSlug
  accessibleLabel: string
}>()
</script>

<template>
  <figure
    data-testid="product-lineup-visual"
    class="technical-grid relative min-h-72 overflow-hidden border border-white/10 bg-[#171b19] sm:min-h-96"
    role="img"
    :aria-label="accessibleLabel"
  >
    <div class="absolute left-5 top-5 size-2 bg-[#c8f43d] sm:left-8 sm:top-8" aria-hidden="true" />
    <div class="absolute right-5 top-5 h-px w-20 bg-white/20 sm:right-8 sm:top-8" aria-hidden="true" />

    <svg
      class="absolute inset-0 h-full w-full"
      width="720"
      height="480"
      viewBox="0 0 720 480"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <ellipse cx="360" cy="416" rx="250" ry="22" fill="#070908" opacity="0.45" />

      <g v-if="slug === 'powerbox-2400'" transform="translate(132 116)">
        <path
          d="M130 50V28c0-14 11-25 25-25h146c14 0 25 11 25 25v22"
          fill="none"
          stroke="#78837a"
          stroke-width="18"
          stroke-linecap="round"
        />
        <rect x="42" y="58" width="372" height="246" rx="26" fill="#303733" stroke="#6a746d" stroke-width="3" />
        <rect x="72" y="92" width="160" height="84" rx="12" fill="#101411" stroke="#59635c" stroke-width="3" />
        <rect x="90" y="111" width="72" height="12" rx="6" fill="#c8f43d" />
        <rect x="90" y="137" width="112" height="8" rx="4" fill="#4f5952" />
        <rect x="270" y="92" width="110" height="150" rx="12" fill="#242a26" stroke="#59635c" stroke-width="3" />
        <circle cx="300" cy="126" r="13" fill="#111512" stroke="#78837a" stroke-width="3" />
        <circle cx="350" cy="126" r="13" fill="#111512" stroke="#78837a" stroke-width="3" />
        <rect x="296" y="166" width="58" height="32" rx="7" fill="#111512" stroke="#78837a" stroke-width="3" />
        <path d="M78 264h300" stroke="#4f5952" stroke-width="4" stroke-linecap="round" />
        <rect x="82" y="297" width="58" height="14" rx="7" fill="#111512" />
        <rect x="316" y="297" width="58" height="14" rx="7" fill="#111512" />
      </g>

      <g v-else-if="slug === 'homecore-5'" transform="translate(226 52)">
        <rect x="24" y="20" width="220" height="354" rx="24" fill="#343b37" stroke="#6a746d" stroke-width="3" />
        <rect x="48" y="50" width="172" height="13" rx="6.5" fill="#c8f43d" />
        <rect x="58" y="90" width="152" height="210" rx="14" fill="#272d29" stroke="#59635c" stroke-width="3" />
        <path d="M70 142h128M70 194h128M70 246h128" stroke="#59635c" stroke-width="3" />
        <circle cx="134" cy="334" r="11" fill="#c8f43d" />
        <path d="M5 102h18M5 190h18M5 278h18M245 102h18M245 190h18M245 278h18" stroke="#78837a" stroke-width="8" stroke-linecap="round" />
        <path d="M68 374v22M200 374v22" stroke="#151916" stroke-width="14" stroke-linecap="round" />
      </g>

      <g v-else transform="translate(132 72)">
        <path d="M76 54V24h310v30" fill="none" stroke="#78837a" stroke-width="16" stroke-linecap="round" />
        <rect x="54" y="58" width="356" height="272" rx="20" fill="#303733" stroke="#6a746d" stroke-width="3" />
        <rect x="86" y="92" width="286" height="100" rx="12" fill="#252b27" stroke="#59635c" stroke-width="3" />
        <rect x="106" y="112" width="120" height="13" rx="6.5" fill="#c8f43d" />
        <circle cx="328" cy="121" r="18" fill="#a92820" stroke="#ef9d95" stroke-width="4" />
        <rect x="88" y="222" width="280" height="70" rx="10" fill="#1e2420" stroke="#59635c" stroke-width="3" />
        <path d="M112 244h232M112 266h232" stroke="#667169" stroke-width="4" stroke-linecap="round" />
        <path d="M54 306h356" stroke="#78837a" stroke-width="12" />
        <circle cx="110" cy="354" r="36" fill="#111512" stroke="#7d887f" stroke-width="9" />
        <circle cx="354" cy="354" r="36" fill="#111512" stroke="#7d887f" stroke-width="9" />
      </g>
    </svg>
  </figure>
</template>
