import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Read-only review of the existing local production build. No forms are sent.
const out = path.dirname(fileURLToPath(import.meta.url));
const targets = await (await fetch('http://127.0.0.1:9334/json/list')).json();
const target = targets.find(t => t.type === 'page');
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let id = 0;
const pending = new Map();
socket.onmessage = event => {
  const data = JSON.parse(event.data);
  if (pending.has(data.id)) {
    const { resolve, reject } = pending.get(data.id);
    pending.delete(data.id);
    data.error ? reject(new Error(JSON.stringify(data.error))) : resolve(data.result);
  }
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
await send('Page.enable');
await send('Runtime.enable');
const measurements = [];
await fs.mkdir(path.join(out, 'screenshots'), { recursive: true });
for (const view of [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }]) {
  await send('Emulation.setDeviceMetricsOverride', { width: view.width, height: view.height, deviceScaleFactor: 1, mobile: view.name === 'mobile' });
  await send('Page.navigate', { url: 'http://127.0.0.1:3004/services/ai-seo' });
  await new Promise(resolve => setTimeout(resolve, 1800));
  await evaluate('document.fonts.ready.then(() => true)');
  await new Promise(resolve => setTimeout(resolve, 600));
  const measurement = await evaluate(`(() => {
    const pos = el => { const r=el.getBoundingClientRect(); return { text: el.innerText?.trim(), top: Math.round(r.top + scrollY), height: Math.round(r.height), width: Math.round(r.width) }; };
    return {
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      viewport: {width:innerWidth,height:innerHeight},
      pageHeight: document.documentElement.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
      headings: [...document.querySelectorAll('h1,h2,h3')].map(e=>({tag:e.tagName,...pos(e)})),
      ctas: [...document.querySelectorAll('main button, main a')].filter(e=>/Ask us about your site|Check your website|Book a call|Get your migration plan/.test(e.innerText)).map(e=>({...pos(e),href:e.getAttribute('href'),calLink:e.getAttribute('data-cal-link')})),
      bodyText: document.body.innerText,
      jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent))
    };
  })()`);
  measurements.push({name:view.name,...measurement});
  const screen = await send('Page.captureScreenshot', { format: 'png' });
  await fs.writeFile(path.join(out, 'screenshots', `${view.name}-hero.png`), Buffer.from(screen.data, 'base64'));
  const full = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: {x:0,y:0,width:view.width,height:measurement.pageHeight,scale:1} });
  await fs.writeFile(path.join(out, 'screenshots', `${view.name}-full.png`), Buffer.from(full.data, 'base64'));
  if (view.name === 'desktop') {
    await evaluate(`([...document.querySelectorAll('button')].find(e => e.innerText.trim()==='Ask us about your site')).click()`);
    await new Promise(resolve => setTimeout(resolve, 650));
    measurements.push({name:'desktop-modal',...(await evaluate(`(() => { const dialog=document.querySelector('[role="dialog"]'); return {text:dialog?.innerText, fields:[...(dialog?.querySelectorAll('input,textarea')||[])].map(e=>({type:e.type,placeholder:e.placeholder,required:e.required,name:e.name})),heading:dialog?.querySelector('h2')?.innerText}; })()`))});
    const modal = await send('Page.captureScreenshot', { format:'png' });
    await fs.writeFile(path.join(out,'screenshots','desktop-modal.png'),Buffer.from(modal.data,'base64'));
  }
}
await fs.writeFile(path.join(out, 'rendered-measurements.json'), JSON.stringify(measurements,null,2)+'\n');
console.log(JSON.stringify(measurements.map(m=>({name:m.name,viewport:m.viewport,pageHeight:m.pageHeight,scrollWidth:m.scrollWidth,headings:m.headings?.filter(h=>h.tag!=='H3'),ctas:m.ctas,modalHeading:m.heading})),null,2));
socket.close();
