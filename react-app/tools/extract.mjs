// One-shot migration script: splits each static HTML page into the three
// artifacts a React route needs — content.html (markup), styles.css, script.js
// (ported inline logic) — plus a per-page index.jsx. Run with: node tools/extract.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..') // repo root with the .html files
const APP = join(__dirname, '..')
const PAGES = join(APP, 'src', 'pages')

const pages = [
  { src: 'index.html',             name: 'Home',            title: "GoToTrafficSchool.com | America's Original Traffic School" },
  { src: 'about.html',             name: 'About',           title: 'About Us | GoToTrafficSchool.com' },
  { src: 'howItWorks.html',        name: 'HowItWorks',      title: 'How It Works | GoToTrafficSchool.com' },
  { src: 'faq.html',               name: 'Faq',             title: 'FAQs | GoToTrafficSchool.com' },
  { src: 'partners.html',          name: 'Partners',        title: 'Partner With Us | GoToTrafficSchool.com' },
  { src: 'contactus.html',         name: 'Contact',         title: 'Contact Us | GoToTrafficSchool.com' },
  { src: 'court-landing.html',     name: 'CourtLanding',    title: 'Court Programs | GoToTrafficSchool.com' },
  { src: 'state-landingpage.html', name: 'StateLanding',    title: 'State Traffic School | GoToTrafficSchool.com' },
  { src: 'state-faq.html',         name: 'StateFaq',        title: 'State FAQs | GoToTrafficSchool.com' },
  { src: 'alt-registration.html',  name: 'AltRegistration', title: 'Registration | GoToTrafficSchool.com' },
]

// External URLs that have a local route equivalent (header/brand/footer nav).
// Order matters: the specific .aspx links are replaced before the bare root.
const linkRewrites = [
  ['https://www.gototrafficschool.com/about-cyberactive.aspx', '/about'],
  ['https://www.gototrafficschool.com/about.aspx', '/how-it-works'],
  ['https://www.gototrafficschool.com/FAQ-v2.aspx', '/faq'],
  ['https://www.gototrafficschool.com/partnerProgram.aspx', '/partners'],
  ['https://www.gototrafficschool.com/contactus-v2.aspx', '/contact'],
  ['="https://www.gototrafficschool.com/"', '="/"'],
]

const siteTranslations = readFileSync(join(ROOT, 'assets', 'site-translations.js'), 'utf8')

function rewriteAssets(s) {
  return s
    .replace(/="assets\//g, '="/assets/')
    .replace(/url\((['"]?)assets\//g, 'url($1/assets/')
}

function rewriteLinks(s) {
  for (const [from, to] of linkRewrites) s = s.split(from).join(to)
  return s
}

function extractStyles(html) {
  const re = /<style\b[^>]*>([\s\S]*?)<\/style>/gi
  let out = '', m
  while ((m = re.exec(html))) out += m[1] + '\n'
  return rewriteAssets(out)
}

function extractBody(html) {
  const m = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)
  let body = m ? m[1] : html
  // drop every <script> (logic is ported into script.js) and <style> (in styles.css)
  body = body.replace(/<script\b[\s\S]*?<\/script>/gi, '')
  body = body.replace(/<style\b[\s\S]*?<\/style>/gi, '')
  body = rewriteLinks(rewriteAssets(body))
  return body.trim()
}

function extractScripts(html) {
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
  const blocks = []
  let m
  while ((m = re.exec(html))) {
    const attrs = m[1]
    const code = m[2]
    if (/\bsrc\s*=/.test(attrs)) continue // external script (bootstrap, gtag loader, site-translations)
    if (/dataLayer|gtag\(/.test(code) && code.length < 400) continue // gtag bootstrap
    if (/live2support|chatwindow/.test(code)) continue // chat widget
    blocks.push(code)
  }
  return blocks
}

function buildScriptModule(blocks, usesSiteTranslations) {
  let body = ''
  if (usesSiteTranslations) {
    body += '  // ---- inlined assets/site-translations.js ----\n  ;(function(){\n'
    body += siteTranslations + '\n  })();\n\n'
  }
  blocks.forEach((code, i) => {
    body += `  // ---- page script block ${i + 1} ----\n  ;(function(){\n${code}\n  })();\n\n`
  })
  return `// Auto-ported from the original page's inline <script> blocks.\n// Runs once after the page markup mounts (see PageShell).\nexport function init(root) {\n${body}}\n`
}

function jsx(name, title) {
  return `import html from './content.html?raw'
import css from './styles.css?inline'
import { init } from './script.js'
import PageShell from '../../components/PageShell.jsx'

export default function ${name}() {
  return <PageShell html={html} css={css} init={init} title={${JSON.stringify(title)}} />
}
`
}

for (const page of pages) {
  const html = readFileSync(join(ROOT, page.src), 'utf8')
  const dir = join(PAGES, page.name)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  const usesSiteTranslations = /assets\/site-translations\.js/.test(html)

  writeFileSync(join(dir, 'content.html'), extractBody(html))
  writeFileSync(join(dir, 'styles.css'), extractStyles(html))
  writeFileSync(join(dir, 'script.js'), buildScriptModule(extractScripts(html), usesSiteTranslations))
  writeFileSync(join(dir, 'index.jsx'), jsx(page.name, page.title))

  console.log(`✓ ${page.src} -> src/pages/${page.name}/  (siteTranslations: ${usesSiteTranslations})`)
}

console.log('\nDone.')
