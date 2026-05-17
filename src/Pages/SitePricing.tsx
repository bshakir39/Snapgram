import { Check, Sparkles } from 'lucide-react'
import { SiteLayout } from '../components/SiteLayout'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Core social experience for everyone.',
    items: ['Feed + reels browsing', 'Stories + close friends', 'Chat (basic)', 'Standard lenses'],
  },
  {
    name: 'Plus',
    price: '$4.99',
    desc: 'Premium creation tools and controls.',
    highlight: true,
    items: ['Premium lenses pack', 'Advanced AI captions + tags', 'Creator analytics', 'Ad controls'],
  },
  {
    name: 'Creator',
    price: '8%',
    desc: 'Monetization and subscriptions toolkit.',
    items: ['Subscriptions', 'Brand collab inbox', 'Payout reports', 'Boosted discovery'],
  },
]

export default function SitePricing() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Pricing</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
          Example monetization model. Real pricing depends on platform fees and regional requirements.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                'rounded-3xl border border-white/10 bg-white/5 p-6 ' +
                (t.highlight ? 'bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10' : '')
              }
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{t.name}</div>
                {t.highlight && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[12px] text-white/75">
                    <Sparkles className="h-4 w-4 text-cyan-200" /> Popular
                  </div>
                )}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">{t.price}</div>
              <div className="mt-2 text-sm text-white/65">{t.desc}</div>

              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {t.items.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-200" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-black">
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
