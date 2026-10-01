export function PageHeader({ title, lede }: { title: string; lede: string }) {
  return (
    <header>
      <h1 className="text-3xl">{title}</h1>
      <p className="mt-4 leading-relaxed">{lede}</p>
    </header>
  );
}
