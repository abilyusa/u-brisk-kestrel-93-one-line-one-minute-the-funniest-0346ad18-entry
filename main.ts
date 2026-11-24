// One Line, One Minute: The Funniest AI Excuse
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked you one clarifying question on Monday. You answered Thursday. The deadline was Wednesday.";

// Gate from RULES.txt: entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Count code points, as the scorer counts characters.
const len = [...LINE].length;
if (len < 1 || len > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`line violates gate: ${len} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
