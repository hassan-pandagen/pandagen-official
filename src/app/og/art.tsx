/* eslint-disable @next/next/no-img-element -- ImageResponse renders raw image elements into the generated PNG. */
import type { OgContent } from "@/lib/seo/og";

const orange = "#b8410c";
const ink = "#171512";
const paper = "#f2eee6";
const muted = "#675f56";

type OgVariant = "migration" | "journal" | "case-study" | "engagement" | "profile" | "policy";

/**
 * Screenshots used as the OG image for a case study.
 *
 * /work/enterprise-ops was removed on 29 Aug 2026. Its image,
 * public/work/panda-operations.png, was an unredacted operations dashboard
 * showing eight named customers, their order IDs, individual amounts, payment
 * status and outstanding balances, alongside monthly revenue totals. It was
 * publicly downloadable from the site AND was the social preview served every
 * time that page was shared. The file now lives in private-assets/, outside the
 * build.
 *
 * Anything added here is published twice over: as a fetchable file under
 * public/ and as the preview image on every share of that page. Redact before
 * adding, and assume both surfaces are permanent.
 */
const caseStudyImages: Record<string, string> = {
  "/work/mycustompatches": "/work/mycustompatches.png",
  "/work/panda-patches": "/work/panda-patches.png",
  "/work/panda-codelab": "/work/pandacodelab.png",
  "/work/ladies-4-jesus": "/work/ladies-4-jesus.png",
  "/work/emblematic-studio": "/work/emblematic-studio.png",
};

const profileImages: Record<string, string> = {
  "/about/hassan": "/team/hassan.png",
  "/about/imran": "/team/imran.png",
};

function classify(path: string): OgVariant {
  if (path === "/" || path === "/services" || path.startsWith("/services/")) return "migration";
  if (path === "/blog" || path.startsWith("/blog/")) return "journal";
  if (path === "/work" || path.startsWith("/work/")) return "case-study";
  if (["/pricing", "/contact", "/partners"].includes(path)) return "engagement";
  if (path === "/about" || path.startsWith("/about/")) return "profile";
  return "policy";
}

function clamp(value: string, maximum: number) {
  if (value.length <= maximum) return value;
  const candidate = value.slice(0, maximum - 1).trimEnd();
  const lastSpace = candidate.lastIndexOf(" ");
  const safeEnd = lastSpace >= Math.floor(maximum * 0.72) ? candidate.slice(0, lastSpace) : candidate;
  return `${safeEnd}…`;
}

function titleSize(title: string, variant: OgVariant) {
  if (variant === "journal") {
    if (title.length > 88) return 39;
    if (title.length > 66) return 44;
    return 51;
  }
  if (title.length > 70) return 43;
  if (title.length > 50) return 49;
  if (title.length > 34) return 56;
  return 64;
}

function Eyebrow({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "flex", width: 31, height: 2, background: orange }} />
      <span style={{ display: "flex", fontSize: 13, letterSpacing: "0.17em", fontWeight: 800, color: orange }}>
        {clamp(children.toUpperCase(), 44)}
      </span>
    </div>
  );
}

function Stage({ number, title, active = false }: { number: string; title: string; active?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, color: active ? "#fff" : "#a8a29a" }}>
      <span style={{ display: "flex", width: 27, height: 27, alignItems: "center", justifyContent: "center", borderRadius: 999, border: `1px solid ${active ? orange : "#5c5750"}`, background: active ? orange : "transparent", fontSize: 11, fontWeight: 800 }}>{number}</span>
      <span style={{ display: "flex", fontSize: 10, letterSpacing: "0.12em", fontWeight: 700 }}>{title}</span>
    </div>
  );
}

function ArtifactShell({ note, children }: { note: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 483, height: 540, display: "flex", position: "relative" }}>
      <div style={{ position: "absolute", left: 19, top: 17, display: "flex", width: 456, height: 510, border: "1px solid #c6bdb0", transform: "rotate(2deg)" }} />
      <div style={{ width: 456, height: 510, display: "flex", flexDirection: "column", position: "relative", background: ink, color: "white", padding: "26px 28px 24px", boxShadow: "0 20px 50px rgba(38,30,21,0.18)" }}>
        <span style={{ display: "flex", fontSize: 10, letterSpacing: "0.16em", color: "#9f9991", marginBottom: 10 }}>{note}</span>
        {children}
      </div>
      <div style={{ position: "absolute", display: "flex", right: -4, bottom: 17, width: 63, height: 63, borderRight: `2px solid ${orange}`, borderBottom: `2px solid ${orange}` }} />
      <div style={{ position: "absolute", display: "flex", left: -12, top: -12, width: 50, height: 50, borderLeft: `2px solid ${orange}`, borderTop: `2px solid ${orange}` }} />
    </div>
  );
}

