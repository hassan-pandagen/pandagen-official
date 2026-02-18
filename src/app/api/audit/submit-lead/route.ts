import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, url, auditData } = body as {
      email: string;
      url: string;
      auditData: PageSpeedResult;
    };

    if (!email || !url || !auditData) {
      return NextResponse.json({ error: 'Email, URL, and audit data are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Extract name from email (john@company.com → "john")
    const name = email.split('@')[0].replace(/[._-]/g, ' ');

    // 1. Insert into prospects table
    const { data: prospect, error: prospectError } = await supabase
      .from('prospects')
      .insert({
        name,
        email,
        website_url: url,
        source: 'audit_tool',
        pagespeed_score: auditData.performanceScore,
        load_time_ms: Math.round(auditData.fcp),
        pain_point: auditData.performanceScore < 70
          ? `Poor PageSpeed: ${auditData.performanceScore}/100, ${auditData.loadTime}s load time`
          : `PageSpeed: ${auditData.performanceScore}/100, ${auditData.loadTime}s load time`,
        status: 'new',
        auto_discovered: true,
      })
      .select('id')
      .single();

    if (prospectError) {
      console.error('Supabase prospects insert error:', prospectError);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    // 2. Insert into scanner_reports table
    const reportPayload = {
      prospect_id: prospect.id,
      url,
      performance_score: auditData.performanceScore,
      seo_score: auditData.seoScore,
      accessibility_score: auditData.accessibilityScore,
      best_practices_score: auditData.bestPracticesScore,
      metrics: {
        fcp: auditData.fcp,
        lcp: auditData.lcp,
        tbt: auditData.tbt,
        cls: auditData.cls,
        speedIndex: auditData.speedIndex,
        loadTime: auditData.loadTime,
        pageSize: auditData.pageSize,
        platformDetected: auditData.platformDetected,
      },
    };

    console.log('scanner_reports payload:', JSON.stringify(reportPayload));

    const { error: reportError } = await supabase
      .from('scanner_reports')
      .insert(reportPayload);

    if (reportError) {
      console.error('Supabase scanner_reports insert error:', JSON.stringify(reportError));
    }

    return NextResponse.json({ success: true, message: 'Lead saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
