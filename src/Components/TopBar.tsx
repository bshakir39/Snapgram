import { Bell, Search, Sparkles } from 'lucide-react'

export function TopBar({ title, right }: { title: string; right?: 'search' | 'sparkles' }) {
  return (
    <header className="sticky top-0 z-30 bg-[#080B18]/70 backdrop-blur-xl">
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold tracking-wide text-white/90">{title}</div>
            <div className="text-[12px] text-white/50">SnapGram prototype</div>
          </div>
          <div className="flex items-center gap-2">
            {right === 'search' && (
              <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
                <Search className="h-4 w-4" />
              </button>
            )}
            {right === 'sparkles' && (
              <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
                <Sparkles className="h-4 w-4" />
              </button>
            )}
            <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 h-px bg-white/10" />
    </header>
  )
}
