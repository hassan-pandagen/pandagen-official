import Image from "next/image";
import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";

const id = "product-catalog-website-without-cart";
export const metadata = stackGuideMetadata(id);

export default function Page() {
  return <StackGuide id={id}>
    <p><strong>If your prices depend on size, quantity or artwork, you don&apos;t need a shopping cart. You need a product catalog that ends in a quote form, so each enquiry arrives with the product already filled in.</strong> That&apos;s how we built <Link href="/work/emblematic-studio">Emblematic Studio</Link>, a catalog of 22 custom product types where visitors ask for a quote instead of checking out.</p>
    <h2>Why a quote form suits custom products better than a cart</h2>
    <p>A cart needs a fixed price for every option. When the price depends on the job, a cart either shows the wrong price or sends the buyer to the phone anyway. A quote form asks only for what you need to price the job and sends it to you in one email. Emblematic Studio&apos;s form asks for the product, size, quantity and backing, plus contact details. Visitors can attach artwork, which is checked for type and size, emailed to the studio and never stored on the site. If you don&apos;t take payment online, you also don&apos;t need a store platform&apos;s checkout or its monthly plan.</p>
    <figure><Image src="/work/emblematic-studio-quote-form.png" alt="The Emblematic Studio quote form: a short request for product, size, quantity and backing, followed by name, company, phone and email fields" width={1440} height={900} sizes="(min-width: 1000px) 960px, 100vw" /><figcaption>The quote form on Emblematic Studio, an independent client project.</figcaption></figure>
    <h2>One product list for the whole site</h2>
    <p>On Emblematic Studio, the same 22 products appear in seven places: the desktop menu, the mobile menu, the catalog page, each product page, the related-product cards, the quote form&apos;s product list and the sitemap. If each place keeps its own copy, they drift apart without anyone noticing: a product goes missing from the quote form, or the sitemap lists a page you deleted. So the site keeps one typed product list, and all seven read from it. Adding a product means adding one entry.</p>
    <h2>Download a free example</h2>
    <p>We wrote a small example of the same idea for anyone who wants to try it. It isn&apos;t Emblematic Studio&apos;s code and holds no client data. It&apos;s four made-up products and a script that checks them, then builds the menu links, quote options and sitemap from that one list.</p>
    <ul><li><a href="/resources/product-catalog-example/catalog.mjs" download>Download catalog.mjs</a>: the sample products, the checks and the outputs.</li><li><a href="/resources/product-catalog-example/catalog.test.mjs" download>Download catalog.test.mjs</a>: tests for hidden products, duplicate addresses and broken links between products.</li><li><a href="/resources/product-catalog-example/LICENSE.txt" download>MIT license</a>: you can change and share the example freely.</li></ul>
    <p>Save both JavaScript files in one folder. With Node.js 22 or later installed, run:</p>
    <pre><code>{"node catalog.mjs\nnode --test catalog.test.mjs"}</code></pre>
    <p>The first command prints the generated menu links, quote options and sitemap. It doesn&apos;t write any files or connect to the internet. The second runs the tests.</p>
    <h2>What one product record looks like</h2>
    <pre><code>{'{\n  slug: "woven-labels",\n  name: "Woven labels",\n  published: true,\n  quoteable: true,\n  related: ["printed-labels"]\n}'}</code></pre>
    <GuideTable caption="What the example builds from its four sample products" headers={["Output", "Result", "Rule"]} rows={[
      ["Product pages", "3 page addresses", "Published products only."],
      ["Menu links", "3 links", "The same published products."],
      ["Quote form options", "2 options", "Published products that take quote requests."],
      ["Sitemap", "3 URLs", "Full product URLs on your domain."],
      ["The unpublished prototype", "Left out everywhere", "Links to it from other products drop out too."],
    ]} />
    <p>The script stops with an error if two products share a slug or a related product doesn&apos;t exist, so the mistake shows up before the site is built, not after a customer finds it.</p>
    <h2>Try breaking it</h2>
    <p>Copy the first product and paste it again without changing its slug: the script reports a duplicate. Change a related slug to one that doesn&apos;t exist: it reports the missing product. Set a product&apos;s published flag to false: its page address, menu link, quote option and incoming related links all drop out together.</p>
    <p>The flag can&apos;t hide a page that&apos;s already live by itself. Your website has to apply the same rule when it serves pages, and a retired product should redirect to a similar one or return a &quot;gone&quot; page. Leaving a page out of the sitemap doesn&apos;t remove it from Google either.</p>
    <h2>When should products move into an editor?</h2>
    <p>A product list in code works when a developer adds products a few times a year. If your staff change products every week, put the list in an editor like Sanity so they can do it themselves, and keep the same rule: one list, and every part of the site reads from it. If you need stock levels, online payment or shipping rates, you need a store. Our <Link href="/services/ecommerce">ecommerce development</Link> service covers that.</p>
    <p>For a catalog site with a quote form, start with <Link href="/services/custom-engineering">custom website development</Link>. If your staff will edit the products, see our <Link href="/services/cms-development">Sanity CMS service</Link>.</p>
  </StackGuide>;
}
