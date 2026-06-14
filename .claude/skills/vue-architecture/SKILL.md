---
name: vue-architecture
description: Understand and extend the Vue 3 + Vite structure of the Mobilynx site (shared with oxfeeds-landing). Use when adding components, routes, composables, or sections.
---

# Vue architecture

Vue 3 (`<script setup>`) + Vue Router 4 + Vite 5. The architecture **mirrors the sibling project `../oxfeeds-landing`** — when in doubt, look there for the established pattern and copy it. Full map: `docs/architecture.md`.

## Shell & flow

- `src/main.js` → `createApp(App).use(router).mount('#app')`, imports `style.css`.
- `App.vue` = `ScrollProgress` + `NavBar` + `<router-view>` (page transition) + `FooterSection` + `GdprBanner`.
- `src/router/index.js` — routes + `scrollBehavior` (hash offset 80) + `document.title` via `afterEach`.
- Views in `src/views/`, reusable pieces in `src/components/`.

## Composables (reuse, don't reinvent)

- `useScrollReveal()` — call once per view; reveals `.reveal` / `.reveal-left` / `.reveal-right` (+ `.delay-1..6`).
- `useTilt(selector)` — cursor 3D tilt on cards; no-ops under reduced motion.
- `useCountUp(selector)` — animate to `data-count` (+ `data-suffix`, `data-duration`).

## How to add things

- **New home section:** create `src/components/XSection.vue` (use `.section`, `.section-header`, `.glass-card`, `.reveal`), then add it to `src/views/HomeView.vue`. Add an `id` if NavBar/Footer should scroll to it (`goSection`).
- **New route/page:** add to `routes` in `src/router/index.js` (lazy `() => import(...)` + `meta.title`); legal-style pages wrap `<LegalLayout>` and fill the slot with `.legal-content` prose.
- **New animated counter:** add `.count-up data-count="N" data-suffix="..."` and ensure a `useCountUp('.count-up')` call exists in that component.

## Rules

- ✅ Match oxfeeds patterns; reuse composables + shared classes + tokens.
- ✅ Keep `base: '/mobilynx-landing/'` (build) in `vite.config.js`.
- ✅ Run `npm run build` after structural changes.
- ❌ Don't add a state library / framework; this is a static marketing SPA.
- See also: `dev-server`, `edit-content`, `deploy` skills.
