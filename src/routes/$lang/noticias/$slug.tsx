import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { formatDate, getDict, useI18n } from '@/i18n'
import { img, pageTitle } from '@/lib/site'
import { CtaBand } from '@/components/ui'

export const Route = createFileRoute('/$lang/noticias/$slug')({
  beforeLoad: ({ params }) => {
    if (!getDict(params.lang).news.articles.some((a) => a.slug === params.slug)) throw notFound()
  },
  head: ({ params }) => {
    const article = getDict(params.lang).news.articles.find((a) => a.slug === params.slug)
    return article ? pageTitle(article.title) : {}
  },
  component: Article,
})

function Article() {
  const { lang, t } = useI18n()
  const { slug } = Route.useParams()
  const article = t.news.articles.find((a) => a.slug === slug)!

  return (
    <>
      <article>
        <header className="on-dark bg-navy-900 text-white">
          <div className="mx-auto max-w-3xl px-5 pb-16 pt-14">
            <Link to="/$lang/noticias" params={{ lang }} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold-300">
              <ArrowLeft className="h-4 w-4" /> {t.common.backToNews}
            </Link>
            <p className="eyebrow mt-10">
              {article.category} · {formatDate(article.date, lang)}
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{article.excerpt}</p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-5">
          <img src={img(article.image, 1400)} alt="" className="mt-10 aspect-[16/8] w-full rounded-2xl object-cover shadow-xl" />
        </div>
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 text-lg leading-relaxed text-ink/80">
          {article.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="border-t border-navy-900/10 pt-6 text-sm text-ink/55">{t.news.disclaimer}</p>
        </div>
      </article>
      <CtaBand title={t.services.ctaTitle} text={t.services.ctaText} />
    </>
  )
}
