#!/usr/bin/env node

/**
 * Bounded structural SEO release checker.
 *
 * This intentionally checks facts available in server-rendered HTML. It does not
 * score copy, infer keywords, execute JavaScript, or pretend to measure field
 * performance. During local development, public sitemap URLs are mapped to the
 * same path on the local crawl origin; external origins are never fetched.
 */

const DEFAULTS = Object.freeze({
  baseUrl: "http://localhost:3002",
  concurrency: 6,
  timeoutMs: 8_000,
  maxPages: 500,
  maxDiscovered: 100,
  maxBodyBytes: 2 * 1024 * 1024,
  maxRunMs: 120_000,
});

const LIMITS = Object.freeze({
  concurrency: [1, 16],
  timeoutMs: [500, 30_000],
  maxPages: [1, 1_000],
  maxDiscovered: [0, 500],
  maxBodyBytes: [16 * 1024, 5 * 1024 * 1024],
  maxRunMs: [5_000, 10 * 60_000],
  sitemapChildren: 20,
  urlLength: 2_048,
});

const USER_AGENT = "PandaCodeGen-SEO-Release-Check/1.0";
const NON_PAGE_PATH = /(?:\.(?:avif|bmp|css|csv|docx?|eot|gif|ico|jpe?g|js|json|map|mp3|mp4|mov|ogg|otf|pdf|png|pptx?|rar|rss|svg|tar|tiff?|txt|webm|webmanifest|webp|woff2?|xlsx?|xml|zip))$/i;
const SKIPPED_PATH_PREFIX = /^(?:\/api(?:\/|$)|\/_next(?:\/|$)|\/_vercel(?:\/|$)|\/cdn-cgi(?:\/|$))/i;
const SKIPPED_EXACT_PATH = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.json",
  "/site.webmanifest",
  "/llms.txt",
  "/llms-full.txt",
  "/ai.txt",
]);

class OperationalError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "OperationalError";
    this.code = code;
  }
}

function usage() {
  return `Usage: node seo-audit.mjs [base-url] [options]

Options:
  --base-url <url>          Crawl origin (default: ${DEFAULTS.baseUrl})
  --canonical-origin <url> Expected public origin; inferred from a local sitemap
  --concurrency <n>         Concurrent requests (${LIMITS.concurrency[0]}-${LIMITS.concurrency[1]})
  --timeout-ms <n>          Per-request timeout (${LIMITS.timeoutMs[0]}-${LIMITS.timeoutMs[1]})
  --max-pages <n>           Maximum sitemap pages (${LIMITS.maxPages[0]}-${LIMITS.maxPages[1]})
  --max-discovered <n>      Maximum non-sitemap internal targets to verify (${LIMITS.maxDiscovered[0]}-${LIMITS.maxDiscovered[1]})
  --max-body-bytes <n>      Maximum response body (${LIMITS.maxBodyBytes[0]}-${LIMITS.maxBodyBytes[1]})
  --max-run-ms <n>          Whole-run deadline (${LIMITS.maxRunMs[0]}-${LIMITS.maxRunMs[1]})
  --help                    Show this help

Exit codes: 0 = pass, 1 = release failures, 2 = configuration/connectivity/incomplete run.`;
}

function parseBoundedInteger(flag, value, [minimum, maximum]) {
  if (!/^\d+$/.test(value ?? "")) {
    throw new OperationalError("INVALID_ARGUMENT", `${flag} must be an integer.`);
  }

  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed) || parsed < minimum || parsed > maximum) {
    throw new OperationalError(
      "INVALID_ARGUMENT",
      `${flag} must be between ${minimum} and ${maximum}.`,
    );
  }
  return parsed;
}

function parseOrigin(value, flag) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new OperationalError("INVALID_ARGUMENT", `${flag} must be an absolute URL.`);
  }

  if (!/^https?:$/.test(parsed.protocol) || parsed.username || parsed.password) {
    throw new OperationalError(
      "INVALID_ARGUMENT",
      `${flag} must be an HTTP(S) URL without credentials.`,
    );
  }
  return parsed.origin;
}

