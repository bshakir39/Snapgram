import { motion } from 'framer-motion'
import {
  ArrowRight,
  Camera,
  Check,
  Lock,
  MessageCircle,
  PlaySquare,
  ShieldCheck,
  Sparkles,
  Stars,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { GradientButton } from '../components/GradientButton'
import { SiteLayout } from '../components/SiteLayout'

const features = [
  {
    icon: PlaySquare,
    title: 'Polished feed + Reels',
    desc: 'A clean, vertical-first browsing experience with creator-friendly tools.',
  },
  {
    icon: Camera,
    title: 'Camera-first creation',
    desc: 'Lenses, beauty, green-screen, and fast capture  share  post.',
  },
  {
    icon: MessageCircle,
    title: 'Private disappearing chat',
    desc: 'Vanish mode, screenshot alerts, and streaks to keep the momentum.',
  },
  {
    icon: Sparkles,
    title: 'AI creativity suite',
    desc: 'Captions, hashtags, enhancement suggestions, avatar concepts, moderation hooks.',
  },
]

const steps = [
  { title: 'Create your profile', desc: 'Pick a username, choose privacy defaults, and set close friends.' },
  { title: 'Shoot or post', desc: 'Open to camera. Snap privately, or publish like a creator.' },
  { title: 'Grow and stay safe', desc: 'Analytics + controls that keep your content and identity protected.' },
]

export default function SiteHome() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70">
              <Stars className="h-4 w-4 text-cyan-200" />
              SnapGram  a modern social concept
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Post like a creator.
              <span className="block bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                Chat like it disappears.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              SnapGram blends Instagram-style public sharing with Snapchat-style fast, private, disappearing
              communication  plus AI-powered creativity tools.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <NavLink
                to="/app"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Open the prototype <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
              <GradientButton as-child={undefined as never}>
                <span className="inline-flex items-center gap-2">
                  Join beta waitlist <Check className="h-4 w-4" />
                </span>
              </GradientButton>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {[{ k: 'E2E DMs', v: 'Planned' }, { k: 'Streaks', v: 'Built-in' }, { k: 'AI Tools', v: 'Studio' }].map(
                (x) => (
                  <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[11px] text-white/55">{x.k}</div>
                    <div className="mt-1 text-sm font-semibold text-white/90">{x.v}</div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 text-[12px] text-white/55">
              <ShieldCheck className="h-4 w-4 text-emerald-200" />
              Privacy-first defaults, close friends, and safety controls.
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-[420px] overflow-hidden rounded-[44px] border border-white/10 bg-black/30">
              <div className="aspect-[9/16] w-full bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/15 to-violet-500/20" />
              <div className="border-t border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Preview</div>
                    <div className="text-[12px] text-white/55">Camera  feed  chat</div>
                  </div>
                  <NavLink
                    to="/app/camera"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/80 hover:bg-white/10"
                  >
                    Try camera
                  </NavLink>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute -bottom-6 -left-2 hidden rounded-3xl border border-white/10 bg-[#0B1020]/80 p-4 backdrop-blur-xl md:block"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Lock className="h-4 w-4 text-cyan-200" />
                Vanish chats
              </div>
              <div className="mt-1 text-[12px] text-white/55">Disappear after seen  screenshot alerts</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Built for the new social loop</h2>
            <p className="mt-2 max-w-2xl text-white/65">
              One app for aesthetic content, fast private communication, and AI creativity.
            </p>
          </div>
          <NavLink
            to="/site/features"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/80 hover:bg-white/10 md:inline-flex"
          >
            Explore features <ArrowRight className="ml-2 h-4 w-4" />
          </NavLink>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <f.icon className="h-5 w-5 text-cyan-200" />
                {f.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/65">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">How SnapGram works</h2>
              <p className="mt-2 text-sm text-white/65">A fast path from camera to community.</p>
            </div>
            <div className="grid gap-3">
              {steps.map((s, idx) => (
                <div key={s.title} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[12px] text-white/55">Step {idx + 1}</div>
                  <div className="mt-1 text-sm font-semibold text-white/90">{s.title}</div>
                  <div className="mt-1 text-sm text-white/65">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Privacy-first defaults',
              desc: 'Close friends, private accounts, and granular controls for who sees what.',
            },
            {
              icon: Lock,
              title: 'Secure messaging',
              desc: 'Designed around E2E encryption and content retention policies (implementation required).',
            },
            {
              icon: Sparkles,
              title: 'AI moderation hooks',
              desc: 'Flag risky content early and keep creators safe with configurable policies.',
            },
          ].map((x) => (
            <div key={x.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <x.icon className="h-5 w-5 text-emerald-200" />
              <div className="mt-3 text-sm font-semibold">{x.title}</div>
              <div className="mt-1 text-sm text-white/65">{x.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div>
            <div className="text-sm font-semibold">Ready to explore the UI?</div>
            <div className="mt-1 text-[12px] text-white/55">
              Open the interactive prototype to test feed, camera, chats, reels, and profile.
            </div>
          </div>
          <NavLink
            to="/app"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            Launch prototype <ArrowRight className="ml-2 h-4 w-4" />
          </NavLink>
        </div>
      </section>
    </SiteLayout>
  )
}
