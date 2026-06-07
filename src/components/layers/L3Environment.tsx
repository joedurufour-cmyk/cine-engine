import { useState } from 'react'
import { useCineStore } from '../../store/cineStore'
import { LOCATIONS, LOCATION_CATEGORIES, ENVIRONMENT_ELEMENTS, SCALE_OPTIONS } from '../../data/schema'
import type { ScaleKey } from '../../types'

const COLOR = '#96CEB4'

export default function L3Environment() {
  const {
    locationKey, setLocationKey,
    environmentElements, toggleEnvironmentElement,
    scaleKey, setScaleKey,
  } = useCineStore()

  const [activeCategory, setActiveCategory] = useState(LOCATION_CATEGORIES[0])

  const filteredLocations = LOCATIONS.filter(l => l.category === activeCategory)
  const selectedLocation = LOCATIONS.find(l => l.key === locationKey)

  return (
    <div className="space-y-3">
      {/* Location Category Tabs */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Categoría de Entorno</p>
        <div className="flex flex-wrap gap-1">
          {LOCATION_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all border ${
                activeCategory === cat
                  ? 'border-transparent text-gray-900'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200'
              }`}
              style={activeCategory === cat ? { background: COLOR, borderColor: COLOR, color: '#111' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Location Options */}
      <div className="space-y-1">
        {filteredLocations.map(loc => {
          const active = locationKey === loc.key
          return (
            <button
              key={loc.key}
              onClick={() => setLocationKey(loc.key)}
              className={`w-full text-left px-2.5 py-1.5 rounded text-xs border transition-all ${
                active
                  ? 'border-transparent'
                  : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:border-gray-600 hover:text-gray-200'
              }`}
              style={active ? { background: `${COLOR}22`, borderColor: `${COLOR}66` } : {}}
            >
              <div
                className="font-medium leading-tight"
                style={active ? { color: COLOR } : { color: '#d1d5db' }}
              >
                {loc.label}
              </div>
              {active && (
                <div className="text-[10px] mt-0.5 leading-tight" style={{ color: `${COLOR}99` }}>
                  {loc.text}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {selectedLocation && locationKey && (
        <div
          className="p-2 rounded border"
          style={{ background: `${COLOR}08`, borderColor: `${COLOR}30` }}
        >
          <p className="text-[10px] text-gray-400 leading-snug">{selectedLocation.text}</p>
        </div>
      )}

      {/* Environment Elements */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Elementos del Entorno</p>
        <div className="flex flex-wrap gap-1.5">
          {ENVIRONMENT_ELEMENTS.map(el => {
            const active = environmentElements.includes(el.id)
            return (
              <button
                key={el.id}
                onClick={() => toggleEnvironmentElement(el.id)}
                title={el.text}
                className={`px-2.5 py-1 rounded-full text-xs border transition-all ${
                  active
                    ? 'border-transparent text-gray-900 font-semibold'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
                style={active ? { background: COLOR, borderColor: COLOR } : {}}
              >
                {el.label}
              </button>
            )
          })}
        </div>
        {environmentElements.length > 0 && (
          <div className="mt-1.5 space-y-0.5">
            {environmentElements.map(id => {
              const el = ENVIRONMENT_ELEMENTS.find(e => e.id === id)
              if (!el) return null
              return (
                <p key={id} className="text-[10px] text-gray-500 leading-tight">
                  <span style={{ color: COLOR }} className="font-medium">{el.label}:</span> {el.text}
                </p>
              )
            })}
          </div>
        )}
      </div>

      {/* Scale */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Escala del Plano</p>
        <div className="grid grid-cols-2 gap-1">
          {(Object.entries(SCALE_OPTIONS) as [ScaleKey, { label: string; text: string }][]).map(([key, opt]) => {
            const active = scaleKey === key
            return (
              <button
                key={key}
                onClick={() => setScaleKey(key)}
                className={`py-1.5 px-2.5 rounded text-xs border text-left transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/60 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}22`, borderColor: `${COLOR}66` } : {}}
              >
                <div
                  className="font-semibold"
                  style={active ? { color: COLOR } : { color: '#d1d5db' }}
                >
                  {opt.label}
                </div>
                {active && (
                  <div className="text-[10px] mt-0.5 leading-tight" style={{ color: `${COLOR}90` }}>
                    {opt.text}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
