import { useState, useCallback, useRef, useMemo, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend, ScatterChart, Scatter, ZAxis,
} from "recharts";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-t747lx98vt";
import { DateRangePicker, type DateRange } from "./DateRangePicker";

const FONT = "'Sarabun', sans-serif";

/* ═══════════════════════════════════════════════════════════
   Data Fields & Mock Data
   ═══════════════════════════════════════════════════════════ */

type FieldType = "abc" | "123" | "date" | "link";

interface DataField {
  id: string;
  label: string;
  type: FieldType;
}

const ALL_FIELDS: DataField[] = [
  { id: "actions", label: "Actions", type: "abc" },
  { id: "action_cost", label: "Action Cost", type: "123" },
  { id: "aov", label: "AOV", type: "123" },
  { id: "ad_campaign_group", label: "Ad Campaign Group", type: "abc" },
  { id: "ad_campaign_id", label: "Ad Campaign ID", type: "123" },
  { id: "ad_campaign_name", label: "Ad Campaign Name", type: "abc" },
  { id: "ad_group_id", label: "AD Group ID", type: "123" },
  { id: "ad_group_id_2", label: "AD Group ID", type: "123" },
  { id: "calls", label: "Calls", type: "123" },
  { id: "channels", label: "Channels", type: "abc" },
  { id: "channels_2", label: "Channels", type: "link" },
  { id: "clicks", label: "Clicks", type: "123" },
  { id: "cpa", label: "CPA", type: "123" },
  { id: "cpc", label: "CPC", type: "123" },
  { id: "cpm", label: "CPM", type: "123" },
  { id: "day_of_week", label: "Day of Week", type: "link" },
  { id: "day_of_year", label: "Day of Year", type: "link" },
  { id: "device", label: "Device", type: "123" },
  { id: "distribution_type", label: "Distribution Type", type: "abc" },
  { id: "full_date", label: "Full Date", type: "date" },
  { id: "keyboard", label: "Keyboard", type: "abc" },
  { id: "impressions", label: "Impressions", type: "abc" },
  { id: "media_id", label: "Media Id", type: "abc" },
  { id: "media_source", label: "Media Source", type: "abc" },
  { id: "raw_impressions", label: "Raw Impressions", type: "abc" },
  { id: "referral_cost", label: "Referral Cost", type: "abc" },
  { id: "partner", label: "Partner", type: "abc" },
];

// Generate mock time-series data for charts
function generateTimeData(xField: string, yFields: string[]) {
  const dates = [
    "May 1", "May 3", "May 5", "May 7", "May 9", "May 11", "May 13",
    "May 15", "May 17", "May 19", "May 21", "May 23", "May 25", "May 27", "May 30",
  ];
  const partners = ["CNN Digital", "BuzzFeed", "Wirecutter", "RetailMeNot", "Honey", "Skimlinks"];
  const xValues = xField === "full_date" || xField === "day_of_year" ? dates : partners;

  return xValues.map((x, i) => {
    const row: Record<string, any> = { name: x };
    yFields.forEach((f) => {
      const base = f === "clicks" ? 40000 : f === "impressions" ? 70000 : f === "action_cost" ? 2400 : f === "cpa" ? 12 : f === "aov" ? 85 : f === "revenue" ? 18000 : 5000;
      const variance = base * 0.4;
      row[f] = Math.round(base + Math.sin(i * 0.8) * variance + Math.random() * variance * 0.3);
    });
    return row;
  });
}

// Generate category data
function generateCategoryData(dimField: string, metricFields: string[]) {
  const categories = dimField === "partner"
    ? ["CNN Digital", "BuzzFeed", "Wirecutter", "RetailMeNot", "Honey", "Skimlinks"]
    : dimField === "channels" ? ["Display", "Search", "Social", "Email", "Affiliate", "Direct"]
    : dimField === "device" ? ["Desktop", "Mobile", "Tablet"]
    : dimField === "distribution_type" ? ["CPC", "CPM", "CPA", "Flat Rate"]
    : ["A", "B", "C", "D", "E", "F"];

  return categories.map((cat) => {
    const row: Record<string, any> = { name: cat };
    metricFields.forEach((f) => {
      const base = f === "clicks" ? 45000 : f === "impressions" ? 90000 : f === "action_cost" ? 3200 : 8000;
      row[f] = Math.round(base + Math.random() * base * 0.6);
    });
    return row;
  });
}

// Generate scatter plot data (numeric x/y pairs per series)
function generateScatterData(xField: string, yField: string, count: number = 24) {
  const xBase = xField === "clicks" ? 40000 : xField === "impressions" ? 70000 : xField === "action_cost" ? 2400 : xField === "cpa" ? 12 : xField === "aov" ? 85 : 5000;
  const yBase = yField === "clicks" ? 40000 : yField === "impressions" ? 70000 : yField === "action_cost" ? 2400 : yField === "cpa" ? 12 : yField === "aov" ? 85 : 5000;
  return Array.from({ length: count }, (_, i) => ({
    x: Math.round(xBase * 0.3 + Math.random() * xBase * 1.2),
    y: Math.round(yBase * 0.3 + Math.random() * yBase * 1.2),
    z: Math.round(80 + Math.random() * 400),
    name: `Point ${i + 1}`,
  }));
}

/* ═══════════════════════════════════════════════════════════
   Decomposition Tree – data model & renderer
   ═══════════════════════════════════════════════════════════ */

interface DecompNode {
  id: string;
  label: string;
  value: number;
  pct: number;
  color: string;
  children?: DecompNode[];
}

function generateDecompTree(columns: string[], metric: string): DecompNode {
  const metricLabel = ALL_FIELDS.find((f) => f.id === metric)?.label || metric;
  const dimMaps: Record<string, string[]> = {
    channels: ["Display", "Search", "Social", "Email"],
    partner: ["CNN Digital", "BuzzFeed", "Wirecutter", "RetailMeNot"],
    device: ["Desktop", "Mobile", "Tablet"],
    distribution_type: ["CPC", "CPM", "CPA"],
  };

  const rootTotal = metric === "clicks" ? 245670 : metric === "impressions" ? 812400 : metric === "action_cost" ? 38200 : 124000;
  const dim1 = columns[0] || "channels";
  const dim2 = columns[1] || null;
  const cats1 = dimMaps[dim1] || ["Group A", "Group B", "Group C", "Group D"];

  // distribute rootTotal across level 1
  const weights1 = cats1.map(() => 0.15 + Math.random() * 0.85);
  const sum1 = weights1.reduce((a, b) => a + b, 0);
  const vals1 = weights1.map((w) => Math.round((w / sum1) * rootTotal));

  const children1: DecompNode[] = cats1.map((cat, i) => {
    const node: DecompNode = {
      id: `l1-${i}`,
      label: cat,
      value: vals1[i],
      pct: Math.round((vals1[i] / rootTotal) * 100),
      color: CHART_COLORS[i % CHART_COLORS.length],
    };

    if (dim2) {
      const cats2 = dimMaps[dim2] || ["Sub A", "Sub B", "Sub C"];
      const weights2 = cats2.map(() => 0.2 + Math.random() * 0.8);
      const sum2 = weights2.reduce((a, b) => a + b, 0);
      node.children = cats2.map((c2, j) => {
        const v2 = Math.round((weights2[j] / sum2) * vals1[i]);
        return {
          id: `l2-${i}-${j}`,
          label: c2,
          value: v2,
          pct: Math.round((v2 / vals1[i]) * 100),
          color: CHART_COLORS[(i + j + 1) % CHART_COLORS.length],
        };
      });
    }
    return node;
  });

  return {
    id: "root",
    label: `Total ${metricLabel}`,
    value: rootTotal,
    pct: 100,
    color: "var(--accent)",
    children: children1,
  };
}

function DecompNodeCard({
  node,
  isExpanded,
  hasChildren,
  onToggle,
  depth,
}: {
  node: DecompNode;
  isExpanded: boolean;
  hasChildren: boolean;
  onToggle: () => void;
  depth: number;
}) {
  const isRoot = depth === 0;
  return (
    <div
      className="flex items-center gap-[8px] shrink-0 cursor-pointer transition-shadow"
      style={{
        minWidth: isRoot ? 150 : 130,
        maxWidth: isRoot ? 172 : 152,
        padding: "10px 12px",
        borderRadius: "var(--radius)",
        border: `1.5px solid ${isRoot ? "var(--accent)" : node.color}`,
        background: "var(--card)",
        boxShadow: "var(--elevation-sm)",
      }}
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
    >
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <span
          className="truncate"
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--foreground)",
            lineHeight: "16px",
          }}
        >
          {node.label}
        </span>
        <span
          style={{
            fontFamily: FONT,
            fontSize: isRoot ? "18px" : "var(--text-base)",
            fontWeight: 700,
            color: "var(--foreground)",
            lineHeight: "20px",
          }}
        >
          {node.value.toLocaleString()}
        </span>
        {!isRoot && (
          <div className="flex items-center gap-[6px] mt-[2px]">
            <div
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background: "var(--muted)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${node.pct}%`,
                  height: "100%",
                  borderRadius: 2,
                  background: node.color,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: FONT,
                fontSize: "10px",
                fontWeight: 600,
                color: "var(--muted-foreground)",
                whiteSpace: "nowrap",
              }}
            >
              {node.pct}%
            </span>
          </div>
        )}
      </div>
      {hasChildren && (
        <span
          style={{
            fontFamily: FONT,
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--muted-foreground)",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          {isExpanded ? "−" : "+"}
        </span>
      )}
    </div>
  );
}

