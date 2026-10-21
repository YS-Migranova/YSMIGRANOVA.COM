# AGENTS.md – YS MIGRANOVA website

Multilingual (ES primary, NL, EN, FR) marketing site for an EU immigration consultancy. TanStack Start + React 19 + Tailwind v4 on Netlify. **Continue from [PLAN.md](./PLAN.md)** — next milestones are real content, then the Supabase client portal and admin.

## Architecture
- `src/routes/index.tsx` – redirects `/` to `/es`.
- `src/routes/$lang/route.tsx` – language layout (Header/Footer, hreflang links). Unknown `lang` → 404.
- `src/routes/$lang/*.tsx` – pages: `index` (home), `servicios`, `consultas` (booking form, `?servicio=&plan=` preselect), `nosotros`, `noticias/index`, `noticias/$slug`, `contacto`, `portal` (disabled preview of the future client portal).
- URL slugs are Spanish in every language (`/en/servicios`); only the content is translated.
- `src/i18n/` – `es.ts` is the source dictionary and exports `type Dict`; other languages are typed `Dict` and must keep identical keys/array lengths. `useI18n()` reads `lang` from URL params; `getDict(lang)` is for `head()`.
- `src/components/` – Header (nav + `LanguageSwitcher`), Footer, `ui.tsx` (PageHero, SectionHeading, CtaBand, GoldButton, service icons by service `id`), `FormStatus.tsx`.
- `src/lib/site.ts` – contact data (placeholders), `img()` Image CDN helper, `pageTitle()`.
- `src/lib/netlifyForm.ts` – AJAX submit hook for Netlify Forms.

## Forms
Netlify Forms `contacto` and `consulta-virtual`. `public/forms.html` is the static registration file and the POST target; **any field added to a React form must also be added there.** Field names are Spanish.

## Conventions
- Colours: `navy-*`, `gold-*`, `ivory`, `ink` in `src/styles.css` `@theme`. Fonts: Cormorant Garamond (`font-display`) + Manrope.
- Images live in `public/img/*.png` (AI-generated) and are always referenced through `img(name, width)`.
- Add new copy to all four dictionaries; never hardcode user-visible text in components (brand name excepted).
- Country names come from `Intl.DisplayNames`, so they are not in the dictionaries.
