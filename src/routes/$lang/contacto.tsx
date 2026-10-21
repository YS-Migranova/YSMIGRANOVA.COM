import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { getDict, useI18n } from '@/i18n'
import { SITE, pageTitle } from '@/lib/site'
import { useNetlifyForm } from '@/lib/netlifyForm'
import { Field, FormStatus } from '@/components/FormStatus'
import { PageHero } from '@/components/ui'

export const Route = createFileRoute('/$lang/contacto')({
  head: ({ params }) => pageTitle(getDict(params.lang).nav.contact),
  component: Contact,
})

function Contact() {
  const { lang, t } = useI18n()
  const c = t.contact
  const { state, onSubmit, reset } = useNetlifyForm()

  const info = [
    { icon: Mail, label: c.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: c.phoneLabel, value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: c.addressLabel, value: c.address },
    { icon: Clock, label: c.hoursLabel, value: c.hours },
  ]

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} image="hero" />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <aside className="on-dark h-fit rounded-2xl bg-navy-900 p-8 text-white md:p-10">
          <h2 className="eyebrow">{c.infoTitle}</h2>
          <ul className="mt-8 space-y-7">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">{label}</span>
                  {href ? (
                    <a href={href} className="mt-1 block font-medium hover:text-gold-300">
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block font-medium">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-gold-400"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
          <p className="mt-10 border-t border-white/10 pt-6 font-display text-xl italic text-gold-300">«{t.tagline}»</p>
        </aside>

        <form
          name="contacto"
          method="POST"
          action="/forms.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          onChange={reset}
          className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/5 md:p-10"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <input type="hidden" name="idioma" value={lang} />
          <p hidden>
            <label>
              Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
            <Field label={c.form.name} required>
              <input name="nombre" className="field" autoComplete="name" required maxLength={100} />
            </Field>
            <Field label={c.form.email} required>
              <input name="email" type="email" className="field" autoComplete="email" required maxLength={254} />
            </Field>
            <Field label={c.form.phone}>
              <input name="telefono" type="tel" className="field" autoComplete="tel" maxLength={40} />
            </Field>
            <Field label={c.form.subject} required>
              <select name="asunto" className="field" required defaultValue="general">
                {Object.entries(c.form.subjects).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field label={c.form.message} required>
                <textarea name="mensaje" rows={7} className="field" required maxLength={3000} />
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
      </section>
    </>
  )
}
