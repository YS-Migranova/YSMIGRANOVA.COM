import { Outlet, createFileRoute, notFound } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LANGS, getDict, isLang } from '@/i18n'

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound()
  },
  head: ({ params }) => {
    const t = getDict(params.lang)
    return {
      meta: [
        { title: t.meta.siteName },
        { name: 'description', content: t.meta.description },
        { property: 'og:title', content: t.meta.siteName },
        { property: 'og:description', content: t.meta.description },
      ],
      links: LANGS.map((l) => ({ rel: 'alternate', hrefLang: l, href: `/${l}` })),
    }
  },
  component: LangLayout,
})

function LangLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
