import { Article } from "@/components/Article";
import { ia } from "@/content/ia";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: ia.title,
  description: ia.description,
  path: "/ia",
});

export default function IaPage() {
  return <Article page={ia} />;
}
