import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { PartnerSlideout } from "./PartnerSlideout";

/* ─────────────────────── Mock Data ─────────────────────── */

const OVERVIEW_STATS = [
  { label: "Active Partners", value: "148", delta: "+12", up: true },
  { label: "Total Revenue", value: "$487,320", delta: "+8.4%", up: true },
  { label: "Avg. Conversion Rate", value: "2.74%", delta: "+0.18%", up: true },
  { label: "Active Contracts", value: "96", delta: "-3", up: false },
  { label: "Pending Applications", value: "14", delta: "+5", up: true },
];

interface Partner {
  id: string;
  name: string;
  tier: string;
  revenue: number;
  clicks: number;
  actions: number;
  convRate: number;
  epc: number;
  trend: "up" | "down" | "flat";
  delta: string;
  contracts: number;
  lastActive: string;
  status: "Active" | "Declining" | "Inactive" | "New";
}

const ALL_PARTNERS: Partner[] = [
  { id: "1", name: "CouponFollow", tier: "Gold", revenue: 34560, clicks: 45230, actions: 1287, convRate: 2.85, epc: 0.76, trend: "up", delta: "+18%", contracts: 3, lastActive: "Today", status: "Active" },
  { id: "2", name: "RetailMeNot", tier: "Gold", revenue: 28410, clicks: 38100, actions: 982, convRate: 2.58, epc: 0.75, trend: "up", delta: "+12%", contracts: 2, lastActive: "Today", status: "Active" },
  { id: "3", name: "Honey / PayPal", tier: "Gold", revenue: 22890, clicks: 31450, actions: 876, convRate: 2.78, epc: 0.73, trend: "up", delta: "+9%", contracts: 2, lastActive: "Yesterday", status: "Active" },
  { id: "4", name: "Skimlinks", tier: "Silver", revenue: 18320, clicks: 27800, actions: 654, convRate: 2.35, epc: 0.66, trend: "flat", delta: "+1%", contracts: 1, lastActive: "Today", status: "Active" },
  { id: "5", name: "ShareASale Pub", tier: "Silver", revenue: 9870, clicks: 14200, actions: 310, convRate: 2.18, epc: 0.70, trend: "up", delta: "+6%", contracts: 1, lastActive: "2 days ago", status: "Active" },
  { id: "6", name: "BrandCycle", tier: "Silver", revenue: 12770, clicks: 19340, actions: 412, convRate: 2.13, epc: 0.66, trend: "down", delta: "-14%", contracts: 2, lastActive: "5 days ago", status: "Declining" },
  { id: "7", name: "Connexity", tier: "Silver", revenue: 11245, clicks: 16890, actions: 398, convRate: 2.36, epc: 0.67, trend: "down", delta: "-8%", contracts: 1, lastActive: "3 days ago", status: "Declining" },
  { id: "8", name: "Impact Radius", tier: "Bronze", revenue: 8430, clicks: 12750, actions: 287, convRate: 2.25, epc: 0.66, trend: "down", delta: "-22%", contracts: 1, lastActive: "12 days ago", status: "Declining" },
  { id: "9", name: "Awin Network", tier: "Bronze", revenue: 5680, clicks: 8900, actions: 195, convRate: 2.19, epc: 0.64, trend: "down", delta: "-5%", contracts: 1, lastActive: "8 days ago", status: "Declining" },
  { id: "10", name: "CJ Affiliate", tier: "Bronze", revenue: 4920, clicks: 7340, actions: 168, convRate: 2.29, epc: 0.67, trend: "flat", delta: "0%", contracts: 1, lastActive: "30+ days ago", status: "Inactive" },
  { id: "11", name: "FlexOffers", tier: "Bronze", revenue: 3210, clicks: 5100, actions: 102, convRate: 2.0, epc: 0.63, trend: "flat", delta: "-1%", contracts: 1, lastActive: "30+ days ago", status: "Inactive" },
  { id: "12", name: "Rakuten Advertising", tier: "Bronze", revenue: 2890, clicks: 4200, actions: 89, convRate: 2.12, epc: 0.69, trend: "down", delta: "-18%", contracts: 1, lastActive: "22 days ago", status: "Inactive" },
  { id: "13", name: "Partnerize", tier: "New", revenue: 1450, clicks: 2100, actions: 48, convRate: 2.29, epc: 0.69, trend: "up", delta: "+32%", contracts: 0, lastActive: "Today", status: "New" },
  { id: "14", name: "AvantLink", tier: "New", revenue: 980, clicks: 1600, actions: 34, convRate: 2.13, epc: 0.61, trend: "up", delta: "+28%", contracts: 0, lastActive: "Yesterday", status: "New" },
];

