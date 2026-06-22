# MIYM — Software Development Solutions Website

**Status:** 🟡 Phase 2 In Progress  
**Tech Stack:** React 19, Router 7, Vite 5, Tailwind CSS 4, Lucide Icons  
**Domain:** miym.dev  
**Deployment:** GitHub Pages

---

## Project Overview

MIYM is a professional website showcasing software development solutions. The site features a clean, modern design with sections for services, portfolio, testimonials, and calls-to-action.

---

## Phases

### ✅ Phase 1: Core Tech Scaffolding
- [x] Vite + React 19 setup
- [x] React Router 7 configured
- [x] Tailwind CSS 4 + PostCSS
- [x] Lucide icons integrated
- [x] Project structure created

### 🟡 Phase 2: Component Templates
- [x] Hero component (with placeholder image)
- [x] Services section (6 service cards)
- [x] Portfolio section (6 project cards)
- [x] Testimonials section (3 testimonial cards)
- [x] Call-to-action section
- [x] Navbar (responsive mobile menu)
- [x] Footer (multi-column layout)
- [x] Home page (all components combined)

**TODO:**
- [ ] Replace placeholder content with MIYM's actual services/projects
- [ ] Add real testimonials from clients
- [ ] Update contact info (email, phone)
- [ ] Add company details and branding

### ⏳ Phase 3: Content Updates
- [ ] Write service descriptions
- [ ] Add portfolio projects (titles, descriptions, images)
- [ ] Add client testimonials
- [ ] Update company info, about, contact details
- [ ] Add blog/resources section (optional)

### ⏳ Phase 4: GitHub Pages Deployment
- [ ] Create GitHub repo
- [ ] Push code to repo
- [ ] Enable GitHub Pages
- [ ] Set custom domain (miym.dev)
- [ ] Verify deployment

---

## Tech Stack Details

### Frontend
- **React 19** — Latest version with new features
- **React Router 7** — Client-side routing
- **Vite 5** — Fast build tool with HMR
- **Tailwind CSS 4** — Utility-first styling
- **Lucide React** — Beautiful icon library

### Build & Deploy
- **Node.js** — Runtime
- **npm** — Package manager
- **gh-pages** — GitHub Pages deployment
- **Custom Domain** — miym.dev

---

## File Structure

```
miym/
├── app/src/
│   ├── components/
│   │   ├── Navbar.jsx        ✅ Responsive navbar with mobile menu
│   │   ├── Hero.jsx          ✅ Hero section with CTA
│   │   ├── Services.jsx      ✅ 6 service cards
│   │   ├── Portfolio.jsx     ✅ 6 project portfolio cards
│   │   ├── Testimonials.jsx  ✅ 3 testimonial cards with ratings
│   │   ├── CTA.jsx           ✅ Call-to-action section
│   │   └── Footer.jsx        ✅ Multi-column footer
│   ├── pages/
│   │   └── Home.jsx          ✅ Home page combining all components
│   ├── styles/
│   │   └── globals.css       ✅ Tailwind + global styles
│   ├── App.jsx               ✅ Main app with routing
│   └── main.jsx              ✅ React DOM entry point
├── package.json              ✅ Dependencies & scripts
├── vite.config.js            ✅ Vite configuration
├── tailwind.config.js        ✅ Tailwind theme config
├── postcss.config.js         ✅ PostCSS config
├── index.html                ✅ HTML entry point
├── .gitignore                ✅ Git ignore rules
└── CLAUDE.md                 ✅ This file
```

---

## Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Content Placeholders to Update

### Hero Section
- [ ] Main headline
- [ ] Subheadline
- [ ] Hero image (use Tailwind object-fit)
- [ ] Button labels/links

### Services Section
- [ ] Service titles & descriptions (currently generic)
- [ ] Service icons (using Lucide icons)
- [ ] Number of services (currently 6)

### Portfolio Section
- [ ] Project titles
- [ ] Project descriptions
- [ ] Project categories
- [ ] Project images/thumbnails
- [ ] GitHub links
- [ ] Live project links

### Testimonials Section
- [ ] Client names
- [ ] Client company/role
- [ ] Testimonial text
- [ ] Star ratings

### Footer Section
- [ ] Company description
- [ ] Links to pages
- [ ] Social media links
- [ ] Contact email
- [ ] Year in copyright

---

## Deployment Checklist

### Before Deployment
- [ ] npm install (install all dependencies)
- [ ] npm run build (verify build passes)
- [ ] Update all content placeholders
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test all links and buttons
- [ ] Verify contact info is correct

### GitHub Setup
- [ ] Create GitHub repo
- [ ] Push code to repo
- [ ] Add GitHub token (for predeploy script)
- [ ] Enable GitHub Pages (Settings → Pages)
- [ ] Set source to gh-pages branch
- [ ] Add custom domain (miym.dev)

### Final Steps
- [ ] npm run deploy (this runs predeploy + gh-pages)
- [ ] Verify site is live at https://miym.dev
- [ ] Test all pages on live site
- [ ] Check CNAME file is present in gh-pages branch

---

## Image Placeholders

All sections use Tailwind's gradient backgrounds as placeholders. To add real images, update the component JSX:

```jsx
// Instead of:
<div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48">

// Use:
<img 
  src="/path/to/image.jpg" 
  alt="Description"
  className="h-48 object-cover"
/>
```

---

## Next Steps

1. **Phase 3:** Update all content placeholders with MIYM's real information
2. **Phase 4:** Create GitHub repo and push code
3. **Deploy:** Run `npm run deploy` to publish to GitHub Pages
4. **Verify:** Check miym.dev is live and working

---

## Notes

- Color scheme can be customized in `tailwind.config.js`
- All components are mobile-responsive
- Icons from lucide-react (see https://lucide.dev)
- Deployment uses GitHub Pages + custom domain CNAME
