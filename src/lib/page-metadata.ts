import type { Metadata } from "next";
import { SITE_NAME } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "pt_BR",
      siteName: SITE_NAME,
      type: path === "/" ? "website" : "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}