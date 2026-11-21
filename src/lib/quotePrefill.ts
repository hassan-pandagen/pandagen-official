// A one-shot handoff from a lead-capture step to the enquiry modal.
//
// The modal is a single global instance that any surface opens by dispatching
// the "open-quote-modal" window event, and the header will either call an
// injected onOpenQuote handler or open its own copy. Threading a prefill prop
// through that would mean touching every call site and would still drop the
// value on the injected-handler path. A module-level handoff is read by the
// modal itself when it opens, so it works whichever path ran.
//
// Read once and cleared, so a later unrelated open does not resurrect an old
// visitor's answers into a fresh form.
export type WrittenCheckPrefill = { checklistTopics: readonly string[] };
type QuotePrefill = string | WrittenCheckPrefill;

let pending: QuotePrefill | null = null;

export function setQuotePrefill(prefill: QuotePrefill): void {
  pending = prefill;
}

export function takeQuotePrefill(): QuotePrefill | null {
  const value = pending;
  pending = null;
  return value;
}
