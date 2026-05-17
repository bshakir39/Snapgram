import { motion } from 'framer-motion'
import {
  Aperture,
  Camera as CameraIcon,
  FlipHorizontal,
  Mic,
  Sparkles,
  Timer,
  Users,
  Wand2,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { TopBar } from '../components/TopBar'
import { cx } from '../lib/utils'

const lenses = [
  { id: 'ar', label: 'AR Face', icon: Sparkles },
  { id: 'beauty', label: 'Beauty', icon: Wand2 },
  { id: 'voice', label: 'Voice', icon: Mic },
  { id: 'green', label: 'Green', icon: Aperture },
  { id: 'avatar', label: 'AI Avatar', icon: Users },
  { id: 'timer', label: 'Timer', icon: Timer },
] as const

type Lens = (typeof lenses)[number]['id']

export default function Camera() {
  const [lens, setLens] = useState<Lens>('ar')
  const [flip, setFlip] = useState(false)

  const lensLabel = useMemo(() => lenses.find((l) => l.id === lens)?.label ?? 'Lens', [lens])

  return (
    <div className="pb-24">
      <TopBar title="Camera" right="sparkles" />

      <div className="px-4 pt-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <div className="relative aspect-[9/16] w-full">
            <div
              className={cx(
                'absolute inset-0 bg-gradient-to-br from-fuchsia-500/15 via-cyan-500/10 to-violet-500/15',
                flip && 'scale-x-[-1]',
              )}
            />
            <div className="absolute inset-0">
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[12px] text-white/80">
                {lensLabel}
              </div>
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <button
                  onClick={() => setFlip((v) => !v)}
                  className="rounded-2xl border border-white/10 bg-black/35 p-2 text-white/85 hover:bg-black/50"
                  aria-label="Flip"
                >
                  <FlipHorizontal className="h-5 w-5" />
                </button>
                <button
                  className="rounded-2xl border border-white/10 bg-black/35 p-2 text-white/85 hover:bg-black/50"
                  aria-label="Effects"
                >
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="h-16 w-16 rounded-full border-2 border-white/70 bg-white/15"
                  aria-label="Capture"
                />
              </div>

              <div className="absolute bottom-6 left-5">
                <button className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-[12px] text-white/85 hover:bg-black/50">
                  Send to
                </button>
              </div>
              <div className="absolute bottom-6 right-5">
                <button className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-[12px] text-white/85 hover:bg-black/50">
                  Story
                </button>
              </div>

              <div className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-2 text-[12px] text-white/70">
                <CameraIcon className="h-4 w-4 text-cyan-200" />
                Camera-first experience (mock preview)
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/20 p-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/90">Lenses</div>
              <div className="text-[12px] text-white/50">AR • beauty • AI</div>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {lenses.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLens(l.id)}
                  className={cx(
                    'flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] text-white/75 transition hover:bg-white/10',
                    lens === l.id && 'border-fuchsia-400/40 bg-fuchsia-500/10 text-white',
                  )}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] text-white/80 hover:bg-white/10">
                <Wand2 className="h-4 w-4" />
                Beauty intensity
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] text-white/80 hover:bg-white/10">
                <Mic className="h-4 w-4" />
                Voice changer
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="text-sm font-semibold text-white/90">Safety & privacy (prototype)</div>
          <div className="mt-1 text-[12px] text-white/60">
            In a real SnapGram camera: screenshot alerts, E2E messaging, and media retention policies.
          </div>
        </div>
      </div>
    </div>
  )
}
