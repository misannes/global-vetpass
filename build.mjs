import {mkdir,cp,writeFile} from 'node:fs/promises';
import {pages} from './src/content.mjs';
import {url} from './src/components.mjs';
import {render} from './src/render.mjs';
const production = Boolean(process.env.SITE_URL);
const origin = new URL(process.env.SITE_URL || process.env.PREVIEW_URL || 'http://localhost:4173').origin;
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
for (const [slug] of pages) {
  const dir = 'dist/' + slug;
  await mkdir(dir,{recursive:true});
  await writeFile(dir + '/index.html',render(slug,origin,production));
}
await writeFile('dist/robots.txt', production ? 'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n');
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.map(([s])=>'<url><loc>'+origin+url(s)+'</loc></url>').join('')+'</urlset>');
console.log('Sete páginas estáticas geradas em dist/.');


