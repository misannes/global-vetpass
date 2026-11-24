import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pages } from './src/content.mjs';
await mkdir('previa',{recursive:true});
const fileName = slug => (slug || 'inicio') + '.html';
for(const [slug] of pages){
  const doc=await readFile('dist/'+(slug?slug+'/':'')+'index.html','utf8');
  const portable=doc.replace(/href="\/(?:([\w-]+)\/)?"/g,(_,id)=>'href="'+fileName(id)+'"')
    .replace(/(["' ,])\/(media\/|brand\/|site\.css|site\.js)/g,'$1../dist/$2');
  await writeFile('previa/'+fileName(slug),portable);
}

