import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  ReportPageShell, ChartCard, StatCard, ReportTableCard,
  ReportSelect, Th, Td, chartTokens,
} from "../components/ReportPageShell";

/* ─── Data ─── */

interface DayRow {
  id: string;
  date: string;
  dayOfWeek: string;
  clicks: number;
  actions: number;
  revenue: number;
  epc: number;
  convRate: number;
  impressions: number;
}

const MOCK_DATA: DayRow[] = [
  { id: "1", date: "02/16/2026", dayOfWeek: "Mon", clicks: 6_420, actions: 187, revenue: 5_130.0, epc: 0.8, convRate: 2.91, impressions: 84_300 },
  { id: "2", date: "02/15/2026", dayOfWeek: "Sun", clicks: 4_890, actions: 128, revenue: 3_610.5, epc: 0.74, convRate: 2.62, impressions: 62_100 },
  { id: "3", date: "02/14/2026", dayOfWeek: "Sat", clicks: 5_130, actions: 145, revenue: 4_020.0, epc: 0.78, convRate: 2.83, impressions: 67_900 },
  { id: "4", date: "02/13/2026", dayOfWeek: "Fri", clicks: 7_210, actions: 210, revenue: 5_890.75, epc: 0.82, convRate: 2.91, impressions: 91_400 },
  { id: "5", date: "02/12/2026", dayOfWeek: "Thu", clicks: 6_780, actions: 195, revenue: 5_410.0, epc: 0.8, convRate: 2.88, impressions: 87_600 },
  { id: "6", date: "02/11/2026", dayOfWeek: "Wed", clicks: 6_540, actions: 182, revenue: 5_080.3, epc: 0.78, convRate: 2.78, impressions: 83_200 },
  { id: "7", date: "02/10/2026", dayOfWeek: "Tue", clicks: 6_320, actions: 176, revenue: 4_870.0, epc: 0.77, convRate: 2.79, impressions: 80_500 },
  { id: "8", date: "02/09/2026", dayOfWeek: "Mon", clicks: 6_100, actions: 170, revenue: 4_690.5, epc: 0.77, convRate: 2.79, impressions: 78_400 },
  { id: "9", date: "02/08/2026", dayOfWeek: "Sun", clicks: 4_560, actions: 118, revenue: 3_220.0, epc: 0.71, convRate: 2.59, impressions: 58_900 },
  { id: "10", date: "02/07/2026", dayOfWeek: "Sat", clicks: 4_980, actions: 139, revenue: 3_780.25, epc: 0.76, convRate: 2.79, impressions: 65_100 },
  { id: "11", date: "02/06/2026", dayOfWeek: "Fri", clicks: 7_050, actions: 202, revenue: 5_720.0, epc: 0.81, convRate: 2.87, impressions: 89_800 },
  { id: "12", date: "02/05/2026", dayOfWeek: "Thu", clicks: 6_600, actions: 188, revenue: 5_210.0, epc: 0.79, convRate: 2.85, impressions: 85_300 },
  { id: "13", date: "02/04/2026", dayOfWeek: "Wed", clicks: 6_380, actions: 179, revenue: 4_950.0, epc: 0.78, convRate: 2.8, impressions: 82_700 },
  { id: "14", date: "02/03/2026", dayOfWeek: "Tue", clicks: 6_200, actions: 172, revenue: 4_810.5, epc: 0.78, convRate: 2.77, impressions: 79_800 },
];

const DATE_RANGE_OPTIONS = [
  { value: "Last 7 Days", label: "Last 7 Days" },
  { value: "Last 14 Days", label: "Last 14 Days" },
  { value: "Last 30 Days", label: "Last 30 Days" },
  { value: "This Month", label: "This Month" },
  { value: "Last Month", label: "Last Month" },
];

const CHART_DATA = [
  { date: "Feb 3", clicks: 6200, revenue: 4810, actions: 172 },
  { date: "Feb 4", clicks: 6380, revenue: 4950, actions: 179 },
  { date: "Feb 5", clicks: 6600, revenue: 5210, actions: 188 },
  { date: "Feb 6", clicks: 7050, revenue: 5720, actions: 202 },
  { date: "Feb 7", clicks: 4980, revenue: 3780, actions: 139 },
  { date: "Feb 8", clicks: 4560, revenue: 3220, actions: 118 },
  { date: "Feb 9", clicks: 6100, revenue: 4690, actions: 170 },
  { date: "Feb 10", clicks: 6320, revenue: 4870, actions: 176 },
  { date: "Feb 11", clicks: 6540, revenue: 5080, actions: 182 },
  { date: "Feb 12", clicks: 6780, revenue: 5410, actions: 195 },
  { date: "Feb 13", clicks: 7210, revenue: 5890, actions: 210 },
  { date: "Feb 14", clicks: 5130, revenue: 4020, actions: 145 },
  { date: "Feb 15", clicks: 4890, revenue: 3610, actions: 128 },
  { date: "Feb 16", clicks: 6420, revenue: 5130, actions: 187 },
];

