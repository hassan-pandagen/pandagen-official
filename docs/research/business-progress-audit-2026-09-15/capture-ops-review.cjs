// Read-only localhost inspection in an isolated browser; no enquiries submitted.
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx/cbf1b8a072280925/node_modules/playwright'));
const out = path.join(__dirname, 'ops-95339fa');
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ headless: true });
  const rows = [];
  try {
    for (const width of [1440, 390]) {
      const context = await browser.newContext({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
      await context.route('**/api/submit-quote', r => r.abort());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const response = await page.goto('http://localhost:3000/work/enterprise-ops', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.locator('h1').waitFor();
      await page.evaluate(() => document.fonts.ready);
      const reject = page.getByRole('button', { name: 'Reject optional', exact: true });
      await reject.waitFor({ state: 'visible', timeout: 2500 }).catch(() => {});
      if (await reject.isVisible()) await reject.click();
      const data = await page.evaluate(() => {
        const main = document.querySelector('main');
        const box = e => ({ top: Math.round(e.getBoundingClientRect().top + scrollY), height: Math.round(e.getBoundingClientRect().height) });
        return {
          title: document.title,
          scrollWidth: document.documentElement.scrollWidth,
          pageHeight: document.documentElement.scrollHeight,
          headings: [...main.querySelectorAll('h1,h2,h3')].map(e => ({ tag: e.tagName, text: e.innerText, ...box(e) })),
          sectionText: [...main.querySelectorAll('section')].map(e => ({ heading: e.querySelector('h2')?.innerText, text: e.innerText, ...box(e) })),
          links: [...main.querySelectorAll('a')].map(e => ({ text: e.innerText, href: e.getAttribute('href'), ...box(e) })),
          jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(e => e.textContent),
          text: main.innerText
        };
      });
      const shots = [];
      for (const [label, target] of [['top', null], ['buyer', 'If the business runs on spreadsheets and WhatsApp, this is what replaces them.'], ['numbers', 'The platform today, in production.']]) {
        if (target) await page.getByRole('heading', { name: target, exact: true }).scrollIntoViewIfNeeded();
        else await page.evaluate(() => scrollTo(0, 0));
        const name = `${width}-${label}.png`;
        await page.screenshot({ path: path.join(out, name), animations: 'disabled' });
        shots.push(name);
      }
      rows.push({ width, status: response.status(), errors, ...data, screenshots: shots });
      await context.close();
    }
  } finally { await browser.close(); }
  fs.writeFileSync(path.join(out, 'render.json'), JSON.stringify({ checkedUtc: new Date().toISOString(), route: '/work/enterprise-ops', rows }, null, 2));
  console.log(JSON.stringify(rows.map(r => ({ width: r.width, status: r.status, errors: r.errors, overflow: r.scrollWidth > r.width, pageHeight: r.pageHeight, headings: r.headings.filter(h => h.tag !== 'H3') })), null, 2));
})().catch(e => { console.error(e); process.exitCode = 1; });
