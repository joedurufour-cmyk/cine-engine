import { useState } from 'react'
import { Shuffle, RotateCcw, ChevronDown, Film } from 'lucide-react'
import { useCineStore } from '../store/cineStore'
import { ENGINE_LABELS, PRESETS } from '../data/schema'
import type { EngineKey } from '../types'

const ENGINE_KEYS: EngineKey[] = ['midjourney_v8_1', 'niji_6', 'niji_7']

export default function TopBar() {
  const { engine, setEngine, loadPreset, randomize, reset } = useCineStore()
  const [showEngines, setShowEngines] = useState(false)
  const [showPresets, setShowPresets] = useState(false)

  return (
    <header className="flex items-center gap-3 px-4 h-12 bg-gray-900 border-b border-gray-800 flex-shrink-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-1.5 mr-2">
        <Film className="w-4 h-4 text-blue-400" />
        <span className="font-bold text-sm tracking-widest text-white">CINE</span>
        <span className="text-gray-600 text-xs ml-1">Motor Cinemático V8.1</span>
      </div>

      <div className="w-px h-6 bg-gray-700" />

      {/* Engine Selector */}
      <div className="relative">
        <button
          onClick={() => { setShowEngines(!showEngines); setShowPresets(false) }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-sm font-medium text-gray-200 transition-colors"
        >
          <span>{ENGINE_LABELS[engine]}</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
        {showEngines && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setShowEngines(false)} />
            <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-20 min-w-[180px] py-1">
              {ENGINE_KEYS.map(k => (
                <button
                  key={k}
                  onClick={() => { setEngine(k); setShowEngines(false) }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-700 transition-colors ${engine === k ? 'text-blue-400 font-medium' : 'text-gray-300'}`}
                >
                  {ENGINE_LABELS[k]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Presets */}
      <div className="relative">
        <button
          onClick={() => { setShowPresets(!showPresets); setShowEngines(false) }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 hover:text-gray-100 transition-colors"
        >
          Presets
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
        {showPresets && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setShowPresets(false)} />
            <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-20 min-w-[260px] py-1">
              {Object.entries(PRESETS).map(([key, p]) => (
                <button
                  key={key}
                  onClick={() => { loadPreset(key); setShowPresets(false) }}
                  className="w-full text-left px-3 py-2.5 hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-sm font-medium text-gray-200 group-hover:text-white">{p.name}</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400">{p.description}</div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex-1" />

      {/* Actions */}
      <button
        onClick={randomize}
        title="Randomize all layers"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-gray-100 text-sm transition-colors"
      >
        <Shuffle className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Rand</span>
      </button>

      <button
        onClick={reset}
        title="Reset all"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 text-sm transition-colors"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </header>
  )
}
