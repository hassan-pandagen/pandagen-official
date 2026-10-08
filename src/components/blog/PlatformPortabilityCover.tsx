import Image from "next/image";

const platforms = [
  { name: "Wix", logo: "wix.svg" },
  { name: "Squarespace", logo: "squarespace.svg" },
  { name: "Webflow", logo: "webflow.svg" },
  { name: "Shopify", logo: "shopify.svg" },
  { name: "WooCommerce", logo: "woocommerce.svg" },
  { name: "GoHighLevel", logo: "highlevel.png" },
  { name: "WordPress.com", logo: "wordpress.svg" },
  { name: "WordPress.org", logo: "wordpress.svg" },
];

/** Local brand assets; both WordPress platforms share the WordPress mark. */
export default function PlatformPortabilityCover() {
  return <div aria-hidden="true" className="flex h-full w-full flex-col justify-center bg-[#eee9e0] p-[5%]">
    <div className="mb-[5%] flex items-center justify-between border-b border-[#cfc5b6] pb-[4%] text-[clamp(10px,1.1vw,13px)] font-medium uppercase tracking-[.12em] text-[#705943]"><span>Website portability</span><span>8 platforms</span></div>
    <div className="grid grid-cols-4 gap-x-[3%] gap-y-5 bg-white px-[3%] py-[4%]">
      {platforms.map(({ name, logo }) => <div key={name} className="flex min-w-0 flex-col items-center gap-2 text-center">
        <span className="relative flex aspect-[4/3] w-full max-w-[100px] items-center justify-center">
          <Image src={`/platform-logos/${logo}`} alt="" width={100} height={75} unoptimized className={`h-full object-contain ${name === "GoHighLevel" ? "w-full" : "w-[65%]"}`} />
        </span>
        <span className="text-[clamp(9px,1vw,12px)] font-semibold tracking-[-.02em] text-[#3f352a]">{name}</span>
      </div>)}
    </div>
  </div>;
}
