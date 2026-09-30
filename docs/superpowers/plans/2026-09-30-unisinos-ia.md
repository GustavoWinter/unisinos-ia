# Unisinos São Leopoldo site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static three-page Next.js site about Unisinos in São Leopoldo and how the university uses AI, with every claim tied to a public Unisinos source.

**Architecture:** Server components only. Typed content modules feed one `Article` renderer. Header, footer, and not-found are shared chrome. No fetch, no client components, no official brand assets.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, ESLint, npm, Vitest, `react-dom/server` for render tests.

**Spec:** `docs/superpowers/specs/2026-09-30-unisinos-ia-design.md`

## Global Constraints

- Project path: `/Users/gwinter/Projects/unisinos-ia`
- Next.js App Router, TypeScript, Tailwind, ESLint, npm, `src/`, alias `@/*`
- Node runtime. No `runtime = 'edge'`
- Server Components only. No `use client`
- No fetch, no database, no chat, no form
- UI language `pt-BR`
- Header name: `Unisinos São Leopoldo`
- Title template: `%s | Unisinos São Leopoldo`
- Colors: paper `#f4f1ea`, ink `#1c2430`, blue `#0c3d6e`. Do not call them the official brand
- Fonts: Source Serif 4 for headings, Source Sans 3 for body, via `next/font`
- Content column: `max-w-[65ch]`
- Footer on every page: this site is independent and is not the official Unisinos site, with a link to `https://www.unisinos.br`
- No logo, no photos, no stock illustration, no hamburger menu
- Do not invent a resolution number
- Do not copy vestibular dates
- The 2023 philosophy PPP says the program *fará parte* of the AI research nucleus. Do not add a launch date or a project list
- The Latin American library sentence is the university's own description, not an external ranking
- External links are same-tab anchors
- Access date on sources: 30 de setembro de 2026

## File map

- `src/content/types.ts` defines `Source`, `Section`, `PageLink`, `PageContent`
- `src/content/site.ts` holds the site name, disclaimer, and official URL
- `src/content/home.ts`, `campus.ts`, `ia.ts` hold page copy
- `src/components/SiteHeader.tsx`, `SiteFooter.tsx`, `PageHeader.tsx`, `SourceList.tsx`, `Article.tsx` render that copy
- `src/app/layout.tsx`, `page.tsx`, `campus/page.tsx`, `ia/page.tsx`, `not-found.tsx`, `globals.css` are the routes
- `vitest.config.ts` and `src/**/*.test.tsx` pin the copy rules

`Article.tsx` is the only file beyond the spec's list. It renders `PageContent` so the three routes stay thin.

## Review Focus

- Campus copy states the library line as the university's description. A reader should not meet it as an independent ranking. Test in Task 3.
- IA copy does not invent a resolution number. Test in Task 4.
- Nucleus copy keeps "fará parte" and names the five schools, without a launch date or project list. Test in Task 4.
- IA copy does not freeze a vestibular calendar. Test in Task 4.
- Every page shows the independent-site disclaimer and the official URL, and the header exposes `/`, `/campus`, and `/ia`. Test in Task 1.

---

### Task 1: App skeleton and chrome

**Files:**
- Create: scaffold from `create-next-app`, then replace the files below
- Create: `vitest.config.ts`
- Create: `src/content/site.ts`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/SiteHeader.test.tsx`
- Create: `src/components/SiteFooter.test.tsx`
- Create: `src/app/not-found.tsx`
- Create: `src/app/not-found.test.tsx`
- Create: `src/app/layout.test.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `package.json` script `test`

**Interfaces:**
- Consumes: nothing
- Produces:
  - `SITE_NAME: string` equals `Unisinos São Leopoldo`
  - `SITE_DISCLAIMER: string` equals `Este site é independente e não é o site oficial da Unisinos.`
  - `OFFICIAL_SITE_URL: string` equals `https://www.unisinos.br`
  - `OFFICIAL_SITE_LABEL: string` equals `Site oficial da Unisinos`
  - `SiteHeader(): JSX.Element`
  - `SiteFooter(): JSX.Element`

- [ ] **Step 1: Scaffold Next.js beside the existing docs**

The project directory already contains `docs/` and `.git`. `create-next-app` refuses a non-empty directory, so scaffold in a temp dir and copy the app in. `--disable-git` avoids a nested repository.

```bash
scaffold=$(mktemp -d)
npx create-next-app@latest "$scaffold" \
  --yes \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm \
  --disable-git
rsync -a "$scaffold"/ /Users/gwinter/Projects/unisinos-ia/
rm -rf "$scaffold"
cd /Users/gwinter/Projects/unisinos-ia
npm install -D vitest
```

Add to `package.json` scripts:

```json
"test": "vitest run"
```

- [ ] **Step 2: Write the failing chrome tests**

