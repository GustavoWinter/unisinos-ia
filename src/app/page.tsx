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
