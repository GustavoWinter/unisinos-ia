import type { Source } from "@/content/types";

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl">Fontes</h2>
      <ul className="mt-3 list-disc pl-5">
        {sources.map((source) => (
          <li key={source.url} className="mt-2">
            <a href={source.url}>{source.title}</a>
            {". "}
            {source.publisher}
            {source.note ? `. ${source.note}` : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