function PanelFooter({ left, right }: { left: string; right: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 15, borderTop: "1px solid #46423d" }}>
      <span style={{ display: "flex", fontSize: 10, letterSpacing: "0.13em", color: "#9f9991" }}>{left}</span>
      <span style={{ display: "flex", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 17, color: "#eee8df" }}>{right}</span>
    </div>
  );
}

function MigrationPanel() {
  const routes = [["/", "/"], ["/services", "/services"], ["/work", "/work"], ["/contact-us", "/contact"]];
  return (
    <ArtifactShell note="FIELD NOTE / 01">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 27 }}>The migration map</span>
        <span style={{ display: "flex", width: 42, height: 42, alignItems: "center", justifyContent: "center", borderRadius: 999, background: orange, fontSize: 22 }}>↗</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 21, paddingBottom: 17, borderBottom: "1px solid #46423d" }}>
        <Stage number="1" title="INVENTORY" /><span style={{ display: "flex", width: 15, height: 1, background: "#514d47" }} /><Stage number="2" title="MAP" active /><span style={{ display: "flex", width: 15, height: 1, background: "#514d47" }} /><Stage number="3" title="LAUNCH" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, color: "#8f8981", fontSize: 10, letterSpacing: "0.14em" }}><span style={{ display: "flex" }}>CURRENT</span><span style={{ display: "flex", marginRight: 36 }}>PRESERVED</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 10 }}>
        {routes.map(([before, after], index) => (
          <div key={before} style={{ display: "flex", alignItems: "center", height: 42 }}>
            <div style={{ display: "flex", alignItems: "center", width: 145, height: 42, border: "1px solid #4d4943", padding: "0 13px", fontSize: 13, color: "#c8c2ba" }}>{before}</div>
            <div style={{ display: "flex", width: 74, alignItems: "center" }}><span style={{ display: "flex", width: 58, height: 1, background: index === 3 ? "#827c74" : orange }} /><span style={{ display: "flex", color: index === 3 ? "#827c74" : orange, fontSize: 19, marginLeft: -3 }}>→</span></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: 157, height: 42, border: `1px solid ${index === 3 ? orange : "#625d56"}`, padding: "0 12px", fontSize: 13 }}><span style={{ display: "flex" }}>{after}</span><span style={{ display: "flex", width: 7, height: 7, borderRadius: 999, background: orange }} /></div>
          </div>
        ))}
      </div>
      <PanelFooter left="NO BLIND CUTOVERS" right="Mapped. Built. Tested." />
    </ArtifactShell>
  );
}

function hash(input: string) {
  let output = 0;
  for (let index = 0; index < input.length; index += 1) output = (output * 31 + input.charCodeAt(index)) | 0;
  return output;
}

function wordsForTitle(title: string) {
  const ignored = new Set(["the", "and", "for", "with", "from", "into", "your", "2026", "website"]);
  const words = title.replace(/[^a-zA-Z0-9+.-]/g, " ").split(/\s+/).filter((word) => word.length > 2 && !ignored.has(word.toLowerCase()));
  return [...new Set(words)].slice(0, 5);
}

function JournalPanel({ content }: { content: OgContent }) {
  const category = content.label.split("·").at(-1)?.trim() || "Web Engineering";
  const issue = content.path === "/blog" ? "INDEX" : String(Math.abs(hash(content.path)) % 90 + 10);
  const keywords = wordsForTitle(content.title);
  return (
    <ArtifactShell note={`JOURNAL / ${issue}`}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 28 }}>Research note</span><span style={{ display: "flex", color: "#9e978e", fontSize: 11, letterSpacing: "0.13em" }}>{clamp(category.toUpperCase(), 30)}</span></div>
        <span style={{ display: "flex", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 52, color: orange }}>{issue}</span>
      </div>
      <div style={{ display: "flex", height: 1, background: "#49443f", marginTop: 18 }} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: 22, gap: 14 }}>
        <span style={{ display: "flex", color: "#9d968d", fontSize: 10, letterSpacing: "0.15em" }}>QUESTION / EVIDENCE / DECISION</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>{keywords.map((word, index) => <span key={word} style={{ display: "flex", padding: "8px 11px", border: `1px solid ${index === 0 ? orange : "#555049"}`, color: index === 0 ? "white" : "#cbc5bc", fontSize: 13 }}>{word}</span>)}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 25, gap: 12 }}>
        {["Context before claims", "Trade-offs before recommendations", "Sources before certainty"].map((line, index) => <div key={line} style={{ display: "flex", alignItems: "center", gap: 13 }}><span style={{ display: "flex", color: orange, fontFamily: "Georgia, serif", fontSize: 18 }}>0{index + 1}</span><span style={{ display: "flex", height: 1, width: 45, background: "#4b4640" }} /><span style={{ display: "flex", color: "#d1cbc2", fontSize: 14 }}>{line}</span></div>)}
      </div>
      <PanelFooter left="PANDACODEGEN JOURNAL" right="Read with context." />
    </ArtifactShell>
  );
}

