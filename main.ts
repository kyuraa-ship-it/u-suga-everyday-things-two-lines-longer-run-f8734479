// Everyday Things, Two Lines — entry program.
// Writes one two-line explanation to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE1 =
  "A queue is a caterpillar made of people, shuffling forward one tiny step at a time until the front finally reaches the food.";
const LINE2 =
  "The caterpillar fits because the line really does move in small steps from back to front, but a real caterpillar knows where it is going, while the people in a queue are mostly just hoping the front is not closed.";

const entry = `${LINE1}\n${LINE2}\n`;

// Gate: UTF-8 text, 1-400 chars, exactly two non-blank lines.
const body = entry.replace(/\n$/, "");
const lines = body.split("\n");
if (body.length < 1 || body.length > 400) throw new Error(`entry length ${body.length} out of 1-400`);
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly two non-blank lines");
}
if (/\s{2,}/.test(body)) throw new Error("unexpected double space");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
