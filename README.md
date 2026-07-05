# Sabda Avicenna — Portfolio

A personal portfolio site showcasing professional experience, skills, and projects — both company work and personal side projects. Built as a modern single-page Next.js application with dark mode, smooth scroll-spy navigation, and section-level animations.

> Author: Sabda Avicenna
> Status: Production portfolio, actively maintained

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + SCSS (hybrid) |
| UI Library | Material UI v6 (`@mui/material`, `@mui/lab` for Timeline) |
| Animations | Framer Motion 12 |
| Icons | Iconify (via `@iconify/react`) |
| Font | Public Sans (Google Fonts) |
| Package Manager | Bun (lockfile committed), npm/yarn/pnpm compatible |
| Container | Docker (multi-stage: Bun builder → Node 20 Alpine runner) |

---

## Features

- **Single-page Home** with anchor-based navigation (`#home`, `#about`, `#skills`, `#contact`)
- **Featured Projects** (`/project`) — curated company work with year-based filtering
- **Personal Projects** (`/personal`) — 24 side projects, paginated 4 per page with tech-stack filtering
- **Dark / Light mode** with `localStorage` persistence
- **Scroll progress bar** on the home route
- **Responsive nav** (desktop + mobile drawer) with active-section highlighting
- **Downloadable CV** from the hero section
- **Flip-card skill tiles** + category filtering
- **Career timeline** built with MUI Timeline

---

## Project Structure

```
.
├── app/                       # Next.js App Router pages
│   ├── layout.tsx             # Root layout (ThemeProvider, Nav, Footer)
│   ├── page.tsx               # Home (Hero + About + Skills + Contact)
│   ├── project/page.tsx       # Featured projects
│   └── personal/page.tsx      # Personal projects
├── components/
│   ├── Shared/                # Cross-cutting primitives
│   │   ├── ThemeContext.tsx   # Light/dark theme provider
│   │   ├── ScrollProgress.tsx # Top progress bar (home only)
│   │   ├── FadeInSection*.tsx # Framer Motion fade-in wrappers
│   │   ├── TechStackList.tsx  # Chip list for techstacks
│   │   ├── TechstackFormatter.tsx  # Plain-text techstack
│   │   ├── SectionHeading.tsx
│   │   ├── TypewriterText.tsx
│   │   ├── QuoteSection.tsx
│   │   └── ScrollToTop.tsx
│   └── Home/
│       ├── Home.tsx           # Section orchestrator
│       ├── Hero/              # Hero section (photo, title, CV download)
│       ├── About/             # About + MUI Timeline for career
│       ├── Skills/            # Skills grid + CategoryFilter + SkillCard
│       ├── Contact/           # Contact details + social links
│       ├── Footer/
│       ├── Navbar/            # ResponsiveNav, Nav, MobileNav
│       ├── Project/           # FeaturedProject + ProjectModal (used on /project)
│       └── Personal/          # Project + ProjectCard + filterProjects
├── data/
│   └── data.ts                # Single source of truth for all content
├── constant/
│   └── navs.ts                # Nav link definitions
├── styles/                    # Custom SCSS (per-section + nav)
├── public/
│   ├── images/                # Project photos, profile pic, skill icons
│   └── myCV.pdf               # Resume download
├── Dockerfile                 # Multi-stage Bun → Node Alpine build
├── build.sh                   # One-liner: docker build + run
├── next.config.mjs            # output: 'standalone' for Docker
└── package.json
```

---

## Running Locally

### Prerequisites
- Node.js 18+ (Node 20 recommended for the Docker image)
- Bun (recommended) or npm/yarn/pnpm
- Docker (optional, only for the containerized workflow)

### Option 1: Local development (no Docker)

```bash
# 1. Install dependencies
bun install
# or: npm install / yarn install / pnpm install

# 2. Start dev server (hot reload)
bun run dev          # → http://localhost:3000

# 3. Production build & run
bun run build
bun run start        # → http://localhost:3000

# 4. Lint
bun run lint
```

### Option 2: Local Docker

The repository ships with a `Dockerfile` (multi-stage: Bun builder → Node 20 Alpine runner) and a `build.sh` helper.

```bash
# One-liner: build image + run container (port 3000)
./build.sh

# Or step by step
docker build -t portofolio .
docker run --rm -p 3000:3000 portofolio

# View logs while running
docker logs -f portofolio

# Stop the container
docker stop $(docker ps -q -f name=portofolio)
```

> The `build.sh` script will fail fast with `Docker is not running.` if Docker Desktop / daemon isn't active.

---

## Editing Content

Almost all site content lives in **`data/data.ts`** — name, bio, timeline, skills, featured projects, and personal projects. Update that file and changes flow through to every section. No code changes required for routine content edits.

Adding a new section to the home page? Update the section ID arrays in **both** `components/Home/Home.tsx` and `components/Home/Navbar/ResponsiveNav.tsx`.

---

## Deployment

The Next.js standalone output is Docker-ready out of the box. For Vercel, push to a Git remote and import the repo — no configuration required.

For a custom Docker host, build and push the image to your registry:

```bash
docker build -t your-registry/portofolio:latest .
docker push your-registry/portofolio:latest
```

---

## License

Private project — all rights reserved by Sabda Avicenna.
