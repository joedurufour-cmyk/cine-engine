// CINE Engine Schema — Cinematic Superhero Prompt System V8.1

export interface LocationOption {
  key: string
  label: string
  text: string
  category: string
}

export interface LightSourceOption {
  key: string
  label: string
  text: string
  effect: string
}

export interface LightQualityOption {
  key: string
  label: string
  text: string
  mood: string
}

export interface ColorPaletteOption {
  key: string
  label: string
  text: string
  vibe: string
}

export interface LensOption {
  value: string
  label: string
  mm: string
  effect: string
}

export interface ApertureOption {
  value: string
  label: string
  effect: string
}

export interface TextureOption {
  value: string
  label: string
  effect: string
}

export interface MovementOption {
  value: string
  label: string
  effect: string
}

export interface CostumeStyleOption {
  value: string
  label: string
  description: string
}

export interface Preset {
  name: string
  description: string
  category: string
  engine: string
  character1Name: string
  character1Universe: string
  character1FaceRef: string
  character1Gender: string
  enableSecondChar: boolean
  character2Name: string
  character2Universe: string
  character2FaceRef: string
  actionVerb: string
  actionDirection: string
  poseDescription: string
  emotionalIntensity: string
  locationKey: string
  environmentElements: string[]
  scaleKey: string
  lightSource: string
  lightQuality: string
  colorPalette: string
  lens: string
  aperture: string
  texture: string
  movement: string
  costumeStyle: string
  costumeMaterial: string
  costumefit: string
  physique: string
  aspectRatio: string
  stylize: number
  chaos: number
  useImageRef: boolean
  imageWeight: number
  customNegatives: string
}

// ─── ENGINE LABELS ────────────────────────────────────────────────────────────

export const ENGINE_LABELS: Record<string, string> = {
  midjourney_v8_1: 'Midjourney V8.1',
  niji_6: 'Niji 6',
  niji_7: 'Niji 7',
}

// ─── L2 ACTION ────────────────────────────────────────────────────────────────

export const ACTION_VERBS: Record<string, { label: string; text: string; category: string }> = {
  flying:              { label: 'Flying',              text: 'flying through the air',                 category: 'Vuelo' },
  hovering:            { label: 'Hovering',            text: 'hovering motionless in mid-air',         category: 'Vuelo' },
  diving:              { label: 'Diving',              text: 'diving at high speed downward',          category: 'Vuelo' },
  landing:             { label: 'Landing',             text: 'landing with powerful impact',           category: 'Vuelo' },
  ascending:           { label: 'Ascending',           text: 'ascending vertically at speed',         category: 'Vuelo' },
  gliding:             { label: 'Gliding',             text: 'gliding with controlled grace',         category: 'Vuelo' },
  fighting:            { label: 'Fighting',            text: 'in intense mid-combat',                 category: 'Combate' },
  blocking:            { label: 'Blocking',            text: 'blocking a powerful incoming attack',   category: 'Combate' },
  striking:            { label: 'Striking',            text: 'delivering a powerful strike',          category: 'Combate' },
  charging:            { label: 'Charging',            text: 'charging forward with full force',      category: 'Combate' },
  transforming:        { label: 'Transforming',        text: 'mid-transformation, power awakening',   category: 'Poder' },
  standing:            { label: 'Standing',            text: 'standing in powerful iconic pose',      category: 'Estático' },
  walking:             { label: 'Walking',             text: 'walking with commanding presence',      category: 'Estático' },
  running:             { label: 'Running',             text: 'running at full sprint speed',         category: 'Estático' },
  crouching:           { label: 'Crouching',           text: 'crouching ready to launch into action', category: 'Estático' },
  floating_meditative: { label: 'Meditando',           text: 'floating in meditative power pose',    category: 'Poder' },
}

export const ACTION_CATEGORIES = ['Vuelo', 'Combate', 'Poder', 'Estático']

export const DIRECTIONS: Record<string, string> = {
  toward_camera:  'moving directly toward camera, extreme foreshortening',
  away:           'moving away from camera, dramatic back view',
  lateral_left:   'moving laterally left, profile view',
  lateral_right:  'moving laterally right, profile view',
  upward:         'ascending upward, shot from below looking up',
  downward:       'descending downward, shot from above',
  three_quarter:  '3/4 angle dynamic composition',
}

export const DIRECTION_LABELS: Record<string, string> = {
  toward_camera: 'Hacia cámara',
  away: 'De espaldas',
  lateral_left: 'Lateral izq.',
  lateral_right: 'Lateral der.',
  upward: 'Ascendiendo',
  downward: 'Descendiendo',
  three_quarter: '3/4 diagonal',
}

export const EMOTIONAL_INTENSITIES = [
  'serene',
  'determined',
  'furious',
  'wounded but standing',
  'triumphant',
  'contemplative',
  'terrified but fighting',
  'cold and focused',
  'joyful powerful',
  'desperate last stand',
]

export const POSE_SUGGESTIONS = [
  'fists forward Superman pose',
  'arms extended hovering',
  'one arm back winding up',
  'combat stance side profile',
  'arms outstretched landing impact',
  'power-up energy radiating',
  'mid-transformation energy burst',
  'defensive shield block',
  'aggressive ready stance',
  'floating cross-legged meditative',
  'back to camera looking over shoulder',
  'crouching coiled ready to spring',
]

// ─── L3 ENVIRONMENT ───────────────────────────────────────────────────────────

