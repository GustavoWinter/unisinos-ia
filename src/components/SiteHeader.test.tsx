import { renderToStaticMarkup } from "react-dom/server";
import { test } from "vitest";
import assert from "node:assert/strict";
import { SiteHeader } from "@/components/SiteHeader";

test("header names the site and links to the three routes", () => {
  const html = renderToStaticMarkup(<SiteHeader />);
  assert.match(html, /Unisinos São Leopoldo/);
  assert.match(html, /href="\/"/);
  assert.match(html, /href="\/campus"/);
  assert.match(html, /href="\/ia"/);
  assert.match(html, /Início/);
  assert.match(html, /Campus/);
  assert.match(html, /Inteligência artificial/);
});
