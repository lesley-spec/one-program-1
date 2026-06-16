/*
  Data Lab V2 — Single-canvas, per-widget-model report builder.

  - No sheets. One report = one canvas with N widgets.
  - Each widget owns a primary model (selectable in its config panel) but
    can mix dimensions and measures from any model (cross-model fields).
  - Each chip is colored by its source model.
  - Top-level filter pills are color-coded by which models honor them
    (grey if universal, model color if single, multi-dot if partial).
*/

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "./ui/dialog";
import { DateRangePicker, type DateRange } from "./DateRangePicker";
import {
  DATA_MODELS, ALL_MODEL_IDS, getModel, refsEqual,
  type DataModel, type DataModelId, type DataField, type FieldRef,
} from "../data-lab/models";
import {
  resolveFiltersForWidget, countNotApplied, filterCoverage,
  type TopLevelFilter, type ResolutionReason,
} from "../data-lab/filters";
import { CHART_TYPES, getChartType, type ChartTypeDef } from "../data-lab/chart-types";
import { ResolvedChip, FieldTypeBadge, FiltersNotAppliedPill, ModelDot, TopLevelFilterPill } from "../data-lab/chips";
import { TEMPLATES, getTemplate, type WorkbookTemplate, type WidgetSeed } from "../data-lab/templates";

const FONT = "'Sarabun', sans-serif";

const CHART_COLORS = [
  "var(--chart-1)", "var(--accent)", "var(--chart-3)", "var(--chart-4)", "#D73184", "#2378CE",
];

/* ═══════════════════════════════════════════════════════════
   Workbook State Model
   ═══════════════════════════════════════════════════════════ */

interface Widget {
  id: string;
  chartType: string;
  title: string;
  primaryModelId: DataModelId;
  columns: FieldRef[];
  filters: FieldRef[];
  xAxis: FieldRef | null;
  yAxis: FieldRef[];
  showTotals: boolean;
}

interface WorkbookState {
  reportName: string;
  topLevelFilters: TopLevelFilter[];
  dateRange: DateRange;
  widgets: Widget[];
  activeWidgetId: string | null;
}

let widgetSeq = 1;
function nextWidgetId() {
  return `w_${widgetSeq++}_${Math.random().toString(36).slice(2, 6)}`;
}

function defaultWidgetForModel(chartType: string, modelId: DataModelId, title?: string): Widget {
  const model = DATA_MODELS[modelId];
  const measures = model.fields.filter((f) => f.role === "measure");
  const dimensions = model.fields.filter((f) => f.role === "dimension");
  const dateField = dimensions.find((f) => f.type === "date");
  const firstDim = dimensions.find((f) => f.type !== "date") || dimensions[0];
  const refOf = (fieldId: string): FieldRef => ({ modelId, fieldId });

  const xAxis =
    chartType === "data-table" || chartType === "number" || chartType === "donut"
      ? null
      : dateField ? refOf(dateField.id) : firstDim ? refOf(firstDim.id) : null;

  return {
    id: nextWidgetId(),
    chartType,
    title: title || "Widget",
    primaryModelId: modelId,
    columns: chartType === "data-table" && firstDim ? [refOf(firstDim.id)] : [],
    filters: [],
    xAxis,
    yAxis: measures.slice(0, 2).map((m) => refOf(m.id)),
    showTotals: chartType === "data-table",
  };
}

function blankWorkbook(): WorkbookState {
  const widget = defaultWidgetForModel("area", "ask-impact");
  return {
    reportName: "Untitled Report",
    topLevelFilters: [],
    dateRange: {
      start: (() => { const d = new Date(); d.setDate(d.getDate() - 29); return d; })(),
      end: new Date(),
    },
    widgets: [widget],
    activeWidgetId: widget.id,
  };
}

function buildWorkbookFromTemplate(t: WorkbookTemplate): WorkbookState {
  const ws = blankWorkbook();
  ws.reportName = t.label;
  ws.widgets = t.widgets.map<Widget>((w: WidgetSeed) => ({
    id: nextWidgetId(),
    chartType: w.chartType,
    title: w.title,
    primaryModelId: w.primaryModelId,
    columns: w.columns.map((r) => ({ ...r })),
    filters: w.filters.map((r) => ({ ...r })),
    xAxis: w.xAxis ? { ...w.xAxis } : null,
    yAxis: w.yAxis.map((r) => ({ ...r })),
    showTotals: w.showTotals,
  }));
  ws.activeWidgetId = ws.widgets[0]?.id || null;
  ws.topLevelFilters = t.topLevelFilters ? [...t.topLevelFilters] : [];
  return ws;
}

/* ═══════════════════════════════════════════════════════════
   Mock data generation (per-model)
   ═══════════════════════════════════════════════════════════ */

function valueBase(fieldId: string): number {
  switch (fieldId) {
    case "clicks": return 40000;
    case "impressions": return 70000;
    case "revenue": return 18000;
    case "actions": return 1200;
    case "action_cost": return 12;
    case "cpa": return 14;
    case "cpc": return 1.5;
    case "cpm": return 8;
    case "aov": return 85;
    case "roas": return 4.5;
    case "conversion_rate": return 2.4;
    case "engagement_rate": return 5.8;
    case "creator_followers": return 250000;
    case "landing_page_views": return 18000;
    case "benchmark_cpa": return 18;
    case "benchmark_roas": return 3.8;
    case "benchmark_conversion_rate": return 1.9;
    case "industry_revenue_index": return 112;
    default: return 5000;
  }
}

