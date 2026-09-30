import Image from "next/image";

export default function BlogCoverFigure({ id }: { id: string }) {
  return (
    <figure className="my-10 overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
      <Image
        src={`/blog-covers/${id}.webp?v=20260929c`}
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
