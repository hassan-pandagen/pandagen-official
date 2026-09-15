import { ImageResponse } from "next/og";

export const runtime = "edge";
// Fallback social image. Verified against the 15 Sep 2026 build: exactly one
// generated page uses it, /services/wordpress, which is a 308 redirect
// artifact -- every other page sets its own via ogImageForPath. Corrected for
// accuracy and for future routes, not because it is widely displayed.
export const alt = "PandaCodeGen: Custom Websites, Online Stores and Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", background: "rgba(184,65,12,0.16)", border: "1px solid rgba(184,65,12,0.55)", borderRadius: "100px", padding: "8px 24px", color: "#f2a36f", fontSize: "18px", fontWeight: 600 }}>
          Websites · Online Stores · Software
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1, justifyContent: "center", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "62px", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em", display: "flex" }}>
              Custom Websites Built
            </div>
            <div style={{ fontSize: "62px", fontWeight: 800, color: "#f2a36f", lineHeight: 1.1, letterSpacing: "-0.02em", display: "flex" }}>
              Around Your Business
            </div>
          </div>
          <div style={{ fontSize: "24px", color: "#c7c7c7", lineHeight: 1.4, maxWidth: "850px", display: "flex" }}>
            New builds, redesigns and migrations. Scope, price and ownership agreed in writing before work starts.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", gap: "52px" }}>
            {[
              ["Build", "Fixed Written Scope"],
              ["QA", "Acceptance Criteria"],
              ["Handover", "Code You Own"],
            ].map(([label, detail]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ fontSize: "26px", fontWeight: 700, color: "#f2a36f", display: "flex" }}>{label}</div>
                <div style={{ fontSize: "15px", color: "#a3a3a3", display: "flex" }}>{detail}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#ffffff", display: "flex" }}>PandaCodeGen</div>
            <div style={{ fontSize: "14px", color: "#a3a3a3", letterSpacing: "0.08em", display: "flex" }}>pandacodegen.com</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
