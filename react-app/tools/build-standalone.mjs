// Reassembles each React page (content.html + styles.css + overrides.css +
// script.js) into a self-contained standalone HTML file using Bootstrap via CDN.
// Output: ../standalone-build/<page>.html + assets/. Run: node tools/build-standalone.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const APP = join(__dirname, '..')
const PAGES = join(APP, 'src', 'pages')
const OUT = join(APP, 'standalone-build')

const pages = [
  { name: 'Home',            out: 'index.html',              title: "GoToTrafficSchool.com | America's Original Traffic School" },
  { name: 'About',           out: 'about.html',              title: 'About Us | GoToTrafficSchool.com' },
  { name: 'HowItWorks',      out: 'howItWorks.html',         title: 'How It Works | GoToTrafficSchool.com' },
  { name: 'Faq',             out: 'faq.html',                title: 'Traffic School FAQ | GoToTrafficSchool.com' },
  { name: 'Partners',        out: 'partners.html',           title: 'Partner With Us | GoToTrafficSchool.com' },
  { name: 'Contact',         out: 'contactus.html',          title: 'Contact Us | GoToTrafficSchool.com' },
  { name: 'CourtLanding',    out: 'court-landing.html',      title: 'Court Programs | GoToTrafficSchool.com' },
  { name: 'StateLanding',    out: 'state-landingpage.html',  title: 'State Traffic School | GoToTrafficSchool.com' },
  { name: 'StateFaq',        out: 'state-faq.html',          title: 'State Traffic School FAQ | GoToTrafficSchool.com' },
  { name: 'AltRegistration', out: 'alt-registration.html',   title: 'Registration | GoToTrafficSchool.com' },
  // New state landing pages — these reuse StateLanding's styles.css and script.js.
  { name: 'StateCalifornia', out: 'california.html',         title: 'California Traffic School Online | GoToTrafficSchool.com', cssFrom: 'StateLanding', scriptFrom: 'StateLanding' },
  { name: 'StateAlaska',     out: 'alaska.html',             title: 'Alaska Traffic School Online | GoToTrafficSchool.com',     cssFrom: 'StateLanding', scriptFrom: 'StateLanding' },
  { name: 'StateTemplate',   out: 'state-template.html',     title: 'State Traffic School Online | GoToTrafficSchool.com',      cssFrom: 'StateLanding', scriptFrom: 'StateLanding' },
]

// Internal SPA routes -> standalone filenames. Longer/specific first; "/" last.
const linkRewrites = [
  ['href="/about"', 'href="about.html"'],
  ['href="/how-it-works"', 'href="howItWorks.html"'],
  ['href="/faq"', 'href="faq.html"'],
  ['href="/partners"', 'href="partners.html"'],
  ['href="/contact"', 'href="contactus.html"'],
  ['href="/court-landing"', 'href="court-landing.html"'],
  ['href="/state-landing"', 'href="state-landingpage.html"'],
  ['href="/state-faq"', 'href="state-faq.html"'],
  ['href="/alt-registration"', 'href="alt-registration.html"'],
  ['href="/california"', 'href="california.html"'],
  ['href="/alaska"', 'href="alaska.html"'],
  ['href="/state-template"', 'href="state-template.html"'],
  ['href="/"', 'href="index.html"'],
]

// Make absolute asset paths relative so the file works next to the assets/ folder.
const toRelativeAssets = (s) => s.split('/assets/').join('assets/')
const rewriteLinks = (s) => { for (const [a, b] of linkRewrites) s = s.split(a).join(b); return s }

const overrides = toRelativeAssets(readFileSync(join(APP, 'src', 'overrides.css'), 'utf8'))

const headExtras = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17691289057"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17691289057');
    </script>
    <!-- Live2Support chat widget -->
    <script>(function(){var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0]; stid='dW9OZk0yWXhhbDI0em53cmNDTVVTZz09';pp.type='text/javascript'; pp.async=true; pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/'; ppr.parentNode.insertBefore(pp, ppr);})();</script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">`

const bootstrapJs = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

for (const page of pages) {
  const dir = join(PAGES, page.name)
  const cssDir = join(PAGES, page.cssFrom || page.name)
  const scriptDir = join(PAGES, page.scriptFrom || page.name)
  const content = rewriteLinks(toRelativeAssets(readFileSync(join(dir, 'content.html'), 'utf8')))
  const css = toRelativeAssets(readFileSync(join(cssDir, 'styles.css'), 'utf8'))
  let script = toRelativeAssets(readFileSync(join(scriptDir, 'script.js'), 'utf8'))
    .replace(/export\s+function\s+init/, 'function init')
    .split('</script>').join('<\\/script>') // guard against premature script close

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title}</title>
    <meta id="pageDescription" name="description" content="State-approved traffic school and defensive driving courses that help you dismiss tickets, reduce points, and save on insurance.">
${headExtras}
    <style>
${css}
    </style>
    <style>
${overrides}
    </style>
  </head>
  <body>
${content}

    ${bootstrapJs}
    <script>
${script}
      (function(){
        function run(){ try { init(document); } catch (e) { console.error('page init error:', e); } }
        if (document.readyState !== 'loading') run();
        else document.addEventListener('DOMContentLoaded', run);
      })();
    </script>
  </body>
</html>
`
  writeFileSync(join(OUT, page.out), html)
  console.log(`✓ ${page.out}  (${(html.length / 1024).toFixed(0)} kB)`)
}

// Copy all media (public/assets includes the originals + assets added during edits).
cpSync(join(APP, 'public', 'assets'), join(OUT, 'assets'), { recursive: true })
console.log('\n✓ copied assets/')
console.log('Done ->', OUT)
