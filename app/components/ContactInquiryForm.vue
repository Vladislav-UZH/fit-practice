<script setup lang="ts">
import {
  contactInquiryTypeOptions,
  contactProductOptions,
  contactRequestSchema,
  type ContactApiError,
  type ContactApiResponse,
  type ContactFieldName,
  type ContactInquiryType,
  type ContactProduct
} from '~~/shared/schemas/contact'

const props = defineProps<{
  initialProduct: ContactProduct
}>()

type FormStatus =
  | 'initial'
  | 'validating'
  | 'submitting'
  | 'success'
  | 'field-error'
  | 'server-error'
  | 'rate-limit'

const { locale, t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  product: props.initialProduct,
  inquiryType: 'consultation' as ContactInquiryType,
  message: '',
  consent: false,
  website: ''
})

const status = ref<FormStatus>('initial')
const errors = ref<Partial<Record<ContactFieldName, string>>>({})
const isMounted = ref(false)

const nameInput = ref<HTMLInputElement | null>(null)
const emailInput = ref<HTMLInputElement | null>(null)
const productInput = ref<HTMLSelectElement | null>(null)
const inquiryTypeInput = ref<HTMLSelectElement | null>(null)
const messageInput = ref<HTMLTextAreaElement | null>(null)
const consentInput = ref<HTMLInputElement | null>(null)

const fieldOrder: ContactFieldName[] = ['name', 'email', 'product', 'inquiryType', 'message', 'consent']

const fieldRefs: Partial<Record<ContactFieldName, Ref<HTMLElement | null>>> = {
  name: nameInput,
  email: emailInput,
  product: productInput,
  inquiryType: inquiryTypeInput,
  message: messageInput,
  consent: consentInput
}

const productOptions = contactProductOptions.map(value => ({
  value,
  label: t(`contact.options.products.${value}`)
}))

const inquiryTypeOptions = contactInquiryTypeOptions.map(value => ({
  value,
  label: t(`contact.options.inquiryTypes.${value}`)
}))

const isBusy = computed(() => status.value === 'validating' || status.value === 'submitting')
const canSubmit = computed(() => isMounted.value && !isBusy.value)
const controlsDisabled = computed(() => !isMounted.value || isBusy.value)
const hasErrors = computed(() => Object.keys(errors.value).length > 0)

const statusMessage = computed(() => {
  if (status.value === 'validating') {
    return t('contact.status.validating')
  }

  if (status.value === 'submitting') {
    return t('contact.status.submitting')
  }

  if (status.value === 'success') {
    return t('contact.status.success')
  }

  if (status.value === 'rate-limit') {
    return t('contact.status.rateLimit')
  }

  if (status.value === 'server-error') {
    return t('contact.status.serverError')
  }

  if (status.value === 'field-error') {
    return t('contact.status.fieldError')
  }

  return t('contact.status.initial')
})

function fieldError(field: ContactFieldName) {
  if (!errors.value[field]) {
    return ''
  }

  if (field === 'name') {
    return form.name.trim() ? t('contact.validation.shortName') : t('contact.validation.required')
  }

  if (field === 'email') {
    return form.email.trim() ? t('contact.validation.invalidEmail') : t('contact.validation.required')
  }

  if (field === 'message') {
    if (!form.message.trim()) {
      return t('contact.validation.required')
    }

    return form.message.trim().length > 3000
      ? t('contact.validation.longMessage')
      : t('contact.validation.shortMessage')
  }

  if (field === 'consent') {
    return t('contact.validation.consent')
  }

  if (field === 'product' || field === 'inquiryType') {
    return t('contact.validation.required')
  }

  return t('contact.validation.required')
}

function fieldDescribedBy(field: ContactFieldName, hintId?: string) {
  const ids = []

  if (hintId) {
    ids.push(hintId)
  }

  if (errors.value[field]) {
    ids.push(`contact-${field}-error`)
  }

  return ids.join(' ') || undefined
}

function applyValidationErrors(validationErrors: Partial<Record<ContactFieldName, string>>) {
  errors.value = validationErrors
  status.value = 'field-error'

  void nextTick(() => {
    const firstInvalid = fieldOrder.find(field => errors.value[field])
    fieldRefs[firstInvalid ?? 'name']?.value?.focus()
  })
}

function requestBody() {
  return {
    locale: locale.value,
    name: form.name,
    email: form.email,
    phone: form.phone,
    company: form.company,
    product: form.product,
    inquiryType: form.inquiryType,
    message: form.message,
    consent: form.consent,
    website: form.website
  }
}

function issueFields(issues: Array<{ path: PropertyKey[], code: string }>) {
  const validationErrors: Partial<Record<ContactFieldName, string>> = {}

  for (const issue of issues) {
    const field = String(issue.path[0] ?? '') as ContactFieldName

    if (!validationErrors[field]) {
      validationErrors[field] = issue.code
    }
  }

  return validationErrors
}

