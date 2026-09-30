import Image from "next/image";

export default function BlogVisual({ id, eager = false }: { id: string; eager?: boolean }) {
  return <div className="relative h-full w-full bg-[#e5e0d8]">
    <Image src={`/blog-covers/${id}.webp?v=20260929c`} alt="" fill unoptimized loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} sizes="(min-width: 1200px) 600px, (min-width: 768px) 48vw, 90vw" className="object-cover" />
  </div>;
}
