import { useState, useMemo } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  XCircle,
  CalendarDays,
  DollarSign,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

/* ──────────────────────────────── Mock Data ──────────────────────────────── */

const kpiCards = [
  {
    label: "Total Payouts",
    value: "$284,392.50",
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
    period: "vs last month",
  },
  {
    label: "Pending Payouts",
    value: "$58,745.11",
    change: "-3.2%",
    trend: "down" as const,
    icon: Clock,
    period: "vs last month",
  },
  {
    label: "Completed This Month",
    value: "147",
    change: "+8.7%",
    trend: "up" as const,
    icon: CheckCircle2,
    period: "vs last month",
  },
  {
    label: "Active Partners",
    value: "89",
    change: "+5.1%",
    trend: "up" as const,
    icon: Users,
    period: "vs last month",
  },
];

const trendData7D = [
  { date: "Mon", amount: 12400 },
  { date: "Tue", amount: 18200 },
  { date: "Wed", amount: 15800 },
  { date: "Thu", amount: 22100 },
  { date: "Fri", amount: 19500 },
  { date: "Sat", amount: 8900 },
  { date: "Sun", amount: 11300 },
];

const trendData30D = [
  { date: "Week 1", amount: 68400 },
  { date: "Week 2", amount: 72100 },
  { date: "Week 3", amount: 65800 },
  { date: "Week 4", amount: 78100 },
];

const trendData90D = [
  { date: "Jan", amount: 198000 },
  { date: "Feb", amount: 215000 },
  { date: "Mar", amount: 284000 },
];

const trendData1Y = [
  { date: "Jan", amount: 145000 },
  { date: "Feb", amount: 158000 },
  { date: "Mar", amount: 172000 },
  { date: "Apr", amount: 164000 },
  { date: "May", amount: 189000 },
  { date: "Jun", amount: 201000 },
  { date: "Jul", amount: 215000 },
  { date: "Aug", amount: 198000 },
  { date: "Sep", amount: 225000 },
  { date: "Oct", amount: 247000 },
  { date: "Nov", amount: 268000 },
  { date: "Dec", amount: 284000 },
];

const trendDataMap: Record<string, typeof trendData7D> = {
  "7D": trendData7D,
  "30D": trendData30D,
  "90D": trendData90D,
  "1Y": trendData1Y,
};

const partnerBreakdown = [
  { partner: "Krista Horton", amount: 42500, percentage: 15 },
  { partner: "A Pinch of Healthy", amount: 38200, percentage: 13.4 },
  { partner: "Sarah M.", amount: 35800, percentage: 12.6 },
  { partner: "HollyStrand", amount: 31200, percentage: 11 },
  { partner: "Natalie Borton", amount: 28900, percentage: 10.2 },
  { partner: "Jess Keys", amount: 24600, percentage: 8.7 },
  { partner: "Others", amount: 83192, percentage: 29.1 },
];

type PayoutStatus = "Completed" | "Pending" | "Failed";

interface Payout {
  id: string;
  partner: string;
  amount: string;
  date: string;
  status: PayoutStatus;
  method: string;
}

const recentPayouts: Payout[] = [
  { id: "PAY-001", partner: "Krista Horton", amount: "$4,250.00", date: "Feb 14, 2026", status: "Completed", method: "ACH Transfer" },
  { id: "PAY-002", partner: "A Pinch of Healthy", amount: "$3,820.00", date: "Feb 14, 2026", status: "Completed", method: "Wire Transfer" },
  { id: "PAY-003", partner: "Sarah M.", amount: "$2,150.00", date: "Feb 13, 2026", status: "Pending", method: "ACH Transfer" },
  { id: "PAY-004", partner: "HollyStrand", amount: "$3,120.00", date: "Feb 13, 2026", status: "Completed", method: "PayPal" },
  { id: "PAY-005", partner: "Natalie Borton", amount: "$1,890.00", date: "Feb 12, 2026", status: "Failed", method: "ACH Transfer" },
  { id: "PAY-006", partner: "Jess Keys", amount: "$2,460.00", date: "Feb 12, 2026", status: "Pending", method: "Wire Transfer" },
  { id: "PAY-007", partner: "Mike Torres", amount: "$1,750.00", date: "Feb 11, 2026", status: "Completed", method: "ACH Transfer" },
  { id: "PAY-008", partner: "Amy Lin", amount: "$3,340.00", date: "Feb 11, 2026", status: "Completed", method: "PayPal" },
];