export const LOCATIONS: LocationOption[] = [
  // Aerial / Space
  { key: 'low_earth_orbit',    label: 'Órbita Baja',        text: 'low Earth orbit, curvature of the Earth visible, thin atmosphere glow, stars above',   category: 'Espacio' },
  { key: 'deep_space',         label: 'Espacio Profundo',   text: 'deep space, infinite star field, nebula colors, absolute darkness',                      category: 'Espacio' },
  { key: 'upper_atmosphere',   label: 'Alta Atmósfera',     text: 'upper atmosphere, thin air, Earth curvature below, stratospheric blue',                  category: 'Espacio' },
  { key: 'breaking_atmosphere',label: 'Rompiendo Atmósfera',text: 'breaking through atmosphere, plasma trail, fire and light, Earth below',                 category: 'Espacio' },
  // Urban
  { key: 'city_rooftop',       label: 'Azotea Ciudad',      text: 'city rooftop, glittering metropolis below, skyscrapers, urban skyline at night',         category: 'Urbano' },
  { key: 'city_street',        label: 'Calle Urbana',       text: 'city street level, people fleeing, cars overturned, urban chaos',                        category: 'Urbano' },
  { key: 'destroyed_city',     label: 'Ciudad Destruida',   text: 'destroyed city, crumbling buildings, fire and smoke, apocalyptic urban landscape',       category: 'Urbano' },
  { key: 'subway_tunnel',      label: 'Túnel Metro',        text: 'underground subway tunnel, flickering lights, concrete walls, industrial darkness',      category: 'Urbano' },
  // Nature / Extreme
  { key: 'volcanic',           label: 'Volcánico',          text: 'volcanic landscape, lava flows, ash clouds, hellish red-orange glow, pyroclastic',       category: 'Naturaleza' },
  { key: 'arctic',             label: 'Ártico',             text: 'arctic tundra, ice sheets, blizzard, frozen wasteland, pale cold light',                 category: 'Naturaleza' },
  { key: 'ocean_storm',        label: 'Océano Tormenta',    text: 'stormy ocean surface, massive waves, lightning, sea foam, dramatic water',               category: 'Naturaleza' },
  { key: 'forest_ancient',     label: 'Bosque Antiguo',     text: 'ancient forest, towering trees, filtered god rays, mist between trunks, mystical',      category: 'Naturaleza' },
  { key: 'desert',             label: 'Desierto',           text: 'vast desert, sand dunes, heat shimmer, lone figure, golden dust clouds',                 category: 'Naturaleza' },
  // Alien / Fantasy
  { key: 'alien_planet',       label: 'Planeta Alienígena', text: 'alien planet surface, two moons, strange vegetation, otherworldly sky colors',           category: 'Fantástico' },
  { key: 'energy_dimension',   label: 'Dimensión Energía',  text: 'abstract energy dimension, swirling reality, impossible geometry, power nexus',          category: 'Fantástico' },
  { key: 'ancient_ruins',      label: 'Ruinas Antiguas',    text: 'ancient civilizaton ruins, crumbling stone pillars, overgrown, epic scale architecture', category: 'Fantástico' },
  { key: 'battlefield',        label: 'Campo de Batalla',   text: 'massive battlefield, armies below, explosions, smoke, war-torn landscape, epic scale',   category: 'Fantástico' },
  { key: 'underwater',         label: 'Submarino',          text: 'deep underwater, bioluminescent creatures, crushing pressure, ethereal light shafts',    category: 'Fantástico' },
  // Sci-Fi
  { key: 'spaceship_interior', label: 'Nave Espacial',      text: 'spaceship interior, sci-fi corridor, panels of light, zero gravity debris',              category: 'Sci-Fi' },
  { key: 'cyberpunk_city',     label: 'Ciudad Cyberpunk',   text: 'cyberpunk megacity, neon signs, rain-soaked streets, holographic ads, dystopian',        category: 'Sci-Fi' },
  { key: 'abstract_void',      label: 'Vacío Abstracto',    text: 'abstract void, infinite black, singular figure as only element, minimalist epic',        category: 'Sci-Fi' },
]

export const LOCATION_CATEGORIES = ['Espacio', 'Urbano', 'Naturaleza', 'Fantástico', 'Sci-Fi']

export const ENVIRONMENT_ELEMENTS = [
  { id: 'earth_curvature',    label: 'Curvatura Tierra',  text: 'Earth curvature visible below' },
  { id: 'city_lights',        label: 'Luces Ciudad',      text: 'city lights twinkling far below' },
  { id: 'explosions',         label: 'Explosiones',       text: 'massive explosions, fireballs, shockwaves' },
  { id: 'debris_frozen',      label: 'Escombros Frozen',  text: 'debris frozen in mid-air, gravity defied' },
  { id: 'energy_portals',     label: 'Portales Energía',  text: 'swirling energy portals, dimensional rifts' },
  { id: 'lightning_storm',    label: 'Tormenta Rayos',    text: 'dramatic lightning storm, electric atmosphere' },
  { id: 'speed_lines',        label: 'Líneas Velocidad',  text: 'speed lines radiating from subject' },
  { id: 'cosmic_phenomena',   label: 'Fenómenos Cósmicos',text: 'cosmic phenomena, nebula wisps, star formation' },
  { id: 'shockwave',          label: 'Onda de Choque',    text: 'visible sonic shockwave, air compression ring' },
  { id: 'rain',               label: 'Lluvia',            text: 'heavy rain, wet surfaces, puddle reflections' },
  { id: 'smoke',              label: 'Humo',              text: 'dramatic smoke clouds, atmospheric density' },
  { id: 'crowds_below',       label: 'Multitudes',        text: 'massive crowd below, ant-scale people, epic scale' },
]

export const SCALE_OPTIONS: Record<string, { label: string; text: string }> = {
  intimate_closeup: { label: 'Close-Up',     text: 'intimate close-up, face and upper chest, emotional detail' },
  medium_shot:      { label: 'Medio Cuerpo', text: 'medium shot, waist up, action detail visible' },
  wide_epic:        { label: 'Plano Épico',  text: 'wide epic shot, full body, environment dominant' },
  extreme_wide:     { label: 'Ultra Épico',  text: 'extreme wide shot, figure small against massive environment' },
}

// ─── L4 LIGHTING ──────────────────────────────────────────────────────────────

