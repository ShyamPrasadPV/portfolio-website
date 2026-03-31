# Front-End Developer Portfolio

Single-page portfolio for **Shyam Prasad**, built with Next.js. Dark theme, scroll-driven motion, and copy sourced from one TypeScript module so the site stays easy to update.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | [React](https://react.dev/) 19, [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4, shared tokens in `app/globals.css` |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Components | Portfolio sections under `components/portfolio/`; primitives (`badge`, `button`, `sheet`, etc.) under `components/ui/` with [Base UI](https://base-ui.com/) / shadcn-style setup |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) and [Fira Code](https://fonts.google.com/specimen/Fira+Code) via `next/font` |

## Project structure

```
app/
  layout.tsx      — Root layout, metadata, font variables, dark class
  page.tsx        — Composes all sections (home only)
  globals.css     — Tailwind imports, theme tokens, portfolio-specific CSS variables
components/
  portfolio/      — Navbar, hero, experience, projects, skills, about, contact, footer, cursor glow, back-to-top, motion helpers
  ui/             — Reusable UI primitives
lib/
  content.ts      — Site name, links, nav, hero stats, experience, projects, skills, about cards
  rich-text.tsx   — Renders inline **bold** strings from content
  utils.ts        — Class name helpers (e.g. `cn`)
```

## Features

- **Hero** — Headline, CTAs, animated stat counters, availability-style badge, scroll cue
- **Experience** — Role at Pixbit Solutions with timeline and bullet achievements
- **Projects** — Four featured case studies with challenge, contributions (rich text), and stack tags; card interactions
- **Skills** — Grouped categories with highlighted core tags
- **About** — Bio and stacked stat cards
- **Contact** — CTA with email and social links (from `lib/content.ts`)
- **Footer** — Nav and copyright
- **Navbar** — Section links, mobile sheet menu, scroll-aware styling
- **Back to top** — Appears after scrolling
- **Cursor glow** — Desktop-only radial follow effect
- **Motion** — Section reveals and other Framer Motion–based polish

## Getting started

Requirements: Node.js 20+ recommended (matches `@types/node` in the repo).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | ESLint |

## Customising the site

1. **Copy and links** — Edit `lib/content.ts` (`site`, `navLinks`, `heroStats`, `experience`, `projects`, `skillGroups`, `aboutCards`). Contribution lines support `**bold**` via `lib/rich-text.tsx`.
2. **SEO / tab title** — `app/layout.tsx` uses `site.title` and `site.description` from `content.ts` for metadata.
3. **Colours and theme** — Adjust CSS variables in `app/globals.css` (`:root`, portfolio tokens such as `--portfolio-cyan` and `--portfolio-purple`).
4. **Layout and sections** — Change composition in `app/page.tsx` or individual files under `components/portfolio/`.

## Design tokens (reference)

Portfolio accents and surfaces are aligned with the original palette, now expressed as CSS variables in `globals.css`:

| Token | Typical use |
|-------|-------------|
| Background `#080c14` | Page background |
| Card / surface `#0f1623` | Panels and cards |
| Accent cyan `#00d4ff` | Primary accent, links, focus |
| Accent purple `#7c3aed` | Secondary accent |

## Possible next steps

- Contact form backed by a service (e.g. Formspree, Resend, or similar)
- Downloadable CV / resume
- Project imagery or carousel
- Light mode variant (theme toggle)
