import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Info } from 'lucide-react'
import { formatDate, getDict, useI18n } from '@/i18n'
import { img, pageTitle } from '@/lib/site'
import { PageHero } from '@/components/ui'

export const Route = createFileRoute('/$lang/noticias/')({
  head: ({ params }) => pageTitle(getDict(params.lang).nav.news),
  component: News,
})

function News() {
  const { lang, t } = useI18n()
  const n = t.news
  const [featured, ...rest] = n.articles

  return (
    <>
      <PageHero eyebrow={n.eyebrow} title={n.title} intro={n.intro} />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Link
          to="/$lang/noticias/$slug"
          params={{ lang, slug: featured.slug }}
          className="group grid overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm lg:grid-cols-2"
        >
          <div className="overflow-hidden">
            <img src={img(featured.image, 1100)} alt="" className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
              {featured.category} · <time dateTime={featured.date}>{formatDate(featured.date, lang)}</time>
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-ink/70">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy-800 group-hover:text-gold-600">
              {t.common.readMore} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {rest.map((a) => (
            <Link key={a.slug} to="/$lang/noticias/$slug" params={{ lang, slug: a.slug }} className="group rounded-2xl border border-navy-900/10 bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl">
                <img src={img(a.image, 800)} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  {a.category} · <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-navy-900">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-12 flex items-start gap-3 text-sm text-ink/60">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" /> {n.disclaimer}
        </p>
      </section>
    </>
  )
}
