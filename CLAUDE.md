# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start dev server on http://localhost:3000
npm run build   # Production build (next build)
npm run start   # Start production server on port 3000
npm run lint    # Run ESLint (next lint)
```

### Docker

```bash
# Build.sh — one-liner: build + run in a single command
./build.sh

# Manual docker workflow
docker build -t portofolio .                     # Build image
docker run --rm -p 3000:3000 portofolio          # Run container (port 3000)
docker ps                                        # Check running containers
docker logs -f portofolio                        # View container logs (follow)
docker inspect portofolio                        # Inspect image/container metadata
docker exec -it <container_id> sh                # Shell into running container
docker stop $(docker ps -q -f name=portofolio)   # Stop container by name filter
docker rmi portofolio                            # Remove image
```

The Dockerfile uses a multi-stage build: `oven/bun:1-alpine` for build stage, `node:20-alpine` for the runner. `next.config.mjs` has `output: 'standalone'` so the final image only needs `.next/standalone`, `.next/static`, and `public/`.

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
Shared/                  # Cross-cutting primitives
  ThemeContext.tsx       # Light/dark via localStorage + class on <html>, exposes useTheme()
  ScrollProgress.tsx     # Fixed top progress bar (home route only)
  FadeInSection{Left,Right,Y}.tsx  # Framer Motion fade-in wrappers (useInView, once)
  SectionHeading.tsx     # Centered h2 with full-width bg band
  TechStackList.tsx      # Chip list for techstacks (+N More collapse)
  TechstackFormatter.tsx # Plain-text techstack with Show More toggle
  TypewriterText.tsx     # Typewriter animation effect
  QuoteSection.tsx       # Static quote section rendered on home
  ScrollToTop.tsx        # Scroll-to-top floating button

Home/                   # Sections rendered on `/`
  Home.tsx              # Maps SECTION_IDS to Hero/About/Skills/Contact children
  Hero/                 # Hero section (photo, name, typewriter title, CV download)
  About/                # About section (MUI Timeline for career)
  Skills/               # Skills grid with flip cards + category filter
  Contact/              # Contact info (phone/email/address/socials)
  Footer/               # Site footer
  Navbar/               # ResponsiveNav (desktop Nav + MobileNav)
  Project/              # FeaturedProject + FeaturedProjectCard + ProjectModal (used on /project)
  Personal/             # Project + ProjectCard + filterProjects (used on /personal)
```

### Data shape (`data/data.ts` — single source of truth)
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
`ThemeProvider` in `components/Shared/ThemeContext.tsx` owns theme state. It toggles `dark` class on `<html>` (read by Tailwind's `darkMode: "class"`) and creates an MUI palette so MUI components auto-adapt. Primary color `#3b82f6`. Theme persists to `localStorage` under key `theme`.

### Scroll-spy & progress bar
- `useActiveSection(ids)` (in `components/Shared/` conceptually; see `Home/`) returns the id of the section currently "in view" using `IntersectionObserver` with thresholds `[0, 0.25, 0.5, 0.75, 1]` and a `HEADER_OFFSET = 48` for the fixed nav. Seeding logic on mount checks URL hash first, then scroll position.
- `ScrollProgress` is only shown on `/` — it computes fill % from `firstSection.offsetTop` to `lastSection.offsetBottom`, writes width to DOM directly (rAF-throttled) to avoid re-renders, only updates React state on ≥0.5% changes.

### Filtering
- **Personal projects** (`/personal`) supports pagination (4 per page) + tech-based filtering; logic lives in `components/Home/Personal/filterProjects.ts`.
- **Featured projects** (`/project`) supports year-based filtering via `YearFilter`.
- **Skills** (`/`) supports category filtering via `CategoryFilter`.

## Conventions
- Pages are server components by default; interactive bits add `"use client"` (e.g. `Home.tsx`, `FeaturedProject.tsx`, all of `Navbar/`, `Shared/ThemeContext.tsx`, `Shared/ScrollProgress.tsx`).
- Section IDs (`home`, `about`, `skills`, `contact`) MUST match the `HOME_IDS` arrays in `Home.tsx` and `ResponsiveNav.tsx` — both lists are duplicated; update both when adding sections.
- `[id]` global CSS rule sets `scroll-margin-top: 15vh` so hash navigation clears the fixed nav.
- Assets live in `public/images/`. The CV download uses `/myCV.pdf` in the hero.
- `next.config.mjs` configures `file-loader` for `.pdf` imports (currently the CV is referenced by absolute path, but the loader is in place if you start importing PDFs).
- Icons: import from `@iconify/react/dist/iconify.js` (the specific subpath used throughout — keep consistent).
- MUI buttons override `textTransform: "none"` via theme + per-component `sx`.

## Styling
- Tailwind handles utility classes with `darkMode: "class"` (configured in `tailwind.config.ts`).
- Custom SCSS lives in `styles/`: per-section files in `styles/contents/` (hero, about, skills, contact) plus nav-related styles in `styles/nav.scss` and `styles/mobile_nav.scss`.
- `app/globals.css` imports Tailwind directives.

## Static assets
- `public/images/` — project photos, profile pic, skill icons
- `public/myCV.pdf` — resume download

## Build artifacts
- `.next/`, `.vercel/`, `node_modules/` are gitignored.
- Tailwind content scan: `./app/**/*.{js,ts,jsx,tsx,scss}` and `./components/**/*.{js,ts,jsx,tsx,scss}` — adding SCSS outside these paths means styles won't be picked up.

## No test framework
- This project has no test runner configured. No Jest/Vitest/Playwright present.