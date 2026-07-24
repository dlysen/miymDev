# MIYM — Milestones

**Project Status:** 🟢 Phase 3/4 — live at https://miym.dev
**Last Updated:** 2026-07-24
**Next Session Focus:** Real imagery + brand-voice call, then Phase 4 backend

---

## Phase Breakdown

### ✅ Phase 1: Scaffold + scope
**Status:** COMPLETE
- [x] Renamed `vite-app/` → `app/` (backend will sit beside it later)
- [x] Project `CLAUDE.md` created
- [x] `sessions/MILESTONES.md` + first session file created
- [x] Scope confirmed with owner: personal portfolio/CV, copy drafted from real workspace data,
      GitHub Pages primary + cPanel `dist.zip` backup, backend later (contact form, blog CMS, admin)
- [x] Kickoff logged in `decisions/log.md`

### ✅ Phase 2: Content replacement
**Status:** COMPLETE
- [x] `src/data/site.js` — brand, name, typing roles, nav, social links, hero media
- [x] Home hero copy
- [x] About + services cards
- [x] Resume — experience, education, skills, stats
- [x] Portfolio — real project cards (AEOS System, AEOS Vesting, LegacyPrime, MoVi, FBMX DAO/Social)
- [x] Blog — placeholder posts replaced
- [x] Contact — email, location (Asia/Manila), map, form target
- [x] Grep-clean: no "Patrick", "Paris", or lorem text remains
- [ ] Real imagery replacing `static/media/*` template assets — **still outstanding**

### 🟡 Phase 3: Ship the frontend
**Status:** LIVE — domain + HTTPS follow-ups open
- [x] Repo `dlysen/miymDev` linked; classic PAT in `projects/miym/.env.local` (gitignored)
- [x] `gh-pages` installed; `homepage`, `predeploy`, `deploy`, `postbuild` scripts set
- [x] Vite `base` matches domain type; `.nojekyll` + `404.html` + `--dotfiles` handled
- [x] `tools/package-cpanel.sh` wired as postbuild → `dist.zip` backup artifact
- [x] Custom domain `miym.dev` serving via CNAME (Cloudflare-proxied)
- [ ] Enforce HTTPS on Pages — deferred, needs Cloudflare SSL mode confirmed (Full/Strict) first
- [x] Rollback path: each deploy is a `gh-pages` commit; prior site on `archive/2026-06-tailwind-site`

### ⏳ Phase 4: Backend
**Status:** NOT STARTED
- [ ] Contact form API (store + email delivery)
- [ ] Blog CMS on MongoDB (Mongoose)
- [ ] Auth-protected admin dashboard
- [ ] Blog + portfolio sections converted from static HTML to data-driven JSX

---

## Key Accomplishments This Session

- ✅ Folder renamed `vite-app/` → `app/`; verified zero stale references workspace-wide
- ✅ Project scaffolded to workspace standard (CLAUDE.md, sessions/, docs/)
- ✅ Scope locked via kickoff Q&A (purpose, copy source, deploy targets, backend scope)
- ✅ Every section's placeholder content replaced with real content from workspace data
- ✅ Invented claims avoided by design: no fake rates (durations instead), no fake credentials
      (Focus column instead of Education), no vendor logo wall, no fabricated blog comments
- ✅ Old June 2026 site backed up to `archive/2026-06-tailwind-site`, then `main` force-pushed
- ✅ Deployed to GitHub Pages — **https://miym.dev is live** with the new site

---

## Known Limitations

1. Section bodies are minified single-line HTML from the template — edits must be surgical.
2. Pages returns HTTP 404 for deep links (`/blog`) while serving the SPA shell — the router renders
   correctly, but the status code is wrong for SEO. A Cloudflare rewrite would fix it.
3. Template imagery (`public/static/media/*`, `public/images/*`) is still the vendor's stock
   photography — it is now publicly deployed and should be swapped for real assets.
4. Upstream design is a commercial ThemeForest theme — the licence is now required, not optional.
5. Theme selections (color/RTL) are in-memory only; not persisted to `localStorage`.
6. Contact map uses a keyless OpenStreetMap embed, not Google Maps.
7. Contact section publishes a home address and mobile number on a public, indexable site.

---

## Deployment Readiness

### Code Quality
- [x] Dev server + production build work
- [x] Placeholder content fully replaced
- [x] Live asset check — JS/CSS/media/CNAME all 200 with cache-busters
- [ ] Broken/dead links audited (`#download` CV link and `#contact` CTAs are still anchors)

### Documentation
- [x] Project CLAUDE.md documents the content model
- [ ] Deploy steps recorded in `docs/`

### Ready for Next Phase
- [x] Scope agreed
- [x] Content complete
- [x] GitHub repo + token in place

---

## Next Session Checklist

- [ ] Confirm what "MIYM" stands for — personal CV voice vs the company voice the old site used
- [ ] Replace stock imagery: profile photo, hero background, 8 project screenshots, blog thumbnails
- [ ] Buy the ThemeForest licence (item 35737202) now that the design is publicly deployed
- [ ] Decide whether the contact section should keep the home address + mobile number public
- [ ] Add LinkedIn / X / Telegram to `site.js` once handles are confirmed
- [ ] Wire the "Download CV" button to a real PDF
- [ ] Confirm Cloudflare SSL mode, then enable Enforce HTTPS on Pages
- [ ] Start Phase 4 backend (contact form API → blog CMS → admin)

---

**Last Session:** 2026-07-24
**Project Owner:** Dangal Macatangay
**Status:** ✅ On Track
