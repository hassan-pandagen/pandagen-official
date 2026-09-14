import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Audit the existing local production build; no forms are submitted.
const out = path.dirname(fileURLToPath(import.meta.url));
const targets = await (await fetch('http://127.0.0.1:9335/json/list')).json();
const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let id = 0;
const pending = new Map();
socket.onmessage = event => {
  const result = JSON.parse(event.data);
  if (!pending.has(result.id)) return;
  const request = pending.get(result.id);
  pending.delete(result.id);
  result.error ? request.reject(new Error(JSON.stringify(result.error))) : request.resolve(result.result);
};
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function capture(name) {
  await delay(250);
  const result = await send('Page.captureScreenshot', { format: 'png' });
  await fs.writeFile(path.join(out, 'screenshots', name + '.png'), Buffer.from(result.data, 'base64'));
}
await fs.mkdir(path.join(out, 'screenshots'), { recursive: true });
await send('Page.enable');
await send('Runtime.enable');
const measurements = [];
for (const view of [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }]) {
  await send('Emulation.setDeviceMetricsOverride', { width: view.width, height: view.height, deviceScaleFactor: 1, mobile: view.name === 'mobile' });
  await send('Page.navigate', { url: 'http://127.0.0.1:3005/services/ai-seo' });
  await delay(1700);
  await evaluate('document.fonts.ready.then(() => true)');
  await delay(400);
  if (view.name === 'desktop') await capture('desktop-first-visit');
  await evaluate(`([...document.querySelectorAll('button')].find(e => /Reject optional/i.test(e.innerText)))?.click()`);
  await delay(300);
  await evaluate('scrollTo(0,0)');
  const data = await evaluate(`(() => {
    const pos = el => { const r = el.getBoundingClientRect(); return { text: el.innerText?.trim(), top: Math.round(r.top + scrollY), height: Math.round(r.height), width: Math.round(r.width) }; };
    const words = text => text.trim().split(/\\s+/).filter(Boolean).length;
    const sections = [...document.querySelectorAll('main > section')].map((e, i) => ({index:i, heading:e.querySelector('h1,h2')?.innerText, words:words(e.innerText), ...pos(e)}));
    return {
      title:document.title, description:document.querySelector('meta[name="description"]')?.content,
      canonical:document.querySelector('link[rel="canonical"]')?.href,
      robots:[...document.querySelectorAll('meta[name="robots"]')].map(e=>e.content),
      viewport:{width:innerWidth,height:innerHeight}, pageHeight:document.documentElement.scrollHeight,
      scrollWidth:document.documentElement.scrollWidth, sections,
      headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>({tag:e.tagName,...pos(e)})),
      ctas:[...document.querySelectorAll('main button,main a')].filter(e=>/Ask us about your site|Check your website|Book a call|Get your migration plan/.test(e.innerText)).map(e=>({...pos(e),href:e.getAttribute('href'),calLink:e.getAttribute('data-cal-link')})),
      links:[...new Set([...document.querySelectorAll('a[href]')].map(e=>e.getAttribute('href')).filter(h=>h?.startsWith('/')&&!h.startsWith('//')))],
      table:{clientWidth:document.querySelector('table')?.clientWidth,scrollWidth:document.querySelector('table')?.scrollWidth},
      bodyText:document.body.innerText,
      jsonLd:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent))
    };
  })()`);
  if (!data.bodyText.includes('Lead attribution, if your stack allows it') || !data.bodyText.includes('What a $500 month actually contains')) throw new Error('Existing build does not contain revision 2');
  measurements.push({name:view.name,...data});
  await capture(view.name + '-hero');
  for (const [name, prefix] of [['scope','What a $500 month'],['additions','Where it goes beyond'],['close','Want to know how']]) {
    const top = data.headings.find(h => h.text.startsWith(prefix)).top;
    await evaluate('scrollTo(0,' + Math.max(0,top-120) + ')');
    await capture(view.name + '-' + name);
  }
  if (view.name === 'desktop') {
    await evaluate(`([...document.querySelectorAll('button')].find(e => e.innerText.trim()==='Ask us about your site')).click()`);
    await delay(450);
    measurements.push({name:'enquiry-modal',...(await evaluate(`(() => { const d=document.querySelector('[role="dialog"]'); return {text:d?.innerText,fields:[...(d?.querySelectorAll('input,textarea')||[])].map(e=>({name:e.name,type:e.type,required:e.required,placeholder:e.placeholder}))}; })()`))});
    await capture('desktop-enquiry-modal');
  }
}
await fs.writeFile(path.join(out,'rendered-measurements.json'),JSON.stringify(measurements,null,2)+'\n');
const links = await Promise.all(measurements[0].links.map(async href => {
  const response = await fetch(new URL(href,'http://127.0.0.1:3005'),{method:'HEAD'});
  return {href,status:response.status};
}));
await fs.writeFile(path.join(out,'local-link-checks.json'),JSON.stringify(links,null,2)+'\n');
console.log(JSON.stringify({views:measurements.filter(v=>v.viewport).map(v=>({name:v.name,pageHeight:v.pageHeight,scrollWidth:v.scrollWidth,sections:v.sections.map(({heading,words,top,height})=>({heading,words,top,height})),ctas:v.ctas,table:v.table})),links},null,2));
socket.close();
