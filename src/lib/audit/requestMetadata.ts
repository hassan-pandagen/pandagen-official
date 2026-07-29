/**
 * Vercel URL-encodes the city header. Treat malformed proxy metadata as
 * untrusted input: it must never turn an otherwise valid request into a 500.
 */
export function decodeVercelCity(value: string | null): string {
  if (!value) return 'Unknown';

  try {
    return decodeURIComponent(value);
  } catch {
    return 'Unknown';
  }
}

export interface ApproximateGeo {
  country: string;
  city: string;
  region: string;
}

interface HeaderReader {
  get(name: string): string | null;
}

/**
 * Read only coarse Vercel location metadata. In particular, this deliberately
 * ignores forwarding headers so a visitor's raw IP is not copied into emails
 * or other business records.
 */
export function readVercelApproximateGeo(headers: HeaderReader): ApproximateGeo {
  return {
    country: headers.get('x-vercel-ip-country') || 'Unknown',
    city: decodeVercelCity(headers.get('x-vercel-ip-city')),
    region: headers.get('x-vercel-ip-country-region') || 'Unknown',
  };
}