function DecompBranch({
  node,
  expanded,
  toggleExpand,
  depth,
}: {
  node: DecompNode;
  expanded: Set<string>;
  toggleExpand: (id: string) => void;
  depth: number;
}) {
  const isExpanded = expanded.has(node.id);
  const hasChildren = !!(node.children && node.children.length);

  return (
    <div className="flex items-start gap-0 shrink-0">
      {/* node card */}
      <DecompNodeCard
        node={node}
        isExpanded={isExpanded}
        hasChildren={hasChildren}
        onToggle={() => hasChildren && toggleExpand(node.id)}
        depth={depth}
      />

      {/* connector + children */}
      {hasChildren && isExpanded && (
        <div className="flex items-start shrink-0">
          {/* horizontal line from card to vertical trunk */}
          <div
            style={{
              width: 24,
              alignSelf: "stretch",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", height: 1.5, background: "var(--border)" }} />
          </div>

          {/* vertical trunk + child branches */}
          <div className="flex flex-col relative shrink-0">
            {/* vertical connector line behind children */}
            {node.children!.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 20,
                  bottom: 20,
                  width: 1.5,
                  background: "var(--border)",
                }}
              />
            )}
            {node.children!.map((child, idx) => (
              <div key={child.id} className="flex items-start shrink-0" style={{ paddingTop: idx === 0 ? 0 : 8 }}>
                {/* horizontal branch from trunk to child */}
                <div
                  style={{
                    width: 20,
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <div style={{ width: "100%", height: 1.5, background: "var(--border)" }} />
                </div>
                {/* Recurse */}
                <DecompBranch
                  node={child}
                  expanded={expanded}
                  toggleExpand={toggleExpand}
                  depth={depth + 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DecompTreeChart({ widget }: { widget: Widget }) {
  const { columns, yAxis } = widget;
  const metric = yAxis[0] || "clicks";
  const tree = useMemo(() => generateDecompTree(columns, metric), [columns, metric]);

  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(["root", "l1-0", "l1-1"]));

  const toggleExpand = useCallback((nodeId: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) next.delete(nodeId);
      else next.add(nodeId);
      return next;
    });
  }, []);

  return (
    <div
      className="w-full h-full overflow-auto flex items-start"
      style={{ padding: "16px 12px" }}
      onClick={(e) => e.stopPropagation()}
    >
      <DecompBranch node={tree} expanded={expanded} toggleExpand={toggleExpand} depth={0} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Chart Type Icons (reusing existing SVG paths)
   ═══════════════════════════════════════════════════════════ */

interface ChartTypeDef {
  id: string;
  label: string;
  viewBox: string;
  paths: { d: string; clipRule?: string; fillRule?: string }[];
  gradient?: boolean;
}

const CHART_TYPES: ChartTypeDef[] = [
  { id: "data-table", label: "Data Table", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p23579000, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "line", label: "Line", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p6827180, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.p1511a580, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "area", label: "Area", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p360dea00, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "treemap", label: "Treemap", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p2465e600, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "vertical-bar", label: "Bar", viewBox: "0 0 32 32.3556", paths: [{ d: svgPaths.p1fed22a0, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.p13dfaf80, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.p536ad00, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "vertical-stack", label: "Stack", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p1872fc00, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.p2d3b6180, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.p13dfaf80, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "horizontal-bar", label: "H-Bar", viewBox: "0 0 32.3556 32.1777", paths: [{ d: svgPaths.p3810ff80 }, { d: svgPaths.p22172480 }, { d: svgPaths.p21c41e00 }] },
  { id: "horizontal-stack", label: "H-Stack", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p3ec6b900, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.pb34e9f0, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "combo", label: "Combo", viewBox: "0 0 32 32.3556", paths: [{ d: svgPaths.p1d9f9af0, clipRule: "evenodd", fillRule: "evenodd" }, { d: svgPaths.pdacd000, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "scatter", label: "Scatter", viewBox: "0 0 32 32", paths: [{ d: "M3 4a1 1 0 0 1 2 0v22h22a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V4Z", clipRule: "evenodd", fillRule: "evenodd" }, { d: "M10 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "decomp-tree", label: "Decomp", viewBox: "0 0 32 32", paths: [{ d: "M1 12h7v8H1Zm18-10h12v6H19Zm0 11h12v6H19Zm0 11h12v6H19Z", clipRule: "evenodd", fillRule: "evenodd" }, { d: "M8 15h7v2H8Zm7-10h1v22h-1Zm1-1h4v2h-4Zm0 10h4v2h-4Zm0 10h4v2h-4Z", clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "funnel", label: "Funnel", viewBox: "0 0 32 32.0001", paths: [{ d: svgPaths.p19696b00, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "donut", label: "Donut", viewBox: "0 0 32 32", paths: [{ d: svgPaths.p3ed2bff0, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "number", label: "Number", viewBox: "0 0 32.3927 32", paths: [{ d: svgPaths.p201abf00, clipRule: "evenodd", fillRule: "evenodd" }] },
];

const CHART_COLORS = ["var(--chart-1)", "var(--accent)", "var(--chart-3)", "var(--chart-4)", "#D73184", "#2378CE"];

/* ═══════════════════════════════════════════════════════════
   DnD Item Types
   ═══════════════════════════════════════════════════════════ */

const DND_TYPES = {
  FIELD: "FIELD",
  WIDGET: "WIDGET",
};

/* ═══════════════════════════════════════════════════════════
   Widget Model
   ═══════════════════════════════════════════════════════════ */

interface CustomFilter {
  id: string;
  type: "combo" | "anyof";
  fieldA?: string;
  fieldB?: string;
  selectedPairs?: string[];
  rules?: Array<{
    field: string;
    operator: string;
    value: string;
  }>;
}

interface RuleCondition {
  id: string;
  field: string;
  operator: string;
  value: string;
}

interface RuleGroup {
  id: string;
  operator: "AND" | "OR";
  rules: RuleCondition[];
}

interface Widget {
  id: string;
  chartType: string;
  title: string;
  columns: string[];
  filters: string[];
  filterOperator: "AND" | "OR";
  xAxis: string | null;
  yAxis: string[];
  showTotals: boolean;
  x: number;  // pixels
  y: number;  // pixels
  w: number;  // pixels
  h: number;  // pixels
  customFilters?: CustomFilter[];
  filterMode?: "simple" | "builder";
  filterGroups?: RuleGroup[];
  filterRootOperator?: "AND" | "OR";
}

let widgetCounter = 1;

function createWidget(chartType: string, x: number, y: number): Widget {
  const id = `w${widgetCounter++}`;
  return {
    id,
    chartType,
    title: `Widget ${id.slice(1)}`,
    columns: chartType === "decomp-tree" ? ["channels", "device"] : ["partner", "action_cost"],
    filters: [],
    filterOperator: "AND",
    xAxis: chartType === "data-table" || chartType === "number" || chartType === "donut" || chartType === "decomp-tree" ? null : "full_date",
    yAxis: chartType === "decomp-tree" ? ["clicks"] : ["clicks", "impressions"],
    showTotals: false,
    x, y,
    w: chartType === "number" ? 252 : chartType === "decomp-tree" ? 772 : 512,
    h: chartType === "number" ? 212 : 432,
    customFilters: [],
    filterMode: "builder",
    filterGroups: [],
    filterRootOperator: "AND",
  };
}

/* ═══════════════════════════════════════════════════════════
   Field Type Badge
   ═══════════════════════════════════════════════════════════ */

const TYPE_COLORS: Record<FieldType, { bg: string; text: string; label: string }> = {
  abc: { bg: "rgba(45,62,80,0.8)", text: "#e4e5e8", label: "abc" },
  "123": { bg: "rgba(45,62,80,0.8)", text: "#9AC0FF", label: "123" },
  date: { bg: "rgba(45,62,80,0.8)", text: "#D73184", label: "📅" },
  link: { bg: "rgba(45,62,80,0.8)", text: "#e4e5e8", label: "🔗" },
};

function FieldTypeBadge({ type }: { type: FieldType }) {
  const t = TYPE_COLORS[type];
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 w-[28px] h-[16px]"
      style={{ borderRadius: 3, background: t.bg, color: t.text, fontFamily: FONT, fontSize: "10px", fontWeight: 600 }}
    >
      {t.label}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   Draggable Field Item
   ═══════════════════════════════════════════════════════════ */

function DraggableField({ field }: { field: DataField }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: DND_TYPES.FIELD,
    item: { fieldId: field.id },
    collect: (m) => ({ isDragging: m.isDragging() }),
  });

  return (
    <div
      ref={dragRef as any}
      className="flex items-center gap-[8px] px-[8px] py-[5px] cursor-grab transition-colors rounded-[4px]"
      style={{ opacity: isDragging ? 0.4 : 1, fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <FieldTypeBadge type={field.type} />
      <span className="truncate">{field.label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Drop Zone (for columns, xAxis, yAxis, filters)
   ═══════════════════════════════════════════════════════════ */

function DropZone({
  label, items, onDrop, onRemove, placeholder, accentColor, operator, onOperatorChange,
  customFilters = [], onRemoveCustomFilter, onEditCustomFilter, onAddCombo, onAddAnyOf,
}: {
  label: string;
  items: string[];
  onDrop: (fieldId: string) => void;
  onRemove: (fieldId: string) => void;
  placeholder: string;
  accentColor?: string;
  operator?: "AND" | "OR";
  onOperatorChange?: (op: "AND" | "OR") => void;
  customFilters?: CustomFilter[];
  onRemoveCustomFilter?: (id: string) => void;
  onEditCustomFilter?: (cf: CustomFilter) => void;
  onAddCombo?: () => void;
  onAddAnyOf?: () => void;
}) {
  const [{ isOver }, dropRef] = useDrop({
    accept: DND_TYPES.FIELD,
    drop: (item: { fieldId: string }) => onDrop(item.fieldId),
    collect: (m) => ({ isOver: m.isOver() }),
  });

  const pillBg = accentColor || "var(--accent)";

  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center justify-between">
        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase" }}>{label}</span>
        {label === "Filters" && (
          <div className="flex gap-[8px]">
            <button
              onClick={(e) => { e.stopPropagation(); onAddCombo?.(); }}
              className="text-[11px] font-bold text-accent hover:underline border-none bg-transparent cursor-pointer"
            >
              + Combo
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onAddAnyOf?.(); }}
              className="text-[11px] font-bold text-[#b25e09] hover:underline border-none bg-transparent cursor-pointer"
            >
              + Any of
            </button>
          </div>
        )}
        {operator && onOperatorChange && items.length > 1 && (
          <div className="flex bg-muted rounded-[6px] p-[2px] gap-[2px]">
            <button
              onClick={() => onOperatorChange("AND")}
              className={`px-[6px] py-[2px] text-[10px] font-bold rounded-[4px] transition-colors cursor-pointer ${operator === "AND" ? "bg-accent text-white" : "text-muted-foreground bg-transparent"}`}
              style={{ border: "none" }}
            >
              AND
            </button>
            <button
              onClick={() => onOperatorChange("OR")}
              className={`px-[6px] py-[2px] text-[10px] font-bold rounded-[4px] transition-colors cursor-pointer ${operator === "OR" ? "bg-accent text-white" : "text-muted-foreground bg-transparent"}`}
              style={{ border: "none" }}
            >
              OR
            </button>
          </div>
        )}
      </div>
      <div
        ref={dropRef as any}
        className="flex flex-wrap gap-[6px] items-center min-h-[32px] p-[6px] rounded-[6px] transition-colors"
        style={{ border: isOver ? "1.5px dashed var(--accent)" : "1px dashed var(--border)", background: isOver ? "rgba(0,119,219,0.06)" : "transparent" }}
      >
        {items.map((fid, idx) => {
          const f = ALL_FIELDS.find((x) => x.id === fid);
          return (
            <div key={fid} className="flex items-center gap-[6px]">
              {idx > 0 && operator && (
                <span
                  className="px-[6px] py-[2px] text-[10px] font-black rounded-[4px] select-none text-accent bg-accent/15"
                  style={{ fontFamily: FONT }}
                >
                  {operator}
                </span>
              )}
              <span
                className="inline-flex items-center gap-[4px] h-[26px] px-[10px]"
                style={{ borderRadius: "var(--radius-button)", background: pillBg, color: "#fff", fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600 }}
              >
                {f?.label || fid}
                <button
                  className="cursor-pointer ml-[2px] flex items-center justify-center"
                  style={{ background: "none", border: "none", color: "#fff", fontFamily: FONT, fontSize: "14px", fontWeight: 700, lineHeight: 1, padding: 0 }}
                  onClick={() => onRemove(fid)}
                >
                  ×
                </button>
              </span>
            </div>
          );
        })}

        {/* Render Custom Filters */}
        {customFilters.map((cf) => {
          const isCombo = cf.type === "combo";
          const borderStyle = isCombo ? "1.5px solid var(--accent)" : "1.5px solid #b25e09";
          const bgStyle = isCombo ? "rgba(0,119,219,0.08)" : "rgba(178,94,9,0.08)";
          const textStyle = isCombo ? "var(--accent)" : "#b25e09";
          
          let filterLabel = "";
          if (isCombo) {
            const labelA = ALL_FIELDS.find((f) => f.id === cf.fieldA)?.label || cf.fieldA || "";
            const labelB = ALL_FIELDS.find((f) => f.id === cf.fieldB)?.label || cf.fieldB || "";
            const pairsCount = cf.selectedPairs?.length || 0;
            filterLabel = `${labelA} × ${labelB}: ${pairsCount} pair${pairsCount === 1 ? "" : "s"}`;
          } else {
            const rulesCount = cf.rules?.length || 0;
            filterLabel = `Any of: ${rulesCount} rule${rulesCount === 1 ? "" : "s"}`;
          }

          return (
            <span
              key={cf.id}
              className="inline-flex items-center gap-[6px] h-[26px] px-[10px] cursor-pointer hover:opacity-85 transition-opacity"
              style={{
                borderRadius: "var(--radius-button)",
                border: borderStyle,
                background: bgStyle,
                color: "var(--foreground)",
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                fontWeight: 600,
              }}
              onClick={() => onEditCustomFilter?.(cf)}
            >
              <span style={{ color: textStyle }}>{isCombo ? "⚏" : "⎌"}</span>
              <span>{filterLabel}</span>
              <button
                className="cursor-pointer ml-[2px] flex items-center justify-center hover:scale-110"
                style={{ background: "none", border: "none", color: "var(--muted-foreground)", fontFamily: FONT, fontSize: "14px", fontWeight: 700, lineHeight: 1, padding: 0 }}
                onClick={(e) => { e.stopPropagation(); onRemoveCustomFilter?.(cf.id); }}
              >
                ×
              </button>
            </span>
          );
        })}

        {items.length === 0 && customFilters.length === 0 && (
          <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", padding: "2px 4px" }}>{placeholder}</span>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Widget Chart Renderer
   ═══════════════════════════════════════════════════════════ */

function evaluateCondition(row: Record<string, any>, rule: { field: string; operator: string; value: string }) {
  const rowVal = row[rule.field];
  const valNum = parseFloat(rowVal);
  const ruleNum = parseFloat(rule.value);
  if (!isNaN(valNum) && !isNaN(ruleNum)) {
    if (rule.operator === ">") return valNum > ruleNum;
    if (rule.operator === "<") return valNum < ruleNum;
    if (rule.operator === "=") return valNum === ruleNum;
    if (rule.operator === "!=") return valNum !== ruleNum;
    return true;
  }
  const strVal = String(rowVal || "").toLowerCase();
  const strRule = String(rule.value || "").toLowerCase();
  if (rule.operator === "=") return strVal === strRule;
  if (rule.operator === "!=") return strVal !== strRule;
  if (rule.operator === "contains") return strVal.includes(strRule);
  return true;
}

function evaluateGroup(row: Record<string, any>, group: { operator: "AND" | "OR"; rules: Array<{ field: string; operator: string; value: string }> }) {
  if (!group.rules || group.rules.length === 0) return true;
  if (group.operator === "AND") {
    return group.rules.every((rule) => evaluateCondition(row, rule));
  } else {
    return group.rules.some((rule) => evaluateCondition(row, rule));
  }
}

function applyFilters(rawData: Array<Record<string, any>>, widget: Widget) {
  let filtered = [...rawData];
  const { customFilters = [], xAxis, yAxis, filterMode = "builder", filterGroups = [], filterRootOperator = "AND" } = widget;

  if (filterMode === "builder") {
    if (filterGroups.length === 0) return filtered;
    return filtered.filter((row) => {
      if (filterRootOperator === "AND") {
        return filterGroups.every((g) => evaluateGroup(row, g));
      } else {
        return filterGroups.some((g) => evaluateGroup(row, g));
      }
    });
  }

  if (customFilters.length === 0) return filtered;

  customFilters.forEach((cf) => {
    if (cf.type === "anyof" && cf.rules && cf.rules.length > 0) {
      filtered = filtered.filter((row) => {
        return cf.rules!.some((rule) => {
          const val = parseFloat(row[rule.field]);
          const ruleVal = parseFloat(rule.value);
          if (isNaN(val) || isNaN(ruleVal)) {
            const strVal = String(row[rule.field] || "").toLowerCase();
            const strRuleVal = String(rule.value || "").toLowerCase();
            if (rule.operator === "=") return strVal === strRuleVal;
            if (rule.operator === "!=") return strVal !== strRuleVal;
            if (rule.operator === "contains") return strVal.includes(strRuleVal);
            return true;
          }
          if (rule.operator === ">") return val > ruleVal;
          if (rule.operator === "<") return val < ruleVal;
          if (rule.operator === "=") return val === ruleVal;
          if (rule.operator === "!=") return val !== ruleVal;
          return true;
        });
      });
    } else if (cf.type === "combo" && cf.fieldA && cf.fieldB && cf.selectedPairs && cf.selectedPairs.length > 0) {
      filtered = filtered.map((row) => {
        const isDimA = cf.fieldA === xAxis || (!xAxis && cf.fieldA === "partner");
        const isDimB = cf.fieldB === xAxis || (!xAxis && cf.fieldB === "partner");
        
        if (isDimA || isDimB) {
          const dimVal = row.name;
          const hasMatch = cf.selectedPairs!.some((pair) => {
            const [partA, partB] = pair.split("|");
            return isDimA ? partA === dimVal : partB === dimVal;
          });
          
          if (!hasMatch) {
            const newRow = { ...row };
            yAxis.forEach((y) => { newRow[y] = 0; });
            return newRow;
          } else {
            const newRow = { ...row };
            const matchCount = cf.selectedPairs!.filter((pair) => {
              const [partA, partB] = pair.split("|");
              return isDimA ? partA === dimVal : partB === dimVal;
            }).length;
            const mult = 0.4 + 0.3 * matchCount;
            yAxis.forEach((y) => {
              newRow[y] = Math.round(newRow[y] * Math.min(1, mult));
            });
            return newRow;
          }
        }
        return row;
      }).filter((row) => {
        return yAxis.some((y) => row[y] > 0);
      });
    }
  });

  return filtered;
}

function WidgetChart({ widget }: { widget: Widget }) {
  const { chartType, xAxis, yAxis, columns, customFilters } = widget;
  const isTimeSeries = xAxis === "full_date" || xAxis === "day_of_year";
  const data = useMemo(() => {
    let rawData = [];
    if (chartType === "donut") rawData = generateCategoryData(columns[0] || "partner", yAxis.length ? yAxis : ["clicks"]);
    else if (chartType === "data-table" || chartType === "number") rawData = generateCategoryData("partner", yAxis.length ? yAxis : ["clicks"]);
    else if (isTimeSeries) rawData = generateTimeData(xAxis || "full_date", yAxis.length ? yAxis : ["clicks"]);
    else rawData = generateCategoryData(xAxis || "partner", yAxis.length ? yAxis : ["clicks"]);

    return applyFilters(rawData, widget);
  }, [chartType, xAxis, yAxis, columns, isTimeSeries, customFilters, widget]);

  const tooltipStyle = {
    background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius)",
    fontFamily: FONT, fontSize: "12px", boxShadow: "var(--elevation-sm)",
  };
  const tickStyle = { fill: "var(--muted-foreground)", fontFamily: FONT, fontSize: 11 };

  if (chartType === "number") {
    const total = data.reduce((s, r) => s + (r[yAxis[0] || "clicks"] || 0), 0);
    return (
      <div className="flex flex-col items-center justify-center h-full gap-[4px]">
        <span style={{ fontFamily: FONT, fontSize: "28px", fontWeight: 700, color: "var(--foreground)" }}>{total.toLocaleString()}</span>
        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>
          {ALL_FIELDS.find((f) => f.id === (yAxis[0] || "clicks"))?.label || "Total"}
        </span>
      </div>
    );
  }

  if (chartType === "data-table") {
    const cols = columns.length ? columns : ["partner"];
    const metrics = yAxis.length ? yAxis : ["clicks"];
    return (
      <div className="w-full h-full overflow-auto">
        <table className="w-full border-collapse" style={{ fontSize: "var(--text-sm)", fontFamily: FONT }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {[...cols, ...metrics].map((c) => (
                <th key={c} className="text-left px-[8px] py-[6px]" style={{ fontWeight: 600, color: "var(--muted-foreground)" }}>
                  {ALL_FIELDS.find((f) => f.id === c)?.label || c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 8).map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                {cols.map((c) => (
                  <td key={c} className="px-[8px] py-[5px]" style={{ fontWeight: 400, color: "var(--foreground)" }}>{row.name}</td>
                ))}
                {metrics.map((m) => (
                  <td key={m} className="px-[8px] py-[5px]" style={{ fontWeight: 400, color: "var(--foreground)" }}>{(row[m] || 0).toLocaleString()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (chartType === "donut") {
    const metric = yAxis[0] || "clicks";
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <PieChart>
          <Pie data={data} dataKey={metric} nameKey="name" cx="50%" cy="50%" innerRadius="40%" outerRadius="70%" paddingAngle={2}>
            {data.map((_, i) => (<Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: "11px" }} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "area") {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <AreaChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <defs>
            {yAxis.map((y, i) => (
              <linearGradient key={y} id={`grad_${y}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS[i % CHART_COLORS.length]} stopOpacity={0.4} />
                <stop offset="100%" stopColor={CHART_COLORS[i % CHART_COLORS.length]} stopOpacity={0.05} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
          <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)} />
          <Tooltip contentStyle={tooltipStyle} />
          {yAxis.map((y, i) => (
            <Area key={y} type="monotone" dataKey={y} stroke={CHART_COLORS[i % CHART_COLORS.length]} strokeWidth={2} fill={`url(#grad_${y})`} name={ALL_FIELDS.find((f) => f.id === y)?.label || y} />
          ))}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: "11px" }} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "line" || chartType === "combo") {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
          <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)} />
          <Tooltip contentStyle={tooltipStyle} />
          {yAxis.map((y, i) => (
            <Line key={y} type="monotone" dataKey={y} stroke={CHART_COLORS[i % CHART_COLORS.length]} strokeWidth={2} dot={{ r: 3 }} name={ALL_FIELDS.find((f) => f.id === y)?.label || y} />
          ))}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: "11px" }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "horizontal-bar" || chartType === "horizontal-stack") {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)} />
          <YAxis type="category" dataKey="name" tick={tickStyle} axisLine={false} tickLine={false} width={80} />
          <Tooltip contentStyle={tooltipStyle} />
          {yAxis.map((y, i) => (
            <Bar key={y} dataKey={y} fill={CHART_COLORS[i % CHART_COLORS.length]} radius={[0, 4, 4, 0]} stackId={chartType === "horizontal-stack" ? "s" : undefined} name={ALL_FIELDS.find((f) => f.id === y)?.label || y} />
          ))}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: "11px" }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "scatter") {
    /* For scatter, X-axis field maps to x-coordinate, each Y-axis field is a separate scatter series.
       We generate dedicated numeric scatter data for each series. */
    const xFieldId = xAxis || yAxis[0] || "clicks";
    const yFields = yAxis.length >= 2 ? yAxis : yAxis.length === 1 ? [yAxis[0]] : ["clicks", "impressions"];
    const xLabel = ALL_FIELDS.find((f) => f.id === xFieldId)?.label || xFieldId;

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <ScatterChart margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            type="number"
            dataKey="x"
            name={xLabel}
            tick={tickStyle}
            axisLine={{ stroke: "var(--border)" }}
            tickLine={false}
            tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)}
          />
          <YAxis
            type="number"
            dataKey="y"
            tick={tickStyle}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)}
          />
          <ZAxis dataKey="z" range={[40, 260]} />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(val: number) => val.toLocaleString()}
            labelFormatter={() => ""}
          />
          {yFields.map((y, i) => {
            const seriesData = generateScatterData(xFieldId, y);
            const label = ALL_FIELDS.find((f) => f.id === y)?.label || y;
            return (
              <Scatter
                key={y}
                name={label}
                data={seriesData}
                fill={CHART_COLORS[i % CHART_COLORS.length]}
                fillOpacity={0.7}
              />
            );
          })}
          <Legend wrapperStyle={{ fontFamily: FONT, fontSize: "11px" }} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "decomp-tree") {
    return <DecompTreeChart widget={widget} />;
  }

  // vertical-bar, vertical-stack, funnel, treemap fallback
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
      <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="name" tick={tickStyle} axisLine={{ stroke: "var(--border)" }} tickLine={false} />
        <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)} />
        <Tooltip contentStyle={tooltipStyle} />
        {yAxis.map((y, i) => (
          <Bar key={y} dataKey={y} fill={CHART_COLORS[i % CHART_COLORS.length]} radius={[4, 4, 0, 0]} stackId={chartType === "vertical-stack" ? "s" : undefined} name={ALL_FIELDS.find((f) => f.id === y)?.label || y} />
        ))}
        <Legend wrapperStyle={{ fontFamily: FONT, fontSize: "11px" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   Resize Handle Directions
   ═══════════════════════════════════════════════════════════ */

type ResizeDir = "right" | "bottom" | "bottom-right";

const MIN_W = 200;
const MIN_H = 150;

/* ═══════════════════════════════════════════════════════════
   Canvas Widget (draggable + resizable on canvas)
   ═══════════════════════════════════════════════════════════ */

function CanvasWidget({
  widget, isSelected, onSelect, onRemove, onResize,
}: {
  widget: Widget; isSelected: boolean; onSelect: () => void; onRemove: () => void;
  onResize: (id: string, w: number, h: number) => void;
}) {
  /* Drag: only the header acts as the drag handle; the outer div is the drag preview */
  const [{ isDragging }, dragRef, previewRef] = useDrag({
    type: DND_TYPES.WIDGET,
    item: { widgetId: widget.id },
    collect: (m) => ({ isDragging: m.isDragging() }),
  });

  /* Resize via mousedown → mousemove → mouseup on window */
  const resizeState = useRef<{ dir: ResizeDir; startX: number; startY: number; startW: number; startH: number } | null>(null);
  const [isResizing, setIsResizing] = useState(false);

  const handleResizeStart = useCallback((dir: ResizeDir, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    resizeState.current = { dir, startX: e.clientX, startY: e.clientY, startW: widget.w, startH: widget.h };
    setIsResizing(true);
  }, [widget.w, widget.h]);

  useEffect(() => {
    if (!isResizing) return;
    const handleMove = (ev: MouseEvent) => {
      const s = resizeState.current;
      if (!s) return;
      const dx = ev.clientX - s.startX;
      const dy = ev.clientY - s.startY;
      const newW = s.dir === "bottom" ? s.startW : Math.max(MIN_W, s.startW + dx);
      const newH = s.dir === "right" ? s.startH : Math.max(MIN_H, s.startH + dy);
      onResize(widget.id, newW, newH);
    };
    const handleUp = () => {
      resizeState.current = null;
      setIsResizing(false);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isResizing, widget.id, onResize]);

  return (
    <div
      ref={previewRef as any}
      className="absolute flex flex-col select-none"
      style={{
        left: widget.x,
        top: widget.y,
        width: widget.w,
        height: widget.h,
        borderRadius: "var(--radius)",
        border: isSelected ? "2px solid var(--accent)" : "1px solid var(--border)",
        background: "var(--card)",
        boxShadow: isSelected ? "0 0 0 3px rgba(0,119,219,0.15)" : "var(--elevation-sm)",
        opacity: isDragging ? 0.5 : 1,
        zIndex: isSelected ? 10 : 1,
        transition: isResizing ? "none" : "box-shadow 0.15s ease",
      }}
      onClick={(e) => { e.stopPropagation(); onSelect(); }}
    >
      {/* Widget header — this is the drag handle */}
      <div
        ref={dragRef as any}
        className="flex items-center justify-between px-[12px] py-[8px] shrink-0 cursor-move"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)" }}>{widget.title}</span>
        <div className="flex items-center gap-[6px]">
          {/* Size badge shown during resize */}
          {isResizing && (
            <span
              className="px-[6px] py-[1px]"
              style={{
                fontFamily: FONT, fontSize: "10px", fontWeight: 600,
                color: "var(--muted-foreground)", background: "var(--muted)",
                borderRadius: "var(--radius-checkbox)",
              }}
            >
              {Math.round(widget.w)}×{Math.round(widget.h)}
            </span>
          )}
          <button
            className="cursor-pointer flex items-center justify-center size-[20px] rounded-[4px] hover:bg-muted transition-colors"
            style={{ background: "none", border: "none", color: "var(--muted-foreground)", fontFamily: FONT, fontSize: "16px" }}
            title="More options"
          >
            ⋮
          </button>
          <button
            className="cursor-pointer flex items-center justify-center size-[20px] rounded-[4px] hover:bg-destructive/20 transition-colors"
            style={{ background: "none", border: "none", color: "var(--muted-foreground)", fontFamily: FONT, fontSize: "14px" }}
            title="Remove widget"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Chart area — flex-1 + min-h-0 ensures non-zero resolved height for ResponsiveContainer */}
      <div className="flex-1 min-h-0 min-w-0 px-[8px] py-[4px]">
        <WidgetChart widget={widget} />
      </div>

      {/* ── Resize Handles (visible when selected) ── */}
      {isSelected && (
        <>
          {/* Right edge */}
          <div
            className="absolute top-[8px] cursor-e-resize group"
            style={{ right: -4, width: 8, bottom: 8 }}
            onMouseDown={(e) => handleResizeStart("right", e)}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
              style={{ width: 4, height: 32, background: "var(--accent)" }}
            />
          </div>
          {/* Bottom edge */}
          <div
            className="absolute left-[8px] cursor-s-resize group"
            style={{ bottom: -4, height: 8, right: 8 }}
            onMouseDown={(e) => handleResizeStart("bottom", e)}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
              style={{ height: 4, width: 32, background: "var(--accent)" }}
            />
          </div>
          {/* Bottom-right corner */}
          <div
            className="absolute cursor-se-resize group"
            style={{ right: -5, bottom: -5, width: 14, height: 14 }}
            onMouseDown={(e) => handleResizeStart("bottom-right", e)}
          >
            <div
              className="absolute bottom-[2px] right-[2px] rounded-[2px] transition-colors"
              style={{ width: 8, height: 8, background: "var(--accent)", border: "1.5px solid var(--card)" }}
            />
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Report Canvas Component
   ═══════════════════════════════════════════════════════════ */

interface ReportCanvasProps {
  initialChartType?: string;
}

export function ReportCanvas({ initialChartType }: ReportCanvasProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReportCanvasInner initialChartType={initialChartType} />
    </DndProvider>
  );
}

function getCombinationsForFields(fieldA: string, fieldB: string) {
  const getValues = (fid: string) => {
    if (fid === "partner") return ["CNN Digital", "BuzzFeed", "Wirecutter", "RetailMeNot", "Honey", "Skimlinks"];
    if (fid === "channels") return ["Display", "Search", "Social", "Email", "Affiliate", "Direct"];
    if (fid === "device") return ["Desktop", "Mobile", "Tablet"];
    if (fid === "distribution_type") return ["CPC", "CPM", "CPA", "Flat Rate"];
    return ["Value 1", "Value 2", "Value 3"];
  };
  const valsA = getValues(fieldA);
  const valsB = getValues(fieldB);
  const combos: Array<{ a: string; b: string; count: number }> = [];
  valsA.forEach((a, i) => {
    valsB.forEach((b, j) => {
      const count = Math.round(500 + Math.sin(i * 0.9 + j * 0.4) * 400 + Math.random() * 100);
      if ((i + j) % 5 !== 0) {
        combos.push({ a, b, count });
      }
    });
  });
  return combos;
}

function ReportCanvasInner({ initialChartType }: ReportCanvasProps) {
  const navigate = useNavigate();
  const [reportName, setReportName] = useState("Untitled Report");
  const [editingName, setEditingName] = useState(false);
  const [widgets, setWidgets] = useState<Widget[]>(() => {
    const w = createWidget(initialChartType || "area", 16, 16);
    return [w];
  });
  const [selectedWidget, setSelectedWidget] = useState<string | null>(() => widgets[0]?.id || null);
  const [fieldSearch, setFieldSearch] = useState("");
  const [addChartType, setAddChartType] = useState<string>("area");
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: (() => { const d = new Date(); d.setDate(d.getDate() - 29); return d; })(),
    end: new Date(),
  });

  const [comboModal, setComboModal] = useState<{
    isOpen: boolean;
    filterId?: string;
    fieldA: string;
    fieldB: string;
    selectedPairs: string[];
  } | null>(null);

  const [anyOfModal, setAnyOfModal] = useState<{
    isOpen: boolean;
    filterId?: string;
    rules: Array<{ field: string; operator: string; value: string }>;
  } | null>(null);

  const [ruleBuilderDrawer, setRuleBuilderDrawer] = useState<{
    isOpen: boolean;
    widgetId: string;
    filterRootOperator: "AND" | "OR";
    filterGroups: Array<{
      id: string;
      operator: "AND" | "OR";
      rules: Array<{ id: string; field: string; operator: string; value: string }>;
    }>;
  } | null>(null);

  // Declared up here (before handleSaveRuleBuilder) so the useCallback deps
  // array below doesn't reference it before initialization (TDZ ReferenceError).
  const updateWidget = useCallback((id: string, patch: Partial<Widget>) => {
    setWidgets((prev) => prev.map((w) => (w.id === id ? { ...w, ...patch } : w)));
  }, []);

  const handleSaveRuleBuilder = useCallback(() => {
    if (!ruleBuilderDrawer) return;
    updateWidget(ruleBuilderDrawer.widgetId, {
      filterRootOperator: ruleBuilderDrawer.filterRootOperator,
      filterGroups: ruleBuilderDrawer.filterGroups,
    });
    setRuleBuilderDrawer(null);
  }, [ruleBuilderDrawer, updateWidget]);

  const handleOpenComboModal = useCallback((filter?: CustomFilter) => {
    if (filter) {
      setComboModal({
        isOpen: true,
        filterId: filter.id,
        fieldA: filter.fieldA || "partner",
        fieldB: filter.fieldB || "channels",
        selectedPairs: filter.selectedPairs || [],
      });
    } else {
      setComboModal({
        isOpen: true,
        fieldA: "partner",
        fieldB: "channels",
        selectedPairs: [],
      });
    }
  }, []);

  const handleOpenAnyOfModal = useCallback((filter?: CustomFilter) => {
    if (filter) {
      setAnyOfModal({
        isOpen: true,
        filterId: filter.id,
        rules: filter.rules || [{ field: "clicks", operator: ">", value: "0" }],
      });
    } else {
      setAnyOfModal({
        isOpen: true,
        rules: [{ field: "clicks", operator: ">", value: "0" }],
      });
    }
  }, []);

  const handleSaveComboFilter = useCallback((filterId: string | undefined, fieldA: string, fieldB: string, selectedPairs: string[]) => {
    if (!selectedWidget) return;
    setWidgets((prev) =>
      prev.map((w) => {
        if (w.id !== selectedWidget) return w;
        const existing = w.customFilters || [];
        let nextCustomFilters;
        if (filterId) {
          nextCustomFilters = existing.map((cf) =>
            cf.id === filterId ? { ...cf, fieldA, fieldB, selectedPairs } : cf
          );
        } else {
          nextCustomFilters = [...existing, { id: `c_${Date.now()}`, type: "combo" as const, fieldA, fieldB, selectedPairs }];
        }
        return { ...w, customFilters: nextCustomFilters };
      })
    );
    setComboModal(null);
  }, [selectedWidget]);

  const handleSaveAnyOfFilter = useCallback((filterId: string | undefined, rules: Array<{ field: string; operator: string; value: string }>) => {
    if (!selectedWidget) return;
    setWidgets((prev) =>
      prev.map((w) => {
        if (w.id !== selectedWidget) return w;
        const existing = w.customFilters || [];
        let nextCustomFilters;
        if (filterId) {
          nextCustomFilters = existing.map((cf) =>
            cf.id === filterId ? { ...cf, rules } : cf
          );
        } else {
          nextCustomFilters = [...existing, { id: `a_${Date.now()}`, type: "anyof" as const, rules }];
        }
        return { ...w, customFilters: nextCustomFilters };
      })
    );
    setAnyOfModal(null);
  }, [selectedWidget]);

  const handleRemoveCustomFilter = useCallback((id: string) => {
    if (!selectedWidget) return;
    setWidgets((prev) =>
      prev.map((w) =>
        w.id === selectedWidget
          ? { ...w, customFilters: (w.customFilters || []).filter((cf) => cf.id !== id) }
          : w
      )
    );
  }, [selectedWidget]);

  const selectedW = widgets.find((w) => w.id === selectedWidget) || null;

  // Canvas drop handler
  const [, canvasDropRef] = useDrop({
    accept: DND_TYPES.WIDGET,
    drop: (_item: { widgetId: string }, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (!delta) return;
      setWidgets((prev) =>
        prev.map((w) =>
          w.id === _item.widgetId
            ? { ...w, x: Math.max(0, w.x + delta.x), y: Math.max(0, w.y + delta.y) }
            : w
        )
      );
    },
  });

  const resizeWidget = useCallback((id: string, newW: number, newH: number) => {
    setWidgets((prev) => prev.map((w) => (w.id === id ? { ...w, w: newW, h: newH } : w)));
  }, []);

  const addWidget = useCallback(() => {
    const maxBottom = widgets.reduce((max, w) => Math.max(max, w.y + w.h), 0);
    const nw = createWidget(addChartType, 16, maxBottom + 16);
    setWidgets((prev) => [...prev, nw]);
    setSelectedWidget(nw.id);
  }, [addChartType, widgets]);

  const removeWidget = useCallback((id: string) => {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
    if (selectedWidget === id) setSelectedWidget(null);
  }, [selectedWidget]);

  const filteredFields = useMemo(() => {
    if (!fieldSearch) return ALL_FIELDS;
    const q = fieldSearch.toLowerCase();
    return ALL_FIELDS.filter((f) => f.label.toLowerCase().includes(q));
  }, [fieldSearch]);

  /* Filter bar pills */
  const filterPills = ["Filter Name", "Filter Name", "Filter Name", "Filter Name"];

  return (
      <div className="flex flex-col h-full w-full overflow-hidden">

        {/* ═══ Top Bar ═══ */}
        <div className="flex items-center justify-between px-[20px] h-[52px] shrink-0" style={{ borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
          <div className="flex items-center gap-[12px]">
            <button
              className="cursor-pointer flex items-center gap-[6px] hover:underline"
              style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", background: "none", border: "none", padding: 0 }}
              onClick={() => navigate("/reports/data-lab")}
            >
              ← Data Lab
            </button>
            <span style={{ color: "var(--muted-foreground)" }}>/</span>
            {editingName ? (
              <input
                className="bg-transparent text-foreground outline-none"
                style={{ fontFamily: FONT, fontSize: "18px", fontWeight: 700, width: 240 }}
                value={reportName}
                autoFocus
                onChange={(e) => setReportName(e.target.value)}
                onBlur={() => setEditingName(false)}
                onKeyDown={(e) => e.key === "Enter" && setEditingName(false)}
              />
            ) : (
              <button
                className="cursor-pointer hover:underline"
                style={{ fontFamily: FONT, fontSize: "18px", fontWeight: 700, color: "var(--foreground)", background: "none", border: "none", padding: 0 }}
                onClick={() => setEditingName(true)}
              >
                {reportName}
              </button>
            )}
          </div>
          <div className="flex items-center gap-[8px]">
            <button
              className="h-[32px] px-[14px] cursor-pointer transition-colors bg-card text-foreground hover:bg-muted/40"
              style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", border: "1px solid var(--border)" }}
            >
              Save
            </button>
            <button
              className="h-[32px] px-[14px] cursor-pointer transition-colors"
              style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
            >
              Share
            </button>
          </div>
        </div>

        {/* ═══ Filter Bar ═══ */}
        <div className="flex items-center gap-[10px] px-[20px] py-[10px] shrink-0" style={{ borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
          <DateRangePicker value={dateRange} onChange={setDateRange} />
          {selectedW ? (
            <>
              {/* Standard Filters */}
              {selectedW.filters.map((fid) => {
                const f = ALL_FIELDS.find((x) => x.id === fid);
                return (
                  <span
                    key={fid}
                    className="inline-flex items-center h-[30px] px-[14px]"
                    style={{ borderRadius: "var(--radius-button)", background: "var(--foreground)", color: "var(--card)", fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600 }}
                  >
                    {f?.label || fid}
                    <button
                      className="cursor-pointer ml-[6px] flex items-center justify-center text-white"
                      style={{ background: "none", border: "none", fontFamily: FONT, fontSize: "14px", fontWeight: 700, padding: 0 }}
                      onClick={() => updateWidget(selectedW.id, { filters: selectedW.filters.filter((c) => c !== fid) })}
                    >
                      ×
                    </button>
                  </span>
                );
              })}

              {/* Custom Filters */}
              {(selectedW.customFilters || []).map((cf) => {
                const isCombo = cf.type === "combo";
                const borderStyle = isCombo ? "1.5px solid var(--accent)" : "1.5px solid #b25e09";
                const bgStyle = isCombo ? "rgba(0,119,219,0.08)" : "rgba(178,94,9,0.08)";
                const textStyle = isCombo ? "var(--accent)" : "#b25e09";
                
                let filterLabel = "";
                if (isCombo) {
                  const labelA = ALL_FIELDS.find((f) => f.id === cf.fieldA)?.label || cf.fieldA || "";
                  const labelB = ALL_FIELDS.find((f) => f.id === cf.fieldB)?.label || cf.fieldB || "";
                  const pairsCount = cf.selectedPairs?.length || 0;
                  filterLabel = `${labelA} × ${labelB}: ${pairsCount} pair${pairsCount === 1 ? "" : "s"}`;
                } else {
                  const rulesCount = cf.rules?.length || 0;
                  filterLabel = `Any of: ${rulesCount} rule${rulesCount === 1 ? "" : "s"}`;
                }

                return (
                  <span
                    key={cf.id}
                    className="inline-flex items-center gap-[6px] h-[30px] px-[14px] cursor-pointer hover:opacity-85 transition-opacity"
                    style={{
                      borderRadius: "var(--radius-button)",
                      border: borderStyle,
                      background: bgStyle,
                      color: "var(--foreground)",
                      fontFamily: FONT,
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      if (isCombo) handleOpenComboModal(cf);
                      else handleOpenAnyOfModal(cf);
                    }}
                  >
                    <span style={{ color: textStyle }}>{isCombo ? "⚏" : "⎌"}</span>
                    <span>{filterLabel}</span>
                    <button
                      className="cursor-pointer ml-[4px] flex items-center justify-center"
                      style={{ background: "none", border: "none", color: "var(--muted-foreground)", fontFamily: FONT, fontSize: "14px", fontWeight: 700, padding: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveCustomFilter(cf.id);
                      }}
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </>
          ) : (
            <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>Select a widget to manage its filters</span>
          )}
          <button
            className="flex items-center justify-center size-[30px] cursor-pointer hover:bg-muted transition-colors"
            style={{ borderRadius: "var(--radius-button)", border: "1px solid var(--border)", background: "var(--card)", color: "var(--foreground)", fontFamily: FONT, fontSize: "16px" }}
          >
            ⋯
          </button>
          <button
            onClick={() => {
              if (selectedW) {
                updateWidget(selectedW.id, { filters: [], customFilters: [] });
              }
            }}
            className="cursor-pointer hover:underline"
            style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", background: "none", border: "none" }}
          >
            Clear All
          </button>
        </div>

        {/* ═══ Main Area: Canvas + Right Sidebar ═══ */}
        <div className="flex flex-1 overflow-hidden">

          {/* ─── Canvas ─── */}
          <div
            ref={(node) => { canvasDropRef(node); (canvasRef as any).current = node; }}
            className="flex-1 overflow-auto relative"
            style={{
              background: "var(--background)",
              backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            onClick={() => setSelectedWidget(null)}
          >
            {/* Widgets */}
            <div className="relative" style={{ minHeight: 800, minWidth: 800, padding: 16 }}>
              {widgets.map((w) => (
                <CanvasWidget
                  key={w.id}
                  widget={w}
                  isSelected={selectedWidget === w.id}
                  onSelect={() => setSelectedWidget(w.id)}
                  onRemove={() => removeWidget(w.id)}
                  onResize={resizeWidget}
                />
              ))}

              {/* Add widget button */}
              <button
                className="absolute flex items-center justify-center cursor-pointer transition-all hover:border-accent hover:bg-muted/30"
                style={{
                  left: 16,
                  top: widgets.reduce((max, w) => Math.max(max, w.y + w.h), 0) + 16,
                  width: 512,
                  height: 80,
                  borderRadius: "var(--radius)",
                  border: "2px dashed var(--border)",
                  background: "transparent",
                }}
                onClick={addWidget}
              >
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--muted-foreground)" }}>
                  + Add Widget
                </span>
              </button>
            </div>
          </div>

          {/* ─── Right Sidebar (Data Config) ─── */}
          <div
            className="w-[300px] shrink-0 flex flex-col overflow-hidden"
            style={{ borderLeft: "1px solid var(--border)", background: "var(--card)" }}
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="flex items-center gap-[8px]">
                <svg className="size-[18px]" viewBox="0 0 32 32" fill="none">
                  <path d={svgPaths.p23579000} clipRule="evenodd" fillRule="evenodd" fill="var(--accent)" />
                </svg>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>Data Table</span>
              </div>
            </div>

            {/* Chart type selector */}
            <div className="px-[12px] py-[10px] flex flex-wrap gap-[4px]" style={{ borderBottom: "1px solid var(--border)" }}>
              {CHART_TYPES.map((ct) => {
                const active = selectedW ? selectedW.chartType === ct.id : addChartType === ct.id;
                return (
                  <button
                    key={ct.id}
                    className="flex items-center justify-center size-[30px] cursor-pointer transition-colors"
                    style={{
                      borderRadius: "var(--radius)",
                      border: active ? "1.5px solid var(--accent)" : "1px solid transparent",
                      background: active ? "var(--muted)" : "transparent",
                    }}
                    title={ct.label}
                    onClick={() => {
                      if (selectedW) updateWidget(selectedW.id, { chartType: ct.id });
                      else setAddChartType(ct.id);
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

            {/* Config area (scrollable) */}
            <div className="flex-1 overflow-y-auto px-[16px] py-[12px] flex flex-col gap-[16px]">

              {selectedW ? (
                <>
                  {/* Widget title */}
                  <div className="flex flex-col gap-[4px]">
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Widget Name</span>
                    <input
                      className="w-full h-[32px] px-[10px] bg-card text-foreground placeholder:text-muted-foreground"
                      style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
                      value={selectedW.title}
                      onChange={(e) => updateWidget(selectedW.id, { title: e.target.value })}
                    />
                  </div>

                  {/* Columns */}
                  <DropZone
                    label="Columns"
                    items={selectedW.columns}
                    onDrop={(fid) => updateWidget(selectedW.id, { columns: [...selectedW.columns, fid] })}
                    onRemove={(fid) => updateWidget(selectedW.id, { columns: selectedW.columns.filter((c) => c !== fid) })}
                    placeholder="Add Column"
                    accentColor="#D73184"
                  />

                   {/* Filters */}
                  <DropZone
                    label="Filters"
                    items={selectedW.filters}
                    onDrop={(fid) => updateWidget(selectedW.id, { filters: [...selectedW.filters, fid] })}
                    onRemove={(fid) => updateWidget(selectedW.id, { filters: selectedW.filters.filter((c) => c !== fid) })}
                    placeholder="Add Filters"
                    operator={selectedW.filterOperator}
                    onOperatorChange={(op) => updateWidget(selectedW.id, { filterOperator: op })}
                    customFilters={selectedW.customFilters}
                    onRemoveCustomFilter={handleRemoveCustomFilter}
                    onEditCustomFilter={(cf) => {
                      if (cf.type === "combo") handleOpenComboModal(cf);
                      else handleOpenAnyOfModal(cf);
                    }}
                    onAddCombo={() => handleOpenComboModal()}
                    onAddAnyOf={() => handleOpenAnyOfModal()}
                  />

                  {/* X-Axis */}
                  <DropZone
                    label="X-Axis"
                    items={selectedW.xAxis ? [selectedW.xAxis] : []}
                    onDrop={(fid) => updateWidget(selectedW.id, { xAxis: fid })}
                    onRemove={() => updateWidget(selectedW.id, { xAxis: null })}
                    placeholder="Add X-Axis"
                  />

                  {/* Y-Axis */}
                  <DropZone
                    label="Y-Axis"
                    items={selectedW.yAxis}
                    onDrop={(fid) => updateWidget(selectedW.id, { yAxis: [...selectedW.yAxis, fid] })}
                    onRemove={(fid) => updateWidget(selectedW.id, { yAxis: selectedW.yAxis.filter((c) => c !== fid) })}
                    placeholder="Add Y-Axis"
                  />

                  {/* Show Totals */}
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--foreground)" }}>Show Totals</span>
                    <button
                      className="relative w-[40px] h-[22px] rounded-full cursor-pointer transition-colors"
                      style={{ background: selectedW.showTotals ? "var(--accent)" : "var(--muted)", border: "none" }}
                      onClick={() => updateWidget(selectedW.id, { showTotals: !selectedW.showTotals })}
                    >
                      <span
                        className="absolute top-[2px] size-[18px] rounded-full transition-all"
                        style={{ background: "var(--card)", left: selectedW.showTotals ? 20 : 2 }}
                      />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-[32px] gap-[8px]">
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--muted-foreground)" }}>Select a widget to configure</span>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", textAlign: "center" }}>Click a widget on the canvas, or add a new one</span>
                </div>
              )}

              {/* Separator */}
              <div style={{ borderBottom: "1px solid var(--border)" }} />

              {/* Field search */}
              <div
                className="flex items-center gap-[8px] h-[32px] px-[10px] bg-card"
                style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
              >
                <svg className="size-[13px] shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="var(--muted-foreground)" strokeWidth="1.3" />
                  <path d="M10.5 10.5L14.5 14.5" stroke="var(--muted-foreground)" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <input
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400 }}
                  placeholder="Search"
                  value={fieldSearch}
                  onChange={(e) => setFieldSearch(e.target.value)}
                />
                {selectedW && (
                  <button
                    className="flex items-center justify-center size-[18px] cursor-pointer"
                    style={{ borderRadius: "50%", background: "var(--accent)", border: "none", color: "#fff", fontFamily: FONT, fontSize: "14px", fontWeight: 700, lineHeight: 1 }}
                    title="Add all visible fields"
                  >
                    +
                  </button>
                )}
              </div>

              {/* Available fields list */}
              <div className="flex flex-col gap-[1px]">
                {filteredFields.map((f) => (
                  <DraggableField key={f.id} field={f} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* ─── Custom Filter Modal overlays ─── */}
        {comboModal && comboModal.isOpen && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center"
            style={{
              background: "var(--background-overlay)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setComboModal(null)}
          >
            <div
              className="flex flex-col w-[560px] max-h-[85vh] rounded-lg shadow-lg border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                fontFamily: FONT,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-[16px] py-[12px] border-b" style={{ borderColor: "var(--border)" }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--foreground)" }}>
                  {comboModal.filterId ? "Edit Specific Combinations" : "Match Specific Combinations"}
                </span>
                <button
                  className="cursor-pointer text-muted-foreground hover:text-foreground text-[18px] font-bold"
                  style={{ background: "none", border: "none" }}
                  onClick={() => setComboModal(null)}
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[14px]">
                <p style={{ fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
                  Pick specific value pairs from real data. We will match exact combinations instead of cross-multiplying everything.
                </p>

                {/* Fields Selectors */}
                <div className="grid grid-cols-2 gap-[12px]">
                  <div className="flex flex-col gap-[4px]">
                    <label style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--muted-foreground)" }}>Field A</label>
                    <select
                      value={comboModal.fieldA}
                      onChange={(e) => setComboModal({ ...comboModal, fieldA: e.target.value, selectedPairs: [] })}
                      className="h-[32px] px-[8px] bg-card text-foreground border rounded"
                      style={{ borderColor: "var(--border)", outline: "none" }}
                    >
                      {ALL_FIELDS.filter((f) => f.type !== "123").map((f) => (
                        <option key={f.id} value={f.id}>{f.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <label style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--muted-foreground)" }}>Field B</label>
                    <select
                      value={comboModal.fieldB}
                      onChange={(e) => setComboModal({ ...comboModal, fieldB: e.target.value, selectedPairs: [] })}
                      className="h-[32px] px-[8px] bg-card text-foreground border rounded"
                      style={{ borderColor: "var(--border)", outline: "none" }}
                    >
                      {ALL_FIELDS.filter((f) => f.type !== "123").map((f) => (
                        <option key={f.id} value={f.id}>{f.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Combinations Checklist */}
                <div className="flex flex-col gap-[6px]">
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--muted-foreground)" }}>
                    Available Pairs
                  </span>
                  <div
                    className="flex flex-col gap-[1px] border rounded overflow-y-auto max-h-[200px] p-[4px]"
                    style={{ background: "var(--muted)", borderColor: "var(--border)" }}
                  >
                    {getCombinationsForFields(comboModal.fieldA, comboModal.fieldB).map((c) => {
                      const pKey = `${c.a}|${c.b}`;
                      const checked = comboModal.selectedPairs.includes(pKey);
                      return (
                        <label
                          key={pKey}
                          className="flex items-center gap-[10px] px-[8px] py-[6px] rounded cursor-pointer transition-colors"
                          style={{
                            background: checked ? "rgba(0,119,219,0.08)" : "var(--card)",
                          }}
                          onMouseEnter={(e) => {
                            if (!checked) e.currentTarget.style.background = "var(--muted)";
                          }}
                          onMouseLeave={(e) => {
                            if (!checked) e.currentTarget.style.background = "var(--card)";
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            className="accent-accent"
                            onChange={(e) => {
                              const next = e.target.checked
                                ? [...comboModal.selectedPairs, pKey]
                                : comboModal.selectedPairs.filter((pk) => pk !== pKey);
                              setComboModal({ ...comboModal, selectedPairs: next });
                            }}
                          />
                          <span style={{ fontSize: "13px", color: "var(--foreground)" }}>{c.a} · {c.b}</span>
                          <span className="ml-auto font-mono text-[11px] text-muted-foreground tabular-nums">
                            {c.count.toLocaleString()} clicks
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-[8px] px-[16px] py-[12px] border-t" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => setComboModal(null)}
                  className="h-[32px] px-[14px] cursor-pointer hover:bg-muted/40 transition-colors border rounded"
                  style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 600, borderColor: "var(--border)", background: "transparent", color: "var(--foreground)" }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveComboFilter(comboModal.filterId, comboModal.fieldA, comboModal.fieldB, comboModal.selectedPairs)}
                  className="h-[32px] px-[14px] cursor-pointer transition-colors border rounded"
                  style={{
                    fontFamily: FONT, fontSize: "13px", fontWeight: 600,
                    background: "var(--button-primary)", color: "var(--button-primary-foreground)",
                    borderColor: "transparent"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        )}

        {anyOfModal && anyOfModal.isOpen && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center"
            style={{
              background: "var(--background-overlay)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setAnyOfModal(null)}
          >
            <div
              className="flex flex-col w-[560px] max-h-[85vh] rounded-lg shadow-lg border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                fontFamily: FONT,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-[16px] py-[12px] border-b" style={{ borderColor: "var(--border)" }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--foreground)" }}>
                  {anyOfModal.filterId ? "Edit 'Any of these' Filter" : "Match 'Any of these' (OR Group)"}
                </span>
                <button
                  className="cursor-pointer text-muted-foreground hover:text-foreground text-[18px] font-bold"
                  style={{ background: "none", border: "none" }}
                  onClick={() => setAnyOfModal(null)}
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[14px]">
                <p style={{ fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
                  Create a group of rules where **at least one** must pass. This enables OR logic across multiple metrics or dimensions.
                </p>

                {/* Rules List */}
                <div className="flex flex-col gap-[8px]">
                  {anyOfModal.rules.map((rule, idx) => (
                    <div key={idx} className="flex flex-col gap-[8px]">
                      {idx > 0 && (
                        <div className="flex items-center justify-center my-[2px]">
                          <span
                            className="px-[10px] py-[2px] text-[10px] font-black rounded-full select-none text-[#b25e09] bg-[#b25e09]/15"
                            style={{ letterSpacing: "0.05em" }}
                          >
                            OR
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-[8px] p-[10px] border rounded bg-muted/30" style={{ borderColor: "var(--border)" }}>
                        {/* Field dropdown */}
                        <select
                          value={rule.field}
                          onChange={(e) => {
                            const nextRules = [...anyOfModal.rules];
                            nextRules[idx].field = e.target.value;
                            setAnyOfModal({ ...anyOfModal, rules: nextRules });
                          }}
                          className="h-[32px] px-[6px] bg-card text-foreground border rounded flex-1 text-[13px]"
                          style={{ borderColor: "var(--border)", outline: "none" }}
                        >
                          {ALL_FIELDS.map((f) => (
                            <option key={f.id} value={f.id}>{f.label}</option>
                          ))}
                        </select>

                        {/* Operator dropdown */}
                        <select
                          value={rule.operator}
                          onChange={(e) => {
                            const nextRules = [...anyOfModal.rules];
                            nextRules[idx].operator = e.target.value;
                            setAnyOfModal({ ...anyOfModal, rules: nextRules });
                          }}
                          className="h-[32px] px-[6px] bg-card text-foreground border rounded w-[90px] text-[13px]"
                          style={{ borderColor: "var(--border)", outline: "none" }}
                        >
                          <option value=">">&gt;</option>
                          <option value="<">&lt;</option>
                          <option value="=">=</option>
                          <option value="!=">!=</option>
                          <option value="contains">contains</option>
                        </select>

                        {/* Value Input */}
                        <input
                          type="text"
                          value={rule.value}
                          onChange={(e) => {
                            const nextRules = [...anyOfModal.rules];
                            nextRules[idx].value = e.target.value;
                            setAnyOfModal({ ...anyOfModal, rules: nextRules });
                          }}
                          className="h-[32px] px-[8px] bg-card text-foreground border rounded w-[110px] text-[13px]"
                          style={{ borderColor: "var(--border)", outline: "none" }}
                          placeholder="Value"
                        />

                        {/* Delete rule button */}
                        {anyOfModal.rules.length > 1 && (
                          <button
                            onClick={() => {
                              const nextRules = anyOfModal.rules.filter((_, i) => i !== idx);
                              setAnyOfModal({ ...anyOfModal, rules: nextRules });
                            }}
                            className="cursor-pointer flex items-center justify-center size-[24px] rounded hover:bg-destructive/15 text-muted-foreground hover:text-destructive"
                            style={{ background: "none", border: "none", fontSize: "16px" }}
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Rule Button */}
                <button
                  onClick={() => {
                    const nextRules = [...anyOfModal.rules, { field: "clicks", operator: ">", value: "0" }];
                    setAnyOfModal({ ...anyOfModal, rules: nextRules });
                  }}
                  className="self-start text-[13px] font-semibold text-[#b25e09] hover:underline bg-transparent border-none cursor-pointer py-[4px]"
                >
                  + Add another OR rule
                </button>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-[8px] px-[16px] py-[12px] border-t" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => setAnyOfModal(null)}
                  className="h-[32px] px-[14px] cursor-pointer hover:bg-muted/40 transition-colors border rounded"
                  style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 600, borderColor: "var(--border)", background: "transparent", color: "var(--foreground)" }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveAnyOfFilter(anyOfModal.filterId, anyOfModal.rules)}
                  className="h-[32px] px-[14px] cursor-pointer transition-colors border rounded"
                  style={{
                    fontFamily: FONT, fontSize: "13px", fontWeight: 600,
                    background: "var(--button-primary)", color: "var(--button-primary-foreground)",
                    borderColor: "transparent"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}