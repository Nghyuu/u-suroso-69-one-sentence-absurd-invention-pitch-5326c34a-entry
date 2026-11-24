import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
// Copy entry.txt verbatim to the grader's output dir; the copy is
// deterministic (same bytes every run) and never depends on the CWD.
const text = readFileSync(join(dir, "entry.txt"), "utf8");
writeFileSync(join(outDir, "entry.txt"), text);
