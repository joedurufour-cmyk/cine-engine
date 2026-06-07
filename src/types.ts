export type EngineKey = 'midjourney_v8_1' | 'niji_6' | 'niji_7'
export type ActionVerb = 'flying' | 'hovering' | 'diving' | 'landing' | 'ascending' | 'gliding' | 'fighting' | 'blocking' | 'striking' | 'charging' | 'transforming' | 'standing' | 'walking' | 'running' | 'crouching' | 'floating_meditative'
export type DirectionKey = 'toward_camera' | 'away' | 'lateral_left' | 'lateral_right' | 'upward' | 'downward' | 'three_quarter'
export type ScaleKey = 'intimate_closeup' | 'medium_shot' | 'wide_epic' | 'extreme_wide'
export type AspectRatio = '9:16' | '16:9' | '1:1' | '4:5' | '3:4' | '21:9'

export interface CineState {
  engine: EngineKey
  // L1 Character
  character1Name: string
  character1Universe: string
  character1FaceRef: string
  character1Gender: string
  // L1b Second character (optional)
  enableSecondChar: boolean
  character2Name: string
  character2Universe: string
  character2FaceRef: string
  // L2 Action
  actionVerb: ActionVerb
  actionDirection: DirectionKey
  poseDescription: string
  emotionalIntensity: string
  // L3 Environment
  locationKey: string
  environmentElements: string[]
  scaleKey: ScaleKey
  // L4 Lighting
  lightSource: string
  lightQuality: string
  colorPalette: string
  // L5 Technical
  lens: string
  aperture: string
  texture: string
  movement: string
  // L6 Costume/Physique
  costumeStyle: string
  costumeMaterial: string
  costumefit: string
  physique: string
  // L7 MJ Parameters
  aspectRatio: AspectRatio
  stylize: number
  chaos: number
  useImageRef: boolean
  imageWeight: number
  // L8 Negative / Exclusions
  customNegatives: string
  // UI
  openLayers: string[]
  generatedPrompt: string
  generatedNegative: string
}

export interface CineStore extends CineState {
  setEngine: (e: EngineKey) => void
  setCharacter1Name: (v: string) => void
  setCharacter1Universe: (v: string) => void
  setCharacter1FaceRef: (v: string) => void
  setCharacter1Gender: (v: string) => void
  setEnableSecondChar: (v: boolean) => void
  setCharacter2Name: (v: string) => void
  setCharacter2Universe: (v: string) => void
  setCharacter2FaceRef: (v: string) => void
  setActionVerb: (v: ActionVerb) => void
  setActionDirection: (v: DirectionKey) => void
  setPoseDescription: (v: string) => void
  setEmotionalIntensity: (v: string) => void
  setLocationKey: (v: string) => void
  toggleEnvironmentElement: (v: string) => void
  setScaleKey: (v: ScaleKey) => void
  setLightSource: (v: string) => void
  setLightQuality: (v: string) => void
  setColorPalette: (v: string) => void
  setLens: (v: string) => void
  setAperture: (v: string) => void
  setTexture: (v: string) => void
  setMovement: (v: string) => void
  setCostumeStyle: (v: string) => void
  setCostumeMaterial: (v: string) => void
  setCostumefit: (v: string) => void
  setPhysique: (v: string) => void
  setAspectRatio: (v: AspectRatio) => void
  setStylize: (v: number) => void
  setChaos: (v: number) => void
  setUseImageRef: (v: boolean) => void
  setImageWeight: (v: number) => void
  setCustomNegatives: (v: string) => void
  toggleLayer: (id: string) => void
  loadPreset: (key: string) => void
  randomize: () => void
  reset: () => void
}