export const LIGHT_SOURCES: LightSourceOption[] = [
  { key: 'sun_backlight',    label: 'Sol Contraluces',    text: 'intense sun backlight, silhouette rim',             effect: 'Silueta dramática con borde de luz solar' },
  { key: 'moonlight',        label: 'Luz de Luna',        text: 'cold moonlight, silver-blue illumination',          effect: 'Tonos azul-plateado, misterioso y épico' },
  { key: 'neon_ambient',     label: 'Neón Ambiental',     text: 'neon ambient light, multi-colored urban glow',      effect: 'Colores vibrantes neón, estilo cyberpunk' },
  { key: 'fire_explosion',   label: 'Fuego / Explosión',  text: 'fire and explosion light, warm chaotic illumination',effect: 'Luz cálida e intensa, sombras dinámicas' },
  { key: 'energy_glow',      label: 'Aura de Energía',    text: 'character-emitted energy glow, power radiance',     effect: 'El personaje es la fuente de luz, poder visible' },
  { key: 'studio_dramatic',  label: 'Studio Dramático',   text: 'dramatic studio key light, controlled shadows',     effect: 'Luz controlada, contraste máximo' },
  { key: 'natural_overcast', label: 'Natural Nublado',    text: 'natural overcast diffused light, even soft shadows', effect: 'Luz suave y uniforme, realismo fotográfico' },
  { key: 'lightning',        label: 'Relámpago',          text: 'electric lightning flash illumination, blue-white burst', effect: 'Flash eléctrico, congelar acción dramática' },
]

export const LIGHT_QUALITIES: LightQualityOption[] = [
  { key: 'golden_hour',     label: 'Golden Hour',      text: 'warm golden hour light, long shadows, amber glow',              mood: 'Épico cálido, heroico y triunfante' },
  { key: 'blue_hour',       label: 'Blue Hour',        text: 'blue hour twilight, cool desaturated, transitional light',      mood: 'Melancólico, misterioso, contemplativo' },
  { key: 'harsh_noir',      label: 'Noir Duro',        text: 'harsh noir lighting, deep shadows, extreme contrast',           mood: 'Oscuro, tenso, peligroso' },
  { key: 'soft_diffused',   label: 'Suave Difuso',     text: 'soft diffused light, no harsh shadows, gentle wrap',            mood: 'Suave, esperanzador, clean' },
  { key: 'volumetric',      label: 'Volumétrico',      text: 'volumetric god-rays, light shafts through atmosphere',          mood: 'Épico, divino, majestuoso' },
  { key: 'bioluminescent',  label: 'Bioluminiscente',  text: 'bioluminescent glow, alien organic light, aqua hues',          mood: 'Misterioso, alien, fascinante' },
  { key: 'strobe_contrast', label: 'Strobe Contraste', text: 'extreme contrast strobe lighting, whites blown, blacks crushed', mood: 'Violento, urgente, caótico' },
]

export const COLOR_PALETTES: ColorPaletteOption[] = [
  { key: 'warm_cool_split', label: 'Warm-Cool Split',   text: 'warm-cool color split, orange and blue contrast',     vibe: 'Cinemático clásico de Hollywood' },
  { key: 'monochromatic',   label: 'Monocromático',     text: 'monochromatic color palette, single hue variations',  vibe: 'Artístico y estilizado' },
  { key: 'saturated_comic', label: 'Comic Saturado',    text: 'highly saturated comic book colors, primary palette',  vibe: 'Fiel al cómic, vibrante' },
  { key: 'muted_realistic', label: 'Muted Realista',    text: 'muted desaturated realistic tones, natural colors',   vibe: 'Realismo fotográfico' },
  { key: 'teal_orange',     label: 'Teal & Orange',     text: 'teal and orange cinematic color grading',             vibe: 'Blockbuster cinematográfico moderno' },
  { key: 'neon_cyberpunk',  label: 'Neon Cyberpunk',    text: 'neon cyberpunk palette, hot pink, electric blue, lime green', vibe: 'Futurista, nocturno, urbano' },
  { key: 'golden_epic',     label: 'Golden Épico',      text: 'golden amber epic palette, warm heroic tones',        vibe: 'Heroico, épico, grandioso' },
  { key: 'dark_desaturated',label: 'Dark Gritty',       text: 'dark desaturated gritty palette, muted and heavy',    vibe: 'Sombrío, realista, tenso' },
]

// ─── L5 TECHNICAL ─────────────────────────────────────────────────────────────

export const LENS_OPTIONS: LensOption[] = [
  { value: '24mm wide angle',   label: '24mm — Gran Angular',   mm: '24mm', effect: 'Distorsión dramática, perspectiva exagerada. Extremidades cerca parecen más grandes. Efecto heroico e intimidante.' },
  { value: '35mm wide',         label: '35mm — Semi Angular',   mm: '35mm', effect: 'Gran angular moderado. Natural pero dinámico. Ideal para acción en entorno.' },
  { value: '50mm standard',     label: '50mm — Estándar',       mm: '50mm', effect: 'Reproduce el ojo humano. Natural y equilibrado. Para drama sin distorsión.' },
  { value: '85mm portrait',     label: '85mm — Portrait',       mm: '85mm', effect: 'Compresión suave, alarga el cuerpo. Bokeh cremoso. El lente del héroe por excelencia.' },
  { value: '135mm telephoto',   label: '135mm — Teleobjetivo',  mm: '135mm', effect: 'Compresión notable. El sujeto aplastado contra el fondo. "Pared de poder" visual.' },
  { value: '200mm compression', label: '200mm — Súper Tele',    mm: '200mm', effect: 'Compresión extrema. Fondo completamente aplastado. Efecto revista de superhéroe.' },
]

export const APERTURE_OPTIONS: ApertureOption[] = [
  { value: 'f/1.4 shallow depth of field', label: 'f/1.4 — Superficial', effect: 'Bokeh extremo. Sujeto totalmente separado del fondo. Solo rostro/figura en foco.' },
  { value: 'f/2.8 soft depth of field',    label: 'f/2.8 — Suave',       effect: 'Bokeh suave. Sujeto nítido, fondo desenfocado pero reconocible. Estándar épico.' },
  { value: 'f/5.6 balanced depth',         label: 'f/5.6 — Balanceado',  effect: 'Equilibrio entre sujeto y entorno. Ambos parcialmente nítidos.' },
  { value: 'f/11 deep depth of field',     label: 'f/11 — Todo Nítido',  effect: 'Todo en foco de cerca a lejos. Para shots épicos con entorno importante.' },
]

