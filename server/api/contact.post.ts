import {
  contactFieldNames,
  contactRequestSchema,
  type ContactApiResponse,
  type ContactFieldName
} from '../../shared/schemas/contact'
import type { H3Event } from 'h3'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5

const rateLimitStore = new Map<string, { count: number, resetAt: number }>()
const contactFieldNameSet = new Set<string>(contactFieldNames)

function requestClientKey(event: H3Event) {
  const forwardedFor = getHeader(event, 'x-forwarded-for')
  const candidate = forwardedFor?.split(',')[0]?.trim()

  return candidate || event.node.req.socket.remoteAddress || 'unknown'
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    })

    return false
  }

  current.count += 1

  if (current.count > RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  rateLimitStore.set(key, current)
  return false
}

function issueFields(issues: Array<{ path: PropertyKey[], code: string }>) {
  const fields: Partial<Record<ContactFieldName, string>> = {}

  for (const issue of issues) {
    const field = String(issue.path[0] ?? '')

    if (contactFieldNameSet.has(field) && !fields[field as ContactFieldName]) {
      fields[field as ContactFieldName] = issue.code
    }
  }

  return fields
}

export default defineEventHandler(async (event): Promise<ContactApiResponse> => {
  if (isRateLimited(requestClientKey(event))) {
    setResponseStatus(event, 429)

    return {
      ok: false,
      code: 'RATE_LIMITED'
    }
  }

  const body = await readBody(event)
  const parsed = contactRequestSchema.safeParse(body)

  if (!parsed.success) {
    setResponseStatus(event, 422)

    return {
      ok: false,
      code: 'VALIDATION_ERROR',
      fields: issueFields(parsed.error.issues)
    }
  }

  return {
    ok: true,
    code: 'ACCEPTED',
    received: {
      locale: parsed.data.locale,
      product: parsed.data.product,
      inquiryType: parsed.data.inquiryType
    }
  }
})
