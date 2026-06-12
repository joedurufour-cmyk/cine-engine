import { useCineStore } from '../store/cineStore'
import { LAYER_COLORS, LAYER_NAMES } from '../data/schema'
import LayerCard from './layers/LayerCard'
import L1Character from './layers/L1Character'
import L2Action from './layers/L2Action'
import L3Environment from './layers/L3Environment'
import L4Lighting from './layers/L4Lighting'
import L5Technical from './layers/L5Technical'
import L6Costume from './layers/L6Costume'
import L7Parameters from './layers/L7Parameters'
import L8Negative from './layers/L8Negative'

import L9Poses from './layers/L9Poses'
import L10EpicMoves from './layers/L10EpicMoves'
import L11Physique from './layers/L11Physique'
import L12AnimeDark from './layers/L12AnimeDark'
import L13Lighting from './layers/L13Lighting'

const LAYERS = [
  { id: 'L1_CHARACTER',   number: 1, Component: L1Character },
  { id: 'L2_ACTION',      number: 2, Component: L2Action },
  { id: 'L3_ENVIRONMENT', number: 3, Component: L3Environment },
  { id: 'L4_LIGHTING',    number: 4, Component: L4Lighting },
  { id: 'L5_TECHNICAL',   number: 5, Component: L5Technical },
  { id: 'L6_COSTUME',     number: 6, Component: L6Costume },
  { id: 'L7_PARAMETERS',  number: 7, Component: L7Parameters },
  { id: 'L8_NEGATIVE',    number: 8, Component: L8Negative },
  { id: 'L9_POSES',       number: 9, Component: L9Poses },
  { id: 'L10_EPIC_MOVES', number: 10, Component: L10EpicMoves },
  { id: 'L11_PHYSIQUE',   number: 11, Component: L11Physique },
  { id: 'L12_ANIME_DARK', number: 12, Component: L12AnimeDark },
  { id: 'L13_LIGHTING',   number: 13, Component: L13Lighting },
]

export default function Sidebar() {
  const { openLayers, toggleLayer } = useCineStore()

  return (
    <aside className="w-[340px] min-w-[300px] max-w-[380px] flex flex-col bg-gray-900 border-r border-gray-800 overflow-y-auto flex-shrink-0">
      {LAYERS.map(({ id, number, Component }) => (
        <LayerCard
          key={id}
          layerId={id}
          layerNum={number}
          name={LAYER_NAMES[id]}
          color={LAYER_COLORS[id]}
          isOpen={openLayers.includes(id)}
          onToggle={() => toggleLayer(id)}
        >
          <Component />
        </LayerCard>
      ))}
      <div className="flex-1 min-h-4" />
    </aside>
  )
}
