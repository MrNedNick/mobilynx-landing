---
name: dev-server
description: Run the Mobilynx landing page locally for preview. Use when you need to view or verify the site in a browser.
---

# Run the dev server

The site is a static `index.html`. Serve it (no build needed):

```bash
cd /Users/test/Documents/Work/AIProjects/mobilynx-landing
npx -y serve -l 5180 .
```

Then open http://localhost:5180 .

A launch config also exists: the `mobilynx` entry (port 5180) in the **project-root** `.claude/launch.json`.

## Rules

- ❌ Do **not** use `python3 -m http.server` — the sandbox blocks it (PermissionError).
- The `.claude/launch.json` *inside this folder* is stale (python config) — ignore it.
- If verifying counters via headless preview, check final values in the DOM, not a screenshot — screenshots can catch a mid-count frame:
  ```js
  [...document.querySelectorAll('.stat .num')].map(n => n.textContent)
  // expect ["20M+","20+","99%","24/7"]
  ```
- Verify `prefers-reduced-motion` still suppresses the jungle animation after any motion change.
