import { motion } from 'framer-motion'
import { Compass, Flame, Scissors, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { TopBar } from '../components/TopBar'
import { feedPosts } from '../lib/mockData'
import { cx } from '../lib/utils'

const tabs = [
  { id: 'spotlight', label: 'Spotlight', icon: Flame },
  { id: 'discover', label: 'Discover', icon: Compass },
  { id: 'remix', label: 'Remix', icon: Scissors },
] as const

type Tab = (typeof tabs)[number]['id']

export default function Reels() {
  const [tab, setTab] = useState<Tab>('spotlight')

  const reels = useMemo(() => feedPosts.filter((p) => p.mediaType === 'reel'), [])

  return (
    <div className="pb-24">
      <TopBar title="Reels" right="sparkles" />

      <div className="px-4 pt-4">
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cx(
                'flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/75 transition hover:bg-white/10',
                tab === t.id && 'border-cyan-300/40 bg-cyan-500/10 text-white',
              )}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <div className="relative aspect-[9/16]">
            <img
              src={reels[0]?.mediaUrl}
              alt="Reel"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm font-semibold text-white/95">@{reels[0]?.user.username}</div>
                  <div className="mt-1 max-w-[280px] text-sm text-white/85">{reels[0]?.caption}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Remix enabled', 'Monetization eligible', 'AI recs'].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[12px] text-white/80"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <motion.button whileTap={{ scale: 0.95 }} className="rounded-2xl border border-white/10 bg-black/40 p-3">
                    <Sparkles className="h-5 w-5 text-cyan-200" />
                  </motion.button>
                  <div className="text-[11px] text-white/60">Boost</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/20 p-3">
            <div className="text-[12px] text-white/60">
              Tab: <span className="text-white/80">{tab}</span> — swipe UI would live here in mobile.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
