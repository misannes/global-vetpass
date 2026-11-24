import {pages} from './content.mjs';
import {header,footer,url} from './components.mjs';
import {home,about,servicePage,processPage,faq,reviewsPage,contact} from './pages.mjs';
const bodies = [home,about,servicePage,processPage,faq,reviewsPage,contact];
export function render(slug,origin,production=false) {
  const index = pages.findIndex(([route])=>route===slug);
  const [,name,description] = pages[index];
  const title = (slug ? name : 'Viagens internacionais com pets') + ' | Global VetPass';
  const canonical = new URL(url(slug), origin).href;
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>
<meta name="description" content="${description}"><meta name="robots" content="${production?'index, follow':'noindex, nofollow'}"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:locale" content="pt_BR"><meta property="og:site_name" content="Global VetPass"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${new URL('/media/journey-1200.webp',origin).href}">
<link rel="icon" type="image/png" href="/brand/gvp-mark.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;700&amp;family=Raleway:wght@400;500;600;700&amp;display=swap" rel="stylesheet"><link href="/site.css" rel="stylesheet"><script src="/site.js" defer></script></head>
<body>${header(slug)}<main id="conteudo" tabindex="-1">${bodies[index]()}</main>${footer}</body></html>`;
}


