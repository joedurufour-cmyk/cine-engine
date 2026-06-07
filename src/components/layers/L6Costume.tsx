import { useCineStore } from '../../store/cineStore'
import { COSTUME_STYLES, COSTUME_MATERIALS, COSTUME_FITS, PHYSIQUE_OPTIONS } from '../../data/schema'

const COLOR = '#DDA0DD'

export default function L6Costume() {
  const {
    costumeStyle, setCostumeStyle,
    costumeMaterial, setCostumeMaterial,
    costumefit, setCostumefit,
    physique, setPhysique,
  } = useCineStore()

  return (
    <div className="space-y-4">
      {/* Costume Style */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Estilo de Traje</p>
        <div className="grid grid-cols-2 gap-1.5">
          {COSTUME_STYLES.map(cs => {
            const active = costumeStyle === cs.value
            return (
              <button
                key={cs.value}
                onClick={() => setCostumeStyle(active ? '' : cs.value)}
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
                  {cs.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight">{cs.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Material */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Material</p>
        <div className="space-y-1">
          {COSTUME_MATERIALS.map(cm => {
            const active = costumeMaterial === cm.value
            return (
              <button
                key={cm.value}
                onClick={() => setCostumeMaterial(active ? '' : cm.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{cm.label}</div>
                <div className={`text-[10px] mt-0.5 ${active ? '' : 'text-gray-600'}`}
                  style={active ? { color: `${COLOR}90` } : {}}>
                  {cm.description}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Fit */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Ajuste del Traje</p>
        <div className="grid grid-cols-2 gap-1">
          {COSTUME_FITS.map(cf => {
            const active = costumefit === cf.value
            return (
              <button
                key={cf.value}
                onClick={() => setCostumefit(active ? '' : cf.value)}
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
                  {cf.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight mt-0.5">{cf.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Physique */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Físico del Personaje</p>
        <div className="space-y-1">
          {PHYSIQUE_OPTIONS.map(po => {
            const active = physique === po.value
            return (
              <button
                key={po.value}
                onClick={() => setPhysique(active ? '' : po.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{po.label}</div>
                <div className={`text-[10px] mt-0.5 ${active ? '' : 'text-gray-600'}`}
                  style={active ? { color: `${COLOR}90` } : {}}>
                  {po.description}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
