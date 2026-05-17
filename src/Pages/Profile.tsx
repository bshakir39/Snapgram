import { BarChart3, BadgeCheck, CreditCard, Lock, ShieldCheck, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { TopBar } from '../components/TopBar'
import { currentUser, feedPosts } from '../lib/mockData'
import { cx, formatCompact } from '../lib/utils'

type Tab = 'posts' | 'analytics' | 'privacy'

export default function Profile() {
  const [tab, setTab] = useState<Tab>('posts')

  const metrics = useMemo(() => {
    const likes = feedPosts.reduce((acc, p) => acc + p.likes, 0)
    const comments = feedPosts.reduce((acc, p) => acc + p.comments, 0)
    return {
      followers: 128_400,
      following: 412,
      likes,
      comments,
      revenue: 482,
    }
  }, [])

  return (
    <div className="pb-24">
      <TopBar title="Profile" />

      <div className="px-4 pt-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-3xl bg-white/10">
              <img src={currentUser.avatar} alt={currentUser.username} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="text-base font-semibold text-white/95">@{currentUser.username}</div>
                {currentUser.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-[11px] text-cyan-200">
                    <BadgeCheck className="h-4 w-4" /> Verified
                  </span>
                )}
              </div>
              <div className="mt-1 text-[12px] text-white/55">Creator • close friends enabled • 2FA on</div>
            </div>
            <button className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-[12px] text-white/80 hover:bg-black/40">
              Edit
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              { label: 'Followers', value: metrics.followers },
              { label: 'Following', value: metrics.following },
              { label: 'Likes', value: metrics.likes },
              { label: 'Revenue', value: `$${metrics.revenue}` },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
                <div className="text-sm font-semibold text-white/90">
                  {typeof m.value === 'number' ? formatCompact(m.value) : m.value}
                </div>
                <div className="mt-1 text-[11px] text-white/50">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {['Premium filters', 'Subscriptions', 'Brand collabs', 'AI captions'].map((b) => (
              <span key={b} className="rounded-full border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10 px-3 py-1 text-[12px] text-white/80">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          {([
            { id: 'posts', label: 'Posts' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'privacy', label: 'Privacy' },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cx(
                'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/75 hover:bg-white/10',
                tab === t.id && 'border-fuchsia-400/40 bg-fuchsia-500/10 text-white',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'posts' && (
          <div className="mt-3 grid grid-cols-3 gap-2">
            {feedPosts.map((p) => (
              <div key={p.id} className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img src={p.mediaUrl} alt={p.caption} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {tab === 'analytics' && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
              <BarChart3 className="h-5 w-5 text-cyan-200" />
              Creator analytics
            </div>
            <div className="mt-2 text-[12px] text-white/55">
              Engagement, retention, and monetization overview (mock).
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="text-[12px] text-white/60">Avg. watch time</div>
                <div className="mt-1 text-sm font-semibold text-white/90">8.4s</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="text-[12px] text-white/60">Saves / 1k</div>
                <div className="mt-1 text-sm font-semibold text-white/90">62</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="text-[12px] text-white/60">Recommendations</div>
                <div className="mt-1 text-sm font-semibold text-white/90">High</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="text-[12px] text-white/60">Est. payout</div>
                <div className="mt-1 text-sm font-semibold text-white/90">$482</div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 p-3 text-[12px] text-white/70">
              Next: connect Stripe + subscriptions, and add brand collaboration inbox.
            </div>
          </div>
        )}

        {tab === 'privacy' && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
              <ShieldCheck className="h-5 w-5 text-emerald-200" />
              Privacy & security
            </div>
            <div className="mt-3 space-y-2">
              {[
                { icon: Lock, title: 'Private account', desc: 'Approve followers manually.' },
                { icon: Sparkles, title: 'Close friends list', desc: 'Share stories with a smaller circle.' },
                { icon: CreditCard, title: 'Subscription content', desc: 'Paid-only posts and stories.' },
              ].map((x) => (
                <div key={x.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <x.icon className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <div className="text-sm font-semibold text-white/90">{x.title}</div>
                    <div className="mt-0.5 text-[12px] text-white/55">{x.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-[12px] text-white/50">
              Prototype note: real E2E encryption, screenshot notifications, and 2FA require backend + device APIs.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
