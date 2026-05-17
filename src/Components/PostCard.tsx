import { motion } from 'framer-motion'
import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { FeedPost } from '../lib/mockData'
import { cx, formatCompact } from '../lib/utils'

export function PostCard({ post }: { post: FeedPost }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const likeCount = useMemo(() => post.likes + (liked ? 1 : 0), [post.likes, liked])
  const saveCount = useMemo(() => post.saves + (saved ? 1 : 0), [post.saves, saved])

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-4 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-2xl bg-white/10">
            <img src={post.user.avatar} alt={post.user.username} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/90">{post.user.username}</div>
            <div className="text-[12px] text-white/50">{post.createdAt} • {post.mediaType === 'reel' ? 'Reel' : 'Photo'}</div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-1 text-[12px] text-white/60">
          For You
        </div>
      </div>

      <div className="relative aspect-[4/5] w-full bg-black/20">
        <img src={post.mediaUrl} alt={post.caption} className="h-full w-full object-cover" />
        {post.mediaType === 'reel' && (
          <div className="absolute left-3 top-3 rounded-2xl bg-black/50 px-3 py-1 text-[12px] text-white/80">
            Reel
          </div>
        )}
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked((v) => !v)}
              className={cx(
                'rounded-2xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10',
                liked && 'border-fuchsia-400/40 bg-fuchsia-500/10',
              )}
              aria-label="Like"
            >
              <Heart className={cx('h-5 w-5', liked ? 'fill-fuchsia-400 text-fuchsia-300' : 'text-white/80')} />
            </button>
            <button
              className="rounded-2xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="Comment"
            >
              <MessageCircle className="h-5 w-5 text-white/80" />
            </button>
            <button
              className="rounded-2xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="Share"
            >
              <Send className="h-5 w-5 text-white/80" />
            </button>
          </div>
          <button
            onClick={() => setSaved((v) => !v)}
            className={cx(
              'rounded-2xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10',
              saved && 'border-cyan-400/40 bg-cyan-500/10',
            )}
            aria-label="Save"
          >
            <Bookmark className={cx('h-5 w-5', saved ? 'fill-cyan-300 text-cyan-200' : 'text-white/80')} />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3 text-[12px] text-white/60">
          <span>{formatCompact(likeCount)} likes</span>
          <span>{formatCompact(post.comments)} comments</span>
          <span>{formatCompact(saveCount)} saves</span>
        </div>

        <div className="mt-2 text-sm leading-relaxed text-white/85">
          <span className="font-semibold">{post.user.username}</span> {post.caption}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[12px] text-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
