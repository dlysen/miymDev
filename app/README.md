# Patrick — Editable Vite + React Template

A clean, editable rebuild of the `patrick-pearl.vercel.app` portfolio/CV theme.
The original was a minified Create React App bundle; this project reconstructs it
as real, editable React source + faithful section markup.

> ⚠️ **License:** the original is a commercial ThemeForest theme
> ("Patrick — Personal CV/vCard React Template", item 35737202). This rebuild is
> for learning/reuse of the *structure and theme system*. Buy a license before
> publishing anything derived from it.

## Run

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the build
```

## Architecture

**Interactive/structural parts are clean React. Static section bodies are faithful
HTML** imported via Vite `?raw` — byte-identical to the original render, and easy
to edit as plain HTML.

```
src/
├── main.jsx                  # entry
├── App.jsx                   # <ThemeProvider> + React Router routes
├── data/site.js              # ★ EDIT: name, roles, nav, social, media paths, colors
├── theme/ThemeContext.jsx    # color / RTL / background state + <link> swapping
├── components/
│   ├── SettingsPanel.jsx     # color switcher · RTL/LTR · background demos (real JSX)
│   ├── StaticHeader.jsx      # sidebar header for /blog + /blog-post
│   ├── HeroBackground.jsx    # image / video / particles(canvas) / color
│   ├── Typed.jsx + Typed.css # hero typing effect + blinking cursor
├── pages/
│   ├── HomeLayout.jsx        # react-tabs shell (header = tab list, like the original)
│   ├── Blog.jsx  BlogPost.jsx
└── sections/
    ├── Home.jsx              # hero (real JSX)
    ├── About/Resume/Portfolio/BlogTab/Contact.jsx   # thin wrappers around ↓
    └── *.html                # ★ EDIT: the section content (faithful markup)

public/                       # served at site root — CSS url() refs resolve unchanged
├── css/styles.css            # main template stylesheet (unmodified original)
├── css/theme-colors/*.css    # 6 accent themes (the "template system")
├── css/rtl.css  css/cra-components.css
├── fonts/  images/  static/media/   favicon, logos, manifest
```

## How to customize

| Want to change… | Edit |
|-----------------|------|
| Name, tagline/typing words, nav, social links | `src/data/site.js` |
| A section's content (text, images, cards) | `src/sections/<name>.html` |
| Accent colors / add a new theme | copy a file in `public/css/theme-colors/`, tweak hex, add to `themeColors` in `src/data/site.js` |
| Global layout / spacing / fonts | `public/css/styles.css` |
| Hero background modes | `src/components/HeroBackground.jsx` |
| Typing speed | props on `<Typed>` in `src/sections/Home.jsx` |

## The theme system

- **Color switcher** — `ThemeContext` swaps the `#theme-color-link` `<link>` to
  `/css/theme-colors/<id>.css` (same mechanism as the original).
- **RTL/LTR** — injects/removes `/css/rtl.css` and flips `documentElement.dir`.
- **Background demos** — `bg` state → `HeroBackground` renders image/video/particles/color.

## Notes / differences from the original

- Particles background is a lightweight local canvas (original used a particles lib).
- `simplebar` custom scrollbars aren't wired (native scroll works); add `simplebar-react` if you want them.
- Theme selections are in-memory (reset on reload). Persist to `localStorage` in
  `ThemeContext` if you want them sticky.
- Section bodies are static HTML. To make one fully dynamic, convert that
  `sections/*.html` into JSX and drive it from `site.js`.
- **Contact map:** the original used the Google Maps JS API (needs a
  billing-enabled API key, or it shows an "Oops" error). This rebuild uses a
  free **OpenStreetMap embed** instead — no key required. To recenter it, edit
  the `<iframe src>` in `src/sections/contact.html`: change the `marker=lat,lng`
  and the `bbox` (grab both from openstreetmap.org → Share → HTML). To use
  Google Maps instead, replace the iframe with a Google "Embed a map" iframe
  (Maps Embed API key) or the `@react-google-maps/api` component.

_Rebuilt 2026-07-24 from patrick-pearl.vercel.app._
