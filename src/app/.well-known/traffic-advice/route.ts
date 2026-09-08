// Serves /.well-known/traffic-advice. Opts the domain into Chrome's Privacy
// Preserving Prefetch Proxy: when this site appears as a Google Search result,
// Chrome may prefetch it through a privacy proxy before the user clicks, so the
// page is already loading by the time they land. fraction: 1.0 permits it for
// all incoming prefetch requests.
//
// Must be served as application/trafficadvice+json; Chrome ignores the file
// under application/json. force-static writes the response once at build time.

export const dynamic = 'force-static';

export function GET(): Response {
    return new Response(
        JSON.stringify([{ user_agent: 'prefetch-proxy', fraction: 1.0 }]),
        {
            headers: {
                'content-type': 'application/trafficadvice+json',
                'cache-control': 'public, max-age=0, must-revalidate',
            },
        }
    );
}
