/** Tracking Quality — Brand Member prototype data
 * Sourced from Explainability / For Brands one-pagers + Help Center best practices.
 * Display statuses: pass→Clear, fail→Action needed, ineligible→Building data,
 * not_applicable→Not applicable, review_required→Worth confirming
 */

export type DisplayStatus =
  | "clear"
  | "action_needed"
  | "building_data"
  | "worth_confirming"
  | "not_applicable";

export type CheckId =
  | "landing_page_tracking"
  | "comprehensive_conversion_tracking"
  | "verified_landing_page_tracking_quality"
  | "tracking_domain_match"
  | "server_side_conversions"
  | "consent_mode_implemented"
  | "cross_device_supported"
  | "custom_first_party_identifier_implemented";

export type TrafficTab = "web" | "app";

export interface MetricRow {
  label: string;
  value: string;
  hint?: string;
}

export interface TrackerRow {
  name: string;
  method: string;
  status: DisplayStatus;
  detail: string;
}

export interface CheckDetail {
  id: CheckId;
  title: string;
  status: DisplayStatus;
  section: "foundations" | "excellence";
  traffic: TrafficTab[];
  summary: string;
  why: string;
  whatToChange: string[];
  howToMeet: string;
  helpUrl: string;
  metrics: MetricRow[];
  trackers?: TrackerRow[];
  attributes?: { label: string; value: string }[];
}

export const STATUS_LABEL: Record<DisplayStatus, string> = {
  clear: "Clear",
  action_needed: "Action needed",
  building_data: "Building data",
  worth_confirming: "Worth confirming",
  not_applicable: "Not applicable",
};

export const BPA = {
  standing: "Needs Improvement" as const,
  score: 58,
  foundationsScore: 50,
  excellenceScore: 40,
  lastChecked: "12 Jun 2026",
  freshness: "Updates every 24 hours",
};

export const PROGRAM_INFO = [
  { label: "Tracking domain", value: "track.adidas.com" },
  { label: "Site definition", value: "adidas.com" },
  { label: "Test link", value: "impact.com/t/adidas-test" },
  { label: "Web click integration", value: "UTT" },
  { label: "Landing page integration", value: "UTT" },
  { label: "Page integration", value: "UTT" },
  { label: "LP tracking quality", value: "58%" },
  { label: "Conversion integration", value: "Segment, direct" },
  { label: "Primary conversion method", value: "pixel (mixed)" },
  { label: "Has login", value: "Unknown — review" },
  { label: "Custom 1st-party storage confirmed", value: "Not confirmed" },
];

