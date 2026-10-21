import { createFileRoute } from '@tanstack/react-router'
import { Award, FileText, Handshake, HeartHandshake, Scale, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { getDict, useI18n } from '@/i18n'
import { img, pageTitle } from '@/lib/site'
import { CtaBand, PageHero, SectionHeading } from '@/components/ui'

export const Route = createFileRoute('/$lang/nosotros')({
  head: ({ params }) => pageTitle(getDict(params.lang).nav.about),
  component: About,
})

const VALUE_ICONS = [ShieldCheck, Award, HeartHandshake, Sparkles]
const TEAM_ICONS = [Scale, FileText, Users]

function About() {
  const { t } = useI18n()
  const a = t.about

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} image="about" />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <img src={img('about', 1000)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-navy-900/20" />
        <div className="space-y-10">
          <div>
            <h2 className="flex items-center gap-3 font-display text-3xl font-semibold text-navy-900">
              <Handshake className="h-7 w-7 text-gold-500" aria-hidden="true" /> {a.missionTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{a.mission}</p>
          </div>
          <div className="gold-rule" />
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy-900">{a.visionTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{a.vision}</p>
          </div>
          <p className="border-l-2 border-gold-500 pl-5 font-display text-2xl italic text-navy-800">«{t.tagline}»</p>
        </div>
      </section>

      <section className="on-dark bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow={a.eyebrow} title={a.valuesTitle} center light />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length]
              return (
                <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                  <Icon className="mx-auto h-8 w-8 text-gold-400" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow={a.eyebrow} title={a.teamTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {a.team.map((m, i) => {
            const Icon = TEAM_ICONS[i % TEAM_ICONS.length]
            return (
              <div key={m.role} className="rounded-2xl border border-navy-900/10 bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{m.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand title={t.home.ctaBandTitle} text={t.home.ctaBandText} />
    </>
  )
}
