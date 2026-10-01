import { Article } from "@/components/Article";
import { campus } from "@/content/campus";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: campus.title,
  description: campus.description,
  path: "/campus",
});

export default function CampusPage() {
  return <Article page={campus} />;
}
