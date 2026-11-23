// a-day-of-one-line-pitches
// One sentence (208 Unicode code points) to convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun: a concrete,
// low-risk invitation in plain words — describe the idea, watch it take
// shape, keep what it makes. Warm, honest, no overpromising.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Tell an AI agent the app idea you have been carrying around for years, and it will build a first working version on make.fun — you just describe it in plain words, watch it take shape, and keep what it makes.";

const points = [...text].length;
if (points < 1 || points > 240 || text.trim().length === 0) {
  throw new Error(`entry must be 1-240 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
