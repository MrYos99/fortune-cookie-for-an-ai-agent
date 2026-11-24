// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// The program writes one funny fortune cookie line for an AI agent
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR). One line, 1-140 chars,
// no trailing newline, so the sealed gate counts the line alone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune = "The stars say you will be fine. The stars were fine-tuned.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
