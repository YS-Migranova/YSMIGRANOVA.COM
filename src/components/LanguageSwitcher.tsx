import { useRouterState } from '@tanstack/react-router'
import { Globe } from 'lucide-react'
import { LANGS, LANG_LABELS, useI18n } from '@/i18n'

/** Visible language selector: swaps the first URL segment and keeps the current page. */
export function LanguageSwitcher({ variant = 'pills' }: { variant?: 'pills' | 'list' }) {
  const { lang, t } = useI18n()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const rest = pathname.split('/').slice(2).join('/')
  const hrefFor = (l: string) => `/${l}${rest ? `/${rest}` : ''}`

  if (variant === 'list') {
    return (
      <nav aria-label={t.nav.language} className="grid grid-cols-2 gap-2">
        {LANGS.map((l) => (
          <a
            key={l}
            href={hrefFor(l)}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? 'true' : undefined}
            className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
              l === lang ? 'border-gold-500 bg-gold-500 text-navy-950' : 'border-white/15 text-white/80 hover:border-gold-400'
            }`}
          >
            <span className="mr-2 uppercase">{l}</span>
            <span className="font-normal opacity-80">{LANG_LABELS[l]}</span>
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav aria-label={t.nav.language} className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
      <Globe className="ml-1.5 mr-0.5 h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
      {LANGS.map((l) => (
        <a
          key={l}
          href={hrefFor(l)}
          hrefLang={l}
          lang={l}
          title={LANG_LABELS[l]}
          aria-current={l === lang ? 'true' : undefined}
          className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition ${
            l === lang ? 'bg-gold-500 text-navy-950' : 'text-white/75 hover:text-gold-300'
          }`}
        >
          {l}
        </a>
      ))}
    </nav>
  )
}