`vitest.config.ts`

```ts
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: { jsx: "automatic" },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  test: { environment: "node" },
});
```

`src/components/SiteHeader.test.tsx`

```tsx
import { renderToStaticMarkup } from "react-dom/server";
import { test } from "vitest";
import assert from "node:assert/strict";
import { SiteHeader } from "@/components/SiteHeader";

test("header names the site and links to the three routes", () => {
  const html = renderToStaticMarkup(<SiteHeader />);
  assert.match(html, /Unisinos São Leopoldo/);
  assert.match(html, /href="\/"/);
  assert.match(html, /href="\/campus"/);
  assert.match(html, /href="\/ia"/);
  assert.match(html, /Início/);
  assert.match(html, /Campus/);
  assert.match(html, /Inteligência artificial/);
});
```

`src/components/SiteFooter.test.tsx`

```tsx
import { renderToStaticMarkup } from "react-dom/server";
import { test } from "vitest";
import assert from "node:assert/strict";
import { SiteFooter } from "@/components/SiteFooter";

test("footer says the site is independent and links to the official site", () => {
  const html = renderToStaticMarkup(<SiteFooter />);
  assert.match(html, /Este site é independente e não é o site oficial da Unisinos\./);
  assert.match(html, /href="https:\/\/www\.unisinos\.br"/);
  assert.match(html, /Site oficial da Unisinos/);
});
```

`src/app/not-found.test.tsx`

```tsx
import { renderToStaticMarkup } from "react-dom/server";
import { test } from "vitest";
import assert from "node:assert/strict";
import NotFound from "@/app/not-found";

test("missing routes get a portuguese page that links home", () => {
  const html = renderToStaticMarkup(<NotFound />);
  assert.match(html, /Página não encontrada/);
  assert.match(html, /href="\/"/);
});
```

`src/app/layout.test.ts`

```ts
import { readFileSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { test } from "vitest";

test("layout sets portuguese and wraps every page with header and footer", () => {
  const source = readFileSync(
    path.resolve(process.cwd(), "src/app/layout.tsx"),
    "utf8",
  );
  assert.match(source, /lang="pt-BR"/);
  assert.match(source, /<SiteHeader \/>/);
  assert.match(source, /<SiteFooter \/>/);
  assert.match(source, /%s \| Unisinos São Leopoldo/);
});
```

- [ ] **Step 3: Run the tests and confirm they fail**

```bash
npm test
```

Expected: FAIL. Header, footer, and not-found are missing, and the scaffolded layout does not yet include them.

- [ ] **Step 4: Implement chrome**

`src/content/site.ts`

```ts
export const SITE_NAME = "Unisinos São Leopoldo";

export const SITE_DISCLAIMER =
  "Este site é independente e não é o site oficial da Unisinos.";

export const OFFICIAL_SITE_URL = "https://www.unisinos.br";

export const OFFICIAL_SITE_LABEL = "Site oficial da Unisinos";
```

`src/components/SiteHeader.tsx`

```tsx
import {
  SITE_NAME,
} from "@/content/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/campus", label: "Campus" },
  { href: "/ia", label: "Inteligência artificial" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
        <a href="/" className="font-serif text-lg">
          {SITE_NAME}
        </a>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

`src/components/SiteFooter.tsx`

```tsx
import {
  OFFICIAL_SITE_LABEL,
  OFFICIAL_SITE_URL,
  SITE_DISCLAIMER,
} from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[65ch] px-6 py-10 text-sm">
      <p>{SITE_DISCLAIMER}</p>
      <p className="mt-2">
        <a href={OFFICIAL_SITE_URL}>{OFFICIAL_SITE_LABEL}</a>
      </p>
    </footer>
  );
}
```

`src/app/not-found.tsx`

```tsx
export default function NotFound() {
  return (
    <article>
      <h1 className="font-serif text-3xl">Página não encontrada</h1>
      <p className="mt-4">Esse endereço não existe neste site.</p>
      <p className="mt-4">
        <a href="/">Voltar ao início</a>
      </p>
    </article>
  );
}
```

`src/app/globals.css` replaces the scaffolded file:

```css
@import "tailwindcss";

:root {
  --color-paper: #f4f1ea;
  --color-ink: #1c2430;
  --color-blue: #0c3d6e;
  --font-sans: var(--font-source-sans), sans-serif;
  --font-serif: var(--font-source-serif), serif;
}

body {
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-sans);
}

h1,
h2 {
  font-family: var(--font-serif);
}

header {
  background: var(--color-blue);
  color: var(--color-paper);
}

header a {
  color: var(--color-paper);
}

