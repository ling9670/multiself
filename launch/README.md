# Multiself

Collectible character cards for real people — *one person, many selves*.
Each role (Cat Sitter, Farmer, Stained Glass Artist…) is a full one-page intro,
presented in one of three selectable card styles and linked by a swipe timeline.

---

## Files

| File | What it is |
|------|------------|
| `index.html` | **The landing page.** Open this. Phone-sized multi-role card with a Tweaks panel (Card style · Mood · Display font). |
| `brand-guideline.html` | The brand guideline (concept, colour, type, the three templates, anatomy, voice). Self-contained — no dependencies. |
| `multiself.css` | Core design system: tokens, hero, sections, timeline, CTA. |
| `trading-card.css` / `flat-collectible.css` | Style-specific looks for the Trading and Flat templates. |
| `roles-data.jsx` | **Edit this to change the content** — each self's text, colour, traits, work, video, shop items, links. |
| `role-page.jsx` | Shared portfolio sections (About, Work, Video, Shop, Connect, CTA). |
| `trading-card-hero.jsx` / `flat-collectible-hero.jsx` | The two alternate card headers. |
| `timeline-nav.jsx` | The bottom timeline that links the selves. |
| `ms-icons.jsx` | Line-icon set used in the Connect section. |
| `tweaks-panel.jsx` | The in-page Tweaks panel (preview-only — see below). |

The three card styles (**Hero / Trading / Flat**) are all driven from the same
content in `roles-data.jsx`. Switch the default in `index.html` (the
`TWEAK_DEFAULTS.style` value) or via the Tweaks panel.

---

## Running it

It's plain static HTML — no build step required to preview.

- **Locally:** any static server, e.g. `npx serve .` then open the printed URL.
- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy
  from the branch root. `index.html` is served automatically.

### ⚠️ One production note
This preview transpiles React/JSX **in the browser** via Babel (the
`<script type="text/babel">` tags). That's perfect for review but slow on first
load and not ideal for a public launch. Before going live, have a developer:

1. Precompile the `.jsx` files (Vite / esbuild / Next.js) into a normal JS bundle, **or**
2. Inline the whole thing into a single optimised file.

Either keeps the exact design while removing the in-browser compile.

### To launch for real
- Replace the hatched **portrait / work / video / product placeholders** with real images.
- Point the **buy / book** buttons and **Connect** links to real URLs (in `roles-data.jsx`).
- Swap the demo name (`PERSON` in `roles-data.jsx`) for the real person.

---

*Brand: quiet luxury · Cormorant Garamond / Jost / Space Mono · muted jewel tones on warm ivory.*
