import { create } from 'zustand'
import type { CineStore, CineState, EngineKey, ActionVerb, DirectionKey, ScaleKey, AspectRatio } from '../types'
import { buildPrompt } from '../core/promptEngine'
import { PRESETS, ACTION_VERBS, LOCATIONS } from '../data/schema'

function rand<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }

const DEFAULT_STATE: CineState = {
  engine: 'midjourney_v8_1',
  character1Name: 'Wonder Woman',
  character1Universe: 'DC Comics',
  character1FaceRef: 'Gal Gadot',
  character1Gender: 'F | adult',
  enableSecondChar: false,
  character2Name: '',
  character2Universe: '',
  character2FaceRef: '',
  actionVerb: 'hovering',
  actionDirection: 'three_quarter',
  poseDescription: 'arms extended, cape flowing in wind',
  emotionalIntensity: 'determined',
  locationKey: 'low_earth_orbit',
  environmentElements: ['earth_curvature', 'city_lights'],
  scaleKey: 'wide_epic',
  lightSource: 'sun_backlight',
  lightQuality: 'golden_hour',
  colorPalette: 'golden_epic',
  lens: '85mm portrait',
  aperture: 'f/2.8 soft depth of field',
  texture: '35mm film grain photorealistic',
  movement: 'frozen sharp perfect focus',
  costumeStyle: 'classic comic-accurate suit',
  costumeMaterial: 'fabric and metal hybrid',
  costumefit: 'skintight showing full muscle definition',
  physique: 'defined muscular heroic physique',
  aspectRatio: '9:16',
  stylize: 80,
  chaos: 0,
  useImageRef: false,
  imageWeight: 1.0,
  customNegatives: '',
  openLayers: ['L1_CHARACTER'],
  generatedPrompt: '',
  generatedNegative: '',
}

function recompute(s: CineState): { generatedPrompt: string; generatedNegative: string } {
  return {
    generatedPrompt: buildPrompt(s),
    generatedNegative: '',
  }
}

