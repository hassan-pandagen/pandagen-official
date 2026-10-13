import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { MONO, T } from "@/components/redesign/tokens";

type WorkCasePreviewProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  href?: string;
};

export default function WorkCasePreview({ src, alt, width, height, caption, href }: WorkCasePreviewProps) {
  const preview = (
    <figure data-work-preview className="border" style={{ borderColor: T.rule, backgroundColor: T.paperHi }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1180px) 1100px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
        loading="eager"
        fetchPriority="high"
        className="h-auto w-full"
      />
      <figcaption className="flex items-center justify-between gap-4 px-4 py-3 text-[12px] uppercase leading-relaxed tracking-[0.08em] group-hover:underline group-focus-visible:underline underline-offset-4" style={{ fontFamily: MONO, color: href ? T.accentText : T.quiet }}>
        {caption}
        {href && <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />}
      </figcaption>
    </figure>
  );

  return href ? (
    <a href={href} className="group mt-10 block focus-visible:outline-2 focus-visible:outline-offset-4" style={{ outlineColor: T.accentText }}>{preview}</a>
  ) : (
    <div className="mt-10">{preview}</div>
  );
}
