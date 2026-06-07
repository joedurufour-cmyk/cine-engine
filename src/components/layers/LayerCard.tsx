import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
  layerId: string
  layerNum: number
  name: string
  color: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

export default function LayerCard({ layerNum, name, color, isOpen, onToggle, children }: Props) {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-800/60 transition-colors text-left group"
      >
        <div
          className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-gray-900"
          style={{ background: color }}
        >
          {layerNum}
        </div>
        <span className="flex-1 text-xs font-semibold text-gray-300 group-hover:text-gray-100 tracking-wide uppercase">
          {name}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-3 pb-3 pt-1">
          {children}
        </div>
      )}
    </div>
  )
}
