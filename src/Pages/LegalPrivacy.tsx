import { SiteLayout } from '../components/SiteLayout'

export default function LegalPrivacy() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy (prototype)</h1>
        <p className="mt-3 text-sm text-white/60">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="prose prose-invert mt-8 max-w-none prose-p:text-white/70 prose-li:text-white/70">
          <p>
            This is a sample privacy policy for the SnapGram UI prototype. It is not legal advice.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Account info: username, email/phone (if you provide it).</li>
            <li>Content: photos/videos you post or send (in a real app).</li>
            <li>Usage: events like likes, views, and interactions for recommendations.</li>
          </ul>
          <h2>How we use information</h2>
          <ul>
            <li>Provide core features: feed, stories, chat, and camera.</li>
            <li>Safety: detect spam/abuse and enforce policies.</li>
            <li>Personalization: recommend content you may like.</li>
          </ul>
          <h2>Encryption & disappearing content</h2>
          <p>
            Direct messages are intended to support end-to-end encryption. Disappearing content is controlled by retention
            rules (e.g., after viewed).
          </p>
          <h2>Your choices</h2>
          <ul>
            <li>Private account and close friends lists.</li>
            <li>Block/report tools.</li>
            <li>Ad preferences and tracking choices (where applicable).</li>
          </ul>
          <h2>Contact</h2>
          <p>If this were a real product, we would list an email and a DPO/contact address here.</p>
        </div>
      </section>
    </SiteLayout>
  )
}
