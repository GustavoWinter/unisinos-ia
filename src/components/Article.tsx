import Link from "next/link";
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
          <Link href={link.href}>{link.label}</Link>
          {". "}
          {link.text}
        </p>
      ))}
      <SourceList sources={page.sources} />
    </article>
  );
}
