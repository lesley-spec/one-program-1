/*
  Data Lab V2 — Filter Resolver

  See docs/data-lab-multi-model-build-instructions.md §6.

  Pure functions only — no React. The resolver decides, per widget, whether
  each top-level filter actually applies and produces a ResolutionReason
  that the UI uses to drive the chip variant + "N filters not applied" header.
*/

import type { DataModel, DataModelId } from "./models";
import { DATA_MODELS, ALL_MODEL_IDS } from "./models";

export type ResolutionReason =
  | "applied"
  | "applied-normalized"
  | "filter-not-applied"
  | "incompatible-with-model"
  | "incompatible-with-chart";

export const REASON_COPY: Record<ResolutionReason, string> = {
  applied: "",
  "applied-normalized": "This filter was adapted to fit this model.",
  "filter-not-applied": "This model does not support this filter.",
  "incompatible-with-model": "This field isn't available in this model.",
  "incompatible-with-chart": "This field can't be used with this chart type.",
};

export interface DateRangeValue {
  start: Date;
  end: Date;
}

export interface TopLevelFilter {
  /** e.g. "date", "partner", "country" */
  id: string;
  label: string;
  /** Shape depends on filter id. For "date" it's a DateRangeValue. */
  value: unknown;
}

export interface ResolvedFilter {
  source: TopLevelFilter;
  reason: ResolutionReason;
  normalizedValue?: unknown;
}

/*
  Convert a standard date range into the list of quarter strings it overlaps.
  e.g. Feb 2026 - May 2026  ->  ["2026-Q1", "2026-Q2"]
*/
export function toQuarterStrings(range: DateRangeValue): string[] {
  const out: string[] = [];
  const start = new Date(range.start);
  const end = new Date(range.end);
  if (start > end) return out;

  let y = start.getFullYear();
  let q = Math.floor(start.getMonth() / 3) + 1;
  const endY = end.getFullYear();
  const endQ = Math.floor(end.getMonth() / 3) + 1;

  while (y < endY || (y === endY && q <= endQ)) {
    out.push(`${y}-Q${q}`);
    q += 1;
    if (q > 4) { q = 1; y += 1; }
  }
  return out;
}

export function resolveFiltersForWidget(
  topLevel: TopLevelFilter[],
  model: DataModel,
): ResolvedFilter[] {
  return topLevel.map<ResolvedFilter>((f) => {
    if (model.filterCapability.honored.includes(f.id)) {
      return { source: f, reason: "applied" };
    }
    const norm = model.filterCapability.normalize?.[f.id];
    if (norm === "to-quarter-string" && isDateRange(f.value)) {
      return {
        source: f,
        reason: "applied-normalized",
        normalizedValue: toQuarterStrings(f.value),
      };
    }
    return { source: f, reason: "filter-not-applied" };
  });
}

export function countNotApplied(resolved: ResolvedFilter[]): number {
  return resolved.filter(
    (r) => r.reason !== "applied" && r.reason !== "applied-normalized",
  ).length;
}

function isDateRange(v: unknown): v is DateRangeValue {
  return !!v && typeof v === "object"
    && "start" in (v as any) && "end" in (v as any)
    && (v as any).start instanceof Date && (v as any).end instanceof Date;
}

/* ───────────────────────────────────────────────────────────────
   Filter coverage — which models honor (natively or via normalization)
   a given top-level filter.

   Used to color-code top-level filter pills:
     - "universal"  → grey  (every model in the report supports it)
     - "single"     → that model's color
     - "partial"    → multi-color dot stack
     - "none"       → red destructive (already covered by chip reason)
   ─────────────────────────────────────────────────────────────── */

export interface FilterCoverage {
  honored: DataModelId[];   // honored natively or via normalization
  total: DataModelId[];     // the universe we considered
  kind: "universal" | "single" | "partial" | "none";
}

export function filterCoverage(
  filterId: string,
  scope: DataModelId[] = ALL_MODEL_IDS,
): FilterCoverage {
  const honored = scope.filter((id) => {
    const m = DATA_MODELS[id];
    return m.filterCapability.honored.includes(filterId)
      || !!m.filterCapability.normalize?.[filterId];
  });
  const kind: FilterCoverage["kind"] =
    honored.length === 0
      ? "none"
      : honored.length === scope.length
      ? "universal"
      : honored.length === 1
      ? "single"
      : "partial";
  return { honored, total: scope, kind };
}
