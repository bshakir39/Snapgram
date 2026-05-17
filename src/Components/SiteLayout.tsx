import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { cx } from '../lib/utils'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#070A14] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-260px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A14]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/20 to-violet-500/20" />
            <div>
              <div className="text-sm font-semibold tracking-wide">SnapGram</div>
              <div className="text-[12px] text-white/55">Polished sharing + disappearing chats</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              { to: '/site', label: 'Website' },
              { to: '/site/features', label: 'Features' },
              { to: '/site/safety', label: 'Safety' },
              { to: '/site/pricing', label: 'Pricing' },
            ].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cx(
                    'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/75 transition hover:bg-white/10',
                    isActive && 'border-cyan-300/40 bg-cyan-500/10 text-white',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <NavLink
              to="/app"
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] text-white/80 hover:bg-white/10 sm:inline-flex"
            >
              Open app
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
            <NavLink
              to="/site/safety"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-black"
            >
              <ShieldCheck className="h-4 w-4" />
              Safety
            </NavLink>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 mt-16 border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">SnapGram</div>
            <div className="mt-2 text-[12px] text-white/55">
              A product website + interactive prototype. Not a real social network.
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Product</div>
            <div className="mt-3 space-y-2 text-[12px]">
              <NavLink className="block text-white/70 hover:text-white" to="/site/features">
                Features
              </NavLink>
              <NavLink className="block text-white/70 hover:text-white" to="/site/pricing">
                Pricing
              </NavLink>
              <NavLink className="block text-white/70 hover:text-white" to="/app">
                App prototype
              </NavLink>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Legal</div>
            <div className="mt-3 space-y-2 text-[12px]">
              <NavLink className="block text-white/70 hover:text-white" to="/legal/privacy">
                Privacy Policy
              </NavLink>
              <NavLink className="block text-white/70 hover:text-white" to="/legal/terms">
                Terms of Service
              </NavLink>
              <NavLink className="block text-white/70 hover:text-white" to="/legal/cookies">
                Cookies
              </NavLink>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4">
          <div className="mx-auto max-w-6xl px-5 text-[12px] text-white/45">
            9 {new Date().getFullYear()} SnapGram. Prototype for design exploration.
          </div>
        </div>
      </footer>
    </div>
  )
}
