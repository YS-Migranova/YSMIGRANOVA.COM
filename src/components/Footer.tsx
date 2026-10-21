import { Link } from '@tanstack/react-router'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { useI18n } from '@/i18n'
import { SITE } from '@/lib/site'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Footer() {
  const { lang, t } = useI18n()
  const links = [
    { to: '/$lang/servicios', label: t.nav.services },
    { to: '/$lang/consultas', label: t.nav.consultations },
    { to: '/$lang/nosotros', label: t.nav.about },
    { to: '/$lang/noticias', label: t.nav.news },
    { to: '/$lang/contacto', label: t.nav.contact },
    { to: '/$lang/portal', label: t.nav.portal },
  ] as const

  return (
    <footer className="on-dark bg-navy-950 text-white/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-gold-300">«{t.tagline}»</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{t.footer.about}</p>
          <div className="mt-6 inline-block">
            <LanguageSwitcher />
          </div>
        </div>
        <div>
          <h2 className="eyebrow mb-5">{t.footer.explore}</h2>
          <ul className="space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} params={{ lang }} className="transition hover:text-gold-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-5">{t.footer.contact}</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-500" aria-hidden="true" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-500" aria-hidden="true" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold-300">
                <MessageCircle className="h-4 w-4 text-gold-500" aria-hidden="true" /> WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs">{t.contact.hours}</p>
        </div>
      </div>
      <div className="gold-rule opacity-40" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/50 md:flex-row md:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} YS MIGRANOVA – Soluciones Migratorias Europeas. {t.footer.rights}
        </p>
        <p className="max-w-xl md:text-right">{t.footer.disclaimer}</p>
      </div>
    </footer>
  )
}
