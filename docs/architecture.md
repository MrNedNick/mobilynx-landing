# Architecture

How the site is built. It is intentionally simple: **one file, no build.**

## File layout

```
mobilynx-landing/
├─ index.html          ← the entire site (HTML + <style> + <script>), ~700 lines
├─ CLAUDE.md           ← session entry point
├─ docs/               ← this folder
└─ .claude/skills/     ← reusable playbooks
```

`index.html` is structured top-to-bottom as:
1. `<head>` — meta, Google Fonts (Sora + Inter), one big inline `<style>`.
2. `<body>` — semantic sections (see below).
3. One inline `<script>` IIFE at the end — counters, scroll reveal, and the jungle engine.

## Page sections (in order)

| Section | Anchor / id | Purpose |
|---------|-------------|---------|
| Nav | `#top` | Sticky glassmorphism bar |
| Hero | `#heroJungle` (animation host) | Headline + CTA + **living jungle** + stat counters |
| Solutions | `#solutions` | 3-vertical bento grid (app promo / VPN / e-commerce) |
| Traffic sources | `#sources` | POP / PUSH / IN-APP cards |
| Marquee | — | Scrolling ticker |
| Targeting | `#targeting` | Split "pinpoint targeting" section |
| Pricing | `#models` | CPA / CPI / CPL / CPS models |
| Contact | `#contact`, form `#contactForm` | Front-end-only form → `sales@mobilynx.io` |
| Footer | `#footJungle` (animation host) | Jungle elements + © 2026 line |

## JS behaviours (inline `<script>`)

- **Stat counters** — `IntersectionObserver` animates numbers up to `data-count` + `data-suffix`. Values: 20M+, 20+, 99%, 24/7.
  > Headless preview screenshots may catch a mid-count frame (e.g. "1M+"). That is **not a bug** — verify final values via DOM, not screenshot.
- **Scroll reveal** — `.reveal` elements fade/slide in via `IntersectionObserver`.
- **Living jungle engine** — see below.

## The living jungle engine

Procedurally generates SVG foliage so no two leaves move identically — a real "breathing forest," not static icons (the static version was explicitly rejected by the user).

### Builders (pure SVG-path generators)
- `leaf(L,w)` — teardrop leaf path.
- `frondInner(...)` — pinnate palm/fern frond (bezier stem + leaflets).
- `bananaInner(...)` — broad banana leaf with veins.
- `vineInner(...)` — hanging vine that grows downward.

### Wrappers / composition
- `foliageRow(...)` — a row of fronds or banana leaves at a baseline.
- `rayLayer()` — 4 god-ray beams (`mix-blend-mode: screen`).
- `buildHero()` — assembles **7 depth layers**: defs · rays · back foliage · hanging vines · mid foliage · front foliage · drifting leaves · canvas motes.
- `buildFooter()` — assembles **3 layers**: back foliage · front foliage · small vines.

### Motion
- CSS keyframes drive the life: `swayF` (fronds), `swayV` (vines), `drift` (falling leaves), `rayBreathe` (god rays). Each element gets randomized `--dur`, `--delay`, `--amp` so motion is organic.
- `parallax(host, area)` — `mousemove` shifts layers by `data-depth` (multi-layer depth).
- `initMotes(canvas, host)` — Canvas 2D particle system, ~24–64 ascending motes/spores.
- **Accessibility:** `prefers-reduced-motion` is checked (2 places) — animations are suppressed when the user opts out.

### Legibility
- Hero `::after` bottom gradient overlay keeps text readable over foliage.
- `.hero .wrap` sits at `z-index:3`, above all jungle layers.

## CSS conventions

- All colors come from CSS custom properties (see `design-system.md`). Don't hardcode new hexes.
- Glassmorphism via `backdrop-filter` + translucent backgrounds.
- Fluid sizing via `clamp()` for headings.

## Known gaps

- Contact form has **no backend** — it shows success but sends nothing (P4 in roadmap).
- No `<meta>` description / OG tags / favicon yet (P5).
- Two launch configs exist: the `mobilynx` entry in the **project-root** `.claude/launch.json` and a local one in this folder — both now use `npx serve` on port 5180. Always serve with `npx serve` (never `python3 http.server`, blocked in sandbox).
