# CLAUDE.md — Agent Context for scorppu-ltd-website

## Project Overview

This is the personal portfolio and group website for Scorppu Ltd — a collective of friends.
It is built with **Next.js 15 (App Router)** and **React 19**, written in **TypeScript**,
and styled with **Tailwind CSS v4**. The site is deployed on **Cloudflare Pages**, configured
manually (not via the Cloudflare CLI or `create-cloudflare`).

---

## Tech Stack

| Layer            | Technology                              |
|------------------|-----------------------------------------|
| Framework        | Next.js 15 (App Router, Turbopack)      |
| UI Library       | React 19                                |
| Language         | TypeScript 5                            |
| Styling          | Tailwind CSS v4                         |
| Icons            | react-icons v5                          |
| Deployment       | Cloudflare Pages (manually configured)  |
| Database         | Cloudflare D1 (SQLite-compatible)       |

---

## Repository Structure

```
scorppu-ltd-website/
├── src/
│   ├── app/
│   │   ├── (content)/              # Route group for main site content
│   │   │   ├── (team)/             # Team member profile pages
│   │   │   ├── about/              # About page
│   │   │   ├── contact/            # Contact page
│   │   │   ├── gallery/            # Gallery page
│   │   │   └── layout.tsx          # Shared layout (NavBar, Footer)
│   │   ├── api/                    # Route Handlers for server-side logic
│   │   ├── page.tsx                # Root landing/home page
│   │   ├── layout.tsx              # Root layout (fonts, metadata)
│   │   └── globals.css             # Global Tailwind styles
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── NavBar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ThemeToggle.tsx             # Dark/light mode toggle (client component)
│   │   └── team/                   # Team-specific components
│   ├── data/                       # Static data (TypeScript objects)
│   └── types/                      # Shared TypeScript type definitions
├── public/                         # Static assets
├── docs/                           # Project documentation
├── migrations/                     # Cloudflare D1 SQL migration files
├── middleware.ts                   # Next.js middleware (edge-compatible only)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

---

## Coding Conventions

- Use the **Next.js App Router** exclusively. Do not use the Pages Router.
- All components are **React Server Components by default**.
  Only add `"use client"` when interactivity or browser APIs are explicitly required.
- Use **TypeScript** for all files. Avoid `any`; define proper types in `src/types/`.
- Style with **Tailwind CSS utility classes** only.
  Do not write custom CSS unless absolutely necessary.
- Route groups (folders in parentheses like `(content)`) share layouts without affecting
  URL paths. Follow this pattern when adding new sections.
- Keep reusable UI in `src/components/`. Page-specific logic stays in `page.tsx`.
- Static data (e.g. team member info) lives in `src/data/` as TypeScript objects.

---

## Cloudflare Pages Integration

The project targets **Cloudflare Pages** and was made compatible manually —
not via `create-cloudflare` or the Wrangler CLI scaffold. Respect this setup.

### Runtime constraints
- Do **not** use Node.js-only APIs. Use Web APIs (`fetch`, `Request`, `Response`,
  `crypto`, etc.) everywhere, as Cloudflare Pages runs on the Workers edge runtime.
- Allowed Node.js built-ins (via Workers compatibility): `buffer`, `events`,
  `assert`, `util`, `async_hooks`.

### Cloudflare D1
- Access D1 via Cloudflare's `env.DB` binding in Server Components or Route Handlers.
  Never access D1 from client components.
- Place SQL migration files in `/migrations/` as numbered `.sql` files
  (e.g. `0001_create_users.sql`).
- Use `wrangler d1 execute` for local D1 development.
- Configure the D1 binding in `wrangler.toml` (or the Cloudflare Pages dashboard).

### Middleware
- `middleware.ts` at the project root is supported on Cloudflare Pages.
- Only use **edge-compatible** code in middleware. Do **not** use Node.js runtime
  in middleware (Next.js 15.2+ Node.js middleware is not yet supported on Cloudflare).

### Environment variables
- Secrets are managed via the Cloudflare Pages dashboard for production.
- Use `.dev.vars` locally for secrets. Never commit `.dev.vars` or any secrets.

---

## Dark Mode

The site supports user-controlled dark mode via a toggle in the navigation.

- **Mechanism**: Tailwind v4 class-based dark mode using `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`. The `dark` class is toggled on `<html>`.
- **Persistence**: The user's preference is stored in `localStorage` under the key `'theme'` (`'dark'` or `'light'`).
- **Anti-FOUC**: An inline `<script>` in `<head>` (in `src/app/layout.tsx`) reads `localStorage` and applies the `dark` class before first paint. Falls back to `prefers-color-scheme` if no preference is stored.
- **Toggle component**: `src/components/ThemeToggle.tsx` — a `"use client"` component placed in both `Header` and `NavBar`.
- **Palette**: Warm stone-family dark theme. Key mappings:
  - Page backgrounds: `bg-white` → `dark:bg-stone-950`
  - Elevated sections: `bg-stone-50` → `dark:bg-stone-900`
  - Cards: `bg-white` → `dark:bg-stone-800`
  - Primary text: `text-black` → `dark:text-stone-100`
  - Muted text: `text-stone-600` / `text-gray-500` → `dark:text-stone-400`
  - Borders: `border-stone-200` → `dark:border-stone-700`
  - Nav separator: `shadow-md` in light → `border-b border-stone-800` in dark (avoids lighter-than-background shadow glow)
- When adding new UI, always include `dark:` variants for any background, text, or border color classes.

---



```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## Agent Guidelines

- Default to **Server Components** and server-side data fetching.
  Only reach for `"use client"` when truly necessary.
- Keep the bundle lean — justify any new dependency before adding it.
- When adding new pages, follow the existing route group pattern under
  `src/app/(content)/`.
- When adding new reusable UI, place it in `src/components/` with a PascalCase filename.
- Run `npm run lint` before considering any task complete.
- Make **incremental, focused changes**. One PR per feature or fix.
- Never hard-code secrets or environment variables in source files.
