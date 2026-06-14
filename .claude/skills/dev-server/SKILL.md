---
name: dev-server
description: Run the Mobilynx landing page locally (Vue 3 + Vite). Use to preview or verify the site in a browser.
---

# Run the dev server

Vue 3 + Vite project. First time, install deps:

```bash
cd /Users/test/Documents/Work/AIProjects/mobilynx-landing
npm install
```

Then run the dev server on port 5180:

```bash
npm run dev -- --port 5180
```

Open http://localhost:5180 . Launch config: the `mobilynx` entry (port 5180) exists in **both** `.claude/launch.json` files — the **project-root** one (`AIProjects/.claude/launch.json`) is what the preview tool reads, so keep them in sync.

## Gotchas

- ❌ A stale static `npx serve` on :5180 from earlier sessions will **shadow Vite** — it serves raw `.vue` files, so the page renders blank with no console error. If the page is blank, kill it:
  ```bash
  pkill -f "serve -l 5180"
  ```
  Then restart Vite. (Sanity check: `curl -s http://localhost:5180/src/App.vue | head -1` — Vite returns compiled JS with `import`s; static serve returns the raw `<template>`.)
- Verify stat counters in the DOM, not a screenshot (count-up animates):
  ```js
  [...document.querySelectorAll('.stat-num')].map(n => n.textContent)
  // expect ["20M+","20+","99%","24/7"]
  ```
- Test routes (`/privacy` etc.) and `prefers-reduced-motion` after motion changes.

## Build

```bash
npm run build      # → dist/  (base path /mobilynx-landing/)
npm run preview    # serve the production build
```
