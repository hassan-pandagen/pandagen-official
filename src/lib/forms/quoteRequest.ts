export const MAX_QUOTE_REQUEST_BYTES = 128 * 1024;

export class QuoteRequestError extends Error {
  public readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "QuoteRequestError";
    this.status = status;
  }
}

interface RequestLike {
  url: string;
  headers: { get(name: string): string | null };
  body: ReadableStream<Uint8Array> | null;
}

export interface QuoteScalarFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  alreadyTried: string;
  currentUrl: string;
  currentPlatform: string;
  primaryGoal: string;
  trafficBand: string;
  timeline: string;
  budget: string;
  trafficSource: string;
  trafficMedium: string;
  trafficCampaign: string;
  landingPage: string;
  submittedFrom: string;
  firstVisit: string;
  honeypot: string;
  formLoadedAt: number | null;
}

const ALLOWED_FIELDS = new Set([
  "name",
  "email",
  "phone",
  "service",
  "details",
  "alreadyTried",
  "currentUrl",
  "currentPlatform",
  "primaryGoal",
  "trafficBand",
  "timeline",
  "budget",
  "trafficSource",
  "trafficMedium",
  "trafficCampaign",
  "landingPage",
  "submittedFrom",
  "firstVisit",
  "website_url_confirm",
  "_t",
]);

// The hero lead form posts a hidden `service` of "Website enquiry", localised as
// "Website enquiry (FR)" / "(DE)". Those values were never added here, so every
// submission from the homepage form failed the allowlist with "Invalid service
// selection." Any new entry point that sets `service` must be added to this set,
// because an unlisted value is rejected rather than ignored.
const ALLOWED_SERVICES = new Set([
  "",
  "WordPress Migration",
  "Web Apps & Dashboards",
  "High Performance Stores",
  "Other",
  "Website enquiry",
  "Website enquiry (FR)",
  "Website enquiry (DE)",
]);

const ALLOWED_PLATFORMS = new Set([
  "",
  "WordPress",
  "Webflow",
  "GoHighLevel",
  "Wix",
  "Squarespace",
  "Shopify",
  "WooCommerce",
  "Custom / Other",
  "No current website",
]);

const ALLOWED_GOALS = new Set([
  "",
  "SEO-safe migration",
  "Performance / Core Web Vitals",
  "Reduce platform costs",
  "Rebuild or redesign",
  "Headless ecommerce",
  "Custom app or integration",
  "Other",
]);

const ALLOWED_TRAFFIC_BANDS = new Set([
  "",
  "Under 1,000",
  "1,000–10,000",
  "10,000–50,000",
  "50,000+",
  "Unknown",
]);

const ALLOWED_TIMELINES = new Set(["", "Within 30 days", "1–3 months", "3–6 months", "Researching"]);
const ALLOWED_BUDGETS = new Set(["", "Under $3,500", "$3,500–$7,500", "$7,500–$15,000", "$15,000+", "Not sure"]);

export function assertSameOriginQuoteRequest(request: RequestLike): void {
  const origin = request.headers.get("origin");
  if (!origin) throw new QuoteRequestError(403, "This submission source is not allowed.");

  let suppliedOrigin: string;
  let requestOrigin: string;
  try {
    suppliedOrigin = new URL(origin).origin;
    requestOrigin = new URL(request.url).origin;
  } catch {
    throw new QuoteRequestError(403, "This submission source is not allowed.");
  }
  if (suppliedOrigin !== origin || suppliedOrigin !== requestOrigin) {
    throw new QuoteRequestError(403, "This submission source is not allowed.");
  }

  if (request.headers.get("sec-fetch-site") !== "same-origin") {
    throw new QuoteRequestError(403, "This submission source is not allowed.");
  }
}

