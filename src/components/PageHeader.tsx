import { TrackedAnchor } from "@/components/TrackedAnchor";
import type { CtaLink } from "@/content/types";

export function PageHeader({
  title,
  lede,
  cta,
}: {
  title: string;
  lede: string;
  cta?: CtaLink;
}) {
  return (
    <header className="max-w-4xl" data-hero>
      <p
        data-hero-kicker
        className="text-xs font-medium tracking-[0.22em] text-blue uppercase"
      >
        São Leopoldo, Rio Grande do Sul
      </p>
      <h1
        data-hero-title
        className="mt-4 text-5xl leading-[1.05] text-balance md:text-7xl"
      >
        {title}
      </h1>
      <div data-rule className="draw-rule mt-8" />
      <p data-hero-lede className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
        {lede}
      </p>
      {cta ? (
        <p data-hero-cta className="mt-8">
          <TrackedAnchor href={cta.href} event={cta.event} className="cta-primary">
            {cta.label}
          </TrackedAnchor>
        </p>
      ) : null}
    </header>
  );
}
