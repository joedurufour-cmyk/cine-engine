import { useCineStore } from '../../store/cineStore'
import { ANIME_DARK_STYLES, ANIME_PHYSICS_OPTIONS } from '../../data/schema'

const COLOR = '#A29BFE'

export default function L12AnimeDark() {
  const {
    animeDarkStyle, setAnimeDarkStyle,
    animePhysics, setAnimePhysics,
    animeIntensity, setAnimeIntensity,
    animeEffects, setAnimeEffects,
  } = useCineStore()

  return (
    <div className="space-y-4">
      {/* Anime Dark Style */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Estilo Anime Dark</p>
        <div className="grid grid-cols-2 gap-1.5">
          {ANIME_DARK_STYLES.map(style => {
            const active = animeDarkStyle === style.id
            return (
              <button
                key={style.id}
                onClick={() => setAnimeDarkStyle(active ? '' : style.id)}
                className={`text-left p-2 rounded border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/60 border-gray-700/50 hover:bg-gray-800 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}15`, borderColor: `${COLOR}55` } : {}}
              >
                <div
                  className="text-xs font-semibold mb-0.5 leading-tight"
                  style={active ? { color: COLOR } : { color: '#d1d5db' }}
                >
                  {style.name}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight">{style.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Anime Physics */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Física Anime</p>
        <div className="space-y-1">
          {ANIME_PHYSICS_OPTIONS.map(phys => {
            const active = animePhysics === phys.id
            return (
              <button
                key={phys.id}
                onClick={() => setAnimePhysics(active ? '' : phys.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{phys.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{phys.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Anime Intensity */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Intensidad Anime</p>
        <div className="flex gap-1">
          {['Shonen', 'Seinen', 'Dark Fantasy', 'Psychological'].map(level => {
            const active = animeIntensity === level
            return (
              <button
                key={level}
                onClick={() => setAnimeIntensity(active ? '' : level)}
                className={`flex-1 py-1.5 px-2 rounded text-xs text-center transition-all border ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800/60 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {level}
              </button>
            )
          })}
        </div>
      </div>

      {/* Anime Effects */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Efectos Anime</p>
        <div className="flex flex-wrap gap-1">
          {['Speed lines', 'Impact frames', 'Halos', 'Aura particles', 'Screen tone', 'Chromatic aberration'].map(effect => {
            const active = animeEffects.includes(effect)
            return (
              <button
                key={effect}
                onClick={() => {
                  const has = animeEffects.includes(effect)
                  setAnimeEffects(has ? animeEffects.filter(x => x !== effect) : [...animeEffects, effect])
                }}
                className={`px-2 py-1 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {effect}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
