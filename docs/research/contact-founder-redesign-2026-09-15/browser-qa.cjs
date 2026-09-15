const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx/cbf1b8a072280925/node_modules/playwright'));

const output = __dirname;
const origin = process.env.QA_ORIGIN || 'http://localhost:3000';
const widths = [320, 390, 768, 1024, 1279, 1440];
const phase = process.argv[2] || 'all';
const previousReportPath = path.join(output, 'browser-qa.json');
const report = phase !== 'all' && fs.existsSync(previousReportPath)
  ? JSON.parse(fs.readFileSync(previousReportPath, 'utf8'))
  : { checkedAt: new Date().toISOString(), origin, safety: 'All /api/submit-quote requests intercepted. No real enquiry or email submitted.', pages: [], interactions: [] };
if (phase === 'modal') report.interactions = report.interactions.filter(item => item.surface === 'contact form');
if (phase === 'editorial') report.pages = report.pages.filter(item => item.route !== '/editorial-policy');
if (phase === 'contact') report.pages = report.pages.filter(item => item.route !== '/contact');
report.lastRun = { phase, checkedAt: new Date().toISOString(), origin };
const save = () => fs.writeFileSync(path.join(output, 'browser-qa.json'), JSON.stringify(report, null, 2));

async function ready(page, route) {
  const response = await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator('h1').waitFor({ timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(700);
  const reject = page.getByRole('button', { name: 'Reject optional', exact: true });
  if (await reject.isVisible()) await reject.click();
  return response?.status();
}

async function createContext(browser, width) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  let mock = null;
  const intercepted = [];
  await context.route('**/api/submit-quote', async route => {
    const responseMock = mock ? { ...mock } : null;
    intercepted.push({ method: route.request().method(), mockStatus: responseMock?.status || 'blocked', body: route.request().postData() });
    if (!responseMock) return route.abort('blockedbyclient');
    if (responseMock.delay) await new Promise(resolve => setTimeout(resolve, responseMock.delay));
    await route.fulfill({ status: responseMock.status, contentType: 'application/json', body: JSON.stringify(responseMock.body) }).catch(() => {});
  });
  return { context, intercepted, setMock(value) { mock = value; } };
}

async function inventory(page) {
  return page.evaluate(() => {
    const pos = element => { const r = element.getBoundingClientRect(); return { top: r.top + scrollY, left: r.left, right: r.right, width: r.width, height: r.height }; };
    const founderImages = [...document.images].filter(image => /\/team\/(hassan|imran)/.test(decodeURIComponent(image.src)));
    const heroButton = [...document.querySelectorAll('main button, section button')].find(button => button.innerText.trim() === 'Talk to the founders' && !button.closest('footer,header,[role="dialog"]'));
    return {
      title: document.title,
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: [...document.querySelectorAll('h1')].map(h => h.innerText),
      founderImages: founderImages.map(image => ({ src: image.currentSrc, alt: image.alt, complete: image.complete, naturalWidth: image.naturalWidth, ...pos(image) })),
      headings: [...document.querySelectorAll('h1,h2')].map(h => ({ text: h.innerText, ...pos(h) })),
      ctas: [...document.querySelectorAll('a,button')].filter(e => e.getBoundingClientRect().height && /founder|Send your message|See our work|Get your migration|Ask us about/.test(e.innerText)).map(e => ({ text: e.innerText.trim(), tag: e.tagName, href: e.getAttribute('href'), type: e.getAttribute('type'), ...pos(e) })),
      heroCta: heroButton ? { label: heroButton.innerText, buttonHeight: heroButton.offsetHeight, buttonWidth: heroButton.offsetWidth, groupHeight: heroButton.parentElement.offsetHeight, slotHeight: heroButton.parentElement.parentElement.offsetHeight, slotMinHeight: getComputedStyle(heroButton.parentElement.parentElement).minHeight, groupClass: heroButton.parentElement.className, slotClass: heroButton.parentElement.parentElement.className } : null,
      contactDetailsOpen: document.querySelector('form[name="contact_quote"] details')?.open ?? null,
      brokenAnchors: [...document.querySelectorAll('main a[href^="#"]')].filter(a => a.hash.length > 1 && !document.getElementById(a.hash.slice(1))).map(a => a.hash),
    };
  });
}

async function contactInteraction(browser, width) {
  const env = await createContext(browser, width);
  const page = await env.context.newPage();
  const result = { surface: 'contact form', width, errors: [] };
  page.on('pageerror', error => result.errors.push(error.message));
  try {
    await ready(page, '/contact');
    const form = page.locator('form[name="contact_quote"]');
    const details = form.locator('details');
    const summary = details.locator('summary');
    result.closedInitially = !(await details.evaluate(el => el.open));
    result.phoneHiddenInitially = !(await page.locator('#contact-phone').isVisible());
    await summary.focus();
    await page.keyboard.press('Enter');
    result.enterOpens = await details.evaluate(el => el.open);
    await page.keyboard.press('Tab');
    result.nextFocusAfterOpen = await page.evaluate(() => document.activeElement.id);
    await form.screenshot({ path: path.join(output, `contact-${width}-details-open.png`), animations: 'disabled' });
    await summary.focus();
    await page.keyboard.press('Space');
    result.spaceCloses = !(await details.evaluate(el => el.open));
    await page.keyboard.press('Tab');
    result.nextFocusAfterClose = await page.evaluate(() => ({ tag: document.activeElement.tagName, type: document.activeElement.type, text: document.activeElement.innerText }));
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    result.emptyValidation = { name: await page.locator('#contact-name').getAttribute('aria-invalid'), email: await page.locator('#contact-email').getAttribute('aria-invalid'), alerts: await form.getByRole('alert').allTextContents(), calls: env.intercepted.length };
    await page.locator('#contact-name').fill('Browser QA');
    await page.locator('#contact-email').fill('invalid-address');
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    result.invalidEmail = { invalid: await page.locator('#contact-email').getAttribute('aria-invalid'), alert: await page.locator('#contact-email-error').innerText(), calls: env.intercepted.length };
    await page.locator('#contact-email').fill('browser-qa@example.invalid');
    await page.locator('#contact-details').fill('Mocked browser verification. No real submission.');
    await page.locator('#contact-url').fill('example.com');
    env.setMock({ status: 503, body: { error: 'QA simulated failure. Please try again.' } });
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    await form.getByRole('alert').filter({ hasText: 'QA simulated failure' }).waitFor();
    result.failure = { alert: await form.getByRole('alert').allTextContents(), nameRetained: await page.locator('#contact-name').inputValue(), messageRetained: await page.locator('#contact-details').inputValue(), buttonEnabled: await form.getByRole('button', { name: 'Send your message', exact: true }).isEnabled() };
    await form.screenshot({ path: path.join(output, `contact-${width}-mock-error.png`), animations: 'disabled' });
    env.setMock({ status: 200, body: { success: true } });
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    await page.getByRole('heading', { name: 'Your message is with us.', exact: true }).waitFor();
    result.successVisible = true;
    await page.getByRole('status').filter({ hasText: 'Your message is with us.' }).screenshot({ path: path.join(output, `contact-${width}-mock-success.png`), animations: 'disabled' });
    await page.getByRole('button', { name: 'Send another message', exact: true }).click();
    result.reset = { name: await page.locator('#contact-name').inputValue(), email: await page.locator('#contact-email').inputValue(), detailsClosed: !(await details.evaluate(el => el.open)) };
    result.intercepted = env.intercepted.map(({ method, mockStatus }) => ({ method, mockStatus }));
  } catch (e) { result.errors.push(e.message); }
  report.interactions.push(result); save();
  console.log(JSON.stringify({ surface: result.surface, width, errors: result.errors, success: result.successVisible }));
  await env.context.close();
}

async function modalInteraction(browser, width) {
  const env = await createContext(browser, width);
  const page = await env.context.newPage();
  const result = { surface: 'header / hero / footer and enquiry modal', width, errors: [] };
  page.on('pageerror', error => result.errors.push(error.message));
  try {
    await ready(page, '/');
    const headerTrigger = page.locator('header button').filter({ hasText: /Talk to (the founders|us)/ }).filter({ visible: true }).first();
    result.headerLabel = await headerTrigger.innerText();
    await headerTrigger.click();
    const dialog = page.getByRole('dialog', { name: /What would you like help with/ });
    await dialog.waitFor();
    result.headerOpensModal = true;
    result.initialFocus = await page.evaluate(() => ({ id: document.activeElement.id, label: document.activeElement.getAttribute('aria-label') }));
    const bounds = await dialog.boundingBox();
    result.modalBounds = bounds;
    result.modalFitsWidth = bounds.x >= 0 && bounds.x + bounds.width <= width;
    result.modalHorizontalOverflow = await dialog.evaluate(el => el.scrollWidth > el.clientWidth);
    await dialog.screenshot({ path: path.join(output, `modal-${width}-initial.png`), animations: 'disabled' });
    const close = dialog.getByRole('button', { name: 'Close enquiry form', exact: true });
    await close.focus();
    await page.keyboard.press('Shift+Tab');
    result.reverseTabStaysInside = await dialog.evaluate(el => el.contains(document.activeElement));
    const form = dialog.locator('form[name="quote_request"]');
    const summary = form.locator('summary');
    await summary.focus(); await page.keyboard.press('Enter');
    result.phoneEnterOpens = await form.locator('details').evaluate(el => el.open);
    await page.keyboard.press('Tab');
    result.phoneNextFocus = await page.evaluate(() => document.activeElement.id);
    await summary.focus(); await page.keyboard.press('Space');
    result.phoneSpaceCloses = !(await form.locator('details').evaluate(el => el.open));
    if ([390, 1279].includes(width)) {
      await page.locator('#quote-name').fill('Pending browser QA');
      await page.locator('#quote-email').fill('pending-browser-qa@example.invalid');
      env.setMock({ status: 200, body: { success: true }, delay: 1200 });
      await form.getByRole('button', { name: 'Send your message', exact: true }).click();
      await page.waitForTimeout(150);
      await close.click();
      await page.getByRole('dialog').waitFor({ state: 'hidden' });
      await headerTrigger.click();
      await dialog.waitFor();
      await page.waitForTimeout(1500);
      result.pendingCloseReopen = {
        freshFormVisible: await form.isVisible(),
        nameReset: await page.locator('#quote-name').inputValue(),
        submitEnabled: await form.getByRole('button', { name: 'Send your message', exact: true }).isEnabled(),
        staleSuccessAbsent: !(await page.getByRole('heading', { name: 'Message received.', exact: true }).isVisible()),
      };
    }
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    result.emptyValidation = { name: await page.locator('#quote-name').getAttribute('aria-invalid'), email: await page.locator('#quote-email').getAttribute('aria-invalid'), calls: env.intercepted.length };
    await page.locator('#quote-name').fill('Browser QA');
    await page.locator('#quote-email').fill('invalid-address');
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    result.invalidEmail = { alert: await page.locator('#quote-email-error').innerText(), calls: env.intercepted.length };
    await page.locator('#quote-email').fill('browser-qa@example.invalid');
    await page.locator('#quote-details').fill('Mocked browser verification. No real submission.');
    env.setMock({ status: 503, body: { error: 'QA simulated modal failure.' } });
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    await form.getByRole('alert').filter({ hasText: 'QA simulated modal failure.' }).waitFor();
    result.failurePreservesName = await page.locator('#quote-name').inputValue();
    env.setMock({ status: 200, body: { success: true } });
    await form.getByRole('button', { name: 'Send your message', exact: true }).click();
    await page.getByRole('heading', { name: 'Message received.', exact: true }).waitFor();
    result.successVisible = true;
    if ([390, 1279].includes(width)) await page.waitForTimeout(3500);
    result.successRemainsUntilDismissed = await page.getByRole('heading', { name: 'Message received.', exact: true }).isVisible();
    await page.getByRole('dialog').screenshot({ path: path.join(output, `modal-${width}-mock-success.png`), animations: 'disabled' });
    await page.getByRole('dialog').getByRole('button', { name: 'Done', exact: true }).click();
    await page.getByRole('dialog').waitFor({ state: 'hidden' });
    await page.waitForTimeout(150);
    result.doneRestoresFocus = await headerTrigger.evaluate(el => document.activeElement === el);
    await headerTrigger.click();
    await dialog.waitFor();
    result.successReopensFreshForm = await page.locator('#quote-name').inputValue() === '';
    await page.keyboard.press('Escape');
    await page.getByRole('dialog').waitFor({ state: 'hidden' });
    result.escapeCloses = true;
    await page.waitForTimeout(150);
    result.focusRestored = await headerTrigger.evaluate(el => document.activeElement === el);
    const heroTrigger = page.locator('section').filter({ has: page.locator('h1') }).getByRole('button', { name: 'Talk to the founders', exact: true });
    await heroTrigger.click();
    await dialog.waitFor(); result.heroOpensModal = true;
    await page.keyboard.press('Escape');
    await page.getByRole('dialog').waitFor({ state: 'hidden' });
    const footerTrigger = page.locator('footer').getByRole('button', { name: 'Talk to the founders', exact: true });
    await footerTrigger.click();
    await dialog.waitFor(); result.footerOpensModal = true;
    await page.keyboard.press('Escape');
    await page.getByRole('dialog').waitFor({ state: 'hidden' });
    result.intercepted = env.intercepted.map(({ method, mockStatus }) => ({ method, mockStatus }));
  } catch (e) { result.errors.push(e.message); }
  report.interactions.push(result); save();
  console.log(JSON.stringify({ surface: result.surface, width, errors: result.errors, success: result.successVisible }));
  await env.context.close();
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  report.browser = await browser.version();
  const routes = phase === 'modal' ? [] : phase === 'editorial' ? ['/editorial-policy'] : phase === 'contact' ? ['/contact'] : ['/contact', '/about/hassan', '/about/imran', '/', '/editorial-policy'];
  for (const route of routes) {
    for (const width of widths) {
      const env = await createContext(browser, width);
      const page = await env.context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const label = route === '/' ? 'home' : route.slice(1).replaceAll('/', '-');
      try {
        const status = await ready(page, route);
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
        await page.waitForTimeout(400);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(250);
        const inspection = await inventory(page);
        await page.screenshot({ path: path.join(output, `${label}-${width}-top.png`), animations: 'disabled' });
        if ([390, 1440].includes(width)) await page.screenshot({ path: path.join(output, `${label}-${width}-full.png`), fullPage: true, animations: 'disabled' });
        report.pages.push({ route, status, errors, ...inspection });
        console.log(JSON.stringify({ route, width, status, overflow: inspection.scrollWidth > width, images: inspection.founderImages.map(i => i.naturalWidth), hero: inspection.heroCta, errors }));
      } catch (e) { report.pages.push({ route, width, errors: [...errors, e.message] }); console.log(JSON.stringify({ route, width, error: e.message })); }
      save();
      await env.context.close();
    }
  }
  if (phase === 'all') for (const width of widths) await contactInteraction(browser, width);
  if (phase === 'all' || phase === 'modal') for (const width of widths) await modalInteraction(browser, width);
  await browser.close();
  save();
})().catch(e => { console.error(e); save(); process.exitCode = 1; });
