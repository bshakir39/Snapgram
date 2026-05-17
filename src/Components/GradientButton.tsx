import { ButtonHTMLAttributes } from 'react'
import { cx } from '../lib/utils'

export function GradientButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-gradient-to-br from-fuchsia-500/15 via-cyan-500/15 to-violet-500/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 active:scale-[0.99]',
        className,
      )}
    />
  )
}
