# Mobilynx Landing

Modern marketing site for **Mobilynx** — performance traffic for mobile app promotion, VPN & privacy apps, and e-commerce. POP · PUSH · IN-APP across 20+ GEOs.

Built with **Vue 3 + Vue Router + Vite**. Architecture mirrors the sibling `oxfeeds-landing` project.

## Develop

```bash
npm install
npm run dev -- --port 5180
```

Open http://localhost:5180 .

## Build

```bash
npm run build     # → dist/  (base path /mobilynx-landing/)
npm run preview
```

## Deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages:
https://mrnednick.github.io/mobilynx-landing/

## Structure

- `src/views/` — pages (home + `/privacy`, `/terms`, `/cookies`, `/gdpr`, 404)
- `src/components/` — nav, footer, home sections, legal layout, GDPR banner
- `src/composables/` — `useScrollReveal`, `useTilt`, `useCountUp`
- `src/style.css` — theme tokens + shared classes

See `CLAUDE.md` and `docs/` for full context, roadmap, and decisions.

Contact: sales@mobilynx.io · © 2026 Mobilynx. All rights reserved.
