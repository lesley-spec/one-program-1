/*
  Data Lab V2 — Data Model Registry

  See docs/data-lab-multi-model-build-instructions.md §5.

  Three mock data models that a V2 workbook sheet can be bound to.
  V1 (src/app/components/ReportCanvas.tsx) is intentionally untouched and
  still has its own inline ALL_FIELDS list.
*/

export type FieldType = "abc" | "123" | "date" | "link";
export type FieldRole = "dimension" | "measure";

export interface DataField {
  id: string;
  label: string;
  type: FieldType;
  role: FieldRole;
}

export type DateSemantics = "standard" | "quarter-string";

export interface FilterCapability {
  /** Top-level filter IDs this model can honor natively (e.g. ["date", "partner"]). */
  honored: string[];
  /** Top-level filter IDs that require normalization, plus how. */
  normalize?: Partial<Record<string, "to-quarter-string" | "to-iso-date">>;
}

export type DataModelId = "trackonomics" | "ask-impact" | "benchmark";

export interface DataModel {
  id: DataModelId;
  label: string;
  description: string;
  /** Brand color used for chips, dots, and pills sourced from this model. */
  color: string;
  fields: DataField[];
  dateSemantics: DateSemantics;
  filterCapability: FilterCapability;
}

/**
 * A reference to a single field by (modelId, fieldId).
 * Widgets store these instead of bare field IDs so the same field name
 * across models (e.g. "revenue") never collides and each chip can be
 * color-coded by its source model.
 */
export interface FieldRef {
  modelId: DataModelId;
  fieldId: string;
}

export function refKey(ref: FieldRef): string {
  return `${ref.modelId}:${ref.fieldId}`;
}

export function refsEqual(a: FieldRef, b: FieldRef): boolean {
  return a.modelId === b.modelId && a.fieldId === b.fieldId;
}

/* ─── Trackonomics: partner-side dataset, ~20 dimensions and measures ─── */
const trackonomicsFields: DataField[] = [
  { id: "partner", label: "Partner", type: "abc", role: "dimension" },
  { id: "partner_group", label: "Partner Group", type: "abc", role: "dimension" },
  { id: "channel", label: "Channel", type: "abc", role: "dimension" },
  { id: "country", label: "Country", type: "abc", role: "dimension" },
  { id: "device", label: "Device", type: "abc", role: "dimension" },
  { id: "full_date", label: "Full Date", type: "date", role: "dimension" },
  { id: "day_of_week", label: "Day of Week", type: "abc", role: "dimension" },
  { id: "campaign", label: "Campaign", type: "abc", role: "dimension" },
  { id: "clicks", label: "Clicks", type: "123", role: "measure" },
  { id: "impressions", label: "Impressions", type: "123", role: "measure" },
  { id: "actions", label: "Actions", type: "123", role: "measure" },
  { id: "action_cost", label: "Action Cost", type: "123", role: "measure" },
  { id: "revenue", label: "Revenue", type: "123", role: "measure" },
  { id: "aov", label: "AOV", type: "123", role: "measure" },
  { id: "cpa", label: "CPA", type: "123", role: "measure" },
  { id: "cpc", label: "CPC", type: "123", role: "measure" },
  { id: "cpm", label: "CPM", type: "123", role: "measure" },
  { id: "roas", label: "ROAS", type: "123", role: "measure" },
  { id: "conversion_rate", label: "Conversion Rate", type: "123", role: "measure" },
  { id: "partner_link", label: "Partner Link", type: "link", role: "dimension" },
];

/* ─── Ask Impact: creator metrics + landing page + affiliate ─── */
const askImpactFields: DataField[] = [
  { id: "creator_id", label: "Creator ID", type: "abc", role: "dimension" },
  { id: "creator_name", label: "Creator", type: "abc", role: "dimension" },
  { id: "creator_tier", label: "Creator Tier", type: "abc", role: "dimension" },
  { id: "landing_page", label: "Landing Page", type: "link", role: "dimension" },
  { id: "affiliate_id", label: "Affiliate ID", type: "abc", role: "dimension" },
  { id: "affiliate_network", label: "Affiliate Network", type: "abc", role: "dimension" },
  { id: "full_date", label: "Full Date", type: "date", role: "dimension" },
  { id: "media_source", label: "Media Source", type: "abc", role: "dimension" },
  { id: "creator_followers", label: "Creator Followers", type: "123", role: "measure" },
  { id: "engagement_rate", label: "Engagement Rate", type: "123", role: "measure" },
  { id: "landing_page_views", label: "Landing Page Views", type: "123", role: "measure" },
  { id: "actions", label: "Actions", type: "123", role: "measure" },
  { id: "action_cost", label: "Action Cost", type: "123", role: "measure" },
  { id: "revenue", label: "Revenue", type: "123", role: "measure" },
  { id: "clicks", label: "Clicks", type: "123", role: "measure" },
  { id: "impressions", label: "Impressions", type: "123", role: "measure" },
];

/* ─── Benchmark: quarterly date strings, much smaller schema ─── */
const benchmarkFields: DataField[] = [
  { id: "industry", label: "Industry", type: "abc", role: "dimension" },
  { id: "vertical", label: "Vertical", type: "abc", role: "dimension" },
  { id: "quarter", label: "Quarter", type: "abc", role: "dimension" },
  { id: "region", label: "Region", type: "abc", role: "dimension" },
  { id: "benchmark_cpa", label: "Benchmark CPA", type: "123", role: "measure" },
  { id: "benchmark_roas", label: "Benchmark ROAS", type: "123", role: "measure" },
  { id: "benchmark_conversion_rate", label: "Benchmark Conv. Rate", type: "123", role: "measure" },
  { id: "industry_revenue_index", label: "Industry Revenue Index", type: "123", role: "measure" },
];

export const DATA_MODELS: Record<DataModelId, DataModel> = {
  trackonomics: {
    id: "trackonomics",
    label: "Trackonomics",
    description: "Partner-side performance — ~20 dimensions and measures for partner programs.",
    color: "#2378CE",
    fields: trackonomicsFields,
    dateSemantics: "standard",
    filterCapability: {
      honored: ["date", "partner", "country", "device"],
    },
  },
  "ask-impact": {
    id: "ask-impact",
    label: "Ask Impact",
    description: "Creator-side performance — creator metrics, landing pages, and affiliate data.",
    color: "#D73184",
    fields: askImpactFields,
    dateSemantics: "standard",
    filterCapability: {
      honored: ["date", "creator_tier", "affiliate_network"],
    },
  },
  benchmark: {
    id: "benchmark",
    label: "Benchmark",
    description: "Industry benchmarks. Uses quarterly date strings — date filters are normalized.",
    color: "#7C3AED",
    fields: benchmarkFields,
    dateSemantics: "quarter-string",
    filterCapability: {
      honored: ["industry", "region"],
      normalize: { date: "to-quarter-string" },
    },
  },
};

export const ALL_MODEL_IDS: DataModelId[] = ["trackonomics", "ask-impact", "benchmark"];

export function getModel(id: DataModelId): DataModel {
  return DATA_MODELS[id];
}

export function fieldInModel(modelId: DataModelId, fieldId: string): DataField | undefined {
  return DATA_MODELS[modelId].fields.find((f) => f.id === fieldId);
}
