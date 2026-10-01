import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
import { test } from "vitest";
import HomePage, { metadata } from "@/app/page";

test("home introduces the university and links onward without repeating the other pages", () => {
  assert.deepEqual(metadata.title, { absolute: "Unisinos em São Leopoldo" });
  assert.match(metadata.description ?? "", /Site independente/);
  assert.equal(metadata.openGraph?.url, "/");
  const html = renderToStaticMarkup(<HomePage />);
  assert.match(html, /17 de maio de 1969/);
  assert.match(html, /31 de julho de 1969/);
  assert.match(html, /Associação Antônio Vieira/);
  assert.match(html, /jesuíta/);
  assert.match(html, /campus em Porto Alegre/);
  assert.match(html, /href="\/campus"/);
  assert.match(html, /href="\/ia"/);
  assert.match(html, /Resol_CONSUN_16-23_Proj_Politico-Pedag_PPG_Filosofia\.pdf/);
  assert.match(html, /graduacao\/inteligencia-artificial\/sao-leopoldo/);
  assert.doesNotMatch(html, /90,55/);
  assert.doesNotMatch(html, /declaração de autoria/);
});
