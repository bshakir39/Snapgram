import { motion } from 'framer-motion'
import { Hash, Sparkles, Wand2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { cx } from '../lib/utils'

const presets = [
  { id: 'caption', label: 'Caption', icon: Sparkles },
  { id: 'hashtags', label: 'Hashtags', icon: Hash },
  { id: 'enhance', label: 'Enhance', icon: Wand2 },
] as const

type Mode = (typeof presets)[number]['id']

function makeCaption(seed: string) {
  const ideas = [
    `Neon hours, soft focus — ${seed}.`,
    `POV: you paused time for 8 seconds. ${seed}`,
    `If this was a film still, what would you call it? ${seed}`,
    `Low light, high mood. ${seed}`,
  ]
  return ideas[Math.floor(Math.random() * ideas.length)]
}

function makeHashtags(seed: string) {
  const base = ['#snapgram', '#foryou', '#aesthetic', '#reels', '#nightmode', '#portrait']
  const extra = seed
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => `#${w.replace(/[^a-z0-9]/g, '')}`)
  const set = Array.from(new Set([...base, ...extra])).slice(0, 10)
  return set.join(' ')
}

function makeEnhance(seed: string) {
  const tips = [
    'Auto-tone: +8 • Clarity: +10 • Highlights: -12',
    'Skin smoothing: subtle • Sharpen: +6 • Grain: +3',
    'Cinematic: contrast +12 • shadows -6 • teal/orange split',
    'Night boost: exposure +0.2 • denoise +15 • vibrance +8',
  ]
  return `${seed}\n\nSuggested edit:\n${tips[Math.floor(Math.random() * tips.length)]}`
}

export function AIStudioSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>('caption')
  const [seed, setSeed] = useState('City lights & motion blur')

  const output = useMemo(() => {
    if (mode === 'caption') return makeCaption(seed)
    if (mode === 'hashtags') return makeHashtags(seed)
    return makeEnhance(seed)
  }, [mode, seed])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="absolute inset-0 bg-black/60"
        aria-label="Close"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[440px] rounded-t-3xl border border-white/10 bg-[#0B1020] p-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white/90">AI Studio</div>
            <div className="text-[12px] text-white/50">Quick creativity tools (mock)</div>
          </div>
          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] text-white/80 hover:bg-white/10"
          >
            Done
          </button>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => setMode(p.id)}
              className={cx(
                'flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] text-white/80 transition hover:bg-white/10',
                mode === p.id && 'border-cyan-400/40 bg-cyan-500/10 text-white',
              )}
            >
              <p.icon className="h-4 w-4" />
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-3">
          <label className="text-[12px] text-white/60">Prompt</label>
          <input
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
            placeholder="Describe your content..."
          />
        </div>

        <div className="mt-3">
          <label className="text-[12px] text-white/60">Output</label>
          <div className="mt-2 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-3 text-sm text-white/85">
            {output}
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10 p-3">
          <div className="text-[12px] text-white/70">
            Tip: In a real app, this would call OpenAI APIs and store drafts per post.
          </div>
        </div>
      </motion.div>
    </div>
  )
}
