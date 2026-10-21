import { HeadContent, Link, Scripts, createRootRoute, useParams } from '@tanstack/react-router'
import { DEFAULT_LANG, getDict, isLang } from '@/i18n'

import '../styles.css'

const es = getDict(DEFAULT_LANG)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: es.meta.siteName },
      { name: 'description', content: es.meta.description },
      { name: 'theme-color', content: '#0a1a33' },
      { property: 'og:title', content: es.meta.siteName },
      { property: 'og:description', content: es.meta.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/.netlify/images?url=/img/hero.png&w=1200&fm=jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Manrope:wght@400;500;600;700;800&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const params = useParams({ strict: false }) as { lang?: string }
  return (
    <html lang={isLang(params.lang) ? params.lang : DEFAULT_LANG}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-navy-900 px-5 text-center text-white">
      <p className="font-display text-7xl text-gold-400">404</p>
      <p className="mt-4 text-white/70">Página no encontrada · Page not found</p>
      <Link to="/$lang" params={{ lang: DEFAULT_LANG }} className="mt-8 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950">
        YS MIGRANOVA
      </Link>
    </div>
  )
}
