# Coco Restaurant — Malindi

A modern, fully responsive marketing website for **Coco Restaurant**, a fictional local
Swahili-coast restaurant in **Malindi, Kenya**. The site showcases the menu, the venue's
story, and contact/location details with a warm wine-and-gold visual identity inspired
by Indian Ocean sunsets.

Built with **React 18**, **Vite**, **Tailwind CSS** and **React Router v7**.

---

## Pages

| Route        | Page          | Highlights                                                                 |
| ------------ | ------------- | -------------------------------------------------------------------------- |
| `/`          | Home          | Hero with CTAs, photo gallery, customer testimonial, full-width banner     |
| `/menu`      | Our Menu      | Working category filters (All / Feast / Coffee / Cocktails / Dessert), dish grid |
| `/our-story` | Our Story     | Brand story, milestones timeline, location & hours                         |

## Features

- **Responsive layout** — fluid `clamp()` typography and CSS-grid/flex layouts that
  reflow from mobile to desktop; no fixed-canvas positioning.
- **Sticky glassmorphism navbar** with an animated hamburger menu on small screens.
- **Scroll-reveal animations** via a lightweight `IntersectionObserver` wrapper,
  disabled automatically for users who prefer reduced motion.
- **Interactive menu filtering** driven by React state, with an empty-state message
  for categories that are still on the way.
- **High-quality photography** hotlinked from Unsplash's CDN with per-usage sizing
  (auto format, center crop, explicit width) — all URLs registered in one module.
- Consistent design system: wine `#5B0017`, gold `#CC9D2F`, navy `#243054`,
  amber accent `#FFB577`, with custom scrollbar, selection color and hover
  micro-interactions throughout.

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [React Router DOM 7](https://reactrouter.com/)
- No other runtime dependencies.

## Getting started

```bash
npm install    # install dependencies
npm run dev    # start dev server (http://localhost:5173)
npm run build  # production build to dist/
npm run preview# preview the production build
```

> If `npm` ever hangs on Windows, run Vite directly:
> `node node_modules/vite/bin/vite.js build`

## Project structure

```
├── index.html                  # entry HTML, fonts (Inter, Playfair Display, Poppins)
├── src/
│   ├── main.jsx                # React root
│   ├── App.jsx                 # routes: / , /menu , /our-story
│   ├── index.css               # Tailwind layers + global polish (selection, scrollbar)
│   ├── data/
│   │   └── images.js           # central registry of all Unsplash image URLs
│   ├── pages/                  # one component per route
│   └── components/
│       ├── Navbar.jsx          # sticky nav + mobile menu
│       ├── Hero.jsx            # home hero (headline, CTAs, stats, photo)
│       ├── HeroHeadline.jsx    # "The Experience" gallery
│       ├── Testimonial.jsx     # guest quote card
│       ├── ImageShowcase.jsx   # banner with CTA
│       ├── MenuDishes.jsx      # filterable dish grid
│       ├── MenuLocation.jsx    # hours / location / contact + map
│       ├── OurStory*.jsx       # story intro, milestones timeline, location
│       ├── Footer.jsx          # multi-column footer
│       ├── HeroDecorations.jsx # decorative background layers (pointer-events-none)
│       └── Reveal.jsx          # scroll-reveal animation wrapper
└── public/                     # local graphics (map illustration, ornaments)
```

## Content

All restaurant details (menu items, address, phone, testimonial) are illustrative:

> Coco Restaurant · Seafront Road, Old Town, Malindi, Kenya 80200
> +254 712 345 678 · hello@cocomalindi.com

## Credits

- Photography: [Unsplash](https://unsplash.com) (free to use under the Unsplash License)
- Fonts: Inter, Playfair Display & Poppins via Google Fonts; display headings fall back
  to Playfair Display → Georgia when the branded "Cotoris Bold" face is unavailable