export const useCineStore = create<CineStore>()((set) => ({
  ...DEFAULT_STATE,
  generatedPrompt: buildPrompt(DEFAULT_STATE),
  generatedNegative: '',

  setEngine: (e: EngineKey) => set(s => { const n = { ...s, engine: e }; return { ...n, ...recompute(n) } }),
  setCharacter1Name: (v) => set(s => { const n = { ...s, character1Name: v }; return { ...n, ...recompute(n) } }),
  setCharacter1Universe: (v) => set(s => { const n = { ...s, character1Universe: v }; return { ...n, ...recompute(n) } }),
  setCharacter1FaceRef: (v) => set(s => { const n = { ...s, character1FaceRef: v }; return { ...n, ...recompute(n) } }),
  setCharacter1Gender: (v) => set(s => { const n = { ...s, character1Gender: v }; return { ...n, ...recompute(n) } }),
  setEnableSecondChar: (v) => set(s => { const n = { ...s, enableSecondChar: v }; return { ...n, ...recompute(n) } }),
  setCharacter2Name: (v) => set(s => { const n = { ...s, character2Name: v }; return { ...n, ...recompute(n) } }),
  setCharacter2Universe: (v) => set(s => { const n = { ...s, character2Universe: v }; return { ...n, ...recompute(n) } }),
  setCharacter2FaceRef: (v) => set(s => { const n = { ...s, character2FaceRef: v }; return { ...n, ...recompute(n) } }),
  setActionVerb: (v: ActionVerb) => set(s => { const n = { ...s, actionVerb: v }; return { ...n, ...recompute(n) } }),
  setActionDirection: (v: DirectionKey) => set(s => { const n = { ...s, actionDirection: v }; return { ...n, ...recompute(n) } }),
  setPoseDescription: (v) => set(s => { const n = { ...s, poseDescription: v }; return { ...n, ...recompute(n) } }),
  setEmotionalIntensity: (v) => set(s => { const n = { ...s, emotionalIntensity: v }; return { ...n, ...recompute(n) } }),
  setLocationKey: (v) => set(s => { const n = { ...s, locationKey: v }; return { ...n, ...recompute(n) } }),
  toggleEnvironmentElement: (v) => set(s => {
    const has = s.environmentElements.includes(v)
    const n = { ...s, environmentElements: has ? s.environmentElements.filter(x => x !== v) : [...s.environmentElements, v] }
    return { ...n, ...recompute(n) }
  }),
  setScaleKey: (v: ScaleKey) => set(s => { const n = { ...s, scaleKey: v }; return { ...n, ...recompute(n) } }),
  setLightSource: (v) => set(s => { const n = { ...s, lightSource: v }; return { ...n, ...recompute(n) } }),
  setLightQuality: (v) => set(s => { const n = { ...s, lightQuality: v }; return { ...n, ...recompute(n) } }),
  setColorPalette: (v) => set(s => { const n = { ...s, colorPalette: v }; return { ...n, ...recompute(n) } }),
  setLens: (v) => set(s => { const n = { ...s, lens: v }; return { ...n, ...recompute(n) } }),
  setAperture: (v) => set(s => { const n = { ...s, aperture: v }; return { ...n, ...recompute(n) } }),
  setTexture: (v) => set(s => { const n = { ...s, texture: v }; return { ...n, ...recompute(n) } }),
  setMovement: (v) => set(s => { const n = { ...s, movement: v }; return { ...n, ...recompute(n) } }),
  setCostumeStyle: (v) => set(s => { const n = { ...s, costumeStyle: v }; return { ...n, ...recompute(n) } }),
  setCostumeMaterial: (v) => set(s => { const n = { ...s, costumeMaterial: v }; return { ...n, ...recompute(n) } }),
  setCostumefit: (v) => set(s => { const n = { ...s, costumefit: v }; return { ...n, ...recompute(n) } }),
  setPhysique: (v) => set(s => { const n = { ...s, physique: v }; return { ...n, ...recompute(n) } }),
  setAspectRatio: (v: AspectRatio) => set(s => { const n = { ...s, aspectRatio: v }; return { ...n, ...recompute(n) } }),
  setStylize: (v) => set(s => { const n = { ...s, stylize: v }; return { ...n, ...recompute(n) } }),
  setChaos: (v) => set(s => { const n = { ...s, chaos: v }; return { ...n, ...recompute(n) } }),
  setUseImageRef: (v) => set(s => { const n = { ...s, useImageRef: v }; return { ...n, ...recompute(n) } }),
  setImageWeight: (v) => set(s => { const n = { ...s, imageWeight: v }; return { ...n, ...recompute(n) } }),
  setCustomNegatives: (v) => set(s => { const n = { ...s, customNegatives: v }; return { ...n, ...recompute(n) } }),

  toggleLayer: (id) => set(s => ({
    openLayers: s.openLayers.includes(id) ? s.openLayers.filter(x => x !== id) : [...s.openLayers, id],
  })),

  loadPreset: (key) => set(s => {
    const preset = PRESETS[key as keyof typeof PRESETS]
    if (!preset) return s
    const { name: _n, description: _d, category: _c, ...fields } = preset
    const n: CineState = {
      ...s,
      ...fields,
      engine: fields.engine as EngineKey,
      actionVerb: fields.actionVerb as ActionVerb,
      actionDirection: fields.actionDirection as DirectionKey,
      scaleKey: fields.scaleKey as ScaleKey,
      aspectRatio: fields.aspectRatio as AspectRatio,
      openLayers: ['L1_CHARACTER','L2_ACTION','L3_ENVIRONMENT','L4_LIGHTING','L5_TECHNICAL','L6_COSTUME','L7_PARAMETERS','L8_NEGATIVE'],
    }
    return { ...n, ...recompute(n) }
  }),

  randomize: () => set(s => {
    const verbKeys = Object.keys(ACTION_VERBS) as ActionVerb[]
    const locKeys = LOCATIONS.map(l => l.key)
    const n: CineState = {
      ...s,
      actionVerb: rand(verbKeys),
      actionDirection: rand(['toward_camera','away','lateral_left','lateral_right','upward','downward','three_quarter'] as DirectionKey[]),
      emotionalIntensity: rand(['serene','determined','furious','triumphant','contemplative','cold and focused']),
      locationKey: rand(locKeys),
      scaleKey: rand(['intimate_closeup','medium_shot','wide_epic','extreme_wide'] as ScaleKey[]),
      stylize: rand([15,50,80,100,150]),
      chaos: rand([0,0,5]),
    }
    return { ...n, ...recompute(n) }
  }),

  reset: () => {
    const n = { ...DEFAULT_STATE, openLayers: ['L1_CHARACTER'] }
    set({ ...n, generatedPrompt: buildPrompt(n) })
  },
}))
