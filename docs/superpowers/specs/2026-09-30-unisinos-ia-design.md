# Site institucional: Unisinos São Leopoldo e o uso de IA

Data: 30 de setembro de 2026

## O que foi pedido

Um site em Next.js sobre a Unisinos de São Leopoldo, Rio Grande do Sul, e o uso de inteligência artificial.

## O que ficou combinado

O site é institucional e estático. Conta o campus e o uso de IA no ensino e na pesquisa. Não tem chat, formulário, banco nem CMS.

Três páginas, cada uma com endereço próprio:

- `/` início
- `/campus` campus de São Leopoldo
- `/ia` uso de IA

Texto em português. Fatos só de fontes públicas da própria Unisinos, com a fonte no fim da página. O site é independente. Não copia a marca oficial e não se apresenta como canal da universidade.

Pasta do projeto: `/Users/gwinter/Projects/unisinos-ia`.

## Fora de escopo

- Chat ou qualquer chamada a modelo de IA
- Página própria do campus de Porto Alegre
- Blog, busca, login, área do aluno
- Logo, fotos ou identidade visual oficiais da Unisinos
- Número de resolução que a notícia de 8 de setembro de 2026 não publica

## Páginas

O início apresenta a universidade e leva às outras duas páginas. Não repete o miolo delas.

Campus descreve o lugar. IA descreve formação, pesquisa e a regra de uso acadêmico.

### Início

Título: Unisinos em São Leopoldo.

Lide: a Universidade do Vale do Rio dos Sinos é uma universidade jesuíta, de direito privado, comunitária, confessional e filantrópica. A sede fica em São Leopoldo, no Rio Grande do Sul. A mantenedora, a Associação Antônio Vieira, criou a universidade em 17 de maio de 1969. O Ministério da Educação autorizou o funcionamento em 31 de julho de 1969. Há também campus em Porto Alegre. Este site fala do campus de São Leopoldo e de como a universidade usa IA.

Dois caminhos, com uma frase cada e um link:

- Campus de São Leopoldo, para `/campus`
- Inteligência artificial, para `/ia`

Fonte: projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23, publicado no site da Unisinos. A página de graduação em IA confirma a fundação em 1969 e a manutenção pela Associação Antônio Vieira.

### Campus

Título: Campus de São Leopoldo.

Endereço publicado pela universidade: Av. Unisinos, 950, São Leopoldo, RS, CEP 93022-750.

Fatos, cada um atribuído:

- Área de 90,55 hectares, com lagos, jardins e áreas de preservação ecológica. A própria página do curso descreve assim o campus. O site repete essa descrição como fala da universidade, sem tratar "uma das maiores bibliotecas universitárias da América Latina" como ranking independente.
- Laboratórios de pesquisa e experimentação, na mesma descrição institucional.
- Tecnosinos, parque tecnológico, e Unitec, incubadora. O SOFTWARELAB fica no Unitec 3, sala G15 106, no mesmo endereço.

Uma frase deixa claro que a universidade também tem campus em Porto Alegre, e que esta página é só São Leopoldo.

### Inteligência artificial

Título: Inteligência artificial na Unisinos.

Quatro blocos.

**Bacharelado no campus.** Bacharelado em Inteligência Artificial, presencial, noturno, tempo mínimo de 4 anos se cursados todos os créditos máximos por semestre. Oferecido em São Leopoldo e também em Porto Alegre. Esta página descreve a oferta de São Leopoldo. Coordenação: Mateus Raeder. A página do curso liga o bacharelado a programação, matemática, ciência de dados, redes neurais, aprendizado de máquina, visão computacional e análise de dados, com projetos junto ao Tecnosinos e à Unitec, e contato com o Programa de Pós-Graduação em Computação Aplicada. A notícia de lançamento acrescenta processamento de linguagem natural, internet das coisas, Edge AI e processamento de sinais. Não usar a data de vestibular da notícia antiga nem a da página atual como se fossem a mesma coisa. Se a página citar prova ou edital, o texto diz que as datas estão no edital vigente, sem copiar um calendário que muda.

**Pesquisa.** Docentes do curso integram o PPG em Computação Aplicada. A notícia de lançamento atribui a esse programa produção em IA, visão computacional, cidades inteligentes e ambientes inteligentes. O SOFTWARELAB, núcleo de excelência no Unitec 3, faz pesquisa aplicada com a indústria em internet das coisas, inteligência artificial, visão computacional e aplicações distribuídas.

**Núcleo entre escolas.** O projeto político-pedagógico do PPG em Filosofia, de 2023, diz que o programa fará parte do Núcleo de Pesquisa em Inteligência Artificial Unisinos, com pesquisadores de cinco escolas: Humanidades, Politécnica, Saúde, Direito e Indústria Criativa. O texto do site usa essa formulação. Não afirma data de estreia nem lista de projetos do núcleo, porque essa página não os publica.

