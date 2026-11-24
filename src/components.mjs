import {pages} from './content.mjs';
export const url = slug => slug ? '/' + slug + '/' : '/';
export const wa = 'https://wa.me/5511930242870';
export const link = (href, label, kind='button') => `<a class="${kind}" href="${href}">${label}</a>`;
export const label = text => `<p class="eyebrow"><i aria-hidden="true"></i>${text}</p>`;
const photos = {
  dog: [[640,1200,1600], 640,960,'Cão preto e branco de cabeça inclinada diante de um fundo amarelo.'],
  cat: [[640,1000], 640,427,'Gato preto e branco de olhos verdes olhando para a câmera.'],
  journey: [[640,1200,1400],640,427,'Tutora e seu cão observam um lago entre as montanhas.']
};
export function photo(name, cls='', priority=false, sizes='(max-width: 760px) 92vw, 48vw') {
  const [widths,w,h,alt]=photos[name];
  return `<img class="${cls}" src="/media/${name}-${widths[0]}.webp" srcset="${widths.map(n=>'/media/'+name+'-'+n+'.webp '+n+'w').join(', ')}" sizes="${sizes}" width="${w}" height="${h}" alt="${alt}" ${priority?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
}
export const seal = `<svg class="seal" aria-hidden="true" viewBox="0 0 140 140" fill="none"><defs><path id="circle" d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"/></defs><circle cx="70" cy="70" r="67"/><circle cx="70" cy="70" r="43"/><text><textPath href="#circle" textLength="326">GLOBAL VETPASS · VIAGENS INTERNACIONAIS · </textPath></text><g transform="rotate(-18 70 70)"><circle cx="70" cy="70" r="28"/><ellipse cx="70" cy="70" rx="13" ry="28"/><path d="M42 70h56M47 55q23 9 46 0M47 85q23-9 46 0M70 42v56"/></g></svg>`;
export function header(active){
  return `<a class="skip" href="#conteudo">Pular para o conteúdo</a><header><div class="wrap header-inner"><a class="logo" href="/" aria-label="Global VetPass, início"><img src="/brand/gvp-color.png" alt="Global VetPass" width="441" height="202"></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu <span aria-hidden="true">☰</span></button><nav id="main-nav" aria-label="Principal">${pages.map(([slug,title])=>`<a href="${url(slug)}" ${slug===active?'aria-current="page"':''} class="${slug==='contato'?'nav-cta':''}">${slug==='faq'?'FAQ':slug==='contato'?'Fale conosco':title}</a>`).join('')}</nav></div></header>`;
}
export const cta = `<section class="cta"><div class="wrap"><div>${label('Próximo destino')}<h2>Para onde vocês vão?</h2><p>Conte um pouco sobre seu pet e a viagem que está planejando.</p></div>${link('/contato/','Planejar minha viagem','button light')}</div></section>`;
export const footer = `<footer class="gvp-footer"><div class="review-wrap">
  <div class="footer-columns"><div><a href="/" aria-label="Global VetPass, início"><img src="/brand/gvp-white.png" width="441" height="202" alt="Global VetPass"></a><p>Cuidado para novos caminhos.<br>Mobilidade internacional de pets, com planejamento e atenção ao bem-estar.</p></div>
  <div><h2>Explore a GVP</h2><nav aria-label="Rodapé">${[['','Início'],['servicos','Serviços'],['como-funciona','Como funciona'],['sobre','Sobre a GVP'],['depoimentos','Depoimentos'],['contato','Contato']].map(([slug,name])=>link(url(slug),name,'footer-link')).join('')}</nav></div>
  <div><h2>Onde estamos</h2><p>São Paulo, SP · Brasil</p><h2>Vamos conversar</h2><a href="${wa}">WhatsApp: +55 11 93024–2870</a><a href="mailto:contato@globalvetpass.com">E-mail: contato@globalvetpass.com</a><a href="https://www.instagram.com/globalvetpass/">Instagram: @globalvetpass</a><a href="/contato/">Fale com a GVP ↗</a></div></div>
  <div class="footer-base"><span>© 2026 Global VetPass. Todos os direitos reservados.</span><span>Cuidado que atravessa fronteiras.</span></div></div>
  <a class="whatsapp-float" href="${wa}" aria-label="Conversar com a GVP no WhatsApp"><svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M27 15.7a11 11 0 0 1-16.4 9.6L5 27l1.7-5.5A11 11 0 1 1 27 15.7Z"/><path fill="currentColor" stroke="none" d="M12 9c-.9-.3-2.2.9-2.2 2.6 0 3.7 5.6 9.3 9.7 9.3 1.6 0 2.9-1.3 2.6-2.4-.2-.5-2.7-1.7-3.1-1.5l-1.3 1.2c-1.7-.5-3.7-2.3-4.4-3.8l1-1.4c.3-.5-1.5-3.8-2.3-4Z"/></svg></a></footer>`;
export function lines(items){
  return items.map(([title,body],i)=>`<details class="accordion" ${i===0?'open':''}><summary>${title}</summary><p>${body}</p></details>`).join('');
}
export function intro(tag,title,body){return `<div class="intro">${label(tag)}<h1>${title}</h1><p class="lead">${body}</p></div>`;}