function CaseStudyPanel({ content, origin }: { content: OgContent; origin: string }) {
  const asset = caseStudyImages[content.path];
  return (
    <ArtifactShell note="CASE FILE / SELECTED WORK">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 27 }}>Implementation evidence</span><span style={{ display: "flex", fontSize: 10, letterSpacing: "0.13em", color: "#99928a" }}>FIRST-PARTY</span></div>
      <div style={{ display: "flex", width: "100%", height: 242, marginTop: 20, position: "relative", overflow: "hidden", background: "#292622", border: "1px solid #4d4842" }}>
        {asset ? <img src={new URL(asset, origin).toString()} width={398} height={242} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 40, color: "#eee7dd" }}>Selected work</div>}
        <div style={{ position: "absolute", left: 0, bottom: 0, display: "flex", width: "100%", height: 54, background: "linear-gradient(transparent, rgba(15,14,12,.88))" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
        {["OWNERSHIP", "MEASUREMENT", "LIMITATIONS"].map((label, index) => <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6, width: 116 }}><span style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 20, color: index === 0 ? "#fff" : "#bfb8af" }}>0{index + 1}</span><span style={{ display: "flex", fontSize: 9, letterSpacing: "0.12em", color: "#8f8981" }}>{label}</span></div>)}
      </div>
      <PanelFooter left="EVIDENCE, LABELLED" right="See the work." />
    </ArtifactShell>
  );
}

function EngagementPanel({ content }: { content: OgContent }) {
  const isPricing = content.path === "/pricing";
  return (
    <ArtifactShell note={isPricing ? "ENGAGEMENT PLAN / 01" : "PROJECT BRIEF / 01"}>
      <span style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 28 }}>{isPricing ? "Scope before estimates" : "Start with the constraints"}</span>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 24, borderTop: "1px solid #4b4640" }}>
        {[["01", "FIT AUDIT", "Current site + constraints"], ["02", "MIGRATION PLAN", "Scope + acceptance"], ["03", "DELIVERY", "Build + cutover"]].map(([number, title, detail], index) => (
          <div key={number} style={{ display: "flex", alignItems: "center", height: 82, borderBottom: "1px solid #4b4640" }}>
            <span style={{ display: "flex", width: 48, fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 23, color: index === 1 ? orange : "#817a72" }}>{number}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 164 }}><span style={{ display: "flex", fontSize: 12, letterSpacing: "0.12em", fontWeight: 800 }}>{title}</span><span style={{ display: "flex", fontSize: 12, color: "#969087" }}>{detail}</span></div>
            <span style={{ display: "flex", width: 94, height: 2, background: index === 1 ? orange : "#514d47" }} /><span style={{ display: "flex", width: 9, height: 9, marginLeft: 7, borderRadius: 999, background: index === 1 ? orange : "#514d47" }} />
          </div>
        ))}
      </div>
      <PanelFooter left="30% TO START" right="Clear scope. Clean handover." />
    </ArtifactShell>
  );
}

function ProfilePanel({ content, origin }: { content: OgContent; origin: string }) {
  const asset = profileImages[content.path];
  return (
    <ArtifactShell note="ENGINEERING TEAM / PROFILE">
      <div style={{ display: "flex", justifyContent: "space-between", height: 318, marginTop: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: asset ? 192 : 398 }}>
          <span style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 29 }}>People accountable for the work.</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{["Architecture", "Implementation", "Validation", "Handover"].map((item, index) => <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", color: "#c8c1b8", fontSize: 13 }}><span style={{ display: "flex", color: orange, fontSize: 11 }}>0{index + 1}</span>{item}</div>)}</div>
        </div>
        {asset && <img src={new URL(asset, origin).toString()} width={186} height={318} alt="" style={{ objectFit: "cover", objectPosition: "center top", filter: "grayscale(1)", borderBottom: `5px solid ${orange}` }} />}
      </div>
      <PanelFooter left="FOUNDERS / ENGINEERS" right="Named responsibility." />
    </ArtifactShell>
  );
}

