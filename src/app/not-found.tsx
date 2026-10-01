import Link from "next/link";

export default function NotFound() {
  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10" data-hero>
      <p
        data-hero-kicker
        className="text-xs font-medium tracking-[0.22em] text-blue uppercase"
      >
        404
      </p>
      <h1 data-hero-title className="mt-4 text-5xl md:text-6xl">
        Página não encontrada
      </h1>
      <div data-rule className="draw-rule mt-8" />
      <p data-hero-lede className="mt-6 max-w-xl text-lg">
        Esse endereço não existe neste site.
      </p>
      <p className="mt-8">
        <Link href="/">Voltar ao início</Link>
      </p>
    </article>
  );
}