function categoryLabelsFor(field: DataField | undefined): string[] {
  if (!field) return ["Group A", "Group B", "Group C", "Group D"];
  if (field.id === "partner") return ["CNN Digital", "BuzzFeed", "Wirecutter", "RetailMeNot", "Honey", "Skimlinks"];
  if (field.id === "creator_name") return ["Mara K.", "Devon R.", "Yuki T.", "Priya N.", "Liam O.", "Sasha B."];
  if (field.id === "creator_tier") return ["Top 10%", "11-25%", "26-50%", "51-100%"];
  if (field.id === "affiliate_network") return ["Awin", "ShareASale", "Skimlinks", "Impact", "CJ"];
  if (field.id === "industry") return ["Retail", "Travel", "Finance", "Tech", "Food & Bev"];
  if (field.id === "vertical") return ["Apparel", "Electronics", "Home", "Beauty"];
  if (field.id === "quarter") return ["2025-Q4", "2026-Q1", "2026-Q2"];
  if (field.id === "country") return ["US", "UK", "DE", "FR", "CA", "AU"];
  if (field.id === "device") return ["Desktop", "Mobile", "Tablet"];
  if (field.id === "channel") return ["Search", "Social", "Email", "Display"];
  if (field.id === "region") return ["AMER", "EMEA", "APAC"];
  return ["Group A", "Group B", "Group C", "Group D"];
}

function isDateField(ref: FieldRef | null | undefined): boolean {
  if (!ref) return false;
  const f = DATA_MODELS[ref.modelId].fields.find((x) => x.id === ref.fieldId);
  return f?.type === "date";
}

function genTimeData(primaryModelId: DataModelId, yFields: FieldRef[]) {
  const m = getModel(primaryModelId);
  const xLabels = m.dateSemantics === "quarter-string"
    ? ["2025-Q2", "2025-Q3", "2025-Q4", "2026-Q1", "2026-Q2"]
    : ["May 1", "May 5", "May 9", "May 13", "May 17", "May 21", "May 25", "May 30"];
  return xLabels.map((x, i) => {
    const row: Record<string, any> = { name: x };
    yFields.forEach((y) => {
      const base = valueBase(y.fieldId);
      const variance = base * 0.4;
      row[refKey(y)] = round2(base + Math.sin(i * 0.8) * variance + Math.random() * variance * 0.3);
    });
    return row;
  });
}

function genCategoryData(xField: FieldRef | null, yFields: FieldRef[], primaryModelId: DataModelId) {
  const dimField = xField
    ? DATA_MODELS[xField.modelId].fields.find((f) => f.id === xField.fieldId)
    : DATA_MODELS[primaryModelId].fields.find((f) => f.role === "dimension");
  const labels = categoryLabelsFor(dimField);
  return labels.map((label, i) => {
    const row: Record<string, any> = { name: label };
    yFields.forEach((y) => {
      const base = valueBase(y.fieldId);
      const variance = base * 0.5;
      row[refKey(y)] = round2(base + Math.cos(i * 1.1) * variance + Math.random() * variance * 0.3);
    });
    return row;
  });
}

function round2(n: number) {
  return Math.abs(n) < 100 ? Math.round(n * 10) / 10 : Math.round(n);
}

function refKey(r: FieldRef): string { return `${r.modelId}:${r.fieldId}`; }

function fieldOfRef(ref: FieldRef): DataField | undefined {
  return DATA_MODELS[ref.modelId].fields.find((f) => f.id === ref.fieldId);
}
function fieldLabel(ref: FieldRef): string {
  return fieldOfRef(ref)?.label || ref.fieldId;
}

/* ═══════════════════════════════════════════════════════════
   Widget chart renderer
   ═══════════════════════════════════════════════════════════ */

