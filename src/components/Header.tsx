import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Lock, Menu, X } from 'lucide-react'
import { useI18n } from '@/i18n'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { lang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  useEffect(() => setOpen(false), [pathname])

  const links = [
    { to: '/$lang', label: t.nav.home, exact: true },
    { to: '/$lang/servicios', label: t.nav.services },
    { to: '/$lang/consultas', label: t.nav.consultations },
    { to: '/$lang/nosotros', label: t.nav.about },
    { to: '/$lang/noticias', label: t.nav.news },
    { to: '/$lang/contacto', label: t.nav.contact },
  ] as const

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-navy-900/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/$lang" params={{ lang }} aria-label="YS MIGRANOVA">
          <Logo light />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              params={{ lang }}
              activeOptions={{ exact: 'exact' in l }}
              className="relative py-2 text-sm font-medium text-white/80 transition hover:text-white"
              activeProps={{ className: 'text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold-500' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <Link
            to="/$lang/portal"
            params={{ lang }}
            className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/60 px-3.5 py-2 text-xs font-semibold text-gold-300 transition hover:bg-gold-500 hover:text-navy-950"
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            {t.nav.portal}
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-white hover:bg-white/10"
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-5 pb-8 pt-4 xl:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                params={{ lang }}
                activeOptions={{ exact: 'exact' in l }}
                className="border-b border-white/10 py-3.5 font-display text-2xl text-white/85"
                activeProps={{ className: 'text-gold-400' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{t.nav.language}</p>
          <LanguageSwitcher variant="list" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              to="/$lang/consultas"
              params={{ lang }}
              hash="reservar"
              className="rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-navy-950"
            >
              {t.nav.cta}
            </Link>
            <Link
              to="/$lang/portal"
              params={{ lang }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/60 px-5 py-3 text-sm font-semibold text-gold-300"
            >
              <Lock className="h-4 w-4" aria-hidden="true" />
              {t.nav.portal}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
