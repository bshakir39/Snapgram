import { SiteLayout } from '../components/SiteLayout'

export default function LegalCookies() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Cookies (prototype)</h1>
        <p className="mt-3 text-sm text-white/65">
          This prototype may use basic storage for preferences. A real app/website would provide consent controls and a
          detailed cookie list.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Typical categories</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <span className="font-semibold text-white/85">Essential</span>: authentication, routing, security.
            </li>
            <li>
              <span className="font-semibold text-white/85">Analytics</span>: product metrics and performance.
            </li>
            <li>
              <span className="font-semibold text-white/85">Advertising</span>: ad measurement and personalization.
            </li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  )
}
