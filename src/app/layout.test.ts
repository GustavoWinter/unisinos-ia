import { readFileSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { test } from "vitest";

test("layout sets portuguese and wraps every page with header and footer", () => {
  const source = readFileSync(
    path.resolve(process.cwd(), "src/app/layout.tsx"),
    "utf8",
  );
  assert.match(source, /lang="pt-BR"/);
  assert.match(source, /<SiteHeader \/>/);
  assert.match(source, /<SiteFooter \/>/);
  assert.match(source, /%s \| Unisinos São Leopoldo/);
  assert.match(source, /metadataBase/);
  assert.match(source, /openGraph/);
  assert.match(source, /SITE_URL/);
});
