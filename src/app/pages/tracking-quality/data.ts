/** Tracking Quality — Brand Member prototype data
 * Main MVP aligned to Figma section 11818:10700 (Adidas WEB / Google Doc scenario)
 * + Explainability / For Brands one-pagers + Alex/Lesley Granola notes.
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
  /** Optional chip under priority cards (e.g. unlocks standing) */
  unlockLabel?: string;
  lastUpdated?: string;
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
  score: 50,
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
];

/** Priority queue order for MVP main (Alex/Lesley) */
export const MVP_FOCUS: {
  id: CheckId;
  priorityLabel: string;
  detail: string;
}[] = [
  {
    id: "comprehensive_conversion_tracking",
    priorityLabel: "P1 · Foundations · Required",
    detail:
      "2 of 3 trackers need action (Purchase 84%, Lead gen 99%). App install Clear at 41%. Remove conditional rules.",
  },
  {
    id: "tracking_domain_match",
    priorityLabel: "P2 · Excellence",
    detail:
      "Tracking domain adidas.sjv.io does not align with https://www.adidas.com. Configure a custom tracking domain.",
  },
  {
    id: "server_side_conversions",
    priorityLabel: "P3 · Excellence",
    detail:
      "Purchase primary = UTT; Lead gen primary = Pixel. Migrate both to Conversions API or batch.",
  },
  {
    id: "custom_first_party_identifier_implemented",
    priorityLabel: "P4 · Excellence",
    detail:
      "CustomProfileId fill 61% conversions / 54% page loads (need ≥90%). Storage not confirmed. Ask Impact →",
  },
];

export const MVP_ON_TRACK: CheckId[] = [
  "landing_page_tracking",
  "verified_landing_page_tracking_quality",
  "cross_device_supported",
  "consent_mode_implemented",
];

