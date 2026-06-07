import { useCineStore } from '../../store/cineStore'
import { ASPECT_RATIOS, STYLIZE_PRESETS, CHAOS_PRESETS, IMAGE_WEIGHTS } from '../../data/schema'
import type { AspectRatio } from '../../types'

const COLOR = '#60a5fa'

export default function L7Parameters() {
  const {
    aspectRatio, setAspectRatio,
    stylize, setStylize,
    chaos, setChaos,
    useImageRef, setUseImageRef,
    imageWeight, setImageWeight,
  } = useCineStore()

  return (
    <div className="space-y-4">
      {/* Aspect Ratio */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Aspect Ratio (--ar)</p>
        <div className="grid grid-cols-2 gap-1">
          {(Object.entries(ASPECT_RATIOS) as [AspectRatio, { label: string; description: string }][]).map(([key, opt]) => {
            const active = aspectRatio === key
            const isDefault = key === '9:16'
            return (
              <button
                key={key}
                onClick={() => setAspectRatio(key)}
                className={`text-left p-2 rounded border transition-all ${
                  active
                    ? 'border-transparent'
                    : 'bg-gray-800/60 border-gray-700/50 hover:bg-gray-800 hover:border-gray-600'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60` } : {}}
              >
                <div className="flex items-center gap-1">
                  <span
                    className="text-xs font-bold"
                    style={active ? { color: COLOR } : { color: '#d1d5db' }}
                  >
                    {key}
                  </span>
                  {isDefault && (
                    <span className="text-[9px] px-1 py-0 rounded bg-blue-900/50 text-blue-400">default</span>
                  )}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight mt-0.5">{opt.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stylize */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-gray-500">Stylize (--stylize {stylize})</p>
        </div>
        <input
          type="range"
          min={0}
          max={250}
          value={stylize}
          onChange={e => setStylize(parseInt(e.target.value))}
          className="forma-slider mb-2"
          style={{ background: `linear-gradient(to right, ${COLOR} ${(stylize / 250) * 100}%, #374151 ${(stylize / 250) * 100}%)` }}
        />
        <div className="flex gap-1 flex-wrap">
          {STYLIZE_PRESETS.map(sp => {
            const active = stylize === sp.value
            return (
              <button
                key={sp.value}
                onClick={() => setStylize(sp.value)}
                title={sp.description}
                className={`px-2 py-0.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent font-bold'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200'
                }`}
                style={active ? { background: `${COLOR}25`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                {sp.value}
              </button>
            )
          })}
        </div>
        {STYLIZE_PRESETS.find(sp => sp.value === stylize) && (
          <p className="text-[10px] text-gray-500 mt-1.5 leading-tight">
            {STYLIZE_PRESETS.find(sp => sp.value === stylize)?.description}
          </p>
        )}
      </div>

      {/* Chaos */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Chaos (--chaos)</p>
        <div className="flex gap-2">
          {CHAOS_PRESETS.map(cp => {
            const active = chaos === cp.value
            return (
              <button
                key={cp.value}
                onClick={() => setChaos(cp.value)}
                className={`flex-1 py-1.5 rounded text-xs border transition-all ${
                  active
                    ? 'border-transparent font-bold'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200'
                }`}
                style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
              >
                {cp.value}
              </button>
            )
          })}
        </div>
        {CHAOS_PRESETS.find(cp => cp.value === chaos) && (
          <p className="text-[10px] text-gray-500 mt-1.5 leading-tight">
            {CHAOS_PRESETS.find(cp => cp.value === chaos)?.description}
          </p>
        )}
      </div>

      {/* Image Reference Weight */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setUseImageRef(!useImageRef)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${useImageRef ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${useImageRef ? 'translate-x-4' : 'translate-x-0.5'}`} />
          </button>
          <span className="text-xs text-gray-400">Usar imagen de referencia (--iw)</span>
        </div>
        {useImageRef && (
          <div>
            <p className="text-[10px] text-gray-500 mb-1.5">Image Weight: {imageWeight}</p>
            <div className="flex gap-2">
              {IMAGE_WEIGHTS.map(iw => {
                const active = imageWeight === iw.value
                return (
                  <button
                    key={iw.value}
                    onClick={() => setImageWeight(iw.value)}
                    title={iw.description}
                    className={`flex-1 py-1.5 rounded text-xs border transition-all ${
                      active
                        ? 'border-transparent font-bold'
                        : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200'
                    }`}
                    style={active ? { background: `${COLOR}20`, borderColor: `${COLOR}60`, color: COLOR } : {}}
                  >
                    {iw.value}
                  </button>
                )
              })}
            </div>
            {IMAGE_WEIGHTS.find(iw => iw.value === imageWeight) && (
              <p className="text-[10px] text-gray-500 mt-1.5 leading-tight">
                {IMAGE_WEIGHTS.find(iw => iw.value === imageWeight)?.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
