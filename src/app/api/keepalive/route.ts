import { NextRequest, NextResponse } from "next/server";
import { executeAuditRedisCommand, getAuditBackend } from "@/lib/audit/auditRateLimit";

/**
 * Daily keep-alive for the Upstash Redis database (vercel.json runs it once a day).
 *
 * The free audit, the quote form and the assistant log all depend on that database, and
 * production refuses those requests when Redis is unreachable. Upstash archives free
 * databases that see no traffic for a few weeks (first notice received 7 Nov 2026), so
 * on a quiet month the forms would break. One PING a day counts as traffic.
 *
 * Vercel sends CRON_SECRET as a bearer token; anything else is turned away.
 */

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Not allowed." }, { status: 401 });
  }

  try {
    const backend = getAuditBackend();
    if (!backend.redis) {
      return NextResponse.json({ ok: false, reason: "Redis is not configured." }, { status: 200 });
    }
    await executeAuditRedisCommand(backend.redis, ["PING"]);
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false, reason: "Redis did not answer." }, { status: 502 });
  }
}
