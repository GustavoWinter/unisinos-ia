import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SourceList } from "@/components/SourceList";
import type { PageContent } from "@/content/types";

export function Article({ page }: { page: PageContent }) {
  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <PageHeader title={page.title} lede={page.lede} />
      {page.links && page.links.length > 0 ? (
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {page.links.map((link, index) => (
            <p
              key={link.href}
              data-reveal
              className="border border-blue/15 bg-white/50 p-6 leading-relaxed"
            >
              <span className="font-serif text-sm text-blue/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Link href={link.href} className="mt-3 block font-serif text-2xl">
                {link.label}
              </Link>
              <span className="mt-3 block">{link.text}</span>
            </p>
          ))}
        </div>
      ) : null}
      {page.sections.length > 0 ? (
        <div className="mt-20 flex flex-col">
          {page.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              data-reveal
              className="grid gap-4 border-t border-blue/15 py-10 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-10"
            >
              <p className="font-serif text-4xl text-blue/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="max-w-2xl">
                <h2 className="text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${section.id}-${paragraphIndex}`}
                    className="mt-4 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
      <div data-reveal className="mt-8">
        <SourceList sources={page.sources} />
      </div>
    </article>
  );
}
