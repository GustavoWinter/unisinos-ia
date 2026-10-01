import type { Source } from "@/content/types";

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="border border-blue/15 bg-white/40 p-6 md:p-8">
      <h2 className="text-2xl">Fontes</h2>
      <ul className="mt-5 flex flex-col gap-4">
        {sources.map((source) => (
          <li key={source.url} className="border-l-2 border-blue/30 pl-4">
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
