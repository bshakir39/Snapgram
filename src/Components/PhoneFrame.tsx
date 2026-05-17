import { ReactNode } from 'react'

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh w-full bg-[#070A14] text-white">
      <div className="mx-auto min-h-dvh w-full max-w-[440px]">
        <div className="relative min-h-dvh bg-[#080B18]">
          <div className="pointer-events-none absolute left-1/2 top-0 h-7 w-40 -translate-x-1/2 rounded-b-2xl bg-black/55 blur-[0.2px]" />
          {children}
        </div>
      </div>
    </div>
  )
}
