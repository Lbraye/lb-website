# Progression Log

Running history of changes, decisions, and stopping points for `lb-website`.
Newest entries on top. Each entry: date, what changed, why, where we stopped.

---

## 2026-04-15 — Projects page now reflects real work

**Changed** `components/sections/Projects.tsx`. Replaced the 6 placeholder projects (Agentic AI Workflow, CUI Playbook, Phishing Sim, IAM Audit, OSINT Toolkit, Portfolio) with 6 actual repos from `~/Projects/`:

| Kanji | Title | Status | Stack |
|---|---|---|---|
| 狩 | Hunter Blue | WIP | Next.js / Drizzle / Turso |
| 選 | HB-Triage | WIP | Python / LLM |
| 輸 | Truckers Backoffice Assistant | WIP | Next.js / Claude API / Twilio |
| 癒 | Holistic Health Network | WIP | Next.js / Drizzle |
| 闘 | Fighters Row | WIP | Next.js / Stripe / NextAuth |
| 眼 | This Portfolio | Live | Next.js 16 |

Descriptions written from each repo's README + code, intentionally understated (no "revolutionary", no "cutting-edge"). github/demo URLs left empty — user to fill in when repos go public.

**Verified** `pnpm build` clean, `/projects` route still prerenders static.

---

## 2026-04-15 — Landing clips sourced from Mixkit (commercial-OK, no attribution)

**Changed**
- Downloaded 4 royalty-free clips into `public/landing/` (720p H.264, total ~20 MB):
  - `clip-01.mp4` — Black ink entering transparent liquid (8.8 MB, 26s) — Mixkit `black-ink-enter-a-transparent-liquid-medium-with-force-creating-99921`
  - `clip-02.mp4` — Japanese cherry blossom in spring (5.3 MB, 18s) — Mixkit `japanese-cherry-blossom-in-spring-48889`
  - `clip-03.mp4` — Aerial view of Tokyo city lights at night (2.4 MB, 6s) — Mixkit `aerial-view-of-tokyo-city-lights-at-night-20064`
  - `clip-04.mp4` — Flames and sparks (3.9 MB, 11s) — Mixkit `flames-and-sparks-684`

**License**
- All four are Mixkit "Free Stock Video" — commercial use allowed, no attribution required, cannot be resold as-is. See https://mixkit.co/license/.
- Files are gitignored per `/public/landing/*` rule added earlier; not committed. Redownload on fresh clones via curl commands preserved in this log.

**Why these four**
- **Demon Slayer / Naruto / AoT / FMAB are fully copyrighted** — no royalty-free source exists. The red-duotone CSS filter on the landing unifies any footage into the sakura palette, so subject matters more than origin color.
- Ink = brush strokes (most on-brand for manga), sakura = color palette anchor, Tokyo = cyberpunk cross-cut, sparks = combat-aftermath energy. Varied pacing so crossfades feel intentional.

**Verified**
- `ffprobe` confirmed all four are H.264, 1280×720, playable.
- Not yet dev-tested in a browser.

**Stopping point**
- Clips in place. Run `pnpm dev` and visit `/` to preview. Subpages (`/about` etc.) unchanged — still show petals + stars via `CanvasBackground`, per request.

**Next session should**
- Browser-preview the crossfade; if any clip feels off, swap via the same Mixkit pattern.
- Tune `landing-video` CSS filter (`hue-rotate`, `saturate`, `brightness`) if red is too dominant over the Tokyo / sparks clips.

---

## 2026-04-15 — Top-3 hardening + multi-page restructure + cinematic landing

**Changed**
- **Contact API hardened** (`app/api/contact/route.ts`):
  - Added `zod` schema with length caps (name ≤100, email ≤254, message 10–5000).
  - Honeypot field `company` — silently returns success on trip so bots don't retry.
  - Per-instance in-memory rate limit: 5 requests / 10 min per IP via `x-forwarded-for`.
  - Env guard: returns 503 with friendly message if `RESEND_API_KEY` is missing.
  - From/To addresses now env-configurable (`CONTACT_FROM_ADDRESS`, `CONTACT_TO_ADDRESS`). TODO comment flags onboarding@resend.dev deliverability.
  - Explicit `runtime = 'nodejs'` (Fluid Compute).