function parseArgs(argv) {
  const config = { ...DEFAULTS, canonicalOrigin: null };
  let positionalBaseUrl = null;

  const numericFlags = new Map([
    ["--concurrency", ["concurrency", LIMITS.concurrency]],
    ["--timeout-ms", ["timeoutMs", LIMITS.timeoutMs]],
    ["--max-pages", ["maxPages", LIMITS.maxPages]],
    ["--max-discovered", ["maxDiscovered", LIMITS.maxDiscovered]],
    ["--max-body-bytes", ["maxBodyBytes", LIMITS.maxBodyBytes]],
    ["--max-run-ms", ["maxRunMs", LIMITS.maxRunMs]],
  ]);

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") {
      config.help = true;
      continue;
    }

    if (arg === "--base-url" || arg === "--canonical-origin") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new OperationalError("INVALID_ARGUMENT", `${arg} requires a value.`);
      }
      index += 1;
      if (arg === "--base-url") config.baseUrl = value;
      else config.canonicalOrigin = parseOrigin(value, arg);
      continue;
    }

    if (numericFlags.has(arg)) {
      const value = argv[index + 1];
      const [property, bounds] = numericFlags.get(arg);
      config[property] = parseBoundedInteger(arg, value, bounds);
      index += 1;
      continue;
    }

    if (arg.startsWith("--")) {
      throw new OperationalError("INVALID_ARGUMENT", `Unknown option: ${arg}`);
    }

    if (positionalBaseUrl !== null) {
      throw new OperationalError("INVALID_ARGUMENT", "Only one positional base URL is allowed.");
    }
    positionalBaseUrl = arg;
  }

  if (positionalBaseUrl !== null) config.baseUrl = positionalBaseUrl;
  config.crawlOrigin = parseOrigin(config.baseUrl, "base URL");
  return config;
}

function isLoopbackOrigin(origin) {
  const hostname = new URL(origin).hostname.toLowerCase();
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
}

function normalizePathname(pathname) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "") || "/";
}

function normalizedUrlKey(urlLike, { dropSearch = false } = {}) {
  const url = urlLike instanceof URL ? new URL(urlLike.href) : new URL(urlLike);
  url.hash = "";
  url.pathname = normalizePathname(url.pathname);
  if (dropSearch) url.search = "";
  return url.href;
}

function displayUrl(urlLike) {
  const url = urlLike instanceof URL ? urlLike : new URL(urlLike);
  return `${url.pathname}${url.search}`;
}

function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };
  return String(value).replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);/gi, (entity, token) => {
    if (token[0] === "#") {
      const hexadecimal = token[1]?.toLowerCase() === "x";
      const number = Number.parseInt(token.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
      if (Number.isFinite(number) && number >= 0 && number <= 0x10ffff) {
        try {
          return String.fromCodePoint(number);
        } catch {
          return entity;
        }
      }
      return entity;
    }
    return named[token.toLowerCase()] ?? entity;
  });
}

