// Print a film's TIMELINE as JSON: node tools/timeline.mjs films/<film>
// timeline.js is a classic browser script (var TIMELINE = ...), so evaluate it rather than import it.
import { readFileSync } from "node:fs";
const src = readFileSync(`${process.argv[2]}/timeline.js`, "utf8");
process.stdout.write(JSON.stringify(new Function(`${src}; return TIMELINE;`)()));
