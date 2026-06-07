import { useCineStore } from '../../store/cineStore'
import { DEFAULT_NEGATIVE } from '../../data/schema'

const COLOR = '#6b7280'

export default function L8Negative() {
  const { customNegatives, setCustomNegatives } = useCineStore()

  // Remove the --no prefix for display
  const displayNegative = DEFAULT_NEGATIVE.replace('--no ', '')

  return (
    <div className="space-y-3">
      {/* Default Negatives — Read Only */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-gray-500">Negativos Base (siempre incluidos)</p>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-500">Read Only</span>
        </div>
        <div
          className="p-3 rounded border"
          style={{ background: `${COLOR}10`, borderColor: `${COLOR}30` }}
        >
          <p className="text-[10px] font-mono text-red-400/70 leading-relaxed break-words">
            {displayNegative}
          </p>
        </div>
        <p className="text-[10px] text-gray-600 mt-1">
          Estos negativos se añaden automáticamente al final del prompt (--no flag).
        </p>
      </div>

      {/* Custom Negatives */}
      <div>
        <p className="text-xs text-gray-500 mb-1.5">Negativos Adicionales (tuyos)</p>
        <textarea
          value={customNegatives}
          onChange={e => setCustomNegatives(e.target.value)}
          placeholder="Añade tus propios elementos a excluir… ej: wings, mask, glasses"
          maxLength={300}
          rows={3}
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 placeholder-gray-600 resize-none focus:outline-none focus:border-gray-500 transition-colors select-text"
          style={{ userSelect: 'text' }}
        />
        {customNegatives && (
          <div
            className="mt-1.5 p-2 rounded border"
            style={{ background: `${COLOR}10`, borderColor: `${COLOR}30` }}
          >
            <p className="text-[10px] text-gray-400 leading-snug">
              Se añadirá: <span className="font-mono text-red-400/80">, {customNegatives}</span>
            </p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2 rounded bg-gray-800/40 border border-gray-700/40">
        <p className="text-[10px] text-gray-500 leading-snug">
          Los negativos controlan qué evita generar Midjourney. El bloque completo va al final del prompt con el flag <span className="font-mono text-gray-400">--no</span>.
        </p>
      </div>
    </div>
  )
}
