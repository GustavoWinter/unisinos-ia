import Link from "next/link";
import { SITE_NAME } from "@/content/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/campus", label: "Campus" },
  { href: "/ia", label: "Inteligência artificial" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 md:px-10">
        <Link href="/" className="font-serif text-xl">
          {SITE_NAME}
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div data-progress className="progress-line" aria-hidden="true" />
    </header>
  );
}
