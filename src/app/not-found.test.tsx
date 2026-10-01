import { renderToStaticMarkup } from "react-dom/server";
import { test } from "vitest";
import assert from "node:assert/strict";
import NotFound from "@/app/not-found";

test("missing routes get a portuguese page that links home", () => {
  const html = renderToStaticMarkup(<NotFound />);
  assert.match(html, /Página não encontrada/);
  assert.match(html, /href="\/"/);
});
