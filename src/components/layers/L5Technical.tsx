import { useCineStore } from '../../store/cineStore'
import { LENS_OPTIONS, APERTURE_OPTIONS, TEXTURE_OPTIONS, MOVEMENT_OPTIONS } from '../../data/schema'

const COLOR = '#98D8C8'

export default function L5Technical() {
  const {
    lens, setLens,
    aperture, setAperture,
    texture, setTexture,
    movement, setMovement,
  } = useCineStore()

  const selectedLens = LENS_OPTIONS.find(l => l.value === lens)
  const selectedAperture = APERTURE_OPTIONS.find(a => a.value === aperture)
  const selectedTexture = TEXTURE_OPTIONS.find(t => t.value === texture)
  const selectedMovement = MOVEMENT_OPTIONS.find(m => m.value === movement)

  return (
    <div className="space-y-4">
      {/* Lens */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Lente</p>
        <div className="space-y-1">
          {LENS_OPTIONS.map(l => {
            const active = lens === l.value
            return (
              <button
                key={l.value}
                onClick={() => setLens(active ? '' : l.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{l.label}</div>
              </button>
            )
          })}
        </div>
        {selectedLens && (
          <div
            className="mt-2 p-2.5 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] font-bold mb-1" style={{ color: COLOR }}>{selectedLens.label} ({selectedLens.mm})</p>
            <p className="text-[10px] text-gray-300 leading-snug">{selectedLens.effect}</p>
          </div>
        )}
      </div>

      {/* Aperture */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Apertura</p>
        <div className="space-y-1">
          {APERTURE_OPTIONS.map(a => {
            const active = aperture === a.value
            return (
              <button
                key={a.value}
                onClick={() => setAperture(active ? '' : a.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{a.label}</div>
              </button>
            )
          })}
        </div>
        {selectedAperture && (
          <div
            className="mt-2 p-2 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-300 leading-snug">{selectedAperture.effect}</p>
          </div>
        )}
      </div>

      {/* Texture */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Textura / Calidad</p>
        <div className="space-y-1">
          {TEXTURE_OPTIONS.map(t => {
            const active = texture === t.value
            return (
              <button
                key={t.value}
                onClick={() => setTexture(active ? '' : t.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{t.label}</div>
              </button>
            )
          })}
        </div>
        {selectedTexture && (
          <div
            className="mt-2 p-2 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-300 leading-snug">{selectedTexture.effect}</p>
          </div>
        )}
      </div>

      {/* Movement */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Movimiento / Exposición</p>
        <div className="space-y-1">
          {MOVEMENT_OPTIONS.map(m => {
            const active = movement === m.value
            return (
              <button
                key={m.value}
                onClick={() => setMovement(active ? '' : m.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{m.label}</div>
              </button>
            )
          })}
        </div>
        {selectedMovement && (
          <div
            className="mt-2 p-2 rounded border"
            style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-300 leading-snug">{selectedMovement.effect}</p>
          </div>
        )}
      </div>
    </div>
  )
}
