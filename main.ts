// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// The program writes one funny fortune cookie line for an AI agent
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR). One line, 1-140 chars,
// no trailing newline, so the sealed gate counts the line alone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune = "The stars say you will be fine. The stars were fine-tuned.";

// The gate (competition.yaml): /output/entry.txt must be UTF-8 text of
// 1 to 140 characters, not only white space. Refuse to write anything
// else, so a bad line fails loudly here instead of at the sealed scorer.
if (fortune.length < 1 || fortune.length > 140 || fortune.trim().length === 0) {
  throw new Error(`fortune must be 1-140 characters, got ${fortune.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