function PolicyPanel({ content }: { content: OgContent }) {
  return (
    <ArtifactShell note="PUBLIC STANDARD / CURRENT">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}><span style={{ display: "flex", width: 275, fontFamily: "Georgia, serif", fontSize: 28 }}>Written terms beat implied promises.</span><span style={{ display: "flex", width: 48, height: 48, border: `2px solid ${orange}`, alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 22 }}>§</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 26 }}>{["Scope and responsibility", "Ownership and portability", "Evidence and limitations", "Privacy and consent"].map((line, index) => <div key={line} style={{ display: "flex", height: 49, alignItems: "center", borderTop: "1px solid #48433e" }}><span style={{ display: "flex", width: 46, color: orange, fontFamily: "Georgia, serif", fontStyle: "italic" }}>0{index + 1}</span><span style={{ display: "flex", fontSize: 14, color: "#d0c9c0" }}>{line}</span></div>)}</div>
      <PanelFooter left={clamp(content.title.toUpperCase(), 26)} right="Plain language." />
    </ArtifactShell>
  );
}

function footerTerms(variant: OgVariant) {
  if (variant === "journal") return ["CONTEXT", "SOURCES", "DECISIONS"];
  if (variant === "case-study") return ["OWNERSHIP", "EVIDENCE", "LIMITS"];
  if (variant === "engagement") return ["SCOPE", "ACCEPTANCE", "HANDOVER"];
  if (variant === "profile") return ["ARCHITECTURE", "DELIVERY", "ACCOUNTABILITY"];
  if (variant === "policy") return ["TERMS", "PRIVACY", "TRANSPARENCY"];
  return ["URLS", "CONTENT", "ANALYTICS", "INTEGRATIONS"];
}

export function OgArtwork({ content, logoUrl, origin }: { content: OgContent; logoUrl: string; origin: string }) {
  const variant = classify(content.path);
  const isHome = content.path === "/";
  const visualTitle = isHome ? "Rebuild without the reset." : content.title;
  const terms = footerTerms(variant);
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: paper, color: ink, fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ position: "absolute", right: -170, top: -210, display: "flex", width: 690, height: 690, borderRadius: 999, background: orange, opacity: 0.08 }} />
      <div style={{ position: "absolute", left: 0, bottom: 0, display: "flex", width: 445, height: 11, background: orange }} />
      <div style={{ display: "flex", width: "100%", height: "100%", padding: "46px 54px 43px 58px", position: "relative" }}>
        <div style={{ width: 605, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: 560 }}><img src={logoUrl} width={304} height={54} alt="" style={{ objectFit: "contain" }} /><span style={{ display: "flex", fontSize: 12, letterSpacing: "0.16em", fontWeight: 700 }}>EST. 02 / 2026</span></div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
            <Eyebrow>{isHome ? "SEO-safe migration" : content.label}</Eyebrow>
            <div style={{ display: "flex", marginTop: 23, maxWidth: 565, maxHeight: variant === "journal" ? 230 : 220, overflow: "hidden", fontFamily: "Georgia, Times New Roman, serif", fontSize: titleSize(visualTitle, variant), lineHeight: 0.99, letterSpacing: "-0.045em", color: ink }}>{clamp(visualTitle, variant === "journal" ? 108 : 82)}</div>
            <div style={{ display: "flex", marginTop: 21, maxWidth: 525, maxHeight: 82, overflow: "hidden", fontSize: 18, lineHeight: 1.4, color: muted }}>{clamp(content.description, 145)}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 22, fontSize: 10, letterSpacing: "0.11em", fontWeight: 800, color: "#716b63" }}>{terms.map((term) => <span key={term}>{term}</span>)}</div>
            <div style={{ display: "flex", width: 548, height: 1, background: "#c9c1b5" }} />
            <div style={{ display: "flex", justifyContent: "space-between", width: 548, alignItems: "center" }}>
              <span style={{ display: "flex", fontSize: 14, color: "#6c665e" }}>{content.path === "/" ? "pandacodegen.com" : clamp(`pandacodegen.com${content.path}`, 50)}</span>
              <span style={{ display: "flex", fontSize: 12, fontWeight: 800, alignItems: "center", gap: 9 }}>{variant === "journal" ? "READ THE NOTE" : variant === "case-study" ? "VIEW THE EVIDENCE" : "GET YOUR MIGRATION PLAN"}<span style={{ color: orange, fontSize: 19 }}>→</span></span>
            </div>
          </div>
        </div>
        <div style={{ width: 483, height: 540, display: "flex", marginLeft: 6 }}>
          {variant === "migration" && <MigrationPanel />}{variant === "journal" && <JournalPanel content={content} />}{variant === "case-study" && <CaseStudyPanel content={content} origin={origin} />}{variant === "engagement" && <EngagementPanel content={content} />}{variant === "profile" && <ProfilePanel content={content} origin={origin} />}{variant === "policy" && <PolicyPanel content={content} />}
        </div>
      </div>
    </div>
  );
}
