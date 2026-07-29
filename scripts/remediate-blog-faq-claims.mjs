import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const file = path.resolve("src/data/blog.ts");
const source = await readFile(file, "utf8");

const riskyClaim = /full refund|100(?:\s*percent|%)|90\+[^.]{0,80}guarante|guarantees? 90|guaranteed to|under 1 second|zero downtime|rankings? (?:hold|improve|recover)|pays? for itself|\$0(?:\/year|\/month|\/mo| a month| per month)|only (?:solution|path|fix)|hard ceiling|(?:conversion|traffic|revenue)[^.]{0,100}(?:\d+%|\$[\d,]+)|(?:\d+%|\$[\d,]+)[^.]{0,100}(?:conversion|traffic|revenue)|53%|8\.4%|own the (?:code|entire codebase) outright|own the entire codebase|full source-code ownership|ownership on day one|no recurring fees|every plugin|each plugin|average [^.]{0,60}(?:score|load|second)|scores? (?:between )?\d+[^.]{0,50}(?:mobile|pagespeed)|rank higher|direct ranking factor|losing [^.]{0,60}rankings|pagespeed[^.]{0,80}(?:traffic|rankings|revenue|conversion)|\d+(?:\s*to\s*\d+)?x faster|converts? better|fundamental bloat|architecture is too old|only [^.]{0,50} delivers|objectively better|zero plugins|98% of wordpress|host(?:s|ing)? (?:for )?free|free hosting|own it outright|roi (?:typically|depends|on)|pay(?:s|ing)? off|never (?:goes down|lose|charged)|always (?:rank|convert|load)|every other major ai crawler|cannot see or cite|typically (?:generates?|improves?|saves?|costs?)|break even|common(?:ly)? charge|most businesses spend|fraction of the ongoing cost/i;

function safeAnswer(question) {
  if (/own|ownership|codebase|repository|lock[- ]?in|leave whenever|handoff|hand off|account control/i.test(question)) {
    return "Client content, data, brand assets, and client-controlled accounts remain the client's. Rights in paid custom deliverables, repository transfer, reusable PandaCodeGen tools or templates, and embedded third-party components are defined in the accepted project terms. Third-party components keep their original licenses.";
  }

  if (/how long|timeline|take to|how soon|go down|downtime|launch|cutover/i.test(question)) {
    return "Timeline and cutover risk depend on the inventory, page and template count, integrations, data quality, review speed, and acceptance process. The existing site normally remains available while the replacement is built and tested, and the cutover includes monitoring and rollback planning. Exact dates and acceptable interruption are written into the accepted scope; zero downtime is not promised.";
  }

  if (/white label|white-label|development partner|client find out|nda|agency partner|resell/i.test(question)) {
    return "White-label delivery, disclosure, confidentiality, branding, repository control, support, and client-facing responsibilities must be defined in the accepted partner terms. PandaCodeGen does not promise concealment, unrestricted resale rights, or a particular margin without that agreement.";
  }

  if (/support|changes after launch|tweaks|revision|maintenance/i.test(question)) {
    return "Included support, defect correction, minor adjustments, new features, third-party changes, response times, and chargeable out-of-scope work follow the accepted project terms. Published package defaults are planning guidance, not a substitute for that written boundary.";
  }

  if (/how much traffic|worth the investment|worth it|roi|payback|break even|revenue|conversion|sales|business impact/i.test(question)) {
    return "There is no universal traffic threshold, revenue lift, conversion gain, or payback period. Build a scenario from the site's dated analytics, conversion funnel, margins, current direct costs, internal time, migration cost, and downside risk, then compare it with measured post-launch results without assuming causation.";
  }

  if (/llms\.txt|\bai\b|chatgpt|claude|perplexity|answer engine|citation/i.test(question)) {
    return "Use crawlable rendered content, accurate structured data, clear entities, source-linked evidence, and current discovery controls. Recheck crawler and product behavior against current primary documentation. No file, schema type, framework, or copy pattern guarantees crawling, inclusion, ranking, recommendation, or citation by an AI system.";
  }

  if (/ranking|seo|organic|search/i.test(question)) {
    return "A controlled migration reduces avoidable technical risk through a dated URL inventory, stable URLs where practical, page-level redirect mapping, accurate metadata and canonicals, rendered-output checks, sitemap submission, rollback planning, and Search Console monitoring. Rankings, indexing, traffic, and recovery timing remain controlled by search engines and are not guaranteed.";
  }

  if (/server-side|conversion api|capi|emq|tracking|pixel|ad performance|\bads?\b/i.test(question)) {
    return "Meta recommends using Conversions API with the pixel for a more reliable connection, subject to consent and Meta's current terms. Measure event coverage, match-key quality, deduplication, and reconciliation against the system of record. A dated Panda Patches screenshot is a first-party platform-reporting example, not a controlled lift study, benchmark, or guarantee.";
  }

  if (/guarantee|what should i ask|safe|signing|contract|before i hire|before hiring/i.test(question)) {
    return "Ask for accepted written terms that name deliverables, routes, mobile and desktop test profiles, three recorded passing runs where a Lighthouse target applies, evidence, cure, acceptance, payment milestones, ownership and licensing, third-party costs, support, and remedies. Marketing copy does not replace those project-specific terms.";
  }

  if (/how much|cost|price|quote|included|ongoing|monthly|cheaper|financial|build or buy|when should|replace|switch|hosting|platform fee/i.test(question)) {
    return "Use PandaCodeGen's published starting tiers only as planning anchors. Final price and break-even depend on the accepted scope, current vendor quotes, migration and integration work, hosting, support, maintenance, security, internal time, and measured first-party outcomes. There is no universal payback, conversion lift, ranking gain, or permanently free commercial hosting.";
  }

  if (/fast|speed|slow|load|pagespeed|core web vitals|lcp|wordpress|wix|webflow|squarespace|shopify|woocommerce|divi|elementor|gohighlevel/i.test(question)) {
    return "There is no universal platform score or load-time ceiling. Measure representative routes with field Core Web Vitals where available and repeated lab tests under a recorded device, network, consent, and page state. Diagnose content, media, code, apps or plugins, third parties, infrastructure, and platform-controlled work before choosing optimization or migration.";
  }

  return "The answer depends on the current system, requirements, evidence, vendor terms, operating costs, and accepted project scope. Validate mutable facts at their primary source and do not treat an example as a ranking, performance, revenue, delivery, ownership, or refund promise.";
}

