import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  ReportPageShell, ChartCard, StatCard, ReportTableCard,
  ReportSearchInput, ReportSelect, StatusBadge,
  Th, Td, chartTokens,
} from "../components/ReportPageShell";

/* ─── Data ─── */

interface AdRow {
  id: string;
  adName: string;
  adType: string;
  status: string;
  campaign: string;
  clicks: number;
  actions: number;
  revenue: number;
  epc: number;
  convRate: number;
}

const MOCK_DATA: AdRow[] = [
  { id: "1", adName: "Spring Sale Banner 728x90", adType: "Banner", status: "Active", campaign: "Spring 2026", clicks: 12_340, actions: 356, revenue: 9_870.0, epc: 0.8, convRate: 2.89 },
  { id: "2", adName: "Homepage Hero Text Link", adType: "Text Link", status: "Active", campaign: "Evergreen", clicks: 9_870, actions: 298, revenue: 8_120.5, epc: 0.82, convRate: 3.02 },
  { id: "3", adName: "Product Feed - Shoes", adType: "Product", status: "Active", campaign: "Spring 2026", clicks: 8_430, actions: 245, revenue: 7_210.0, epc: 0.86, convRate: 2.91 },
  { id: "4", adName: "Clearance 300x250", adType: "Banner", status: "Active", campaign: "Clearance Q1", clicks: 7_650, actions: 198, revenue: 5_430.75, epc: 0.71, convRate: 2.59 },
  { id: "5", adName: "Email Exclusive Coupon", adType: "Coupon", status: "Active", campaign: "Evergreen", clicks: 6_290, actions: 187, revenue: 5_120.0, epc: 0.81, convRate: 2.97 },
  { id: "6", adName: "Category Deep Link - Women", adType: "Text Link", status: "Paused", campaign: "Spring 2026", clicks: 5_100, actions: 132, revenue: 3_670.3, epc: 0.72, convRate: 2.59 },
  { id: "7", adName: "Retargeting Pixel 160x600", adType: "Banner", status: "Active", campaign: "Retargeting", clicks: 4_780, actions: 124, revenue: 3_450.0, epc: 0.72, convRate: 2.59 },
  { id: "8", adName: "Video Pre-roll 15s", adType: "Video", status: "Active", campaign: "Brand Awareness", clicks: 3_920, actions: 89, revenue: 2_780.5, epc: 0.71, convRate: 2.27 },
  { id: "9", adName: "Mobile Banner 320x50", adType: "Banner", status: "Active", campaign: "Mobile Push", clicks: 3_540, actions: 98, revenue: 2_540.0, epc: 0.72, convRate: 2.77 },
  { id: "10", adName: "Loyalty Program Link", adType: "Text Link", status: "Pending", campaign: "Loyalty", clicks: 2_100, actions: 54, revenue: 1_430.25, epc: 0.68, convRate: 2.57 },
];

const AD_TYPES = ["All", "Banner", "Text Link", "Product", "Coupon", "Video"];

const CHART_DATA = [
  { week: "Jan 5", Banner: 4800, "Text Link": 3200, Product: 1600, Coupon: 1200, Video: 780 },
  { week: "Jan 12", Banner: 5100, "Text Link": 3400, Product: 1750, Coupon: 1280, Video: 820 },
  { week: "Jan 19", Banner: 5500, "Text Link": 3600, Product: 1900, Coupon: 1350, Video: 860 },
  { week: "Jan 26", Banner: 5300, "Text Link": 3500, Product: 1850, Coupon: 1400, Video: 900 },
  { week: "Feb 2", Banner: 5800, "Text Link": 3800, Product: 2050, Coupon: 1500, Video: 940 },
  { week: "Feb 9", Banner: 6200, "Text Link": 4100, Product: 2200, Coupon: 1580, Video: 980 },
  { week: "Feb 16", Banner: 6540, "Text Link": 4370, Product: 2310, Coupon: 1640, Video: 1020 },
];

const LINES = [
  { key: "Banner", color: "var(--chart-1)" },
  { key: "Text Link", color: "var(--chart-2)" },
  { key: "Product", color: "var(--chart-3)" },
  { key: "Coupon", color: "var(--chart-4)" },
  { key: "Video", color: "var(--accent)" },
];

const STAT_ACCENTS = ["var(--chart-1)", "var(--chart-3)", "var(--chart-2)", "var(--accent)"];

