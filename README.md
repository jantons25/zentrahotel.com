# Zentra Hotel — Sitio web

Frontend del sitio público de Zentra Hotel (Chiclayo, Perú), construido con Next.js (App Router), TypeScript, Tailwind CSS v4 y shadcn/ui bajo una arquitectura basada en features, preparada para evolucionar hacia una plataforma empresarial (ERP / PMS / CRM).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` |
| `npm run build` | Build de producción (SSG) |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npm run format` | Prettier sobre todo el proyecto |

## Arquitectura

```
src/
├── app/          # Routing, layouts, metadata, sitemap y robots (sin lógica de negocio)
├── features/     # Módulos de dominio autocontenidos (home, rooms, offers, services, ...)
│   └── <feature>/
│       ├── components/   # Componentes propios del feature
│       ├── data/         # Contenido tipado (futura API)
│       └── types/        # Tipos del feature
├── components/
│   ├── ui/       # Primitivas shadcn/ui (generadas; no modificar a mano)
│   ├── layout/   # Header, Footer, navegación
│   └── common/   # Section, Container, WaveDivider, flotantes, etc.
├── config/       # site.ts (identidad, contacto, navegación) y fonts.ts
├── lib/          # Utilidades (whatsapp, seo/jsonld, cn)
├── types/        # Tipos globales compartidos
├── stores/       # Reservado para Zustand
└── services/     # Reservado para la capa de API
```

Regla de dependencias: `app → features → shared (components/lib/config)`. Nunca al revés y nunca entre features.

## Design tokens

Todos los colores, radios, sombras, z-index y duraciones viven como variables CSS en `src/app/globals.css` (con mapa dark mode preparado). No hardcodear valores: usar los tokens semánticos (`primary`, `secondary`, `muted`, `shadow-card`, ...).

## Contenido

Los textos e imágenes se centralizan en `src/config/site.ts` y en `features/*/data/*.ts`. Al integrar el backend, esos archivos se sustituyen por llamadas de la capa `services/` sin tocar componentes.
