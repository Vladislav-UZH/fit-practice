import { z } from 'zod/v4'
import { localeSchema } from './product'

export const contactProductOptions = [
  'powerbox-2400',
  'homecore-5',
  'sitehub-10',
  'unsure'
] as const

export const contactInquiryTypeOptions = [
  'consultation',
  'technical',
  'distribution',
  'cooperation',
  'other'
] as const

export const contactProductSchema = z.enum(contactProductOptions)
export const contactInquiryTypeSchema = z.enum(contactInquiryTypeOptions)

export const contactLimits = {
  nameMin: 2,
  nameMax: 120,
  emailMax: 254,
  phoneMax: 40,
  companyMax: 160,
  messageMin: 20,
  messageMax: 3000
} as const

const optionalTrimmedString = (max: number) =>
  z.preprocess(
    value => typeof value === 'string' && value.trim() === '' ? undefined : value,
    z.string().trim().max(max).optional()
  )

export const contactRequestSchema = z.object({
  locale: localeSchema,
  name: z.string().trim().min(contactLimits.nameMin).max(contactLimits.nameMax),
  email: z.string().trim().toLowerCase().email().max(contactLimits.emailMax),
  phone: optionalTrimmedString(contactLimits.phoneMax),
  company: optionalTrimmedString(contactLimits.companyMax),
  product: contactProductSchema,
  inquiryType: contactInquiryTypeSchema,
  message: z.string().trim().min(contactLimits.messageMin).max(contactLimits.messageMax),
  consent: z.literal(true),
  website: z.string().trim().max(0).optional().default('')
}).strict()

export const contactFieldNames = [
  'name',
  'email',
  'phone',
  'company',
  'product',
  'inquiryType',
  'message',
  'consent',
  'website',
  'locale'
] as const

export type ContactProduct = z.infer<typeof contactProductSchema>
export type ContactInquiryType = z.infer<typeof contactInquiryTypeSchema>
export type ContactRequest = z.infer<typeof contactRequestSchema>
export type ContactFieldName = typeof contactFieldNames[number]

export type ContactApiSuccess = {
  ok: true
  code: 'ACCEPTED'
  received: Pick<ContactRequest, 'locale' | 'product' | 'inquiryType'>
}

export type ContactApiErrorCode =
  | 'VALIDATION_ERROR'
  | 'RATE_LIMITED'
  | 'SERVER_ERROR'

export type ContactApiError = {
  ok: false
  code: ContactApiErrorCode
  fields?: Partial<Record<ContactFieldName, string>>
}

export type ContactApiResponse = ContactApiSuccess | ContactApiError
