# MIYM — Development Guide

**Status:** 🟢 Live at https://miym.dev (kicked off + shipped 2026-07-24)
**Type:** Personal portfolio / CV site (frontend now, backend later)
**Tech Stack:** React 18 + Vite 5 · react-router-dom · react-tabs · vanilla CSS theme system
**Ship Target:** 2026-08-03 (10-day cadence)

## Overview
MIYM is Dangal Macatangay's personal portfolio and CV site — the public front for
full-stack + Web3 contract work. The codebase is an editable Vite + React rebuild of a
commercial CV template (see "License" below); this project replaces every line of that
template's placeholder content with real, first-person content and later adds a backend
for the contact form, blog, and an admin editor.

## Repository Layout
```
projects/miym/
  CLAUDE.md      # this guide
  sessions/      # session notes + MILESTONES.md (source of truth)
  docs/          # content briefs, copy drafts, deploy notes
  app/           # React 18 + Vite frontend  (was `vite-app/`, renamed 2026-07-24)
  backend/       # NOT YET CREATED — planned Phase 4 (see below)
```
Frontend commands run from `app/` (`cd app && npm run dev|build|preview`).

## Content model (where content lives)
| Want to change… | Edit |
|-----------------|------|
| Name, typing roles, nav, social links, hero media | `app/src/data/site.js` |
| A section's body (text, cards, images) | `app/src/sections/<name>.html` (faithful, minified template markup) |
| Blog list / post pages | `app/src/sections/blog*.html` |
| Accent colors | `app/public/css/theme-colors/*.css` + `themeColors` in `site.js` |
| Global layout / fonts | `app/public/css/styles.css` |

Section bodies are **static HTML imported with Vite `?raw`** and injected via
`dangerouslySetInnerHTML`. They are minified single-line files from the original template —
edit surgically (targeted string replacement), don't reformat whole files, and never
introduce user-supplied HTML into them once a backend exists.

## Deployment
- **Primary:** GitHub Pages via `gh-pages` → **https://miym.dev** (repo `dlysen/miymDev`, `gh-pages` branch).
  Deploy with `cd app && npm run deploy`. Cloudflare proxies the domain — purge its cache after a deploy.
- **Backup:** `dist.zip` for cPanel upload via `tools/package-cpanel.sh` (npm `postbuild` hook;
  needed because the SMB workspace forces `0700` perms that cPanel Extract preserves).
- Vite `base` must match the domain type: `/` for a custom/apex domain, `/[repo]/` for project pages.

## GitHub Repository Setup
- Repo: **https://github.com/dlysen/miymDev** (public), linked to `projects/miym/` — repo root is the
  project root, so `app/` is a subfolder and a `backend/` can join it later.
- Classic PAT lives in `projects/miym/.env.local` as `GITHUB_TOKEN` (gitignored, account `dlysen`).
- Push without leaking the token into `.git/config`:
  `B64=$(printf 'dlysen:%s' "$GITHUB_TOKEN" | base64 | tr -d '\n'); git -c http.extraheader="Authorization: Basic $B64" push origin main`
- The pre-2026-07-24 Tailwind site is preserved on branch `archive/2026-06-tailwind-site`.

## Phases
### Phase 1: Scaffold + scope ✅
- [x] Rename `vite-app/` → `app/`
- [x] Project CLAUDE.md + sessions/MILESTONES.md + first session file
- [x] Scope confirmed: personal portfolio, content drafted from real workspace data

### Phase 2: Content replacement ✅
- [x] `site.js` — name, brand, roles, social, nav
- [x] Home hero
- [x] About + services
- [x] Resume (experience, education, skills, cadence)
- [x] Portfolio (real projects: AEOS, LegacyPrime, MoVi, FBMX, AEOS Vesting)
- [x] Blog placeholder posts
- [x] Contact (email, location, map, form target)
- [x] Remove/replace every "Patrick" / Paris / lorem string
- [ ] Swap template imagery for real assets

### Phase 3: Ship the frontend 🟡
- [x] Repo `dlysen/miymDev` + PAT in `.env.local`
- [x] `gh-pages` deploy scripts + Vite `base` + `.nojekyll` / `404.html` / `--dotfiles`
- [x] `package-cpanel.sh` postbuild → `dist.zip` backup
- [x] Custom domain `miym.dev`
- [ ] Enforce HTTPS (check Cloudflare SSL mode first)

### Phase 4: Backend ⏳
- [ ] Contact form → API (store + email)
- [ ] Blog CMS (MongoDB via `templates/mongo-integration-template.md`)
- [ ] Auth-protected admin dashboard (content, portfolio items, posts)
- [ ] Convert the blog + portfolio sections from static HTML to data-driven JSX

## Current State
Live at https://miym.dev with real content in every section. Remaining gaps are assets and voice:
stock imagery throughout, the "Download CV" button is an empty anchor, and the copy is first-person
personal CV while the previous miym.dev branded MIYM as a software development company.

## License note
The upstream design is the commercial ThemeForest theme "Patrick — Personal CV/vCard
React Template" (item 35737202). Buy a license before publishing anything derived from it.

## Next Phase
Real imagery + the brand-voice decision, then Phase 4 (contact-form API → blog CMS → admin).
