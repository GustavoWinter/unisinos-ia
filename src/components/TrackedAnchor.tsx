"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { track } from "@/lib/track";

export function TrackedAnchor({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event: string;
  className?: string;
  children: ReactNode;
}) {
  function onClick(clickEvent: MouseEvent<HTMLAnchorElement>) {
    track(event, {
      href,
      label: clickEvent.currentTarget.textContent?.trim() ?? "",
    });
  }

  const attrs = {
    href,
    className,
    onClick,
    "data-track": event,
    "data-track-href": href,
  };

  if (href.startsWith("/") || href.startsWith("#")) {
    return <Link {...attrs}>{children}</Link>;
  }

  return <a {...attrs}>{children}</a>;
}