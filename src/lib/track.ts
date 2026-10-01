export type TrackPayload = Record<string, unknown>;

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export function track(event: string, payload: TrackPayload = {}): void {
  if (typeof window === "undefined") {
    return;
  }

  const detail = { event, ...payload, ts: Date.now() };
  console.info("[track]", detail);

  const trackingWindow = window as DataLayerWindow;
  trackingWindow.dataLayer ??= [];
  trackingWindow.dataLayer.push(detail);
  trackingWindow.dispatchEvent(new CustomEvent("unisinos:track", { detail }));
}