const upcomingPayments = [
  { partner: "Krista Horton", amount: "$4,500.00", dueDate: "Feb 20, 2026", campaign: "Spring Collection" },
  { partner: "A Pinch of Healthy", amount: "$2,800.00", dueDate: "Feb 22, 2026", campaign: "Healthy Living Q1" },
  { partner: "Sarah M.", amount: "$3,100.00", dueDate: "Feb 25, 2026", campaign: "Lifestyle Series" },
  { partner: "HollyStrand", amount: "$1,950.00", dueDate: "Feb 28, 2026", campaign: "Brand Awareness" },
  { partner: "Natalie Borton", amount: "$2,200.00", dueDate: "Mar 01, 2026", campaign: "Spring Collection" },
];

const scheduleItems = [
  { label: "Next Payout Run", value: "Feb 20, 2026", sublabel: "Thursday" },
  { label: "Processing Window", value: "3–5 business days", sublabel: "ACH transfers" },
  { label: "Monthly Close", value: "Feb 28, 2026", sublabel: "End of period" },
  { label: "Payout Frequency", value: "Bi-weekly", sublabel: "1st & 15th" },
];

/* ──────────────────────────────── Helpers ──────────────────────────────── */

const formatCurrency = (v: number) => {
  if (v >= 1000) return `$${(v / 1000).toFixed(0)}K`;
  return `$${v}`;
};

function StatusBadge({ status }: { status: PayoutStatus }) {
  const styles: Record<PayoutStatus, { bg: string; color: string; icon: typeof CheckCircle2 }> = {
    Completed: { bg: "var(--positive-bg)", color: "var(--positive)", icon: CheckCircle2 },
    Pending: { bg: "var(--caution-bg)", color: "var(--caution)", icon: Clock },
    Failed: { bg: "var(--destructive)", color: "var(--destructive-foreground)", icon: XCircle },
  };
  const s = styles[status];
  const Icon = s.icon;
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-['Sarabun',sans-serif] text-[length:var(--text-sm)]"
      style={{ background: s.bg, color: s.color, fontWeight: "var(--font-weight-medium)" }}
    >
      <Icon className="size-3" />
      {status}
    </span>
  );
}

/* ──────────────────────────────── Component ──────────────────────────────── */

