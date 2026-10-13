// Dependency advisory gate for CI (npm run audit:dependencies).
//
// 1. Production dependencies: any high or critical advisory fails. No exceptions.
// 2. All dependencies (dev included): high or critical advisories fail too, unless the
//    advisory is listed in ACCEPTED below with a reason and a review date. Past that
//    date the entry stops counting, so an accepted advisory cannot be forgotten.
//
// Replaced the plain `npm audit --audit-level=high` on 13 Oct 2026, when
// GHSA-vfj7-8cjw-p6xm (braces) failed every CI run with no fixed release to move to.
import { execSync } from "node:child_process";

const ACCEPTED = {
  // braces <=3.0.3: every published version. Reached only through
  // eslint-config-next > @next/eslint-plugin-next > fast-glob > micromatch, so it runs
  // at lint time on our own config patterns, never in the built site. `npm audit fix`
  // would downgrade eslint-config-next 16 to 14. Re-check when braces ships a fix.
  "GHSA-vfj7-8cjw-p6xm": { reviewBy: "2026-11-13", devOnly: true },
};

function audit(args) {
  let report;
  try {
    // The arguments are fixed strings in this file, so a command string is safe here.
    report = JSON.parse(execSync(["npm audit --json", ...args].join(" "), { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], maxBuffer: 64 * 1024 * 1024 }));
  } catch (error) {
    // npm audit exits non-zero when it finds anything; the JSON is still on stdout.
    if (!error.stdout) throw error;
    report = JSON.parse(error.stdout);
  }
  // A registry or network failure returns an error object, not an empty result. Fail
  // rather than pass on nothing.
  if (report.error || !report.vulnerabilities) throw new Error(`npm audit did not complete: ${JSON.stringify(report.error ?? report).slice(0, 300)}`);
  return report;
}

const SERIOUS = new Set(["high", "critical"]);
const ghsa = (url) => (url ?? "").split("/").pop();

function advisories(report) {
  const found = new Map();
  for (const [name, vuln] of Object.entries(report.vulnerabilities ?? {})) {
    for (const via of vuln.via) {
      if (typeof via === "object" && SERIOUS.has(via.severity)) found.set(ghsa(via.url), { name, title: via.title, url: via.url });
    }
  }
  return found;
}

const today = new Date().toISOString().slice(0, 10);
const failures = [];

for (const [id, a] of advisories(audit(["--omit=dev"]))) {
  failures.push(`production dependency ${a.name}: ${a.title} (${a.url})`);
  if (ACCEPTED[id]) failures.push(`  ${id} is accepted only as dev-only, but it is in production dependencies`);
}

for (const [id, a] of advisories(audit([]))) {
  const accepted = ACCEPTED[id];
  if (accepted && today <= accepted.reviewBy) {
    console.log(`accepted until ${accepted.reviewBy}: ${id} ${a.name}, ${a.title}`);
    continue;
  }
  failures.push(accepted ? `${id} acceptance expired on ${accepted.reviewBy}; re-check it: ${a.url}` : `${a.name}: ${a.title} (${a.url})`);
}

if (failures.length) {
  console.error("Dependency audit failed:\n" + failures.map((f) => `- ${f}`).join("\n"));
  process.exit(1);
}
console.log("Dependency audit passed: no unaccepted high or critical advisories.");
