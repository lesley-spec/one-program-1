/*
  Event Explorer (V2) — raw event-level schema across 5 data sources.

  Direct mapping to the product vision from the meeting notes:
  "Raw event-level data explorer: give users all fields on the table,
   no predefined model. Users prepare their own data set from scratch,
   combining any available data sources. Only hard requirement:
   advertiser ID and campaign ID as anchors."

  Sources:
    - Performance   — action/event-level conversions (Impact.com Advanced Action Listing)
    - Benchmark     — quarterly industry benchmarks
    - Creator       — creator-side metrics (followers, engagement, posts)
    - Spot          — competitor / share-of-voice intelligence (Impact Spot)
    - Product Boost — Marketplace product-level boosting metrics

  Every source carries advertiser_id and campaign_id so cross-source
  stitching is always anchored. Shared fields are flagged `shared: true`.
*/

export type FieldType = "number" | "string" | "date" | "link" | "status" | "boolean";

export type SourceId = "performance" | "benchmark" | "creator" | "spot" | "product_boost";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  group?: string;
  /** Present on every source — these are the cross-source join anchors. */
  anchor?: boolean;
  /** Field exists on >1 source (used for cross-source grouping). */
  shared?: boolean;
}

/* Anchor fields appended to every source below. */
const ANCHORS: Field[] = [
  { id: "advertiser_id", label: "Advertiser ID", type: "string", group: "Anchors", anchor: true, shared: true },
  { id: "campaign_id",   label: "Campaign ID",   type: "string", group: "Anchors", anchor: true, shared: true },
  { id: "campaign",      label: "Campaign",      type: "string", group: "Anchors",                shared: true },
];

/* ─── Performance — event/action level conversions ─── */
export const PERFORMANCE_FIELDS: Field[] = [
  ...ANCHORS,
  { id: "event_date",    label: "Event Date",    type: "date",   group: "Time" },
  { id: "action_id",     label: "Action ID",     type: "string", group: "Identity" },
  { id: "oid",           label: "OID",           type: "string", group: "Identity" },
  { id: "status",        label: "Status",        type: "status", group: "Lifecycle" },
  { id: "event_type",    label: "Event Type",    type: "string", group: "Event",    shared: true },
  { id: "revenue",       label: "Revenue",       type: "number", group: "Value" },
  { id: "action_cost",   label: "Action Cost",   type: "number", group: "Value" },
  { id: "rate",          label: "Rate",          type: "number", group: "Value" },
  { id: "promo_code",    label: "Promo Code",    type: "string", group: "Marketing" },
  { id: "partner",       label: "Partner",       type: "string", group: "Partner",  shared: true },
  { id: "partner_id",    label: "Partner ID",    type: "string", group: "Partner",  shared: true },
  { id: "landing_url",   label: "Landing URL",   type: "link",   group: "Page" },
  { id: "referring_url", label: "Referring URL", type: "link",   group: "Source" },
  { id: "sub_id1",       label: "SubId1",        type: "string", group: "Tracking" },
  { id: "sub_id2",       label: "SubId2",        type: "string", group: "Tracking" },
];

/* ─── Benchmark — quarterly industry benchmarks ─── */
export const BENCHMARK_FIELDS: Field[] = [
  ...ANCHORS,
  { id: "quarter",            label: "Quarter",             type: "string", group: "Time" },
  { id: "industry",           label: "Industry",            type: "string", group: "Segment" },
  { id: "vertical",           label: "Vertical",            type: "string", group: "Segment" },
  { id: "region",             label: "Region",              type: "string", group: "Segment" },
  { id: "benchmark_cpa",      label: "Benchmark CPA",       type: "number", group: "Metrics" },
  { id: "benchmark_roas",     label: "Benchmark ROAS",      type: "number", group: "Metrics" },
  { id: "benchmark_conv_rate",label: "Benchmark Conv. Rate",type: "number", group: "Metrics" },
  { id: "industry_index",     label: "Industry Index",      type: "number", group: "Metrics" },
];

