import { useCineStore } from '../../store/cineStore'
import { LIGHTING_SCHEMES, LIGHT_ANIMATION_OPTIONS } from '../../data/schema'

const COLOR = '#FDCB6E'

export default function L13Lighting() {
  const {
    lightingScheme, setLightingScheme,
    lightAnimation, setLightAnimation,
    lightIntensity, setLightIntensity,
    lightColorShift, setLightColorShift,
  } = useCineStore()

  return (
    <div className="space-y-4">
      {/* Lighting Schemes */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Esquema de Iluminación</p>
        <div className="space-y-1">
          {LIGHTING_SCHEMES.map(scheme => {
            const active = lightingScheme === scheme.id
            return (
              <button
                key={scheme.id}
                onClick={() => setLightingScheme(active ? '' : scheme.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{scheme.name}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{scheme.description}</div>
                <div className="text-[10px] text-gray-600 mt-0.5 italic">{scheme.lights.join(' + ')}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Light Animation */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Animación de Luz</p>
        <div className="grid grid-cols-2 gap-1">
          {LIGHT_ANIMATION_OPTIONS.map(anim => {
            const active = lightAnimation === anim.id
            return (
              <button
                key={anim.id}
                onClick={() => setLightAnimation(active ? '' : anim.id)}
                className={`text-left p-2 rounded border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/60 border-gray-700/50 hover:bg-gray-800 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}15`, borderColor: `${COLOR}55` } : {}}
              >
                <div
                  className="text-xs font-semibold leading-tight"
                  style={active ? { color: COLOR } : { color: '#d1d5db' }}
                >
                  {anim.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight mt-0.5">{anim.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Light Intensity */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Intensidad Lumínica</p>
        <div className="flex gap-1">
          {['Sutil', 'Dramática', 'Extrema', 'Sobrenatural'].map(level => {
            const active = lightIntensity === level
            return (
              <button
                key={level}
                onClick={() => setLightIntensity(active ? '' : level)}
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

      {/* Color Shift */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Transición de Color</p>
        <div className="flex flex-wrap gap-1">
          {['Warm→Cool', 'Cool→Warm', 'Monochrome', 'Rainbow', 'Bi-color', 'No shift'].map(shift => {
            const active = lightColorShift === shift
            return (
              <button
                key={shift}
                onClick={() => setLightColorShift(active ? '' : shift)}
                className={`px-2 py-1 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {shift}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
