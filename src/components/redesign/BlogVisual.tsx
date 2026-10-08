import PlatformPortabilityCover from "@/components/blog/PlatformPortabilityCover";
import Image from "next/image";

export default function BlogVisual({ id, eager = false }: { id: string; eager?: boolean }) {
  if (id === "website-portability") return <div className="aspect-[8/5] h-full w-full overflow-hidden"><PlatformPortabilityCover /></div>;
  return <div className="relative h-full w-full bg-[#e5e0d8]">
    <Image src={`/blog-covers/${id}.webp?v=20261001`} alt="" fill unoptimized loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} sizes="(min-width: 1200px) 600px, (min-width: 768px) 48vw, 90vw" className="object-cover" />
  </div>;
}
