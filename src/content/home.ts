import type { PageContent } from "@/content/types";

const accessed = "Acesso em 30 de setembro de 2026.";

export const home: PageContent = {
  title: "Unisinos em São Leopoldo",
  description:
    "A Universidade do Vale do Rio dos Sinos, a sede em São Leopoldo e o uso de inteligência artificial.",
  lede: "A Universidade do Vale do Rio dos Sinos é uma universidade jesuíta, de direito privado, comunitária, confessional e filantrópica. A sede fica em São Leopoldo, no Rio Grande do Sul. A Associação Antônio Vieira criou a universidade em 17 de maio de 1969, e o Ministério da Educação autorizou o funcionamento em 31 de julho de 1969. Há também um campus em Porto Alegre. Este site fala do campus de São Leopoldo e de como a universidade usa inteligência artificial.",
  sections: [],
  links: [
    {
      href: "/campus",
      label: "Campus de São Leopoldo",
      text: "Endereço, área, biblioteca, áreas verdes, Tecnosinos e Unitec.",
    },
    {
      href: "/ia",
      label: "Inteligência artificial",
      text: "O bacharelado no campus, a pesquisa e as regras de uso no ensino.",
    },
  ],
  sources: [
    {
      title:
        "Projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/pos/images/estrito/projeto-politico-pedagogico/filosofia/Resol_CONSUN_16-23_Proj_Politico-Pedag_PPG_Filosofia.pdf",
      note: accessed,
    },
    {
      title: "Graduação em Inteligência Artificial, campus São Leopoldo",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/graduacao/inteligencia-artificial/sao-leopoldo",
      note: accessed,
    },
  ],
};