/* ─── Creator — creator-side metrics ─── */
export const CREATOR_FIELDS: Field[] = [
  ...ANCHORS,
  { id: "post_date",        label: "Post Date",        type: "date",   group: "Time" },
  { id: "creator_id",       label: "Creator ID",       type: "string", group: "Creator" },
  { id: "creator_name",     label: "Creator",          type: "string", group: "Creator" },
  { id: "creator_tier",     label: "Creator Tier",     type: "string", group: "Creator" },
  { id: "social_platform",  label: "Social Platform",  type: "string", group: "Channel" },
  { id: "post_url",         label: "Post URL",         type: "link",   group: "Channel" },
  { id: "post_type",        label: "Post Type",        type: "string", group: "Channel" },
  { id: "followers",        label: "Followers",        type: "number", group: "Audience" },
  { id: "impressions",      label: "Impressions",      type: "number", group: "Metrics" },
  { id: "engagements",      label: "Engagements",      type: "number", group: "Metrics" },
  { id: "engagement_rate",  label: "Engagement Rate",  type: "number", group: "Metrics" },
  { id: "creator_payout",   label: "Creator Payout",   type: "number", group: "Cost" },
];

/* ─── Spot — competitor / share-of-voice ─── */
export const SPOT_FIELDS: Field[] = [
  ...ANCHORS,
  { id: "observed_date",      label: "Observed Date",       type: "date",   group: "Time" },
  { id: "competitor",         label: "Competitor",          type: "string", group: "Competition" },
  { id: "category",           label: "Category",            type: "string", group: "Competition" },
  { id: "placement",          label: "Placement",           type: "string", group: "Placement" },
  { id: "publisher",          label: "Publisher",           type: "string", group: "Placement" },
  { id: "share_of_voice",     label: "Share of Voice",      type: "number", group: "Metrics" },
  { id: "competitor_rank",    label: "Competitor Rank",     type: "number", group: "Metrics" },
  { id: "promo_active",       label: "Promo Active",        type: "boolean",group: "Metrics" },
  { id: "estimated_clicks",   label: "Estimated Clicks",    type: "number", group: "Metrics" },
];

/* ─── Product Boost — product-level marketplace boosting ─── */
export const PRODUCT_BOOST_FIELDS: Field[] = [
  ...ANCHORS,
  { id: "boost_date",       label: "Boost Date",       type: "date",   group: "Time" },
  { id: "product_sku",      label: "Product SKU",      type: "string", group: "Product" },
  { id: "product_name",     label: "Product Name",     type: "string", group: "Product" },
  { id: "category",         label: "Category",         type: "string", group: "Product" },
  { id: "boost_cost",       label: "Boost Cost",       type: "number", group: "Cost" },
  { id: "boosted_views",    label: "Boosted Views",    type: "number", group: "Metrics" },
  { id: "attributed_actions",label:"Attributed Actions",type: "number", group: "Metrics" },
  { id: "attributed_revenue",label:"Attributed Revenue",type: "number", group: "Metrics" },
  { id: "boost_status",     label: "Boost Status",     type: "status", group: "Lifecycle" },
];

export const SOURCES: { id: SourceId; label: string; description: string; fields: Field[]; tone: string }[] = [
  { id: "performance",   label: "Performance",   description: "Event/action level conversions",     fields: PERFORMANCE_FIELDS,   tone: "#0046BE" },
  { id: "creator",       label: "Creator",       description: "Creator-side metrics and engagement", fields: CREATOR_FIELDS,       tone: "#D73184" },
  { id: "benchmark",     label: "Benchmark",     description: "Quarterly industry benchmarks",       fields: BENCHMARK_FIELDS,     tone: "#7C3AED" },
  { id: "spot",          label: "Spot",          description: "Competitor and share-of-voice",       fields: SPOT_FIELDS,          tone: "#92400E" },
  { id: "product_boost", label: "Product Boost", description: "Product-level marketplace boost",     fields: PRODUCT_BOOST_FIELDS, tone: "#065F46" },
];

/* A column placed in the table — identifies field by (source, id). */
export interface ColumnRef {
  sourceId: SourceId;
  fieldId: string;
}

export function refKey(ref: ColumnRef): string {
  return `${ref.sourceId}:${ref.fieldId}`;
}

export function refsEqual(a: ColumnRef, b: ColumnRef): boolean {
  return a.sourceId === b.sourceId && a.fieldId === b.fieldId;
}

export function fieldOf(ref: ColumnRef): Field | undefined {
  const source = SOURCES.find((s) => s.id === ref.sourceId);
  return source?.fields.find((f) => f.id === ref.fieldId);
}

export function sourceOf(ref: ColumnRef) {
  return SOURCES.find((s) => s.id === ref.sourceId);
}

export function isMeasureType(t: FieldType): boolean {
  return t === "number";
}

export type Aggregation = "sum" | "avg" | "count" | "uniq";

export const AGGREGATION_LABELS: Record<Aggregation, string> = {
  sum: "Sum",
  avg: "Average",
  count: "Count",
  uniq: "Unique",
};
