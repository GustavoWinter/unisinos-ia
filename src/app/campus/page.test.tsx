import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
import { test } from "vitest";
import CampusPage, { metadata } from "@/app/campus/page";

test("campus attributes place facts and stays on São Leopoldo", () => {
  assert.equal(metadata.title, "Campus de São Leopoldo");
  const html = renderToStaticMarkup(<CampusPage />);
  assert.match(html, /Av\. Unisinos, 950/);
  assert.match(html, /93022-750/);
  assert.match(html, /90,55 hectares/);
  assert.match(html, /não um ranking citado de fora/);
  assert.match(html, /Tecnosinos/);
  assert.match(html, /Unitec/);
  assert.match(html, /SOFTWARELAB/);
  assert.match(html, /sala G15 106/);
  assert.match(html, /Esta página é só sobre São Leopoldo/);
  assert.match(html, /graduacao\/inteligencia-artificial\/sao-leopoldo/);
  assert.match(html, /nucleos-de-excelencia\/inovacao-de-software/);
  assert.doesNotMatch(html, /bacharelado em Inteligência Artificial é presencial/i);
});
