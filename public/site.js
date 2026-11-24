document.documentElement.classList.add('enhanced');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  toggle.firstChild.textContent = open ? 'Fechar ' : 'Menu ';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    toggle.focus();
  }
});
matchMedia('(min-width:831px)').addEventListener('change', () => setMenu(false));
const form = document.querySelector('#trip');
form?.addEventListener('submit', event => {
  event.preventDefault();
  for (const field of form.querySelectorAll('[required]')) {
    if (!field.value.trim()) {
      field.setCustomValidity('Preencha este campo.');
      field.reportValidity();
      field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
      return;
    }
  }
  const data = new FormData(form);
  const fields = [['tutor','Tutor(a)'],['pet','Pet'],['especie','Espécie'],['origem','Origem'],['destino','Destino'],['quando','Previsão'],['mensagem','Dúvida']];
  const contents = fields.filter(([key]) => data.get(key)?.trim()).map(([key, name]) => name + ': ' + data.get(key).trim());
  const url = new URL(form.action);
  url.searchParams.set('text', ['Olá, Global VetPass! Quero planejar uma viagem com meu pet.', ...contents].join('\n'));
  location.assign(url.href);
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('arrived');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: .12 });
  document.querySelectorAll('.timeline article,.notes article,.wide-photo,.question-group').forEach(item => observer.observe(item));
}

const card = document.querySelector('#travel-card');
if (card) {
  const controls = document.querySelector('.album-controls');
  const pages = [card.cloneNode(true), ...document.querySelector('#portraits').content.querySelectorAll('figure')];
  let current = 0;
  controls.hidden = false;
  controls.querySelector('button').addEventListener('click', () => {
    current = (current + 1) % pages.length;
    const content = pages[current].cloneNode(true);
    card.replaceChildren(...content.childNodes);
    controls.querySelector('.album-position').textContent = 'Retrato ' + (current + 1) + ' de ' + pages.length;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      card.animate([{rotate:'y -16deg',translate:'0 -6px'},{rotate:'y 0deg',translate:'0 0'}],{duration:380,easing:'ease-out'});
    }
  });
}
document.querySelectorAll('.testimonials').forEach(section => {
  const cards = [...section.querySelectorAll('.review')];
  const dots = section.querySelector('.review-dots');
  const mobile = matchMedia('(max-width:680px)');
  let first = 0;
  function show(index) {
    first = (index + cards.length) % cards.length;
    cards.forEach((card, i) => {
      const position = (i - first + cards.length) % cards.length;
      card.hidden = position >= (mobile.matches ? 1 : 2);
      card.style.order = position;
      dots.children[i].setAttribute('aria-pressed', String(i === first));
    });
    section.querySelector('[data-review-status]').textContent = 'Depoimento de ' + cards[first].querySelector('strong').textContent;
  }
  cards.forEach((card, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label','Mostrar relato de ' + card.querySelector('strong').textContent);
    dot.addEventListener('click', () => show(i));
    dots.append(dot);
  });
  section.querySelector('[data-prev]').addEventListener('click', () => show(first - 1));
  section.querySelector('[data-next]').addEventListener('click', () => show(first + 1));
  mobile.addEventListener('change', () => show(first));
  section.querySelector('.review-arrows').hidden = false;
  dots.hidden = false;
  show(0);
});
