// Datos de contacto públicos. Sustituir por los datos reales de la empresa.
export const SITE = {
  name: 'YS MIGRANOVA',
  email: 'contacto@ysmigranova.com',
  phone: '+34 600 000 000',
  whatsapp: 'https://wa.me/34600000000',
}

/** Optimised image through the Netlify Image CDN. */
export function img(name: string, width: number) {
  return `/.netlify/images?url=/img/${name}.png&w=${width}&fm=webp&q=75`
}

/** Per-page <title>, e.g. "Servicios | YS MIGRANOVA". */
export function pageTitle(title: string) {
  return { meta: [{ title: `${title} | ${SITE.name}` }, { property: 'og:title', content: `${title} | ${SITE.name}` }] }
}
