# YS MIGRANOVA – Soluciones Migratorias Europeas

> «Tu puente seguro hacia nuevas oportunidades en Europa»

Web corporativa multilingüe de YS MIGRANOVA, una asesoría migratoria europea. El español es el idioma principal y la web está traducida también al neerlandés, inglés y francés.

## Páginas

| Ruta | Página |
| --- | --- |
| `/es` | Inicio |
| `/es/servicios` | Servicios migratorios |
| `/es/consultas` | Consultas virtuales + formulario de reserva |
| `/es/nosotros` | Sobre nosotros |
| `/es/noticias` y `/es/noticias/:slug` | Noticias |
| `/es/contacto` | Contacto + formulario |
| `/es/portal` | Vista previa del portal privado de clientes |

Cada página existe en `/es`, `/nl`, `/en` y `/fr`. La raíz `/` redirige a `/es`.

## Tecnologías

- TanStack Start (React 19) con renderizado en servidor, desplegado en Netlify
- Tailwind CSS v4 (paleta azul marino, dorado y blanco en `src/styles.css`)
- Netlify Forms para los formularios de contacto y de consulta virtual
- Netlify Image CDN para servir las imágenes optimizadas

## Desarrollo local

```bash
pnpm install
netlify dev        # o: pnpm dev
```

## Contenido y traducciones

Todos los textos están en `src/i18n/`: `es.ts` es el diccionario principal y define la estructura; `nl.ts`, `en.ts` y `fr.ts` deben tener exactamente las mismas claves. Los datos de contacto (correo, teléfono, WhatsApp) están en `src/lib/site.ts`.

## Próximos pasos

El portal privado de clientes y el panel de administración con Supabase están planificados en [PLAN.md](./PLAN.md).
