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