/* ─── Helpers ─── */

function fmtCur(v: number) { return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmtNum(v: number) { return v.toLocaleString("en-US"); }

/* ─── Type Badge ─── */
function TypeBadge({ type }: { type: string }) {
  return (
    <span
      className="inline-flex items-center px-[10px] h-[22px] font-['Sarabun',sans-serif] bg-muted text-foreground"
      style={{
        borderRadius: "var(--radius-button)",
        fontSize: "var(--text-sm)",
        fontWeight: 400,
        lineHeight: "1",
      }}
    >
      {type}
    </span>
  );
}

/* ─── Component ─── */

export function PerformanceByAdPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = MOCK_DATA.filter((r) => {
    const matchSearch =
      !search ||
      r.adName.toLowerCase().includes(search.toLowerCase()) ||
      r.campaign.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "All" || r.adType === typeFilter;
    return matchSearch && matchType;
  });

  const totalClicks = filtered.reduce((s, r) => s + r.clicks, 0);
  const totalActions = filtered.reduce((s, r) => s + r.actions, 0);
  const totalRevenue = filtered.reduce((s, r) => s + r.revenue, 0);

  const stats = [
    { label: "Total Clicks", value: fmtNum(totalClicks) },
    { label: "Total Actions", value: fmtNum(totalActions) },
    { label: "Total Revenue", value: fmtCur(totalRevenue) },
    { label: "Ads", value: String(filtered.length) },
  ];

  return (
    <ReportPageShell
      title="Performance by Ad"
      subtitle="Analyze clicks, conversions and revenue across ad creatives and campaigns"
    >
      {/* Stat Cards */}
      <div className="flex gap-[12px] w-full">
        {stats.map((s, i) => (
          <StatCard key={s.label} label={s.label} value={s.value} accentColor={STAT_ACCENTS[i]} />
        ))}
      </div>

      {/* Chart */}
      <ChartCard title="Clicks by Ad Type (Weekly)">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={CHART_DATA} margin={{ top: 4, right: 12, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray={chartTokens.gridDash} stroke={chartTokens.gridStroke} vertical={false} />
            <XAxis dataKey="week" tick={chartTokens.axisTick} axisLine={chartTokens.axisLine} tickLine={false} />
            <YAxis tick={chartTokens.axisTick} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)} />
            <Tooltip contentStyle={chartTokens.tooltipStyle} labelStyle={chartTokens.tooltipLabelStyle} itemStyle={chartTokens.tooltipItemStyle} />
            <Legend wrapperStyle={chartTokens.legendStyle} />
            {LINES.map((l) => (
              <Line key={l.key} type="monotone" dataKey={l.key} stroke={l.color} strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: l.color }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Filters */}
      <div className="flex gap-[10px] items-center">
        <ReportSearchInput value={search} onChange={setSearch} placeholder="Search ads or campaigns..." />
        <ReportSelect
          value={typeFilter}
          onChange={setTypeFilter}
          options={AD_TYPES.map((t) => ({ value: t, label: t === "All" ? "All Types" : t }))}
        />
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground ml-auto"
          style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}
        >
          {filtered.length} ads
        </span>
      </div>

      {/* Table */}
      <ReportTableCard title="Ad Details" count={filtered.length} countLabel="ads">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <Th>Ad Name</Th>
              <Th>Type</Th>
              <Th>Status</Th>
              <Th>Campaign</Th>
              <Th align="right">Clicks</Th>
              <Th align="right">Actions</Th>
              <Th align="right">Revenue</Th>
              <Th align="right">EPC</Th>
              <Th align="right">Conv.</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-muted/30 cursor-pointer" style={{ borderBottom: "1px solid var(--border)" }}>
                <Td bold>
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
                    {row.adName}
                  </span>
                </Td>
                <Td><TypeBadge type={row.adType} /></Td>
                <Td><StatusBadge status={row.status} /></Td>
                <Td muted>{row.campaign}</Td>
                <Td align="right">{fmtNum(row.clicks)}</Td>
                <Td align="right">{fmtNum(row.actions)}</Td>
                <Td bold align="right">{fmtCur(row.revenue)}</Td>
                <Td align="right">${row.epc.toFixed(2)}</Td>
                <Td align="right">{row.convRate.toFixed(2)}%</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReportTableCard>
    </ReportPageShell>
  );
}
