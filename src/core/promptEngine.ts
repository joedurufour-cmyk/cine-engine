import type { CineState } from '../types'
import { ACTION_VERBS, DIRECTIONS, SCALE_OPTIONS, LOCATIONS, ENVIRONMENT_ELEMENTS, LIGHT_SOURCES, LIGHT_QUALITIES, COLOR_PALETTES, DEFAULT_NEGATIVE } from '../data/schema'

export function buildPrompt(s: CineState): string {
  const parts: string[] = []

  // L1 — Character(s)
  if (s.character1Name) {
    let charDesc = s.character1Name
    if (s.character1Universe) charDesc += ` (${s.character1Universe})`
    if (s.character1FaceRef && s.character1FaceRef !== 'original character') charDesc += `, ${s.character1FaceRef} face`
    if (s.character1Gender) charDesc += `, ${s.character1Gender}`
    parts.push(charDesc)
  }

  // L2 — Action
  const verb = ACTION_VERBS[s.actionVerb]
  if (verb) parts.push(verb.text)

  const dir = DIRECTIONS[s.actionDirection]
  if (dir) parts.push(dir)

  if (s.poseDescription) parts.push(s.poseDescription)
  if (s.emotionalIntensity) parts.push(`${s.emotionalIntensity} expression`)

  // Second character (multi-char scenes)
  if (s.enableSecondChar && s.character2Name) {
    let char2 = `alongside ${s.character2Name}`
    if (s.character2Universe) char2 += ` (${s.character2Universe})`
    if (s.character2FaceRef && s.character2FaceRef !== 'original character') char2 += `, ${s.character2FaceRef} face`
    parts.push(char2)
  }

  // L3 — Environment
  const loc = LOCATIONS.find(l => l.key === s.locationKey)
  if (loc) parts.push(loc.text)

  const envEls = s.environmentElements.map(id => {
    const el = ENVIRONMENT_ELEMENTS.find(e => e.id === id)
    return el?.text ?? ''
  }).filter(Boolean)
  if (envEls.length) parts.push(...envEls)

  const scale = SCALE_OPTIONS[s.scaleKey]
  if (scale) parts.push(scale.text)

  // L4 — Lighting
  const light = LIGHT_SOURCES.find(l => l.key === s.lightSource)
  if (light) parts.push(light.text)

  const quality = LIGHT_QUALITIES.find(q => q.key === s.lightQuality)
  if (quality) parts.push(quality.text)

  const palette = COLOR_PALETTES.find(p => p.key === s.colorPalette)
  if (palette) parts.push(palette.text)

  // L5 — Technical
  if (s.lens) parts.push(`shot on ${s.lens}`)
  if (s.aperture) parts.push(s.aperture)
  if (s.texture) parts.push(s.texture)
  if (s.movement) parts.push(s.movement)

  // L6 — Costume
  if (s.costumeStyle) parts.push(s.costumeStyle)
  if (s.costumeMaterial) parts.push(s.costumeMaterial)
  if (s.costumefit) parts.push(s.costumefit)
  if (s.physique) parts.push(s.physique)

  // Deduplicate
  const seen = new Set<string>()
  const deduped = parts.filter(p => {
    const key = p.toLowerCase().trim()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  let prompt = deduped.join(', ')

  // L7 — MJ Parameters
  const params: string[] = []
  params.push(`--ar ${s.aspectRatio}`)
  params.push('--style raw')

  if (s.engine === 'midjourney_v8_1') {
    params.push('--v 8.1')
  } else if (s.engine === 'niji_6') {
    params.push('--niji 6')
  } else if (s.engine === 'niji_7') {
    params.push('--niji 7')
  }

  params.push(`--stylize ${s.stylize}`)
  if (s.chaos > 0) params.push(`--chaos ${s.chaos}`)
  if (s.useImageRef) params.push(`--iw ${s.imageWeight}`)

  // Negatives
  const negBase = DEFAULT_NEGATIVE
  const customNeg = s.customNegatives ? `, ${s.customNegatives}` : ''
  params.push(`${negBase}${customNeg}`)

  prompt = `${prompt} ${params.join(' ')}`
  return prompt.slice(0, 6000)
}

export function buildNegative(_s: CineState): string {
  return DEFAULT_NEGATIVE.replace('--no ', '')
}
