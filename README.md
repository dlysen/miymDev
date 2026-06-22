# MIYM — Software Development Solutions

Professional website for MIYM, a software development company.

**Live:** https://miym.dev  
**Tech:** React 19, Router 7, Vite 5, Tailwind CSS 4, Lucide Icons

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

- **Hero** — Eye-catching header with CTA
- **Services** — 6 core service offerings
- **Portfolio** — Showcase of recent projects
- **Testimonials** — Client reviews and ratings
- **CTA** — Call-to-action for conversions
- **Navbar** — Responsive navigation
- **Footer** — Company info and links

## Placeholder Content

All sections use placeholder content ready for you to customize:

1. **Update Services** — Add your service descriptions
2. **Add Projects** — Portfolio with your real projects
3. **Get Testimonials** — Real client feedback
4. **Update Contact** — Email, phone, social links
5. **Customize Colors** — Tailwind theme in `tailwind.config.js`

## Development

- `npm run dev` — Start local dev server at localhost:3000
- `npm run build` — Create optimized production build
- `npm run preview` — Preview production build locally

## Deployment

Set up GitHub Pages:

```bash
# 1. Create GitHub repo
git init
git remote add origin https://github.com/username/miym.git

# 2. Add GitHub token to .env.local
echo "GITHUB_TOKEN=your_token_here" > .env.local

# 3. Deploy
npm run deploy
```

Then enable GitHub Pages in repo settings and add custom domain (miym.dev).

## Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#1F2937',    // Dark gray
  secondary: '#60A5FA',  // Blue
  accent: '#F59E0B',     // Amber
}
```

### Content
Update placeholder text in component files:
- `Hero.jsx` — Main headline & description
- `Services.jsx` — Service titles & descriptions
- `Portfolio.jsx` — Project names & descriptions
- `Testimonials.jsx` — Client quotes
- `Footer.jsx` — Company info & links

### Images
Replace gradient placeholders with real images using:
```jsx
<img 
  src="/path/to/image.jpg" 
  alt="Description"
  className="w-full h-full object-cover"
/>
```

## License

© 2024 MIYM. All rights reserved.
