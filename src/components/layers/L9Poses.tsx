import { useState } from 'react'
import { useCineStore } from '../../store/cineStore'
import { POSE_EPICAS, POSE_CATEGORIES, POSE_COMPOSER_OPTIONS } from '../../data/schema'

const COLOR = '#FF4757'

export default function L9Poses() {
  const {
    poseEpic, setPoseEpic,
    poseCategory, setPoseCategory,
    poseComposer, setPoseComposer,
    poseIntensity, setPoseIntensity,
  } = useCineStore()

  const [showComposer, setShowComposer] = useState(false)

  // Group poses by category
  const posesByCategory: Record<string, { key: string; label: string; text: string }[]> = {}
  POSE_CATEGORIES.forEach(cat => { posesByCategory[cat] = [] })
  Object.entries(POSE_EPICAS).forEach(([key, data]) => {
    posesByCategory[data.category]?.push({ key, label: data.label, text: data.text })
  })

  return (
    <div className="space-y-3">
      {/* Pose Category Filter */}
      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Categoría de Pose</p>
        <div className="flex flex-wrap gap-1">
          {POSE_CATEGORIES.map(cat => {
            const active = poseCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setPoseCategory(active ? '' : cat)}
                className={`px-2 py-1 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Epic Poses by category */}
      {POSE_CATEGORIES.map(cat => (
        <div key={cat}>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">{cat}</p>
          <div className="grid grid-cols-2 gap-1">
            {posesByCategory[cat]?.map(({ key, label }) => {
              const active = poseEpic === key
              return (
                <button
                  key={key}
                  onClick={() => setPoseEpic(key)}
                  className={`py-1.5 px-2 rounded text-xs font-medium text-center transition-all border ${
                    active
                      ? 'border-transparent text-gray-900'
                      : 'bg-gray-800/60 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 hover:border-gray-600'
                  }`}
                  style={active ? { background: COLOR, borderColor: COLOR } : {}}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {/* Selected pose text */}
      {poseEpic && (
        <div
          className="px-2.5 py-2 rounded border text-xs"
          style={{ background: `${COLOR}10`, borderColor: `${COLOR}40` }}
        >
          <span style={{ color: COLOR }} className="font-medium">Pose: </span>
          <span className="text-gray-300">{POSE_EPICAS[poseEpic]?.text}</span>
        </div>
      )}

      {/* Pose Composer */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-gray-500">Composición de Pose</p>
          <button
            onClick={() => setShowComposer(s => !s)}
            className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors"
          >
            {showComposer ? 'Cerrar' : 'Abrir'}
          </button>
        </div>
        {showComposer && (
          <div className="space-y-2 p-2 rounded bg-gray-800/70 border border-gray-700">
            {POSE_COMPOSER_OPTIONS.map(opt => {
              const active = poseComposer.includes(opt.id)
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    const has = poseComposer.includes(opt.id)
                    setPoseComposer(has ? poseComposer.filter(x => x !== opt.id) : [...poseComposer, opt.id])
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded text-xs border transition-all ${
                    active
                      ? 'border-transparent'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                  style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
                >
                  <div className="font-medium">{opt.label}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{opt.description}</div>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Pose Intensity */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Intensidad de Pose</p>
        <div className="flex gap-1">
          {['Sutil', 'Heroica', 'Épica', 'Legendaria'].map(level => {
            const active = poseIntensity === level
            return (
              <button
                key={level}
                onClick={() => setPoseIntensity(active ? '' : level)}
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
    </div>
  )
}