export const TEXTURE_OPTIONS: TextureOption[] = [
  { value: 'clean digital 8K resolution',       label: 'Digital Limpio 8K',   effect: 'Ultra-nítido, sin grain, máximo detalle. Aspecto de producción digital moderna.' },
  { value: '35mm film grain photorealistic',     label: '35mm Film Grain',     effect: 'Grain de película 35mm. Textura orgánica, aspecto cinematográfico clásico.' },
  { value: '16mm gritty film grain',             label: '16mm Gritty',         effect: 'Grain grueso de 16mm. Más agresivo, underground, urgente y tenso.' },
  { value: 'IMAX pristine quality',             label: 'IMAX Prístino',       effect: 'Calidad IMAX, nítido sin grain, escala épica, detalle extremo en gran formato.' },
]

export const MOVEMENT_OPTIONS: MovementOption[] = [
  { value: 'frozen sharp perfect focus',         label: 'Congelado Nítido',    effect: 'Momento congelado con perfección. Cada detalle nítido. Para poses de poder.' },
  { value: 'motion blur on background',          label: 'Blur en Fondo',       effect: 'Sujeto nítido, fondo con blur. Sensación de velocidad sin perder detalle del héroe.' },
  { value: 'motion blur on subject',             label: 'Blur en Sujeto',      effect: 'Sujeto con blur de movimiento. Velocidad extrema, figura casi fantasmal.' },
  { value: 'slow shutter light trails',          label: 'Light Trails',        effect: 'Trazos de luz de larga exposición. Para energía, relámpagos, velocidad.' },
]

// ─── L6 COSTUME / PHYSIQUE ────────────────────────────────────────────────────

export const COSTUME_STYLES: CostumeStyleOption[] = [
  { value: 'classic comic-accurate suit',       label: 'Comic Clásico',       description: 'Fiel al cómic original. Colores primarios, sin detalles extra.' },
  { value: 'tactical military redesign',        label: 'Táctico Militar',     description: 'Rediseño realista con elementos militares. Práctico y moderno.' },
  { value: 'battle-damaged worn suit',          label: 'Batalla Dañado',      description: 'Traje con daño de combate. Rasgones, quemaduras, polvo. Más dramático.' },
  { value: 'civilian secret identity clothes',  label: 'Identidad Secreta',   description: 'Ropa civil. Alter ego. Camisa, jeans, chaqueta de cuero.' },
  { value: 'alternate universe dark variant',   label: 'Universo Alternativo', description: 'Variante oscura o alternativa del traje. Colores invertidos u oscuros.' },
  { value: 'powered-up ultimate form suit',     label: 'Forma Suprema',       description: 'Versión máxima de poder. Energía radiando del traje.' },
  { value: 'armored heavy variant',             label: 'Versión Armada',      description: 'Versión con armadura pesada. Más bulk, más protección, más impresionante.' },
]

export const COSTUME_MATERIALS = [
  { value: 'spandex second-skin skintight',     label: 'Spandex Piel',        description: 'Segunda piel que marca la musculatura. Clásico superhéroe.' },
  { value: 'textured armored plates',           label: 'Armadura Texturizada', description: 'Placas de armadura con textura. Híbrido entre spandex y armor.' },
  { value: 'fabric and metal hybrid',           label: 'Tela + Metal',         description: 'Combinación de tela flexible y metal rígido. Realismo.' },
  { value: 'organic bio-suit living material',  label: 'Bio-Suit Orgánico',   description: 'Material orgánico/vivo. Para simbiontes, aliens, Venom-style.' },
  { value: 'energy construct hard light',       label: 'Energía Pura',         description: 'Traje construido de energía sólida. Para personajes de poder cósmico.' },
]

export const COSTUME_FITS = [
  { value: 'skintight showing full muscle definition', label: 'Skintight', description: 'Marca cada músculo. Proporciones heroicas máximas.' },
  { value: 'loose tactical fit', label: 'Táctico Suelto', description: 'Corte táctico. Práctico, no restricto. Realismo militar.' },
  { value: 'armored bulky silhouette', label: 'Armadura Bulk', description: 'Silueta masiva de armadura. Más grande, más imponente.' },
  { value: 'flowing cape and fabric', label: 'Con Capa', description: 'Capa o tela fluyendo. Movimiento dinámico extra.' },
]

export const PHYSIQUE_OPTIONS = [
  { value: 'slender athletic lean physique',            label: 'Atlético Esbelto',    description: 'Delgado y ágil. Alta velocidad, acrobacias.' },
  { value: 'defined muscular heroic physique',          label: 'Musculoso Heroico',   description: 'Músculo definido sin exceso. El físico superhéroe clásico.' },
  { value: 'bodybuilder extreme muscle mass',           label: 'Culturista Extremo',  description: 'Masa muscular extrema. Para She-Hulk, Power Girl, Juggernaut.' },
  { value: 'realistic proportioned average build',      label: 'Realista Promedio',   description: 'Proporciones reales, sin exageración. Mayor credibilidad fotográfica.' },
  { value: 'exaggerated comic proportions heroic',      label: 'Proporciones Cómic',  description: 'Proporciones de cómic exageradas. Cintura pequeña, hombros anchos, piernas largas.' },
]

// ─── L7 MJ PARAMETERS ─────────────────────────────────────────────────────────

export const ASPECT_RATIOS: Record<string, { label: string; description: string }> = {
  '9:16':  { label: '9:16 — Wallpaper Vertical',   description: 'Formato vertical ideal para wallpaper de móvil. El estándar de esta app.' },
  '16:9':  { label: '16:9 — Widescreen',           description: 'Formato horizontal. Cinemático, widescreen, desktop wallpaper.' },
  '1:1':   { label: '1:1 — Cuadrado',              description: 'Cuadrado. Instagram, redes sociales.' },
  '4:5':   { label: '4:5 — Instagram',             description: 'Ligeramente vertical. Óptimo para Instagram feed.' },
  '3:4':   { label: '3:4 — Retrato',               description: 'Retrato clásico. Cómic book page.' },
  '21:9':  { label: '21:9 — Ultra Wide Cinemático', description: 'Ultra widescreen. Para escenas épicas de cine.' },
}

