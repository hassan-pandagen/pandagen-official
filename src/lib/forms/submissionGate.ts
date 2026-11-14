/**
 * Which attempt at sending a form may still change what the form shows.
 *
 * 14 Nov 2026. The lead forms used to keep three flags each (loading, submitted, error). That
 * allowed two bugs: a second click while the first request was in flight sent the lead twice
 * (the button is only disabled after React re-renders), and a response that arrived after the
 * visitor had closed or reset a form still flipped it to "sent".
 *
 * Every attempt gets a token. Only the latest token can settle the form, and a new attempt
 * cannot start while one is running. `reset` makes every outstanding token stale.
 *
 * No imports and no React: the node tests load this file directly. The hook that wraps it is
 * src/hooks/useSubmission.ts.
 */
export class SubmissionGate {
  private latest = 0;
  private running = false;

  /** A token for a new attempt, or null while another attempt is still running. */
  start(): number | null {
    if (this.running) return null;
    this.running = true;
    this.latest += 1;
    return this.latest;
  }

  /** Whether this attempt is still the one the form is showing. */
  isCurrent(token: number): boolean {
    return token === this.latest;
  }

  /** Ends an attempt. True when the caller may update the form, false for a stale attempt. */
  settle(token: number): boolean {
    if (token !== this.latest) return false;
    this.running = false;
    return true;
  }

  /** Forgets every attempt in flight, so none of them can change the form again. */
  reset(): void {
    this.latest += 1;
    this.running = false;
  }
}
