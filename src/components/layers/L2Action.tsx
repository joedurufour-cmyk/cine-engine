import { useState } from 'react'
import { useCineStore } from '../../store/cineStore'
import { ACTION_VERBS, ACTION_CATEGORIES, DIRECTIONS, DIRECTION_LABELS, EMOTIONAL_INTENSITIES, POSE_SUGGESTIONS } from '../../data/schema'
import type { ActionVerb, DirectionKey } from '../../types'

const COLOR = '#FF8C42'

export default function L2Action() {
  const {
    actionVerb, setActionVerb,
    actionDirection, setActionDirection,
    poseDescription, setPoseDescription,
    emotionalIntensity, setEmotionalIntensity,
  } = useCineStore()

  const [showSuggestions, setShowSuggestions] = useState(false)

  // Group verbs by category
  const verbsByCategory: Record<string, { key: string; label: string }[]> = {}
  ACTION_CATEGORIES.forEach(cat => { verbsByCategory[cat] = [] })
  Object.entries(ACTION_VERBS).forEach(([key, data]) => {
    verbsByCategory[data.category]?.push({ key, label: data.label })
  })

  return (
    <div className="space-y-3">
      {/* Action Verb — by category */}
      {ACTION_CATEGORIES.map(cat => (
        <div key={cat}>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">{cat}</p>
          <div className="grid grid-cols-3 gap-1">
            {verbsByCategory[cat]?.map(({ key, label }) => {
              const active = actionVerb === key
              return (
                <button
                  key={key}
                  onClick={() => setActionVerb(key as ActionVerb)}
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

      {/* Action description display */}
      {actionVerb && (
        <div
          className="px-2.5 py-2 rounded border text-xs"
          style={{ background: `${COLOR}10`, borderColor: `${COLOR}40` }}
        >
          <span style={{ color: COLOR }} className="font-medium">Texto generado: </span>
          <span className="text-gray-300">{ACTION_VERBS[actionVerb]?.text}</span>
        </div>
      )}

      {/* Direction */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Dirección</p>
        <div className="grid grid-cols-2 gap-1">
          {(Object.keys(DIRECTION_LABELS) as DirectionKey[]).map(dir => {
            const active = actionDirection === dir
            return (
              <button
                key={dir}
                onClick={() => setActionDirection(dir)}
                className={`py-1.5 px-2 rounded text-xs transition-all border text-left ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800/60 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {DIRECTION_LABELS[dir]}
              </button>
            )
          })}
        </div>
        {actionDirection && (
          <p className="text-[10px] text-gray-500 mt-1 italic leading-tight">
            {DIRECTIONS[actionDirection]}
          </p>
        )}
      </div>

      {/* Pose Description */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-gray-500">Descripción de Pose</p>
          <button
            onClick={() => setShowSuggestions(s => !s)}
            className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors"
          >
            Sugerencias
          </button>
        </div>
        {showSuggestions && (
          <div className="mb-2 p-2 rounded bg-gray-800/70 border border-gray-700 max-h-36 overflow-y-auto">
            {POSE_SUGGESTIONS.map(sug => (
              <button
                key={sug}
                onClick={() => { setPoseDescription(sug); setShowSuggestions(false) }}
                className="block w-full text-left text-xs text-gray-400 hover:text-gray-200 py-1 px-1.5 hover:bg-gray-700 rounded transition-colors"
              >
                {sug}
              </button>
            ))}
          </div>
        )}
        <textarea
          value={poseDescription}
          onChange={e => setPoseDescription(e.target.value)}
          placeholder="Describe la pose específica… ej: fists forward Superman pose"
          maxLength={200}
          rows={2}
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 placeholder-gray-600 resize-none focus:outline-none focus:border-blue-500 transition-colors select-text"
          style={{ userSelect: 'text' }}
        />
      </div>

      {/* Emotional Intensity */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Intensidad Emocional</p>
        <div className="flex flex-wrap gap-1">
          {EMOTIONAL_INTENSITIES.map(ei => {
            const active = emotionalIntensity === ei
            return (
              <button
                key={ei}
                onClick={() => setEmotionalIntensity(active ? '' : ei)}
                className={`px-2 py-1 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent text-gray-900 font-medium'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {ei}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
