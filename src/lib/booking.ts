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
