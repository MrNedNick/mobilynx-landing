# Decision log

Why things are the way they are. Newest at top. Keep entries short: **decision → reason**. When you make a non-obvious call in a future session, add it here.

---

### 2026-06-14 · Internal docs + skills modeled on VibeOS
- **Decision:** Add `CLAUDE.md` + `docs/` + `.claude/skills/` instead of UI docs.
- **Reason:** User wants every future chat to pick up context, roadmap, and tasks without re-explaining. Mirrors the VibeOS project's structure (sprint roadmap + CLAUDE.md entry point), lighter detail.

### 2026-06-14 · GitHub push via inline token, not `gh auth login`
- **Decision:** Created the repo and pushed by passing the user's PAT inline (`GH_TOKEN=… gh repo create`, token in remote URL for one push), then scrubbed the token from the remote with `git remote set-url`.
- **Reason:** `gh` is **not** authenticated in this sandbox (`~/.config/gh/` doesn't exist; `HOME=/Users/test`). The user's browser/website login does not authenticate the CLI. A token was the fastest reliable path.
- **Follow-up:** User instructed to revoke the token afterward. Never persist tokens in files or committed config. See the `deploy` skill.

### 2026-06-13 · Repo: public, name `mobilynx-landing`, account MrNedNick
- **Decision:** `https://github.com/MrNedNick/mobilynx-landing`, branch `main`.

### 2026-06-13 · Living jungle = procedural JS engine, not static SVG icons
- **Decision:** Generate foliage procedurally with randomized motion params; 7 hero layers + 3 footer layers; parallax + canvas motes + god rays.
- **Reason:** User explicitly rejected the first static `<symbol>/<use>` + simple-keyframe version ("это слишком слабо"). The brief: a forest that *breathes* — lianas, palms, things drifting/turning. The site "sells an animated product for millions," so the motion must feel premium.
- **Constraint:** Respect `prefers-reduced-motion`.

### 2026-06-13 · Serve with `npx serve`, not `python3 http.server`
- **Decision:** Local dev = `npx -y serve -l 5180 .` (port 5180).
- **Reason:** Sandbox blocks `python3 -m http.server` (PermissionError). The stale `.claude/launch.json` inside this folder still has the broken python config; the working one is the `mobilynx` entry in the **project-root** `.claude/launch.json`.

### 2026-06-13 · Stats cut to realistic numbers
- **Decision:** 20M+ daily impressions (was 2B+), 20+ GEOs (was 195+).
- **Reason:** User review — billions/195 looked inflated/unbelievable. These numbers are deliberate; do not "round up."

### 2026-06-13 · Single self-contained HTML file, no build
- **Decision:** Everything inline in `index.html` (CSS + JS), no framework/bundler.
- **Reason:** User wanted it runnable on localhost immediately, first try, no tooling.

### 2026-06-13 · Tropical warm-yellow + green palette, Sora + Inter
- **Decision:** Palette tokens in `design-system.md`; display font Sora, body Inter.
- **Reason:** User brief — "warm yellow with green, tropical live" look for a 2026-modern feel.

### 2026-06-13 · Email + footer
- **Decision:** `sales@mobilynx.io` everywhere; footer `© 2026 Mobilynx. All rights reserved.`
- **Reason:** Direct user requirements.
