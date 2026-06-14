# Design System

Clean tropical green. Deep jungle-green backgrounds, emerald→lime brand, warm yellow reserved for CTAs. All tokens live in `src/style.css`. **Use tokens — don't invent new hexes inline.**

## Color tokens (`:root` in `src/style.css`)

| Token | Hex | Role |
|-------|-----|------|
| `--primary` | `#14B86A` | Emerald — primary brand, buttons, links |
| `--secondary` | `#9BE564` | Lime — gradient end, accents |
| `--accent` | `#FFD23F` | Warm yellow — **CTA accents only** (`.btn-accent`, badge/live dots) |
| `--bg` / `--bg-deep` | `#06241A` | Deepest background |
| `--bg-secondary` / `--bg-mid` | `#0A3D2C` | Mid background |
| `--glass` | `rgba(255,255,255,.08)` | Glass surfaces |
| `--card-bg` | `rgba(255,255,255,.05)` | Card fill |
| `--card-border` | `rgba(255,255,255,.09)` | Card border |
| `--text` | `#E8F5EC` | Body text on dark |
| `--text-muted` / `--text-faint` | — | Secondary / tertiary text |
| `--gradient` | emerald→lime 135° | Brand gradient (text, buttons, bars) |

> **Legacy alias note:** the shared component kit (copied from `oxfeeds-landing`) references `--purple`, `--purple-light`, `--pink`, `--pink-light`, `--gradient-subtle`. These are **kept as names but remapped to green** so copied components work unchanged. Prefer the semantic names (`--primary`/`--secondary`/`--accent`) in new code.

## Typography

- **Display / headings:** `Sora` (700–800). Applied to all `h1–h6` + `.logo-name`, `.source-name`, `.price-code`, `.vstat-val` via `--font-display`.
- **Body:** `Inter`.
- Loaded in `index.html` from Google Fonts. Headings use `clamp()` for fluid scale.

## Shared classes (global, in `style.css`)

`.container` · `.section` / `.section-header` / `.section-tag` / `.section-title` / `.section-sub` · `.glass-card` (hover lift) · `.btn-primary` (green gradient) · `.btn-accent` (yellow CTA) · `.btn-secondary` · `.gradient-text` · `.gradient-border` (animated conic) · `.reveal` / `.reveal-left` / `.reveal-right` + `.delay-1..6` · legal prose (`.legal-content …`).

## Motion

- Reveal-on-scroll (`useScrollReveal`), count-up stats (`useCountUp`), cursor tilt on cards (`useTilt`), floating orbs/particles in hero, animated scroll-progress bar.
- Easing: `cubic-bezier(0.16,1,0.3,1)` for transitions.
- **Honor `prefers-reduced-motion`** — `useTilt` and hero parallax/particles no-op; marquee + gradient-border animations disabled.

## Do / don't

- ✅ Reference tokens (`var(--primary)`), reuse shared classes + composables.
- ✅ Keep yellow for CTAs only; green is the dominant brand.
- ❌ No jungle / procedural foliage (removed — see `decisions.md`).
- ❌ No CSS framework / build-tool sprawl beyond Vite.
- ❌ Don't hardcode brand hexes in new markup.
