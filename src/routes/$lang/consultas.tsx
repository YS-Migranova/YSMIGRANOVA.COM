import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check, Clock, Video } from 'lucide-react'
import { getDict, useI18n } from '@/i18n'
import { img, pageTitle } from '@/lib/site'
import { useNetlifyForm } from '@/lib/netlifyForm'
import { Field, FormStatus } from '@/components/FormStatus'
import { PageHero, SectionHeading } from '@/components/ui'

type Search = { servicio?: string; plan?: string }

export const Route = createFileRoute('/$lang/consultas')({
  validateSearch: (s: Record<string, unknown>): Search => ({
    servicio: typeof s.servicio === 'string' ? s.servicio : undefined,
    plan: typeof s.plan === 'string' ? s.plan : undefined,
  }),
  head: ({ params }) => pageTitle(getDict(params.lang).nav.consultations),
  component: Consultations,
})

const DESTINATIONS = ['ES', 'BE', 'NL', 'FR', 'DE', 'PT', 'IT', 'LU']
const PLATFORMS = ['Google Meet', 'Zoom', 'Microsoft Teams', 'WhatsApp']

function Consultations() {
  const { lang, t } = useI18n()
  const c = t.consult
  const search = Route.useSearch()
  const [plan, setPlan] = useState(search.plan ?? c.plans.find((p) => p.featured)?.id ?? c.plans[0].id)
  const [service, setService] = useState(search.servicio ?? '')
  const { state, onSubmit, reset } = useNetlifyForm()
  const regions = new Intl.DisplayNames([lang], { type: 'region' })
  const today = new Date().toISOString().slice(0, 10)

  function choosePlan(id: string) {
    setPlan(id)
    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} image="consultation" />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow={c.eyebrow} title={c.howTitle} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-navy-900/10 bg-white p-7">
              <span className="font-display text-4xl text-gold-500">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Plans */}
      <section className="on-dark bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow={c.eyebrow} title={c.plansTitle} light />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {c.plans.map((p) => {
              const selected = plan === p.id
              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-2xl border p-8 transition ${
                    selected ? 'border-gold-500 bg-white/10' : 'border-white/10 bg-white/5'
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-navy-950">{c.popular}</span>
                  )}
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
                    <Clock className="h-4 w-4" aria-hidden="true" /> {p.duration} {t.common.minutes}
                  </p>
                  <p className="mt-6 font-display text-5xl text-gold-400">{p.price}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-white/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => choosePlan(p.id)}
                    aria-pressed={selected}
                    className={`mt-8 rounded-full px-5 py-3 text-sm font-bold transition ${
                      selected ? 'bg-gold-500 text-navy-950' : 'border border-white/25 hover:border-gold-400 hover:text-gold-300'
                    }`}
                  >
                    {selected ? <Check className="mx-auto h-5 w-5" aria-label={p.name} /> : c.choose}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="reservar" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <SectionHeading eyebrow={t.nav.cta} title={c.formTitle} intro={c.formIntro} />
            <img src={img('consultation', 800)} alt="" loading="lazy" className="mt-10 hidden aspect-[4/3] w-full rounded-2xl object-cover lg:block" />
          </div>

          <form
            name="consulta-virtual"
            method="POST"
            action="/forms.html"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            onChange={reset}
            className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/5 md:p-10"
          >
            <input type="hidden" name="form-name" value="consulta-virtual" />
            <input type="hidden" name="idioma" value={lang} />
            <p hidden>
              <label>
                Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label={c.form.plan} required>
                  <select name="tipo-consulta" className="field" value={plan} onChange={(e) => setPlan(e.target.value)} required>
                    {c.plans.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} · {p.duration} {t.common.minutes} · {p.price}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label={c.form.name} required>
                <input name="nombre" className="field" autoComplete="name" required maxLength={100} />
              </Field>
              <Field label={c.form.email} required>
                <input name="email" type="email" className="field" autoComplete="email" required maxLength={254} />
              </Field>
              <Field label={c.form.phone}>
                <input name="telefono" type="tel" className="field" autoComplete="tel" maxLength={40} />
              </Field>
              <Field label={c.form.country} required>
                <input name="pais-residencia" className="field" autoComplete="country-name" required maxLength={80} />
              </Field>
              <Field label={c.form.destination} required>
                <select name="pais-destino" className="field" required defaultValue="">
                  <option value="" disabled>
                    {c.form.destinationPlaceholder}
                  </option>
                  {DESTINATIONS.map((code) => (
                    <option key={code} value={code}>
                      {regions.of(code)}
                    </option>
                  ))}
                  <option value="otro">{c.form.destinationOther}</option>
                </select>
              </Field>
              <Field label={c.form.service} required>
                <select name="servicio" className="field" value={service} onChange={(e) => setService(e.target.value)} required>
                  <option value="" disabled>
                    {c.form.servicePlaceholder}
                  </option>
                  {t.services.items.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={c.form.date} required>
                <input name="fecha" type="date" min={today} className="field" required />
              </Field>
              <Field label={c.form.time} required>
                <select name="franja" className="field" required defaultValue="morning">
                  {Object.entries(c.form.times).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-navy-900">{c.form.platform}</span>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map((p, i) => (
                    <label key={p} className="cursor-pointer">
                      <input type="radio" name="plataforma" value={p} defaultChecked={i === 0} className="peer sr-only" />
                      <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-4 py-2 text-sm text-navy-800 transition peer-checked:border-gold-500 peer-checked:bg-gold-500/15 peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500">
                        <Video className="h-4 w-4 text-gold-600" aria-hidden="true" /> {p}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <Field label={c.form.message} required>
                  <textarea name="mensaje" rows={5} className="field" required maxLength={3000} />
                </Field>
              </div>
              <label className="flex items-start gap-3 text-sm text-ink/75 sm:col-span-2">
                <input type="checkbox" name="consentimiento" value="si" required className="mt-1 h-4 w-4 accent-gold-600" />
                {c.form.consent}
              </label>
              <div className="space-y-4 sm:col-span-2">
                <FormStatus state={state} success={c.form.success} error={c.form.error} />
                <button
                  type="submit"
                  className="w-full rounded-full bg-navy-900 px-6 py-4 text-sm font-bold text-white transition hover:bg-navy-700 disabled:opacity-60 sm:w-auto"
                >
                  {state === 'pending' ? c.form.sending : c.form.submit}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  )
}
