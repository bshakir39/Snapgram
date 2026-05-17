import { AlertTriangle, EyeOff, Lock, ShieldCheck } from 'lucide-react'
import { SiteLayout } from '../components/SiteLayout'

export default function SiteSafety() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Safety & privacy</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
          SnapGram is designed to support a privacy-first social experience. This page summarizes product commitments.
          Implementation requires backend + device integrations.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Security by design',
              desc: 'Threat modeling, strong auth, rate limits, and secure storage defaults.',
            },
            {
              icon: Lock,
              title: 'Encrypted messaging',
              desc: 'End-to-end encryption for direct messages is a core requirement.',
            },
            {
              icon: EyeOff,
              title: 'Control your audience',
              desc: 'Private account, close friends, story visibility, and blocking/reporting.',
            },
          ].map((x) => (
            <div key={x.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <x.icon className="h-5 w-5 text-emerald-200" />
              <div className="mt-3 text-sm font-semibold text-white/90">{x.title}</div>
              <div className="mt-1 text-sm text-white/65">{x.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[40px] border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 text-amber-200" />
            <div>
              <div className="text-sm font-semibold">Prototype disclaimer</div>
              <div className="mt-2 text-sm leading-relaxed text-white/65">
                This deployed build is a UI prototype. It does not store real messages, does not run encryption, and does
                not integrate device screenshot detection. The intent is to communicate the product scope.
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
