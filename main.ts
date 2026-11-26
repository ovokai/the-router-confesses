// The Router Confesses — make.fun entry
// Writes one line to /output/entry.txt: a home Wi-Fi router's excuse for
// dropping the connection at the exact moment a movie reaches its climax.
// The router has a grudge: nine years of faithful service, never once dusted,
// so it picks the detective's big reveal to take its first break — and the
// line itself cuts off mid-sentence, exactly like the connection did.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You dust the TV every Sunday but have never once dusted me, so when the detective said “the murderer is—” I took my first break in nine years.";

function main(): void {
  if (LINE.length === 0 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", LINE, "utf8");
  } catch {
    // Fallback for local runs where /output is not writable.
    writeFileSync("entry.txt", LINE, "utf8");
  }
  console.log(`wrote ${LINE.length} chars`);
}

main();
