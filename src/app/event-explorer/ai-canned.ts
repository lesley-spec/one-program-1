/*
  Event Explorer (V2) — canned AI patterns.

  Per the meeting notes: "AI assist is a convenience layer, not AI-first:
  speeds up multi-step stitching, but everything must work without it."

  So this is a small set of high-value cross-source stitching shortcuts.
*/

import type { ExplorerAction, ExplorerState } from "./state";
import type { ColumnRef } from "./schema";

export interface PromptResult {
  action: ExplorerAction;
  response: string;
}

const FIELD_MAP: Record<string, ColumnRef> = {
  partner:        { sourceId: "performance", fieldId: "partner" },
  partners:       { sourceId: "performance", fieldId: "partner" },
  campaign:       { sourceId: "performance", fieldId: "campaign" },
  campaigns:      { sourceId: "performance", fieldId: "campaign" },
  status:         { sourceId: "performance", fieldId: "status" },
  creator:        { sourceId: "creator",     fieldId: "creator_name" },
  creators:       { sourceId: "creator",     fieldId: "creator_name" },
  tier:           { sourceId: "creator",     fieldId: "creator_tier" },
  platform:       { sourceId: "creator",     fieldId: "social_platform" },
  industry:       { sourceId: "benchmark",   fieldId: "industry" },
  vertical:       { sourceId: "benchmark",   fieldId: "vertical" },
  competitor:     { sourceId: "spot",        fieldId: "competitor" },
  competitors:    { sourceId: "spot",        fieldId: "competitor" },
  product:        { sourceId: "product_boost", fieldId: "product_name" },
  products:       { sourceId: "product_boost", fieldId: "product_name" },
};

const MEASURE_MAP: Record<string, ColumnRef> = {
  revenue:      { sourceId: "performance", fieldId: "revenue" },
  cost:         { sourceId: "performance", fieldId: "action_cost" },
  commission:   { sourceId: "performance", fieldId: "action_cost" },
  actions:      { sourceId: "performance", fieldId: "action_id" },
  conversions:  { sourceId: "performance", fieldId: "action_id" },
  impressions:  { sourceId: "creator",     fieldId: "impressions" },
  engagements:  { sourceId: "creator",     fieldId: "engagements" },
  followers:    { sourceId: "creator",     fieldId: "followers" },
  payout:       { sourceId: "creator",     fieldId: "creator_payout" },
  benchmark:    { sourceId: "benchmark",   fieldId: "benchmark_cpa" },
  "share of voice": { sourceId: "spot",    fieldId: "share_of_voice" },
  sov:          { sourceId: "spot",        fieldId: "share_of_voice" },
  boost:        { sourceId: "product_boost", fieldId: "boost_cost" },
  views:        { sourceId: "product_boost", fieldId: "boosted_views" },
};

function findDim(text: string): ColumnRef | null {
  const lower = text.toLowerCase();
  for (const k of Object.keys(FIELD_MAP)) if (lower.includes(k)) return FIELD_MAP[k];
  return null;
}
function findMeasure(text: string): { ref: ColumnRef; label: string } | null {
  const lower = text.toLowerCase();
  for (const k of Object.keys(MEASURE_MAP)) if (lower.includes(k)) return { ref: MEASURE_MAP[k], label: k };
  return null;
}

interface Pattern {
  match: RegExp;
  build: (m: RegExpMatchArray, state: ExplorerState) => PromptResult | null;
}

