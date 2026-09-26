# Content (canonical copy)

The landing carries the content of the live site, https://mobilynx.io/, and nothing else: no figures,
verticals, offers or pages that the live site does not have. `src/__tests__/content.test.js` checks this.

## Home, top to bottom

| Section | Copy |
|---|---|
| Hero | Advertising agency · \Mobilynx · "Mobilynx drives the most useful mobile apps and services to everyone. We help our clients reach high volumes of quality customers through mobile + desktop traffic." |
| We sell traffic | Installs, registrations, free trials — for apps and browser extensions · SOI/DOI — for games · Deposits — for online products |
| Our traffic sources | POP, PUSH, IN-APP with the live descriptions |
| Top traffic geos | United States, United Kingdom, Canada, Australia, Japan, India, Qatar, Saudi Arabia, United Arab Emirates, France, Germany (the live flag strip) |
| Traffic you can trust | the live paragraph, then Advanced targeting, Optimization, Support & feedback, Pricing models (CPA, CPI, CPL and CPS) |
| Any questions? | "We are ready to answer!", form with Name, Email, Message and "Write to us"; "If you are an app owner and looking for traffic, please contact us at hanna@mobilynx.io" |
| Footer | © 2026 Mobilynx. All rights reserved. · Privacy policy |

Icons and the flag strip are the live site's own files, in `src/assets/site/`.

## Pages

`/` and `/privacy` — the live site has no others. The privacy policy in `src/content/privacy.js` is the
published text, word for word.

## Contact

The site has no backend. The form opens the visitor's email app with a message to `sales@mobilynx.io`;
the live site's app-owner address `hanna@mobilynx.io` stays in its own sentence.
