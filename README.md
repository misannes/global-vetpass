# Global VetPass · Redesign institucional

## Revisar após extrair o ZIP
Abra previa/inicio.html para navegar pelas sete páginas com um duplo clique. A pasta previa precisa permanecer ao lado de dist. Para regenerá-la depois do build, execute node portable.mjs.

A pasta `dist/` contém o site completo para um servidor estático. No computador com Node.js 20 ou mais recente, abra o terminal nesta pasta, execute `node preview.mjs` e visite http://127.0.0.1:4173 . Use Ctrl+C para encerrar. A versão entregue já está compilada. A prévia usa noindex.

## Editar
- `src/content.mjs` reúne os textos dos serviços, as etapas, as perguntas, os nomes das rotas e suas descrições.
- `src/pages.mjs` define a composição de cada página.
- `src/components.mjs` reúne navegação, rodapé, imagens, acordeões e chamadas para contato.
- `src/render.mjs` define o documento HTML e os metadados por rota.
- `public/site.css` contém as cores, a tipografia, o layout e o movimento.
- `public/site.js` controla o menu em telas pequenas, a revelação de conteúdo e a mensagem no WhatsApp.
- `public/brand/` e `public/media/` contêm os arquivos locais e seus créditos. As fontes usam Google Fonts e as quatro fotografias são distribuídas localmente. O texto dispõe de fontes alternativas do sistema.
- Execute `node build.mjs` depois das alterações. O gerador utiliza apenas a biblioteca padrão do Node.js. O servidor final entrega HTML, CSS, JS e imagens diretamente.

## Direção de arte
A referência da 1900 conduz o olhar com um título dominante, uma fotografia de abertura e uma passagem para a narrativa institucional. Na GVP, uma capa bordô reúne uma paisagem e um álbum de três retratos de animais em formato de cartão-postal. O visitante pode virar o cartão por clique ou teclado. A paleta parte dos bordôs do logotipo original, com creme e areia do projeto existente. Alegreya SC estabelece a hierarquia e Raleway acompanha a leitura. O itálico de apoio usa Georgia.

O movimento prioriza a leitura: entrada escalonada, pequena rotação dos cartões, aparecimento das etapas ao rolar e transições de página em navegadores compatíveis. A preferência de movimento reduzido desativa esses efeitos. As páginas e os acordeões funcionam com HTML nativo.

## Contato
O formulário exige nome do tutor, nome e espécie do animal, origem e destino. O botão abre uma mensagem formatada para +55 11 93024-2870. O tutor revisa e confirma o envio no WhatsApp. O site não grava os dados e não informa entrega de mensagem. Sem JavaScript, há um link direto para atendimento.

## Instalação futura na Hostinger
1. Após aprovação do redesign, confirme com a GVP o domínio final, os serviços descritos e o número de atendimento. Equipe nominal e horários dependem de confirmação. O e-mail público é contato@globalvetpass.com. Caso desejem receber formulários por e-mail, será necessária uma integração própria.
2. Para homologar na Hostinger, use um site de teste com diretório próprio e acesso restrito. Confirme que a raiz desse ambiente é distinta da instalação WordPress atual. Gere a versão com `PREVIEW_URL` igual à origem de homologação e sem definir `SITE_URL`. A versão de revisão bloqueia indexação, mas isso não substitui controle de acesso.
3. Para a publicação aprovada, defina `SITE_URL` com a origem HTTPS oficial e execute `node build.mjs`. No PowerShell, use `$env:SITE_URL = 'https://dominio-confirmado.com'` em uma linha e o comando de build na linha seguinte. A variável habilita indexação e atualiza URLs canônicas, Open Graph e sitemap.
4. Faça um backup recuperável dos arquivos e do banco WordPress antes da mudança. Prepare a nova versão em uma pasta separada. O conteúdo que será servido é **o interior de dist/**, com `index.html`, as seis subpastas de páginas e os recursos na mesma raiz.
5. No Gerenciador de Arquivos do hPanel, confira o domínio e a raiz que receberão os arquivos. Evite extrair o pacote sobre a instalação WordPress. Planeje uma troca reversível da raiz com a hospedagem, conforme as opções do plano. Mantenha uma cópia acessível do site anterior para reversão.
6. Confira as sete URLs diretamente e por links internos, abra o site num celular e valide o formulário com o responsável pelo WhatsApp. Revise redirecionamentos das URLs antigas antes de ativar a versão definitiva. A entrega estática funciona sem banco, PHP ou Node.js no servidor. A migração da página não requer mudar MX, SPF, DKIM ou contas de e-mail.

Referência do hPanel: https://www.hostinger.com/br/support/4548688-como-usar-o-gerenciador-de-arquivos-na-hostinger/

Referência de conteúdo para viagens com cães e gatos: https://www.gov.br/agricultura/pt-br/assuntos/vigilancia-agropecuaria/animais-estimacao/perguntas-frequentes/perguntas-e-respostas-frequentes-sobre-viagens-internacionais-com-caes-e-gatos

Referência criativa: https://1900.com.br/






