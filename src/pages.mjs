import {readFileSync} from 'node:fs';
import {testimonials} from './testimonials.mjs';
import {services,steps,questions} from './content.mjs';
import {label,photo,seal,link,cta,lines,intro,wa} from './components.mjs';

export function home(){return `
<section class="cover"><div class="home-hero wrap">
  <div class="hero-copy">${label('Viagens internacionais com pets')}
    <h1>A viagem é <em>de vocês.</em></h1>
    <p class="lead">Você escolhe o destino. A Global VetPass orienta a documentação e o preparo do seu pet para atravessar fronteiras.</p>
    <div class="actions">${link('/contato/','Planejar minha viagem')}${link('/como-funciona/','Como funciona','text-link')}</div>
  </div>
  <div class="album">
    <div class="postcards">
      <div class="postcard back">${photo('journey','',false,'30vw')}</div>
      <figure class="postcard front" id="travel-card">${photo('dog','',true,'(max-width:680px) 66vw, 34vw')}<figcaption>Companheiros de viagem</figcaption></figure>
      ${seal}
    </div>
    <div class="album-controls" hidden><span aria-live="polite" class="album-position">Retrato 1 de 3</span><button type="button" aria-controls="travel-card" class="turn-card">Virar cartão <span aria-hidden="true">↻</span></button></div>
    <template id="portraits"><figure>${photo('cat')}<figcaption>Olhar de viajante</figcaption></figure><figure><img src="/media/rabbit-480.webp" srcset="/media/rabbit-480.webp 480w, /media/rabbit-900.webp 900w" sizes="(max-width:680px) 66vw, 34vw" width="900" height="1350" alt="Coelho na entrada da transportadora."><figcaption>Antes da partida</figcaption></figure></template>
  </div>
</div></section>
<section class="manifesto"><div class="wrap split"><div>${label('Sobre a Global VetPass')}<h2>A viagem começa <em>antes da mala.</em></h2></div><div><p class="lead">Para você, é uma viagem em família. Para o seu pet, cada fronteira traz perguntas próprias.</p><p>A Global VetPass ajuda a entender o que o destino exige e a organizar cada documento, com orientação veterinária e atenção à história de cada animal.</p>${link('/sobre/','Conheça a GVP','text-link')}</div></div></section>
<section class="section wrap split"><div>${label('Nossa assessoria')}<h2>O que preparar para a partida</h2>${link('/servicos/','Explorar os serviços','text-link')}</div><div>${lines(services)}</div></section>
<section class="journey-preview wrap"><div class="wide-photo">${photo('journey')}</div><div>${label('Como funciona')}<h2>Do primeiro plano ao embarque.</h2><p>O ponto de partida é uma conversa sobre o seu animal. A partir dela, organizamos as etapas de acordo com o itinerário e com o que vocês já têm em mãos.</p>${link('/como-funciona/','Conhecer as etapas','text-link')}</div></section>${cta}`;}

export function about(){return `<section class="wrap about-intro">${intro('Sobre nós','O cuidado atravessa <em>fronteiras.</em>','A Global VetPass nasceu de uma preocupação simples. Quando um animal viaja com a família, as decisões sobre a rota também precisam levar em conta quem ele é.')}<figure class="portrait">${photo('cat','',true)}<figcaption>Global VetPass · Nosso olhar</figcaption></figure></section>
<section class="manifesto"><div class="wrap split"><div>${label('Nosso propósito')}<h2>Dar clareza a cada escolha.</h2></div><p class="lead">Traduzimos requisitos de viagem em orientações que o tutor consegue entender e colocar em prática. A documentação é parte do trabalho. Entender o animal que está por trás dela é o ponto de partida.</p></div></section>
<section class="wrap section split"><h2>Como atendemos</h2><div class="notes"><article><h3>Escuta antes da orientação</h3><p>Primeiro, entendemos a espécie, o histórico de viagem e os planos da família. É essa conversa que dá contexto à assessoria.</p></article><article><h3>Precisão na linguagem</h3><p>Explicamos para que serve cada registro e quais informações dependem de confirmação no destino ou com a transportadora.</p></article><article><h3>Atenção ao animal</h3><p>O porte, a espécie e as particularidades do pet acompanham o planejamento desde a escolha do trajeto.</p></article></div></section>${cta}`;}

