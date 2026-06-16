/*
  Data Lab V2 — Seeded templates (flat widget list, no sheets).

  Each widget has its own primary model and a list of field refs that may
  span multiple models. The "Benchmark vs Performance" template intentionally
  mixes models in a single widget to demo cross-model stitching.
*/

import type { DataModelId, FieldRef } from "./models";
import type { TopLevelFilter } from "./filters";

export interface WidgetSeed {
  id: string;
  chartType: string;
  title: string;
  primaryModelId: DataModelId;
  columns: FieldRef[];
  xAxis: FieldRef | null;
  yAxis: FieldRef[];
  filters: FieldRef[];
  showTotals: boolean;
}

export interface WorkbookTemplate {
  id: string;
  label: string;
  description: string;
  audience: string;
  widgets: WidgetSeed[];
  topLevelFilters?: TopLevelFilter[];
}

const ref = (modelId: DataModelId, fieldId: string): FieldRef => ({ modelId, fieldId });

export const TEMPLATES: WorkbookTemplate[] = [
  {
    id: "affiliate-snapshot",
    label: "Affiliate Snapshot",
    description:
      "Single-model, single-widget report — the high-level view marketing managers ask for.",
    audience: "Marketing managers · one model · no filter surprises",
    widgets: [
      {
        id: "w1",
        chartType: "data-table",
        title: "Top affiliates",
        primaryModelId: "ask-impact",
        columns: [ref("ask-impact", "affiliate_network"), ref("ask-impact", "creator_tier")],
        xAxis: null,
        yAxis: [
          ref("ask-impact", "revenue"),
          ref("ask-impact", "actions"),
          ref("ask-impact", "action_cost"),
        ],
        filters: [],
        showTotals: true,
      },
    ],
  },
  {
    id: "creator-deep-dive",
    label: "Creator Deep Dive",
    description:
      "Multiple widgets across Ask Impact and Trackonomics. Each widget picks its own primary model.",
    audience: "Analytical users · compatible models · clean cross-tab demo",
    widgets: [
      {
        id: "w1",
        chartType: "area",
        title: "Creator engagement over time",
        primaryModelId: "ask-impact",
        columns: [],
        xAxis: ref("ask-impact", "full_date"),
        yAxis: [ref("ask-impact", "engagement_rate"), ref("ask-impact", "landing_page_views")],
        filters: [],
        showTotals: false,
      },
      {
        id: "w2",
        chartType: "horizontal-bar",
        title: "Revenue by partner",
        primaryModelId: "trackonomics",
        columns: [],
        xAxis: ref("trackonomics", "partner"),
        yAxis: [ref("trackonomics", "revenue")],
        filters: [],
        showTotals: false,
      },
      {
        id: "w3",
        chartType: "data-table",
        title: "Top creators",
        primaryModelId: "ask-impact",
        columns: [ref("ask-impact", "creator_name"), ref("ask-impact", "creator_tier")],
        xAxis: null,
        yAxis: [ref("ask-impact", "revenue"), ref("ask-impact", "actions")],
        filters: [],
        showTotals: true,
      },
    ],
  },
  {
    id: "benchmark-vs-performance",
    label: "Benchmark vs Performance",
    description:
      "Mixed-model widget: actuals from Ask Impact next to industry benchmarks from Benchmark in the same chart. Date filter is normalized for Benchmark.",
    audience: "Analytical users · mixed models inside one widget · filter coverage demo",
    widgets: [
      {
        id: "w1",
        chartType: "vertical-bar",
        title: "Our CPA vs industry benchmark",
        primaryModelId: "ask-impact",
        columns: [],
        xAxis: ref("ask-impact", "creator_tier"),
        yAxis: [
          ref("ask-impact", "action_cost"),
          ref("benchmark", "benchmark_cpa"),
        ],
        filters: [],
        showTotals: false,
      },
      {
        id: "w2",
        chartType: "data-table",
        title: "Industry benchmarks",
        primaryModelId: "benchmark",
        columns: [ref("benchmark", "industry"), ref("benchmark", "vertical"), ref("benchmark", "quarter")],
        xAxis: null,
        yAxis: [
          ref("benchmark", "benchmark_cpa"),
          ref("benchmark", "benchmark_roas"),
          ref("benchmark", "benchmark_conversion_rate"),
        ],
        filters: [],
        showTotals: false,
      },
    ],
    /*
      Pre-seed a partial-coverage filter so the demo visibly shows the
      color-coded top-level filter pattern (creator_tier is only honored
      by Ask Impact, so the pill renders in the Ask Impact color).
    */
    topLevelFilters: [
      { id: "creator_tier", label: "Creator tier: Top 10%", value: "top-10" },
    ],
  },
];

export function getTemplate(id: string): WorkbookTemplate | undefined {
  return TEMPLATES.find((t) => t.id === id);
}
