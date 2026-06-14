# Mobilynx Landing — Project Instructions for Claude

> ⚠️ **READ THIS FIRST every session.** This file is the entry point. After any meaningful change, update this file + `docs/roadmap.md` + `docs/decisions.md` **in the same commit**. Stale docs break the next chat's context.

---

## What this is

A modern (2026) marketing site for **Mobilynx** — an ad-tech / performance-traffic company.
**Verticals:** mobile app promotion · VPN & privacy apps · e-commerce.
**Channels:** POP · PUSH · IN-APP. **Pricing:** CPA · CPI · CPL · CPS.

- **Stack:** Vue 3 (`<script setup>`) + Vue Router 4 + Vite 5. Multi-page SPA.
- **Architecture mirrors** the sibling project `oxfeeds-landing` (same composables, router pattern, deploy workflow, glassmorphism component kit).
- **Live site being replaced:** https://mobilynx.io/
- **Repo:** https://github.com/MrNedNick/mobilynx-landing (branch `main`)
- **Deploys to:** https://mrnednick.github.io/mobilynx-landing/ (GitHub Pages via Actions)
- **Contact email everywhere:** `sales@mobilynx.io`

## Current state

**Status:** ✅ Rebuilt from a single-file HTML page into a Vue 3 + Vite SPA (green theme, no jungle). Builds clean, runs on :5180.

Pages (routes): `/` (home) · `/privacy` · `/terms` · `/cookies` · `/gdpr` · `/*` (404).

Home sections (in `src/views/HomeView.vue`): Hero → Marquee → Solutions → Traffic Sources → Targeting → Pricing → Contact.

**Headline stats (deliberately set — do not "round up"):** 20M+ daily impressions · 20+ GEOs · 99% fill · 24/7.

## How to run it

```bash
cd /Users/test/Documents/Work/AIProjects/mobilynx-landing
npm install      # first time
npm run dev -- --port 5180
```
Open http://localhost:5180 . Server config: `mobilynx` entry (port 5180) in both `.claude/launch.json` files (project-root one is what the preview tool reads — keep them in sync).
> ⚠️ A stale static `npx serve` on :5180 from old sessions can shadow Vite (serves raw `.vue`). If the page is blank, kill it: `pkill -f "serve -l 5180"`.

## How to deploy

Commit + push to `origin/main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages. `gh` is authenticated (keyring) as MrNedNick. See the `deploy` skill.

## Where to look

| Need | File |
|------|------|
| What's planned / what's next | `docs/roadmap.md` |
| How the Vue app is structured | `docs/architecture.md` |
| Colors, fonts, tokens, components | `docs/design-system.md` |
| Canonical copy, stats, email | `docs/content.md` |
| Why we did things the way we did | `docs/decisions.md` |
| Reusable playbooks (run / deploy / edit) | `.claude/skills/` |

## Hard rules (from the user)

1. **Keep all content** (verticals, channels, pricing models) unless told otherwise.
2. **Email is `sales@mobilynx.io`** everywhere. Footer must say `© 2026 Mobilynx. All rights reserved.`
3. **Stats are fixed:** 20M+ impressions, 20+ GEOs. Never inflate.
4. **Clean green palette** (emerald + lime), warm yellow `#FFD23F` reserved for CTA accents. Tokens in `docs/design-system.md` — use them, don't hardcode new hexes. **No jungle / procedural foliage** (that was the previous design, removed).
5. **Mirror `oxfeeds-landing`'s architecture** — reuse its composables and patterns; don't reinvent.
6. **`base` path:** `/mobilynx-landing/` for build, `/` for dev (see `vite.config.js`).
