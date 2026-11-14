import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Execute the real components with controlled hooks/vendor APIs. No requests
// are sent to Google or Cal, and no real enquiries/bookings are created.
function harness(file) {
  const state = { path: '/', consent: { analytics: true, functional: true } };
  const refs = [];
  let cursor = 0;
  let effects = [];
  const listeners = new Set();
  const events = [];
  const window = { location: { origin: 'https://example.com', pathname: '/', href: 'https://example.com/?email=private' } };
  const document = { title: 'Home', referrer: 'https://referrer.test/article?email=private', addEventListener() {}, removeEventListener() {} };
  const cal = (action, config) => {
    if (action === 'on') listeners.add(config.callback);
    if (action === 'off') listeners.delete(config.callback);
  };
  const modules = {
    react: { useRef: value => refs[cursor++] ?? (refs[cursor - 1] = { current: value }), useEffect: effect => effects.push(effect) },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
    'next/script': { default: 'script', __esModule: true },
    'next/navigation': { usePathname: () => state.path },
    '@/components/consent/ConsentProvider': { hasConsent: category => state.consent[category], useConsent: () => ({ preferences: state.consent, openPreferences() {} }) },
    '@/components/GoogleAnalytics': { trackGAEvent: (...args) => events.push(args) },
    '@calcom/embed-react': { getCalApi: async () => cal },
    '@/lib/booking': { CAL_LINK: 'pandagen/discovery', CAL_BOOKING_URL: 'https://cal.com/pandagen/discovery', requestBookingAfterConsent() {}, takePendingBooking: () => false },
  };
  const exports = {};
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(output, { exports, require: name => { assert.ok(modules[name], name); return modules[name]; }, window, document, URL, process: { env: { NEXT_PUBLIC_GA_ID: 'G-TEST' } } });
  return { state, window, document, exports, listeners, events,
    render() { cursor = 0; effects = []; const element = exports.default(); return { element, effects: [...effects] }; },
    commands: () => (window.dataLayer ?? []).map(args => Array.from(args)),
  };
}

test('pageviews capture URL, title and previous page once per navigation, including back navigation', () => {
  const h = harness('src/components/GoogleAnalytics.tsx');
  let render = h.render();
  assert.equal(render.element.props.strategy, 'afterInteractive');
  render.effects.forEach(effect => { effect(); effect(); }); // Strict Mode replay
  h.state.path = '/work';
  h.document.title = 'Our work';
  h.render().effects.forEach(effect => effect());
  h.state.path = '/';
  h.document.title = 'Home';
  h.render().effects.forEach(effect => effect());
  const views = h.commands().filter(command => command[1] === 'page_view');
  assert.equal(views.length, 3);
  assert.equal(views[0][2].page_referrer, 'https://referrer.test/article');
  assert.equal(views[1][2].page_location, 'https://example.com/work');
  assert.equal(views[1][2].page_title, 'Our work');
  assert.equal(views[1][2].page_referrer, 'https://example.com/');
  assert.equal(views[2][2].page_referrer, 'https://example.com/work');
  assert.equal(h.commands().filter(command => command[0] === 'config').length, 1);
  assert.equal(h.commands().find(command => command[0] === 'config')[2].send_page_view, false);
  assert.ok(!JSON.stringify(views).includes('private'));
});

test('custom events and pageviews are dropped without consent, including after withdrawal', () => {
  const h = harness('src/components/GoogleAnalytics.tsx');
  h.state.consent.analytics = false;
  h.render().effects.forEach(effect => effect());
  h.exports.trackGAEvent('generate_lead');
  assert.equal(h.commands().length, 0);
  h.state.consent.analytics = true;
  h.exports.trackGAEvent('generate_lead', { form_id: 'assistant_chat' });
  h.state.consent.analytics = false;
  h.exports.trackGAEvent('cta_click');
  assert.equal(h.commands().length, 1);
});

const settle = () => new Promise(resolve => setImmediate(resolve));
test('calendar listener cleans up, deduplicates bookings and respects consent at callback time', async () => {
  const h = harness('src/components/ui/CalEmbed.tsx');
  const cleanups = h.render().effects.map(effect => effect());
  await settle();
  assert.equal(h.listeners.size, 1);
  const callback = [...h.listeners][0];
  callback({ detail: { data: { uid: 'booking-one' } } });
  callback({ detail: { data: { uid: 'booking-one' } } });
  assert.equal(h.events.length, 1);
  assert.ok(!JSON.stringify(h.events).includes('booking-one'));
  h.state.consent.analytics = false;
  callback({ detail: { data: { uid: 'booking-two' } } });
  assert.equal(h.events.length, 1);
  cleanups.forEach(cleanup => cleanup?.());
  assert.equal(h.listeners.size, 0);
  callback({ detail: { data: { uid: 'booking-three' } } });
  assert.equal(h.events.length, 1);
});

test('calendar unmount during async initialization cannot leave a listener behind', async () => {
  const h = harness('src/components/ui/CalEmbed.tsx');
  const cleanups = h.render().effects.map(effect => effect());
  cleanups.forEach(cleanup => cleanup?.());
  await settle();
  assert.equal(h.listeners.size, 0);
});