// Revenue trend data (weekly)
const REVENUE_TREND = [
  { week: "Dec 22", topPartners: 72400, midTier: 38200, newPartners: 2100 },
  { week: "Dec 29", topPartners: 68900, midTier: 36800, newPartners: 2400 },
  { week: "Jan 5", topPartners: 74200, midTier: 39100, newPartners: 3200 },
  { week: "Jan 12", topPartners: 78600, midTier: 41500, newPartners: 4100 },
  { week: "Jan 19", topPartners: 82100, midTier: 40200, newPartners: 5300 },
  { week: "Jan 26", topPartners: 79800, midTier: 38900, newPartners: 5800 },
  { week: "Feb 2", topPartners: 84300, midTier: 42100, newPartners: 6400 },
  { week: "Feb 9", topPartners: 88700, midTier: 44200, newPartners: 7200 },
  { week: "Feb 16", topPartners: 91200, midTier: 45600, newPartners: 8100 },
];

// Contract opportunity scoring
interface ContractOpp {
  partnerId: string;
  name: string;
  currentContracts: number;
  revenue: number;
  convRate: number;
  growthTrend: string;
  score: number;
  reason: string;
}

const CONTRACT_OPPORTUNITIES: ContractOpp[] = [
  { partnerId: "1", name: "CouponFollow", currentContracts: 3, revenue: 34560, convRate: 2.85, growthTrend: "+18%", score: 95, reason: "Highest revenue, strong upward trend — expand to new product categories" },
  { partnerId: "2", name: "RetailMeNot", currentContracts: 2, revenue: 28410, convRate: 2.58, growthTrend: "+12%", score: 92, reason: "Consistent performer, only 2 contracts — room for seasonal campaigns" },
  { partnerId: "3", name: "Honey / PayPal", currentContracts: 2, revenue: 22890, convRate: 2.78, growthTrend: "+9%", score: 88, reason: "High conversion rate, growing traffic — add exclusive coupon deal" },
  { partnerId: "5", name: "ShareASale Pub", currentContracts: 1, revenue: 9870, convRate: 2.18, growthTrend: "+6%", score: 82, reason: "Only 1 contract but steady growth — test a performance bonus tier" },
  { partnerId: "13", name: "Partnerize", currentContracts: 0, revenue: 1450, convRate: 2.29, growthTrend: "+32%", score: 78, reason: "New partner with fastest growth — lock in an initial contract now" },
  { partnerId: "14", name: "AvantLink", currentContracts: 0, revenue: 980, convRate: 2.13, growthTrend: "+28%", score: 74, reason: "New partner showing strong early signals — offer introductory terms" },
];

// Bar chart data for partner comparison
const PARTNER_COMPARISON = ALL_PARTNERS.slice(0, 10).map((p) => ({
  name: p.name.length > 12 ? p.name.substring(0, 12) + "…" : p.name,
  revenue: p.revenue,
  fullName: p.name,
}));

/* ─────────────────────── Helpers ─────────────────────── */