function WidgetChart({ widget }: { widget: Widget }) {
  const yFields = widget.yAxis.length
    ? widget.yAxis
    : [{ modelId: widget.primaryModelId, fieldId: getModel(widget.primaryModelId).fields.find((f) => f.role === "measure")?.id || "revenue" }];
  const isTimeSeries = isDateField(widget.xAxis);

  const data = useMemo(() => {
    if (widget.chartType === "donut" || widget.chartType === "data-table" || widget.chartType === "number") {
      const dimRef = widget.columns[0] || null;
      return genCategoryData(dimRef, yFields, widget.primaryModelId);
    }
    if (isTimeSeries) return genTimeData(widget.primaryModelId, yFields);
    return genCategoryData(widget.xAxis, yFields, widget.primaryModelId);
  }, [widget.chartType, refKey(widget.xAxis || { modelId: "trackonomics", fieldId: "" }), widget.columns.map(refKey).join(","), yFields.map(refKey).join(","), widget.primaryModelId]);

  const tooltipStyle: React.CSSProperties = {
    background: "var(--card)", border: "1px solid var(--border)",
    borderRadius: "var(--radius)", fontFamily: FONT, fontSize: 12,
  };
  const tickStyle = { fill: "var(--muted-foreground)", fontFamily: FONT, fontSize: 11 };
  const fmtNum = (v: number) => (Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v));
  const seriesColor = (y: FieldRef) => DATA_MODELS[y.modelId].color;

  if (widget.chartType === "number") {
    const yRef = yFields[0];
    const total = data.reduce((s, r) => s + (r[refKey(yRef)] || 0), 0);
    return (
      <div className="flex flex-col items-center justify-center h-full gap-[4px]">
        <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color: "var(--foreground)" }}>
          {total.toLocaleString()}
        </span>
        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
          {fieldLabel(yRef)}
        </span>
      </div>
    );
  }

  if (widget.chartType === "data-table") {
    const cols = widget.columns;
    const totals = widget.showTotals
      ? yFields.reduce<Record<string, number>>((acc, y) => {
          acc[refKey(y)] = data.reduce((s, r) => s + (r[refKey(y)] || 0), 0);
          return acc;
        }, {})
      : null;
    return (
      <div className="w-full h-full overflow-auto">
        <table className="w-full border-collapse" style={{ fontSize: "var(--text-sm)", fontFamily: FONT }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {cols.map((c) => (
                <th key={refKey(c)} className="text-left px-[8px] py-[6px]" style={{ fontWeight: 600, color: DATA_MODELS[c.modelId].color }}>
                  {fieldLabel(c)}
                </th>
              ))}
              {yFields.map((y) => (
                <th key={refKey(y)} className="text-left px-[8px] py-[6px]" style={{ fontWeight: 600, color: DATA_MODELS[y.modelId].color }}>
                  {fieldLabel(y)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                {cols.map((c) => (
                  <td key={refKey(c)} className="px-[8px] py-[5px]" style={{ color: "var(--foreground)" }}>{row.name}</td>
                ))}
                {yFields.map((y) => (
                  <td key={refKey(y)} className="px-[8px] py-[5px]" style={{ color: "var(--foreground)" }}>
                    {(row[refKey(y)] || 0).toLocaleString()}
                  </td>
                ))}
              </tr>
            ))}
            {totals && (
              <tr style={{ background: "var(--muted)" }}>
                {cols.map((c, i) => (
                  <td key={refKey(c)} className="px-[8px] py-[6px]" style={{ fontWeight: 700, color: "var(--foreground)" }}>
                    {i === 0 ? "Total" : ""}
                  </td>
                ))}
                {yFields.map((y) => (
                  <td key={refKey(y)} className="px-[8px] py-[6px]" style={{ fontWeight: 700, color: "var(--foreground)" }}>
                    {(totals[refKey(y)] || 0).toLocaleString()}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  if (widget.chartType === "donut") {
    const yRef = yFields[0];
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <PieChart>
          <Pie data={data} dataKey={refKey(yRef)} nameKey="name" cx="50%" cy="50%" innerRadius="40%" outerRadius="70%" paddingAngle={2}>
            {data.map((_, i) => (<Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (widget.chartType === "area") {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <AreaChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <defs>
            {yFields.map((y) => {
              const c = seriesColor(y);
              return (
                <linearGradient key={refKey(y)} id={`grad_${widget.id}_${refKey(y).replace(/[^a-z0-9]/gi, "")}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={c} stopOpacity={0.05} />
                </linearGradient>
              );
            })}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
          <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
          <Tooltip contentStyle={tooltipStyle} />
          {yFields.map((y) => (
            <Area
              key={refKey(y)}
              type="monotone"
              dataKey={refKey(y)}
              stroke={seriesColor(y)}
              strokeWidth={2}
              fill={`url(#grad_${widget.id}_${refKey(y).replace(/[^a-z0-9]/gi, "")})`}
              name={fieldLabel(y)}
            />
          ))}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: 11 }} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (widget.chartType === "line") {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
          <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
          <Tooltip contentStyle={tooltipStyle} />
          {yFields.map((y) => (
            <Line key={refKey(y)} type="monotone" dataKey={refKey(y)} stroke={seriesColor(y)} strokeWidth={2} dot={{ r: 3 }} name={fieldLabel(y)} />
          ))}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: 11 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (widget.chartType === "horizontal-bar") {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
          <YAxis type="category" dataKey="name" tick={tickStyle} axisLine={false} tickLine={false} width={90} />
          <Tooltip contentStyle={tooltipStyle} />
          {yFields.map((y) => (
            <Bar key={refKey(y)} dataKey={refKey(y)} fill={seriesColor(y)} radius={[0, 4, 4, 0]} name={fieldLabel(y)} />
          ))}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: 11 }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  // Default vertical bar
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
      <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="name" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
        <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
        <Tooltip contentStyle={tooltipStyle} />
        {yFields.map((y) => (
          <Bar key={refKey(y)} dataKey={refKey(y)} fill={seriesColor(y)} radius={[4, 4, 0, 0]} name={fieldLabel(y)} />
        ))}
        <Legend wrapperStyle={{ fontFamily: FONT, fontSize: 11 }} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   Drop Zone (click-to-add via field list)
   ═══════════════════════════════════════════════════════════ */

interface ZoneItem { ref: FieldRef; reason: ResolutionReason; }

function DropZone({
  label,
  items,
  onRemove,
  placeholder,
}: {
  label: string;
  items: ZoneItem[];
  onRemove: (ref: FieldRef) => void;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <span
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          fontWeight: 700,
          color: "var(--muted-foreground)",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div
        className="flex flex-wrap gap-[6px] min-h-[36px] p-[6px]"
        style={{ border: "1px dashed var(--border)", borderRadius: 6 }}
      >
        {items.length === 0 && (
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              color: "var(--muted-foreground)",
              padding: "2px 4px",
            }}
          >
            {placeholder}
          </span>
        )}
        {items.map((it) => (
          <ResolvedChip
            key={refKey(it.ref)}
            label={fieldLabel(it.ref)}
            reason={it.reason}
            modelId={it.ref.modelId}
            onRemove={() => onRemove(it.ref)}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Add Widget Dialog (model + chart type)
   ═══════════════════════════════════════════════════════════ */

function AddWidgetDialog({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (modelId: DataModelId, chartType: string) => void;
}) {
  const [modelId, setModelId] = useState<DataModelId>("ask-impact");
  const [chartType, setChartType] = useState<string>("area");

  useEffect(() => { if (open) { setModelId("ask-impact"); setChartType("area"); } }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Add a widget</DialogTitle>
          <DialogDescription>
            Pick a primary model and a chart type. You can mix in fields from other
            models after the widget is created.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-[6px]">
          <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, letterSpacing: "0.5px", color: "var(--muted-foreground)", textTransform: "uppercase" }}>
            Primary model
          </span>
          <div className="grid gap-[8px]" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {ALL_MODEL_IDS.map((id) => {
              const m = DATA_MODELS[id];
              const active = modelId === id;
              return (
                <button
                  key={id}
                  onClick={() => setModelId(id)}
                  className="text-left p-[10px] cursor-pointer transition-colors"
                  style={{
                    border: active ? `1.5px solid ${m.color}` : "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    background: active ? `${m.color}15` : "var(--card)",
                  }}
                >
                  <div className="flex items-center gap-[6px]">
                    <ModelDot modelId={id} />
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>
                      {m.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, letterSpacing: "0.5px", color: "var(--muted-foreground)", textTransform: "uppercase" }}>
            Chart type
          </span>
          <div className="flex flex-wrap gap-[8px]">
            {CHART_TYPES.map((ct) => {
              const active = chartType === ct.id;
              return (
                <button
                  key={ct.id}
                  onClick={() => setChartType(ct.id)}
                  className="flex flex-col items-center justify-center gap-[4px] cursor-pointer transition-colors"
                  style={{
                    width: 96,
                    height: 76,
                    borderRadius: "var(--radius)",
                    background: active ? "var(--muted)" : "var(--background)",
                    border: active ? "1px solid var(--foreground)" : "1px solid var(--border)",
                  }}
                >
                  <svg className="size-[24px]" viewBox={ct.viewBox} fill="none">
                    {ct.paths.map((p, i) => (
                      <path key={i} d={p.d} fill="var(--foreground)" clipRule={p.clipRule as any} fillRule={p.fillRule as any} />
                    ))}
                  </svg>
                  <span style={{ fontFamily: FONT, fontSize: 11 }}>{ct.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <DialogFooter>
          <button
            onClick={() => { onConfirm(modelId, chartType); onOpenChange(false); }}
            className="h-[34px] px-[14px] cursor-pointer"
            style={{
              fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-button)",
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              border: "none",
            }}
          >
            Add widget
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ═══════════════════════════════════════════════════════════
   Combine Sheets stub (label kept for roadmap demo)
   ═══════════════════════════════════════════════════════════ */

function FutureStitchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Server-side cross-model stitching — coming soon</DialogTitle>
          <DialogDescription>
            You can already mix dimensions and measures from different models in one
            widget — values are rendered independently per series. Server-side join
            semantics are what's still being designed:
          </DialogDescription>
        </DialogHeader>
        <ul
          className="flex flex-col gap-[6px] pl-[18px]"
          style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)", listStyle: "disc" }}
        >
          <li>Pick join keys per model pair (e.g. partner, creator, quarter).</li>
          <li>Define conflict rules for fields that exist on both sides.</li>
          <li>Decide whether normalized dates should align to the coarser grain.</li>
        </ul>
        <DialogFooter>
          <button
            onClick={() => onOpenChange(false)}
            className="h-[34px] px-[14px] cursor-pointer"
            style={{
              fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-button)",
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              border: "none",
            }}
          >
            Got it
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Workbook
   ═══════════════════════════════════════════════════════════ */

export function DataLabWorkbook({ templateId }: { templateId?: string }) {
  const navigate = useNavigate();
  const [state, setState] = useState<WorkbookState>(() => {
    if (templateId) {
      const t = getTemplate(templateId);
      if (t) return buildWorkbookFromTemplate(t);
    }
    return blankWorkbook();
  });
  const [addWidgetOpen, setAddWidgetOpen] = useState(false);
  const [stitchOpen, setStitchOpen] = useState(false);
  const [fieldSearch, setFieldSearch] = useState("");
  const [editingName, setEditingName] = useState(false);

  const activeWidget = state.widgets.find((w) => w.id === state.activeWidgetId) || state.widgets[0] || null;
  const activeModel = activeWidget ? getModel(activeWidget.primaryModelId) : null;

  /* Resolved top-level filters for the active widget (drives the
     "N filters not applied" indicator on each widget header). */
  const activeWidgetResolved = useMemo(() => {
    if (!activeModel) return [];
    const dateFilter: TopLevelFilter = {
      id: "date",
      label: `Date: ${state.dateRange.start.toLocaleDateString()} – ${state.dateRange.end.toLocaleDateString()}`,
      value: state.dateRange,
    };
    return resolveFiltersForWidget([dateFilter, ...state.topLevelFilters], activeModel);
  }, [activeModel?.id, state.dateRange, state.topLevelFilters.length]);

  /* Active models in the report — for filter coverage scoring. */
  const activeModelIds = useMemo<DataModelId[]>(() => {
    const set = new Set<DataModelId>();
    state.widgets.forEach((w) => {
      set.add(w.primaryModelId);
      [...w.columns, ...w.yAxis, ...w.filters, ...(w.xAxis ? [w.xAxis] : [])].forEach((r) => set.add(r.modelId));
    });
    return Array.from(set);
  }, [state.widgets]);

  /* ── Updaters ────────────────────────────────────────────── */
  const updateWidget = (id: string, patch: Partial<Widget>) =>
    setState((s) => ({ ...s, widgets: s.widgets.map((w) => (w.id === id ? { ...w, ...patch } : w)) }));

  const addWidget = (modelId: DataModelId, chartType: string) => {
    const w = defaultWidgetForModel(chartType, modelId);
    setState((s) => ({ ...s, widgets: [...s.widgets, w], activeWidgetId: w.id }));
  };
  const removeWidget = (id: string) => {
    setState((s) => {
      if (s.widgets.length === 1) return s;
      const widgets = s.widgets.filter((w) => w.id !== id);
      return {
        ...s,
        widgets,
        activeWidgetId: s.activeWidgetId === id ? widgets[0]?.id || null : s.activeWidgetId,
      };
    });
  };
  const changeWidgetModel = (id: string, modelId: DataModelId) => {
    // Soft change: keep cross-model fields, just change the primary anchor.
    // Native fields of the old primary model that no longer make sense
    // (e.g. an x-axis dimension that doesn't exist anywhere) are preserved
    // and visibly shown as "incompatible" via chip reason.
    updateWidget(id, { primaryModelId: modelId });
  };

  /* ── Field list ──────────────────────────────────────────── */
  const allFieldsByModel = useMemo(() => {
    const q = fieldSearch.toLowerCase();
    return ALL_MODEL_IDS.map((mid) => {
      const m = DATA_MODELS[mid];
      const fields = q ? m.fields.filter((f) => f.label.toLowerCase().includes(q)) : m.fields;
      return { model: m, fields };
    });
  }, [fieldSearch]);

  if (!activeWidget || !activeModel) return null;

  /* Per-chip reason for the active widget. Cross-model fields are allowed —
     a field is "applied" if it conforms to the chart's expected role. */
  const chartAllowsField = (chartType: string, field: DataField, role: "x" | "y" | "col"): boolean => {
    if ((chartType === "data-table" || chartType === "number") && role === "x") return false;
    if (role === "y") return field.role === "measure";
    if (role === "x" || role === "col") return field.role === "dimension";
    return true;
  };
  const chipReason = (ref: FieldRef, role: "x" | "y" | "col" | "filter"): ResolutionReason => {
    const field = fieldOfRef(ref);
    if (!field) return "incompatible-with-model";
    if (role === "filter") return "applied";
    if (!chartAllowsField(activeWidget.chartType, field, role)) return "incompatible-with-chart";
    return "applied";
  };

  const notAppliedCount = countNotApplied(activeWidgetResolved);

  /* Add a field to the right zone for the active widget. Picks the best zone
     based on the field role unless the user explicitly chose one. */
  const addFieldToWidget = (ref: FieldRef, zone: "auto" | "x" | "y" | "col" | "filter") => {
    const field = fieldOfRef(ref);
    if (!field) return;
    const isMeasure = field.role === "measure";
    const target =
      zone === "auto"
        ? isMeasure
          ? "y"
          : activeWidget.chartType === "data-table" || activeWidget.chartType === "number"
          ? "col"
          : "x"
        : zone;
    const w = activeWidget;
    const alreadyIn = (arr: FieldRef[]) => arr.some((r) => refsEqual(r, ref));
    if (target === "y" && !alreadyIn(w.yAxis)) updateWidget(w.id, { yAxis: [...w.yAxis, ref] });
    else if (target === "x") updateWidget(w.id, { xAxis: ref });
    else if (target === "col" && !alreadyIn(w.columns)) updateWidget(w.id, { columns: [...w.columns, ref] });
    else if (target === "filter" && !alreadyIn(w.filters)) updateWidget(w.id, { filters: [...w.filters, ref] });
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* ═══ Top Bar ═══ */}
      <div
        className="flex items-center justify-between px-[20px] h-[52px] shrink-0"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--card)" }}
      >
        <div className="flex items-center gap-[12px]">
          <button
            onClick={() => navigate("/reports/data-lab-v2")}
            className="cursor-pointer flex items-center gap-[6px] hover:underline"
            style={{
              fontFamily: FONT, fontSize: "var(--text-sm)",
              color: "var(--muted-foreground)", background: "none", border: "none", padding: 0,
            }}
          >
            ← Data Lab V2
          </button>
          <span style={{ color: "var(--muted-foreground)" }}>/</span>
          {editingName ? (
            <input
              autoFocus
              value={state.reportName}
              onChange={(e) => setState((s) => ({ ...s, reportName: e.target.value }))}
              onBlur={() => setEditingName(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditingName(false)}
              className="bg-transparent text-foreground outline-none"
              style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, width: 280 }}
            />
          ) : (
            <button
              onClick={() => setEditingName(true)}
              className="cursor-pointer hover:underline"
              style={{
                fontFamily: FONT, fontSize: 18, fontWeight: 700,
                color: "var(--foreground)", background: "none", border: "none", padding: 0,
              }}
            >
              {state.reportName}
            </button>
          )}
        </div>
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => setStitchOpen(true)}
            className="h-[32px] px-[14px] cursor-pointer hover:bg-muted/40"
            style={{
              fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-button)", border: "1px solid var(--border)",
              background: "var(--card)", color: "var(--foreground)",
            }}
          >
            About stitching
          </button>
          <button
            className="h-[32px] px-[14px] cursor-pointer hover:bg-muted/40"
            style={{
              fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-button)", border: "1px solid var(--border)",
              background: "var(--card)", color: "var(--foreground)",
            }}
          >
            Save
          </button>
          <button
            className="h-[32px] px-[14px] cursor-pointer"
            style={{
              fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)",
              borderRadius: "var(--radius-button)",
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              border: "none",
            }}
          >
            Share
          </button>
        </div>
      </div>

      {/* ═══ Top-level filter bar ═══ */}
      <div
        className="flex items-center gap-[10px] px-[20px] py-[10px] shrink-0 flex-wrap"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--card)" }}
      >
        <DateRangePicker value={state.dateRange} onChange={(r) => setState((s) => ({ ...s, dateRange: r }))} />

        {/* Top-level filter pills, color-coded by coverage across the active models */}
        {state.topLevelFilters.map((f, i) => {
          const cov = filterCoverage(f.id, activeModelIds);
          return (
            <TopLevelFilterPill
              key={`${f.id}_${i}`}
              label={f.label}
              coverage={cov}
              onRemove={() =>
                setState((s) => ({
                  ...s,
                  topLevelFilters: s.topLevelFilters.filter((_, idx) => idx !== i),
                }))
              }
            />
          );
        })}

        {/* Quick-add suggested filters, each color-coded by coverage */}
        <SuggestedFilterButton
          filter={{ id: "partner", label: "Partner: Top 5", value: "top-5" }}
          activeModelIds={activeModelIds}
          onAdd={(f) => setState((s) => ({ ...s, topLevelFilters: [...s.topLevelFilters, f] }))}
        />
        <SuggestedFilterButton
          filter={{ id: "creator_tier", label: "Creator tier: Top 10%", value: "top-10" }}
          activeModelIds={activeModelIds}
          onAdd={(f) => setState((s) => ({ ...s, topLevelFilters: [...s.topLevelFilters, f] }))}
        />
        <SuggestedFilterButton
          filter={{ id: "industry", label: "Industry: Retail", value: "retail" }}
          activeModelIds={activeModelIds}
          onAdd={(f) => setState((s) => ({ ...s, topLevelFilters: [...s.topLevelFilters, f] }))}
        />

        <span style={{ marginLeft: "auto" }} />
        <button
          onClick={() => setState((s) => ({ ...s, topLevelFilters: [] }))}
          className="cursor-pointer hover:underline"
          style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)", background: "none", border: "none" }}
        >
          Clear all
        </button>
      </div>

      {/* ═══ Main area ═══ */}
      <div className="flex flex-1 overflow-hidden">
        {/* Canvas */}
        <div
          className="flex-1 overflow-auto relative"
          style={{
            background: "var(--background)",
            backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          onClick={() => setState((s) => ({ ...s, activeWidgetId: null }))}
        >
          <div className="flex flex-col gap-[16px] p-[20px]">
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: "var(--foreground)" }}>
                Report
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); setAddWidgetOpen(true); }}
                className="h-[28px] px-[12px] cursor-pointer hover:bg-muted/40"
                style={{
                  fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)",
                  borderRadius: "var(--radius-button)", border: "1px solid var(--border)",
                  background: "var(--card)", color: "var(--foreground)",
                }}
              >
                + Add widget
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              {state.widgets.map((w) => {
                const isSelected = state.activeWidgetId === w.id;
                const widgetModel = getModel(w.primaryModelId);
                // Per-widget filter resolution for the header pill
                const resolved = resolveFiltersForWidget(
                  [
                    {
                      id: "date",
                      label: "Date",
                      value: state.dateRange,
                    },
                    ...state.topLevelFilters,
                  ],
                  widgetModel,
                );
                const wNotApplied = countNotApplied(resolved);
                // Distinct models used in this widget
                const widgetModelIds = new Set<DataModelId>([w.primaryModelId]);
                [...w.columns, ...w.yAxis, ...w.filters, ...(w.xAxis ? [w.xAxis] : [])]
                  .forEach((r) => widgetModelIds.add(r.modelId));
                return (
                  <div
                    key={w.id}
                    onClick={(e) => { e.stopPropagation(); setState((s) => ({ ...s, activeWidgetId: w.id })); }}
                    className="flex flex-col cursor-pointer select-none"
                    style={{
                      background: "var(--card)",
                      border: isSelected ? "2px solid var(--accent)" : "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      boxShadow: isSelected ? "0 0 0 3px rgba(0,119,219,0.15)" : "var(--elevation-sm)",
                      minHeight: 360,
                    }}
                  >
                    <div
                      className="flex items-center justify-between px-[12px] py-[8px] shrink-0"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <div className="flex items-center gap-[10px]">
                        <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)" }}>
                          {w.title}
                        </span>
                        <span className="inline-flex items-center gap-[4px]">
                          {Array.from(widgetModelIds).map((mid) => (
                            <span
                              key={mid}
                              className="inline-flex items-center gap-[4px] h-[20px] px-[6px]"
                              style={{
                                background: `${DATA_MODELS[mid].color}15`,
                                color: DATA_MODELS[mid].color,
                                border: `1px solid ${DATA_MODELS[mid].color}40`,
                                borderRadius: "var(--radius-button)",
                                fontFamily: FONT, fontSize: 10, fontWeight: 700, letterSpacing: "0.3px",
                              }}
                            >
                              <ModelDot modelId={mid} size={6} />
                              {DATA_MODELS[mid].label}
                            </span>
                          ))}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <FiltersNotAppliedPill count={wNotApplied} />
                        <button
                          onClick={(e) => { e.stopPropagation(); removeWidget(w.id); }}
                          className="size-[24px] cursor-pointer hover:bg-destructive/20 flex items-center justify-center"
                          style={{
                            background: "none", border: "none",
                            color: "var(--muted-foreground)", borderRadius: 4, fontFamily: FONT, fontSize: 14,
                          }}
                          title="Remove widget"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 min-h-[300px] min-w-0 px-[8px] py-[8px]">
                      <WidgetChart widget={w} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right sidebar — widget config */}
        <div
          className="w-[340px] shrink-0 flex flex-col overflow-hidden"
          style={{ borderLeft: "1px solid var(--border)", background: "var(--card)" }}
        >
          <div className="flex items-center justify-between px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex flex-col">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>
                {getChartType(activeWidget.chartType)?.label || activeWidget.chartType}
              </span>
              <span style={{ fontFamily: FONT, fontSize: 11, color: "var(--muted-foreground)" }}>
                Widget config
              </span>
            </div>
            <FiltersNotAppliedPill count={notAppliedCount} />
          </div>

          {/* Chart type strip */}
          <div className="px-[12px] py-[10px] flex flex-wrap gap-[4px]" style={{ borderBottom: "1px solid var(--border)" }}>
            {CHART_TYPES.map((ct: ChartTypeDef) => {
              const active = activeWidget.chartType === ct.id;
              return (
                <button
                  key={ct.id}
                  onClick={() => updateWidget(activeWidget.id, { chartType: ct.id })}
                  className="flex items-center justify-center size-[32px] cursor-pointer transition-colors"
                  title={ct.label}
                  style={{
                    borderRadius: "var(--radius)",
                    border: active ? "1.5px solid var(--accent)" : "1px solid transparent",
                    background: active ? "var(--muted)" : "transparent",
                  }}
                >
                  <svg className="size-[18px]" viewBox={ct.viewBox} fill="none">
                    {ct.paths.map((p, i) => (
                      <path key={i} d={p.d} fill={active ? "var(--accent)" : "var(--foreground)"} clipRule={p.clipRule as any} fillRule={p.fillRule as any} />
                    ))}
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Scrollable config */}
          <div className="flex-1 overflow-y-auto px-[16px] py-[12px] flex flex-col gap-[16px]">

            {/* Model selector */}
            <div className="flex flex-col gap-[6px]">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                Model
              </span>
              <ModelSelect
                value={activeWidget.primaryModelId}
                onChange={(id) => changeWidgetModel(activeWidget.id, id)}
              />
              <span style={{ fontFamily: FONT, fontSize: 11, color: "var(--muted-foreground)" }}>
                Primary model · you can also drop in fields from any other model below.
              </span>
            </div>

            {/* Widget title */}
            <div className="flex flex-col gap-[4px]">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Widget Name
              </span>
              <input
                value={activeWidget.title}
                onChange={(e) => updateWidget(activeWidget.id, { title: e.target.value })}
                className="w-full h-[32px] px-[10px] bg-card text-foreground"
                style={{ fontFamily: FONT, fontSize: "var(--text-base)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
              />
            </div>

            <DropZone
              label="Columns"
              items={activeWidget.columns.map((r) => ({ ref: r, reason: chipReason(r, "col") }))}
              onRemove={(ref) =>
                updateWidget(activeWidget.id, { columns: activeWidget.columns.filter((r) => !refsEqual(r, ref)) })
              }
              placeholder="Add dimensions from any model below"
            />
            <DropZone
              label="Filters"
              items={activeWidget.filters.map((r) => ({ ref: r, reason: chipReason(r, "filter") }))}
              onRemove={(ref) =>
                updateWidget(activeWidget.id, { filters: activeWidget.filters.filter((r) => !refsEqual(r, ref)) })
              }
              placeholder="Add widget-level filters"
            />
            <DropZone
              label="X-Axis"
              items={activeWidget.xAxis ? [{ ref: activeWidget.xAxis, reason: chipReason(activeWidget.xAxis, "x") }] : []}
              onRemove={() => updateWidget(activeWidget.id, { xAxis: null })}
              placeholder="Add a dimension"
            />
            <DropZone
              label="Y-Axis"
              items={activeWidget.yAxis.map((r) => ({ ref: r, reason: chipReason(r, "y") }))}
              onRemove={(ref) =>
                updateWidget(activeWidget.id, { yAxis: activeWidget.yAxis.filter((r) => !refsEqual(r, ref)) })
              }
              placeholder="Add measures from any model"
            />

            <label className="flex items-center justify-between cursor-pointer">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--foreground)" }}>
                Show Totals
              </span>
              <input
                type="checkbox"
                checked={activeWidget.showTotals}
                onChange={(e) => updateWidget(activeWidget.id, { showTotals: e.target.checked })}
              />
            </label>

            {/* Field list — all models, grouped */}
            <div className="flex flex-col gap-[8px] pt-[8px]" style={{ borderTop: "1px solid var(--border)" }}>
              <input
                value={fieldSearch}
                onChange={(e) => setFieldSearch(e.target.value)}
                placeholder="Search fields"
                className="w-full h-[30px] px-[10px] bg-card text-foreground placeholder:text-muted-foreground"
                style={{ fontFamily: FONT, fontSize: "var(--text-sm)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
              />

              {allFieldsByModel.map(({ model, fields }) => {
                if (!fields.length) return null;
                const dims = fields.filter((f) => f.role === "dimension");
                const meas = fields.filter((f) => f.role === "measure");
                return (
                  <div key={model.id} className="flex flex-col gap-[4px] pt-[6px]">
                    <div className="flex items-center gap-[6px]">
                      <ModelDot modelId={model.id} />
                      <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, letterSpacing: "0.5px", color: model.color, textTransform: "uppercase" }}>
                        {model.label}
                      </span>
                    </div>
                    {dims.length > 0 && (
                      <>
                        {dims.map((f) => (
                          <FieldRow
                            key={`${model.id}:${f.id}`}
                            field={f}
                            modelId={model.id}
                            onAdd={(zone) => addFieldToWidget({ modelId: model.id, fieldId: f.id }, zone)}
                          />
                        ))}
                      </>
                    )}
                    {meas.length > 0 && (
                      <>
                        {meas.map((f) => (
                          <FieldRow
                            key={`${model.id}:${f.id}`}
                            field={f}
                            modelId={model.id}
                            onAdd={(zone) => addFieldToWidget({ modelId: model.id, fieldId: f.id }, zone)}
                          />
                        ))}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AddWidgetDialog open={addWidgetOpen} onOpenChange={setAddWidgetOpen} onConfirm={addWidget} />
      <FutureStitchDialog open={stitchOpen} onOpenChange={setStitchOpen} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Helpers — ModelSelect, SuggestedFilterButton, FieldRow
   ═══════════════════════════════════════════════════════════ */

function ModelSelect({ value, onChange }: { value: DataModelId; onChange: (id: DataModelId) => void }) {
  const [open, setOpen] = useState(false);
  const current = DATA_MODELS[value];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full h-[36px] px-[10px] flex items-center justify-between cursor-pointer"
        style={{
          background: "var(--card)",
          border: `1px solid ${current.color}`,
          borderRadius: "var(--radius)",
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          color: current.color,
        }}
      >
        <span className="flex items-center gap-[8px]">
          <ModelDot modelId={current.id} />
          {current.label}
        </span>
        <span style={{ fontSize: 10 }}>▾</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div
            className="absolute left-0 right-0 mt-[4px] z-20"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--elevation-sm)",
              padding: 4,
            }}
          >
            {ALL_MODEL_IDS.map((id) => {
              const m = DATA_MODELS[id];
              const isCurrent = id === value;
              return (
                <button
                  key={id}
                  onClick={() => { onChange(id); setOpen(false); }}
                  className="w-full text-left px-[8px] py-[6px] flex items-center gap-[8px] cursor-pointer transition-colors hover:bg-muted"
                  style={{ borderRadius: 4, background: isCurrent ? "var(--muted)" : "transparent" }}
                >
                  <ModelDot modelId={id} />
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)", fontWeight: isCurrent ? 700 : 500 }}>
                    {m.label}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function SuggestedFilterButton({
  filter, activeModelIds, onAdd,
}: {
  filter: TopLevelFilter;
  activeModelIds: DataModelId[];
  onAdd: (f: TopLevelFilter) => void;
}) {
  const cov = filterCoverage(filter.id, activeModelIds);
  const tint = cov.kind === "single" ? DATA_MODELS[cov.honored[0]].color : null;
  return (
    <button
      onClick={() => onAdd(filter)}
      className="inline-flex items-center gap-[6px] h-[30px] px-[10px] cursor-pointer hover:bg-muted/40"
      title={`Add filter (${cov.kind === "universal" ? "applies to all models" : cov.kind === "none" ? "doesn't apply to any active model" : `applies to ${cov.honored.length}/${cov.total.length}`})`}
      style={{
        borderRadius: "var(--radius-button)",
        border: `1px dashed ${tint || "var(--border)"}`,
        background: "transparent",
        color: tint || "var(--muted-foreground)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 600,
      }}
    >
      + {filter.label}
      {cov.kind === "partial" && (
        <span className="inline-flex items-center gap-[2px]">
          {cov.honored.map((id) => (<ModelDot key={id} modelId={id} size={6} />))}
        </span>
      )}
    </button>
  );
}

function FieldRow({
  field,
  modelId,
  onAdd,
}: {
  field: DataField;
  modelId: DataModelId;
  onAdd: (zone: "auto" | "x" | "y" | "col" | "filter") => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onAdd("auto")}
      className="flex items-center justify-between gap-[8px] px-[6px] py-[4px] cursor-pointer"
      style={{ borderRadius: 4, background: hover ? "var(--muted)" : "transparent" }}
    >
      <div className="flex items-center gap-[8px] min-w-0">
        <FieldTypeBadge type={field.type} />
        <span
          className="truncate"
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            color: DATA_MODELS[modelId].color,
            fontWeight: 500,
          }}
        >
          {field.label}
        </span>
      </div>
      {hover && (
        <div className="flex items-center gap-[3px]" onClick={(e) => e.stopPropagation()}>
          {field.role === "dimension" && (
            <>
              <FieldZoneButton label="C" title="Add as column" onClick={() => onAdd("col")} />
              <FieldZoneButton label="X" title="Set as X-axis" onClick={() => onAdd("x")} />
            </>
          )}
          {field.role === "measure" && (
            <FieldZoneButton label="Y" title="Add to Y-axis" onClick={() => onAdd("y")} />
          )}
          <FieldZoneButton label="F" title="Add to widget filters" onClick={() => onAdd("filter")} />
        </div>
      )}
    </div>
  );
}

function FieldZoneButton({ label, title, onClick }: { label: string; title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="size-[20px] cursor-pointer hover:bg-card flex items-center justify-center"
      style={{
        border: "1px solid var(--border)", borderRadius: 4,
        background: "var(--card)", color: "var(--foreground)",
        fontFamily: FONT, fontSize: 10, fontWeight: 700,
      }}
    >
      {label}
    </button>
  );
}
