---
name: jungle-animation
description: Edit or extend the living-jungle animation (foliage, vines, god rays, motes, parallax) in the Mobilynx hero/footer. Use when changing the background animation.
---

# Living jungle animation

The signature feature. A procedural SVG foliage engine in the inline `<script>` of `index.html`. Full reference: `docs/architecture.md` → "The living jungle engine."

## Mental model

Foliage is **generated**, not drawn by hand. Each element gets randomized motion params so nothing moves in sync — that's what makes it feel alive. The user explicitly rejected static leaf icons; keep it organic.

## Where things live (all in `index.html`)

| What | Function |
|------|----------|
| Leaf/frond/banana/vine shapes | `leaf`, `frondInner`, `bananaInner`, `vineInner` |
| Rows of foliage | `foliageRow` |
| God-ray beams | `rayLayer` |
| Assemble hero (7 layers) | `buildHero` |
| Assemble footer (3 layers) | `buildFooter` |
| Mouse parallax | `parallax(host, area)` (uses `data-depth`) |
| Canvas particles | `initMotes(canvas, host)` |

Hosts: `#heroJungle` (hero), `#footJungle` (footer).

CSS keyframes that drive motion: `swayF` (fronds), `swayV` (vines), `drift` (falling leaves), `rayBreathe` (rays). Per-element vars: `--dur`, `--delay`, `--amp`.

## How to make common changes

- **More/less foliage:** adjust the counts/positions passed in `buildHero` / `buildFooter` / `foliageRow`.
- **Calmer/wilder motion:** tune `--dur` / `--amp` ranges, or the keyframe values.
- **Performance on mobile:** reduce layer count and mote count for small screens (this is a known backlog item).
- **New plant type:** add a builder like the existing `*Inner` functions, then place it via `foliageRow` or directly in a layer.

## Rules

- ✅ Keep motion organic (randomized params), tasteful in the footer.
- ✅ Keep `prefers-reduced-motion` working — animation must stop when set (currently checked in 2 places).
- ✅ Keep hero text legible: `.hero .wrap` at `z-index:3` + the hero `::after` bottom gradient.
- ✅ Use palette tokens (`docs/design-system.md`) for leaf/ray colors.
- ❌ No static, non-moving leaf icons.
- After changes, preview with the `dev-server` skill and check both hero and footer + reduced-motion.
