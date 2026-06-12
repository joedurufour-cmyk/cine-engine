import { useState } from 'react'
import { useCineStore } from '../../store/cineStore'
import { EPIC_MOVES, EPIC_MOVE_CATEGORIES, COMBO_SEQUENCES } from '../../data/schema'

const COLOR = '#FF6348'

export default function L10EpicMoves() {
  const {
    epicMove, setEpicMove,
    epicMoveCategory, setEpicMoveCategory,
    comboSequence, setComboSequence,
    moveIntensity, setMoveIntensity,
  } = useCineStore()

  const [showCombos, setShowCombos] = useState(false)

  // Group moves by category
  const movesByCategory: Record<string, { key: string; label: string; text: string }[]> = {}
  EPIC_MOVE_CATEGORIES.forEach(cat => { movesByCategory[cat] = [] })
  Object.entries(EPIC_MOVES).forEach(([key, data]) => {
    movesByCategory[data.category]?.push({ key, label: data.label, text: data.text })
  })

  return (
    <div className="space-y-3">
      {/* Move Category Filter */}
      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Categoría de Movimiento</p>
        <div className="flex flex-wrap gap-1">
          {EPIC_MOVE_CATEGORIES.map(cat => {
            const active = epicMoveCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setEpicMoveCategory(active ? '' : cat)}
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

      {/* Epic Moves by category */}
      {EPIC_MOVE_CATEGORIES.map(cat => (
        <div key={cat}>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">{cat}</p>
          <div className="grid grid-cols-2 gap-1">
            {movesByCategory[cat]?.map(({ key, label }) => {
              const active = epicMove === key
              return (
                <button
                  key={key}
                  onClick={() => setEpicMove(key)}
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

      {/* Selected move text */}
      {epicMove && (
        <div
          className="px-2.5 py-2 rounded border text-xs"
          style={{ background: `${COLOR}10`, borderColor: `${COLOR}40` }}
        >
          <span style={{ color: COLOR }} className="font-medium">Movimiento: </span>
          <span className="text-gray-300">{EPIC_MOVES[epicMove]?.text}</span>
        </div>
      )}

      {/* Combo Sequences */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-gray-500">Secuencias Combo</p>
          <button
            onClick={() => setShowCombos(s => !s)}
            className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors"
          >
            {showCombos ? 'Cerrar' : 'Ver combos'}
          </button>
        </div>
        {showCombos && (
          <div className="space-y-2 p-2 rounded bg-gray-800/70 border border-gray-700 max-h-48 overflow-y-auto">
            {COMBO_SEQUENCES.map(combo => {
              const active = comboSequence === combo.id
              return (
                <button
                  key={combo.id}
                  onClick={() => setComboSequence(active ? '' : combo.id)}
                  className={`w-full text-left px-2 py-1.5 rounded text-xs border transition-all ${
                    active
                      ? 'border-transparent'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                  style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
                >
                  <div className="font-medium">{combo.name}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{combo.moves.join(' → ')}</div>
                  <div className="text-[10px] text-gray-600 mt-0.5 italic">{combo.effect}</div>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Move Intensity */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Intensidad del Movimiento</p>
        <div className="flex gap-1">
          {['Fluido', 'Poderoso', 'Explosivo', 'Cataclísmico'].map(level => {
            const active = moveIntensity === level
            return (
              <button
                key={level}
                onClick={() => setMoveIntensity(active ? '' : level)}
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
