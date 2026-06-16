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

const TREND_DATA = [
  { month: "Sep", clicks: 142_000, revenue: 98_400, partners: 118, convRate: 2.41 },
  { month: "Oct", clicks: 156_000, revenue: 108_200, partners: 124, convRate: 2.48 },
  { month: "Nov", clicks: 189_000, revenue: 134_600, partners: 131, convRate: 2.56 },
  { month: "Dec", clicks: 210_000, revenue: 152_300, partners: 138, convRate: 2.62 },
  { month: "Jan", clicks: 178_000, revenue: 128_900, partners: 142, convRate: 2.68 },
  { month: "Feb", clicks: 195_000, revenue: 141_700, partners: 148, convRate: 2.74 },
];

const TABLE_DATA = [
  { id: "1", metric: "Clicks", current: "195,000", previous: "178,000", change: "+9.6%", up: true },
  { id: "2", metric: "Revenue", current: "$141,700", previous: "$128,900", change: "+9.9%", up: true },
  { id: "3", metric: "Active Partners", current: "148", previous: "142", change: "+4.2%", up: true },
  { id: "4", metric: "Avg. Conv. Rate", current: "2.74%", previous: "2.68%", change: "+2.2%", up: true },
  { id: "5", metric: "Actions", current: "5,343", previous: "4,770", change: "+12.0%", up: true },
  { id: "6", metric: "Avg. EPC", current: "$0.73", previous: "$0.72", change: "+1.4%", up: true },
];

const STAT_ACCENTS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--accent)"];

/* ─── Component ─── */

export function TrendsPage() {
  const [period, setPeriod] = useState("6 Months");

  return (
    <ReportPageShell
      title="Trends"
      subtitle="Analyze patterns and trends in your program performance over time"
    >
      {/* Stat Cards */}
      <div className="flex gap-[12px] w-full">
        {[
          { label: "Clicks (This Month)", value: "195,000" },
          { label: "Revenue (This Month)", value: "$141,700" },
          { label: "Active Partners", value: "148" },
          { label: "Conv. Rate", value: "2.74%" },
        ].map((s, i) => (
          <StatCard key={s.label} label={s.label} value={s.value} accentColor={STAT_ACCENTS[i]} />
        ))}
      </div>

      {/* Chart */}
      <ChartCard
        title="Performance Trend"
        actions={
          <ReportSelect
            value={period}
            onChange={setPeriod}
            options={[
              { value: "3 Months", label: "3 Months" },
              { value: "6 Months", label: "6 Months" },
              { value: "12 Months", label: "12 Months" },
            ]}
          />
        }
      >
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={TREND_DATA} margin={{ top: 4, right: 12, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray={chartTokens.gridDash} stroke={chartTokens.gridStroke} vertical={false} />
            <XAxis dataKey="month" tick={chartTokens.axisTick} axisLine={chartTokens.axisLine} tickLine={false} />
            <YAxis yAxisId="left" tick={chartTokens.axisTick} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)} />
            <YAxis yAxisId="right" orientation="right" tick={chartTokens.axisTick} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}`} />
            <Tooltip contentStyle={chartTokens.tooltipStyle} labelStyle={chartTokens.tooltipLabelStyle} itemStyle={chartTokens.tooltipItemStyle} />
            <Legend wrapperStyle={chartTokens.legendStyle} />
            <Line yAxisId="left" type="monotone" dataKey="clicks" name="Clicks" stroke="var(--chart-1)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: "var(--chart-1)" }} />
            <Line yAxisId="right" type="monotone" dataKey="revenue" name="Revenue" stroke="var(--chart-2)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0, fill: "var(--chart-2)" }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Table */}
      <ReportTableCard title="Month-over-Month Comparison" count={TABLE_DATA.length} countLabel="metrics">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <Th>Metric</Th>
              <Th align="right">Current Period</Th>
              <Th align="right">Previous Period</Th>
              <Th align="right">Change</Th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-muted/30" style={{ borderBottom: "1px solid var(--border)" }}>
                <Td bold>{row.metric}</Td>
                <Td align="right">{row.current}</Td>
                <Td muted align="right">{row.previous}</Td>
                <Td align="right">
                  <span
                    className="font-['Sarabun',sans-serif]"
                    style={{
                      fontWeight: 600,
                      fontSize: "var(--text-base)",
                      color: row.up ? "var(--positive)" : "var(--negative)",
                    }}
                  >
                    {row.change}
                  </span>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReportTableCard>
    </ReportPageShell>
  );
}