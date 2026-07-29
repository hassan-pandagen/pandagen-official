import { NextResponse } from "next/server";

export function proxy() {
    const response = NextResponse.next();

    // Security Headers
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    // Legacy XSS filters caused their own vulnerabilities; modern browsers use CSP.
    response.headers.set("X-XSS-Protection", "0");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    response.headers.set(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload"
    );
    // Enforce low-risk document boundaries now. Script/style restrictions stay
    // report-only until every consent-gated vendor path is verified in staging.
    const enforcedPolicy = [
        "base-uri 'self'",
        "object-src 'none'",
        "frame-ancestors 'none'",
        "form-action 'self'",
    ];
    if (process.env.NODE_ENV === "production") {
        enforcedPolicy.push("upgrade-insecure-requests");
    }
    response.headers.set("Content-Security-Policy", enforcedPolicy.join("; "));

    const devScriptSources = process.env.NODE_ENV === "production"
        ? ""
        : " 'unsafe-eval' http://localhost:* ws://localhost:*";
    response.headers.set(
        "Content-Security-Policy-Report-Only",
        [
            "default-src 'self'",
            `script-src 'self' 'unsafe-inline'${devScriptSources} https://embed.tawk.to https://*.tawk.to https://connect.facebook.net https://www.clarity.ms https://scripts.clarity.ms https://widget.trustpilot.com https://cal.com https://app.cal.com https://va.vercel-scripts.com https://www.googletagmanager.com`,
            "style-src 'self' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to https://cal.com https://app.cal.com",
            "img-src 'self' data: blob: https://www.google-analytics.com https://*.google-analytics.com https://*.clarity.ms https://www.facebook.com https://*.facebook.com https://*.tawk.to https://embed.tawk.to https://widget.trustpilot.com https://cal.com https://app.cal.com",
            "font-src 'self' data: https://*.tawk.to https://cal.com https://app.cal.com",
            "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.clarity.ms https://c.bing.com https://www.facebook.com https://connect.facebook.net https://*.tawk.to wss://*.tawk.to https://cal.com https://app.cal.com https://api.cal.com https://vitals.vercel-insights.com",
            "frame-src https://embed.tawk.to https://*.tawk.to https://cal.com https://app.cal.com https://widget.trustpilot.com",
            "worker-src 'self' blob:",
            "manifest-src 'self'",
            "media-src 'self' https://*.tawk.to",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
        ].join("; ")
    );

    return response;
}

export const config = {
    // Run on HTML pages only. Exclude static assets AND crawler-facing files
    // (sitemap.xml, robots.txt, llms.txt, ai.txt) so the proxy never touches
    // what SEO/AI crawlers fetch; this mirrors pandapatches' known-good setup.
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|xml|txt)$).*)",
    ],
};
