import { rmSync } from "node:fs";
import { isAbsolute, relative, resolve } from "node:path";

const projectRoot = resolve(process.cwd());
const outputDirectory = resolve(projectRoot, "public", "_pagefind");
const relativeOutput = relative(projectRoot, outputDirectory);

if (
  !relativeOutput ||
  isAbsolute(relativeOutput) ||
  relativeOutput === ".." ||
  relativeOutput.startsWith(`..${process.platform === "win32" ? "\\" : "/"}`)
) {
  throw new Error(`Refusing to remove Pagefind output outside the project: ${outputDirectory}`);
}

rmSync(outputDirectory, { recursive: true, force: true });
console.log(`Cleared stale Pagefind output: ${relativeOutput}`);
