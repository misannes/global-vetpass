import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const base=path.resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.txt':'text/plain','.xml':'application/xml'};
const server=http.createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file=path.resolve(base,'.'+pathname);
    if (file!==base && !file.startsWith(base+path.sep)) throw Error();
    if ((await stat(file)).isDirectory()) file=path.join(file,'index.html');
    const data=await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream'}).end(data);
  } catch { res.writeHead(404).end('Página não encontrada'); }
});
server.listen(Number(process.env.PORT || 4173),'127.0.0.1',()=>console.log('http://127.0.0.1:'+server.address().port));


