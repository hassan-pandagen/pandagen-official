import { NextRequest, NextResponse } from 'next/server';
import { runPageSpeedAnalysis } from '@/lib/audit/pagespeed';
import { runDeepChecks } from '@/lib/audit/deepChecks';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = 'https://' + normalizedUrl;
    }

    try {
      new URL(normalizedUrl);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    const pageSpeedResult = await runPageSpeedAnalysis(normalizedUrl);

    // Run deep checks in parallel with minimal added latency
    let deepChecks;
    try {
      deepChecks = await runDeepChecks(normalizedUrl, pageSpeedResult);
    } catch (err) {
      console.error('Deep checks error:', err);
      deepChecks = null;
    }

    const result = { ...pageSpeedResult, deepChecks: deepChecks ?? undefined };
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('PageSpeed analysis error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Analysis failed. Try again.' },
      { status: 500 }
    );
  }
}
