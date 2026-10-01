import { LeadForm } from "@/components/LeadForm";
import { TrackedAnchor } from "@/components/TrackedAnchor";
import type { PageCta } from "@/content/types";

export function ConversionBlock({ cta }: { cta: PageCta }) {
  return (
    <section
      id={cta.id}
      data-reveal
      className="mt-16 border border-blue/15 bg-white/40 p-6 md:p-8"
    >
      <h2 className="text-3xl">{cta.heading}</h2>
      {cta.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 max-w-2xl leading-relaxed">
          {paragraph}
        </p>
      ))}
      <p className="mt-6">
        <TrackedAnchor
          href={cta.primary.href}
          event={cta.primary.event}
          className="cta-primary"
        >
          {cta.primary.label}
        </TrackedAnchor>
      </p>
      {cta.secondary ? (
        <p className="mt-4 text-sm">
          <TrackedAnchor href={cta.secondary.href} event={cta.secondary.event}>
            {cta.secondary.label}
          </TrackedAnchor>
        </p>
      ) : null}
      {cta.form ? <LeadForm /> : null}
    </section>
  );
}