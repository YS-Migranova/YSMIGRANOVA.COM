import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Briefcase, GraduationCap, Landmark, Rocket, Stamp, Users } from 'lucide-react'
import { useI18n } from '@/i18n'
import { img } from '@/lib/site'

export const SERVICE_ICONS: Record<string, typeof Stamp> = {
  visados: Stamp,
  familia: Users,
  trabajo: Briefcase,
  estudios: GraduationCap,
  nacionalidad: Landmark,
  emprendedores: Rocket,
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  image?: string
  children?: ReactNode
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
      {image && (
        <img
          src={img(image, 1600)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/40" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="rise rise-1 mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        {children && <div className="rise rise-3 mt-8">{children}</div>}
      </div>
      <div className="gold-rule absolute inset-x-0 bottom-0" />
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow: string
  title: string
  intro?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} ${light ? 'on-dark' : ''} max-w-2xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink/70'}`}>{intro}</p>}
    </div>
  )
}

export function GoldButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 ${className}`}
    >
      {children}
    </span>
  )
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  const { lang, t } = useI18n()
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="on-dark relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-white md:px-16">
        <svg className="absolute -right-10 -top-10 h-72 w-72 opacity-20" viewBox="0 0 200 200" aria-hidden="true">
          <path d="M10 150 Q100 20 190 150" fill="none" stroke="#c9a24b" strokeWidth="2" />
          <path d="M30 150 Q100 50 170 150" fill="none" stroke="#c9a24b" strokeWidth="1" />
        </svg>
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/$lang/consultas" params={{ lang }} hash="reservar">
              <GoldButton>
                {t.common.bookConsultation} <ArrowRight className="h-4 w-4" />
              </GoldButton>
            </Link>
            <Link
              to="/$lang/contacto"
              params={{ lang }}
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold hover:border-gold-400 hover:text-gold-300"
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
