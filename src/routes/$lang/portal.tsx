import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, Lock } from 'lucide-react'
import { getDict, useI18n } from '@/i18n'
import { pageTitle } from '@/lib/site'
import { LogoMark } from '@/components/Logo'

// Vista previa del futuro portal privado de clientes. La autenticación y los
// datos se conectarán más adelante (ver PLAN.md).
export const Route = createFileRoute('/$lang/portal')({
  head: ({ params }) => pageTitle(getDict(params.lang).portal.title),
  component: Portal,
})

function Portal() {
  const { t } = useI18n()
  const p = t.portal

  return (
    <section className="on-dark relative overflow-hidden bg-navy-950 text-white">
      <svg className="absolute -left-40 bottom-0 h-[32rem] w-[64rem] opacity-10" viewBox="0 0 400 200" aria-hidden="true">
        <path d="M0 200 Q200 0 400 200" fill="none" stroke="#c9a24b" strokeWidth="1.5" />
        <path d="M40 200 Q200 40 360 200" fill="none" stroke="#c9a24b" strokeWidth="1" />
      </svg>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-300">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" /> {p.badge}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold md:text-6xl">{p.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{p.intro}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <div className="flex justify-center">
            <LogoMark className="h-14 w-14" />
          </div>
          <form className="mt-8 space-y-5" aria-describedby="portal-note" onSubmit={(e) => e.preventDefault()}>
            <fieldset disabled className="space-y-5 opacity-70">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">{p.email}</span>
                <input type="email" className="field" autoComplete="email" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">{p.password}</span>
                <input type="password" className="field" autoComplete="current-password" />
              </label>
              <button type="submit" className="w-full rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950">
                {p.signIn}
              </button>
            </fieldset>
            <p id="portal-note" className="text-center text-xs text-white/55">
              {p.disabledNote}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
