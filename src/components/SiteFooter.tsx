import {
  OFFICIAL_SITE_LABEL,
  OFFICIAL_SITE_URL,
  SITE_DISCLAIMER,
} from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-blue px-6 py-12 text-sm text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3">
        <p>{SITE_DISCLAIMER}</p>
        <p>
          <a href={OFFICIAL_SITE_URL}>{OFFICIAL_SITE_LABEL}</a>
        </p>
      </div>
    </footer>
  );
}