main a,
footer a {
  color: var(--color-blue);
}
```

`src/app/layout.tsx` replaces the scaffolded file:

```tsx
import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Unisinos em São Leopoldo",
    template: "%s | Unisinos São Leopoldo",
  },
  description:
    "Site independente sobre a Unisinos em São Leopoldo e o uso de inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sourceSans.variable} ${sourceSerif.variable} antialiased`}>
        <SiteHeader />
        <main className="mx-auto max-w-[65ch] px-6 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
```

Replace `src/app/page.tsx` with a temporary page. Task 2 replaces it with the real home page:

```tsx
export default function HomePage() {
  return <p>Início</p>;
}
```

- [ ] **Step 5: Run the tests and confirm they pass**

```bash
npm test
```

Expected: PASS, 4 tests.

- [ ] **Step 6: Commit**

```bash
git status
git add -A
git commit -m "$(cat <<'EOF'
Add the Unisinos site chrome.

The header, footer, and not-found page establish an independent site before any campus or AI copy lands.
EOF
)"
```

Run `git status` first. Do not stage `.env` files. `git add -A` is safe here because the scaffold has no secrets.

### Task 2: Home page

**Files:**
- Create: `src/content/types.ts`
- Create: `src/content/home.ts`
- Create: `src/components/PageHeader.tsx`
- Create: `src/components/SourceList.tsx`
- Create: `src/components/Article.tsx`
- Create: `src/app/page.test.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: nothing from Task 1 except the layout already wrapping `children`
- Produces:

```ts
export type Source = {
  title: string;
  publisher: string;
  url: string;
  note?: string;
};

export type Section = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type PageLink = {
  href: string;
  label: string;
  text: string;
};

export type PageContent = {
  title: string;
  description: string;
  lede: string;
  sections: Section[];
  sources: Source[];
  links?: PageLink[];
};

export function PageHeader(props: { title: string; lede: string }): JSX.Element;
export function SourceList(props: { sources: Source[] }): JSX.Element;
export function Article(props: { page: PageContent }): JSX.Element;
export const home: PageContent;
```

- [ ] **Step 1: Write the failing home test**

`src/app/page.test.tsx`

```tsx
import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
import { test } from "vitest";
import HomePage, { metadata } from "@/app/page";

test("home introduces the university and links onward without repeating the other pages", () => {
  assert.deepEqual(metadata.title, { absolute: "Unisinos em São Leopoldo" });
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
```

- [ ] **Step 2: Run the test and confirm it fails**

```bash
npx vitest run src/app/page.test.tsx
```

Expected: FAIL because `@/app/page` does not export the home article.

- [ ] **Step 3: Implement types, home copy, and the article**

`src/content/types.ts`

```ts
export type Source = {
  title: string;
  publisher: string;
  url: string;
  note?: string;
};

export type Section = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type PageLink = {
  href: string;
  label: string;
  text: string;
};

export type PageContent = {
  title: string;
  description: string;
  lede: string;
  sections: Section[];
  sources: Source[];
  links?: PageLink[];
};
```

`src/content/home.ts`

```ts
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
      title: "Projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23",
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
```

`src/components/PageHeader.tsx`

```tsx
export function PageHeader({ title, lede }: { title: string; lede: string }) {
  return (
    <header>
      <h1 className="text-3xl">{title}</h1>
      <p className="mt-4 leading-relaxed">{lede}</p>
    </header>
  );
}
```

`src/components/SourceList.tsx`

```tsx
import type { Source } from "@/content/types";

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl">Fontes</h2>
      <ul className="mt-3 list-disc pl-5">
        {sources.map((source) => (
          <li key={source.url} className="mt-2">
            <a href={source.url}>{source.title}</a>
            {". "}
            {source.publisher}
            {source.note ? `. ${source.note}` : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

`src/components/Article.tsx`

```tsx
import { PageHeader } from "@/components/PageHeader";
import { SourceList } from "@/components/SourceList";
import type { PageContent } from "@/content/types";

export function Article({ page }: { page: PageContent }) {
  return (
    <article>
      <PageHeader title={page.title} lede={page.lede} />
      {page.sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-8">
          <h2 className="text-xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.id}-${index}`} className="mt-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      {page.links?.map((link) => (
        <p key={link.href} className="mt-6 leading-relaxed">
          <a href={link.href}>{link.label}</a>
          {". "}
          {link.text}
        </p>
      ))}
      <SourceList sources={page.sources} />
    </article>
  );
}
```

`src/app/page.tsx`

```tsx
import type { Metadata } from "next";
import { Article } from "@/components/Article";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: home.title },
  description: home.description,
};

export default function HomePage() {
  return <Article page={home} />;
}
```

Home uses `title: { absolute }` so the layout template does not suffix it. Campus and IA keep `title` as a string, and the template adds ` | Unisinos São Leopoldo`.

- [ ] **Step 4: Run the test and confirm it passes**

```bash
npx vitest run src/app/page.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/types.ts src/content/home.ts src/components/PageHeader.tsx src/components/SourceList.tsx src/components/Article.tsx src/app/page.tsx src/app/page.test.tsx
git commit -m "$(cat <<'EOF'
Add the home page for Unisinos in São Leopoldo.

