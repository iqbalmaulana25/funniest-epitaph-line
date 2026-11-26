// Famous Last Words: The Funniest Epitaph
// Writes one funny single-line tombstone epitaph to /output/entry.txt
// (must be 1..150 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Tell my boss I finally finished the report. Tell my wife I loved her. Tell IT my password is—";

// Gate guard: the scorer only accepts a single line of 1..150 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 150) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