function cleanText(value) {
  return decodeEntities(String(value).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function extractXmlText(fragment, localName) {
  const pattern = new RegExp(
    `<(?:[\\w.-]+:)?${localName}\\b[^>]*>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?${localName}\\s*>`,
    "i",
  );
  const match = pattern.exec(fragment);
  if (!match) return null;
  const withoutCdata = match[1].replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/i, "$1");
  return decodeEntities(withoutCdata).trim();
}

function parseSitemapDocument(xml) {
  const rootMatch = /<(?:[\w.-]+:)?(urlset|sitemapindex)\b/i.exec(xml);
  if (!rootMatch) {
    throw new OperationalError("INVALID_SITEMAP", "Sitemap root must be <urlset> or <sitemapindex>.");
  }

  const type = rootMatch[1].toLowerCase();
  const elementName = type === "urlset" ? "url" : "sitemap";
  const pattern = new RegExp(
    `<(?:[\\w.-]+:)?${elementName}\\b[^>]*>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?${elementName}\\s*>`,
    "gi",
  );
  const entries = [];
  let match;
  while ((match = pattern.exec(xml)) !== null) {
    entries.push({
      loc: extractXmlText(match[1], "loc"),
      lastmod: extractXmlText(match[1], "lastmod"),
    });
  }
  return { type, entries };
}

function safePublicUrl(rawValue) {
  if (!rawValue || rawValue.length > LIMITS.urlLength) return null;
  let url;
  try {
    url = new URL(rawValue);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(url.protocol) || url.username || url.password || url.hash) return null;
  return url;
}

function validateLastmod(value) {
  if (value === null) return null;
  if (!/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) {
    return "must be YYYY-MM-DD or an RFC 3339 timestamp with a timezone";
  }

  const [year, month, day] = value.slice(0, 10).split("-").map(Number);
  const calendarDate = new Date(Date.UTC(year, month - 1, day));
  if (
    calendarDate.getUTCFullYear() !== year ||
    calendarDate.getUTCMonth() !== month - 1 ||
    calendarDate.getUTCDate() !== day
  ) {
    return "contains an invalid calendar date";
  }

  const parsed = Date.parse(value);
  if (!Number.isFinite(parsed)) return "is not a parseable date";
  if (parsed > Date.now() + 24 * 60 * 60 * 1_000) return "is more than 24 hours in the future";
  return null;
}

function publicToCrawlUrl(publicUrl, crawlOrigin) {
  const mapped = new URL(crawlOrigin);
  mapped.pathname = publicUrl.pathname;
  mapped.search = publicUrl.search;
  mapped.hash = "";
  return mapped;
}

async function readBodyBounded(response, maxBodyBytes) {
  const declaredLength = Number(response.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > maxBodyBytes) {
    throw new OperationalError(
      "BODY_LIMIT",
      `Response declares ${declaredLength} bytes; limit is ${maxBodyBytes}.`,
    );
  }

  if (!response.body) return Buffer.alloc(0);
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        throw new OperationalError("BODY_LIMIT", `Response exceeded ${maxBodyBytes} bytes.`);
      }
      chunks.push(Buffer.from(value));
    }
  } finally {
    reader.releaseLock();
  }
  return Buffer.concat(chunks, size);
}

async function fetchBounded(urlLike, context) {
  const url = urlLike instanceof URL ? urlLike : new URL(urlLike);
  if (url.origin !== context.config.crawlOrigin) {
    throw new OperationalError("CROSS_ORIGIN_BLOCKED", `Refused to fetch external origin ${url.origin}.`);
  }

  const remainingMs = context.deadline - Date.now();
  if (remainingMs <= 0) {
    throw new OperationalError("RUN_TIMEOUT", "Whole-run deadline reached before request.");
  }

  const timeoutMs = Math.min(context.config.timeoutMs, remainingMs);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.1",
        "user-agent": USER_AGENT,
      },
      redirect: "manual",
      signal: controller.signal,
    });
    const body = await readBodyBounded(response, context.config.maxBodyBytes);
    return { response, body, text: new TextDecoder("utf-8").decode(body) };
  } catch (error) {
    if (error?.name === "AbortError") {
      const globalExpired = Date.now() >= context.deadline;
      throw new OperationalError(
        globalExpired ? "RUN_TIMEOUT" : "REQUEST_TIMEOUT",
        `${globalExpired ? "Run" : "Request"} timed out after ${timeoutMs} ms.`,
      );
    }
    if (error instanceof OperationalError) throw error;
    throw new OperationalError("FETCH_ERROR", error?.message || "Unknown fetch error.");
  } finally {
    clearTimeout(timer);
  }
}

