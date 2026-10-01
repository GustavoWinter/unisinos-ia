import { renderToStaticMarkup } from "react-dom/server";
import { test } from "vitest";
import assert from "node:assert/strict";
import { SiteFooter } from "@/components/SiteFooter";

test("footer says the site is independent and links to the official site", () => {
  const html = renderToStaticMarkup(<SiteFooter />);
  assert.match(
    html,
    /Este site é independente, não é o site oficial da Unisinos e não tem vínculo institucional com a universidade\./,
  );
  assert.match(html, /href="https:\/\/www\.unisinos\.br"/);
  assert.match(html, /Site oficial da Unisinos/);
});