export const STYLIZE_PRESETS = [
  { value: 15,  label: '15 — Literal',    description: 'Máximo fiel al prompt. Sin interpretación artística propia de MJ.' },
  { value: 50,  label: '50 — Balanceado', description: 'Balance entre tu prompt y el estilo MJ. Recomendado.' },
  { value: 100, label: '100 — Artístico', description: 'MJ empieza a interpretar más. Resultados más dramáticos.' },
  { value: 150, label: '150 — MJ toma control', description: 'Alta interpretación artística. Resultados más creativos.' },
  { value: 250, label: '250 — Máximo',   description: 'MJ domina. Muy artístico, puede desviarse del prompt.' },
]

export const CHAOS_PRESETS = [
  { value: 0,  label: '0 — Consistente',  description: 'Resultados muy consistentes entre sí. Para producción.' },
  { value: 5,  label: '5 — Variación Sutil', description: 'Pequeñas variaciones. Bueno para explorar.' },
  { value: 15, label: '15 — Variación Alta', description: 'Alta variación. Cada imagen es muy diferente.' },
]

export const IMAGE_WEIGHTS = [
  { value: 0.5, label: '0.5 — Prompt domina',      description: 'El prompt escrito tiene más peso que la imagen de referencia.' },
  { value: 1.0, label: '1.0 — Balance',            description: 'Equilibrio entre imagen de referencia y prompt textual.' },
  { value: 2.0, label: '2.0 — Imagen domina',      description: 'La imagen de referencia tiene máximo peso sobre el resultado.' },
]

// ─── NEGATIVE PROMPTS ─────────────────────────────────────────────────────────

export const DEFAULT_NEGATIVE = '--no cartoon, anime style, 3D render, illustration, deformed anatomy, bad hands, extra fingers, blurry face, inconsistent eyes, watermark, text, UI elements, oversaturated colors'

// ─── LAYER META ───────────────────────────────────────────────────────────────

export const LAYER_COLORS: Record<string, string> = {
  L1_CHARACTER:   '#FF6B6B',
  L2_ACTION:      '#FF8C42',
  L3_ENVIRONMENT: '#96CEB4',
  L4_LIGHTING:    '#FFEAA7',
  L5_TECHNICAL:   '#98D8C8',
  L6_COSTUME:     '#DDA0DD',
  L7_PARAMETERS:  '#60a5fa',
  L13_LIGHTING:     '#FDCB6E',
}

export const LAYER_NAMES: Record<string, string> = {
  L1_CHARACTER:   'Personaje(s)',
  L2_ACTION:      'Acción & Pose',
  L3_ENVIRONMENT: 'Entorno',
  L4_LIGHTING:    'Iluminación',
  L5_TECHNICAL:   'Técnica Fotográfica',
  L6_COSTUME:     'Traje & Físico',
  L7_PARAMETERS:  'Parámetros V8.1',
  L8_NEGATIVE:    'Exclusiones',
  L9_POSES:       'Poses Épicas',
  L10_EPIC_MOVES: 'Movimientos Épicos',
  L11_PHYSIQUE:   'Físico Brutal',
  L12_ANIME_DARK: 'Anime Dark Pro',
  L13_LIGHTING:   'Iluminación Avanzada',
}

// ─── PRESETS ──────────────────────────────────────────────────────────────────

