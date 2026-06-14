---
name: edit-content
description: Change copy, stats, email, sections, colors or fonts on the Mobilynx landing page. Use for any content or visual edit to index.html.
---

# Edit content & styling

Everything is in one file: `index.html` (HTML + inline `<style>` + inline `<script>`). No build step — edit and reload.

## Before editing, know the rules (from the user)

- **Email:** `sales@mobilynx.io` everywhere. **Footer:** `© 2026 Mobilynx. All rights reserved.`
- **Stats are FIXED:** 20M+ impressions, 20+ GEOs (never billions / 195). Plus 99% and 24/7.
- **Verticals:** mobile app promotion · VPN & privacy · e-commerce.
- **Keep all original content** unless told to change it.
- Canonical copy reference: `docs/content.md`.

## Sections (anchors in index.html)

`#top` nav · hero (`#heroJungle`) · `#solutions` · `#sources` (POP/PUSH/IN-APP) · marquee · `#targeting` · `#models` (CPA/CPI/CPL/CPS) · `#contact` (form `#contactForm`) · footer (`#footJungle`).

## Styling

- Use **palette tokens** (`var(--sun)`, `var(--emerald)`, …) — see `docs/design-system.md`. Don't hardcode new hexes.
- Fonts: Sora (headings), Inter (body).
- Stat counters use `data-count` + `data-suffix` attributes (animated by `IntersectionObserver`).

## After editing

1. Preview via the `dev-server` skill; verify visually.
2. If you changed copy/stats, keep `docs/content.md` in sync.
3. If it's a meaningful change, update `docs/roadmap.md` + `CLAUDE.md`, then deploy via the `deploy` skill (only when the user asks).
