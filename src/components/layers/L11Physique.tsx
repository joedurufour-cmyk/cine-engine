import { useCineStore } from '../../store/cineStore'
import { MUSCLE_DEFINITION_LEVELS, MUSCLE_GROUP_VISIBILITY, PHYSIQUE_PRESETS } from '../../data/schema'

const COLOR = '#E17055'

export default function L11Physique() {
  const {
    muscleDefinition, setMuscleDefinition,
    muscleGroups, setMuscleGroups,
    physiquePreset, setPhysiquePreset,
    bodyDetail, setBodyDetail,
  } = useCineStore()

  return (
    <div className="space-y-4">
      {/* Muscle Definition Level */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Nivel de Definición Muscular</p>
        <div className="space-y-1">
          {MUSCLE_DEFINITION_LEVELS.map(md => {
            const active = muscleDefinition === md.value
            return (
              <button
                key={md.value}
                onClick={() => setMuscleDefinition(active ? '' : md.value)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{md.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{md.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Muscle Group Visibility */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Grupos Musculares Visibles</p>
        <div className="grid grid-cols-2 gap-1">
          {MUSCLE_GROUP_VISIBILITY.map(mg => {
            const active = muscleGroups.includes(mg.id)
            return (
              <button
                key={mg.id}
                onClick={() => {
                  const has = muscleGroups.includes(mg.id)
                  setMuscleGroups(has ? muscleGroups.filter(x => x !== mg.id) : [...muscleGroups, mg.id])
                }}
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
                  {mg.label}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight mt-0.5">{mg.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Physique Presets */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Presets de Físico</p>
        <div className="space-y-1">
          {PHYSIQUE_PRESETS.map(pp => {
            const active = physiquePreset === pp.id
            return (
              <button
                key={pp.id}
                onClick={() => setPhysiquePreset(active ? '' : pp.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                <div className="font-medium">{pp.name}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{pp.description}</div>
                <div className="text-[10px] text-gray-600 mt-0.5 italic">{pp.muscles.join(', ')}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Body Detail */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Detalle Corporal</p>
        <div className="flex flex-wrap gap-1">
          {['Piel suave', 'Vascularidad visible', 'Sudor', 'Cicatrices', 'Tatuajes', 'Vello'].map(detail => {
            const active = bodyDetail.includes(detail)
            return (
              <button
                key={detail}
                onClick={() => {
                  const has = bodyDetail.includes(detail)
                  setBodyDetail(has ? bodyDetail.filter(x => x !== detail) : [...bodyDetail, detail])
                }}
                className={`px-2 py-1 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {detail}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