export async function readBoundedQuoteFormData(
  request: RequestLike,
  maxBytes = MAX_QUOTE_REQUEST_BYTES
): Promise<FormData> {
  const contentType = request.headers.get("content-type") || "";
  if (
    contentType.length > 512
    || !/^multipart\/form-data\s*;/i.test(contentType)
    || !/(?:^|;)\s*boundary=(?:"[^"\r\n]{1,200}"|[^;\s\r\n]{1,200})(?:;|$)/i.test(contentType)
  ) {
    throw new QuoteRequestError(415, "Content-Type must be multipart/form-data with a boundary.");
  }

  const contentEncoding = request.headers.get("content-encoding");
  if (contentEncoding && contentEncoding.toLowerCase() !== "identity") {
    throw new QuoteRequestError(415, "Compressed form submissions are not supported.");
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    if (!/^\d{1,12}$/.test(contentLength)) throw new QuoteRequestError(400, "Content-Length is invalid.");
    if (Number(contentLength) > maxBytes) throw new QuoteRequestError(413, "Request body is too large.");
  }
  if (!request.body) throw new QuoteRequestError(400, "Request body is required.");

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel("Request exceeded the byte limit.");
      throw new QuoteRequestError(413, "Request body is too large.");
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return await new Response(bytes, { headers: { "Content-Type": contentType } }).formData();
  } catch {
    throw new QuoteRequestError(400, "The multipart form body is invalid.");
  }
}

function scalar(
  formData: FormData,
  name: string,
  maxLength: number,
  options: { required?: boolean; multiline?: boolean } = {}
): string {
  const entries = formData.getAll(name);
  if (entries.length > 1) throw new QuoteRequestError(400, `Field "${name}" must be provided at most once.`);
  if (entries.length === 0) {
    if (options.required) throw new QuoteRequestError(400, `Field "${name}" is required.`);
    return "";
  }

  const value = entries[0];
  if (typeof value !== "string") throw new QuoteRequestError(400, "File uploads are not accepted by this form.");
  const normalized = value.trim();
  if (options.required && !normalized) throw new QuoteRequestError(400, `Field "${name}" is required.`);
  if (normalized.length > maxLength) throw new QuoteRequestError(400, `Field "${name}" is too long.`);

  const invalidControls = options.multiline
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/
    : /[\u0000-\u001F\u007F]/;
  if (invalidControls.test(normalized)) throw new QuoteRequestError(400, `Field "${name}" contains invalid characters.`);
  return normalized;
}

function allowlisted(value: string, allowed: Set<string>, message: string): string {
  if (!allowed.has(value)) throw new QuoteRequestError(400, message);
  return value;
}

export function readQuoteHoneypot(formData: FormData): string {
  return scalar(formData, "website_url_confirm", 200);
}

export function readQuoteFormLoadedAt(formData: FormData): number | null {
  const timestamp = scalar(formData, "_t", 20);
  if (!timestamp) return null;
  if (!/^\d{10,16}$/.test(timestamp)) throw new QuoteRequestError(400, "Invalid form timing data.");
  const formLoadedAt = Number(timestamp);
  if (!Number.isSafeInteger(formLoadedAt) || formLoadedAt <= 0) {
    throw new QuoteRequestError(400, "Invalid form timing data.");
  }
  return formLoadedAt;
}

/**
 * Shortest fill time a real submission is allowed to take.
 *
 * A person has to read the labels, type a name, an email and a sentence or two.
 * Two seconds is not enough time to do that, and a script posting the form has
 * no reason to wait. Deliberately generous: password managers and browser
 * autofill can complete a form very fast, and rejecting a real enquiry costs far
 * more than letting one bot through.
 */
export const MIN_QUOTE_FILL_MS = 2_000;

/**
 * True when the submission arrived implausibly fast.
 *
 * `_t` is set by the client, so a bot that bothers to forge a plausible value
 * defeats this. That is fine. It is a cheap filter for the unsophisticated
 * majority, layered under the same-origin check, the rate limiter, the honeypot
 * and the dedupe claim, not a standalone control.
 *
 * Returns false whenever the timing cannot be trusted, including a missing
 * stamp, a stamp from the future, or one old enough to be a stale tab. Failing
 * open is the correct direction here: the cost of a false positive is a lost
 * customer who is never told why.
 */
