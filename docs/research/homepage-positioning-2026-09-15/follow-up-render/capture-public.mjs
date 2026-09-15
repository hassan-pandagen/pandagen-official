import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const out=path.dirname(fileURLToPath(import.meta.url));
const targets=await (await fetch('http://127.0.0.1:9340/json/list')).json();
const ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
let id=0;const pending=new Map();
ws.onmessage=e=>{const m=JSON.parse(e.data),p=pending.get(m.id);if(!p)return;pending.delete(m.id);clearTimeout(p.timer);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);};
const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id,timer=setTimeout(()=>{pending.delete(n);reject(new Error('timeout '+method));},20000);pending.set(n,{resolve,reject,timer});ws.send(JSON.stringify({id:n,method,params}));});
try {
  await send('Page.enable');await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  const navigation=await send('Page.navigate',{url:'https://www.pandacodegen.com/'});
  await new Promise(r=>setTimeout(r,4000));
  const result=await send('Runtime.evaluate',{expression:`JSON.stringify({url:location.href,title:document.title,h1:document.querySelector('h1')?.innerText,hero:document.querySelector('h1')?.closest('section')?.innerText,bodyStart:document.body.innerText.slice(0,2500)})`,returnByValue:true});
  const evidence={capturedAt:new Date().toISOString(),navigation,page:JSON.parse(result.result.value)};
  await fs.writeFile(path.join(out,'public-homepage.json'),JSON.stringify(evidence,null,2)+'\n');
  const shot=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(out,'screenshots','public-home-1440.png'),Buffer.from(shot.data,'base64'));
  console.log(JSON.stringify(evidence,null,2));
}finally{ws.close();}
