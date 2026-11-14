/**
 * Where a lead came from, as the quote form sends it in `leadSource`.
 *
 * 14 Nov 2026: one list for the forms, the quote route's allowlist and the CRM hand-off.
 * Before this each kept its own copy, and the chat's inline form sent no source at all, so
 * its leads never reached the CRM. The CRM's ingest schema accepts exactly these values, so a
 * new form reuses one of them, or the CRM is changed first.
 *
 * No imports: node tests load this file directly.
 */
export const LEAD_SOURCES = ["quote_modal", "contact_page", "hero_form", "assistant"] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];
