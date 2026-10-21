# Hoja de ruta – YS MIGRANOVA

## 1. Web pública multilingüe ✅
Inicio, servicios, consultas virtuales, sobre nosotros, noticias y contacto en ES/NL/EN/FR, con formularios de contacto y reserva de consulta (Netlify Forms) y una vista previa del portal de clientes en `/$lang/portal`.

## 2. Contenido definitivo
- Sustituir los datos de contacto de `src/lib/site.ts` por los reales.
- Revisar precios de consultas, testimonios y textos legales (aviso legal, privacidad, cookies) y añadir esas páginas.
- Revisión de las traducciones por hablantes nativos.

## 3. Autenticación del portal (Supabase)
- Instalar `@supabase/supabase-js`; configurar `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` (ver `.env.example`) en las variables de entorno de Netlify.
- Crear `src/lib/supabase.ts` con el cliente.
- Activar el formulario de `src/routes/$lang/portal.tsx` (inicio de sesión, recuperación de contraseña).
- Proteger rutas bajo `/$lang/portal/*` con un layout que compruebe la sesión.

## 4. Datos de clientes
- Tablas: `clientes`, `expedientes` (estado, servicio, país destino), `documentos`, `mensajes`, `citas`.
- Políticas RLS para que cada cliente solo vea sus propios datos.
- Supabase Storage para la subida segura de documentos.

## 5. Panel de administración
- Rol `admin` / `asesor` en Supabase.
- Rutas `/$lang/admin/*`: listado de expedientes, cambio de estado, mensajería, calendario de citas.
- Importar las solicitudes de consulta (hoy en Netlify Forms) como citas.

## 6. Noticias gestionables
- Mover los artículos de `src/i18n/*.ts` a una tabla de Supabase con traducciones por idioma, editable desde el panel.
