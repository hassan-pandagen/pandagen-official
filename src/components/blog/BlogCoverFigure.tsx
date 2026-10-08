import PlatformPortabilityCover from "@/components/blog/PlatformPortabilityCover";
import Image from "next/image";

export default function BlogCoverFigure({ id }: { id: string }) {
  if (id === "website-portability") return (
    <figure className="my-10 aspect-[8/5] w-full overflow-hidden rounded-xl border border-stone-200">
      <PlatformPortabilityCover />
    </figure>
  );
  return (
    <figure className="my-10 overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
      <Image
        src={`/blog-covers/${id}.webp?v=20261001`}
        alt=""
        width={1200}
        height={750}
        unoptimized
        sizes="(min-width: 768px) 640px, 90vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