- **Inline-style refactor (Hero + Contact)**:
  - New utility classes in `app/globals.css`: `.mg-btn`, `.mg-btn-primary`, `.mg-btn-ghost`, `.mg-input`, `.mg-field`, `.mg-input-label`, `.mg-social`, `.mg-nav-link`, `.mg-section`, `.mg-section-hdr`, `.mg-section-title-cinzel`, `.mg-honeypot`.
  - Replaced all `onMouseEnter/Leave` hover JS on buttons, inputs, social links, and nav with CSS `:hover`. Fixes broken touch UX.
  - Added `prefers-reduced-motion` global guard.
- **Hero right panel shipped**: killed the "CHARACTER ART HERE" placeholder. Replaced with a massive faint 侍 kanji watermark + the existing dossier card (GCIH / GSEC / SEC+ / CLEARANCE / STATUS) plus Tampa coords.
- **Multi-page App Router restructure**:
  - `/` is now a dedicated landing (no nav/footer/canvas), full-bleed cinematic video background.
  - Other routes live in `app/(site)/` route group sharing `Navbar` + `CanvasBackground` + `Footer`:
    - `/about` — Hero + Skills ticker + About panels
    - `/services`, `/projects`, `/experience`, `/contact`
  - Navbar switched to Next.js `<Link>` + real routes; active-route styling via `usePathname`.
- **Landing page** (`app/page.tsx` + `components/LandingVideo.tsx`):
  - Two stacked `<video>` elements crossfading between clips (1.2s fade, advance 1.4s before end).
  - Red-duotone CSS filter (`grayscale contrast brightness sepia hue-rotate saturate`) tints any anime footage sakura-red — on-brand regardless of source.
  - HEAD-probes `/landing/clip-0{1..4}.mp4` at mount; renders only clips that exist. Gracefully falls back to a radial-gradient fallback when zero clips present.
  - Pauses on `visibilitychange` (battery).
  - Content: staggered float-in of kanji overline → huge `BRAYE` name (stroke-red) → kanji underline → tag row → dual CTA (`Enter The Panel` → /about, `Make Contact` → /contact). Skip-intro link + logo mark in corners.
- **Drop folder for clips**: `public/landing/README.md` documents encoding recipe (ffmpeg command, duration, bitrate, licensing). `/public/landing/*` gitignored so personal/unlicensed clips stay local.
- **Added `zod` dependency** (`package.json`).
- **Root layout** simplified: just fonts + metadata. Nav/canvas/footer moved into `(site)` group.
- **Metadata**: added title template `%s · LANDON BRAYE`, per-page titles for /about, /services, /projects, /experience, /contact.

**Verified**
- `pnpm exec tsc --noEmit` → clean.
- `pnpm build` → all 6 pages prerender static, `/api/contact` dynamic. No warnings.

**What didn't change**
- `About.tsx`, `Services.tsx`, `Projects.tsx`, `Experience.tsx`, `Skills.tsx`, `Footer.tsx`, `CanvasBackground.tsx` still use inline styles + `onMouseEnter/Leave`. They work — just not refactored yet. Their hover JS breaks on touch the same way Hero/Contact did; recommend a follow-up pass to migrate them to the new `.mg-*` utility classes.
- `onboarding@resend.dev` is still the default `from` until you verify a domain in Resend and set `CONTACT_FROM_ADDRESS`.
- No CAPTCHA / BotID yet — honeypot + rate limit is the current defense.

**Stopping point**
- Production build green. Landing page works with zero clips (fallback gradient). Subpages route correctly. Contact form end-to-end flow not manually tested in a browser.

**Next session should**
1. Drop 2–4 anime clips into `public/landing/clip-0{1..4}.mp4` and verify the crossfade feels right. Tune filter/overlay if the tint is too strong.
2. Manual browser QA: submit the contact form, confirm rate limit at 6th request, confirm honeypot (curl with `company: "x"` returns 200 but no email sent).
3. Verify a Resend domain; set `CONTACT_FROM_ADDRESS` in Vercel env.
4. Migrate `About/Services/Projects/Experience` to the `.mg-*` class system (same pattern as Hero/Contact).
5. Add `app/sitemap.ts` + `app/robots.ts` + an `opengraph-image` — free SEO wins now that the site has real routes.
6. Consider adding `@vercel/analytics` + `@vercel/speed-insights`.

---

## 2026-04-15 — Progression log created, improvement audit

**Changed**
- Added `progression.md` to track change history and session stopping points.
- Audited project state; produced improvement backlog (see below).

**Why**
- Need a durable log so future sessions pick up without re-deriving context from git alone.

**Stopping point**
- No code changes yet. Backlog captured below; nothing started.

