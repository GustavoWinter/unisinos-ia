import assert from "node:assert/strict";
import { afterEach, test } from "vitest";
import { track } from "@/lib/track";

afterEach(() => {
  Reflect.deleteProperty(globalThis, "window");
});

test("track is a no-op without window", () => {
  assert.equal(typeof window, "undefined");
  assert.doesNotThrow(() => track("ia_hero_cta"));
});

test("track writes to console and dataLayer", () => {
  const events: Array<Record<string, unknown>> = [];
  const info: unknown[] = [];

  const trackingWindow = {
    dataLayer: events,
    dispatchEvent() {
      return true;
    },
  };

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: trackingWindow,
  });

  const originalInfo = console.info;
  console.info = (...args: unknown[]) => {
    info.push(args);
  };

  try {
    track("ia_course_cta", { href: "https://www.unisinos.br" });
  } finally {
    console.info = originalInfo;
  }

  assert.equal(events.length, 1);
  assert.equal(events[0]?.event, "ia_course_cta");
  assert.equal(events[0]?.href, "https://www.unisinos.br");
  assert.equal(typeof events[0]?.ts, "number");
  assert.equal(info.length, 1);
});
