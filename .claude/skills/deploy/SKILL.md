---
name: deploy
description: Commit and push the Mobilynx landing page to GitHub. Use when the user asks to save/upload/deploy/push the project.
---

# Deploy (commit + push to GitHub)

Repo: https://github.com/MrNedNick/mobilynx-landing · branch `main`.

## Normal case (remote already set, auth available)

```bash
cd /Users/test/Documents/Work/AIProjects/mobilynx-landing
git add -A
git commit -m "<message>

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push
```

## If push fails with auth error

`gh` is **NOT** authenticated in this sandbox (`~/.config/gh/` doesn't exist; the user's website/browser login does not authenticate the CLI). Use the user's Personal Access Token for **one** command, then scrub it.

1. Ask the user for a GitHub PAT with `repo` scope (GitHub → Settings → Developer settings → Tokens).
2. Push with the token inline, then immediately remove it from the remote:
   ```bash
   git remote set-url origin https://MrNedNick:<TOKEN>@github.com/MrNedNick/mobilynx-landing.git
   git push -u origin main
   git remote set-url origin https://github.com/MrNedNick/mobilynx-landing.git   # scrub token
   ```
3. Tell the user to **revoke the token** afterward.

## First-time repo creation (if it ever needs recreating)

```bash
GH_TOKEN=<TOKEN> gh repo create mobilynx-landing --public --description "Modern 2026 landing page for Mobilynx"
```

## Rules

- ❗ **Never** commit a token or write it into any file (incl. `.claude/launch.json` or git config that gets committed).
- After deploying, update `docs/roadmap.md` "Done log" + `CLAUDE.md` current state in the same commit when the change is meaningful.
- Only commit/push when the user asks.
