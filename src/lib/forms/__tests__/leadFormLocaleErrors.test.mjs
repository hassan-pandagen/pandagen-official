/**
 * A rate-limited visitor on a locale page must be told to retry, not sent to email.
 *
 * The locale pages cannot show the route's English error text, so they fall back to
 * their own copy. That fallback says the message could not be sent and gives the
 * inbox and phone number, which is right for a 500 and wrong for a 429: the visitor
 * is simply early, and telling them it failed loses the lead. These guard the two
 * halves of the fix — the copy exists in every locale, and the status survives the
 * throw so the form can tell the two refusals apart.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const DICTIONARIES = ['fr', 'de'];

test('every locale dictionary defines a distinct rate-limit message', () => {
  for (const locale of DICTIONARIES) {
    const source = fs.readFileSync(
      path.join('src/lib/i18n/dictionaries', `${locale}.ts`),
      'utf8'
    );
    assert.match(
      source,
      /errorRateLimited:/,
      `${locale}.ts must define errorRateLimited, or a rate-limited visitor is told the send failed`
    );

    const rateLimited = source.match(/errorRateLimited:\s*\n?\s*(["'`])([\s\S]*?)\1/);
    const fallback = source.match(/errorFallback:\s*(["'`])([\s\S]*?)\1/);
    assert.ok(rateLimited, `${locale}.ts errorRateLimited must be a string literal`);
    assert.ok(fallback, `${locale}.ts errorFallback must be a string literal`);
    assert.notEqual(
      rateLimited[2].trim(),
      fallback[2].trim(),
      `${locale}.ts errorRateLimited must not repeat errorFallback`
    );
    assert.doesNotMatch(
      rateLimited[2],
      /pandacodegen\.com|\d{3}[-\s]?\d{3}/,
      `${locale}.ts errorRateLimited should tell the visitor to retry, not hand them the inbox`
    );
  }
});

test('the quote sender carries the route status so a 429 is distinguishable', () => {
  const sender = fs.readFileSync('src/lib/forms/submitQuoteLead.ts', 'utf8');
  assert.match(
    sender,
    /throw new QuoteLeadError\([\s\S]*?response\.status\s*\)/,
    'submitQuoteLead must throw QuoteLeadError with the response status attached'
  );

  const form = fs.readFileSync('src/components/forms/HeroLeadForm.tsx', 'utf8');
  assert.match(
    form,
    /QuoteLeadError && \w+\.status === 429/,
    'HeroLeadForm must branch on a 429 before falling back to the generic error'
  );
  assert.match(
    form,
    /copy\.errorRateLimited/,
    'HeroLeadForm must show the localized rate-limit copy on a 429'
  );
});