**Next session should**
- Pick an item from the backlog (suggested first: extract inline styles from `Hero.tsx` / `Contact.tsx` into CSS, or wire env validation for `RESEND_API_KEY`).

---

## Improvement Backlog (2026-04-15 audit)

Grouped by impact. Not ordered — pick whatever matches the session's appetite.

### Correctness / blockers
- **`app/api/contact/route.ts`: no input validation beyond presence.** No email format check, no length caps, no rate limiting, no honeypot. Public endpoint → spam risk. Add zod + a simple per-IP rate limit (Upstash Redis via Marketplace, or in-memory for now).
- **`RESEND_API_KEY` not guarded.** If unset, `resend.emails.send` still runs and fails with a cryptic error. Validate env at module load (throw in dev, log in prod).
- **`from: onboarding@resend.dev`** is Resend's shared sandbox domain — deliverability will suffer. Verify a custom domain and swap in `contact@<yourdomain>`.
- **Contact form has no CAPTCHA/bot protection.** Consider Vercel BotID (GA) or a hidden honeypot field.

### Design & UX
- **Hero right panel is `display: none` on mobile** (`globals.css:170`). The "CHARACTER ART HERE" placeholder is also still a placeholder on desktop — either ship real art or remove the panel.
- **No favicon/OG image.** `layout.tsx` references `/icon.svg` but there's no `opengraph-image` / `twitter-image`. Social shares will look bare.
- **No `robots.ts` / `sitemap.ts`.** Easy Next.js 16 wins for SEO.
- **Skip-to-content link missing.** Keyboard users land on the nav every time.
- **Canvas animations run always** — no `prefers-reduced-motion` respect and no pause when tab is hidden. Drains battery on mobile.
- **`components/sections/Hero.tsx` mixes `onMouseEnter/Leave` for hover effects** — this is what `:hover` in CSS is for; the JS version breaks on touch and adds re-renders. Same pattern in `Contact.tsx` social links.

### Code quality
- **Heavy inline styles everywhere.** `Hero.tsx` is 280 lines almost entirely style objects. Moving to CSS modules or Tailwind utility classes would cut file size ~60% and make the design scannable. The project already uses Tailwind v4 — it's underused.
- **Duplicated color/border constants.** `panelBorder = '1px solid rgba(212,43,43,0.2)'` is defined inline in multiple sections; `globals.css` already has `--panel-border`. Use the CSS var.
- **No `lint` / `type-check` running in CI.** `.github/workflows/` doesn't exist despite `CLAUDE.md` describing it. Add a single `ci.yml` with `pnpm lint && pnpm tsc --noEmit && pnpm build`.
- **`CLAUDE.md` "Architecture" section describes an aspirational monorepo that doesn't exist.** Either delete that block or mark it "future." Misleading for new contributors (and agents).
- **`pnpm-workspace.yaml` exists but there are no workspaces.** Remove it, or commit to the monorepo.
- **Stale files in repo root:** `index2.html`, `index3.html`, `Landon_Braye_Resume_ 2025 (1).docx`. These are tracked as untracked per git status — decide: commit to a `/reference/` folder, or delete.

### Performance
- **220 stars + 30 petals redrawn every frame without visibility check.** Use `IntersectionObserver` on hero or pause when `document.hidden`.
- **Three fixed-position blurred orbs with `filter: blur(130px)`** on 600×600 divs — expensive repaints. Consider a single pre-blurred PNG or CSS `radial-gradient` instead.
- **Google Fonts: 3 families, multiple weights.** Bangers (1) + Cinzel (3) + Raleway (4) = 8 font files. Check Lighthouse; consider dropping unused weights.
- **No `next/image`** — not critical yet since there's no imagery, but when the "character art" goes in, use it.

### Observability / operations
- **No analytics.** Add `@vercel/analytics` + `@vercel/speed-insights` (free on Vercel).
- **No error tracking.** Sentry or Vercel's built-in logging is enough for a portfolio.
- **`.env.local` only.** Document required env vars in README (`RESEND_API_KEY`) and pull via `vercel env pull` for parity.

### Nice-to-have
- **Blog / writeups section.** For a cybersecurity portfolio, a `/writeups` MDX route showing CVE analyses or CTF writeups is high-signal to recruiters.
- **Resume download link.** The `.docx` is in the repo root — host it at `/resume.pdf` via `public/` and link from Hero.
- **Dark/light toggle** — optional; the dark manga aesthetic is the whole brand, so probably skip.
