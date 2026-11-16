import Image from "next/image";
import ServicePreviewEnlarge from "@/components/pages/services/ServicePreviewEnlarge";
import { ASAM_SEARCH_EVIDENCE } from "@/data/asam-search-evidence";

const screenshot = ASAM_SEARCH_EVIDENCE.screenshot;

export default function AsamSearchEvidenceFigure({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="mt-8 overflow-hidden border border-stone-300 bg-white">
      {/* Display the report header, filters and full chart; retain the original file. */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "1520 / 610" }}>
        <Image src={screenshot.src} alt={screenshot.alt} width={1920} height={1032}
          sizes={compact ? "(min-width: 1024px) 650px, 126vw" : "(min-width: 1200px) 1390px, 126vw"}
          style={{ position: "absolute", width: "126.316%", maxWidth: "none", height: "auto", left: "-24.013%", top: "-26.23%" }} />
      </div>
      <figcaption className="border-t border-stone-200 p-4 text-sm leading-relaxed text-stone-700">
        {compact ? <>Two dated observations from the client&apos;s Google Search Console; impressions measure visibility, not sales. They do not establish what caused the increase.</> : <>Owner-supplied Search Console screenshot, reviewed 11 November 2026. The chart includes time before and after the 20 October relaunch. Its 2.22k total covers the full selected three-month window; 132 is the daily value for 4 November. This shows visibility, not bookings or proof of what caused the increase.</>}
        {compact ? <a href="#search-visibility" className="mt-3 inline-block font-semibold underline underline-offset-4">See the search evidence</a> : <div className="mt-3 flex flex-wrap items-center gap-4">
          <ServicePreviewEnlarge src={screenshot.src} alt={screenshot.alt} />
          <a href={screenshot.baselineSrc} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">View the 19 October screenshot (11 impressions)<span className="sr-only"> (opens in a new tab)</span></a>
        </div>}
      </figcaption>
    </figure>
  );
}
