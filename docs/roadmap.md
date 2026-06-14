# Roadmap

> ⚠️ **Keep this current.** Mark items done the moment they ship (add the commit/date). Add new ideas to the Backlog. A roadmap that lags the code is useless.
> Product context: `CLAUDE.md` · build details: `architecture.md` · why-decisions: `decisions.md`.

---

## Phase overview

| Phase | Goal | Status |
|-------|------|--------|
| P1 — Redesign | Modern 2026 single-page site, tropical palette, all content kept | ✅ complete (`bc1bacd`) |
| P2 — Living jungle | Breathing/swaying/drifting procedural foliage in hero + footer | ✅ complete (`04e653a`) |
| P3 — Project docs & skills | Internal docs + reusable skills so any chat can continue | 🔄 active (this commit) |
| P4 — Contact backend | Make the contact form actually send | 🔜 planned |
| P5 — Polish & launch | Perf, SEO/meta, favicon, OG image, deploy to real domain | 🔜 planned |

---

## P3 — Project docs & skills 🔄

- [x] `CLAUDE.md` context starter
- [x] `docs/roadmap.md` (this file)
- [x] `docs/architecture.md`
- [x] `docs/design-system.md`
- [x] `docs/content.md`
- [x] `docs/decisions.md`
- [x] Core skills in `.claude/skills/` (dev-server, deploy, jungle-animation, design-system)
- [ ] User review of structure — adjust depth if needed

## P4 — Contact backend 🔜

The form (`#contactForm`) is front-end only — it shows a success message but sends nothing.
Options to evaluate (no build step preferred):
- [ ] Formspree / Getform / Web3Forms (simplest, no server) → posts to `sales@mobilynx.io`
- [ ] Or a tiny serverless endpoint (if a backend is wanted later)
- [ ] Add basic spam protection (honeypot field)
- [ ] Validate + show real error states

## P5 — Polish & launch 🔜

- [ ] `<meta>` description, Open Graph + Twitter card tags
- [ ] Favicon + apple-touch-icon (tropical mark)
- [ ] OG share image
- [ ] Lighthouse pass (perf / a11y / SEO)
- [ ] Compress/inline any assets; check animation CPU on low-end devices
- [ ] Decide hosting (GitHub Pages / Vercel / point mobilynx.io at it)
- [ ] `robots.txt` + `sitemap.xml`

---

## Backlog / ideas (not scheduled)

- Mobile pass on the jungle (reduce layer count / mote count on small screens for battery)
- Subtle parallax tuning — verify it isn't nauseating on trackpads
- Real case-study / client logos section
- Multi-language (RU/EN) — user is RU-speaking, audience likely EN
- Cookie/consent banner if analytics added
- Analytics (Plausible / GA) once launched

---

## Done log

- **2026-06-13** — P1 redesign shipped (`bc1bacd`). Tropical palette, all original content preserved, stats set to 20M+/20+, email → sales@mobilynx.io, footer © 2026.
- **2026-06-13** — P2 living jungle shipped (`04e653a`). Procedural SVG foliage engine, 7 hero layers + 3 footer layers, parallax, canvas motes, reduced-motion respected. Replaced rejected static-icon version.
- **2026-06-14** — Repo created + pushed to https://github.com/MrNedNick/mobilynx-landing .
- **2026-06-14** — P3 docs & skills added (this commit).
