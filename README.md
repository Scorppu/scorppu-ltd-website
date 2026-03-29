# Scorppu Ltd Website

Personal portfolio and creative hub for Scorppu and friends. Built with Next.js.

## Pages

- `/` — Home page with hero and gallery section
- `/about` — About Scorppu Ltd
- `/team` — Meet the team
- `/team/<handle>` — Individual team member profiles
- `/gallery` — Gallery of projects and builds
- `/contact` — Contact page

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [react-icons](https://react-icons.github.io/react-icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Team Data

Team member data lives in `src/data/`. Members listed in `team-hidden.json` are not shown on the public team page but have profile pages accessible via their slug.