export const CHECKS: CheckDetail[] = [
  {
    id: "landing_page_tracking",
    title: "Landing page tracking",
    status: "clear",
    section: "foundations",
    traffic: ["web"],
    summary:
      "Landing-page tag is appearing on 3.2% of clicks — you're above the 1% target.",
    why: "We measure attributable clicks ÷ initiated clicks over the evaluation window. Pass when ratio ≥ 1% and volume ≥ 100 initiated clicks.",
    whatToChange: [
      "No change needed for this check.",
      "Keep UTT or Page Load API firing on partner landing pages.",
    ],
    howToMeet:
      "Implement landing page tracking via Universal Tracking Tag or Page Load API (PLA recommended for server-side page events).",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Attributable clicks", value: "3,240" },
      { label: "Initiated clicks", value: "101,250" },
      { label: "Ratio", value: "3.2%", hint: "Target ≥ 1%" },
      { label: "Volume gate", value: "100 initiated", hint: "Met" },
      { label: "Window", value: "13 May – 12 Jun 2026" },
    ],
    attributes: [
      { label: "Landing page integration", value: "UTT" },
      { label: "UTT hits", value: "98,400" },
      { label: "PLA hits", value: "2,850" },
    ],
  },
  {
    id: "comprehensive_conversion_tracking",
    title: "Comprehensive conversion tracking",
    status: "action_needed",
    section: "foundations",
    traffic: ["web", "app"],
    summary:
      "Actions per conversion are running high. Aim for a ratio below 0.6 for cleaner signals.",
    why: "Per action tracker we compare action_count ÷ conversion_count. Product pass when every eligible tracker is below 0.6. High ratios often mean missing non-partner conversions.",
    whatToChange: [
      "Send all potential referrer-based conversions — not only partner-attributed ones.",
      "Review Purchase and Lead trackers that sit above the 0.6 bar.",
      "Fixing coverage could recover ~40–55 attributed conversions in a typical week.",
    ],
    howToMeet:
      "Record all potential conversions (including cross-device) so Impact can attribute with every available identifier.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Threshold", value: "< 0.6 actions / conversion" },
      { label: "Trackers below bar", value: "1 of 3" },
      { label: "Window", value: "13 May – 12 Jun 2026" },
    ],
    trackers: [
      {
        name: "Purchase",
        method: "Pixel + Segment",
        status: "action_needed",
        detail: "0.84 actions / conversion",
      },
      {
        name: "Lead gen",
        method: "Pixel",
        status: "action_needed",
        detail: "1.12 actions / conversion",
      },
      {
        name: "App install",
        method: "Batch",
        status: "clear",
        detail: "0.41 actions / conversion",
      },
    ],
  },
  {
    id: "verified_landing_page_tracking_quality",
    title: "Verified landing page quality",
    status: "building_data",
    section: "excellence",
    traffic: ["web"],
    summary:
      "We need more click volume before we can assess landing-page quality.",
    why: "Quality scoring needs ≥ 1,000 initiated clicks and uses median efficacy (≥10 partners) or pooled efficacy (<10), threshold 0.7. Not applicable when LP tracking is ineligible or integration is None.",
    whatToChange: [
      "No action — we will score automatically when volume lands.",
      "You do not need to change tracking for this check today.",
    ],
    howToMeet: "Aim for tracking efficacy over 70% once volume is sufficient.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Initiated clicks", value: "620", hint: "Need ≥ 1,000" },
      { label: "Efficacy (pooled)", value: "—", hint: "Not scored yet" },
      { label: "Threshold", value: "≥ 70%" },
      { label: "Display status", value: "Building data (volume gate)" },
    ],
  },
  {
    id: "tracking_domain_match",
    title: "Tracking domain match",
    status: "clear",
    section: "excellence",
    traffic: ["web"],
    summary:
      "Custom tracking domain aligns with your landing page configuration.",
    why: "Config-at-a-point check: tracking_domain and landing_page must match brand setup for first-party reliability.",
    whatToChange: ["No change needed."],
    howToMeet:
      "Use a 1st-party tracking domain like goto.brand.com aligned to your site.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Tracking domain", value: "track.adidas.com" },
      { label: "Landing page", value: "adidas.com" },
      { label: "Match", value: "true" },
      { label: "As-of", value: "12 Jun 2026" },
    ],
  },
  {
    id: "server_side_conversions",
    title: "Server-side conversions",
    status: "action_needed",
    section: "excellence",
    traffic: ["web", "app"],
    summary:
      "Send Purchase events via API or batch for more reliable data than pixel-only.",
    why: "Program passes when 100% of eligible trackers primarily use conversions_api or conversions_batch. Adaptive ~1,000-conversion walkback.",
    whatToChange: [
      "Migrate Purchase to Conversions API or batch file.",
      "Lead gen still on pixel — move to server-side when ready.",
      "Estimated recovery: ~85–90 attributed purchases if Purchase goes server-side.",
    ],
    howToMeet:
      "Transition conversion posting to server-side (Conversions API / batch) so events aren’t missed by ad blockers or early navigation.",
    helpUrl:
      "https://integrations.impact.com/impact-brand/reference/submit-a-conversion",
    metrics: [
      { label: "Pass rule", value: "100% eligible trackers server-side" },
      { label: "Trackers server-side", value: "0 of 2 eligible" },
      { label: "Window", value: "Adaptive ~1,000 conversions" },
    ],
    trackers: [
      {
        name: "Purchase",
        method: "Pixel (primary)",
        status: "action_needed",
        detail: "12,400 conversions · not API/batch",
      },
      {
        name: "Lead gen",
        method: "Pixel",
        status: "action_needed",
        detail: "3,100 conversions · not API/batch",
      },
    ],
  },
  {
    id: "cross_device_supported",
    title: "Cross device tracking",
    status: "clear",
    section: "excellence",
    traffic: ["web", "app"],
    summary:
      "Cross-device conversions are tracking well at the expected share.",
    why: "Needs ≥20% email or customer ID on conversions; WEB also ≥20% on page loads when login is present. Upstream LP ineligible → this check ineligible; LP fail → fail.",
    whatToChange: [
      "Keep sending CustomerId / CustomerEmail on page and conversion events.",
    ],
    howToMeet:
      "Send CustomerId and CustomerEmail when available on page and conversion events.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Conversion identity rate", value: "34%", hint: "Target ≥ 20%" },
      { label: "Page identity rate", value: "28%", hint: "Target ≥ 20%" },
      { label: "Has login", value: "Unknown → treated via page identity" },
    ],
  },
  {
    id: "custom_first_party_identifier_implemented",
    title: "Custom 1st-party identifier",
    status: "action_needed",
    section: "excellence",
    traffic: ["web", "app"],
    summary:
      "Custom profile ID isn't showing up on enough conversions yet — filling it in more often helps us match users.",
    why: "Needs ≥90% CustomProfileId on conversions (and WEB page loads). Storage confirmation is required for pass — override cannot skip it.",
    whatToChange: [
      "Pass CustomProfileId on conversions and page loads (≥90%).",
      "Confirm custom first-party storage is httpOnly + secure on your domain.",
      "Estimated lift: ~10–15% on cross-session attribution when coverage rises.",
    ],
    howToMeet:
      "Use CustomProfileId stored on your domain as httpOnly and secure; cover ≥90% of events.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Conversion fill rate", value: "61%", hint: "Target ≥ 90%" },
      { label: "Page-load fill rate", value: "54%", hint: "Target ≥ 90%" },
      { label: "Storage confirmed", value: "No" },
    ],
  },
  {
    id: "consent_mode_implemented",
    title: "Consent Mode",
    status: "worth_confirming",
    section: "excellence",
    traffic: ["web"],
    summary: "Help us confirm Consent Mode is set up on your site.",
    why: "Config flag consent_mode_implemented with as-of date. Relevant for EEA / UK / Switzerland presence.",
    whatToChange: [
      "Confirm Consent Mode (Beta) is configured if you sell in EEA/UK/CH.",
      "Reach out to your CSM if unsure — this is a process confirmation, not an automatic fail.",
    ],
    howToMeet:
      "Preserve attribution parameters past initial navigation; handle loyalty/rewards consent-exempt cases via Consent Mode.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Config flag", value: "Unknown / not confirmed" },
      { label: "As-of", value: "—" },
    ],
  },
];

export const APP_CHECKS: CheckDetail[] = [
  {
    id: "landing_page_tracking",
    title: "App open tracking",
    status: "not_applicable",
    section: "foundations",
    traffic: ["app"],
    summary:
      "App tracking is not applicable until we confirm this brand operates an app (has_app).",
    why: "If has_app = false, the whole APP evaluation is not_applicable so the brand is not penalised.",
    whatToChange: [
      "Confirm whether you operate a mobile app.",
      "If yes, implement TrueLink + Page Load API for app open measurement.",
    ],
    howToMeet: "Implement TrueLink with Page Load API for deeplinking and app opens.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "has_app", value: "Unknown" },
      { label: "In-app page clicks", value: "0" },
    ],
  },
];

export function checksForTab(tab: TrafficTab): CheckDetail[] {
  if (tab === "app") return APP_CHECKS;
  return CHECKS.filter((c) => c.traffic.includes("web"));
}