/**
 * Homepage FAQs. Moved out of src/app/page.tsx on 24 Sep 2026, unchanged, so
 * the live homepage (which renders them and emits the FAQPage JSON-LD) and the
 * redesign preview read one list. Answers must stay visible wherever they are
 * rendered: the JSON-LD asserts them. See HomeFaqSection.tsx.
 */
export const homeFaqs = [
  {
    // Added 10 Sep 2026. The single biggest objection to a custom-coded site is
    // "then I have to call a developer every time", and none of the seven
    // questions here answered it. The answer already existed, verified, on the
    // Ladies 4 Jesus case study, which almost nobody reaches: embedded Studio,
    // roughly a minute to go live, no deploy, owner-run.
    //
    // Rewritten the same day, after Starter gained the content editor. The first
    // version carved out Starter as deliberately CMS-free. That is no longer the
    // offer, and an FAQ contradicting the pricing page is worse than no FAQ.
    //
    // The boundary sentence stays. A content editor genuinely does not cover new
    // templates or new features, and pretending otherwise recreates the whole
    // dependency argument on the first invoice.
    q: "If the site is custom code, do I need a developer every time I want to change something?",
    a: "No, and this is the part most people get wrong about custom code in 2026. Every package includes an editor built into your own site. You sign in, change the words, swap a photo, update your opening hours or add a staff member, and the live site updates in about a minute. There is no deploy, no ticket and no developer. Ladies 4 Jesus runs that way today: nine content types and five moderated submission paths, run by the owner, not by us. What still needs us is a new page template, a new feature or a change to how something works, and that is quoted like any other work. So the honest line is that you change what the site says, you operate whatever it was built to do, and we build the things it cannot do yet."
  },
  {
    // Added 11 Sep 2026 alongside the CustomFeatures section above. That section
    // now makes two promises on this page, that features are built to the
    // business's rules and that they carry no separate monthly licence, and the
    // 10 Sep audit named the two questions a buyer asks straight afterwards.
    // Both were unanswered anywhere on the site. A claim whose obvious follow-up
    // is unanswered reads as a catch.
    q: "If the features are built in, is every future feature included too?",
    a: "No, and it would not be honest to imply it. Your quote lists the features being built, and those are fixed in price before work starts. Something new later is scoped and priced the same way, before anyone begins. What you do not pay for again is the thing you already bought: a calculator we built you keeps working, keeps being editable, and never arrives with a renewal notice or a price rise. The distinction that matters is between changing what an existing feature does, which is usually a setting you control, and adding a feature the site has never had, which is new work."
  },
  {
    q: "Do I need your monthly plan to keep a custom feature working?",
    a: "No. There is no compulsory retainer, and nothing we build stops working if you never take one. The feature lives in code you own, on accounts in your name. What a feature does still need is the services underneath it: a form needs email delivery, an editable feature needs your content system, and anything taking payments needs a payment provider. Those are billed by those providers, on plans your quote names before you commit, and they carry on whether we are involved or not. Optional monthly support covers maintenance, small changes and the search and content work you choose, and it is quoted against your actual site rather than sold as a fixed tier. Hosting can be part of that arrangement on terms agreed with you, rather than being included automatically."
  },
  {
    q: "Do you have a minimum project size?",
    a: "No. We start at $1,500 for a site of up to 7 pages, and a small project is quoted the same way as a large one. Most custom Next.js agencies will not start below $10,000, and several will not start below $50,000, so a small business is often told no before it gets a price. You get a fixed price before we begin either way.",
  },
  {
    q: "How much does WordPress to Next.js migration cost?",
    a: "From $1,500 for a business site of up to 7 pages. From $3,500 for 8 to 20 pages with your blog moved and every old link forwarded, which is what most people pick. From $5,000 for a large catalogue, subscriptions, custom checkout logic, more than 20 pages, or more than one language. A simple store of a few products starts at Starter, at $1,500. Anything bigger is quoted after a call. The price is fixed before we start and your written quote has the exact figure. Your content, your Google settings and your design all come across. The representative pages named in your scope are tested to 90 or better on Lighthouse, mobile and desktop. No monthly plugin fees, and you own the code. The representative pages named in your quote score 90 or better on Google's Lighthouse lab test on phone and desktop, and we test three times before handover. If none of these match what you have, call +1 (302) 773-8982 or email info@pandacodegen.com and we will quote it.",
  },
  {
    q: "How does the free AI website audit work?",
    a: "Type in your web address and you get your load time, your Google speed scores, your technical SEO and any obvious security problems, with specific things to fix. It takes under a minute. No email, no signup, no sales call. It is a snapshot of your site today, not a claim about money you are losing.",
  },
  {
    q: "How much faster will my site be after migrating from WordPress or Shopify?",
    a: "Most WordPress and Shopify sites we look at take 3 to 8 seconds to load. We build for under a second, and the representative pages named in your scope score 90 or better on Lighthouse, Google's lab test, on phone and desktop. We test three times and show you the results. That lab score is the condition we deliver. The number PageSpeed shows at the top of the report is different: it is Chrome User Experience Report field data, collected from your actual visitors over 28 days, and it depends on their devices, their networks and whatever gets added to the site later. We keep measuring that with you rather than promise it.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes. We build custom Shopify storefronts using headless architecture: your customers see a fast custom front end while you keep managing products and orders in Shopify as usual. If your store is slow because of app bloat, a heavy theme or unoptimised code, we replace the storefront layer with custom code while your entire Shopify backend stays in place for products, orders and payments. Speed improvement varies by store, so we measure your baseline before quoting.",
  },
  {
    q: "Will I lose SEO rankings when migrating from WordPress?",
    a: "Nobody controls Google, so anyone promising your rankings is guessing. What we do is forward every single old web address to its new page, carry across your titles, descriptions and blog content, and watch Google Search Console before and after launch. Your old site stays live until the new one is confirmed working, and if anything is wrong we switch back. On the MyCustomPatches move, confirmed by the owner: 200-plus pages in 22 days, no downtime, and no rankings lost in the 30 days after launch. Speed and hosting figures for that project are withdrawn while we recheck the original test records.",
  },
  {
    q: "Why not just use a faster WordPress host or a caching plugin?",
    a: "Faster hosting and caching help, but they do not change the underlying model: WordPress assembles each page on request by querying the database, loading plugins and rendering the theme. Caching plugins such as WP Rocket or W3 Total Cache put a static copy in front of that work, which helps until the cache misses, the page is personalised or a plugin update changes the output. A statically generated or server-rendered custom build removes the assembly step instead of hiding it, which is why the improvement holds up under load and after updates.",
  },
];
