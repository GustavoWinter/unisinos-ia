import type { PageContent } from "@/content/types";

const accessed = "Acesso em 30 de setembro de 2026.";

export const ia: PageContent = {
  title: "Inteligência artificial na Unisinos",
  description:
    "Bacharelado, pesquisa e regras de uso de IA na Unisinos, com foco no campus de São Leopoldo.",
  lede: "A Unisinos trata inteligência artificial como formação, como pesquisa e como regra de uso no ensino. O recorte desta página é o campus de São Leopoldo, com o que a universidade publica sobre o bacharelado, os laboratórios e a resolução acadêmica.",
  sections: [
    {
      id: "bacharelado",
      heading: "Bacharelado no campus",
      paragraphs: [
        "O bacharelado em Inteligência Artificial é presencial e noturno. O tempo mínimo previsto é de 4 anos, se cursados todos os créditos máximos por semestre. O curso existe em São Leopoldo e também em Porto Alegre. Aqui o recorte é São Leopoldo. A coordenação publicada na página do curso é de Mateus Raeder.",
        "A página do curso descreve uma formação que junta programação, matemática, ciência de dados, redes neurais, aprendizado de máquina, visão computacional e análise de dados. Os projetos com empresas passam pelo Tecnosinos e pela Unitec, e há contato com o Programa de Pós-Graduação em Computação Aplicada.",
        "A notícia de lançamento do bacharelado acrescenta processamento de linguagem natural, internet das coisas, Edge AI e processamento de sinais. Datas de vestibular e de prova ficam no edital vigente. Este site não copia o calendário.",
      ],
    },
    {
      id: "pesquisa",
      heading: "Pesquisa",
      paragraphs: [
        "A página do curso diz que docentes da graduação integram o Programa de Pós-Graduação em Computação Aplicada. A notícia de lançamento atribui a esse programa trabalho em inteligência artificial, visão computacional, cidades inteligentes e ambientes inteligentes.",
        "O SOFTWARELAB, no Unitec 3, é um núcleo de excelência da Unisinos. A página do núcleo descreve pesquisa aplicada com a indústria em internet das coisas, inteligência artificial, visão computacional e aplicações distribuídas.",
      ],
    },
    {
      id: "nucleo",
      heading: "Núcleo entre escolas",
      paragraphs: [
        "O projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23, de 2023, diz que o programa fará parte do Núcleo de Pesquisa em Inteligência Artificial Unisinos. O documento reúne pesquisadores de cinco escolas: Humanidades, Politécnica, Saúde, Direito e Indústria Criativa. Não há, nessa fonte, data de estreia nem lista de projetos do núcleo.",
      ],
    },
    {
      id: "ensino",
      heading: "Uso no ensino",
      paragraphs: [
        "Em 8 de setembro de 2026, a Unisinos publicou que já tem uma resolução institucional para o uso acadêmico de inteligência artificial, em vigor desde o ano anterior. A notícia, assinada por Matheus N. Vargas, não traz o número da resolução.",
        "Os princípios que a notícia cita são ética e transparência, autoria e integridade dos dados. TCC, dissertação e tese levam declaração de autoria. Há também um documento orientador para professores, sobre planejamento, docência e avaliação.",
        "Cristiane Schnack, gerente de Ensino, diz na mesma notícia que o papel da IA é apoio e que a produção de conhecimento é humana. Gustavo Borba, pró-reitor Acadêmico e de Relações Internacionais, trata a normativa como um documento vivo, que precisa acompanhar os usos novos.",
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
      title: "Unisinos lança Bacharelado em Inteligência Artificial",
      publisher: "Notícias Unisinos",
      url: "https://www.unisinos.br/noticias/unisinos-lanca-bacharelado-em-inteligencia-artificial/",
      note: accessed,
    },
    {
      title:
        "Unisinos já possui diretrizes para uso de inteligência artificial no ensino",
      publisher: "Notícias Unisinos",
      url: "https://www.unisinos.br/noticias/unisinos-ja-possui-diretrizes-para-uso-de-inteligencia-artificial-no-ensino/",
      note: "8 de setembro de 2026. Matheus N. Vargas. Acesso em 30 de setembro de 2026.",
    },
    {
      title: "Núcleo de Excelência em Inovação de Software (SOFTWARELAB)",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/portal-de-inovacao/nucleos-de-excelencia/inovacao-de-software",
      note: accessed,
    },
    {
      title:
        "Projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/pos/images/estrito/projeto-politico-pedagogico/filosofia/Resol_CONSUN_16-23_Proj_Politico-Pedag_PPG_Filosofia.pdf",
      note: accessed,
    },
  ],
};