export function isQuoteFilledTooFast(formLoadedAt: number | null, now: number = Date.now()): boolean {
  if (formLoadedAt === null) return false;
  const elapsed = now - formLoadedAt;
  if (elapsed < 0) return false;
  return elapsed < MIN_QUOTE_FILL_MS;
}

export function validateQuoteScalarFields(formData: FormData): QuoteScalarFields {
  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string") throw new QuoteRequestError(400, "File uploads are not accepted by this form.");
    if (!ALLOWED_FIELDS.has(key)) throw new QuoteRequestError(400, `Unexpected form field "${key}".`);
  }

  const name = scalar(formData, "name", 100, { required: true });
  const email = scalar(formData, "email", 254, { required: true });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new QuoteRequestError(400, "Invalid email address.");

  const phone = scalar(formData, "phone", 50);
  const service = allowlisted(scalar(formData, "service", 100), ALLOWED_SERVICES, "Invalid service selection.");
  const details = scalar(formData, "details", 5_000, { multiline: true });
  const alreadyTried = scalar(formData, "alreadyTried", 5_000, { multiline: true });
  const currentUrl = scalar(formData, "currentUrl", 2_048);
  if (currentUrl) {
    try {
      const parsed = new URL(currentUrl);
      if (!/^https?:$/.test(parsed.protocol) || parsed.username || parsed.password) throw new Error("unsupported");
    } catch {
      throw new QuoteRequestError(400, "Current website must be a valid HTTP(S) URL.");
    }
  }

  const currentPlatform = allowlisted(scalar(formData, "currentPlatform", 100), ALLOWED_PLATFORMS, "Invalid platform selection.");
  const primaryGoal = allowlisted(scalar(formData, "primaryGoal", 100), ALLOWED_GOALS, "Invalid primary-goal selection.");
  const trafficBand = allowlisted(scalar(formData, "trafficBand", 50), ALLOWED_TRAFFIC_BANDS, "Invalid traffic selection.");
  const timeline = allowlisted(scalar(formData, "timeline", 50), ALLOWED_TIMELINES, "Invalid timeline selection.");
  const budget = allowlisted(scalar(formData, "budget", 50), ALLOWED_BUDGETS, "Invalid budget selection.");

  const trafficSource = scalar(formData, "trafficSource", 100);
  const trafficMedium = scalar(formData, "trafficMedium", 100);
  const trafficCampaign = scalar(formData, "trafficCampaign", 200);
  const landingPage = scalar(formData, "landingPage", 2_048);
  // The page the form was submitted from, which is NOT landingPage. landingPage
  // is where the session started; this is where it converted. A visitor who
  // enters on a WooCommerce post and submits from /pricing produces two
  // different values, and only the pair tells you which page did the selling.
  const submittedFrom = scalar(formData, "submittedFrom", 2_048);
  const firstVisit = scalar(formData, "firstVisit", 64);
  if (firstVisit && !Number.isFinite(Date.parse(firstVisit))) throw new QuoteRequestError(400, "Invalid first-visit timestamp.");

  return {
    name,
    email,
    phone,
    service,
    details,
    alreadyTried,
    currentUrl,
    currentPlatform,
    primaryGoal,
    trafficBand,
    timeline,
    budget,
    trafficSource,
    trafficMedium,
    trafficCampaign,
    landingPage,
    submittedFrom,
    firstVisit,
    honeypot: readQuoteHoneypot(formData),
    formLoadedAt: readQuoteFormLoadedAt(formData),
  };
}

export const QUOTE_SERVICE_ALLOWLIST = ALLOWED_SERVICES;
export const QUOTE_PLATFORM_ALLOWLIST = ALLOWED_PLATFORMS;
export const QUOTE_GOAL_ALLOWLIST = ALLOWED_GOALS;
export const QUOTE_TRAFFIC_ALLOWLIST = ALLOWED_TRAFFIC_BANDS;
export const QUOTE_TIMELINE_ALLOWLIST = ALLOWED_TIMELINES;
export const QUOTE_BUDGET_ALLOWLIST = ALLOWED_BUDGETS;
