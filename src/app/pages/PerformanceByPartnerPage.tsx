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

const MOCK_DATA = [
  { id: "1", partner: "CouponFollow", status: "Active", clicks: 45_230, actions: 1_287, revenue: 34_560.0, epc: 0.76, convRate: 2.85 },
  { id: "2", partner: "RetailMeNot", status: "Active", clicks: 38_100, actions: 982, revenue: 28_410.5, epc: 0.75, convRate: 2.58 },
  { id: "3", partner: "Honey / PayPal", status: "Active", clicks: 31_450, actions: 876, revenue: 22_890.0, epc: 0.73, convRate: 2.78 },
  { id: "4", partner: "Skimlinks", status: "Active", clicks: 27_800, actions: 654, revenue: 18_320.75, epc: 0.66, convRate: 2.35 },
  { id: "5", partner: "BrandCycle", status: "Paused", clicks: 19_340, actions: 412, revenue: 12_770.0, epc: 0.66, convRate: 2.13 },
  { id: "6", partner: "Connexity", status: "Active", clicks: 16_890, actions: 398, revenue: 11_245.3, epc: 0.67, convRate: 2.36 },
  { id: "7", partner: "ShareASale Pub", status: "Active", clicks: 14_200, actions: 310, revenue: 9_870.0, epc: 0.7, convRate: 2.18 },
  { id: "8", partner: "Impact Radius", status: "Active", clicks: 12_750, actions: 287, revenue: 8_430.5, epc: 0.66, convRate: 2.25 },
  { id: "9", partner: "Awin Network", status: "Pending", clicks: 8_900, actions: 195, revenue: 5_680.0, epc: 0.64, convRate: 2.19 },
  { id: "10", partner: "CJ Affiliate", status: "Active", clicks: 7_340, actions: 168, revenue: 4_920.25, epc: 0.67, convRate: 2.29 },
];

const CHART_DATA = [
  { week: "Jan 5", CouponFollow: 9200, RetailMeNot: 7800, "Honey / PayPal": 6400, Skimlinks: 5600, BrandCycle: 4100 },
  { week: "Jan 12", CouponFollow: 9800, RetailMeNot: 8100, "Honey / PayPal": 6700, Skimlinks: 5900, BrandCycle: 4300 },
  { week: "Jan 19", CouponFollow: 10400, RetailMeNot: 8500, "Honey / PayPal": 7100, Skimlinks: 6200, BrandCycle: 4000 },
  { week: "Jan 26", CouponFollow: 10100, RetailMeNot: 8800, "Honey / PayPal": 7400, Skimlinks: 6400, BrandCycle: 3900 },
  { week: "Feb 2", CouponFollow: 11200, RetailMeNot: 9100, "Honey / PayPal": 7800, Skimlinks: 6700, BrandCycle: 4200 },
  { week: "Feb 9", CouponFollow: 11800, RetailMeNot: 9600, "Honey / PayPal": 8200, Skimlinks: 7100, BrandCycle: 4500 },
  { week: "Feb 16", CouponFollow: 12430, RetailMeNot: 9870, "Honey / PayPal": 8530, Skimlinks: 7400, BrandCycle: 4680 },
];

const LINES = [
  { key: "CouponFollow", color: "var(--chart-1)" },
  { key: "RetailMeNot", color: "var(--chart-2)" },
  { key: "Honey / PayPal", color: "var(--chart-3)" },
  { key: "Skimlinks", color: "var(--chart-4)" },
  { key: "BrandCycle", color: "var(--accent)" },
];

const STAT_ACCENTS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--accent)"];

/* ─── Helpers ─── */

function fmtCur(v: number) { return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmtNum(v: number) { return v.toLocaleString("en-US"); }

/* ─── Component ─── */

export function PerformanceByPartnerPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = MOCK_DATA.filter((r) => {
    const matchSearch = !search || r.partner.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalClicks = filtered.reduce((s, r) => s + r.clicks, 0);
  const totalActions = filtered.reduce((s, r) => s + r.actions, 0);
  const totalRevenue = filtered.reduce((s, r) => s + r.revenue, 0);

  const stats = [
    { label: "Total Clicks", value: fmtNum(totalClicks) },
    { label: "Total Actions", value: fmtNum(totalActions) },
    { label: "Total Revenue", value: fmtCur(totalRevenue) },
    { label: "Partners", value: String(filtered.length) },
  ];

  return (
    <ReportPageShell
      title="Performance by Partner"
      subtitle="Track clicks, actions and revenue across your partner network"
    >
      {/* Stat Cards */}
      <div className="flex gap-[12px] w-full">
        {stats.map((s, i) => (
          <StatCard key={s.label} label={s.label} value={s.value} accentColor={STAT_ACCENTS[i]} />
        ))}
      </div>

      {/* Chart */}
      <ChartCard title="Clicks by Partner (Weekly)">
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
        <ReportSearchInput value={search} onChange={setSearch} placeholder="Search partners..." />
        <ReportSelect
          value={statusFilter}
          onChange={setStatusFilter}
          options={[
            { value: "All", label: "All Statuses" },
            { value: "Active", label: "Active" },
            { value: "Paused", label: "Paused" },
            { value: "Pending", label: "Pending" },
          ]}
        />
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground ml-auto"
          style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}
        >
          {filtered.length} partners
        </span>
      </div>

      {/* Table */}
      <ReportTableCard title="Partner Details" count={filtered.length} countLabel="partners">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <Th>Partner</Th>
              <Th>Status</Th>
              <Th align="right">Clicks</Th>
              <Th align="right">Actions</Th>
              <Th align="right">Revenue</Th>
              <Th align="right">EPC</Th>
              <Th align="right">Conv. Rate</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-muted/30 cursor-pointer" style={{ borderBottom: "1px solid var(--border)" }}>
                <Td bold>{row.partner}</Td>
                <Td><StatusBadge status={row.status} /></Td>
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
