import { createFileRoute, redirect } from '@tanstack/react-router'
import { DEFAULT_LANG } from '@/i18n'

// El español es el idioma principal: la raíz redirige a /es.
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/$lang', params: { lang: DEFAULT_LANG } })
  },
})
