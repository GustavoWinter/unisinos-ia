import Link from "next/link";

export default function NotFound() {
  return (
    <article>
      <h1 className="font-serif text-3xl">Página não encontrada</h1>
      <p className="mt-4">Esse endereço não existe neste site.</p>
      <p className="mt-4">
        <Link href="/">Voltar ao início</Link>
      </p>
    </article>
  );
}
