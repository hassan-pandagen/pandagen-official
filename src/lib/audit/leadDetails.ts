// Pure validation shared with the mocked-delivery tests. No network access.
export function parseLeadDetails(raw: Record<string, unknown>) {
  const action = raw.action ?? 'report';
  if (action !== 'report' && action !== 'review') throw new Error('Choose a report or founder review.');
  const text = (key: string, limit: number) => {
    const value = raw[key] ?? '';
    if (typeof value !== 'string' || value.length > limit) throw new Error(`Invalid ${key}.`);
    return value.trim();
  };
  const concern = text('concern', 1500);
  if (action === 'review' && concern.length < 10) throw new Error('Tell us what you would like to improve (at least 10 characters).');
  const platform = text('platform', 80);
  const goal = text('goal', 80);
  const pagesText = text('pages', 4200);
  const pages = pagesText.split(/\r?\n/).map(p => p.trim()).filter(Boolean);
  if (pages.length > 2) throw new Error('Add up to two extra public pages.');
  for (const page of pages) {
    let url: URL;
    try { url = new URL(page); } catch { throw new Error('Extra pages must be full http or https URLs.'); }
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || page.length > 2048) throw new Error('Use public page URLs without login details.');
  }
  return { action, concern, platform, goal, pages };
}

export function reviewDueAt(now: number): string {
  // Explicit 24-hour service, including weekends, as requested by the owner.
  return new Date(now + 24 * 60 * 60 * 1000).toISOString();
}
