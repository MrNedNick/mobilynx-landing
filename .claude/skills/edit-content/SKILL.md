---
name: edit-content
description: Change copy, stats, sections, colors or pages on the Mobilynx Vue site. Use for any content or visual edit.
---

# Edit content & styling

Vue 3 + Vite app. Edit source files and the dev server hot-reloads.

## Before editing, know the rules (from the user)

- **Email:** `sales@mobilynx.io` everywhere. **Footer:** `© 2026 Mobilynx. All rights reserved.`
- **Stats are FIXED:** 20M+ impressions, 20+ GEOs (never billions/195). Plus 99% fill, 24/7.
- **Verticals:** mobile app promotion · VPN & privacy · e-commerce. **Channels:** POP/PUSH/IN-APP. **Pricing:** CPA/CPI/CPL/CPS.
- **Keep all content** unless told otherwise. Canonical copy: `docs/content.md`.
- **Clean green theme, no jungle.** Yellow `#FFD23F` for CTAs only.

## Where things are

| Want to change | File |
|----------------|------|
| Home section copy/order | `src/components/*.vue`, assembled in `src/views/HomeView.vue` |
| Hero text / stats | `src/components/HeroSection.vue` (stats use `data-count`/`data-suffix`) |
| Nav / footer links | `src/components/NavBar.vue`, `FooterSection.vue` |
| Legal text | `src/views/{Privacy,Terms,Cookie,Gdpr}Page.vue` (slot prose in `LegalLayout.vue`) |
| Colors / fonts / shared classes | `src/style.css` (see `docs/design-system.md`) |
| Routes / page titles | `src/router/index.js` |

## Styling

- Use **tokens** (`var(--primary)`, `var(--secondary)`, `var(--accent)`) — don't hardcode hexes.
- Reuse shared classes: `.glass-card`, `.btn-primary`, `.btn-accent`, `.section-*`, `.reveal*`.
- Reuse composables: `useScrollReveal`, `useTilt`, `useCountUp`.

## After editing

1. Preview via the `dev-server` skill; verify visually + check routes.
2. Run `npm run build` to confirm it compiles.
3. Keep `docs/content.md` in sync for copy/stat changes.
4. For meaningful changes, update `docs/roadmap.md` + `CLAUDE.md`, then deploy via the `deploy` skill (only when the user asks).
