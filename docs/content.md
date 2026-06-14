# Content (canonical copy)

Single source of truth for the site's wording and numbers. If copy changes here, change `index.html` to match (and vice-versa).

## Source

- **Original site (content scraped from here):** https://mobilynx.io/
- All copy was taken from this URL at session start (2026-06-13) via WebFetch and preserved verbatim. If content diverges, this is the canonical source to re-check.

## Identity

- **Company:** Mobilynx
- **Live domain:** mobilynx.io
- **Contact email:** `sales@mobilynx.io` (used in nav, contact section, footer)
- **Footer line:** `© 2026 Mobilynx. All rights reserved.`

> Note: the user once wrote the domain as "mobylinks.io" — the real domain is **mobilynx.io**. Email is **sales@mobilynx.io**.

## Verticals (the three we specialize in)

1. **Mobile app promotion**
2. **VPN & privacy apps**
3. **E-commerce**

## Headline stats — FIXED, do not inflate

| Stat | Value | Note |
|------|-------|------|
| Daily ad impressions | **20M+** | User cut this down from an original "2B+". Never restore billions. |
| GEOs | **20+** | User cut this from "195+". Keep at 20+. |
| (third stat) | **99%** | |
| (fourth stat) | **24/7** | |

(Rendered via `data-count` / `data-suffix` counters in `index.html`.)

## Section copy (headings)

- Solutions: **"Built for the verticals we know best"**
- Traffic sources: **"Three powerful traffic channels"** — POP · PUSH · IN-APP
- Targeting: **"Pinpoint targeting, optimized every second."**
- Pricing: **"Performance-based pricing models"** — CPA · CPI · CPL · CPS
- Contact: **"Ready to scale your traffic?"**

## Pages / routes

`/` home · `/privacy` · `/terms` · `/cookies` · `/gdpr` · `/*` 404.
Legal pages use `LegalLayout.vue` with slot prose; all contact links point to `sales@mobilynx.io`.

## Deploy

Repo: https://github.com/MrNedNick/mobilynx-landing · published to https://mrnednick.github.io/mobilynx-landing/ via GitHub Actions.

## Rules

- Keep all original content from mobilynx.io unless the user asks to change it.
- English copy (audience is international, even though the user communicates in Russian).
