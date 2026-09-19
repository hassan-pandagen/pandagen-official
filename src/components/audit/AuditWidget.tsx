"use client";



import { useRef, useState } from "react";

import Link from "next/link";

import AuditEmailGate from "./AuditEmailGate";

import type { PageSpeedResult } from "@/lib/audit/pagespeed";

import { auditPlatforms, auditGoals, platformAdvice } from "@/lib/audit/advice";

import { trackGAEvent } from "@/components/GoogleAnalytics";

import { safeAuditAnalyticsSummary } from "@/lib/audit/analyticsSummary";



export default function AuditWidget() {

  const [url, setUrl] = useState("");

  const [platform, setPlatform] = useState<string>("Not sure");

  const [goal, setGoal] = useState<string>("General check");

  const [data, setData] = useState<PageSpeedResult | null>(null);

  const [tokens, setTokens] = useState({ report: "", review: "" });

  const [delivered, setDelivered] = useState({ report: false, review: false });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [action, setAction] = useState<"report" | "review" | null>(null);

  const resultHeading = useRef<HTMLHeadingElement>(null);

  const field = "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-charcoal";

  async function scan(e: React.FormEvent) {

    e.preventDefault();

    if (loading) return;

    setLoading(true); setError(""); setData(null);

    trackGAEvent("audit_started", { platform, goal });

    try {

      const response = await fetch("/api/audit/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: url.trim() }) });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "The scan could not finish. Please try again.");

      if (!result.data || !result.leadToken || !result.reviewToken) throw new Error("The report session could not be created. Please try again.");

      if (result.data.deepChecks?.htmlFetched === false) throw new Error("We could not read this public page, so we have no findings to show. You can still contact a founder below.");

      setData(result.data); setTokens({ report: result.leadToken, review: result.reviewToken }); setDelivered({ report: false, review: false });

      trackGAEvent("audit_completed", safeAuditAnalyticsSummary(result.data));

      requestAnimationFrame(() => resultHeading.current?.focus());

    } catch (err) {

      setError(err instanceof Error ? err.message : "The scan could not finish.");

      trackGAEvent("audit_failed", { reason: "scan_unavailable" });

    } finally { setLoading(false); }

  }

  const checks = [...(data?.deepChecks?.checks ?? [])].sort((a, b) => Number(a.status === "pass") - Number(b.status === "pass"));

  return <div id="audit-widget" className="scroll-mt-28 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8">

    <form onSubmit={scan} className="space-y-4">

      <label htmlFor="audit-url" className="block text-lg font-bold">Start with your website</label>

      <input id="audit-url" autoComplete="url" required maxLength={2048} value={url} onChange={e => setUrl(e.target.value)} placeholder="example.com" className={field} disabled={loading || Boolean(data)} aria-describedby="audit-scope" />

      <div className="grid gap-4 sm:grid-cols-2">

        <label className="text-sm font-semibold">Your platform (optional)<select value={platform} disabled={loading || Boolean(data)} onChange={e => setPlatform(e.target.value)} className={`${field} mt-2`}>{auditPlatforms.map(p => <option key={p}>{p}</option>)}</select></label>

        <label className="text-sm font-semibold">Your main concern (optional)<select value={goal} disabled={loading || Boolean(data)} onChange={e => setGoal(e.target.value)} className={`${field} mt-2`}>{auditGoals.map(g => <option key={g}>{g}</option>)}</select></label>

      </div>

      <p id="audit-scope" className="text-sm leading-6 text-stone-600">One public page plus supporting site files. No login, purchases or form submissions. Results on screen without an email.</p>

      {!data && <button disabled={loading} className="min-h-12 w-full rounded-full bg-charcoal px-5 py-3 font-bold text-white disabled:opacity-60">{loading ? "Checking your page..." : "Check my website"}</button>}

      <p role="status" aria-live="polite" className="text-sm text-stone-600">{loading ? "Running the technical checks and mobile lab test. This can take a little while." : data ? "Your scan is complete." : ""}</p>

      {error && <div role="alert" className="rounded-xl bg-orange-50 p-4 text-sm"><p>{error}</p><Link href="/contact#contact-quote-form" className="mt-2 inline-block underline">Ask a founder about your website</Link></div>}

    </form>

    {data && <section className="mt-8 space-y-6" aria-labelledby="audit-results">

      <div><h2 id="audit-results" ref={resultHeading} tabIndex={-1} className="text-2xl font-bold">Your findings and next steps</h2><p className="mt-2 break-all text-sm text-stone-600">{url}</p></div>

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-stone-50 p-4"><p className="text-sm">Mobile lab performance</p><p className="text-2xl font-bold">{data.performanceScore === null ? "Unavailable" : `${data.performanceScore}/100`}</p></div>

        <div className="rounded-xl bg-stone-50 p-4"><p className="text-sm">First content appears (FCP)</p><p className="text-2xl font-bold">{data.fcp === null ? "Unavailable" : `${(data.fcp / 1000).toFixed(1)}s`}</p></div>

      </div>

      <p className="text-sm leading-6 text-stone-600">These are point-in-time lab measurements, not real-user Core Web Vitals or total load time. {data.pageSpeedAvailable === false && "The lab service did not return measurements; the available technical findings are shown below."}</p>

      <aside className="rounded-xl border border-stone-200 p-4"><h3 className="font-bold">Where to make changes</h3><p className="mt-2 text-sm leading-6">{platformAdvice(platform)}</p><p className="mt-2 text-xs text-stone-600">Detected platform: {data.platformDetected || "Unknown"}. Your selection: {platform}. Detection is not a complete inventory.</p></aside>

      <div><h3 className="mb-3 font-bold">Review these checks</h3><p className="mb-3 text-sm text-stone-600">Flagged checks appear first. Open a finding for the evidence and next step. These heuristics need context, not automatic fixes.</p>

        {checks.map((check, i) => <details key={check.id} open={i < 3 && check.status !== "pass"} className="border-t border-stone-200 py-4">

          <summary className="cursor-pointer font-semibold">{check.name} <span className="ml-2 text-xs font-normal text-stone-600">{check.applicable === false ? "Not applicable" : check.status === "pass" ? "No issue flagged" : "Review suggested"}</span></summary>

          <ul className="my-3 list-disc space-y-2 pl-5 text-sm leading-6">{check.findings.map((finding, index) => <li key={index}>{finding}</li>)}</ul>

          <p className="text-sm leading-6"><strong>Next step:</strong> {check.fix}</p>

        </details>)}

      </div>

      <p className="text-xs leading-5 text-stone-600">This scan cannot certify security, accessibility, indexing, AI citations, conversion tracking or checkout behavior. Confirm whether a flagged setting is intentional before changing it.</p>

      <div className="rounded-xl bg-stone-50 p-5"><h3 className="text-xl font-bold">Want a founder's opinion?</h3><p className="my-3 text-sm leading-6">We will review up to three public pages and email up to three prioritized recommendations within 24 hours. Free, with no obligation to hire us.</p>

        <button disabled={delivered.review} onClick={() => setAction("review")} className="min-h-12 w-full rounded-full bg-charcoal px-4 py-3 font-bold text-white disabled:opacity-60">{delivered.review ? "Founder review requested" : "Request my free founder review"}</button>

        <button disabled={delivered.report} onClick={() => setAction("report")} className="mt-3 min-h-12 w-full rounded-full border border-stone-400 bg-white px-4 py-3 font-semibold disabled:opacity-60">{delivered.report ? "Report sent" : "Email my audit report"}</button>

      </div>

      <div className="flex flex-wrap gap-4 text-sm underline"><Link href="/blog/how-to-speed-up-your-website">Understand speed findings</Link><Link href="/blog/ai-built-website-checklist">Check what automation misses</Link></div>

      <button onClick={() => { setData(null); setTokens({ report: "", review: "" }); }} className="min-h-11 text-sm underline">Check another page</button>

    </section>}

    <AuditEmailGate isOpen={action !== null} onClose={() => setAction(null)} url={url} auditData={data} leadToken={tokens[action ?? "report"]} action={action ?? "report"} platform={platform} goal={goal} onDelivered={() => { if (action) setDelivered(previous => ({ ...previous, [action]: true })); }} />

  </div>;

}
