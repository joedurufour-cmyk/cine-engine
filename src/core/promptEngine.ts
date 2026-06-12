import type { CineState } from '../types'
import { ACTION_VERBS, DIRECTIONS, SCALE_OPTIONS, LOCATIONS, ENVIRONMENT_ELEMENTS, LIGHT_SOURCES, LIGHT_QUALITIES, COLOR_PALETTES, DEFAULT_NEGATIVE, POSE_EPICAS, POSE_COMPOSER_OPTIONS, EPIC_MOVES, COMBO_SEQUENCES, MUSCLE_GROUP_VISIBILITY, PHYSIQUE_PRESETS, ANIME_DARK_STYLES, ANIME_PHYSICS_OPTIONS, LIGHTING_SCHEMES, LIGHT_ANIMATION_OPTIONS } from '../data/schema'

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

  // L9 — Epic Poses
  if (s.poseEpic) {
    const poseData = POSE_EPICAS[s.poseEpic]
    if (poseData) parts.push(poseData.text)
  }
  if (s.poseIntensity) parts.push(`${s.poseIntensity.toLowerCase()} pose intensity`)
  if (s.poseComposer.length > 0) {
    const composerTexts = s.poseComposer.map(id => {
      const opt = POSE_COMPOSER_OPTIONS.find(o => o.id === id)
      return opt?.label ?? ''
    }).filter(Boolean)
    if (composerTexts.length) parts.push(`pose composition: ${composerTexts.join(', ')}`)
  }

  // L10 — Epic Moves
  if (s.epicMove) {
    const moveData = EPIC_MOVES[s.epicMove]
    if (moveData) parts.push(moveData.text)
  }
  if (s.moveIntensity) parts.push(`${s.moveIntensity.toLowerCase()} movement intensity`)
  if (s.comboSequence) {
    const combo = COMBO_SEQUENCES.find(c => c.id === s.comboSequence)
    if (combo) parts.push(`combo sequence: ${combo.moves.join(' → ')}`)
  }

  // L11 — Physique
  if (s.muscleDefinition) parts.push(s.muscleDefinition.replace(/_/g, ' ') + ' muscle definition')
  if (s.muscleGroups.length > 0) {
    const groupLabels = s.muscleGroups.map(id => {
      const mg = MUSCLE_GROUP_VISIBILITY.find(m => m.id === id)
      return mg?.label ?? ''
    }).filter(Boolean)
    if (groupLabels.length) parts.push(`visible muscle groups: ${groupLabels.join(', ')}`)
  }
  if (s.physiquePreset) {
    const preset = PHYSIQUE_PRESETS.find(p => p.id === s.physiquePreset)
    if (preset) parts.push(`${preset.name} physique`)
  }
  if (s.bodyDetail.length > 0) parts.push(`body details: ${s.bodyDetail.join(', ')}`)

  // L12 — Anime Dark
  if (s.animeDarkStyle) {
    const style = ANIME_DARK_STYLES.find(st => st.id === s.animeDarkStyle)
    if (style) parts.push(`${style.name} anime style, ${style.description}`)
  }
  if (s.animePhysics) {
    const phys = ANIME_PHYSICS_OPTIONS.find(p => p.id === s.animePhysics)
    if (phys) parts.push(phys.description)
  }
  if (s.animeIntensity) parts.push(`${s.animeIntensity.toLowerCase()} anime intensity`)
  if (s.animeEffects.length > 0) parts.push(`anime effects: ${s.animeEffects.join(', ')}`)

  // L13 — Advanced Lighting
  if (s.lightingScheme) {
    const scheme = LIGHTING_SCHEMES.find(ls => ls.id === s.lightingScheme)
    if (scheme) parts.push(`${scheme.name} lighting: ${scheme.description}`)
  }
  if (s.lightAnimation) {
    const anim = LIGHT_ANIMATION_OPTIONS.find(a => a.id === s.lightAnimation)
    if (anim) parts.push(`animated light: ${anim.description}`)
  }
  if (s.lightIntensity) parts.push(`${s.lightIntensity.toLowerCase()} light intensity`)
  if (s.lightColorShift) parts.push(`color shift: ${s.lightColorShift}`)

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