function handleApiError(error?: ContactApiError) {
  if (error?.code === 'RATE_LIMITED') {
    status.value = 'rate-limit'
    return
  }

  if (error?.code === 'VALIDATION_ERROR') {
    applyValidationErrors(error.fields ?? {})
    return
  }

  status.value = 'server-error'
}

async function submitForm() {
  status.value = 'validating'
  errors.value = {}

  await nextTick()

  const parsed = contactRequestSchema.safeParse(requestBody())

  if (!parsed.success) {
    applyValidationErrors(issueFields(parsed.error.issues))
    return
  }

  status.value = 'submitting'

  try {
    const response = await $fetch<ContactApiResponse>('/api/contact', {
      method: 'POST',
      body: parsed.data
    })

    if (response.ok) {
      status.value = 'success'
      errors.value = {}
      return
    }

    handleApiError(response)
  }
  catch (error) {
    const fetchError = error as { data?: ContactApiError }
    handleApiError(fetchError.data)
  }
}

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <form
    data-testid="contact-form"
    class="border border-black/15 bg-white p-5 sm:p-8"
    novalidate
    @submit.prevent="submitForm"
  >
    <div class="flex flex-col gap-3 border-b border-black/10 pb-6">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#637b13]">
        {{ $t('contact.form.eyebrow') }}
      </p>
      <h2 class="text-3xl font-semibold tracking-[-0.035em]">
        {{ $t('contact.form.title') }}
      </h2>
      <p class="max-w-2xl text-sm leading-6 text-black/60">
        {{ $t('contact.form.description') }}
      </p>
    </div>

    <div
      class="mt-6 border p-4 text-sm leading-6"
      :class="{
        'border-[#8aaa12] bg-[#f8ffe7] text-black': status === 'success',
        'border-red-300 bg-red-50 text-red-950': status === 'field-error' || status === 'server-error' || status === 'rate-limit',
        'border-black/10 bg-[#f3f2ed] text-black/65': status === 'initial' || status === 'validating' || status === 'submitting'
      }"
      :role="status === 'field-error' || status === 'server-error' || status === 'rate-limit' ? 'alert' : 'status'"
      aria-live="polite"
      data-testid="contact-status"
    >
      {{ statusMessage }}
    </div>

    <div
      v-if="hasErrors"
      class="mt-4 border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-950"
      role="alert"
      data-testid="contact-error-summary"
    >
      <p class="font-semibold">{{ $t('contact.validation.summary') }}</p>
      <ul class="mt-2 list-disc space-y-1 pl-5">
        <li v-for="field in fieldOrder.filter(item => errors[item])" :key="field">
          <a class="underline underline-offset-4" :href="`#contact-${field}`">
            {{ fieldError(field) }}
          </a>
        </li>
      </ul>
    </div>

    <div class="mt-8 grid gap-5 md:grid-cols-2">
      <div class="min-w-0">
        <label for="contact-name" class="block text-sm font-semibold">
          {{ $t('contact.fields.name') }}
        </label>
        <input
          id="contact-name"
          ref="nameInput"
          v-model="form.name"
          name="name"
          autocomplete="name"
          class="mt-2 min-h-11 w-full min-w-0 border border-black/20 bg-white px-3 py-2 text-base"
          :aria-invalid="Boolean(errors.name)"
          :aria-describedby="fieldDescribedBy('name')"
          :disabled="controlsDisabled"
        >
        <p v-if="errors.name" id="contact-name-error" class="mt-2 text-sm text-red-700">
          {{ fieldError('name') }}
        </p>
      </div>

      <div class="min-w-0">
        <label for="contact-email" class="block text-sm font-semibold">
          {{ $t('contact.fields.email') }}
        </label>
        <input
          id="contact-email"
          ref="emailInput"
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          class="mt-2 min-h-11 w-full min-w-0 border border-black/20 bg-white px-3 py-2 text-base"
          :aria-invalid="Boolean(errors.email)"
          :aria-describedby="fieldDescribedBy('email')"
          :disabled="controlsDisabled"
        >
        <p v-if="errors.email" id="contact-email-error" class="mt-2 text-sm text-red-700">
          {{ fieldError('email') }}
        </p>
      </div>

      <div class="min-w-0">
        <label for="contact-phone" class="block text-sm font-semibold">
          {{ $t('contact.fields.phone') }}
          <span class="font-normal text-black/50">{{ $t('contact.fields.optional') }}</span>
        </label>
        <input
          id="contact-phone"
          v-model="form.phone"
          name="phone"
          type="tel"
          autocomplete="tel"
          class="mt-2 min-h-11 w-full min-w-0 border border-black/20 bg-white px-3 py-2 text-base"
          :disabled="controlsDisabled"
        >
      </div>

      <div class="min-w-0">
        <label for="contact-company" class="block text-sm font-semibold">
          {{ $t('contact.fields.company') }}
          <span class="font-normal text-black/50">{{ $t('contact.fields.optional') }}</span>
        </label>
        <input
          id="contact-company"
          v-model="form.company"
          name="company"
          autocomplete="organization"
          class="mt-2 min-h-11 w-full min-w-0 border border-black/20 bg-white px-3 py-2 text-base"
          :disabled="controlsDisabled"
        >
      </div>

      <div class="min-w-0">
        <label for="contact-product" class="block text-sm font-semibold">
          {{ $t('contact.fields.product') }}
        </label>
        <select
          id="contact-product"
          ref="productInput"
          v-model="form.product"
          name="product"
          class="mt-2 min-h-11 w-full min-w-0 border border-black/20 bg-white px-3 py-2 text-base"
          :aria-invalid="Boolean(errors.product)"
          :aria-describedby="fieldDescribedBy('product')"
          :disabled="controlsDisabled"
        >
          <option v-for="option in productOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <p v-if="errors.product" id="contact-product-error" class="mt-2 text-sm text-red-700">
          {{ fieldError('product') }}
        </p>
      </div>

      <div class="min-w-0">
        <label for="contact-inquiryType" class="block text-sm font-semibold">
          {{ $t('contact.fields.inquiryType') }}
        </label>
        <select
          id="contact-inquiryType"
          ref="inquiryTypeInput"
          v-model="form.inquiryType"
          name="inquiryType"
          class="mt-2 min-h-11 w-full min-w-0 border border-black/20 bg-white px-3 py-2 text-base"
          :aria-invalid="Boolean(errors.inquiryType)"
          :aria-describedby="fieldDescribedBy('inquiryType')"
          :disabled="controlsDisabled"
        >
          <option v-for="option in inquiryTypeOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <p v-if="errors.inquiryType" id="contact-inquiryType-error" class="mt-2 text-sm text-red-700">
          {{ fieldError('inquiryType') }}
        </p>
      </div>
    </div>

    <div class="mt-5">
      <label for="contact-message" class="block text-sm font-semibold">
        {{ $t('contact.fields.message') }}
      </label>
      <p id="contact-message-hint" class="mt-1 text-sm leading-6 text-black/55">
        {{ $t('contact.form.messageHint') }}
      </p>
      <textarea
        id="contact-message"
        ref="messageInput"
        v-model="form.message"
        name="message"
        rows="7"
        class="mt-2 w-full min-w-0 resize-y border border-black/20 bg-white px-3 py-2 text-base leading-7"
        :aria-invalid="Boolean(errors.message)"
        :aria-describedby="fieldDescribedBy('message', 'contact-message-hint')"
        :disabled="controlsDisabled"
      />
      <p v-if="errors.message" id="contact-message-error" class="mt-2 text-sm text-red-700">
        {{ fieldError('message') }}
      </p>
    </div>

    <div class="mt-5">
      <input
        id="contact-website"
        v-model="form.website"
        name="website"
        autocomplete="off"
        tabindex="-1"
        class="sr-only"
        aria-hidden="true"
      >
    </div>

    <div class="mt-6 border border-black/10 bg-[#f3f2ed] p-4">
      <label for="contact-consent" class="flex items-start gap-3 text-sm leading-6">
        <input
          id="contact-consent"
          ref="consentInput"
          v-model="form.consent"
          name="consent"
          type="checkbox"
          class="mt-1 h-5 w-5 shrink-0"
          :aria-invalid="Boolean(errors.consent)"
          :aria-describedby="fieldDescribedBy('consent', 'contact-consent-hint')"
          :disabled="controlsDisabled"
        >
        <span>
          <span class="font-semibold">{{ $t('contact.fields.consent') }}</span>
          <span id="contact-consent-hint" class="mt-1 block text-black/60">
            {{ $t('contact.form.consentHint') }}
          </span>
        </span>
      </label>
      <p v-if="errors.consent" id="contact-consent-error" class="mt-2 text-sm text-red-700">
        {{ fieldError('consent') }}
      </p>
    </div>

    <div class="mt-7 flex flex-wrap items-center gap-4">
      <UButton
        type="submit"
        color="primary"
        size="lg"
        :loading="isBusy"
        :disabled="!canSubmit"
      >
        {{ isBusy ? $t('contact.form.submitting') : $t('contact.form.submit') }}
      </UButton>
      <p class="max-w-xl text-xs leading-5 text-black/50">
        {{ $t('contact.form.noCommerce') }}
      </p>
    </div>
  </form>
</template>
