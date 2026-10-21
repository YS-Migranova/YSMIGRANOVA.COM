import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Eye, Globe2, Languages, Quote, Scale } from 'lucide-react'
import { useI18n } from '@/i18n'
import { img } from '@/lib/site'
import { CtaBand, GoldButton, SERVICE_ICONS, SectionHeading } from '@/components/ui'

export const Route = createFileRoute('/$lang/')({
  component: Home,
})

const WHY_ICONS = [Scale, Languages, Eye, Globe2]

function Home() {
  const { lang, t } = useI18n()
  const h = t.home

  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-navy-950 text-white">
        <img
          src={img('hero', 2000)}
          srcSet={`${img('hero', 900)} 900w, ${img('hero', 1400)} 1400w, ${img('hero', 2000)} 2000w`}
          sizes="100vw"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
          <p className="eyebrow rise">{h.eyebrow}</p>
          <h1 className="rise rise-1 mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-[5.5rem]">
            {t.tagline}
          </h1>
          <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-white/75">{h.intro}</p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <Link to="/$lang/consultas" params={{ lang }} hash="reservar">
              <GoldButton>
                {h.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </GoldButton>
            </Link>
            <Link
              to="/$lang/servicios"
              params={{ lang }}
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition hover:border-gold-400 hover:text-gold-300"
            >
              {h.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-px border-b border-gold-500/20 bg-navy-900 text-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 lg:px-8">
          {h.stats.map((s, i) => (
            <div key={s.label} className={`py-8 md:py-10 ${i > 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold text-gold-400 md:text-5xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-white/65">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={h.servicesEyebrow} title={h.servicesTitle} intro={h.servicesIntro} />
          <Link
            to="/$lang/servicios"
            params={{ lang }}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-navy-800 hover:text-gold-600"
          >
            {t.common.allServices} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s) => {
            const Icon = SERVICE_ICONS[s.id]
            return (
              <Link
                key={s.id}
                to="/$lang/servicios"
                params={{ lang }}
                hash={s.id}
                className="group bg-white p-8 transition hover:bg-navy-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/50 text-gold-600 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900 transition group-hover:text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65 transition group-hover:text-white/70">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 group-hover:text-gold-400">
                  {t.common.learnMore} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img
              src={img('about', 1000)}
              alt=""
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-navy-900/20 sm:aspect-[4/3] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-2 hidden max-w-xs rounded-xl bg-navy-900 p-6 text-white shadow-xl sm:block lg:-right-8">
              <p className="font-display text-xl italic leading-snug text-gold-300">«{t.tagline}»</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={h.whyEyebrow} title={h.whyTitle} />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {h.whyItems.map((w, i) => {
                const Icon = WHY_ICONS[i % WHY_ICONS.length]
                return (
                  <div key={w.title}>
                    <Icon className="h-6 w-6 text-gold-500" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-bold text-navy-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{w.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="on-dark bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow={h.processEyebrow} title={h.processTitle} center light />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="gold-rule absolute left-0 right-0 top-7 hidden md:block" aria-hidden="true" />
            {h.process.map((p, i) => (
              <li key={p.title} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-500 bg-navy-900 font-display text-2xl text-gold-400">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/65">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow={h.testimonialsEyebrow} title={h.testimonialsTitle} center />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {h.testimonials.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-gold-500" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-navy-900">{q.quote}</blockquote>
              <figcaption className="mt-6 border-t border-navy-900/10 pt-4">
                <span className="block font-bold text-navy-900">{q.name}</span>
                <span className="text-sm text-gold-600">{q.origin}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* News preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={t.news.eyebrow} title={t.news.title} />
            <Link to="/$lang/noticias" params={{ lang }} className="inline-flex items-center gap-2 text-sm font-bold text-navy-800 hover:text-gold-600">
              {t.nav.news} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.news.articles.map((a) => (
              <Link key={a.slug} to="/$lang/noticias/$slug" params={{ lang, slug: a.slug }} className="group">
                <div className="overflow-hidden rounded-xl">
                  <img src={img(a.image, 700)} alt="" loading="lazy" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gold-600">{a.category}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-navy-900 group-hover:text-navy-600">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={h.ctaBandTitle} text={h.ctaBandText} />
    </>
  )
}
