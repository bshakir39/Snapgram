import { motion } from 'framer-motion'
import { Camera, Lock, Phone, Shield, Video } from 'lucide-react'
import { useMemo, useState } from 'react'
import { TopBar } from '../components/TopBar'
import { chats } from '../lib/mockData'
import { cx, formatCompact } from '../lib/utils'

export default function Chat() {
  const [vanish, setVanish] = useState(true)

  const totalStreak = useMemo(() => chats.reduce((acc, c) => acc + c.streakDays, 0), [])

  return (
    <div className="pb-24">
      <TopBar title="Chat" right="search" />

      <div className="px-4 pt-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white/90">Vanish mode</div>
              <div className="text-[12px] text-white/55">Disappear after seen • screenshot alerts</div>
            </div>
            <button
              onClick={() => setVanish((v) => !v)}
              className={cx(
                'rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[12px] text-white/80',
                vanish && 'border-emerald-400/30 bg-emerald-500/10 text-white',
              )}
            >
              {vanish ? 'On' : 'Off'}
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
              <div className="flex items-center gap-2 text-[12px] text-white/70">
                <Shield className="h-4 w-4 text-cyan-200" />
                E2E Encryption
              </div>
              <div className="mt-1 text-sm font-semibold text-white/90">Enabled</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
              <div className="flex items-center gap-2 text-[12px] text-white/70">
                <Lock className="h-4 w-4 text-fuchsia-200" />
                Total streak days
              </div>
              <div className="mt-1 text-sm font-semibold text-white/90">{formatCompact(totalStreak)}</div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="text-sm font-semibold text-white/90">Messages</div>
          <div className="mt-3 space-y-2">
            {chats.map((c) => (
              <button
                key={c.id}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-left hover:bg-black/30"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-2xl bg-white/10">
                    <img src={c.user.avatar} alt={c.user.username} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold text-white/90">{c.user.username}</div>
                      {c.streakDays >= 7 && (
                        <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-200">
                          🔥 {c.streakDays}
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[12px] text-white/55">{c.lastMessage}</div>
                  </div>
                </div>

                <div className="flex items-end gap-2">
                  <div className="text-right">
                    <div className="text-[12px] text-white/50">{c.time}</div>
                    <div className="text-[11px] text-white/40">Score {formatCompact(c.snapScore)}</div>
                  </div>
                  {c.unread > 0 && (
                    <div className="rounded-full bg-cyan-400/90 px-2 py-1 text-[11px] font-semibold text-black">
                      {c.unread}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <motion.button whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] text-white/80 hover:bg-white/10">
              <Camera className="h-4 w-4" />
              Snap
            </motion.button>
            <motion.button whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] text-white/80 hover:bg-white/10">
              <Phone className="h-4 w-4" />
              Call
            </motion.button>
            <motion.button whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] text-white/80 hover:bg-white/10">
              <Video className="h-4 w-4" />
              Video
            </motion.button>
          </div>

          <div className="mt-3 text-[12px] text-white/50">
            Prototype note: real-time messaging would use WebSockets/Firebase.
          </div>
        </div>
      </div>
    </div>
  )
}
