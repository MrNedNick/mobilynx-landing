# Roadmap

> ⚠️ **Keep this current.** Mark items done the moment they ship (add the commit/date). A roadmap that lags the code is useless.
> Product context: `CLAUDE.md` · build details: `architecture.md` · why-decisions: `decisions.md`.

---

## Phase overview

| Phase | Goal | Status |
|-------|------|--------|
| P1 — Single-file redesign | Modern 2026 page, tropical palette (jungle) | ✅ shipped, then superseded by P3 |
| P2 — Living jungle | Procedural foliage animation | ✅ shipped, then **removed** in P3 |
| P3 — Vue 3 rebuild | Rebuild as Vue+Vite SPA mirroring oxfeeds, clean green theme, legal pages, GH Pages deploy | ✅ complete (2026-06-14) |
| P4 — Contact backend | Make the contact form actually send | 🔜 planned |
| P5 — Polish & launch | SEO/OG meta, favicon set, perf, point domain | 🔜 planned |

---

## P4 — Contact backend 🔜

`ContactUs.vue` (`#contactForm`) is front-end only — shows success, sends nothing.
- [ ] Wire to a no-build form service (Formspree / Web3Forms / Getform) → `sales@mobilynx.io`
- [ ] Honeypot spam field + real error states
- [ ] Same treatment could apply to legal "Contact Us" CTAs

## P5 — Polish & launch 🔜

- [ ] Open Graph + Twitter card meta + share image
- [ ] Full favicon set (apple-touch-icon, etc.)
- [ ] Lighthouse pass (perf / a11y / SEO)
- [ ] Confirm GitHub Pages is enabled (Settings → Pages → GitHub Actions source)
- [ ] Decide final hosting / point mobilynx.io
- [ ] `robots.txt` + `sitemap.xml`

---

## Backlog / ideas

- Real case studies / advertiser logos section
- Animated counters polish; verify parallax isn't nauseating on trackpads
- Multi-language (RU/EN)
- Analytics (Plausible / GA) once launched
- Extract shared kit (composables + style.css + LegalLayout) into something both landings import, instead of copy-paste

---

## Done log

- **2026-06-13** — P1 single-file redesign + P2 living jungle shipped (commits `bc1bacd`, `04e653a`).
- **2026-06-14** — Repo created + pushed; internal docs & skills added (VibeOS-style).
- **2026-06-14** — **P3: full Vue 3 + Vite rebuild** mirroring `oxfeeds-landing`. Green theme (no jungle), 7 home sections, 4 legal pages + 404 + GDPR banner, composables reused, GitHub Pages workflow. Build clean, verified on :5180.
