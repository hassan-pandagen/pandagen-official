// The Cal.com event every "Book a 15-minute call" button opens. The handle is not
// a secret, so NEXT_PUBLIC_CAL_LINK is an override, not a requirement.
export const CAL_LINK = (() => {
  const candidate = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  return candidate && /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i.test(candidate)
    ? candidate
    : "pandagen/discovery";
})();

// The same event as a plain page. Used when the visitor keeps scheduling cookies
// off: it opens on cal.com in a new tab, so nothing loads on our site.
export const CAL_BOOKING_URL = `https://cal.com/${CAL_LINK}`;

// A booking the visitor asked for before allowing scheduling cookies.
//
// 14 Nov 2026: this was a `window.__calOpenPending` flag set and cleared in three files. Closing
// the consent dialog with Escape or its close button left it set, so if the visitor accepted
// cookies later for any other reason, the calendar opened by itself. Everything that touches it
// now goes through these three functions. Browser-only: the module is shared with server
// components, but nothing on the server calls them.
let bookingPending = false;

/** The visitor asked for the calendar; open it once scheduling is allowed. */
export function requestBookingAfterConsent(): void {
  bookingPending = true;
}

/** True once if a booking was waiting. CalEmbed calls this when the calendar can load. */
export function takePendingBooking(): boolean {
  const pending = bookingPending;
  bookingPending = false;
  return pending;
}

/** The visitor left the consent dialog without allowing scheduling, or chose another route. */
export function cancelPendingBooking(): void {
  bookingPending = false;
}