export const PRESETS: Record<string, Preset> = {
  wonder_woman_flight: {
    name: 'Wonder Woman — Vuelo Épico',
    description: 'Hovering above Themyscira at dawn',
    category: 'Vuelo',
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
    poseDescription: 'one arm extended summoning lightning',
    emotionalIntensity: 'determined',
    locationKey: 'ancient_ruins',
    environmentElements: ['lightning_storm', 'speed_lines'],
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
  },
  captain_marvel_combat: {
    name: 'Captain Marvel — Combate Espacial',
    description: 'Mid-combat energy blast, Kree armor',
    category: 'Combate',
    engine: 'midjourney_v8_1',
    character1Name: 'Captain Marvel',
    character1Universe: 'Marvel Comics',
    character1FaceRef: 'Brie Larson',
    character1Gender: 'F | adult',
    enableSecondChar: false,
    character2Name: '',
    character2Universe: '',
    character2FaceRef: '',
    actionVerb: 'striking',
    actionDirection: 'toward_camera',
    poseDescription: 'energy blast from fist, explosive impact lighting face',
    emotionalIntensity: 'furious',
    locationKey: 'spaceship_interior',
    environmentElements: ['explosions', 'debris_frozen', 'smoke'],
    scaleKey: 'medium_shot',
    lightSource: 'energy_glow',
    lightQuality: 'strobe_contrast',
    colorPalette: 'warm_cool_split',
    lens: '35mm wide',
    aperture: 'f/2.8 soft depth of field',
    texture: '35mm film grain photorealistic',
    movement: 'motion blur on background',
    costumeStyle: 'powered-up ultimate form suit',
    costumeMaterial: 'spandex second-skin skintight',
    costumefit: 'skintight showing full muscle definition',
    physique: 'defined muscular heroic physique',
    aspectRatio: '9:16',
    stylize: 120,
    chaos: 5,
    useImageRef: false,
    imageWeight: 1.0,
    customNegatives: '',
  },
  scarlet_witch_power: {
    name: 'Scarlet Witch — Campo de Hexes',
    description: 'Standing in hex energy field, reality warping',
    category: 'Poder',
    engine: 'midjourney_v8_1',
    character1Name: 'Scarlet Witch',
    character1Universe: 'Marvel Comics',
    character1FaceRef: 'Elizabeth Olsen',
    character1Gender: 'F | adult',
    enableSecondChar: false,
    character2Name: '',
    character2Universe: '',
    character2FaceRef: '',
    actionVerb: 'floating_meditative',
    actionDirection: 'toward_camera',
    poseDescription: 'hands raised, reality warping around her, red energy tendrils, floating debris circle',
    emotionalIntensity: 'cold and focused',
    locationKey: 'energy_dimension',
    environmentElements: ['energy_portals', 'debris_frozen'],
    scaleKey: 'wide_epic',
    lightSource: 'energy_glow',
    lightQuality: 'volumetric',
    colorPalette: 'dark_desaturated',
    lens: '135mm telephoto',
    aperture: 'f/2.8 soft depth of field',
    texture: 'clean digital 8K resolution',
    movement: 'frozen sharp perfect focus',
    costumeStyle: 'powered-up ultimate form suit',
    costumeMaterial: 'energy construct hard light',
    costumefit: 'flowing cape and fabric',
    physique: 'slender athletic lean physique',
    aspectRatio: '9:16',
    stylize: 150,
    chaos: 0,
    useImageRef: false,
    imageWeight: 1.0,
    customNegatives: '',
  },
  supergirl_powergirlDuo: {
    name: 'Supergirl + Power Girl — Dúo Épico',
    description: 'Flying side by side breaking atmosphere',
    category: 'Multi-Personaje',
    engine: 'midjourney_v8_1',
    character1Name: 'Supergirl',
    character1Universe: 'DC Comics',
    character1FaceRef: 'Melissa Benoist',
    character1Gender: 'F | adult',
    enableSecondChar: true,
    character2Name: 'Power Girl',
    character2Universe: 'DC Comics',
    character2FaceRef: 'original character',
    actionVerb: 'ascending',
    actionDirection: 'upward',
    poseDescription: 'flying side by side, looking at each other with competitive smirk, capes parallel in wind',
    emotionalIntensity: 'triumphant',
    locationKey: 'breaking_atmosphere',
    environmentElements: ['earth_curvature', 'speed_lines', 'shockwave'],
    scaleKey: 'extreme_wide',
    lightSource: 'sun_backlight',
    lightQuality: 'golden_hour',
    colorPalette: 'warm_cool_split',
    lens: '200mm compression',
    aperture: 'f/5.6 balanced depth',
    texture: '35mm film grain photorealistic',
    movement: 'motion blur on background',
    costumeStyle: 'classic comic-accurate suit',
    costumeMaterial: 'spandex second-skin skintight',
    costumefit: 'skintight showing full muscle definition',
    physique: 'defined muscular heroic physique',
    aspectRatio: '9:16',
    stylize: 80,
    chaos: 0,
    useImageRef: false,
    imageWeight: 1.0,
    customNegatives: '',
  },
  she_hulk_transformation: {
    name: 'She-Hulk — Transformación',
    description: 'Mid-transformation, green skin emerging',
    category: 'Poder',
    engine: 'midjourney_v8_1',
    character1Name: 'She-Hulk',
    character1Universe: 'Marvel Comics',
    character1FaceRef: 'Tatiana Maslany',
    character1Gender: 'F | adult',
    enableSecondChar: false,
    character2Name: '',
    character2Universe: '',
    character2FaceRef: '',
    actionVerb: 'transforming',
    actionDirection: 'toward_camera',
    poseDescription: 'powerful stance, torn business suit, green skin emerging, transformation energy glow',
    emotionalIntensity: 'wounded but standing',
    locationKey: 'city_street',
    environmentElements: ['rain', 'lightning_storm'],
    scaleKey: 'medium_shot',
    lightSource: 'neon_ambient',
    lightQuality: 'harsh_noir',
    colorPalette: 'dark_desaturated',
    lens: '50mm standard',
    aperture: 'f/2.8 soft depth of field',
    texture: '35mm film grain photorealistic',
    movement: 'frozen sharp perfect focus',
    costumeStyle: 'battle-damaged worn suit',
    costumeMaterial: 'fabric and metal hybrid',
    costumefit: 'skintight showing full muscle definition',
    physique: 'bodybuilder extreme muscle mass',
    aspectRatio: '9:16',
    stylize: 100,
    chaos: 5,
    useImageRef: false,
    imageWeight: 1.0,
    customNegatives: '',
  },
}

// ─── L9 EPIC POSES ───────────────────────────────────────────────────────────

export const POSE_CATEGORIES = ['Poder', 'Acción', 'Defensa', 'Vuelo', 'Transformación']

export const POSE_EPICAS: Record<string, { label: string; text: string; category: string }> = {
  // Poder
  power_fist_forward:     { label: 'Puño al Frente',      text: 'fist extended forward, power radiating from hand, energy crackling', category: 'Poder' },
  power_arms_spread:      { label: 'Brazos Abiertos',     text: 'arms spread wide, energy aura expanding, dominating the frame', category: 'Poder' },
  power_one_arm_raised:   { label: 'Brazo en Alto',       text: 'one arm raised to the sky, calling lightning, storm responding', category: 'Poder' },
  power_levitating:       { label: 'Levitando',           text: 'levitating cross-legged, energy sphere surrounding, meditation of power', category: 'Poder' },
  // Acción
  action_mid_punch:       { label: 'Golpe Medio',         text: 'mid-punch, fist blurred with speed, impact shockwave visible', category: 'Acción' },
  action_kicking:         { label: 'Patada',              text: 'high kick extended, leg parallel to ground, balance perfect', category: 'Acción' },
  action_dodging:         { label: 'Esquivando',          text: 'leaning back dodging, hair and fabric trailing, bullet time effect', category: 'Acción' },
  action_lunging:         { label: 'Lanzándose',          text: 'lunging forward, body angled, one arm reaching, desperate intensity', category: 'Acción' },
  // Defensa
  defense_shield_up:      { label: 'Escudo Arriba',       text: 'shield raised, defensive stance, protecting someone behind', category: 'Defensa' },
  defense_bracing:        { label: 'Resistiendo',         text: 'bracing against impact, feet planted, ground cracking under force', category: 'Defensa' },
  defense_crouching:      { label: 'Agachado',            text: 'crouched low, ready to spring, coiled energy, protective posture', category: 'Defensa' },
  // Vuelo
  flight_superman:        { label: 'Superman',            text: 'one fist forward, body horizontal, classic Superman flight pose', category: 'Vuelo' },
  flight_diving:          { label: 'Picado',             text: 'diving headfirst, arms at sides, speed lines, terminal velocity', category: 'Vuelo' },
  flight_hovering:        { label: 'Flotando',           text: 'hovering upright, cape billowing, regal and commanding', category: 'Vuelo' },
  // Transformación
  transform_mid:          { label: 'Transformándose',    text: 'mid-transformation, half human half powered, energy tearing through', category: 'Transformación' },
  transform_aura:         { label: 'Aura Desatada',     text: 'aura exploding outward, clothing tearing, power overwhelming', category: 'Transformación' },
}