export function PayoutDashboard() {
  const [timeRange, setTimeRange] = useState("7D");
  const [statusFilter, setStatusFilter] = useState<"All" | PayoutStatus>("All");

  const chartData = trendDataMap[timeRange] || trendData7D;

  const filteredPayouts = useMemo(() => {
    if (statusFilter === "All") return recentPayouts;
    return recentPayouts.filter((p) => p.status === statusFilter);
  }, [statusFilter]);

  const statusCounts = useMemo(() => {
    const counts = { All: recentPayouts.length, Completed: 0, Pending: 0, Failed: 0 };
    recentPayouts.forEach((p) => { counts[p.status]++; });
    return counts;
  }, []);

  return (
    <div className="w-full m-[0px] px-[100px] py-[24px]">
      {/* Page Title */}
      <h1
        className="text-foreground mb-6 font-['Sarabun',sans-serif]"
        style={{ fontWeight: "bold", fontSize: "26px", lineHeight: "30px" }}
      >
        Finance Overview
      </h1>

      {/* ─── KPI Summary Cards ─── */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {kpiCards.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="border border-border rounded-[var(--radius)] bg-card p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground"
                  style={{ fontWeight: "var(--font-weight-medium)" }}
                >
                  {kpi.label}
                </span>
                <div
                  className="size-8 rounded-full flex items-center justify-center"
                  style={{ background: "var(--action-icon-bg)" }}
                >
                  <Icon className="size-4" style={{ color: "var(--accent)" }} />
                </div>
              </div>
              <span
                className="font-['Sarabun',sans-serif] text-foreground"
                style={{ fontWeight: 700, fontSize: "var(--text-xl)" }}
              >
                {kpi.value}
              </span>
              <div className="flex items-center gap-1">
                {kpi.trend === "up" ? (
                  <ArrowUpRight className="size-3.5" style={{ color: "var(--positive)" }} />
                ) : (
                  <ArrowDownRight className="size-3.5" style={{ color: "var(--negative)" }} />
                )}
                <span
                  className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)]"
                  style={{
                    color: kpi.trend === "up" ? "var(--positive)" : "var(--negative)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  {kpi.change}
                </span>
                <span className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground">
                  {kpi.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Payout Trend + By Partner Row ─── */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {/* Payout Trend Area Chart */}
        <div className="col-span-3 border border-border rounded-[var(--radius)] bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4" style={{ color: "var(--accent)" }} />
              <h3 className="text-foreground font-['Sarabun',sans-serif]">Payout Trend</h3>
            </div>
            <div className="flex border border-border rounded-[var(--radius)] overflow-hidden">
              {["7D", "30D", "90D", "1Y"].map((range) => (
                <button
                  key={range}
                  className="px-3 py-1.5 font-['Sarabun',sans-serif] text-[length:var(--text-sm)] transition-colors cursor-pointer"
                  style={{
                    background: timeRange === range ? "var(--muted)" : "var(--card)",
                    color: timeRange === range ? "var(--accent)" : "var(--muted-foreground)",
                    fontWeight: timeRange === range ? "var(--font-weight-medium)" : "var(--font-weight-normal)",
                    borderRight: "1px solid var(--border)",
                  }}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, bottom: 5, left: -10 }}>
                  <defs>
                    <linearGradient id="payoutGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--border)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 12, fontFamily: "'Sarabun', sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "'Sarabun', sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={formatCurrency}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      fontFamily: "'Sarabun', sans-serif",
                      fontSize: "14px",
                    }}
                    labelStyle={{ color: "var(--foreground)" }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Payout"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    fill="url(#payoutGradient)"
                    isAnimationActive={true}
                    animationDuration={800}
                    animationEasing="ease-in-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* By Partner Bar Breakdown */}
        <div className="col-span-2 border border-border rounded-[var(--radius)] bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Users className="size-4" style={{ color: "var(--accent)" }} />
              <h3 className="text-foreground font-['Sarabun',sans-serif]">By Partner</h3>
            </div>
          </div>
          <div className="p-5">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={partnerBreakdown}
                  layout="vertical"
                  margin={{ top: 0, right: 10, bottom: 0, left: 5 }}
                >
                  <XAxis
                    type="number"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "'Sarabun', sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={formatCurrency}
                  />
                  <YAxis
                    type="category"
                    dataKey="partner"
                    tick={{ fill: "var(--foreground)", fontSize: 12, fontFamily: "'Sarabun', sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    width={110}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      fontFamily: "'Sarabun', sans-serif",
                      fontSize: "14px",
                    }}
                    labelStyle={{ color: "var(--foreground)" }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Amount"]}
                  />
                  <Bar
                    dataKey="amount"
                    fill="var(--accent)"
                    radius={[0, 4, 4, 0]}
                    isAnimationActive={true}
                    animationDuration={800}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Recent Payouts Table ─── */}
      <div className="border border-border rounded-[var(--radius)] bg-card overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-foreground font-['Sarabun',sans-serif]">Recent Payouts</h3>
          <div className="flex items-center gap-1">
            {(["All", "Completed", "Pending", "Failed"] as const).map((filter) => (
              <button
                key={filter}
                className="px-3 py-1.5 rounded-full font-['Sarabun',sans-serif] text-[length:var(--text-sm)] transition-colors cursor-pointer"
                style={{
                  background: statusFilter === filter ? "var(--accent)" : "transparent",
                  color: statusFilter === filter ? "var(--accent-foreground)" : "var(--muted-foreground)",
                  fontWeight: "var(--font-weight-medium)",
                }}
                onClick={() => setStatusFilter(filter)}
              >
                {filter}
                <span
                  className="ml-1 font-['Sarabun',sans-serif]"
                  style={{ opacity: 0.7 }}
                >
                  ({statusCounts[filter]})
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["ID", "Partner", "Amount", "Date", "Method", "Status"].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground"
                    style={{ fontWeight: "var(--font-weight-medium)" }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredPayouts.map((payout) => (
                <tr
                  key={payout.id}
                  className="transition-colors hover:bg-muted/30"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <td className="px-4 py-3 font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-muted-foreground">
                    {payout.id}
                  </td>
                  <td
                    className="px-4 py-3 font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-foreground"
                    style={{ fontWeight: "var(--font-weight-medium)" }}
                  >
                    {payout.partner}
                  </td>
                  <td
                    className="px-4 py-3 font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-foreground"
                    style={{ fontWeight: "var(--font-weight-medium)" }}
                  >
                    {payout.amount}
                  </td>
                  <td className="px-4 py-3 font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-muted-foreground">
                    {payout.date}
                  </td>
                  <td className="px-4 py-3 font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-muted-foreground">
                    {payout.method}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={payout.status} />
                  </td>
                </tr>
              ))}
              {filteredPayouts.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-muted-foreground"
                  >
                    No payouts found for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center p-3 border-t border-border">
          <button
            className="font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-foreground underline cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontWeight: "var(--font-weight-medium)" }}
          >
            View All Payouts
          </button>
        </div>
      </div>

      {/* ─── Upcoming Payments + Payout Schedule Row ─── */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {/* Upcoming Payments */}
        <div className="col-span-3 border border-border rounded-[var(--radius)] bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4" style={{ color: "var(--accent)" }} />
              <h3 className="text-foreground font-['Sarabun',sans-serif]">Upcoming Payments</h3>
            </div>
            <Button variant="outline" size="sm">
              Schedule Payment
            </Button>
          </div>
          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {upcomingPayments.map((payment, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors"
                style={{ borderBottom: i < upcomingPayments.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-foreground"
                    style={{ fontWeight: "var(--font-weight-medium)" }}
                  >
                    {payment.partner}
                  </span>
                  <span className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground">
                    {payment.campaign}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end gap-0.5">
                    <span
                      className="font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-foreground"
                      style={{ fontWeight: "var(--font-weight-medium)" }}
                    >
                      {payment.amount}
                    </span>
                    <span className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground">
                      Due {payment.dueDate}
                    </span>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payout Schedule Card */}
        <div className="col-span-2 border border-border rounded-[var(--radius)] bg-card overflow-hidden">
          <div className="flex items-center gap-2 p-4 border-b border-border">
            <CalendarDays className="size-4" style={{ color: "var(--accent)" }} />
            <h3 className="text-foreground font-['Sarabun',sans-serif]">Payout Schedule</h3>
          </div>
          <div className="p-5 flex flex-col gap-5">
            {scheduleItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground">
                  {item.label}
                </span>
                <span
                  className="font-['Sarabun',sans-serif] text-[length:var(--text-base)] text-foreground"
                  style={{ fontWeight: "var(--font-weight-medium)" }}
                >
                  {item.value}
                </span>
                <span className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] text-muted-foreground">
                  {item.sublabel}
                </span>
              </div>
            ))}
          </div>
          <div className="px-5 pb-5">
            <Button variant="outline" className="w-full">
              Manage Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}