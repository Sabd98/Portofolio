# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start dev server on http://localhost:3000
npm run build   # Production build (next build)
npm run start   # Start production server on port 3000
npm run lint    # Run ESLint (next lint)
```

Package manager is bun (lockfile present), but `npm`/`yarn`/`pnpm` also work since this is a standard Next.js project.

## Architecture

A single-author portfolio site for "Sabda Avicenna" built on **Next.js 14 (App Router)** with **TypeScript** and a hybrid styling system.

### Tech stack
- **Next.js 14.2.7** App Router with TypeScript strict mode
- **Tailwind CSS 3.4** + **SCSS** (mixed; per-section styles in `styles/`, Tailwind for utilities)
- **MUI v6** (`@mui/material`, `@mui/lab` Timeline) for the About section, project cards, modal, and dark theme wiring
- **Framer Motion 12** for scroll-triggered fade animations
- **@iconify/react** for all icons (used via `Icon` from `@iconify/react/dist/iconify.js`)
- **Public Sans** Google Font (loaded in `app/layout.tsx`)
- Path alias `@/*` → repo root (`tsconfig.json`)

### Routes (`app/`)
- `/` — Home: Hero, About, Skills, Contact sections stacked with scroll-spy anchors (`#home`, `#about`, `#skills`, `#contact`)
- `/project` — Featured Projects grid (company projects)
- `/personal` — Personal Projects grid (24 small projects, paginated 4 at a time)
- `app/layout.tsx` wraps every page in `ThemeProvider` + `ScrollProgress` + `ResponsiveNav` + `Footer`

### Component layout (`components/`)
```
Helper/                 # Cross-cutting primitives
  ThemeContext.tsx       # Light/dark via localStorage + class on <html>, exposes useTheme()
  useActiveSection.ts    # Scroll-spy via IntersectionObserver (HEADER_OFFSET=48)
  ScrollProgress.tsx     # Fixed top progress bar (home route only)
  FadeInSection{Left,Right,Y}.tsx  # Framer Motion fade-in wrappers (useInView, once)
  Helper.tsx             # SectionHeading (centered h2 with full-width bg band)
  TechStackList.tsx      # Chip list for techstacks (+N More collapse)
  TechstackFormatter.tsx # Plain-text techstack with Show More toggle

Home/                    # Sections rendered on `/`
  Home.tsx               # Maps SECTION_IDS to Hero/About/Skills/Contact children
  Hero/About/Skills/Contact/Footer  # Self-contained section components
  Navbar/                # ResponsiveNav (desktop + mobile nav w/ active state)
  Project/               # FeaturedProject + FeaturedProjectCard + ProjectModal (used on /project)
  Personal/              # Project + ProjectCard (used on /personal)
```

### Data shape (`Data/data.ts` — single source of truth)
- `BaseInfo` — name, position, description, profilePic
- `aboutInfo` — about-me title + description
- `timelineInfo[]` — work history entries (year, company, position, description, chipColor)
- `mainProjectData[]` — featured projects (id, url, image, title, year, company, techstacks, description)
- `projectData[]` — 24 personal projects (id, image, url, source, title, techstacks)
- `skillsData[]` — `{ id, title, image, source }` — used by SkillCard flip card
- `contactData` — phone/email/address/instagram/facebook/linkedin

**Techstack string convention:** `"Techstacks:Name1,Name2,Name3"` — parsed by stripping the `Techstacks:` prefix then splitting on `,`. Used by both `TechStackList` (chips) and `TechstackFormatter` (text).

### Nav links (`constant/navs.ts`)
Each entry has `url` starting with `#` (in-page anchor) or `/path` (route). `Nav.tsx` and `MobileNav.tsx` handle the dual behavior — when off `/`, hash links are rewritten to `/#anchor`; `handleScroll` does smooth scroll only when on home route.

### Theme/dark mode
`ThemeProvider` in `components/Helper/ThemeContext.tsx` owns theme state. It toggles `dark` class on `<html>` (read by Tailwind's `darkMode: "class"`) and creates an MUI palette so MUI components auto-adapt. Primary color `#3b82f6`. Theme persists to `localStorage` under key `theme`.

### Scroll-spy & progress bar
- `useActiveSection(ids)` returns the id of the section currently "in view" using `IntersectionObserver` with thresholds `[0, 0.25, 0.5, 0.75, 1]` and a `HEADER_OFFSET = 48` for the fixed nav. Seeding logic on mount checks URL hash first, then scroll position.
- `ScrollProgress` is only shown on `/` — it computes fill % from `firstSection.offsetTop` to `lastSection.offsetBottom`, writes width to DOM directly (rAF-throttled) to avoid re-renders, only updates React state on ≥0.5% changes.

## Conventions
- Pages are server components by default; interactive bits add `"use client"` (e.g. `Home.tsx`, `Project.tsx`, `FeaturedProject.tsx`, all of `Navbar/`, `Helper/useActiveSection.ts`, `Helper/ScrollProgress.tsx`, `Helper/ThemeContext.tsx`).
- Section IDs (`home`, `about`, `skills`, `contact`) MUST match the `HOME_IDS` arrays in `Home.tsx` and `ResponsiveNav.tsx` — both lists are duplicated; update both when adding sections.
- `[id]` global CSS rule sets `scroll-margin-top: 15vh` so hash navigation clears the fixed nav.
- Assets live in `public/images/`. The CV download uses `/myCV.pdf` in the hero.
- `next.config.mjs` configures `file-loader` for `.pdf` imports (currently the CV is referenced by absolute path, but the loader is in place if you start importing PDFs).
- Icons: import from `@iconify/react/dist/iconify.js` (the specific subpath used throughout — keep consistent).
- MUI buttons override `textTransform: "none"` via theme + per-component `sx`.

## Build artifacts
- `.next/`, `.vercel/`, `node_modules/` are gitignored.
- Tailwind content scan: `./app/**/*.{js,ts,jsx,tsx,scss}` and `./components/**/*.{js,ts,jsx,tsx,scss}` — adding SCSS outside these paths means styles won't be picked up.