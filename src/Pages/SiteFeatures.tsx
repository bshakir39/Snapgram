import {
  BadgeCheck,
  Camera,
  ChartLine,
  Hash,
  MessageCircle,
  Music,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { SiteLayout } from '../components/SiteLayout'

const blocks = [
  {
    icon: Camera,
    title: 'Camera module',
    bullets: ['Open straight to camera', 'AR + beauty filters', 'Green screen effects', 'Fast send-to flow'],
  },
  {
    icon: MessageCircle,
    title: 'Chat + vanish mode',
    bullets: ['Real-time messaging concept', 'Vanish after seen', 'Screenshot alerts (planned)', 'Group chats + calling'],
  },
  {
    icon: Music,
    title: 'Stories',
    bullets: ['24-hour expiry', 'Music stickers', 'Polls/questions', 'Viewer list'],
  },
  {
    icon: Sparkles,
    title: 'AI creativity',
    bullets: ['Caption generator', 'Hashtag suggestions', 'Enhancement guidance', 'Avatar concepting'],
  },
  {
    icon: Hash,
    title: 'Discovery + recommendations',
    bullets: ['For You feed', 'Trending topics', 'Reels/Spotlight', 'Remix-ready content'],
  },
  {
    icon: ChartLine,
    title: 'Creator tools',
    bullets: ['Analytics dashboard', 'Monetization hooks', 'Brand collaborations', 'Subscription content'],
  },
  {
    icon: BadgeCheck,
    title: 'Verified profiles',
    bullets: ['Identity signals', 'Anti-impersonation', 'Creator trust', 'Account recovery flow'],
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & security',
    bullets: ['Private accounts', 'Close friends', '2FA concept', 'Policy-driven retention'],
  },
  {
    icon: Wand2,
    title: 'AR platform readiness',
    bullets: ['ARCore/ARKit targets', 'Face tracking hooks', 'Lens marketplace (future)', 'Performance-first rendering'],
  },
]

export default function SiteFeatures() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Features</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
          This website describes the product vision. The <span className="font-semibold text-white/85">/app</span>{' '}
          route contains an interactive UI prototype.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <b.icon className="h-5 w-5 text-cyan-200" />
                {b.title}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                {b.bullets.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10 p-6 md:p-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-semibold">Try it</div>
              <div className="mt-1 text-sm text-white/65">Explore feed, camera, reels, chat, and profile.</div>
            </div>
            <NavLink
              to="/app"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Open app prototype
            </NavLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
