# Mobilynx Landing — Project Instructions for Claude

> ⚠️ **READ THIS FIRST every session.** This file is the entry point. It tells you what the project is, its current state, and where to go next. After any meaningful change, update this file + `docs/roadmap.md` + `docs/decisions.md` **in the same commit**. Stale docs break the next chat's context.

---

## What this is

A modern (2026) single-page marketing site for **Mobilynx** — an ad-tech / traffic company.
**Verticals:** mobile app promotion · VPN & privacy apps · e-commerce.

- **Zero build step.** One self-contained file: `index.html` (HTML + CSS + JS inline). No framework, no bundler, no `node_modules`.
- **Live site being replaced:** https://mobilynx.io/
- **Repo:** https://github.com/MrNedNick/mobilynx-landing (branch `main`)
- **Contact email everywhere:** `sales@mobilynx.io`

## Current state

**Status:** ✅ Redesign shipped + living jungle animation shipped. Pushed to GitHub.

Two commits on `main`:
- `bc1bacd` — Modern 2026 redesign of Mobilynx landing
- `04e653a` — Add living animated jungle scene to hero and footer

What exists today:
- Sticky glassmorphism nav
- Hero with **procedural living-jungle animation** (see `docs/architecture.md`) + content + stat counters
- Solutions bento grid (3 verticals)
- Traffic sources (POP / PUSH / IN-APP)
- Marquee ticker
- Targeting split section
- Pricing models (CPA / CPI / CPL / CPS)
- Contact form (front-end only, no backend wired)
- Footer with jungle elements + `© 2026 Mobilynx. All rights reserved.`

**Headline stats (deliberately set — do not "round up"):** 20M+ daily impressions · 20+ GEOs · 99% · 24/7.

## How to run it

```bash
cd /Users/test/Documents/Work/AIProjects/mobilynx-landing
npx -y serve -l 5180 .
```
Open http://localhost:5180 . (Server config also lives in the project-root `.claude/launch.json` under name `mobilynx`, port 5180.)
> ⚠️ Do **not** use `python3 -m http.server` — the sandbox blocks it. Use `npx serve`.

## How to deploy

Commit + push to `origin/main`. See the `deploy` skill in `.claude/skills/deploy/`.
> `gh` is **not** authenticated in this environment. Pushing needs the user's GitHub token passed inline for one command, then scrubbed from the remote URL. Details in the deploy skill + `docs/decisions.md`.

## Where to look

| Need | File |
|------|------|
| What's planned / what's next | `docs/roadmap.md` |
| How the site / jungle engine is built | `docs/architecture.md` |
| Colors, fonts, spacing, animation rules | `docs/design-system.md` |
| Canonical copy, stats, email | `docs/content.md` |
| Why we did things the way we did | `docs/decisions.md` |
| Reusable playbooks (run / deploy / edit) | `.claude/skills/` |

## Hard rules (from the user)

1. **Keep all existing content** from the original site unless told otherwise.
2. **Email is `sales@mobilynx.io`** everywhere. Footer must say `© 2026 Mobilynx. All rights reserved.`
3. **Stats are fixed:** 20M+ impressions, 20+ GEOs. Never inflate to billions / 195 GEOs.
4. **Tropical warm yellow + green palette.** Tokens in `docs/design-system.md` — use them, don't hardcode new hexes.
5. **The jungle must feel alive** — breathing, swaying, drifting foliage. Static leaf icons were explicitly rejected. Respect `prefers-reduced-motion`.
6. **No build tooling.** Keep it a single runnable HTML file.
