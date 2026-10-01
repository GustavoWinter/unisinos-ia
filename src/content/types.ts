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

export type CtaLink = {
  href: string;
  label: string;
  event: string;
};

export type PageCta = {
  id: string;
  heading: string;
  paragraphs: string[];
  primary: CtaLink;
  secondary?: CtaLink;
  form?: boolean;
};

export type PageContent = {
  title: string;
  description: string;
  lede: string;
  sections: Section[];
  sources: Source[];
  links?: PageLink[];
  heroCta?: CtaLink;
  cta?: PageCta;
};
