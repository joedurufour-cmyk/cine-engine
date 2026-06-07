import { useCineStore } from '../../store/cineStore'
import { LIGHT_SOURCES, LIGHT_QUALITIES, COLOR_PALETTES } from '../../data/schema'

const COLOR = '#FFEAA7'

export default function L4Lighting() {
  const {
    lightSource, setLightSource,
    lightQuality, setLightQuality,
    colorPalette, setColorPalette,
  } = useCineStore()

  const selectedSource = LIGHT_SOURCES.find(l => l.key === lightSource)
  const selectedQuality = LIGHT_QUALITIES.find(q => q.key === lightQuality)
  const selectedPalette = COLOR_PALETTES.find(p => p.key === colorPalette)

  return (
    <div className="space-y-4">
      {/* Light Source */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Fuente de Luz</p>
        <div className="grid grid-cols-2 gap-1.5">
          {LIGHT_SOURCES.map(ls => {
            const active = lightSource === ls.key
            return (
              <button
                key={ls.key}
                onClick={() => setLightSource(ls.key)}
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
                  {ls.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight line-clamp-2">{ls.effect}</div>
              </button>
            )
          })}
        </div>
        {selectedSource && (
          <div
            className="mt-2 p-2 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-400 leading-snug">{selectedSource.text}</p>
          </div>
        )}
      </div>

      {/* Light Quality */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Calidad de Luz</p>
        <div className="grid grid-cols-2 gap-1.5">
          {LIGHT_QUALITIES.map(lq => {
            const active = lightQuality === lq.key
            return (
              <button
                key={lq.key}
                onClick={() => setLightQuality(lq.key)}
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
                  {lq.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight line-clamp-2">{lq.mood}</div>
              </button>
            )
          })}
        </div>
        {selectedQuality && (
          <div
            className="mt-2 p-2 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-400 leading-snug">{selectedQuality.text}</p>
          </div>
        )}
      </div>

      {/* Color Palette */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Paleta de Color</p>
        <div className="grid grid-cols-2 gap-1.5">
          {COLOR_PALETTES.map(cp => {
            const active = colorPalette === cp.key
            return (
              <button
                key={cp.key}
                onClick={() => setColorPalette(cp.key)}
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
                  {cp.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight line-clamp-2">{cp.vibe}</div>
              </button>
            )
          })}
        </div>
        {selectedPalette && (
          <div
            className="mt-2 p-2 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-400 leading-snug">{selectedPalette.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}
