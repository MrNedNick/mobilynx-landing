# Mobilynx Landing

The website of **Mobilynx**, an advertising agency selling mobile + desktop traffic — POP, PUSH and in-app — for installs, registrations, sign-ups and deposits.

**[Open the site](https://mrnednick.github.io/mobilynx-landing/)**

Built with Vue 3, Vue Router and Vite. The copy, icons and privacy policy are those of the live site, [mobilynx.io](https://mobilynx.io/); a content test keeps it that way.

## Develop

```bash
npm install
npm run dev -- --port 5180
npm test          # content and contact-form tests (Vitest)
npm run build     # → dist/, base path /mobilynx-landing/
```

## Deploy

A push to `main` runs the tests, builds and publishes to GitHub Pages.

More in [`docs/`](docs/): content, architecture, design system and decisions.
