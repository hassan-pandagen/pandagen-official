import { NextRequest, NextResponse } from "next/server";
import { assertSameOriginQuoteRequest, QuoteRequestError, readBoundedQuoteFormData } from "@/lib/forms/quoteRequest";
import { signBookingContext } from "@/lib/crm/bookingContext";

/**
 * Signs the visitor's consent, country and ad-click context for a booked call (22 Nov 2026).
 * The calendar passes the result into the cal.com booking as metadata; see bookingContext.ts.
 *
 * It returns empty metadata, never an error the visitor sees, when signing is not set up:
 * the calendar must open whatever happens here.
 */
export async function POST(request: NextRequest) {
  try {
    assertSameOriginQuoteRequest(request);
    const secret = process.env.CRM_INGEST_SECRET;
    if (!secret) return NextResponse.json({ metadata: {} });

    // shortcut: no rate limit, because a signature only vouches for the caller's own request
    // headers and cookies; add one if this route is ever abused.
    const form = await readBoundedQuoteFormData(request, 8 * 1024);
    const text = (key: string) => {
      const value = form.get(key);
      return typeof value === "string" ? value : "";
    };
    // Paths only: the CRM builds the event's source URL from this site's origin plus the path.
    const path = (key: string) => (/^\/(?!\/)/.test(text(key)) ? text(key) : "");

    const metadata = signBookingContext(
      {
        clientIp: (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim(),
        userAgent: request.headers.get("user-agent") ?? "",
        country: request.headers.get("x-vercel-ip-country") ?? "",
        region: request.headers.get("x-vercel-ip-country-region") ?? "",
        gpc: request.headers.get("sec-gpc") === "1",
        marketingConsent: text("marketingConsent") === "1",
        origin: request.nextUrl.origin,
        fbc: text("fbc"),
        fbp: text("fbp"),
        fbclid: text("fbclid"),
        gclid: text("gclid"),
        gbraid: text("gbraid"),
        wbraid: text("wbraid"),
        utmSource: text("utmSource"),
        utmMedium: text("utmMedium"),
        utmCampaign: text("utmCampaign"),
        utmTerm: text("utmTerm"),
        utmContent: text("utmContent"),
        landingPage: path("landingPage"),
        firstVisit: text("firstVisit"),
        submittedFrom: path("submittedFrom"),
      },
      secret
    );
    return NextResponse.json({ metadata }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (error instanceof QuoteRequestError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("booking-context failed:", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ metadata: {} });
  }
}
