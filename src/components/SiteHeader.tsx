import { SITE_NAME } from "@/content/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/campus", label: "Campus" },
  { href: "/ia", label: "Inteligência artificial" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
        <a href="/" className="font-serif text-lg">
          {SITE_NAME}
        </a>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
