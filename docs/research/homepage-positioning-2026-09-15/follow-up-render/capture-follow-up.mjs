import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const out = path.dirname(fileURLToPath(import.meta.url));
const sourceFiles = ['src/components/sections/Hero.tsx','src/components/sections/HeroClient.tsx','src/components/sections/HeroAnimated.tsx','src/components/forms/HeroLeadForm.tsx','src/components/layout/Header.tsx','src/components/ui/QuoteModal.tsx','src/app/page.tsx','src/data/company-facts.ts'];
async function manifest() {
  return Promise.all(sourceFiles.map(async file => ({file,sha256:crypto.createHash('sha256').update(await fs.readFile(file)).digest('hex'),modified:(await fs.stat(file)).mtime.toISOString()})));
}
const before = await manifest();
const build = {id:(await fs.readFile('.next/BUILD_ID','utf8')).trim(),modified:(await fs.stat('.next/BUILD_ID')).mtime.toISOString()};
const targets = await (await fetch('http://127.0.0.1:9340/json/list')).json();
const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise((resolve,reject) => {socket.onopen=resolve;socket.onerror=reject;});
let id=0;
const pending=new Map();
socket.onmessage=event=>{const message=JSON.parse(event.data);const request=pending.get(message.id);if(!request)return;pending.delete(message.id);clearTimeout(request.timer);message.error?request.reject(new Error(JSON.stringify(message.error))):request.resolve(message.result);};
function send(method,params={}) {return new Promise((resolve,reject)=>{const requestId=++id;const timer=setTimeout(()=>{pending.delete(requestId);reject(new Error('CDP timeout: '+method));},15000);pending.set(requestId,{resolve,reject,timer});socket.send(JSON.stringify({id:requestId,method,params}));});}
async function evaluate(expression) {const response=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(response.exceptionDetails)throw new Error(JSON.stringify(response.exceptionDetails));return response.result.value;}
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
await fs.mkdir(path.join(out,'screenshots'),{recursive:true});
async function capture(name) {const result=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.join(out,'screenshots',name+'.png'),Buffer.from(result.data,'base64'));}
await send('Page.enable');await send('Runtime.enable');
const measurements=[];
try {
  for(const view of [{width:1440,height:1000},{width:390,height:844},{width:1024,height:900},{width:1279,height:900}]) {
    await send('Emulation.setDeviceMetricsOverride',{...view,deviceScaleFactor:1,mobile:view.width===390});
    await send('Page.navigate',{url:'http://127.0.0.1:3010/'});
    await wait(1700);await evaluate('document.fonts.ready.then(()=>true)');await wait(450);
    await evaluate(`([...document.querySelectorAll('button')].find(e=>/Reject optional/i.test(e.innerText)))?.click()`);
    await wait(350);await evaluate('scrollTo(0,0)');
    const data=await evaluate(`(()=>{
      const visible=e=>!!e.getClientRects().length;
      const box=e=>{if(!e)return null;const r=e.getBoundingClientRect();return {tag:e.tagName,text:e.innerText?.trim(),left:Math.round(r.left),top:Math.round(r.top+scrollY),width:Math.round(r.width),height:Math.round(r.height)};};
      const hero=document.querySelector('main > section');const form=hero.querySelector('form');const main=document.querySelector('main');
      return {viewport:{width:innerWidth,height:innerHeight},title:document.title,canonical:document.querySelector('link[rel=canonical]')?.href,scrollWidth:document.documentElement.scrollWidth,pageHeight:document.documentElement.scrollHeight,h1:box(hero.querySelector('h1')),hero:box(hero),form:box(form),mainWords:main.innerText.trim().split(/\\s+/).length,bodyWords:document.body.innerText.trim().split(/\\s+/).length,
      headerCtas:[...document.querySelectorAll('header a,header button')].filter(visible).map(e=>({...box(e),href:e.getAttribute('href'),ariaLabel:e.getAttribute('aria-label')})),
      heroParagraphs:[...hero.querySelectorAll('p')].map(box),
      heroCtas:[...hero.querySelectorAll('a,button')].filter(visible).map(e=>({...box(e),href:e.getAttribute('href')})),
      formChildren:[...form.children].map(box),
      fields:[...form.querySelectorAll('input,textarea')].map(e=>({name:e.name,type:e.type,required:e.required,label:e.closest('label')?.innerText.trim(),placeholder:e.placeholder})),
      headings:[...main.querySelectorAll('h1,h2,h3')].filter(visible).map(box),mainText:main.innerText};
    })()`);
    if(!data.h1?.text.includes('Websites built for')) throw new Error('Existing build does not match current homepage H1');
    if(view.width===390||view.width===1440) {
      await capture('home-'+view.width+'-hero');
      if(view.width===390) {await evaluate('scrollTo(0,'+Math.max(0,data.form.top-150)+')');await wait(300);await capture('home-390-form');}
      await evaluate(`scrollTo(0,0); [...document.querySelectorAll('header button')].find(e=>e.getClientRects().length && /Ask (us|a question)/.test(e.innerText))?.click()`);
      await wait(800);
      data.modal=await evaluate(`(()=>{const d=document.querySelector('[role=dialog][aria-labelledby=quote-modal-title]');if(!d)return null;const box=e=>{const r=e.getBoundingClientRect();return {text:e.innerText?.trim(),top:Math.round(r.top),height:Math.round(r.height),width:Math.round(r.width)};};return {text:d.innerText,...box(d),fields:[...d.querySelectorAll('input,textarea')].map(e=>({name:e.name,type:e.type,required:e.required,label:e.id?document.querySelector('label[for='+e.id+']')?.innerText:null,placeholder:e.placeholder})),paragraphs:[...d.querySelectorAll('p')].map(box),buttons:[...d.querySelectorAll('button')].map(box)};})()`);
      await capture('home-'+view.width+'-modal');
      await evaluate(`document.querySelector('button[aria-label="Close quote dialog"]')?.click()`);await wait(300);
    }
    measurements.push(data);
  }
  await fs.writeFile(path.join(out,'rendered-measurements.json'),JSON.stringify({capturedAt:new Date().toISOString(),build,before,after:await manifest(),measurements},null,2)+'\n');
  console.log(JSON.stringify(measurements.map(m=>({viewport:m.viewport,mainWords:m.mainWords,bodyWords:m.bodyWords,scrollWidth:m.scrollWidth,h1:m.h1,headerCtas:m.headerCtas,heroCtas:m.heroCtas,heroParagraphs:m.heroParagraphs,headings:m.headings.filter(h=>h.tag!=='H3'),modal:m.modal})),null,2));
} finally {socket.close();}
