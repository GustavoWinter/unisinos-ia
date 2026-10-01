"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function SiteMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      const scope = root.current;
      if (!scope) {
        mm.revert();
        return;
      }

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
          hero
            .from("[data-hero-kicker]", { y: 16, autoAlpha: 0, duration: 0.45 })
            .from("[data-hero-title]", { y: 40, autoAlpha: 0, duration: 0.85 }, "-=0.2")
            .from(
              "[data-rule]",
              { scaleX: 0, duration: 0.7, transformOrigin: "left center" },
              "-=0.5",
            )
            .from("[data-hero-lede]", { y: 22, autoAlpha: 0, duration: 0.7 }, "-=0.4");

          gsap.set("[data-reveal]", { autoAlpha: 0, y: 32 });
          ScrollTrigger.batch("[data-reveal]", {
            start: "top 90%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: true,
              });
            },
          });

          gsap.to("[data-progress]", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          });
        },
        scope,
      );

      return () => {
        mm.revert();
      };
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
