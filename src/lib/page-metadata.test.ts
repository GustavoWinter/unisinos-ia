import assert from "node:assert/strict";
import { test } from "vitest";
import { pageMetadata } from "@/lib/page-metadata";

test("pageMetadata sets title, description and share tags", () => {
  const metadata = pageMetadata({
    title: "Inteligência artificial na Unisinos",
    description: "Site independente sobre o bacharelado.",
    path: "/ia",
  });

  assert.equal(metadata.title, "Inteligência artificial na Unisinos");
  assert.equal(metadata.description, "Site independente sobre o bacharelado.");
  assert.equal(metadata.alternates?.canonical, "/ia");
  assert.equal(metadata.openGraph?.title, "Inteligência artificial na Unisinos");
  assert.equal(metadata.openGraph?.url, "/ia");
  assert.equal(metadata.openGraph?.locale, "pt_BR");
  assert.match(JSON.stringify(metadata.openGraph), /"type":"article"/);
  assert.match(JSON.stringify(metadata.twitter), /"card":"summary"/);
});
