# GoToTrafficSchool — React app

The static multi-page site (the `*.html` files in the repo root) ported to a
**Vite + React + React Router** single-page app. The design is preserved
**exactly**: each page's original markup, CSS, and interactive scripts are reused
verbatim rather than rewritten.

## Run

```bash
cd react-app
npm install
npm run dev      # http://localhost:4322
npm run build    # production build -> dist/
npm run preview  # serve the production build
```

## Routes

| Path | Source page |
|------|-------------|
| `/` | index.html |
| `/about` | about.html |
| `/how-it-works` | howItWorks.html |
| `/faq` | faq.html |
| `/partners` | partners.html |
| `/contact` | contactus.html |
| `/court-landing` | court-landing.html |
| `/state-landing` | state-landingpage.html |
| `/state-faq` | state-faq.html |
| `/alt-registration` | alt-registration.html |

## How the port works

Hand-rewriting ~20k lines of HTML into JSX would introduce subtle visual and
behavioral bugs. Instead, a one-shot migration splits every source page into
three artifacts, loaded by a small shared component:

- `src/pages/<Name>/content.html` — the page `<body>` markup, verbatim
  (asset paths rewritten to `/assets/…`, header/footer nav links rewired to the
  internal routes above).
- `src/pages/<Name>/styles.css` — the page's `<style>` block, verbatim.
- `src/pages/<Name>/script.js` — the page's inline `<script>` logic (i18n,
  share button, carousels, hero state/course selectors, scroll reveals),
  wrapped in an `init()` that runs after the markup mounts.

`src/components/PageShell.jsx` renders the `<style>` and markup, then runs
`init()`. Because the `<style>` lives and dies with the route, page CSS never
leaks across routes.

Shared CDN dependencies (Bootstrap 5.3 CSS/JS, Bootstrap Icons), the Google tag,
and the chat widget live once in `index.html`.

### Re-generating from source

`tools/extract.mjs` produces the per-page artifacts from the root `*.html`
files. Re-run it if the original HTML changes:

```bash
node tools/extract.mjs
```

> Note: because pages are injected with `dangerouslySetInnerHTML`, the input is
> trusted first-party markup only. To migrate a page to idiomatic JSX
> components over time, replace its `content.html` with real JSX in `index.jsx`.
