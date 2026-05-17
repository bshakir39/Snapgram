import { motion } from 'framer-motion'
import { Sparkles, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AIStudioSheet } from '../components/AIStudioSheet'
import { PostCard } from '../components/PostCard'
import { StoryRow } from '../components/StoryRow'
import { TopBar } from '../components/TopBar'
import { feedPosts } from '../lib/mockData'
import { cx, formatCompact } from '../lib/utils'

const topics = [
  { id: 'forYou', label: 'For You' },
  { id: 'trending', label: 'Trending' },
  { id: 'close', label: 'Close Friends' },
] as const

type Topic = (typeof topics)[number]['id']

export default function Home() {
  const [topic, setTopic] = useState<Topic>('forYou')
  const [aiOpen, setAiOpen] = useState(false)

  const posts = useMemo(() => {
    if (topic === 'close') return feedPosts.slice().reverse()
    if (topic === 'trending') return feedPosts.slice().sort((a, b) => b.likes - a.likes)
    return feedPosts
  }, [topic])

  return (
    <div className="pb-24">
      <TopBar title="Home" right="search" />
      <StoryRow />

      <div className="px-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-2">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => setTopic(t.id)}
                className={cx(
                  'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/75 transition hover:bg-white/10',
                  topic === t.id && 'border-cyan-300/40 bg-cyan-500/10 text-white',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setAiOpen(true)}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10 px-4 py-2 text-[12px] text-white/90 hover:bg-white/10"
          >
            <Sparkles className="h-4 w-4" />
            AI
          </button>
        </div>

        <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[12px] text-white/70">
              <TrendingUp className="h-4 w-4 text-cyan-200" />
              <span>Trending now</span>
            </div>
            <div className="text-[12px] text-white/50">Based on engagement</div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {['#nightmode', '#remix', '#street', '#aiavatar', '#musicstickers'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[12px] text-white/70">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-2 text-[12px] text-white/50">
            Today: {formatCompact(posts.reduce((acc, p) => acc + p.likes, 0))} total likes across your feed.
          </div>
        </div>
      </div>

      <motion.div layout className="mt-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </motion.div>

      <AIStudioSheet open={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  )
}
