export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatCompact(n: number) {
  const abs = Math.abs(n)
  if (abs < 1000) return `${n}`
  if (abs < 1_000_000) return `${(n / 1000).toFixed(abs < 10_000 ? 1 : 0)}k`
  if (abs < 1_000_000_000) return `${(n / 1_000_000).toFixed(abs < 10_000_000 ? 1 : 0)}m`
  return `${(n / 1_000_000_000).toFixed(1)}b`
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}
