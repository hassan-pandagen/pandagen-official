# Lead-form funnel analytics

The website records aggregate form milestones only after the visitor grants
Analytics consent. It never sends names, email addresses, phone numbers,
messages, entered URLs, or field values to Google Analytics.

## Events

| Event | Meaning |
|---|---|
| `lead_form_started` | A consented visitor first focused a real form field. |
| `lead_form_progress` | A named field was completed and blurred. Only the field identifier is sent. |
| `lead_form_validation_error` | Browser or application validation blocked progress. |
| `lead_form_submit_attempt` | The visitor attempted a submission. |
| `lead_form_submit_error` | The server or network rejected the attempt. |
| `lead_form_abandoned` | A started form was closed or the page was left before success. |
| `lead_form_submitted` | The server confirmed success. |
| `generate_lead` | GA4's recommended lead event, emitted with the confirmed success. |

Current form identifiers are `quote_modal`, `contact_page`, and
`audit_report_email`.

Event parameters are deliberately limited to identifiers and aggregate counts:
`form_id`, `page_path`, `last_field`, `fields_completed`, `elapsed_seconds`,
`abandon_reason`, `invalid_field`, `invalid_field_count`, `error_type`, and
submit-attempt counts.

The separate audit completion events omit the submitted hostname. They expose
only an allowlisted platform category and a coarse performance band (`0-49`,
`50-89`, `90-100`, or `unknown`). Calendar completion records only the fixed
calendar form identifier; it does not send the booking title or date.

## See abandoned forms in GA4

1. Confirm the events arrive in **Reports > Realtime** or **Admin > DebugView**.
2. In **Admin > Data display > Custom definitions**, create event-scoped custom
   dimensions for `form_id`, `last_field`, `abandon_reason`, and `error_type`.
   Create custom metrics for `fields_completed` and `elapsed_seconds` if those
   breakdowns are useful. Do not duplicate a predefined GA4 dimension.
3. In **Explore > Funnel exploration**, create a closed funnel with these steps:
   `lead_form_started` -> `lead_form_submit_attempt` -> `lead_form_submitted`.
4. Add `form_id` as a breakdown or filter so quote, contact, and audit forms can
   be compared separately.
5. Use a free-form exploration for `lead_form_abandoned`, broken down by
   `form_id`, `last_field`, and `abandon_reason`. Compare it with starts rather
   than treating abandonment as a required funnel step.
6. After validating production data, mark `generate_lead` as a key event if a
   successful website inquiry is the business's conversion definition.

Google notes that custom parameters need corresponding custom definitions for
normal analysis, and new definitions can take 24 to 48 hours to appear in reports.
They do not backfill already-collected data.

Official references:

- [Set up event parameters](https://developers.google.com/analytics/devguides/collection/ga4/event-parameters)
- [GA4 recommended lead events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead)
- [Create event-scoped custom dimensions](https://support.google.com/analytics/answer/14239696)
- [Funnel exploration](https://support.google.com/analytics/answer/9327974)

## Privacy boundary

This implementation answers where consented visitors drop out without creating
a partial-lead database. Recovering a specific person's unfinished form would
require a separate, explicit design covering notice, lawful basis, retention,
access controls, deletion, and vendor processing. That behavior is not enabled.