function parseAttributes(tag) {
  const attributes = new Map();
  const pattern = /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let match;
  while ((match = pattern.exec(tag)) !== null) {
    attributes.set(match[1].toLowerCase(), decodeEntities(match[2] ?? match[3] ?? match[4] ?? ""));
  }
  return attributes;
}

function startTags(html, name) {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];
}

function structuralMarkup(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script\b[\s\S]*?<\/script\s*>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style\s*>/gi, "")
    .replace(/<noscript\b[\s\S]*?<\/noscript\s*>/gi, "");
}

function normalizedContentKey(value) {
  return cleanText(value).toLocaleLowerCase("en-US");
}

function isHtmlResponse(response) {
  const contentType = response.headers.get("content-type") ?? "";
  return /(?:text\/html|application\/xhtml\+xml)/i.test(contentType);
}

function resolveCanonical(rawHref, publicUrl) {
  if (!rawHref || rawHref.length > LIMITS.urlLength) return null;
  try {
    const resolved = new URL(rawHref, publicUrl);
    if (!/^https?:$/.test(resolved.protocol) || resolved.username || resolved.password || resolved.hash) {
      return null;
    }
    return resolved;
  } catch {
    return null;
  }
}

function resolveInternalHref(rawHref, publicUrl, publicOrigin, crawlOrigin) {
  const href = rawHref.trim();
  if (!href || href.length > LIMITS.urlLength || /^(?:mailto|tel|sms|javascript|data):/i.test(href)) {
    return null;
  }

  let resolved;
  try {
    resolved = new URL(href, publicUrl);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(resolved.protocol)) return null;

  if (resolved.origin === crawlOrigin && crawlOrigin !== publicOrigin) {
    const remapped = new URL(publicOrigin);
    remapped.pathname = resolved.pathname;
    remapped.search = resolved.search;
    remapped.hash = resolved.hash;
    resolved = remapped;
  }
  if (resolved.origin !== publicOrigin) return null;

  resolved.hash = "";
  const pathname = normalizePathname(resolved.pathname);
  if (
    SKIPPED_PATH_PREFIX.test(pathname) ||
    SKIPPED_EXACT_PATH.has(pathname.toLowerCase()) ||
    NON_PAGE_PATH.test(pathname)
  ) {
    return null;
  }
  resolved.pathname = pathname;
  return resolved;
}

function issue(target, code, message, path = "") {
  target.push({ code, message, path });
}

