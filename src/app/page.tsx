import { Article } from "@/components/Article";
import { home } from "@/content/home";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: home.title,
  description: home.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return <Article page={home} />;
}