export const CHECKS: CheckDetail[] = [
  {
    id: "landing_page_tracking",
    title: "Landing page tracking implemented",
    status: "clear",
    section: "foundations",
    traffic: ["web"],
    summary: "LP hits 1,542 / 48,200 clicks = 3.2%. Integration UTT. Clear.",
    why: "Either Universal Tracking Tag or Page Load API is integrated on web pages. At least 1% of tracking link clicks should result in a page tracking signal.",
    whatToChange: [
      "Keep UTT or Page Load API integrated — loop in your dev team if regenerating.",
      "Status is Clear — no change needed today.",
    ],
    howToMeet:
      "Implement landing page tracking via Universal Tracking Tag or Page Load API (PLA recommended for server-side page events).",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Clicks seen", value: "48,200" },
      { label: "LP tracking hits", value: "1,542" },
      { label: "Ratio", value: "3.2%", hint: "Target ≥ 1%" },
      { label: "Window", value: "13 May – 12 Jun 2026" },
    ],
    attributes: [{ label: "landing_page_integration", value: "UTT" }],
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "comprehensive_conversion_tracking",
    title: "Comprehensive conversion tracking",
    status: "action_needed",
    section: "foundations",
    traffic: ["web", "app"],
    summary:
      "2 of 3 trackers need action (Purchase 84%, Lead gen 99%). App install Clear at 41%. Remove conditional rules.",
    why: "Every action tracker must send all potential referrer-based conversions — not only partner-attributed. Partnership contribution bar ~30–60%; all trackers must pass (SCORE-2987).",
    whatToChange: [
      "Contact your dev team and remove conditional execution rules from trackers listed as Needs action.",
      "Full coverage unlocks fair cross-device and household attribution.",
    ],
    howToMeet:
      "Record all potential conversions (including cross-device) so Impact can attribute with every available identifier.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Trackers needing action", value: "2 of 3" },
      { label: "Partnership bar", value: "~30–60%" },
      { label: "Window", value: "13 May – 12 Jun 2026" },
    ],
    trackers: [
      {
        name: "Purchase (12345)",
        method: "Segment · Pixel",
        status: "action_needed",
        detail: "84% actions / conversion — above partnership bar",
      },
      {
        name: "Lead gen (4567)",
        method: "Direct · Pixel",
        status: "action_needed",
        detail: "99% actions / conversion — above partnership bar",
      },
      {
        name: "App install (54332)",
        method: "Branch · API",
        status: "clear",
        detail: "41% actions / conversion — below partnership bar",
      },
    ],
    unlockLabel: "Unlocks Good Tracking Foundations",
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "verified_landing_page_tracking_quality",
    title: "Verified landing page tracking quality",
    status: "building_data",
    section: "excellence",
    traffic: ["web"],
    summary:
      "Ineligible — not enough data. 620 clicks (need 1,000); 21 LP signals. Building data.",
    why: "LP tracking must be integrated effectively. ≥70% of clicks should have a corresponding LP signal. Need ≥1,000 clicks to judge. Only criterion that may show a trend once scored (Alex/Lesley).",
    whatToChange: [
      "No Action needed today — Building data ≠ fail.",
      "When scored: ensure page tracking is not conditional; use efficacy reports for geo/site areas that strip link decoration.",
    ],
    howToMeet: "Aim for tracking efficacy over 70% once volume is sufficient.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Clicks seen", value: "620", hint: "Need ≥ 1,000" },
      { label: "LP signals", value: "21" },
      { label: "Efficacy", value: "not enough data" },
      { label: "Window", value: "13 May – 12 Jun 2026" },
    ],
    attributes: [{ label: "landing_page_integration", value: "UTT" }],
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "tracking_domain_match",
    title: "Tracking domain match",
    status: "action_needed",
    section: "excellence",
    traffic: ["web"],
    summary:
      "Tracking domain adidas.sjv.io does not align with https://www.adidas.com. Configure a custom tracking domain.",
    why: "Campaign tracking domain and default landing page must use matching domains. Mismatched domains break first-party cookie continuity.",
    whatToChange: [
      "Configure a custom tracking domain aligned to adidas.com — loop in devops.",
      "How we check: compare configured tracking domain to landing-page URL domain from latest config snapshot.",
    ],
    howToMeet:
      "Use a 1st-party tracking domain like goto.brand.com aligned to your site.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Tracking domain", value: "adidas.sjv.io" },
      { label: "Landing page", value: "https://www.adidas.com" },
      { label: "Match", value: "false" },
      { label: "As-of", value: "12 Jun 2026" },
    ],
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "server_side_conversions",
    title: "Server-side conversions",
    status: "action_needed",
    section: "excellence",
    traffic: ["web", "app"],
    summary:
      "Purchase primary = UTT; Lead gen primary = Pixel. Migrate both to Conversions API or batch.",
    why: "Every eligible tracker’s primary conversion method must be Conversions API or batch — not pixel / browser JS alone. JS conversions risk adblockers, early navigation, and spoofing.",
    whatToChange: [
      "Migrate Purchase and Lead gen from pixel/UTT to Conversions API or batch.",
      "Use the integration guide for authenticated server-side posting.",
    ],
    howToMeet:
      "Transition conversion posting to server-side (Conversions API / batch) so events aren’t missed by ad blockers or early navigation.",
    helpUrl:
      "https://integrations.impact.com/impact-brand/reference/submit-a-conversion",
    metrics: [
      { label: "Server-side trackers", value: "0 of 2" },
      { label: "Pass rule", value: "100% eligible" },
      { label: "Window", value: "Adaptive ~1,000 conversions" },
    ],
    trackers: [
      {
        name: "Purchase (12345)",
        method: "Direct · UTT",
        status: "action_needed",
        detail: "12,400 conversions · primary not API/batch",
      },
      {
        name: "Lead gen (4567)",
        method: "Direct · Pixel",
        status: "action_needed",
        detail: "3,100 conversions · primary not API/batch",
      },
    ],
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "cross_device_supported",
    title: "Cross-device tracking",
    status: "clear",
    section: "excellence",
    traffic: ["web", "app"],
    summary:
      "Conversion identity 83%. Page loads N/A — site has no login. Clear.",
    why: "User identifiers are passed at available integration points so journeys stitch across devices.",
    whatToChange: [
      "Keep sending identifiers on conversions where available.",
      "Page loads N/A — site has no login (has_login).",
    ],
    howToMeet:
      "Send CustomerId and CustomerEmail when available on page and conversion events.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Conversion identity rate", value: "83%", hint: "Clear" },
      { label: "Page loads", value: "N/A — no login" },
      { label: "has_login", value: "false" },
    ],
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "custom_first_party_identifier_implemented",
    title: "Custom 1st-party identifier",
    status: "action_needed",
    section: "excellence",
    traffic: ["web", "app"],
    summary:
      "CustomProfileId fill 61% conversions / 54% page loads (need ≥90%). Storage not confirmed. Ask Impact →",
    why: "Pass an anonymous 1st-party ID on page + conversion integrations, stored in a secure httpOnly cookie beyond the longest attribution window. Fill ≥90%; storage must be confirmed — override cannot skip.",
    whatToChange: [
      "Pass CustomProfileId on every event and store it correctly.",
      "Confirm custom_first_party_storage_confirmed with TS evidence.",
    ],
    howToMeet:
      "Use CustomProfileId stored on your domain as httpOnly and secure; cover ≥90% of events.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Conversion fill rate", value: "61%", hint: "Target ≥ 90%" },
      { label: "Page-load fill rate", value: "54%", hint: "12,300 events" },
      { label: "Storage confirmed", value: "Not confirmed" },
    ],
    attributes: [
      { label: "custom_first_party_storage_confirmed", value: "Not confirmed" },
    ],
    lastUpdated: "Sep 15, 2026",
  },
  {
    id: "consent_mode_implemented",
    title: "Consent Mode",
    status: "worth_confirming",
    section: "excellence",
    traffic: ["web"],
    summary:
      "Consent Mode configured: No. 28% clicks from EEA/UK/CH. Worth confirming if you sell there.",
    why: "Consent Mode should be configured in impact.com when you sell in regulated markets (EEA / UK / CH).",
    whatToChange: [
      "If you sell in EEA/UK/CH, turn on Consent Mode and confirm with CS.",
      "This is a process confirmation — not an automatic fail.",
    ],
    howToMeet:
      "Preserve attribution parameters past initial navigation; handle loyalty/rewards consent-exempt cases via Consent Mode.",
    helpUrl:
      "https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/tracking/tracking-best-practices",
    metrics: [
      { label: "Consent Mode configured", value: "No" },
      { label: "Clicks from EEA / UK / CH", value: "28%" },
      { label: "As-of", value: "12 Jun 2026" },
    ],
    lastUpdated: "Sep 15, 2026",
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
