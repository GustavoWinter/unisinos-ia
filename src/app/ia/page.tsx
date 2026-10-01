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
