import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One office-life joke, one line, under 200 characters.
// The turn: "we're a family" meets the pizza party instead of a raise,
// and the punch lands on the last three words.
const JOKE =
  "My boss calls us a family, so I asked for a raise — HR replied with a pizza party invite, because in this family love means toppings, not money.";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");

// Self-gate: refuse to write anything outside the competition's gate
// (1–200 characters, a single line, not only whitespace).
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
