import { NextRequest, NextResponse } from "next/server";
import { assertSameOriginQuoteRequest, QuoteRequestError } from "@/lib/forms/quoteRequest";

/**
 * "Do not sell or share my personal information" (the form on /privacy/do-not-share).
 *
 * The CRM keeps the opt-out list and applies it to every lead and every unsent ad event, so
 * this route only checks the request is from our own pages and passes the email on. The CRM
 * answers the same way whether or not it holds that address, and so do we.
 *
 * The CRM's address comes from CRM_INGEST_URL (the same setting the lead hand-off uses), so
 * there is nothing new to configure. Without it the visitor is told to email us instead.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FALLBACK = "We could not record that just now. Please email info@pandacodegen.com and we will do it for you.";

function json(body: unknown, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  try {
    assertSameOriginQuoteRequest(request);
  } catch (error) {
    if (error instanceof QuoteRequestError) return json({ error: error.message }, error.status);
    return json({ error: "This request is not allowed." }, 403);
  }

  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return json({ error: "Enter an email address." }, 400);
  }
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return json({ error: "Enter a valid email address." }, 400);
  }

  const ingestUrl = process.env.CRM_INGEST_URL?.trim();
  if (!ingestUrl) return json({ error: FALLBACK }, 503);

  try {
    const response = await fetch(new URL("/api/opt-out", ingestUrl), {
      method: "POST",
      headers: { "content-type": "application/json", origin: request.nextUrl.origin },
      body: JSON.stringify({ email }),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      console.error(`CRM opt-out rejected: HTTP ${response.status}`);
      return json({ error: FALLBACK }, 502);
    }
    return json({ ok: true }, 200);
  } catch (error) {
    console.error("CRM opt-out unreachable:", error instanceof Error ? error.name : "unknown");
    return json({ error: FALLBACK }, 502);
  }
}
