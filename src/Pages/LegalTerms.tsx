import { SiteLayout } from '../components/SiteLayout'

export default function LegalTerms() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Terms of Service (prototype)</h1>
        <p className="mt-3 text-sm text-white/60">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="prose prose-invert mt-8 max-w-none prose-p:text-white/70 prose-li:text-white/70">
          <p>This is a sample terms document for the SnapGram UI prototype. It is not legal advice.</p>
          <h2>Using SnapGram</h2>
          <ul>
            <li>You are responsible for content you post and send.</li>
            <li>No illegal, harmful, or abusive behavior.</li>
            <li>Respect intellectual property.</li>
          </ul>
          <h2>Disappearing content</h2>
          <p>
            Some content may be designed to expire after a set time or after being viewed. Recipients may still capture
            content (e.g., screenshots, screen recording).
          </p>
          <h2>Termination</h2>
          <p>Accounts may be suspended for violations, safety issues, or legal compliance reasons.</p>
          <h2>Disclaimer</h2>
          <p>The deployed project is a prototype and provides no real social network services.</p>
        </div>
      </section>
    </SiteLayout>
  )
}
