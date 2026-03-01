// Google Analytics helper utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Send a custom event to Google Analytics.
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// ── Pre-built event helpers ──────────────────────────────────────────

/** Track when a user navigates to a section via the navbar */
export function trackNavClick(section: string) {
  trackEvent("nav_click", { section });
}

/** Track section views (fired by IntersectionObserver) */
export function trackSectionView(section: string) {
  trackEvent("section_view", { section });
}

/** Track external link / social clicks */
export function trackSocialClick(platform: string) {
  trackEvent("social_click", { platform });
}

/** Track project card clicks */
export function trackProjectClick(projectTitle: string) {
  trackEvent("project_click", { project_title: projectTitle });
}

/** Track gallery photo opens */
export function trackGalleryOpen(photoTitle: string) {
  trackEvent("gallery_open", { photo_title: photoTitle });
}

/** Track contact link clicks */
export function trackContactClick(method: string) {
  trackEvent("contact_click", { method });
}

/** Track resume / CTA button clicks */
export function trackCtaClick(label: string) {
  trackEvent("cta_click", { label });
}

/** Track scroll-to-top usage */
export function trackScrollToTop() {
  trackEvent("scroll_to_top");
}