const routeStamp = readFileSync(new URL('../public/brand/bilhete-gvp.svg', import.meta.url), 'utf8');
export function servicePage(){return `<section class="wrap section service-title">${intro('Serviços','Assessoria para <em>cada rota.</em>','Da escolha do trajeto à organização dos documentos, o atendimento parte do destino e das particularidades do seu animal.')}<div class="route-stamp" aria-hidden="true">${routeStamp}</div></section><section class="wrap service-layout"><figure><img class="rabbit-photo" src="/media/rabbit-900.webp" srcset="/media/rabbit-480.webp 480w, /media/rabbit-900.webp 900w" sizes="(max-width:680px) 89vw, 40vw" width="900" height="1350" alt="Coelho na entrada de uma caixa de transporte aberta."><figcaption>Preparação para o transporte</figcaption></figure><div><h2>Frentes de orientação</h2>${lines(services)}</div></section>${cta}`;}

export function processPage(){return `<section class="route-hero"><div class="wrap">${intro('Como funciona','O caminho até <em>o embarque.</em>','Quatro momentos para entender como a assessoria acompanha a preparação da sua viagem.')}</div></section><section class="wrap section route-grid"><aside class="route-aside">${photo('journey')}<p>O itinerário guia a preparação.</p></aside><div class="timeline">${steps.map(([k,t,p],i)=>`<article><span class="step">0${i+1} / ${k}</span><h2>${t}</h2><p>${p}</p></article>`).join('')}</div></section>${cta}`;}

export function faq(){return `<section class="faq-page"><div class="faq-heading"><div class="wrap">${intro('Perguntas frequentes','Antes de <em>partir.</em>','Respostas para as primeiras dúvidas de quem está planejando uma viagem internacional com um animal.')}</div></div><div class="faq-layout wrap"><nav class="topic-nav" aria-label="Temas das perguntas"><h2>Nesta página</h2>${questions.map(([theme],i)=>link('#tema-'+i,theme,'topic')).join('')}</nav><div>${questions.map(([theme,items],i)=>`<section class="question-group" id="tema-${i}"><h2>${theme}</h2>${lines(items)}</section>`).join('')}</div></div></section>${cta}`;}

export function contact(){return `<section class="wrap section contact-layout"><div>${intro('Contato','Vamos planejar <em>a viagem?</em>','Conte quem vai com você e qual é o destino. Essas informações ajudam a GVP a orientar a primeira conversa.')}<div class="contact-info"><h2>Prefere falar diretamente?</h2>${link(wa,'+55 11 93024-2870','text-link')}<p>WhatsApp da Global VetPass</p><a class="text-link" href="mailto:contato@globalvetpass.com">contato@globalvetpass.com</a></div></div><form id="trip" action="${wa}" method="get"><h2>Sobre a sua viagem</h2><p>Os campos com asterisco são obrigatórios.</p><div class="fields"><label>Seu nome *<input name="tutor" autocomplete="given-name" required maxlength="80"></label><label>Nome do pet *<input name="pet" required maxlength="80"></label><label>Espécie *<input name="especie" placeholder="Ex. cão, gato, coelho" required maxlength="80"></label><label>Previsão de viagem<input name="quando" placeholder="Ex. julho de 2027" maxlength="80"></label><label>Origem *<input name="origem" placeholder="Cidade ou país" required maxlength="120"></label><label>Destino *<input name="destino" placeholder="Cidade ou país" required maxlength="120"></label><label class="full">O que gostaria de saber?<textarea name="mensagem" rows="3" maxlength="600"></textarea></label></div><p class="form-note">Sua mensagem será aberta no WhatsApp para você revisar e enviar.</p><button class="button" type="submit">Continuar no WhatsApp</button></form><noscript><p>Para iniciar sua conversa, <a href="${wa}">abra o WhatsApp da GVP</a>.</p><style>#trip{display:none}</style></noscript></section>`;}





function reviews(standalone){
  const heading = standalone ? 'h1' : 'h2';
  return `<section class="testimonials" aria-label="Depoimentos"><div class="review-wrap">
    <p class="review-kicker">Depoimentos</p><${heading}>Notícias de quem<br> já chegou.</${heading}>
    <p class="review-deck">Algumas das mensagens que recebemos depois de cada viagem.</p>
    <div class="review-gallery"><div class="review-grid">${testimonials.map(({name,place,quote})=>`<figure class="review"><blockquote>“${quote}”</blockquote><figcaption><strong>${name}</strong><span>${place}</span></figcaption></figure>`).join('')}</div>
    <div class="review-arrows" hidden><button type="button" data-prev aria-label="Depoimento anterior">‹</button><button type="button" data-next aria-label="Próximo depoimento">›</button></div></div>
    <div class="review-dots" hidden aria-label="Escolher depoimento"></div><span class="sr-only" aria-live="polite" data-review-status></span>
    ${standalone?'':'<a class="text-link review-more" href="/depoimentos/">Ver aba de depoimentos</a>'}
  </div></section>`;
}
export function reviewsPage(){return reviews(true);}


