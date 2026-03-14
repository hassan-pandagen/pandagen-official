import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Security Headers
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    response.headers.set(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload"
    );
    response.headers.set(
        "Content-Security-Policy-Report-Only",
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.tawk.to https://connect.facebook.net https://www.clarity.ms https://scripts.clarity.ms https://widget.trustpilot.com https://cal.com https://app.cal.com https://va.vercel-scripts.com; img-src 'self' data: https:; connect-src 'self' https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src https://embed.tawk.to https://cal.com https://app.cal.com https://widget.trustpilot.com;"
    );

    return response;
}

export const config = {
    matcher: [
        // Match all paths except static files and API routes
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
    ],
};
