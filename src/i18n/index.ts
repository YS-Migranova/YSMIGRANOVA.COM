import { useParams } from '@tanstack/react-router'
import es, { type Dict } from './es'
import en from './en'
import nl from './nl'
import fr from './fr'

export const LANGS = ['es', 'nl', 'en', 'fr'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'es'

export const LANG_LABELS: Record<Lang, string> = {
  es: 'Español',
  nl: 'Nederlands',
  en: 'English',
  fr: 'Français',
}

const LOCALES: Record<Lang, string> = { es: 'es-ES', nl: 'nl-NL', en: 'en-GB', fr: 'fr-FR' }

const dictionaries: Record<Lang, Dict> = { es, nl, en, fr }

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as ReadonlyArray<string>).includes(value)
}

export function getDict(lang: string | undefined): Dict {
  return dictionaries[isLang(lang) ? lang : DEFAULT_LANG]
}

export function formatDate(iso: string, lang: Lang) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(LOCALES[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** Current language (from the /$lang URL segment) and its dictionary. */
export function useI18n() {
  const params = useParams({ strict: false }) as { lang?: string }
  const lang: Lang = isLang(params.lang) ? params.lang : DEFAULT_LANG
  return { lang, t: dictionaries[lang] }
}

export type { Dict }
