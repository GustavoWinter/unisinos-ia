export function PageHeader({ title, lede }: { title: string; lede: string }) {
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
    </header>
  );
}
