import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, FileCheck2 } from 'lucide-react'
import { getDict, useI18n } from '@/i18n'
import { pageTitle } from '@/lib/site'
import { CtaBand, PageHero, SERVICE_ICONS } from '@/components/ui'

export const Route = createFileRoute('/$lang/servicios')({
  head: ({ params }) => pageTitle(getDict(params.lang).nav.services),
  component: Services,
})

function Services() {
  const { lang, t } = useI18n()
  const s = t.services

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} image="news1" />

      <nav className="sticky top-20 z-30 border-b border-navy-900/10 bg-ivory/95 backdrop-blur" aria-label={t.nav.services}>
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 lg:px-8">
          {s.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-navy-900/15 px-4 py-1.5 text-sm font-medium text-navy-800 transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl space-y-6 px-5 py-20 lg:px-8">
        {s.items.map((item, i) => {
          const Icon = SERVICE_ICONS[item.id]
          return (
            <article
              key={item.id}
              id={item.id}
              className="grid scroll-mt-40 gap-8 rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr_1fr] md:p-10"
            >
              <div className="flex items-start gap-4 md:flex-col">
                <span className="font-display text-5xl text-gold-500/60">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-navy-900">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/70">{item.summary}</p>
                <Link
                  to="/$lang/consultas"
                  params={{ lang }}
                  hash="reservar"
                  search={{ servicio: item.id }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-navy-800"
                >
                  {t.common.bookConsultation} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="space-y-3 border-t border-navy-900/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-navy-900">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </section>

      <section className="on-dark bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="eyebrow">{s.extrasTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.extras.map((e) => (
              <li key={e} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm font-medium">
                <FileCheck2 className="h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={s.ctaTitle} text={s.ctaText} />
    </>
  )
}
