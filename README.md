# PALATE — Taste Intelligence

A React UI mockup for **Palate**, a “taste intelligence” product that helps users understand and track their flavor profile. Built from a Figma design with a warm, Ratatouille-inspired aesthetic.

![Palate](https://img.shields.io/badge/React-18-61dafb?logo=react) ![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

---

## Features

- **Landing page** — Hero, “The Sense” (science of taste), “The Fork” (cursor-reactive fork visual), waitlist CTA, footer
- **Your Palate** — Flavor profile dashboard with:
  - Flavor fingerprint (e.g. “Retronasal Romantic”)
  - **Top tastes** — Animated bar chart (Umami, Salt, Acid, Sweet, Bitter)
  - **Weekly profile** — Area chart (retronasal, texture, heat)
  - **Flavor constellation** — Circular SVG breakdown of flavor components
  - **What to try next** — Personalized suggestion cards
  - **Taste galaxy** — Twinkling star visualization
  - **AI chatbot** — Floating chat for food recommendations (keyword-based replies)

Navigation between the landing page and the Palate dashboard uses **state-based routing** (no server required), so it works in constrained preview environments (e.g. Figma Make).

---

## Tech stack

| Layer        | Tech |
|-------------|------|
| Framework   | React 18 |
| Build       | Vite 6 |
| Styling     | Tailwind CSS 4 |
| Animation   | Motion (Framer Motion) |
| Charts      | Recharts |
| UI primitives | Radix UI, shadcn-style components |

---

## Getting started

### Prerequisites

- **Node.js** 18+  
- **npm**, **yarn**, or **pnpm**

### Install and run

```bash
# Clone the repo
git clone https://github.com/ayanmammadli-beep/PALATE-ui-mockup.git
cd PALATE-ui-mockup

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
```

Output is in `dist/`. Serve with any static host (e.g. Vercel, Netlify, GitHub Pages).

---

## Project structure

```
src/
├── main.tsx              # Entry: renders Root
├── app/
│   ├── Root.tsx          # View state (home | palate), hash sync
│   ├── App.tsx           # Landing: Hero, Science, Fork, CTA, Footer
│   ├── components/       # Navigation, Hero, Science, Fork, CTA, Footer, UI
│   └── pages/
│       └── PalatePage.tsx  # Flavor profile dashboard + chatbot
└── styles/               # Tailwind, fonts, theme
public/
└── fork.png              # Fork image for “The Fork” section
```

---

## Design

- **Palette** — Gold (`#C4924A`), brick (`#B84C3A`), slate (`#6A8591`), terracotta (`#C4614A`), dark background (`#1C1612`).
- **Fonts** — Cormorant Garamond (display), DM Mono (UI), Libre Baskerville (body).

---

## License

Private / unlicensed unless otherwise specified. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for third-party credits.