function analyzeHtmlPage({ html, response, publicUrl, publicOrigin, crawlOrigin, failures }) {
  const markup = structuralMarkup(html);
  const path = displayUrl(publicUrl);

  const titleMatches = [...markup.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/gi)];
  const titleValues = titleMatches.map((match) => cleanText(match[1])).filter(Boolean);
  if (titleMatches.length !== 1 || titleValues.length !== 1) {
    issue(failures, "TITLE_COUNT", `Expected one non-empty <title>; found ${titleMatches.length}.`, path);
  }

  const metas = startTags(markup, "meta").map(parseAttributes);
  const descriptions = metas.filter(
    (attributes) => (attributes.get("name") ?? "").toLowerCase() === "description",
  );
  const descriptionValues = descriptions.map((attributes) => cleanText(attributes.get("content") ?? ""));
  if (descriptions.length !== 1 || descriptionValues[0]?.length === 0) {
    issue(
      failures,
      "DESCRIPTION_COUNT",
      `Expected one non-empty meta description; found ${descriptions.length}.`,
      path,
    );
  }

  const robotDirectives = [
    response.headers.get("x-robots-tag") ?? "",
    ...metas
      .filter((attributes) => ["robots", "googlebot"].includes((attributes.get("name") ?? "").toLowerCase()))
      .map((attributes) => attributes.get("content") ?? ""),
  ];
  if (robotDirectives.some((value) => /(?:^|[\s,])noindex(?:$|[\s,])/i.test(value))) {
    issue(failures, "NOINDEX_IN_SITEMAP", "Sitemap page carries a noindex directive.", path);
  }

  const canonicalTags = startTags(markup, "link")
    .map(parseAttributes)
    .filter((attributes) =>
      (attributes.get("rel") ?? "")
        .toLowerCase()
        .split(/\s+/)
        .includes("canonical"),
    );
  if (canonicalTags.length !== 1) {
    issue(failures, "CANONICAL_COUNT", `Expected one canonical link; found ${canonicalTags.length}.`, path);
  }
  const canonicalUrl =
    canonicalTags.length === 1
      ? resolveCanonical(canonicalTags[0].get("href") ?? "", publicUrl)
      : null;
  if (canonicalTags.length === 1 && canonicalUrl === null) {
    issue(failures, "CANONICAL_INVALID", "Canonical href is empty or invalid.", path);
  } else if (canonicalUrl && normalizedUrlKey(canonicalUrl) !== normalizedUrlKey(publicUrl)) {
    issue(
      failures,
      "CANONICAL_MISMATCH",
      `Canonical ${canonicalUrl.href} does not equal sitemap URL ${publicUrl.href}.`,
      path,
    );
  }

  const h1Count = startTags(markup, "h1").length;
  if (h1Count !== 1) issue(failures, "H1_COUNT", `Expected one <h1>; found ${h1Count}.`, path);

  const mainCount = startTags(markup, "main").length;
  if (mainCount !== 1) issue(failures, "MAIN_COUNT", `Expected one <main>; found ${mainCount}.`, path);

  const jsonLdScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)].filter(
    (match) => (parseAttributes(`<script ${match[1]}>`).get("type") ?? "").toLowerCase() === "application/ld+json",
  );
  jsonLdScripts.forEach((match, index) => {
    const source = match[2].trim();
    if (!source) {
      issue(failures, "JSONLD_EMPTY", `JSON-LD block ${index + 1} is empty.`, path);
      return;
    }
    try {
      JSON.parse(source);
    } catch (error) {
      issue(
        failures,
        "JSONLD_INVALID",
        `JSON-LD block ${index + 1} is invalid JSON: ${error.message}`,
        path,
      );
    }
  });

  const internalUrls = [];
  for (const tag of startTags(markup, "a")) {
    const href = parseAttributes(tag).get("href");
    if (!href) continue;
    const resolved = resolveInternalHref(href, publicUrl, publicOrigin, crawlOrigin);
    if (resolved) internalUrls.push(resolved);
  }

  return {
    title: titleValues.length === 1 ? titleValues[0] : null,
    description: descriptions.length === 1 && descriptionValues[0] ? descriptionValues[0] : null,
    canonical: canonicalUrl,
    internalUrls,
  };
}

async function mapLimit(items, concurrency, task) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await task(items[index], index);
    }
  }
  const workerCount = Math.min(concurrency, items.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  return results;
}

function selectPublicOrigin(config, entries) {
  if (config.canonicalOrigin) return config.canonicalOrigin;
  if (!isLoopbackOrigin(config.crawlOrigin)) return config.crawlOrigin;
  for (const entry of entries) {
    const candidate = safePublicUrl(entry.loc);
    if (candidate) return candidate.origin;
  }
  throw new OperationalError(
    "PUBLIC_ORIGIN_UNKNOWN",
    "Could not infer the public origin from the local sitemap; pass --canonical-origin.",
  );
}

