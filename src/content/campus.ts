import type { PageContent } from "@/content/types";

const accessed = "Acesso em 30 de setembro de 2026.";

export const campus: PageContent = {
  title: "Campus de São Leopoldo",
  description:
    "O campus da Unisinos em São Leopoldo: endereço, área, biblioteca, Tecnosinos e Unitec.",
  lede: "O SOFTWARELAB publica o endereço Av. Unisinos, 950, São Leopoldo, RS, CEP 93022-750. A universidade também tem campus em Porto Alegre. Esta página é só sobre São Leopoldo.",
  sections: [
    {
      id: "lugar",
      heading: "O lugar",
      paragraphs: [
        "A página do bacharelado em Inteligência Artificial descreve o campus de São Leopoldo com 90,55 hectares, laboratórios para pesquisa e experimentação, lagos, jardins e áreas de preservação ecológica. Na mesma descrição, a universidade diz ter uma das maiores bibliotecas universitárias da América Latina. Isso é a forma como a própria Unisinos apresenta o campus, não um ranking citado de fora.",
      ],
    },
    {
      id: "tecnosinos",
      heading: "Tecnosinos e Unitec",
      paragraphs: [
        "No mesmo endereço funcionam o Tecnosinos, parque tecnológico da universidade, e a Unitec, incubadora de empresas. O SOFTWARELAB, núcleo de excelência em inovação de software, fica no Unitec 3, sala G15 106.",
      ],
    },
  ],
  sources: [
    {
      title: "Graduação em Inteligência Artificial, campus São Leopoldo",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/graduacao/inteligencia-artificial/sao-leopoldo",
      note: accessed,
    },
    {
      title: "Núcleo de Excelência em Inovação de Software (SOFTWARELAB)",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/portal-de-inovacao/nucleos-de-excelencia/inovacao-de-software",
      note: accessed,
    },
  ],
};