export const POSE_COMPOSER_OPTIONS = [
  { id: 'weight_shift', label: 'Peso Desplazado', description: 'Peso en una pierna, dinámico asimétrico' },
  { id: 'contrapposto', label: 'Contrapposto', description: 'Contrapposto clásico, cadera desplazada, elegante' },
  { id: 'diagonal_lines', label: 'Líneas Diagonales', description: 'Composición en diagonal, máxima tensión visual' },
  { id: 'triangular', label: 'Forma Triangular', description: 'Base ancha, ápice en cabeza, estable y poderoso' },
  { id: 'spiral', label: 'Espiral', description: 'Movimiento en espiral, energía cinética visible' },
  { id: 'asymmetry', label: 'Asimetría', description: 'Brazos en posiciones diferentes, interés visual' },
]

// ─── L10 EPIC MOVES ──────────────────────────────────────────────────────────

export const EPIC_MOVE_CATEGORIES = ['Ataque', 'Defensa', 'Movimiento', 'Especial']

export const EPIC_MOVES: Record<string, { label: string; text: string; category: string }> = {
  // Ataque
  punch_shockwave:      { label: 'Puño de Onda',       text: 'punch creating shockwave, air compressed, sonic boom visible', category: 'Ataque' },
  kick_whirlwind:       { label: 'Patada Tornado',     text: 'spinning kick generating whirlwind, debris caught in vortex', category: 'Ataque' },
  blast_beam:           { label: 'Rayo de Energía',    text: 'energy beam from hands, blinding intensity, melting everything in path', category: 'Ataque' },
  slash_infinite:       { label: 'Corte Infinito',      text: 'sword slash with infinite follow-through, space tearing', category: 'Ataque' },
  // Defensa
  barrier_ultimate:     { label: 'Barrera Suprema',    text: 'ultimate barrier, dome of light, impenetrable, reflecting attacks', category: 'Defensa' },
  dodge_afterimage:     { label: 'Esquiva Afterimage', text: 'dodging leaving afterimages, multiple copies, speed beyond perception', category: 'Defensa' },
  counter_perfect:      { label: 'Contra Perfecta',    text: 'perfect counter, catching attack and redirecting, minimal movement', category: 'Defensa' },
  // Movimiento
  dash_instant:         { label: 'Dash Instantáneo',   text: 'instant dash, disappearing and reappearing, sonic crack', category: 'Movimiento' },
  fly_supersonic:       { label: 'Vuelo Supersónico',  text: 'supersonic flight, breaking sound barrier, cone of condensation', category: 'Movimiento' },
  teleport_flash:       { label: 'Teletransporte',      text: 'teleporting with flash of light, reappearing behind enemy', category: 'Movimiento' },
  // Especial
  ultimate_awakening:   { label: 'Despertar Ultimate', text: 'ultimate awakening, aura changing color, power multiplying', category: 'Especial' },
  fusion_dance:         { label: 'Fusión',             text: 'fusion pose, symmetrical stance, energy merging', category: 'Especial' },
  transformation_sequence: { label: 'Secuencia Transform', text: 'transformation sequence, stages visible, power building', category: 'Especial' },
}

export const COMBO_SEQUENCES = [
  { id: 'rapid_strikes', name: 'Golpes Rápidos', moves: ['Puño', 'Puño', 'Patada', 'Patada'], effect: 'Combo básico de 4 golpes' },
  { id: 'power_combo', name: 'Combo de Poder', moves: ['Carga', 'Rayo', 'Dash', 'Impacto'], effect: 'Carga energía, dispara, cierra distancia, impacta' },
  { id: 'aerial_assault', name: 'Asalto Aéreo', moves: ['Vuelo', 'Picado', 'Golpe', 'Remate'], effect: 'Ataque aéreo devastador' },
  { id: 'defensive_counter', name: 'Contra Defensiva', moves: ['Bloqueo', 'Esquiva', 'Contra', 'Remate'], effect: 'Defiende, esquiva, contraataca' },
  { id: 'ultimate_finisher', name: 'Finalizador', moves: ['Transform', 'Carga', 'Ataque', 'Impacto'], effect: 'Secuencia de finalización épica' },
]

// ─── L11 PHYSIQUE ───────────────────────────────────────────────────────────

export const MUSCLE_DEFINITION_LEVELS = [
  { value: 'soft_smooth', label: 'Suave', description: 'Piel suave, músculos apenas definidos. Atlético casual.' },
  { value: 'toned_visible', label: 'Tonificado', description: 'Músculos tonificados visibles. Definición leve.' },
  { value: 'defined_cut', label: 'Definido', description: 'Músculos definidos, separación visible. Físico de gimnasio.' },
  { value: 'shredded_veins', label: 'Shredded', description: 'Extremadamente definido, vascularidad visible. Competidor.' },
  { value: 'superhero_extreme', label: 'Superhéroe', description: 'Definición imposible, cada fibra visible. Cómic hecho real.' },
]

export const MUSCLE_GROUP_VISIBILITY = [
  { id: 'abs', label: 'Abdominales', description: 'Six-pack definido, oblicuos marcados' },
  { id: 'pecs', label: 'Pectorales', description: 'Pectorales grandes, separación central' },
  { id: 'biceps', label: 'Bíceps', description: 'Bíceps prominentes, pico definido' },
  { id: 'triceps', label: 'Tríceps', description: 'Tríceps marcados, herradura visible' },
  { id: 'deltoids', label: 'Deltoides', description: 'Hombros redondos, separación frontal/lateral/posterior' },
  { id: 'lats', label: 'Dorsales', description: 'Espalda en V, dorsales anchos' },
  { id: 'quads', label: 'Cuádriceps', description: 'Cuádriceps masivos, lágrima definida' },
  { id: 'calves', label: 'Gemelos', description: 'Gemelos en forma de corazón, definidos' },
  { id: 'glutes', label: 'Glúteos', description: 'Glúteos firmes y redondeados' },
  { id: 'traps', label: 'Trapecios', description: 'Trapecios altos, cuello poderoso' },
]