function needsPolicyRewrite(question, answer) {
  if (riskyClaim.test(answer)) return true;
  if (/Meta recommends using Conversions API/i.test(answer) && !/server-side|conversion api|capi|emq|tracking|pixel|ad performance|\bads?\b/i.test(question)) return true;
  return /(?:will|can|does|do|why|how much|how long|when).{0,80}(?:rank|ranking|seo|organic|traffic|conversion|revenue|payback|worth|cost|price|cheaper|timeline|take|downtime|go down|own|ownership|codebase|lock-in|support|changes after launch|fast|speed|slow|load|pagespeed|core web vitals|lcp|llms\.txt|\bai\b|chatgpt|claude|perplexity|white label|white-label)/i.test(question);
}

let faqAnswersChanged = 0;
let catalogFieldsChanged = 0;

const updatedLines = source.split(/\r?\n/).map((line) => {
  if (line.includes("question:") && line.includes("answer:")) {
    const question = line.match(/question:\s*"([^"]+)"/)?.[1];
    const answer = line.match(/answer:\s*"((?:\\.|[^"\\])*)"/)?.[1] ?? "";
    if (question && needsPolicyRewrite(question, answer) && /answer:\s*".*"\s*},?\s*$/.test(line)) {
      faqAnswersChanged += 1;
      return line.replace(/answer:\s*".*"\s*(},?\s*)$/, `answer: "${safeAnswer(question)}" $1`);
    }
  }

  if (line.includes("excerpt:") && riskyClaim.test(line)) {
    catalogFieldsChanged += 1;
    return line.replace(
      /excerpt:\s*".*"\s*,?\s*$/,
      'excerpt: "A practical guide to scope, evidence, current costs, tradeoffs, and the conditions to verify before deciding.",'
    );
  }

  if (line.includes("cardStatLabel:") && riskyClaim.test(line)) {
    catalogFieldsChanged += 1;
    return line.replace(
      /cardStatLabel:\s*".*"\s*,?\s*$/,
      'cardStatLabel: "Conditional acceptance criteria",'
    );
  }

  if (line.includes("title:") && /only fix that works/i.test(line)) {
    catalogFieldsChanged += 1;
    return line.replace(/Only Fix That Works/i, "Evidence-Based Fix Guide");
  }

  return line;
});

let updatedSource = `${updatedLines.join("\n")}\n`;

// A smaller legacy subset formats each FAQ property on a separate line.
// Rewrite only the answer string while preserving that established layout.
updatedSource = updatedSource.replace(
  /(question:\s*"((?:\\.|[^"\\])*)"\s*,\s*\r?\n\s*answer:\s*")((?:\\.|[^"\\])*)(")/g,
  (match, prefix, question, answer, suffix) => {
    if (!needsPolicyRewrite(question, answer)) return match;
    faqAnswersChanged += 1;
    return `${prefix}${safeAnswer(question)}${suffix}`;
  }
);

await writeFile(file, updatedSource, "utf8");
console.log(`Updated ${faqAnswersChanged} risky FAQ answers and ${catalogFieldsChanged} risky catalog fields.`);
