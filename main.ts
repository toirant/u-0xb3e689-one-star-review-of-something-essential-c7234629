// One-star review of something essential.
// Writes a single-line, deadpan one-star review to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 160 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The review itself: a real complaint, filed in earnest, against a
// thing that cannot be fixed. Gravity drops everything and never
// apologises — the grievance everyone recognises, the sting saved
// for the last few words, no winking and no exclamation marks.
// One star. Gravity has dropped everything I own at least once
// and has never once apologised.
const review =
  "One star. Gravity has dropped everything I own at least once and has never once apologised.";

// The gate only accepts UTF-8 text of 1 to 160 characters, not only
// whitespace, on a single line. Fail loudly instead of writing an
// entry the gate would refuse.
function checkReview(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("review is empty or only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("review must be a single line");
  }
  if ([...text].length > 160) {
    throw new Error(`review is ${[...text].length} characters, over the 160 limit`);
  }
}

function main(): void {
  checkReview(review);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, review, "utf8");
  console.log(`Wrote ${review.length} characters to ${OUTPUT_FILE}`);
}

main();
