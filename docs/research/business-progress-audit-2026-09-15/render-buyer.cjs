// Isolated headless visual inspection; no live form submissions or existing browser sessions.
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx/cbf1b8a072280925/node_modules/playwright'));
const out = __dirname;
fs.mkdirSync(path.join(out, 'screenshots'), { recursive: true });
(async () => {
  const browser = await chromium.launch({ headless: true });
  const rows = [];
  try {
    for (const width of [1440,390]) {
      const context = await browser.newContext({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
      await context.route('**/api/submit-quote', route => route.abort('blockedbyclient'));
      for (const route of ['/', '/services', '/services/ecommerce', '/services/custom-engineering', '/services/ai-seo', '/work']) {
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        try {
          const response = await page.goto('http://localhost:3000'+route, { waitUntil: 'domcontentloaded', timeout: 60000 });
          await page.locator('h1').waitFor({timeout:30000});
          await page.evaluate(() => document.fonts.ready);
          const reject = page.getByRole('button', { name: 'Reject optional', exact: true });
          await reject.waitFor({state:'visible',timeout:2500}).catch(()=>{});
          if(await reject.isVisible()) await reject.click();
          await page.waitForTimeout(700);
          const data = await page.evaluate(() => {
            const box = e => { const r=e.getBoundingClientRect(); return { top:Math.round(r.top+scrollY), height:Math.round(r.height), left:Math.round(r.left), width:Math.round(r.width) }; };
            const main = document.querySelector('main') ?? document.body;
            return {
              title:document.title, viewport:innerWidth, scrollWidth:document.documentElement.scrollWidth, pageHeight:document.documentElement.scrollHeight,
              consentBannerVisible:[...document.querySelectorAll('button')].some(e=>e.innerText.trim()==='Reject optional' && e.getBoundingClientRect().height>0),
              headings:[...main.querySelectorAll('h1,h2,h3')].map(e=>({tag:e.tagName,text:e.innerText.trim(),...box(e)})),
              controls:[...main.querySelectorAll('a,button')].filter(e=>e.getBoundingClientRect().height && e.innerText.trim()).map(e=>({text:e.innerText.trim(),tag:e.tagName,href:e.getAttribute('href'),...box(e)})),
              fields:[...main.querySelectorAll('form input,form textarea,form select')].filter(e=>e.getBoundingClientRect().height).map(e=>({name:e.name,type:e.type,required:e.required,...box(e)})),
            };
          });
          const filename = `${route==='/'?'home':route.slice(1).replaceAll('/','--')}-${width}.png`;
          await page.screenshot({path:path.join(out,'screenshots',filename),animations:'disabled'});
          rows.push({route,width,status:response?.status(),...data,errors,screenshot:'screenshots/'+filename});
        } catch(error) { rows.push({route,width,error:error.message,errors}); }
        await page.close();
      }
      await context.close();
    }
  } finally { await browser.close(); }
  fs.writeFileSync(path.join(out,'buyer-render.json'),JSON.stringify({checkedUtc:new Date().toISOString(),method:'Isolated headless Chromium; desktop/mobile top screens and DOM positions; optional cookies rejected; no submissions. Not a production or full-browser compatibility test.',rows},null,2)+'\n');
  console.log(JSON.stringify(rows.map(r=>({route:r.route,width:r.width,status:r.status,overflow:r.scrollWidth>r.width,errors:r.errors,error:r.error})),null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
