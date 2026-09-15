/**
 * Which language the inbox is told to reply in.
 *
 * Written 15 Sep 2026 after an audit traced a silent regression. The reply
 * language was derived ONLY from a trailing "(FR)" or "(DE)" on the `service`
 * field, and the hero lead form stopped sending `service` at all when it was
 * simplified. Nothing failed. No validation complained, no guard fired, and
 * every French and German enquiry from that form arrived marked "Reply
 * language: English" with no [FR]/[DE] subject prefix.
 *
 * That is the failure mode these assertions exist for: a language carried
 * inside somebody else's string, where deleting the carrier loses the language
 * and nothing says so. `locale` is now its own validated field.
 *
 * The suffix cases are kept deliberately. Removing that fallback would repeat
 * the original bug in the opposite direction for any surface still posting the
 * old shape.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuoteScalarFields } from '../quoteRequest.ts';

/** The reply-language decision as `src/app/api/submit-quote/route.ts` makes it. */
function replyLanguageFor(fields) {
  const localeNames = { FR: 'French', DE: 'German' };
  const explicit = fields.locale.toUpperCase();
  const code = explicit in localeNames
    ? explicit
    : (/\((FR|DE)\)\s*$/.exec(fields.service)?.[1] ?? '');
  return { code, language: localeNames[code] ?? 'English' };
}

function submission(extra = {}) {
  const data = new FormData();
  data.set('name', 'Chris Baptiste');
  data.set('email', 'chris@example.com');
  for (const [key, value] of Object.entries(extra)) data.set(key, value);
  return validateQuoteScalarFields(data);
}

test('a French submission is marked French', () => {
  const { code, language } = replyLanguageFor(submission({ locale: 'fr' }));
  assert.equal(code, 'FR');
  assert.equal(language, 'French');
});

test('a German submission is marked German', () => {
  const { code, language } = replyLanguageFor(submission({ locale: 'de' }));
  assert.equal(code, 'DE');
  assert.equal(language, 'German');
});

test('an English submission carries no subject prefix', () => {
  const { code, language } = replyLanguageFor(submission({ locale: 'en' }));
  assert.equal(code, '');
  assert.equal(language, 'English');
});

test('a submission with no locale at all still works, and reads as English', () => {
  const { language } = replyLanguageFor(submission());
  assert.equal(language, 'English');
});

test('THE REGRESSION: a French form that sends no service field is still French', () => {
  // This is the exact shape the hero form posts. Before `locale` existed it
  // produced "English" and the mail lost its [FR] prefix.
  const fields = submission({ locale: 'fr', submittedFrom: '/fr' });
  assert.equal(fields.service, '', 'the hero form sends no service field');
  assert.equal(replyLanguageFor(fields).language, 'French');
});

test('the old (FR) service suffix still works for any surface still posting it', () => {
  const fields = submission({ service: 'Website enquiry (FR)' });
  assert.equal(replyLanguageFor(fields).language, 'French');
});

test('an explicit locale wins over a disagreeing service suffix', () => {
  const fields = submission({ locale: 'de', service: 'Website enquiry (FR)' });
  assert.equal(replyLanguageFor(fields).language, 'German');
});

test('an unknown locale is rejected rather than quietly ignored', () => {
  assert.throws(() => submission({ locale: 'zz' }), /Invalid locale/);
});

test('a locale is not a place to smuggle a long string', () => {
  assert.throws(() => submission({ locale: 'fr'.repeat(50) }), /locale/i);
});
