// Submit only URLs that were added or materially updated in the current release.
// Usage:
//   node indexnow-ping.mjs https://www.pandacodegen.com/example [...more URLs]

const KEY = process.env.INDEXNOW_KEY || "95b8869ac7714e9fa60226a559eb96ca";
const HOST = "www.pandacodegen.com";
const BASE = `https://${HOST}`;
const MAX_URLS = 100;

function usage(message) {
  if (message) console.error(message);
  console.error(`Usage: node indexnow-ping.mjs ${BASE}/changed-page [...more URLs]`);
  process.exitCode = 1;
}

const requested = [...new Set(process.argv.slice(2))];
if (requested.length === 0) {
  usage("Pass at least one new or materially updated production URL.");
} else if (requested.length > MAX_URLS) {
  usage(`This release helper accepts at most ${MAX_URLS} URLs per invocation.`);
} else {
  const urlList = [];
  for (const value of requested) {
    let parsed;
    try {
      parsed = new URL(value);
    } catch {
      usage(`Invalid URL: ${value}`);
      break;
    }

    if (parsed.protocol !== "https:" || parsed.hostname !== HOST || parsed.username || parsed.password) {
      usage(`URL must be an HTTPS URL on ${HOST}: ${value}`);
      break;
    }
    parsed.hash = "";
    urlList.push(parsed.toString());
  }

  if (!process.exitCode) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    try {
      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          host: HOST,
          key: KEY,
          keyLocation: `${BASE}/${KEY}.txt`,
          urlList,
        }),
        signal: controller.signal,
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`IndexNow accepted ${urlList.length} changed URL(s).`);
      } else {
        await response.body?.cancel();
        console.error(`IndexNow rejected the request (${response.status} ${response.statusText}).`);
        process.exitCode = 1;
      }
    } catch (error) {
      console.error(error instanceof Error ? error.message : "IndexNow request failed.");
      process.exitCode = 1;
    } finally {
      clearTimeout(timer);
    }
  }
}
