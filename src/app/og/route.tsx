import { ImageResponse } from "next/og";
import { ogContentForPath } from "@/lib/seo/og";
import logoImage from "../../../public/logo.png";
import { OgArtwork } from "./art";

export const runtime = "edge";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const requestedPath = requestUrl.searchParams.get("path") || "/";
  const content = ogContentForPath(requestedPath.slice(0, 220));
  const logoUrl = new URL(logoImage.src, request.url).toString();
  return new ImageResponse(<OgArtwork content={content} logoUrl={logoUrl} origin={requestUrl.origin} />, {
    width: 1200,
    height: 630,
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800" },
  });
}