function validateSitemapEntries(entries, publicOrigin, failures, sourceLabel) {
  const accepted = [];
  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    const label = `${sourceLabel} entry ${index + 1}`;
    const url = safePublicUrl(entry.loc);
    if (!url) {
      issue(failures, "SITEMAP_LOC_INVALID", `${label} has a missing or invalid <loc>.`);
      continue;
    }
    if (url.origin !== publicOrigin) {
      issue(
        failures,
        "SITEMAP_HOST_MISMATCH",
        `${url.href} does not use expected public origin ${publicOrigin}.`,
        displayUrl(url),
      );
      continue;
    }
    const lastmodProblem = validateLastmod(entry.lastmod);
    if (lastmodProblem) {
      issue(
        failures,
        "SITEMAP_LASTMOD_INVALID",
        `<lastmod> ${JSON.stringify(entry.lastmod)} ${lastmodProblem}.`,
        displayUrl(url),
      );
    }
    accepted.push({ ...entry, url });
  }
  return accepted;
}

async function loadSitemap(context, failures) {
  const rootUrl = new URL("/sitemap.xml", context.config.crawlOrigin);
  let rootResult;
  try {
    rootResult = await fetchBounded(rootUrl, context);
  } catch (error) {
    throw new OperationalError(error.code ?? "SITEMAP_FETCH", `Could not fetch ${rootUrl.href}: ${error.message}`);
  }
  if (rootResult.response.status !== 200) {
    throw new OperationalError(
      "SITEMAP_STATUS",
      `${rootUrl.href} returned HTTP ${rootResult.response.status}; expected 200.`,
    );
  }

  const root = parseSitemapDocument(rootResult.text);
  if (root.entries.length === 0) {
    throw new OperationalError("EMPTY_SITEMAP", "Sitemap contains no URL entries.");
  }
  const publicOrigin = selectPublicOrigin(context.config, root.entries);

  if (root.type === "urlset") {
    return {
      publicOrigin,
      entries: validateSitemapEntries(root.entries, publicOrigin, failures, "root sitemap"),
    };
  }

  if (root.entries.length > LIMITS.sitemapChildren) {
    throw new OperationalError(
      "SITEMAP_INDEX_LIMIT",
      `Sitemap index has ${root.entries.length} children; limit is ${LIMITS.sitemapChildren}.`,
    );
  }
  const childEntries = validateSitemapEntries(root.entries, publicOrigin, failures, "sitemap index");
  const childDocuments = await mapLimit(childEntries, context.config.concurrency, async (entry) => {
    const crawlUrl = publicToCrawlUrl(entry.url, context.config.crawlOrigin);
    let result;
    try {
      result = await fetchBounded(crawlUrl, context);
    } catch (error) {
      throw new OperationalError(
        error.code ?? "SITEMAP_FETCH",
        `Could not fetch child sitemap ${entry.url.href} through ${crawlUrl.href}: ${error.message}`,
      );
    }
    if (result.response.status !== 200) {
      throw new OperationalError(
        "SITEMAP_STATUS",
        `Child sitemap ${entry.url.href} returned HTTP ${result.response.status}; expected 200.`,
      );
    }
    const parsed = parseSitemapDocument(result.text);
    if (parsed.type !== "urlset") {
      throw new OperationalError("NESTED_SITEMAP_INDEX", "Nested sitemap indexes are outside this bounded check.");
    }
    return validateSitemapEntries(parsed.entries, publicOrigin, failures, entry.url.href);
  });

  return { publicOrigin, entries: childDocuments.flat() };
}

function reportDuplicateValues(records, property, code, label, failures) {
  const groups = new Map();
  for (const record of records) {
    if (!record[property]) continue;
    const key =
      property === "canonical"
        ? normalizedUrlKey(record[property])
        : normalizedContentKey(record[property]);
    const paths = groups.get(key) ?? [];
    paths.push(displayUrl(record.publicUrl));
    groups.set(key, paths);
  }

  for (const paths of groups.values()) {
    if (paths.length > 1) {
      issue(failures, code, `${label} is duplicated across: ${paths.sort().join(", ")}.`);
    }
  }
}

