# Design System

Tropical, warm, "alive." Warm yellow → green, deep jungle backgrounds, cream text. Use the tokens below — **do not invent new hexes inline.**

## Color tokens (CSS custom properties in `index.html`)

| Token | Hex | Role |
|-------|-----|------|
| `--sun` | `#FFD23F` | Primary warm yellow (accents, CTAs, highlights) |
| `--mango` | `#FFB22C` | Secondary warm orange-yellow (gradients, hovers) |
| `--lime` | `#9BE564` | Bright fresh green (accents, success) |
| `--emerald` | `#14B86A` | Core brand green (primary actions, links) |
| `--jungle` | `#0A3D2C` | Deep jungle green (section backgrounds) |
| `--jungle-2` | `#06241A` | Darker jungle green (gradients, depth) |
| `--ink` | `#062018` | Near-black text on light surfaces |
| `--txt` | `#E8F5EC` | Light text on dark/jungle surfaces |
| `--cream` | `#FFFBEF` | Warm off-white surfaces / light sections |

Typical gradient: warm (`--sun` → `--mango`) for energy, green (`--lime` → `--emerald`) for brand.

## Typography

- **Display / headings:** `Sora` (Google Fonts), weights 700–800.
- **Body:** `Inter` (Google Fonts).
- Headings use `clamp()` for fluid scaling.

## Effects

- **Glassmorphism:** translucent bg + `backdrop-filter: blur()` (nav, cards).
- **God rays:** `mix-blend-mode: screen` on the ray layer for light blending.
- Rounded corners, soft shadows, generous spacing.

## Animation principles

- **Everything organic, nothing mechanical.** Foliage gets randomized duration/delay/amplitude via CSS vars (`--dur`, `--delay`, `--amp`).
- Easing: `cubic-bezier(.2,.8,.3,1)` for parallax transitions; `ease-in-out` for breathing loops.
- **Always honor `prefers-reduced-motion`** — suppress sway/drift/motes when set.
- Keep it tasteful in secondary areas (footer jungle is "accurate, without overdoing it" — user's words).

## Do / don't

- ✅ Reference tokens (`var(--emerald)`), reuse existing keyframes.
- ✅ Keep contrast high enough over foliage (use the hero `::after` overlay pattern).
- ❌ Don't add static, lifeless leaf icons — motion is the product.
- ❌ Don't introduce a CSS framework or build step.
- ❌ Don't hardcode brand colors as raw hex in new markup.