The opening page states what the university is and points to the campus and AI pages without repeating them.
EOF
)"
```

### Task 3: Campus page

**Files:**
- Create: `src/content/campus.ts`
- Create: `src/app/campus/page.tsx`
- Create: `src/app/campus/page.test.tsx`

**Interfaces:**
- Consumes: `PageContent`, `Article`
- Produces: `export const campus: PageContent` and the `/campus` route

- [ ] **Step 1: Write the failing campus test**

`src/app/campus/page.test.tsx`

```tsx
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
```

- [ ] **Step 2: Run the test and confirm it fails**

```bash
npx vitest run src/app/campus/page.test.tsx
```

Expected: FAIL because `@/app/campus/page` does not exist.

- [ ] **Step 3: Implement the campus page**

`src/content/campus.ts`

```ts
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
```

`src/app/campus/page.tsx`

```tsx
import type { Metadata } from "next";
import { Article } from "@/components/Article";
import { campus } from "@/content/campus";

export const metadata: Metadata = {
  title: campus.title,
  description: campus.description,
};

export default function CampusPage() {
  return <Article page={campus} />;
}
```

- [ ] **Step 4: Run the test and confirm it passes**

```bash
npx vitest run src/app/campus/page.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/campus.ts src/app/campus/page.tsx src/app/campus/page.test.tsx
git commit -m "$(cat <<'EOF'
Describe the São Leopoldo campus with attributed facts.

Area, library, and the technology park stay tied to the university's own pages.
EOF
)"
```

### Task 4: AI page

**Files:**
- Create: `src/content/ia.ts`
- Create: `src/app/ia/page.tsx`
- Create: `src/app/ia/page.test.tsx`

**Interfaces:**
- Consumes: `PageContent`, `Article`
- Produces: `export const ia: PageContent` and the `/ia` route

- [ ] **Step 1: Write the failing AI test**

`src/app/ia/page.test.tsx`

```tsx
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
```

- [ ] **Step 2: Run the test and confirm it fails**

```bash
npx vitest run src/app/ia/page.test.tsx
```

Expected: FAIL because `@/app/ia/page` does not exist.

- [ ] **Step 3: Implement the AI page**

`src/content/ia.ts`

```ts
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
      title: "Unisinos já possui diretrizes para uso de inteligência artificial no ensino",
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
      title: "Projeto político-pedagógico do PPG em Filosofia, Resolução CONSUN 16/23",
      publisher: "Unisinos",
      url: "https://www.unisinos.br/pos/images/estrito/projeto-politico-pedagogico/filosofia/Resol_CONSUN_16-23_Proj_Politico-Pedag_PPG_Filosofia.pdf",
      note: accessed,
    },
  ],
};
```

`src/app/ia/page.tsx`

```tsx
import type { Metadata } from "next";
import { Article } from "@/components/Article";
import { ia } from "@/content/ia";

export const metadata: Metadata = {
  title: ia.title,
  description: ia.description,
};

export default function IaPage() {
  return <Article page={ia} />;
}
```

- [ ] **Step 4: Run the test and confirm it passes**

```bash
npx vitest run src/app/ia/page.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/ia.ts src/app/ia/page.tsx src/app/ia/page.test.tsx
git commit -m "$(cat <<'EOF'
Add the page on how Unisinos uses AI.

Degree, research, and the teaching rules stay inside the published sources, including the missing resolution number.
EOF
)"
```

### Task 5: Build and browser check

**Files:**
- No new source files

**Interfaces:**
- Consumes: the three routes and the chrome from Tasks 1–4

- [ ] **Step 1: Run the full test suite**

```bash
npm test
```

Expected: PASS, 7 tests.

- [ ] **Step 2: Build**

```bash
npm run build
```

Expected: exit 0. Routes `/`, `/campus`, and `/ia` are listed. No edge runtime.

- [ ] **Step 3: Check the site in the browser**

Start `npm run dev`. Open `/`, `/campus`, `/ia`, and a missing path such as `/nao-existe`.

Confirm:

- The three header links navigate.
- Each content page shows its sources as links.
- The footer says the site is independent and links to `https://www.unisinos.br`.
- `/nao-existe` shows "Página não encontrada" and a link home.
- At a narrow width, the header links wrap and remain readable on the blue bar. The text column does not overflow.

- [ ] **Step 4: Commit only if the check changed files**

Do not make an empty commit. If formatting or a lint fix was required, commit that fix:

```bash
git add -u
git commit -m "$(cat <<'EOF'
Fix the issues the build and browser check found.

EOF
)"
```
