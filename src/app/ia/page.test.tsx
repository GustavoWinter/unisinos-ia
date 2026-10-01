import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
import { test } from "vitest";
import IaPage, { metadata } from "@/app/ia/page";

test("AI page keeps the research claims inside what the sources say", () => {
  assert.equal(metadata.title, "Inteligência artificial na Unisinos");
  const html = renderToStaticMarkup(<IaPage />);

  assert.match(html, /presencial e noturno/);
  assert.match(html, /4 anos/);
  assert.match(html, /Mateus Raeder/);
  assert.match(html, /não copia o calendário/);
  assert.doesNotMatch(html, /22 de novembro/);
  assert.doesNotMatch(html, /05\/12\/2026/);
  assert.doesNotMatch(html, /5 de dezembro de 2026/);

  assert.match(html, /Programa de Pós-Graduação em Computação Aplicada/);
  assert.match(html, /SOFTWARELAB/);
  assert.match(html, /Unitec 3/);

  assert.match(html, /fará parte do Núcleo de Pesquisa em Inteligência Artificial Unisinos, com pesquisadores de cinco escolas/);
  assert.doesNotMatch(html, /O documento reúne/);
  assert.match(html, /fará parte/);
  assert.match(html, /Humanidades/);
  assert.match(html, /Politécnica/);
  assert.match(html, /Saúde/);
  assert.match(html, /Direito/);
  assert.match(html, /Indústria Criativa/);
  assert.doesNotMatch(html, /lançado em|estreou em/i);

  assert.match(html, /8 de setembro de 2026/);
  assert.match(html, /Matheus N\. Vargas/);
  assert.match(html, /não traz o número da resolução/);
  assert.match(html, /declaração de autoria/);
  assert.match(html, /Cristiane Schnack/);
  assert.match(html, /Gustavo Borba/);
  assert.doesNotMatch(html, /Resolução\s+(n[ºo°.]|nº)\s*\d+/i);

  assert.match(html, /graduacao\/inteligencia-artificial\/sao-leopoldo/);
  assert.match(html, /unisinos-lanca-bacharelado-em-inteligencia-artificial/);
  assert.match(html, /unisinos-ja-possui-diretrizes-para-uso-de-inteligencia-artificial-no-ensino/);
  assert.match(html, /nucleos-de-excelencia\/inovacao-de-software/);
  assert.match(html, /Resol_CONSUN_16-23_Proj_Politico-Pedag_PPG_Filosofia\.pdf/);
});
