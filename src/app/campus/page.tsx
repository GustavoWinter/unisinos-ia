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
