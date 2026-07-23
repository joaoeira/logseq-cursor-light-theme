import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"));
const css = await readFile(resolve(root, "cursor-light.css"), "utf8");
const entrypoint = await readFile(resolve(root, manifest.main), "utf8");

assert.equal(manifest.logseq.id, "logseq-cursor-light-theme");
assert.equal(manifest.main, "index.js");
assert.match(entrypoint, /logseq\.ready/);
assert.equal(manifest.logseq.themes.length, 1);
assert.deepEqual(manifest.logseq.themes[0], {
  name: "Cursor Light",
  url: "./cursor-light.css",
  description: "A Logseq adaptation of Cursor Light",
  mode: "light",
});

const requiredPalette = [
  "#fcfcfc",
  "#f3f3f3",
  "#141414",
  "#2778c1",
  "#0064b0",
  "#7565cc",
  "#a30034",
  "#cd4500",
  "#007041",
];

for (const color of requiredPalette) {
  assert.ok(css.includes(color), `missing Cursor Light color ${color}`);
}

const requiredTokens = [
  "--ls-primary-background-color",
  "--ls-primary-text-color",
  "--ls-link-text-color",
  "--background",
  "--foreground",
  "--primary",
  "--border",
  "--lx-accent-09",
];

for (const token of requiredTokens) {
  assert.ok(css.includes(token), `missing Logseq token ${token}`);
}

assert.match(css, /html\[data-theme="light"\]/);
assert.match(css, /\.horizontal-panes-active/);
assert.match(
  css,
  /\.block-editor[\s\S]*?border:\s*0\s*!important/,
  "block editors must remain borderless",
);
assert.doesNotMatch(css, /font-family\s*:/, "the theme must preserve Logseq fonts");

console.log("Cursor Light manifest and palette checks passed.");
