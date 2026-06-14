# Architecture

Vue 3 + Vite 5 SPA. Architecture deliberately mirrors the sibling project `oxfeeds-landing` (../oxfeeds-landing) — same composables, router pattern, component kit and deploy workflow.

## File layout

```
mobilynx-landing/
├─ index.html                  ← Vite entry; loads Sora + Inter fonts, mounts #app
├─ vite.config.js              ← base: '/mobilynx-landing/' (build) vs '/' (dev)
├─ vercel.json, public/_redirects ← SPA fallback for non-GH hosts
├─ .github/workflows/deploy.yml ← build + deploy to GitHub Pages (copies index.html→404.html)
├─ public/favicon.svg          ← green "M" mark
└─ src/
   ├─ main.js                  ← createApp + router + style.css
   ├─ App.vue                  ← ScrollProgress + NavBar + <router-view> + Footer + GdprBanner
   ├─ style.css                ← global theme tokens + shared classes (see design-system.md)
   ├─ router/index.js          ← routes + scrollBehavior + document.title
   ├─ composables/
   │  ├─ useScrollReveal.js    ← IntersectionObserver → .visible on .reveal*
   │  ├─ useTilt.js            ← cursor 3D tilt (respects reduced-motion)
   │  └─ useCountUp.js         ← animate numbers to data-count + data-suffix
   ├─ components/
   │  ├─ NavBar.vue, FooterSection.vue, ScrollProgress.vue, GdprBanner.vue, LegalLayout.vue
   │  ├─ HeroSection.vue       ← parallax orbs + particles + count-up stats
   │  ├─ MarqueeStrip.vue      ← POP·PUSH·IN-APP·CPA·CPI·CPL·CPS·20M+…
   │  ├─ SolutionsSection.vue  ← 3 verticals bento (tilt)
   │  ├─ TrafficSources.vue    ← POP / PUSH / IN-APP cards (tilt)
   │  ├─ TargetingSection.vue  ← "why us" split section + live stat bars
   │  ├─ PricingModels.vue     ← CPA / CPI / CPL / CPS (tilt)
   │  └─ ContactUs.vue         ← front-end-only form → sales@mobilynx.io
   └─ views/
      ├─ HomeView.vue          ← assembles the home sections, calls useScrollReveal()
      ├─ PrivacyPage / TermsPage / CookiePage / GdprPage.vue ← <LegalLayout> + slot prose
      └─ NotFound.vue          ← 404
```

## Routing

`src/router/index.js` — `createWebHistory(import.meta.env.BASE_URL)`. Routes: `/`, `/privacy`, `/terms`, `/cookies`, `/gdpr`, catch-all 404. `scrollBehavior` handles hash anchors (offset 80px) and top-on-navigate. `router.afterEach` sets `document.title` to `"<meta.title> — Mobilynx"`.

In-page section nav (NavBar/Footer): `goSection(id)` scrolls to `#id` on home, or routes home with a hash first if elsewhere.

## Composables (shared patterns, copied verbatim from oxfeeds)

- **useScrollReveal()** — call once per view; observes `.reveal`/`.reveal-left`/`.reveal-right`, adds `.visible`.
- **useTilt(selector)** — subtle cursor 3D tilt on cards; no-ops under `prefers-reduced-motion`.
- **useCountUp(selector)** — counts elements up to `data-count` (+`data-suffix`, `data-duration`) on scroll-in. Hero stats use `.count-up`.

## Styling

Single global `src/style.css` holds CSS custom-property tokens + shared utility classes (`.glass-card`, `.btn-primary`, `.btn-accent`, `.btn-secondary`, `.section-*`, `.reveal*`, legal prose). Components use scoped `<style>`. See `design-system.md`.

## Build & deploy

- `npm run build` → `dist/`. CI copies `dist/index.html` → `dist/404.html` so deep links work on GitHub Pages.
- `base` must stay `/mobilynx-landing/` for the Pages project URL.

## Known gaps

- **Contact form has no backend** — shows success, sends nothing (roadmap P4).
- No OG/Twitter meta image yet (only `<meta description>`).
- Legal copy is solid boilerplate adapted for an ad-tech traffic company — have it reviewed before relying on it legally.