export const PHYSIQUE_PRESETS = [
  { id: 'athletic_hero', name: 'Héroe Atlético', description: 'Físico atlético equilibrado. No exagerado.', muscles: ['abs', 'pecs', 'biceps', 'quads'] },
  { id: 'bodybuilder_mass', name: 'Culturista Masivo', description: 'Máxima masa muscular. Físico de competición.', muscles: ['abs', 'pecs', 'biceps', 'triceps', 'deltoids', 'lats', 'quads', 'calves', 'glutes', 'traps'] },
  { id: 'lean_fighter', name: 'Luchador Definido', description: 'Delgado pero definido. Velocidad + fuerza.', muscles: ['abs', 'biceps', 'deltoids', 'quads'] },
  { id: 'powerlifter_strong', name: 'Powerlifter', description: 'Fuerza bruta. Masivo pero no definido.', muscles: ['pecs', 'lats', 'quads', 'glutes', 'traps'] },
  { id: 'swimmer_streamlined', name: 'Nadador', description: 'Cuerpo aerodinámico. Hombros anchos, cintura estrecha.', muscles: ['abs', 'lats', 'deltoids', 'quads'] },
  { id: 'gymnast_compact', name: 'Gimnasta', description: 'Compacto y potente. Proporciones perfectas.', muscles: ['abs', 'biceps', 'triceps', 'deltoids', 'quads', 'calves'] },
]

// ─── L12 ANIME DARK ────────────────────────────────────────────────────────

export const ANIME_DARK_STYLES = [
  { id: 'berserk_dark', name: 'Berserk', description: 'Oscuro, grotesco, detallado. Sombras pesadas. Miura style.' },
  { id: 'blame_mega', name: 'BLAME!', description: 'Mega-estructuras, siluetas, escala imposible. Nihei style.' },
  { id: 'evangelion_psycho', name: 'Evangelion', description: 'Psicológico, angustia, surreal. Anno style.' },
  { id: 'devilman_gritty', name: 'Devilman', description: 'Gritty, violencia explícita, transformación grotesca. Nagai style.' },
  { id: 'jojo_dramatic', name: 'JoJo', description: 'Dramático, poses imposibles, líneas de velocidad. Araki style.' },
  { id: 'gundam_mechanical', name: 'Gundam', description: 'Mecánico detallado, realismo robótico. Tomino style.' },
]

export const ANIME_PHYSICS_OPTIONS = [
  { id: 'realistic_gravity', label: 'Gravedad Real', description: 'Física realista. Peso y momentum correctos.' },
  { id: 'anime_float', label: 'Flotación Anime', description: 'Personajes flotan ligeramente. Anti-gravedad sutil.' },
  { id: 'impact_frames', label: 'Impact Frames', description: 'Frames de impacto con flash blanco. Estilo anime clásico.' },
  { id: 'speed_lines', label: 'Líneas de Velocidad', description: 'Líneas de velocidad radiales. Movimiento extremo.' },
  { id: 'deformation', label: 'Deformación', description: 'Deformación de cuerpo en movimiento. Smear frames.' },
  { id: 'particle_trails', label: 'Rastros de Partículas', description: 'Partículas que siguen al personaje. Aura de energía.' },
]

// ─── L13 ADVANCED LIGHTING ─────────────────────────────────────────────────

export const LIGHTING_SCHEMES = [
  { id: 'rembrandt', name: 'Rembrandt', description: 'Luz Rembrandt, triángulo en mejilla, dramático clásico', lights: ['Key 45°', 'Fill suave', 'Rim detrás'] },
  { id: 'split_light', name: 'Split Light', description: 'Mitad cara luz, mitad sombra. Máximo contraste.', lights: ['Key lateral', 'Sin fill'] },
  { id: 'butterfly', name: 'Butterfly', description: 'Luz butterfly, sombra debajo nariz. Glamour clásico.', lights: ['Key arriba', 'Fill abajo'] },
  { id: 'loop', name: 'Loop', description: 'Loop light, sombra nariz conecta mejilla. Natural.', lights: ['Key 30°', 'Fill suave'] },
  { id: 'chiaroscuro', name: 'Chiaroscuro', description: 'Chiaroscuro extremo. Caravaggio style. Oscuro dramático.', lights: ['Key única', 'Negro profundo'] },
  { id: 'three_point', name: 'Three-Point', description: 'Three-point clásico. Key, fill, rim. Iluminación completa.', lights: ['Key', 'Fill', 'Rim'] },
  { id: 'motivated', name: 'Motivated', description: 'Luz motivada por fuente visible. Realismo cinematográfico.', lights: ['Fuente visible', 'Bounce natural'] },
  { id: 'silhouette', name: 'Silhouette', description: 'Silueta pura. Sujeto contra luz. Misterio máximo.', lights: ['Backlight único', 'Sujeto en sombra'] },
]

export const LIGHT_ANIMATION_OPTIONS = [
  { id: 'static', label: 'Estática', description: 'Luz estática. Sin movimiento. Fotografía pura.' },
  { id: 'flicker', label: 'Parpadeo', description: 'Luz parpadeante. Fuego, velas, emergencia.' },
  { id: 'pulse', label: 'Pulso', description: 'Luz pulsante. Respiración, latido, energía.' },
  { id: 'sweep', label: 'Barrido', description: 'Luz barrido. Búsqueda, descubrimiento, revelación.' },
  { id: 'strobe', label: 'Estrobo', description: 'Estrobo. Flash rápido. Acción congelada.' },
  { id: 'crawl', label: 'Crawl', description: 'Luz moviéndose lentamente. Amanecer, atardecer.' },
  { id: 'explosion', label: 'Explosión', description: 'Flash de explosión. Intenso y breve. Impacto.' },
  { id: 'bioluminescent', label: 'Bioluminiscente', description: 'Luz orgánica pulsante. Alien, submarino.' },
]