async function checkSitemapPages(context, sitemap, failures, warnings) {
  const records = await mapLimit(
    sitemap.entries,
    context.config.concurrency,
    async (entry) => {
      const publicUrl = entry.url;
      const crawlUrl = publicToCrawlUrl(publicUrl, context.config.crawlOrigin);
      const path = displayUrl(publicUrl);
      let result;
      try {
        result = await fetchBounded(crawlUrl, context);
      } catch (error) {
        if (error?.code === "RUN_TIMEOUT") throw error;
        issue(failures, error.code ?? "FETCH_ERROR", `Could not fetch page: ${error.message}`, path);
        return { publicUrl, internalUrls: [] };
      }

      const status = result.response.status;
      if (status !== 200) {
        const location = result.response.headers.get("location");
        issue(
          failures,
          status >= 300 && status < 400 ? "SITEMAP_PAGE_REDIRECT" : "SITEMAP_PAGE_STATUS",
          `Returned HTTP ${status}${location ? ` with Location ${location}` : ""}; expected 200.`,
          path,
        );
        return { publicUrl, internalUrls: [] };
      }

      if (!isHtmlResponse(result.response)) {
        issue(
          warnings,
          "NON_HTML_SITEMAP_URL",
          `Returned ${result.response.headers.get("content-type") || "no content type"}; structural HTML checks skipped.`,
          path,
        );
        return { publicUrl, internalUrls: [] };
      }

      return {
        publicUrl,
        ...analyzeHtmlPage({
          html: result.text,
          response: result.response,
          publicUrl,
          publicOrigin: sitemap.publicOrigin,
          crawlOrigin: context.config.crawlOrigin,
          failures,
        }),
      };
    },
  );

  reportDuplicateValues(records, "title", "TITLE_DUPLICATE", "Title", failures);
  reportDuplicateValues(records, "description", "DESCRIPTION_DUPLICATE", "Meta description", failures);
  reportDuplicateValues(records, "canonical", "CANONICAL_DUPLICATE", "Canonical URL", failures);
  return records;
}

async function checkLinkGraph(context, sitemap, records, failures, warnings) {
  const sitemapGraphKeys = new Set(
    sitemap.entries.map((entry) => normalizedUrlKey(entry.url, { dropSearch: true })),
  );
  const inbound = new Map([...sitemapGraphKeys].map((key) => [key, 0]));
  const discovered = new Map();

  for (const record of records) {
    const sourceKey = normalizedUrlKey(record.publicUrl, { dropSearch: true });
    const uniqueTargets = new Set();
    for (const target of record.internalUrls ?? []) {
      const targetKey = normalizedUrlKey(target, { dropSearch: true });
      if (targetKey === sourceKey || uniqueTargets.has(targetKey)) continue;
      uniqueTargets.add(targetKey);
      if (sitemapGraphKeys.has(targetKey)) {
        inbound.set(targetKey, (inbound.get(targetKey) ?? 0) + 1);
      } else if (!discovered.has(targetKey)) {
        discovered.set(targetKey, target);
      }
    }
  }

  const homeKey = normalizedUrlKey(new URL("/", sitemap.publicOrigin), { dropSearch: true });
  for (const [key, count] of inbound) {
    if (key !== homeKey && count === 0) {
      issue(
        warnings,
        "ORPHAN_SIGNAL",
        "No internal links from another sitemap page were found in server HTML.",
        displayUrl(key),
      );
    }
  }

  const discoveredUrls = [...discovered.values()].sort((a, b) => a.href.localeCompare(b.href));
  const selected = discoveredUrls.slice(0, context.config.maxDiscovered);
  if (selected.length < discoveredUrls.length) {
    issue(
      warnings,
      "DISCOVERY_TRUNCATED",
      `${discoveredUrls.length - selected.length} non-sitemap internal targets were not checked because of --max-discovered.`,
    );
  }

  await mapLimit(selected, context.config.concurrency, async (publicUrl) => {
    const path = displayUrl(publicUrl);
    const crawlUrl = publicToCrawlUrl(publicUrl, context.config.crawlOrigin);
    let result;
    try {
      result = await fetchBounded(crawlUrl, context);
    } catch (error) {
      if (error?.code === "RUN_TIMEOUT") throw error;
      issue(
        failures,
        error.code ?? "INTERNAL_TARGET_FETCH",
        `Linked internal target could not be fetched: ${error.message}`,
        path,
      );
      return;
    }

    const status = result.response.status;
    if (status >= 400 || status === 0) {
      issue(failures, "BROKEN_INTERNAL_TARGET", `Linked internal target returned HTTP ${status}.`, path);
    } else if (status >= 300) {
      issue(
        warnings,
        "INTERNAL_TARGET_REDIRECT",
        `Linked internal target returned HTTP ${status}${
          result.response.headers.get("location") ? ` to ${result.response.headers.get("location")}` : ""
        }.`,
        path,
      );
    } else if (status === 200 && isHtmlResponse(result.response)) {
      issue(
        warnings,
        "HTML_PAGE_NOT_IN_SITEMAP",
        "Linked HTML page returned 200 but is absent from the sitemap.",
        path,
      );
    }
  });
}

