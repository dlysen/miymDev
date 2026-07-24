# MIYM — Milestones

**Project Status:** 🟡 Phase 2/4 — content replacement in progress
**Last Updated:** 2026-07-24
**Next Session Focus:** Finish content replacement across all sections, then wire the GitHub repo + Pages deploy

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

### 🟡 Phase 2: Content replacement
**Status:** IN PROGRESS
- [ ] `src/data/site.js` — brand, name, typing roles, nav, social links, hero media
- [ ] Home hero copy
- [ ] About + services cards
- [ ] Resume — experience, education, skills, stats
- [ ] Portfolio — real project cards (AEOS System, AEOS Vesting, LegacyPrime, MoVi, FBMX DAO/Social)
- [ ] Blog — placeholder posts replaced
- [ ] Contact — email, location (Asia/Manila), map, form target
- [ ] Grep-clean: no "Patrick", "Paris", or lorem text remains
- [ ] Real imagery replacing `static/media/*` template assets

### ⏳ Phase 3: Ship the frontend
**Status:** NOT STARTED
- [ ] Dedicated GitHub repo created + linked; PAT in `app/.env`
- [ ] `gh-pages` installed; `homepage`, `predeploy`, `deploy`, `postbuild` scripts set
- [ ] Vite `base` matches domain type; `.nojekyll` + `404.html` + `--dotfiles` handled
- [ ] `tools/package-cpanel.sh` wired as postbuild → `dist.zip` backup artifact
- [ ] Custom domain + Enforce HTTPS; rollback path verified on `gh-pages`

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

---

## Known Limitations

1. Section bodies are minified single-line HTML from the template — edits must be surgical.
2. Template imagery (`public/static/media/*`) is still the vendor's; real assets needed before publishing.
3. Upstream design is a commercial ThemeForest theme — a license is required before public launch.
4. Theme selections (color/RTL) are in-memory only; not persisted to `localStorage`.
5. Contact map uses a keyless OpenStreetMap embed, not Google Maps.

---

## Deployment Readiness

### Code Quality
- [x] Dev server + production build work
- [ ] Placeholder content fully replaced
- [ ] Broken/dead links audited

### Documentation
- [x] Project CLAUDE.md documents the content model
- [ ] Deploy steps recorded in `docs/`

### Ready for Next Phase
- [x] Scope agreed
- [ ] Content complete
- [ ] GitHub repo + token in place

---

## Next Session Checklist

- [ ] Confirm what "MIYM" stands for + the intended domain name
- [ ] Confirm public contact email + which social profiles to link
- [ ] Finish any remaining section copy
- [ ] Create the GitHub repo and wire the Pages deploy

---

**Last Session:** 2026-07-24
**Project Owner:** Dangal Macatangay
**Status:** ✅ On Track
