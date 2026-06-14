---
name: deploy
description: Commit and push the Mobilynx landing page; GitHub Actions deploys it to GitHub Pages. Use when the user asks to save/upload/deploy/push.
---

# Deploy (commit + push → GitHub Pages)

Repo: https://github.com/MrNedNick/mobilynx-landing · branch `main`.
Published to: https://mrnednick.github.io/mobilynx-landing/

Pushing to `main` triggers `.github/workflows/deploy.yml` → `npm ci` → `npm run build` → publish `dist/` to Pages (copies `index.html`→`404.html` for SPA deep links).

## Steps

```bash
cd /Users/test/Documents/Work/AIProjects/mobilynx-landing
git add -A
git commit -m "<message>

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push
```

`gh` is authenticated via keyring as **MrNedNick** — plain `git push` works, no token needed.

## First-time / settings

- GitHub Pages must use **GitHub Actions** as its source (repo Settings → Pages). Check the Actions tab for the deploy run.
- `vite.config.js` `base` must stay `/mobilynx-landing/` so asset URLs resolve under the project page.
- Watch a run: `gh run watch` (or `gh run list`).

## Rules

- ❗ Never commit secrets/tokens.
- Update `docs/roadmap.md` "Done log" + `CLAUDE.md` current state in the same commit for meaningful changes.
- Only commit/push when the user asks.