const STAT_ACCENTS = ["var(--chart-1)", "var(--chart-3)", "var(--chart-2)", "var(--accent)"];

/* ─── Helpers ─── */

function fmtCur(v: number) { return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmtNum(v: number) { return v.toLocaleString("en-US"); }

/* ─── Component ─── */

export function PerformanceByDayPage() {
  const [dateRange, setDateRange] = useState("Last 14 Days");

  const rangeNum = dateRange === "Last 7 Days" ? 7 : dateRange === "Last 14 Days" ? 14 : MOCK_DATA.length;
  const filtered = MOCK_DATA.slice(0, rangeNum);

  const totalClicks = filtered.reduce((s, r) => s + r.clicks, 0);
  const totalActions = filtered.reduce((s, r) => s + r.actions, 0);
  const totalRevenue = filtered.reduce((s, r) => s + r.revenue, 0);
  const avgEpc = filtered.length > 0 ? filtered.reduce((s, r) => s + r.epc, 0) / filtered.length : 0;

  const stats = [
    { label: "Total Clicks", value: fmtNum(totalClicks) },
    { label: "Total Actions", value: fmtNum(totalActions) },
    { label: "Total Revenue", value: fmtCur(totalRevenue) },
    { label: "Avg. EPC", value: "$" + avgEpc.toFixed(2) },
  ];

  return (
    <ReportPageShell
      title="Performance by Day"
      subtitle="Daily breakdown of impressions, clicks, actions and revenue"
    >
      {/* Stat Cards */}
      <div className="flex gap-[12px] w-full">
        {stats.map((s, i) => (
          <StatCard key={s.label} label={s.label} value={s.value} accentColor={STAT_ACCENTS[i]} />
        ))}
      </div>

      {/* Chart */}
      <ChartCard
        title="Daily Clicks & Revenue"
        actions={
          <ReportSelect value={dateRange} onChange={setDateRange} options={DATE_RANGE_OPTIONS} />
        }
      >
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={CHART_DATA} margin={{ top: 4, right: 12, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray={chartTokens.gridDash} stroke={chartTokens.gridStroke} vertical={false} />
            <XAxis dataKey="date" tick={chartTokens.axisTick} axisLine={chartTokens.axisLine} tickLine={false} />
            <YAxis
              yAxisId="left"
              tick={chartTokens.axisTick} axisLine={false} tickLine={false}
              tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)}
            />
            <YAxis
              yAxisId="right" orientation="right"
              tick={chartTokens.axisTick} axisLine={false} tickLine={false}
              tickFormatter={(v: number) => `$${v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}`}
            />
            <Tooltip contentStyle={chartTokens.tooltipStyle} labelStyle={chartTokens.tooltipLabelStyle} itemStyle={chartTokens.tooltipItemStyle} />
            <Legend wrapperStyle={chartTokens.legendStyle} />
            <Line yAxisId="left" type="monotone" dataKey="clicks" name="Clicks" stroke="var(--chart-1)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: "var(--chart-1)" }} />
            <Line yAxisId="right" type="monotone" dataKey="revenue" name="Revenue" stroke="var(--chart-2)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: "var(--chart-2)" }} />
            <Line yAxisId="left" type="monotone" dataKey="actions" name="Actions" stroke="var(--chart-3)" strokeWidth={2} strokeDasharray="5 5" dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: "var(--chart-3)" }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Table */}
      <ReportTableCard title="Daily Breakdown" count={filtered.length} countLabel="days">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <Th>Date</Th>
              <Th>Day</Th>
              <Th align="right">Impressions</Th>
              <Th align="right">Clicks</Th>
              <Th align="right">Actions</Th>
              <Th align="right">Revenue</Th>
              <Th align="right">EPC</Th>
              <Th align="right">Conv. Rate</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-muted/30" style={{ borderBottom: "1px solid var(--border)" }}>
                <Td bold>{row.date}</Td>
                <Td muted>{row.dayOfWeek}</Td>
                <Td align="right">{fmtNum(row.impressions)}</Td>
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
