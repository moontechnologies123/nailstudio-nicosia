SAVE THIS FILE AS: assets/js/analytics.js
==========================================
(Place inside your assets/js/ folder)

[COPY THE FULL analytics.js CODE FROM THE CHAT ABOVE - Phase 4 Step 4.5]

IMPORTANT — BEFORE GOING LIVE:
Replace this line:
  const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
With your real GA4 Measurement ID from:
  https://analytics.google.com

QUICK REMINDER — This file contains:
- GA4 MEASUREMENT ID configuration (replace G-XXXXXXXXXX)
- Consent-gated loading (only fires after cookie accept)
- Checks localStorage for previous consent on page load
- Dynamically injects gtag.js script tag
- Configures GA4 with anonymize_ip, SameSite cookies, 13-month expiry
- Custom event tracking for 11 business events:
  * Book Now CTA clicks
  * Phone call clicks
  * Gallery filter usage
  * Lightbox opens
  * FAQ accordion opens
  * Language switcher
  * Facebook/Instagram/Google links
  * Get Directions clicks
  * Before/After slider usage
  * Service category interest
- Scroll depth tracking (25%, 50%, 75%, 90%)
- Time on page tracking (30s, 60s, 120s)
- Page type detection (home, services, booking, etc.)
- Safe trackEvent() wrapper (never breaks UX)
- Dev logging on localhost only
- Exports to window.NailStudio.analytics

NOTE: The full JS code was provided in the chat.
Copy it exactly from Phase 4 - Step 4.5 output.