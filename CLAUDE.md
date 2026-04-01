# lb-website

## Implementation Plan

### Current State
Single Next.js 16 app at project root (not monorepo). Tailwind CSS 4, React 19. No `src/` directory — files in root `app/`. The planned monorepo (`apps/web/`, `apps/api/`) and Python FastAPI backend are aspirational; this site is portfolio-only and does not need them.

### Design
Merged "Dark Manga" aesthetic combining both reference HTML files (`index2.html` + `index3.html`):
- **Background**: Deep void `#080810` + subtle halftone dot overlay + speed lines
- **Canvas FX**: Falling sakura petals + star field (from `index3.html`)
- **Structure**: Manga panel grid layouts with `1px solid rgba(232,114,154,0.2)` borders + glow (from `index2.html`)
- **Colors**: `--sakura: #e8729a`, `--cyan: #7ee8fa` on dark void
- **Fonts**: Bangers (hero/display) + Cinzel (section titles) + Raleway (body)

### File Map
```
app/
  layout.tsx        — Fonts (Bangers, Cinzel, Raleway), metadata
  page.tsx          — Composes all section components
  globals.css       — CSS vars, halftone/speed-line overlays, keyframes

components/
  CanvasBackground.tsx   — Stars + petals canvas (client), ambient glow orbs
  Navbar.tsx             — Fixed frosted-glass nav (client, scroll-aware)
  Footer.tsx             — Simple three-col footer
  sections/
    Hero.tsx             — Split manga panel: left content + right stats box
    Skills.tsx           — Infinite ticker marquee
    About.tsx            — Three manga panels: certs / story+tools / motto
    Services.tsx         — 3×2 service grid with kanji decorations
    Experience.tsx       — Vertical timeline (sakura→cyan gradient line)
    Contact.tsx          — Two-col: social links + contact form
```

### Key Decisions
- **No backend** — portfolio sites don't need FastAPI or auth; skip the monorepo structure
- **Inline styles** — used throughout for precise pixel control over the manga panel aesthetic; Tailwind only handles resets/utilities
- **`'use client'`** only where needed (CanvasBackground, Navbar) — rest are server components
- **Google Fonts via `next/font/google`** — font variables exposed as CSS custom properties

## Project Overview

lb-website is a personal or organizational website project built to serve as an online presence and information hub. It likely includes pages for showcasing content, services, or portfolio work, along with contact and navigation functionality. The project is intended to be maintained and extended over time as a primary web-facing platform.

## Tech Stack

- **Languages**: TypeScript, Python
- **Frameworks**: Next.js
- **Package Manager**: pnpm
- **Other Tools**: SQLite, Drizzle, turso

## Commands

```bash
pnpm install                        # Install dependencies
pnpm dev                            # Start dev server
pnpm build                          # Production build
pnpm test                           # Run tests
pnpm lint                           # Lint
pnpm type-check                     # Type check
```

## Code Standards

- **Formatter**: Prettier
- **Indentation**: Tabs
- **Quotes**: single
- **Exports**: Named exports preferred over default exports

## Architecture

project-root/
├── .github/                          # GitHub Actions CI/CD workflows
│   └── workflows/
│       ├── ci.yml                    # Lint, test, build pipeline
│       └── deploy.yml                # Deployment pipeline
├── apps/                             # Monorepo applications
│   ├── web/                          # Next.js frontend application
│   │   ├── public/                   # Static assets (images, fonts, icons)
│   │   ├── src/
│   │   │   ├── app/                  # Next.js App Router pages and layouts
│   │   │   │   ├── (auth)/           # Route group for auth pages
│   │   │   │   │   ├── login/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── register/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── (dashboard)/      # Route group for protected pages
│   │   │   │   │   └── dashboard/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── api/              # Next.js API route handlers
│   │   │   │   │   └── [...proxy]/   # Proxy requests to Python backend
│   │   │   │   │       └── route.ts
│   │   │   │   ├── layout.tsx        # Root layout with providers
│   │   │   │   ├── page.tsx          # Home page
│   │   │   │   └── globals.css       # Global styles
│   │   │   ├── components/           # Reusable UI components
│   │   │   │   ├── ui/               # Base design system components
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   └── index.ts      # Barrel export
│   │   │   │   ├── layout/           # Layout components (Navbar, Sidebar)
│   │   │   │   │   ├── Navbar.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   └── Footer.tsx
│   │   │   │   └── features/         # Feature-specific components
│   │   │   │       └── dashboard/
│   │   │   │           └── StatsCard.tsx
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── useFetch.ts
│   │   │   ├── lib/                  # Frontend utility libraries
│   │   │   │   ├── api-client.ts     # Typed API client (fetch wrapper)
│   │   │   │   └── utils.ts          # General helper functions
│   │   │   ├── store/                # Global state management
│   │   │   │   ├── index.ts          # Store configuration
│   │   │   │   └── slices/           # State slices (Redux or Zustand)
│   │   │   │       └── authSlice.ts
│   │   │   └── types/                # Frontend-specific TypeScript types
│   │   │       ├── api.types.ts      # API request/response types
│   │   │       └── global.d.ts       # Global type declarations
│   │   ├── .env.local                # Local environment variables
│   │   ├── next.config.ts            # Next.js configuration
│   │   ├── tailwind.config.ts        # Tailwind CSS configuration
│   │   ├── tsconfig.json             # TypeScript config for web app
│   │   └── package.json
│   │
│   └── api/                          # Python backend application (FastAPI)
│       ├── src/
│       │   ├── core/                 # Core app configuration
│

## Additional Notes

Any other instructions the AI should follow...
