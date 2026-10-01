import {
  OFFICIAL_SITE_LABEL,
  OFFICIAL_SITE_URL,
  SITE_DISCLAIMER,
} from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[65ch] px-6 py-10 text-sm">
      <p>{SITE_DISCLAIMER}</p>
      <p className="mt-2">
        <a href={OFFICIAL_SITE_URL}>{OFFICIAL_SITE_LABEL}</a>
      </p>
    </footer>
  );
}