export const PROMPT_PATTERNS: Pattern[] = [
  // "stitch creator engagement onto performance" — cross-source
  {
    match: /(?:stitch|join|combine|add)\s+([a-z\s]+?)\s+(?:onto|to|with)\s+([a-z\s]+)/i,
    build: (m) => {
      const meas = findMeasure(m[1]);
      const dim = findDim(m[2]);
      if (!meas || !dim) return null;
      return {
        action: {
          type: "BATCH",
          actions: [
            { type: "ADD_COLUMN", ref: dim },
            { type: "ADD_COLUMN", ref: meas.ref },
            { type: "SET_SORT", sort: { ref: meas.ref, direction: "desc" } },
          ],
        },
        response: `Stitched ${meas.label} onto your dataset, joined on the campaign anchor.`,
      };
    },
  },
  // "top 10 partners by revenue"
  {
    match: /\btop\s+(\d+)?\s*([a-z]+?)s?\s+by\s+([a-z\s]+)/i,
    build: (m) => {
      const dim = findDim(m[2]);
      const meas = findMeasure(m[3]);
      if (!dim || !meas) return null;
      return {
        action: {
          type: "BATCH",
          actions: [
            { type: "ADD_COLUMN", ref: dim },
            { type: "ADD_COLUMN", ref: meas.ref },
            { type: "SET_SORT", sort: { ref: meas.ref, direction: "desc" } },
          ],
        },
        response: `Ranking ${m[2]} by ${meas.label}.`,
      };
    },
  },
  // "show revenue and cost by partner"
  {
    match: /(?:show|view)\s+([a-z\s]+?)\s+by\s+([a-z]+)/i,
    build: (m) => {
      const meas = findMeasure(m[1]);
      const dim = findDim(m[2]);
      if (!meas || !dim) return null;
      return {
        action: {
          type: "BATCH",
          actions: [
            { type: "ADD_COLUMN", ref: dim },
            { type: "ADD_COLUMN", ref: meas.ref },
            { type: "SET_SORT", sort: { ref: meas.ref, direction: "desc" } },
          ],
        },
        response: `Added ${meas.label} grouped by ${m[2]}.`,
      };
    },
  },
  // "compare revenue to benchmark"
  {
    match: /compare\s+(revenue|cost|actions|conversions)\s+(?:to|against|with)\s+benchmark/i,
    build: (m) => {
      const meas = findMeasure(m[1]);
      if (!meas) return null;
      return {
        action: {
          type: "BATCH",
          actions: [
            { type: "ADD_COLUMN", ref: { sourceId: "benchmark", fieldId: "industry" } },
            { type: "ADD_COLUMN", ref: meas.ref },
            { type: "ADD_COLUMN", ref: { sourceId: "benchmark", fieldId: "benchmark_cpa" } },
            { type: "ADD_COLUMN", ref: { sourceId: "benchmark", fieldId: "benchmark_roas" } },
          ],
        },
        response: `Pulled benchmark CPA and ROAS in next to your ${meas.label}.`,
      };
    },
  },
  // "switch to creator" / "use creator source"
  {
    match: /\b(switch|use)\s+(?:to\s+)?(performance|creator|benchmark|spot|product\s*boost)/i,
    build: (m) => {
      const raw = m[2].toLowerCase().replace(/\s+/g, "_");
      const id = (raw === "product_boost" ? "product_boost" : raw) as any;
      return {
        action: { type: "SET_PRIMARY_SOURCE", sourceId: id },
        response: `Now exploring the ${m[2]} source.`,
      };
    },
  },
  // "last N days"
  {
    match: /last\s+(\d+)\s+days?/i,
    build: (m) => {
      const days = parseInt(m[1], 10) || 30;
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - (days - 1));
      return {
        action: { type: "SET_DATE_RANGE", range: { start, end } },
        response: `Date range set to the last ${days} days.`,
      };
    },
  },
];

export function runPrompt(text: string, state: ExplorerState): PromptResult {
  for (const p of PROMPT_PATTERNS) {
    const m = text.match(p.match);
    if (!m) continue;
    const r = p.build(m, state);
    if (r) return r;
  }
  return {
    action: { type: "APPEND_CHAT", message: { id: String(Date.now()), role: "ai", text: "Try: \"Stitch creator engagement onto performance\", \"Compare revenue to benchmark\", \"Top 10 partners by revenue\"." } },
    response: "Try: \"Stitch creator engagement onto performance\", \"Compare revenue to benchmark\", \"Top 10 partners by revenue\".",
  };
}

export const EXAMPLE_PROMPTS = [
  "Top 10 partners by revenue",
  "Stitch creator engagements onto partners",
  "Compare revenue to benchmark",
  "Show share of voice by competitor",
  "Last 7 days",
];