function printIssues(label, entries) {
  console.log(`\n${label} (${entries.length})`);
  if (entries.length === 0) {
    console.log("  None");
    return;
  }
  const sorted = [...entries].sort((left, right) =>
    `${left.code}\0${left.path}\0${left.message}`.localeCompare(
      `${right.code}\0${right.path}\0${right.message}`,
    ),
  );
  for (const entry of sorted) {
    console.log(`  [${entry.code}]${entry.path ? ` ${entry.path}:` : ""} ${entry.message}`);
  }
}

async function main() {
  const config = parseArgs(process.argv.slice(2));
  if (config.help) {
    console.log(usage());
    return;
  }

  const context = { config, deadline: Date.now() + config.maxRunMs };
  const failures = [];
  const warnings = [];

  console.log("Structural SEO release check");
  console.log(`Crawl origin: ${config.crawlOrigin}`);
  console.log(`Sitemap: ${config.crawlOrigin}/sitemap.xml`);

  const sitemap = await loadSitemap(context, failures);
  console.log(`Public origin: ${sitemap.publicOrigin}`);

  if (sitemap.entries.length === 0) {
    throw new OperationalError("NO_VALID_SITEMAP_URLS", "Sitemap has no valid same-origin page URLs.");
  }
  if (sitemap.entries.length > config.maxPages) {
    throw new OperationalError(
      "SITEMAP_PAGE_LIMIT",
      `Sitemap has ${sitemap.entries.length} URLs; --max-pages is ${config.maxPages}.`,
    );
  }

  const seen = new Map();
  for (const entry of sitemap.entries) {
    const key = normalizedUrlKey(entry.url);
    if (seen.has(key)) {
      issue(
        failures,
        "SITEMAP_DUPLICATE",
        `Duplicates ${seen.get(key)} after URL normalization.`,
        displayUrl(entry.url),
      );
    } else {
      seen.set(key, entry.url.href);
    }
  }

  const records = await checkSitemapPages(context, sitemap, failures, warnings);
  await checkLinkGraph(context, sitemap, records, failures, warnings);

  console.log(`Checked sitemap URLs: ${sitemap.entries.length}`);
  printIssues("Failures", failures);
  printIssues("Warnings", warnings);
  console.log(
    "\nScope: server HTML only; no JavaScript execution, external-link crawling, ranking/content-quality claims, schema eligibility, field performance, or proof that lastmod values came from CMS/git history.",
  );
  console.log("Lastmod checks validate only syntax, calendar validity, and future-date plausibility.");

  if (failures.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  const code = error?.code ?? "UNEXPECTED_ERROR";
  console.error(`\nFatal [${code}]: ${error?.message ?? error}`);
  console.error("The check did not complete; no passing release conclusion should be drawn.");
  process.exitCode = 2;
});
