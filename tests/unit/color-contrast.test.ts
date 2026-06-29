import { describe, expect, it } from 'vitest'

type Rgb = readonly [number, number, number]

function hexToRgb(hex: string): Rgb {
  const normalized = hex.replace('#', '')
  if (!/^[0-9a-f]{6}$/iu.test(normalized)) {
    throw new Error(`Invalid six-digit color: ${hex}`)
  }

  return [0, 2, 4].map(index => Number.parseInt(normalized.slice(index, index + 2), 16) / 255) as unknown as Rgb
}

function channelLuminance(channel: number) {
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4
}

function luminance([red, green, blue]: Rgb) {
  return 0.2126 * channelLuminance(red)
    + 0.7152 * channelLuminance(green)
    + 0.0722 * channelLuminance(blue)
}

function contrastRatio(foreground: Rgb, background: Rgb) {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  return (lighter + 0.05) / (darker + 0.05)
}

function blend(foreground: Rgb, background: Rgb, alpha: number): Rgb {
  return foreground.map((channel, index) => alpha * channel + (1 - alpha) * background[index]) as unknown as Rgb
}

describe('audited application color contrast', () => {
  it.each([
    ['primary text on application background', '#111412', '#f3f2ed', 4.5],
    ['primary text on lime action surface', '#111412', '#c8f43d', 4.5],
    ['technical accent on application background', '#566a10', '#f3f2ed', 4.5],
    ['technical accent on white surface', '#566a10', '#ffffff', 4.5],
    ['white text on graphite surface', '#ffffff', '#171b19', 4.5],
    ['focus indicator on application background', '#6f8b10', '#f3f2ed', 3],
    ['focus indicator on white surface', '#6f8b10', '#ffffff', 3],
    ['focus indicator on graphite surface', '#6f8b10', '#171b19', 3]
  ])('%s meets its WCAG contrast threshold', (_label, foreground, background, threshold) => {
    expect(contrastRatio(hexToRgb(foreground), hexToRgb(background))).toBeGreaterThanOrEqual(threshold)
  })

  it.each([
    ['65% white secondary text on graphite', '#ffffff', '#171b19', 0.65, 4.5],
    ['75% white secondary text on graphite', '#ffffff', '#171b19', 0.75, 4.5],
    ['55% black secondary text on white', '#000000', '#ffffff', 0.55, 4.5],
    ['65% black secondary text on white', '#000000', '#ffffff', 0.65, 4.5]
  ])('%s meets its WCAG contrast threshold', (_label, foreground, background, alpha, threshold) => {
    const backgroundRgb = hexToRgb(background)
    const renderedForeground = blend(hexToRgb(foreground), backgroundRgb, alpha)
    expect(contrastRatio(renderedForeground, backgroundRgb)).toBeGreaterThanOrEqual(threshold)
  })
})
