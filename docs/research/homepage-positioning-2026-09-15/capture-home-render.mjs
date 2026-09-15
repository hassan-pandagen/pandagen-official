import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const out = path.dirname(fileURLToPath(import.meta.url));
const targets = await (await fetch('http://127.0.0.1:9337/json/list')).json();
const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let id = 0;
const pending = new Map();
socket.onmessage = event => {
  const message = JSON.parse(event.data);
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  clearTimeout(request.timer);
  message.error ? request.reject(new Error(JSON.stringify(message.error))) : request.resolve(message.result);
};
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const requestId = ++id;
    const timer = setTimeout(() => { pending.delete(requestId); reject(new Error('CDP timeout: ' + method)); }, 15000);
    pending.set(requestId, { resolve, reject, timer });
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });
}
async function evaluate(expression) {
  const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (response.exceptionDetails) throw new Error(JSON.stringify(response.exceptionDetails));
  return response.result.value;
}
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
await fs.mkdir(path.join(out, 'screenshots'), { recursive: true });
async function capture(name) {
  const result = await send('Page.captureScreenshot', { format: 'png' });
  await fs.writeFile(path.join(out, 'screenshots', name + '.png'), Buffer.from(result.data, 'base64'));
}
await send('Page.enable');
await send('Runtime.enable');
const measurements = [];
try {
  for (const view of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1024, height: 900 }]) {
    await send('Emulation.setDeviceMetricsOverride', { width: view.width, height: view.height, deviceScaleFactor: 1, mobile: view.width === 390 });
    await send('Page.navigate', { url: 'http://127.0.0.1:3007/' });
    await wait(1700);
    await evaluate('document.fonts.ready.then(() => true)');
    await wait(450);
    if (view.width === 1440) await capture('home-1440-first-visit');
    await evaluate(`([...document.querySelectorAll('button')].find(e => /Reject optional/i.test(e.innerText)))?.click()`);
    await wait(350);
    await evaluate('scrollTo(0,0)');
    const data = await evaluate(`(() => {
      const box = el => { if (!el) return null; const r=el.getBoundingClientRect(); return {tag:el.tagName,text:el.innerText?.trim(),left:Math.round(r.left),top:Math.round(r.top+scrollY),width:Math.round(r.width),height:Math.round(r.height)}; };
      const hero=document.querySelector('main > section');
      const h1=hero.querySelector('h1');
      return {
        viewport:{width:innerWidth,height:innerHeight},title:document.title,canonical:document.querySelector('link[rel="canonical"]')?.href,
        pageHeight:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,
        h1:box(h1),h1Computed:{fontFamily:getComputedStyle(h1).fontFamily,fontSize:getComputedStyle(h1).fontSize,lineHeight:getComputedStyle(h1).lineHeight},
        hero:box(hero),form:box(hero.querySelector('form')),
        heroFields:[...hero.querySelectorAll('input,textarea')].map(e=>({name:e.name,type:e.type,required:e.required,label:e.closest('label')?.innerText?.trim(),placeholder:e.placeholder})),
        heroCtas:[...hero.querySelectorAll('a,button')].filter(e=>e.getClientRects().length).map(e=>({...box(e),href:e.getAttribute('href')})),
        sections:[...document.querySelectorAll('main > section')].map(e=>({heading:e.querySelector('h1,h2')?.innerText,...box(e)})),
        headings:[...document.querySelectorAll('main h1,main h2,main h3')].filter(e=>e.getClientRects().length).map(box),
        images:[...document.querySelectorAll('main img')].map(e=>({src:e.getAttribute('src'),alt:e.alt,loaded:e.complete&&e.naturalWidth>0,...box(e)})),
        footerCta:[...document.querySelectorAll('footer button')].map(box),
        bodyText:document.body.innerText
      };
    })()`);
    if (!data.h1?.text.includes('Website redesign and migration')) throw new Error('Existing build does not match inspected homepage H1');
    measurements.push(data);
    if (view.width === 390 || view.width === 1440) await capture('home-' + view.width + '-hero');
    if (view.width === 390) {
      await evaluate('scrollTo(0,' + Math.max(0,data.form.top-100) + ')');
      await wait(300);
      await capture('home-390-form');
    }
  }
  await fs.writeFile(path.join(out, 'home-rendered-measurements.json'), JSON.stringify(measurements,null,2)+'\n');
  console.log(JSON.stringify(measurements.map(m=>({viewport:m.viewport,scrollWidth:m.scrollWidth,pageHeight:m.pageHeight,h1:m.h1,form:m.form,heroCtas:m.heroCtas.map(({text,top,height,width})=>({text,top,height,width})),headings:m.headings.map(({tag,text,top})=>({tag,text,top}))})),null,2));
} finally {
  socket.close();
}