// Loads a TypeScript module the way the bundler would, with its imports replaced by `modules`.
function loadModule(file, modules, globals = {}) {
  const exports = {};
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(output, { ...globals, exports, require: name => { assert.ok(modules[name], name); return modules[name]; } });
  return exports;
}

// The real shared lead sender (14 Nov 2026), with the real tracking and payload modules under it.
// Only the network, consent, attribution and the analytics vendors are stubbed.
function leadSender({ ok, events, requests }) {
  const window = { location: { pathname: '/fr/contact' } };
  const tracking = loadModule('src/lib/analytics/leadTracking.ts', {
    '@/components/consent/ConsentProvider': { hasConsent: () => false },
    '@/lib/analytics/clickIds': { readClickIds: () => ({}) },
  }, { crypto: globalThis.crypto, document: { cookie: '' }, Uint8Array });
  return loadModule('src/lib/forms/submitQuoteLead.ts', {
    '@/components/FacebookPixel': { trackFBEvent: (...args) => events.push(['fb', ...args]) },
    '@/components/GoogleAnalytics': { trackGAEvent: (...args) => events.push(args) },
    '@/lib/analytics/leadTracking': tracking,
    '@/lib/analytics/trafficSource': {
      getAttribution: () => ({ source: 'Google', medium: 'organic', campaign: 'none', landingPage: '/blog/x', firstVisit: '2026-11-14T00:00:00.000Z' }),
    },
    '@/lib/forms/leadPayload': loadModule('src/lib/forms/leadPayload.ts', {}),
    '@/lib/i18n/config': loadModule('src/lib/i18n/config.ts', {}),
  }, {
    window,
    fetch: async (url, init) => { requests.push({ url, body: init.body }); return { ok, status: 500, json: async () => ({}) }; },
  }).submitQuoteLead;
}

for (const method of ['captureLead', 'submitLead']) {
  test(`${method} sends one tracked lead and fires analytics only on API success`, async () => {
    const source = fs.readFileSync('src/components/assistant/AskAssistant.tsx', 'utf8');
    const ast = ts.createSourceFile('assistant.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    let fn;
    function visit(node) {
      if (ts.isFunctionDeclaration(node) && node.name?.text === method) fn = node.getText(ast);
      ts.forEachChild(node, visit);
    }
    visit(ast);
    assert.ok(fn);
    for (const ok of [true, false]) {
      const events = [];
      const requests = [];
      class TestFormData extends FormData {
        constructor() { super(); this.set('email', 'test@example.com'); }
      }
      const noop = () => {};
      const context = {
        FormData: TestFormData, messages: [], panelOpenedAt: { current: 1 }, leadLoadedAt: { current: 1 }, leadState: 'idle',
        setPanelInput: noop, setMessages: noop, setLoading: noop, setLeadSent: noop, setLeadState: noop, setLeadError: noop,
        sessionStorage: { setItem: noop }, Date,
        LEAD_STORE: 'test', LEAD_THANKS: 'thanks', LEAD_FAILED: 'failed', mirror: noop,
        submitQuoteLead: leadSender({ ok, events, requests }),
        trackGAEvent: (...args) => events.push(args),
      };
      vm.createContext(context);
      vm.runInContext(ts.transpileModule(fn, { compilerOptions: { target: ts.ScriptTarget.ES2020 } }).outputText, context);
      if (method === 'captureLead') await context[method]('test', { email: 'test@example.com' });
      else await context[method]({ preventDefault: noop, currentTarget: {} });

      assert.equal(requests.length, 1);
      assert.equal(requests[0].url, '/api/submit-quote');
      const body = requests[0].body;
      // Without these two the CRM drops the lead (buildIngestPayload in src/lib/crm/forwardLead.ts).
      assert.equal(body.get('leadSource'), 'assistant');
      assert.match(body.get('eventId'), /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
      assert.equal(body.get('trafficSource'), 'Google');
      assert.equal(body.get('trafficCampaign'), null, 'a campaign of "none" is left out');
      assert.equal(body.get('submittedFrom'), '/fr/contact');
      assert.equal(body.get('locale'), 'fr');
      assert.equal(body.get('_t'), '1');

      assert.equal(events.filter(event => event[0] === 'generate_lead').length, ok ? 1 : 0);
      assert.equal(events.filter(event => event[0] === 'quote_submit').length, ok ? 1 : 0);
      const pixel = events.filter(event => event[0] === 'fb');
      assert.equal(pixel.length, ok ? 1 : 0);
      if (ok) assert.equal(pixel[0][3], body.get('eventId'), 'the Pixel and the CRM share one event id');
      assert.ok(!JSON.stringify(events).includes('test@example.com'));
    }
  });
}

test('a booking asked for before consent opens once, and is dropped when the dialog is left without consent', () => {
  const booking = loadModule('src/lib/booking.ts', {}, { process: { env: {} } });
  assert.equal(booking.CAL_LINK, 'pandagen/discovery');
  assert.equal(booking.takePendingBooking(), false);
  booking.requestBookingAfterConsent();
  assert.equal(booking.takePendingBooking(), true);
  assert.equal(booking.takePendingBooking(), false, 'taken once');
  booking.requestBookingAfterConsent();
  booking.cancelPendingBooking();
  assert.equal(booking.takePendingBooking(), false, 'closing the dialog without consent cancels it');
});