**Uso no ensino.** Notícia de 8 de setembro de 2026, de Matheus N. Vargas: a Unisinos tem resolução institucional para o uso acadêmico de IA, em vigor desde o ano anterior. Princípios citados: ética e transparência, autoria e integridade dos dados. Trabalhos como TCC, dissertação e tese levam declaração de autoria. Há também um documento orientador para professores, sobre planejamento, docência e avaliação. Cristiane Schnack, gerente de Ensino, diz que o papel da IA é apoio e que a produção de conhecimento é humana. Gustavo Borba, pró-reitor Acadêmico e de Relações Internacionais, trata a normativa como documento vivo. Não inventar o número da resolução.

## Tom

Frases diretas. Sem slogan de vestibular e sem adjetivo de campanha. Quando a frase for da universidade, o texto diz isso. Citações curtas, com nome e cargo como publicados na notícia.

## Visual

Fundo papel, `#f4f1ea`. Texto `#1c2430`. Azul `#0c3d6e` em links, no título do site e na faixa do topo. Essas cores não são apresentadas como a marca oficial.

Tipografia via `next/font`: Source Serif 4 nos títulos, Source Sans 3 no texto.

Layout: faixa superior com o nome "Unisinos São Leopoldo" e três links (Início, Campus, Inteligência artificial). Conteúdo numa coluna de `max-w-[65ch]`. Rodapé em todas as páginas: este site é independente, não é o site oficial da Unisinos, com link para `https://www.unisinos.br`.

Sem foto, sem logo, sem ilustração de banco de imagens. Sem menu hambúrguer. No celular os links quebram linha e continuam clicáveis.

## Arquitetura

Next.js com App Router, TypeScript, Tailwind e ESLint. Pacotes via npm. Diretório `src/` e alias `@/*`. Versão que o `create-next-app` instalar no momento da implementação. Runtime Node padrão. Sem `runtime = 'edge'`.

Componentes de servidor. Sem `use client`. O cabeçalho não precisa de estado.

Conteúdo em módulos TypeScript, importados pelas páginas. Sem `fetch`.

```
src/content/types.ts
src/content/home.ts
src/content/campus.ts
src/content/ia.ts
src/components/SiteHeader.tsx
src/components/SiteFooter.tsx
src/components/PageHeader.tsx
src/components/SourceList.tsx
src/app/layout.tsx
src/app/page.tsx
src/app/campus/page.tsx
src/app/ia/page.tsx
src/app/not-found.tsx
src/app/globals.css
```

`PageContent` tem `title`, `description`, `lede`, `sections`, `sources` e `links` opcional. Cada seção tem `id`, `heading` e `paragraphs`. Cada fonte tem `title`, `publisher`, `url` e, se precisar, `note`. Cada item de `links` tem `href`, `label` e `text`.

Só o início preenche `links`, com os caminhos `/campus` e `/ia`. Campus e IA deixam `links` de fora.

`layout.tsx` define `lang="pt-BR"`, o cabeçalho, o rodapé e um template de título `%s | Unisinos São Leopoldo`. Cada página exporta `metadata` com título e descrição próprios.

Links externos são âncoras normais, na mesma aba.

## Erros

`not-found.tsx` em português, com link para o início. Não há erro de rede porque não há busca de dados.

## Fontes que o site deve listar

Acesso registrado em 30 de setembro de 2026.

- Graduação em Inteligência Artificial, campus São Leopoldo. Unisinos. https://www.unisinos.br/graduacao/inteligencia-artificial/sao-leopoldo
- Unisinos lança Bacharelado em Inteligência Artificial. Notícias Unisinos. https://www.unisinos.br/noticias/unisinos-lanca-bacharelado-em-inteligencia-artificial/
- Unisinos já possui diretrizes para uso de inteligência artificial no ensino. Notícias Unisinos, 8 de setembro de 2026, Matheus N. Vargas. https://www.unisinos.br/noticias/unisinos-ja-possui-diretrizes-para-uso-de-inteligencia-artificial-no-ensino/
- Núcleo de Excelência em Inovação de Software (SOFTWARELAB). Unisinos. https://www.unisinos.br/portal-de-inovacao/nucleos-de-excelencia/inovacao-de-software
- Projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23. Unisinos. https://www.unisinos.br/pos/images/estrito/projeto-politico-pedagogico/filosofia/Resol_CONSUN_16-23_Proj_Politico-Pedag_PPG_Filosofia.pdf

A página de campus usa a graduação e o SOFTWARELAB. A de IA usa as cinco. O início usa o PDF e a página de graduação, só para fundação, natureza jurídica e mantenedora.

## Verificação

- `npm run build` termina sem erro.
- No navegador, `/`, `/campus` e `/ia` mostram o texto combinado e as fontes com URL.
- Um endereço inexistente mostra a página de não encontrado.
- Os três links do topo funcionam.
- Em largura de celular, o texto cabe e os links continuam usáveis.
