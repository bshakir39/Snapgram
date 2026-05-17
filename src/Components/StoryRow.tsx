import { stories } from '../lib/mockData'
import { cx, formatCompact } from '../lib/utils'

export function StoryRow() {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white/90">Stories</div>
        <div className="text-[12px] text-white/50">24h • viewers</div>
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stories.map((s) => (
          <button
            key={s.id}
            className="group flex w-[78px] shrink-0 flex-col items-center gap-2"
            title={s.closeFriends ? 'Close Friends' : 'Story'}
          >
            <div
              className={cx(
                'rounded-[22px] p-[2px] transition',
                s.closeFriends
                  ? 'bg-gradient-to-br from-emerald-400 via-cyan-300 to-purple-400'
                  : 'bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-violet-400',
              )}
            >
              <div className="h-[62px] w-[62px] overflow-hidden rounded-[20px] bg-white/5">
                <img src={s.user.avatar} alt={s.user.username} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="text-center">
              <div className="truncate text-[12px] text-white/80">{s.user.username}</div>
              <div className="text-[11px] text-white/45">{formatCompact(s.viewers)}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
