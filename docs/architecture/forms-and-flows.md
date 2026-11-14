# Forms and flows

How the site's forms, chat and booking buttons keep their state. Written 14 Nov 2026, after a pass that found several bugs caused by the same few things being done slightly differently in several places.

## Lead forms

Every enquiry goes to `/api/submit-quote`. Five places send one:

| Form | File | `leadSource` |
|---|---|---|
| Hero form (French and German homepages, via `LocalePage`) | `src/components/forms/HeroLeadForm.tsx` | `hero_form` |
| Contact page | `src/app/contact/ContactPageClient.tsx` | `contact_page` |
| Quote modal (every "Talk to the founders" button) | `src/components/ui/QuoteModal.tsx` | `quote_modal` |
| Chat, "Leave your email or phone" form | `src/components/assistant/AskAssistant.tsx` (`submitLead`) | `assistant` |
| Chat, contact details typed into the message box | `src/components/assistant/AskAssistant.tsx` (`captureLead`) | `assistant` |

### The rule: send with `submitQuoteLead()`

`src/lib/forms/submitQuoteLead.ts` adds attribution, the sending page, the fill time, the page language and the tracking fields, posts the form, and fires the Meta Pixel `Lead` and GA4 `quote_submit` only when the route accepts it. A form passes its own answers in a `FormData` plus a few options.

Don't post to `/api/submit-quote` any other way. A test (`src/lib/forms/__tests__/leadPayload.test.mjs`) fails if any other file does. The reason: the CRM only records a lead that carries an `eventId` and a known `leadSource`, and it drops anything else silently while the email still goes out.

`leadSource` values live in `src/lib/forms/leadSources.ts`. The forms, the route's allowlist and the CRM hand-off all read that one list. The CRM accepts exactly these values, so a new form reuses one, or the CRM changes first.

### One status per form: `useSubmission()`

`src/hooks/useSubmission.ts` gives a form one status: `idle`, `sending`, `sent` or `error`. Use it like this:

```ts
const submission = useSubmission();

const attempt = submission.start();
if (attempt === null) return;            // already sending: a double click does nothing
try {
  await submitQuoteLead(formData, { ... });
  submission.succeed(attempt);
} catch (error) {
  submission.fail(attempt, message);
}
```

`submission.reset()` makes any request still in flight stale, so its answer can't change the form. Call it when a dialog closes or a form is cleared. The logic is in `src/lib/forms/submissionGate.ts`, which has no React in it and is unit tested.

The audit tool's email pop-up (`src/components/audit/AuditEmailGate.tsx`) uses the same hook, though it posts to its own route.

## Chat modes

`AskAssistant.tsx` derives the panel's mode from two pieces of state with `chatMode(live, watch)`:

| Mode | Meaning |
|---|---|
| `bot` | Only the assistant answers. |
| `watched` | Each turn is mirrored to the team's Slack watch channel; the assistant still answers. |
| `liveOpening` | The visitor asked for Hassan; their first message starts the Slack thread. |
| `live` | Talking to Hassan in a Slack thread. |

The comment above `chatMode` lists which action moves between which modes. The markup reads `talkingToHassan` (`live` or `liveOpening`).

Hassan's replies come in from a poll, so they can land while the assistant is still answering. Every update to the message list therefore appends to the latest list, `setMessages((m) => [...m, next])`. Replacing it with a copy taken before a request wipes whatever arrived in between.

## Booking buttons

Scheduling loads Cal.com, which needs the visitor's "functional" consent. A visitor who clicks "Book a 15-minute call" without it sees the consent dialog, and the booking waits.

`src/lib/booking.ts` holds that waiting booking behind three functions:

- `requestBookingAfterConsent()`: a booking button was clicked before consent.
- `takePendingBooking()`: `CalEmbed` opens the calendar once consent arrives.
- `cancelPendingBooking()`: the dialog closed with scheduling still off, or the visitor chose another route.

## Window events

Two components listen for events any button can send:

| Event | Listener | Opens |
|---|---|---|
| `open-quote-modal` | `SiteNav.tsx`, which renders the one `QuoteModal` | the quote modal |
| `open-assistant` | `AskAssistant.tsx` | the chat panel; a string in `detail` is asked as a question |

Prefill the quote modal with `setQuotePrefill()` from `src/lib/quotePrefill.ts` before sending `open-quote-modal`.

## Checks

- `npm run test:forms` and `npm run test:analytics` cover the sender, the gate, the chat's lead functions and the booking functions.
- `npm run deadcode` runs knip with `knip.json`. It should list only the two duplicate-name warnings. Exports kept on purpose carry a `/** @public */` comment saying why.
