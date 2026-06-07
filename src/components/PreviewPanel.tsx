import { useState } from 'react'
import { Copy, Check, FileText, ChevronDown, ChevronUp } from 'lucide-react'
import { useCineStore } from '../store/cineStore'
import { buildNegative } from '../core/promptEngine'
import { ENGINE_LABELS } from '../data/schema'

function syntaxHighlight(prompt: string, charName: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let remaining = prompt
  let idx = 0

  if (charName.trim() && remaining.startsWith(charName.trim())) {
    nodes.push(<span key={idx++} className="prompt-subject">{charName.trim()}</span>)
    remaining = remaining.slice(charName.trim().length)
    if (remaining.startsWith(', ') || remaining.startsWith(' ')) {
      const sep = remaining.startsWith(', ') ? ', ' : ' '
      nodes.push(<span key={idx++} className="prompt-other">{sep}</span>)
      remaining = remaining.slice(sep.length)
    }
  }

  const paramMatch = remaining.match(/(--ar\s[\s\S]*)$/)
  if (paramMatch && paramMatch.index !== undefined) {
    const beforeParams = remaining.slice(0, paramMatch.index)
    const params = paramMatch[0]
    nodes.push(<span key={idx++} className="prompt-other">{beforeParams}</span>)
    nodes.push(<span key={idx++} className="prompt-params">{params}</span>)
  } else {
    nodes.push(<span key={idx++} className="prompt-other">{remaining}</span>)
  }

  return nodes
}

export default function PreviewPanel() {
  const state = useCineStore(s => s)
  const { generatedPrompt, engine, character1Name } = state
  const [copied, setCopied] = useState(false)
  const [showNeg, setShowNeg] = useState(false)

  const negative = buildNegative(state)
  const charCount = generatedPrompt.length
  const maxChars = 6000
  const pct = Math.min((charCount / maxChars) * 100, 100)

  async function handleCopy() {
    await navigator.clipboard.writeText(generatedPrompt).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function downloadTxt() {
    const content = `${generatedPrompt}\n\n---\nEngine: ${ENGINE_LABELS[engine]}\nGenerated: ${new Date().toISOString()}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'cine-prompt.txt'; a.click()
    URL.revokeObjectURL(url)
  }

  // Extract the V8.1 params section for highlighting
  const paramStart = generatedPrompt.indexOf('--ar')
  const paramsSection = paramStart >= 0 ? generatedPrompt.slice(paramStart) : ''

  return (
    <div className="flex flex-col flex-1 bg-gray-950 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Live Prompt</h2>
          <span className="px-2 py-0.5 rounded-full bg-gray-800 text-xs text-gray-400">
            {ENGINE_LABELS[engine]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadTxt}
            title="Export TXT"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 text-xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            TXT
          </button>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-all ${
              copied
                ? 'bg-green-700 text-green-100'
                : 'bg-blue-700 hover:bg-blue-600 text-white'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Prompt Display */}
      <div className="flex-1 overflow-y-auto p-5">
        {generatedPrompt ? (
          <div className="space-y-4">
            <div className="font-mono text-sm leading-relaxed break-words">
              {syntaxHighlight(generatedPrompt, character1Name)}
            </div>

            {/* V8.1 Params section */}
            {paramsSection && (
              <div className="mt-4 p-3 rounded-lg bg-blue-950/30 border border-blue-900/40">
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-1.5">V8.1 PARAMS</p>
                <p className="font-mono text-xs text-blue-300 leading-relaxed break-all">{paramsSection}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {state.aspectRatio && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/50 text-blue-300">
                      AR {state.aspectRatio}
                    </span>
                  )}
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/50 text-blue-300">
                    --stylize {state.stylize}
                  </span>
                  {state.chaos > 0 && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/50 text-blue-300">
                      --chaos {state.chaos}
                    </span>
                  )}
                  {state.useImageRef && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/50 text-blue-300">
                      --iw {state.imageWeight}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-gray-500 text-sm">Tu prompt aparecerá aquí en tiempo real</p>
            <p className="text-gray-600 text-xs mt-1">Empieza configurando el personaje en L1</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 border-t border-gray-800 px-5 py-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${pct > 85 ? 'bg-red-500' : pct > 60 ? 'bg-yellow-500' : 'bg-blue-500'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className={`text-xs tabular-nums ${pct > 85 ? 'text-red-400' : 'text-gray-500'}`}>
            {charCount} / {maxChars}
          </span>
        </div>

        <button
          onClick={() => setShowNeg(!showNeg)}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          {showNeg ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          <span>Negative Prompts</span>
        </button>
        {showNeg && (
          <div className="mt-2 p-3 rounded bg-gray-900 border border-gray-800">
            <p className="text-xs font-mono text-red-400/80 leading-relaxed break-words">{negative}</p>
          </div>
        )}
      </div>
    </div>
  )
}
