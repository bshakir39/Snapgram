import { NavLink } from 'react-router-dom'
import { Camera, Home, MessageCircle, PlaySquare, User } from 'lucide-react'
import { cx } from '../lib/utils'

const items = [
  { to: '/app', label: 'Home', icon: Home },
  { to: '/app/reels', label: 'Reels', icon: PlaySquare },
  { to: '/app/camera', label: 'Camera', icon: Camera },
  { to: '/app/chat', label: 'Chat', icon: MessageCircle },
  { to: '/app/profile', label: 'Profile', icon: User },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-[440px] border-t border-white/10 px-4">
        <div className="flex items-center justify-between py-2">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                cx(
                  'flex w-[64px] flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] transition',
                  isActive ? 'text-white' : 'text-white/60 hover:text-white',
                )
              }
              end={it.to === '/'}
            >
              {({ isActive }) => (
                <>
                  <it.icon
                    className={cx(
                      'h-5 w-5 transition',
                      isActive ? 'text-cyan-200' : 'text-white/70',
                    )}
                  />
                  <span className={cx(isActive ? 'text-white' : 'text-white/60')}>{it.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
