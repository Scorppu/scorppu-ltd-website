# CLAUDE.md — Agent Context for scorppu-ltd-website

## Project Overview

Personal portfolio website for **Eugene Chan** (handle: Scorppu).
Built with **Next.js 15 (App Router)** and **React 19**, written in **TypeScript**,
and styled with **Tailwind CSS v4**. Deployed on **Cloudflare Pages**, configured
manually (not via the Cloudflare CLI or `create-cloudflare`).

---

## Tech Stack

| Layer            | Technology                              |
|------------------|-----------------------------------------|
| Framework        | Next.js 15 (App Router, Turbopack)      |
| UI Library       | React 19                                |
| Language         | TypeScript 5                            |
| Styling          | Tailwind CSS v4                         |
| Deployment       | Cloudflare Pages (manually configured)  |
| Database         | Cloudflare D1 (SQLite-compatible)       |

---

## Repository Structure

```
scorppu-ltd-website/
├── src/
│   ├── app/
│   │   ├── (content)/
│   │   │   ├── scorppu/            # Personal CV page
│   │   │   └── layout.tsx          # Shared layout (SiteHeader, SiteFooter)
│   │   ├── page.tsx                # Homepage cover
│   │   ├── layout.tsx              # Root layout (fonts, metadata)
│   │   └── globals.css             # Global Tailwind + motion styles
│   ├── components/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── SignatureMark.tsx
│   │   ├── home/                   # Homepage sections
│   │   └── portfolio/              # CV page sections
│   ├── data/
│   │   └── portfolio.ts            # Updatable portfolio content
│   └── types/
│       └── portfolio.ts
├── public/                         # Static assets (portrait, building, CV, signature, photos)
├── docs/
├── migrations/
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
  Do not write custom CSS unless absolutely necessary (motion keyframes live in `globals.css`).
- Keep reusable UI in `src/components/`. Page-specific composition stays in `page.tsx`.
- Portfolio content lives in `src/data/portfolio.ts`.

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
- Place SQL migration files in `/migrations/` as numbered `.sql` files.
- Use `wrangler d1 execute` for local D1 development.
- Configure the D1 binding in `wrangler.toml` (or the Cloudflare Pages dashboard).

### Environment variables
- Secrets are managed via the Cloudflare Pages dashboard for production.
- Use `.dev.vars` locally for secrets. Never commit `.dev.vars` or any secrets.

---

## Theme

Light-only. No dark mode toggle, no `dark:` variants, no color-scheme switching.

---

## Design Direction

- Typography-forward, near-monochrome with a warm editorial tint.
- Clean motion (welcome intro, section reveals, hover) — crafted, not theatrical.
- Main visuals: portrait (`/profilePics/scorppu.jpg`) and Scorppu Ltd Minecraft building (`/scorppultd.png`).
- Swap-ready photo slots and signature live in `src/data/portfolio.ts` (`photos`, `signature`).
- Do not invent biographical facts; update content in `src/data/portfolio.ts`.
- Cloudflare Pages: keep `.npmrc` `legacy-peer-deps=true` for `npx @cloudflare/next-on-pages@1`.

```bash
npm run dev     # Start dev server with Turbopack
npm run build   # Production build with Turbopack
npm run start   # Start production server locally
npm run lint    # Run ESLint
```

---

## Agent Guidelines

- Default to **Server Components** and server-side data fetching.
  Only reach for `"use client"` when truly necessary.
- Keep the bundle lean — justify any new dependency before adding it.
- Run `npm run lint` before considering any task complete.
- Make **incremental, focused changes**. One PR per feature or fix.
- Never hard-code secrets or environment variables in source files.
