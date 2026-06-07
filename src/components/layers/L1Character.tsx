import { useState } from 'react'
import { useCineStore } from '../../store/cineStore'

const COLOR = '#FF6B6B'

const QUICK_FILL_HEROES = [
  { name: 'Wonder Woman', universe: 'DC Comics', faceRef: 'Gal Gadot', gender: 'F | adult' },
  { name: 'Captain Marvel', universe: 'Marvel Comics', faceRef: 'Brie Larson', gender: 'F | adult' },
  { name: 'Supergirl', universe: 'DC Comics', faceRef: 'Melissa Benoist', gender: 'F | adult' },
  { name: 'Scarlet Witch', universe: 'Marvel Comics', faceRef: 'Elizabeth Olsen', gender: 'F | adult' },
  { name: 'Black Widow', universe: 'Marvel Comics', faceRef: 'Scarlett Johansson', gender: 'F | adult' },
  { name: 'She-Hulk', universe: 'Marvel Comics', faceRef: 'Tatiana Maslany', gender: 'F | adult' },
  { name: 'Power Girl', universe: 'DC Comics', faceRef: 'original character', gender: 'F | adult' },
  { name: 'Storm', universe: 'Marvel Comics', faceRef: 'Halle Berry', gender: 'F | adult' },
  { name: 'Batman', universe: 'DC Comics', faceRef: 'original character', gender: 'M | adult' },
  { name: 'Superman', universe: 'DC Comics', faceRef: 'original character', gender: 'M | adult' },
  { name: 'Spider-Man', universe: 'Marvel Comics', faceRef: 'original character', gender: 'M | adult' },
  { name: 'Thor', universe: 'Marvel Comics', faceRef: 'Chris Hemsworth', gender: 'M | adult' },
]

const GENDER_OPTIONS = ['F | adult', 'M | adult', 'F | teen', 'M | teen', 'androgynous']

export default function L1Character() {
  const {
    character1Name, setCharacter1Name,
    character1Universe, setCharacter1Universe,
    character1FaceRef, setCharacter1FaceRef,
    character1Gender, setCharacter1Gender,
    enableSecondChar, setEnableSecondChar,
    character2Name, setCharacter2Name,
    character2Universe, setCharacter2Universe,
    character2FaceRef, setCharacter2FaceRef,
  } = useCineStore()

  const [showQuickFill, setShowQuickFill] = useState(false)
  const [quickFillTarget, setQuickFillTarget] = useState<1 | 2>(1)

  function applyQuickFill(hero: typeof QUICK_FILL_HEROES[0], target: 1 | 2) {
    if (target === 1) {
      setCharacter1Name(hero.name)
      setCharacter1Universe(hero.universe)
      setCharacter1FaceRef(hero.faceRef)
      setCharacter1Gender(hero.gender)
    } else {
      setCharacter2Name(hero.name)
      setCharacter2Universe(hero.universe)
      setCharacter2FaceRef(hero.faceRef)
    }
    setShowQuickFill(false)
  }

  return (
    <div className="space-y-4">
      {/* Character 1 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Personaje 1</p>
          <button
            onClick={() => { setQuickFillTarget(1); setShowQuickFill(s => !s) }}
            className="text-[10px] px-2 py-0.5 rounded border border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-colors"
          >
            Quick fill
          </button>
        </div>

        {showQuickFill && quickFillTarget === 1 && (
          <div className="grid grid-cols-2 gap-1 p-2 rounded bg-gray-800/70 border border-gray-700">
            {QUICK_FILL_HEROES.map(hero => (
              <button
                key={hero.name}
                onClick={() => applyQuickFill(hero, 1)}
                className="text-left px-2 py-1.5 rounded text-xs hover:bg-gray-700 transition-colors"
                style={{ color: character1Name === hero.name ? COLOR : '#9ca3af' }}
              >
                <div className="font-medium">{hero.name}</div>
                <div className="text-[10px] text-gray-600">{hero.universe}</div>
              </button>
            ))}
          </div>
        )}

        <div className="space-y-1.5">
          <input
            type="text"
            value={character1Name}
            onChange={e => setCharacter1Name(e.target.value)}
            placeholder="Nombre del personaje… ej: Wonder Woman"
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors select-text"
            style={{ userSelect: 'text' }}
          />
          <input
            type="text"
            value={character1Universe}
            onChange={e => setCharacter1Universe(e.target.value)}
            placeholder="Universo… ej: DC Comics, Marvel, Original"
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors select-text"
            style={{ userSelect: 'text' }}
          />
          <input
            type="text"
            value={character1FaceRef}
            onChange={e => setCharacter1FaceRef(e.target.value)}
            placeholder="Referencia facial… ej: Gal Gadot, original character"
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors select-text"
            style={{ userSelect: 'text' }}
          />
        </div>

        {/* Gender selector */}
        <div>
          <p className="text-[10px] text-gray-500 mb-1">Género / Edad</p>
          <div className="flex flex-wrap gap-1">
            {GENDER_OPTIONS.map(g => {
              const active = character1Gender === g
              return (
                <button
                  key={g}
                  onClick={() => setCharacter1Gender(active ? '' : g)}
                  className={`px-2 py-0.5 rounded text-xs border transition-all ${
                    active ? 'border-transparent font-medium text-gray-900' : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-gray-200'
                  }`}
                  style={active ? { background: COLOR, borderColor: COLOR } : {}}
                >
                  {g}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Toggle second character */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setEnableSecondChar(!enableSecondChar)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${enableSecondChar ? 'bg-blue-600' : 'bg-gray-700'}`}
        >
          <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${enableSecondChar ? 'translate-x-4' : 'translate-x-0.5'}`} />
        </button>
        <span className="text-xs text-gray-400">Segundo personaje (escena multi-héroe)</span>
      </div>

      {/* Character 2 */}
      {enableSecondChar && (
        <div className="space-y-2 pl-3 border-l-2 border-blue-900/50">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Personaje 2</p>
            <button
              onClick={() => { setQuickFillTarget(2); setShowQuickFill(s => !s) }}
              className="text-[10px] px-2 py-0.5 rounded border border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-colors"
            >
              Quick fill
            </button>
          </div>

          {showQuickFill && quickFillTarget === 2 && (
            <div className="grid grid-cols-2 gap-1 p-2 rounded bg-gray-800/70 border border-gray-700">
              {QUICK_FILL_HEROES.map(hero => (
                <button
                  key={hero.name}
                  onClick={() => applyQuickFill(hero, 2)}
                  className="text-left px-2 py-1.5 rounded text-xs hover:bg-gray-700 transition-colors"
                  style={{ color: character2Name === hero.name ? '#60a5fa' : '#9ca3af' }}
                >
                  <div className="font-medium">{hero.name}</div>
                  <div className="text-[10px] text-gray-600">{hero.universe}</div>
                </button>
              ))}
            </div>
          )}

          <div className="space-y-1.5">
            <input
              type="text"
              value={character2Name}
              onChange={e => setCharacter2Name(e.target.value)}
              placeholder="Nombre del segundo personaje…"
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors select-text"
              style={{ userSelect: 'text' }}
            />
            <input
              type="text"
              value={character2Universe}
              onChange={e => setCharacter2Universe(e.target.value)}
              placeholder="Universo del segundo…"
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors select-text"
              style={{ userSelect: 'text' }}
            />
            <input
              type="text"
              value={character2FaceRef}
              onChange={e => setCharacter2FaceRef(e.target.value)}
              placeholder="Referencia facial… ej: original character"
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors select-text"
              style={{ userSelect: 'text' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