function formatCurrency(val: number) {
  return "$" + val.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatNumber(val: number) {
  return val.toLocaleString("en-US");
}

function TrendArrow({ direction }: { direction: "up" | "down" | "flat" }) {
  if (direction === "up") {
    return (
      <svg className="size-[14px] shrink-0" viewBox="0 0 14 14" fill="none">
        <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="var(--positive)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (direction === "down") {
    return (
      <svg className="size-[14px] shrink-0" viewBox="0 0 14 14" fill="none">
        <path d="M7 3V11M7 11L3 7M7 11L11 7" stroke="var(--negative)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="size-[14px] shrink-0" viewBox="0 0 14 14" fill="none">
      <path d="M3 7H11" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Active: "var(--positive)",
    Declining: "var(--negative)",
    Inactive: "var(--muted-foreground)",
    New: "var(--accent)",
  };
  return (
    <span
      className="inline-block size-[8px] rounded-full shrink-0"
      style={{ background: colors[status] || "var(--muted-foreground)" }}
    />
  );
}

function ScoreBar({ score }: { score: number }) {
  const color = score >= 90 ? "var(--accent)" : score >= 80 ? "var(--chart-1)" : "var(--chart-3)";
  return (
    <div className="flex items-center gap-[8px] w-full">
      <div
        className="h-[6px] flex-1 rounded-full overflow-hidden"
        style={{ background: "var(--muted)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span
        className="font-['Sarabun',sans-serif] text-foreground shrink-0 w-[28px] text-right"
        style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", lineHeight: "15px" }}
      >
        {score}
      </span>
    </div>
  );
}

const TIER_STYLES: Record<string, { bg: string; text: string }> = {
  Gold: { bg: "var(--tier-gold-bg)", text: "var(--tier-gold-text)" },
  Silver: { bg: "var(--tier-silver-bg)", text: "var(--tier-silver-text)" },
  Bronze: { bg: "var(--tier-bronze-bg)", text: "var(--tier-bronze-text)" },
  New: { bg: "var(--tier-new-bg)", text: "var(--tier-new-text)" },
};

/* ── Shared chart styling tokens (uses CSS variables) ── */
const CHART_TOOLTIP_STYLE = {
  background: "var(--card)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--border)",
  borderRadius: "var(--radius)",
  fontFamily: "'Sarabun', sans-serif",
  fontSize: "var(--text-sm)",
};
const CHART_AXIS_TICK = {
  fill: "var(--muted-foreground)",
  fontFamily: "'Sarabun', sans-serif",
  fontSize: 12,
};

/* ─────────────────────── Component ─────────────────────── */

export function DashboardView() {
  const [activeTab, setActiveTab] = useState<"overview" | "attention" | "opportunities">("overview");
  const [slideoutPartner, setSlideoutPartner] = useState<string | null>(null);

  const allPartnerNames = ALL_PARTNERS.map((p) => p.name);
  const topPartners = ALL_PARTNERS.filter((p) => p.trend === "up" || p.status === "Active").sort((a, b) => b.revenue - a.revenue);
  const attentionPartners = ALL_PARTNERS.filter((p) => p.status === "Declining" || p.status === "Inactive");

  return (
    <div className="flex flex-col gap-[24px] px-[24px] py-[24px] w-full">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2
          className="text-foreground font-['Sarabun',sans-serif]"
          style={{ fontWeight: 700, fontSize: "var(--text-xl)", lineHeight: 1.3 }}
        >
          Partner Intelligence Dashboard
        </h2>
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground"
          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
        >
          Last updated: Feb 16, 2026
        </span>
      </div>

      {/* KPI Summary Cards */}
      <div className="flex gap-[12px] w-full">
        {OVERVIEW_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 flex flex-col gap-[6px] p-[16px] bg-card"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <span
              className="font-['Sarabun',sans-serif] text-muted-foreground"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", lineHeight: "15px" }}
            >
              {stat.label}
            </span>
            <span
              className="font-['Sarabun',sans-serif] text-foreground"
              style={{ fontSize: "var(--text-lg)", fontWeight: 700, lineHeight: 1.3 }}
            >
              {stat.value}
            </span>
            <span
              className="font-['Sarabun',sans-serif] flex items-center gap-[4px]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: "15px",
                color: stat.up ? "var(--positive)" : "var(--negative)",
              }}
            >
              {stat.up ? "↑" : "↓"} {stat.delta} vs last month
            </span>
          </div>
        ))}
      </div>

      {/* Tab Nav */}
      <div
        className="flex gap-0 w-full"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {[
          { key: "overview" as const, label: "Performance Overview" },
          { key: "attention" as const, label: `Needs Attention (${attentionPartners.length})` },
          { key: "opportunities" as const, label: "Contract Opportunities" },
        ].map((tab) => (
          <button
            key={tab.key}
            className="px-[20px] py-[12px] font-['Sarabun',sans-serif] cursor-pointer transition-colors relative"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: activeTab === tab.key ? "var(--font-weight-medium)" : "var(--font-weight-normal)",
              color: activeTab === tab.key ? "var(--accent)" : "var(--muted-foreground)",
              background: "transparent",
              border: "none",
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {activeTab === tab.key && (
              <span
                className="absolute bottom-0 left-[20px] right-[20px] h-[2px]"
                style={{ background: "var(--accent)" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ─── Tab: Performance Overview ─── */}
      {activeTab === "overview" && (
        <>
          {/* Revenue Trend Chart */}
          <div className="flex gap-[16px] w-full">
            <div
              className="flex-[2] bg-card p-[24px]"
              style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
            >
              <span
                className="font-['Sarabun',sans-serif] text-foreground block mb-[16px]"
                style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", lineHeight: "18px" }}
              >
                Revenue Trend by Partner Tier
              </span>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={REVENUE_TREND} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="week"
                    tick={CHART_AXIS_TICK}
                    axisLine={{ stroke: "var(--border)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={CHART_AXIS_TICK}
                    axisLine={{ stroke: "var(--border)" }}
                    tickLine={false}
                    tickFormatter={(v: number) => `$${v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}`}
                  />
                  <Tooltip
                    contentStyle={CHART_TOOLTIP_STYLE}
                    labelStyle={{ color: "var(--foreground)", fontWeight: "var(--font-weight-medium)" }}
                    formatter={(value: number) => [formatCurrency(value), ""]}
                  />
                  <Legend wrapperStyle={{ fontFamily: "'Sarabun', sans-serif", fontSize: "var(--text-sm)" }} />
                  <Line type="monotone" dataKey="topPartners" name="Top Partners" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 3, fill: "var(--chart-1)" }} />
                  <Line type="monotone" dataKey="midTier" name="Mid Tier" stroke="var(--chart-3)" strokeWidth={2} dot={{ r: 3, fill: "var(--chart-3)" }} />
                  <Line type="monotone" dataKey="newPartners" name="New Partners" stroke="var(--accent)" strokeWidth={2} dot={{ r: 3, fill: "var(--accent)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Partner Revenue Comparison Bar */}
            <div
              className="flex-1 bg-card p-[24px]"
              style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
            >
              <span
                className="font-['Sarabun',sans-serif] text-foreground block mb-[16px]"
                style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", lineHeight: "18px" }}
              >
                Revenue by Partner
              </span>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={PARTNER_COMPARISON} layout="vertical" margin={{ top: 0, right: 8, left: 0, bottom: 0 }}>
                  <XAxis
                    type="number"
                    tick={{ ...CHART_AXIS_TICK, fontSize: 11 }}
                    axisLine={{ stroke: "var(--border)" }}
                    tickLine={false}
                    tickFormatter={(v: number) => `$${v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}`}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={90}
                    tick={{ fill: "var(--foreground)", fontFamily: "'Sarabun', sans-serif", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={CHART_TOOLTIP_STYLE}
                    formatter={(value: number, _name: string, props: { payload: { fullName: string } }) => [formatCurrency(value), props.payload.fullName]}
                  />
                  <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                    {PARTNER_COMPARISON.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index < 3 ? "var(--chart-1)" : index < 6 ? "var(--chart-3)" : "var(--chart-4)"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Performing Partners Table */}
          <div
            className="w-full bg-card"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <div
              className="flex items-center justify-between px-[20px] py-[16px]"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span
                className="font-['Sarabun',sans-serif] text-foreground"
                style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", lineHeight: "18px" }}
              >
                Top Performing Partners
              </span>
              <span
                className="font-['Sarabun',sans-serif] text-muted-foreground"
                style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
              >
                {topPartners.length} partners
              </span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["#", "Partner", "Tier", "Revenue", "Clicks", "Conv. Rate", "EPC", "Growth", "Contracts"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-[12px] py-[10px] font-['Sarabun',sans-serif] text-muted-foreground"
                      style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-sm)", lineHeight: "15px" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topPartners.map((p, i) => {
                  const tierStyle = TIER_STYLES[p.tier] || TIER_STYLES.Bronze;
                  return (
                    <tr
                      key={p.id}
                      className="transition-colors hover:bg-muted/30 cursor-pointer"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <td
                        className="px-[12px] py-[12px] font-['Sarabun',sans-serif] text-muted-foreground"
                        style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", width: "36px" }}
                      >
                        {i + 1}
                      </td>
                      <td className="px-[12px] py-[12px]">
                        <div className="flex items-center gap-[8px]">
                          <StatusDot status={p.status} />
                          <button
                            className="font-['Sarabun',sans-serif] cursor-pointer hover:underline"
                            style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", lineHeight: "18px", color: "var(--accent)", background: "none", border: "none", padding: 0 }}
                            onClick={() => setSlideoutPartner(p.name)}
                          >
                            {p.name}
                          </button>
                        </div>
                      </td>
                      <td className="px-[12px] py-[12px]">
                        <span
                          className="inline-flex items-center px-[10px] h-[22px] font-['Sarabun',sans-serif]"
                          style={{
                            borderRadius: "var(--radius-button)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--font-weight-medium)",
                            background: tierStyle.bg,
                            color: tierStyle.text,
                          }}
                        >
                          {p.tier}
                        </span>
                      </td>
                      <td
                        className="px-[12px] py-[12px] font-['Sarabun',sans-serif] text-foreground"
                        style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)" }}
                      >
                        {formatCurrency(p.revenue)}
                      </td>
                      <td
                        className="px-[12px] py-[12px] font-['Sarabun',sans-serif] text-foreground"
                        style={{ fontWeight: "var(--font-weight-normal)", fontSize: "var(--text-base)" }}
                      >
                        {formatNumber(p.clicks)}
                      </td>
                      <td
                        className="px-[12px] py-[12px] font-['Sarabun',sans-serif] text-foreground"
                        style={{ fontWeight: "var(--font-weight-normal)", fontSize: "var(--text-base)" }}
                      >
                        {p.convRate.toFixed(2)}%
                      </td>
                      <td
                        className="px-[12px] py-[12px] font-['Sarabun',sans-serif] text-foreground"
                        style={{ fontWeight: "var(--font-weight-normal)", fontSize: "var(--text-base)" }}
                      >
                        ${p.epc.toFixed(2)}
                      </td>
                      <td className="px-[12px] py-[12px]">
                        <div className="flex items-center gap-[4px]">
                          <TrendArrow direction={p.trend} />
                          <span
                            className="font-['Sarabun',sans-serif]"
                            style={{
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-medium)",
                              color: p.trend === "up" ? "var(--positive)" : p.trend === "down" ? "var(--negative)" : "var(--muted-foreground)",
                            }}
                          >
                            {p.delta}
                          </span>
                        </div>
                      </td>
                      <td
                        className="px-[12px] py-[12px] font-['Sarabun',sans-serif] text-foreground text-center"
                        style={{ fontWeight: "var(--font-weight-normal)", fontSize: "var(--text-base)" }}
                      >
                        {p.contracts}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ─── Tab: Needs Attention ─── */}
      {activeTab === "attention" && (
        <>
          {/* Alert Banner */}
          <div
            className="flex items-start gap-[12px] p-[16px]"
            style={{
              borderRadius: "var(--radius)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--border)",
              background: "var(--caution-bg)",
              opacity: 0.9,
            }}
          >
            <svg className="size-[20px] shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="none">
              <path d="M10 6V10M10 14H10.01M19 10C19 14.97 14.97 19 10 19C5.03 19 1 14.97 1 10C1 5.03 5.03 1 10 1C14.97 1 19 5.03 19 10Z" stroke="var(--caution)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-[4px]">
              <span
                className="font-['Sarabun',sans-serif]"
                style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", color: "var(--caution)" }}
              >
                {attentionPartners.length} partners need your attention
              </span>
              <span
                className="font-['Sarabun',sans-serif] text-muted-foreground"
                style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
              >
                These partners are showing declining performance or have gone inactive. Reaching out can help recover lost revenue.
              </span>
            </div>
          </div>

          {/* Declining Partners */}
          <div
            className="w-full bg-card"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <div
              className="flex items-center justify-between px-[20px] py-[16px]"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span
                className="font-['Sarabun',sans-serif] text-foreground"
                style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", lineHeight: "18px" }}
              >
                Partners Needing Outreach
              </span>
            </div>
            <div className="flex flex-col">
              {attentionPartners.map((p) => {
                const isInactive = p.status === "Inactive";
                return (
                  <div
                    key={p.id}
                    className="flex items-center gap-[16px] px-[20px] py-[16px] transition-colors hover:bg-muted/20"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    {/* Status indicator */}
                    <div
                      className="size-[40px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: isInactive ? "var(--muted)" : "var(--negative-bg)",
                      }}
                    >
                      {isInactive ? (
                        <svg className="size-[18px]" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="7" stroke="var(--muted-foreground)" strokeWidth="1.5" />
                          <path d="M9 5.5V9" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="9" cy="12" r="0.75" fill="var(--muted-foreground)" />
                        </svg>
                      ) : (
                        <svg className="size-[18px]" viewBox="0 0 18 18" fill="none">
                          <path d="M9 2L2 16H16L9 2Z" stroke="var(--negative)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 7V10" stroke="var(--negative)" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="9" cy="13" r="0.75" fill="var(--negative)" />
                        </svg>
                      )}
                    </div>

                    {/* Partner info */}
                    <div className="flex-1 flex flex-col gap-[2px]">
                      <div className="flex items-center gap-[8px]">
                        <button
                          className="font-['Sarabun',sans-serif] cursor-pointer hover:underline"
                          style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", color: "var(--accent)", background: "none", border: "none", padding: 0 }}
                          onClick={() => setSlideoutPartner(p.name)}
                        >
                          {p.name}
                        </button>
                        <span
                          className="inline-flex items-center px-[8px] h-[20px] font-['Sarabun',sans-serif]"
                          style={{
                            borderRadius: "var(--radius-button)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--font-weight-medium)",
                            background: isInactive ? "var(--muted)" : "var(--negative-bg)",
                            color: isInactive ? "var(--muted-foreground)" : "var(--negative)",
                          }}
                        >
                          {p.status}
                        </span>
                      </div>
                      <span
                        className="font-['Sarabun',sans-serif] text-muted-foreground"
                        style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                      >
                        Revenue: {formatCurrency(p.revenue)} · {p.delta} change · Last active: {p.lastActive}
                      </span>
                    </div>

                    {/* Quick stats */}
                    <div className="flex items-center gap-[24px]">
                      <div className="flex flex-col items-center">
                        <span
                          className="font-['Sarabun',sans-serif] text-muted-foreground"
                          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                        >
                          Conv. Rate
                        </span>
                        <span
                          className="font-['Sarabun',sans-serif] text-foreground"
                          style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
                        >
                          {p.convRate.toFixed(2)}%
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="font-['Sarabun',sans-serif] text-muted-foreground"
                          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                        >
                          Contracts
                        </span>
                        <span
                          className="font-['Sarabun',sans-serif] text-foreground"
                          style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
                        >
                          {p.contracts}
                        </span>
                      </div>
                    </div>

                    {/* Action button */}
                    <button
                      className="h-[36px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer transition-colors"
                      style={{
                        borderRadius: "var(--radius-button)",
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        background: "var(--button-primary)",
                        color: "var(--button-primary-foreground)",
                        border: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                    >
                      {isInactive ? "Re-engage" : "Reach Out"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Suggested Actions */}
          <div
            className="w-full bg-card p-[20px]"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <span
              className="font-['Sarabun',sans-serif] text-foreground block mb-[12px]"
              style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)" }}
            >
              Recommended Actions
            </span>
            <div className="flex flex-col gap-[10px]">
              {[
                { icon: "📧", text: "Send a performance review email to BrandCycle and Connexity — both dropped 8-14% this month" },
                { icon: "📞", text: "Schedule a call with Impact Radius — down 22% and last active 12 days ago" },
                { icon: "🔄", text: "Offer updated contract terms to CJ Affiliate and FlexOffers — inactive 30+ days" },
                { icon: "📊", text: "Review Rakuten Advertising's placement quality — significant decline despite decent conversion rate" },
              ].map((action, i) => (
                <div key={i} className="flex items-start gap-[10px]">
                  <span className="text-[16px] shrink-0 mt-[1px]">{action.icon}</span>
                  <span
                    className="font-['Sarabun',sans-serif] text-foreground"
                    style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "20px" }}
                  >
                    {action.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ─── Tab: Contract Opportunities ─── */}
      {activeTab === "opportunities" && (
        <>
          {/* Intro */}
          <div
            className="flex items-start gap-[12px] p-[16px]"
            style={{
              borderRadius: "var(--radius)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--border)",
              background: "var(--positive-bg)",
              opacity: 0.9,
            }}
          >
            <svg className="size-[20px] shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="none">
              <path d="M10 1L12.5 7H19L13.75 11L15.5 18L10 13.5L4.5 18L6.25 11L1 7H7.5L10 1Z" stroke="var(--positive)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-[4px]">
              <span
                className="font-['Sarabun',sans-serif]"
                style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-base)", color: "var(--positive)" }}
              >
                {CONTRACT_OPPORTUNITIES.length} contract expansion opportunities identified
              </span>
              <span
                className="font-['Sarabun',sans-serif] text-muted-foreground"
                style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
              >
                Based on revenue performance, growth trends, and current contract coverage. Partners are scored 0-100 on expansion potential.
              </span>
            </div>
          </div>

          {/* Opportunity Cards */}
          <div className="flex flex-col gap-[12px]">
            {CONTRACT_OPPORTUNITIES.map((opp) => {
              const partner = ALL_PARTNERS.find((p) => p.id === opp.partnerId);
              const tierStyle = partner ? (TIER_STYLES[partner.tier] || TIER_STYLES.Bronze) : TIER_STYLES.Bronze;
              return (
                <div
                  key={opp.partnerId}
                  className="w-full bg-card p-[20px] flex gap-[20px] items-start transition-colors hover:bg-muted/10"
                  style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
                >
                  {/* Left: Score */}
                  <div className="flex flex-col items-center gap-[4px] shrink-0 w-[60px]">
                    <div
                      className="size-[48px] rounded-full flex items-center justify-center"
                      style={{
                        background: opp.score >= 90 ? "var(--positive-bg)" : opp.score >= 80 ? "var(--action-icon-bg)" : "var(--muted)",
                        border: `2px solid ${opp.score >= 90 ? "var(--positive)" : opp.score >= 80 ? "var(--accent)" : "var(--muted-foreground)"}`,
                      }}
                    >
                      <span
                        className="font-['Sarabun',sans-serif]"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: 700,
                          color: opp.score >= 90 ? "var(--positive)" : opp.score >= 80 ? "var(--accent)" : "var(--muted-foreground)",
                        }}
                      >
                        {opp.score}
                      </span>
                    </div>
                    <span
                      className="font-['Sarabun',sans-serif] text-muted-foreground"
                      style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                    >
                      Score
                    </span>
                  </div>

                  {/* Middle: Info */}
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <button
                        className="font-['Sarabun',sans-serif] cursor-pointer hover:underline"
                        style={{ fontWeight: 700, fontSize: "var(--text-base)", lineHeight: "20px", color: "var(--accent)", background: "none", border: "none", padding: 0 }}
                        onClick={() => setSlideoutPartner(opp.name)}
                      >
                        {opp.name}
                      </button>
                      {partner && (
                        <span
                          className="inline-flex items-center px-[10px] h-[22px] font-['Sarabun',sans-serif]"
                          style={{
                            borderRadius: "var(--radius-button)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--font-weight-medium)",
                            background: tierStyle.bg,
                            color: tierStyle.text,
                          }}
                        >
                          {partner.tier}
                        </span>
                      )}
                      <span
                        className="font-['Sarabun',sans-serif] flex items-center gap-[4px]"
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--positive)",
                        }}
                      >
                        ↑ {opp.growthTrend}
                      </span>
                    </div>

                    <span
                      className="font-['Sarabun',sans-serif] text-foreground"
                      style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "20px" }}
                    >
                      {opp.reason}
                    </span>

                    {/* Stats row */}
                    <div className="flex items-center gap-[24px] mt-[4px]">
                      <div className="flex flex-col">
                        <span
                          className="font-['Sarabun',sans-serif] text-muted-foreground"
                          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                        >
                          Revenue
                        </span>
                        <span
                          className="font-['Sarabun',sans-serif] text-foreground"
                          style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
                        >
                          {formatCurrency(opp.revenue)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="font-['Sarabun',sans-serif] text-muted-foreground"
                          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                        >
                          Conv. Rate
                        </span>
                        <span
                          className="font-['Sarabun',sans-serif] text-foreground"
                          style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
                        >
                          {opp.convRate.toFixed(2)}%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="font-['Sarabun',sans-serif] text-muted-foreground"
                          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                        >
                          Current Contracts
                        </span>
                        <span
                          className="font-['Sarabun',sans-serif] text-foreground"
                          style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
                        >
                          {opp.currentContracts}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span
                          className="font-['Sarabun',sans-serif] text-muted-foreground block mb-[4px]"
                          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}
                        >
                          Expansion Score
                        </span>
                        <ScoreBar score={opp.score} />
                      </div>
                    </div>
                  </div>

                  {/* Right: Action */}
                  <div className="flex flex-col gap-[8px] shrink-0">
                    <button
                      className="h-[36px] px-[20px] font-['Sarabun',sans-serif] cursor-pointer transition-colors"
                      style={{
                        borderRadius: "var(--radius-button)",
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        background: "var(--button-primary)",
                        color: "var(--button-primary-foreground)",
                        border: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                    >
                      {opp.currentContracts === 0 ? "Create Contract" : "Expand Contract"}
                    </button>
                    <button
                      className="h-[36px] px-[20px] font-['Sarabun',sans-serif] cursor-pointer transition-colors"
                      style={{
                        borderRadius: "var(--radius-button)",
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        background: "transparent",
                        color: "var(--foreground)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "var(--border)",
                      }}
                      onClick={() => setSlideoutPartner(opp.name)}
                    >
                      View Partner
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* ═══ Partner Slideout ═══ */}
      {slideoutPartner && (
        <PartnerSlideout
          partnerName={slideoutPartner}
          partnerNames={allPartnerNames}
          open={!!slideoutPartner}
          onClose={() => setSlideoutPartner(null)}
          onNavigate={(name) => setSlideoutPartner(name)}
        />
      )}
    </div>
  );
}