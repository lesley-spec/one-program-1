import { useState, useMemo } from "react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import { useNavigate } from "react-router";
import { chartTokens } from "./ReportPageShell";
import { PartnerSlideout } from "./PartnerSlideout";

/* ═══════════════════════════════════════════════════════════
   Constants & Data
   ═══════════════════════════════════════════════════════════ */

const FONT = "'Sarabun', sans-serif";

/* ─ KPI ─ */
interface KPI {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  sub: string;
}

const KPIS: KPI[] = [
  { label: "Total Revenue", value: "$1.24M", delta: "+12.4%", positive: true, sub: "vs. prev 30 days" },
  { label: "Clicks", value: "842K", delta: "+8.1%", positive: true, sub: "vs. prev 30 days" },
  { label: "Conversions", value: "31,204", delta: "+5.7%", positive: true, sub: "vs. prev 30 days" },
  { label: "Avg. Commission", value: "$39.80", delta: "-2.1%", positive: false, sub: "per conversion" },
];

/* ─ Revenue trend (last 12 weeks) ─ */
const REVENUE_TREND = [
  { week: "Nov 25", revenue: 72400, clicks: 51200 },
  { week: "Dec 2", revenue: 79800, clicks: 55100 },
  { week: "Dec 9", revenue: 68100, clicks: 49700 },
  { week: "Dec 16", revenue: 91200, clicks: 63000 },
  { week: "Dec 23", revenue: 84300, clicks: 58400 },
  { week: "Dec 30", revenue: 78600, clicks: 54800 },
  { week: "Jan 6", revenue: 95100, clicks: 66200 },
  { week: "Jan 13", revenue: 101500, clicks: 71400 },
  { week: "Jan 20", revenue: 98200, clicks: 69100 },
  { week: "Jan 27", revenue: 107800, clicks: 74500 },
  { week: "Feb 3", revenue: 112400, clicks: 78200 },
  { week: "Feb 10", revenue: 118900, clicks: 81300 },
];

/* ─ Partners ─ */
interface Partner {
  id: string;
  name: string;
  revenue: number;
  clicks: number;
  conversions: number;
  convRate: number;
  revenueChange: number;
  tier: "Gold" | "Silver" | "Bronze" | "New";
  status: "growing" | "stable" | "declining" | "new";
}

const PARTNERS: Partner[] = [
  { id: "p1", name: "CNN Digital", revenue: 187500, clicks: 124300, conversions: 4820, convRate: 3.88, revenueChange: 18.2, tier: "Gold", status: "growing" },
  { id: "p2", name: "BuzzFeed Commerce", revenue: 142300, clicks: 98400, conversions: 3670, convRate: 3.73, revenueChange: 14.5, tier: "Gold", status: "growing" },
  { id: "p3", name: "The Wirecutter", revenue: 134800, clicks: 72600, conversions: 4210, convRate: 5.80, revenueChange: 9.8, tier: "Gold", status: "growing" },
  { id: "p4", name: "RetailMeNot", revenue: 118200, clicks: 145600, conversions: 3100, convRate: 2.13, revenueChange: -3.4, tier: "Silver", status: "declining" },
  { id: "p5", name: "Honey / PayPal", revenue: 97400, clicks: 201400, conversions: 2680, convRate: 1.33, revenueChange: 2.1, tier: "Silver", status: "stable" },
  { id: "p6", name: "Skimlinks Network", revenue: 86900, clicks: 67800, conversions: 2140, convRate: 3.16, revenueChange: 22.6, tier: "Silver", status: "growing" },
  { id: "p7", name: "Rakuten Rewards", revenue: 74500, clicks: 89200, conversions: 1920, convRate: 2.15, revenueChange: -6.8, tier: "Silver", status: "declining" },
  { id: "p8", name: "CouponFollow", revenue: 62100, clicks: 110300, conversions: 1640, convRate: 1.49, revenueChange: 1.2, tier: "Bronze", status: "stable" },
  { id: "p9", name: "Influencer Hub Co.", revenue: 51800, clicks: 31400, conversions: 1380, convRate: 4.39, revenueChange: 41.3, tier: "New", status: "new" },
  { id: "p10", name: "DealNews Media", revenue: 43200, clicks: 56200, conversions: 1120, convRate: 1.99, revenueChange: -11.2, tier: "Bronze", status: "declining" },
  { id: "p11", name: "SlickDeals Aff.", revenue: 38700, clicks: 72100, conversions: 980, convRate: 1.36, revenueChange: -1.5, tier: "Bronze", status: "stable" },
  { id: "p12", name: "NerdWallet Recs", revenue: 34100, clicks: 18900, conversions: 860, convRate: 4.55, revenueChange: 35.7, tier: "New", status: "new" },
];

/* ─ Top revenue by category (for bar chart) ─ */
const REVENUE_BY_CATEGORY = [
  { name: "Content", revenue: 464600 },
  { name: "Coupon", revenue: 277700 },
  { name: "Loyalty", revenue: 171900 },
  { name: "Sub-Affiliate", revenue: 125600 },
  { name: "Influencer", revenue: 85900 },
];

/* ─ Insights ─ */
interface Insight {
  id: string;
  type: "opportunity" | "risk" | "milestone";
  headline: string;
  detail: string;
  action: string;
  partnerName?: string;
}

const INSIGHTS: Insight[] = [
  { id: "i1", type: "opportunity", headline: "Influencer Hub Co. revenue up 41% this month", detail: "Their conversion rate of 4.39% significantly outperforms the program average. Consider upgrading to Silver tier to deepen the relationship.", action: "Review Partner", partnerName: "Influencer Hub Co." },
  { id: "i2", type: "risk", headline: "DealNews Media revenue declined 11.2%", detail: "Clicks remain steady but conversions dropped, suggesting a creative or landing page issue. Reach out to troubleshoot.", action: "Contact Partner", partnerName: "DealNews Media" },
  { id: "i3", type: "opportunity", headline: "NerdWallet Recs showing strong early results", detail: "New partner already generating $34.1K with the highest conversion rate (4.55%) in the program. Fast-track their onboarding.", action: "View Details", partnerName: "NerdWallet Recs" },
  { id: "i4", type: "risk", headline: "Rakuten Rewards revenue down 6.8%", detail: "Both clicks and conversions are declining. Review commission structure and placement to re-engage this Silver tier partner.", action: "Adjust Terms", partnerName: "Rakuten Rewards" },
  { id: "i5", type: "milestone", headline: "Program crossed $1.2M monthly revenue", detail: "Total program revenue hit an all-time high this period, driven primarily by your top 3 Content partners.", action: "View Breakdown" },
];

/* ─ Helpers ─ */
function fmtCurrency(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
  return `$${n.toLocaleString()}`;
}
function fmtNumber(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toLocaleString();
}

const TIER_COLORS: Record<string, { bg: string; text: string }> = {
  Gold: { bg: "var(--tier-gold-bg)", text: "var(--tier-gold-text)" },
  Silver: { bg: "var(--tier-silver-bg)", text: "var(--tier-silver-text)" },
  Bronze: { bg: "var(--tier-bronze-bg)", text: "var(--tier-bronze-text)" },
  New: { bg: "var(--tier-new-bg)", text: "var(--tier-new-text)" },
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  growing: { label: "Growing", color: "var(--positive)" },
  stable: { label: "Stable", color: "var(--muted-foreground)" },
  declining: { label: "Declining", color: "var(--negative)" },
  new: { label: "New", color: "var(--accent)" },
};

type PartnerSort = "revenue" | "clicks" | "conversions" | "convRate" | "revenueChange";
type Tab = "overview" | "partners" | "insights";

/* ─ Custom tooltip ─ */
function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ ...chartTokens.tooltipStyle, padding: "10px 14px" }}>
      <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--foreground)", margin: 0, marginBottom: 4 }}>{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)", margin: 0 }}>
          <span style={{ color: p.color, fontWeight: 600 }}>●</span>{" "}
          {p.dataKey === "revenue" ? "Revenue" : p.dataKey === "clicks" ? "Clicks" : p.name}: {p.dataKey === "revenue" ? fmtCurrency(p.value) : fmtNumber(p.value)}
        </p>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════ */

export function ReportsLibrary() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [partnerSort, setPartnerSort] = useState<PartnerSort>("revenue");
  const [partnerSortDir, setPartnerSortDir] = useState<"asc" | "desc">("desc");
  const [partnerFilter, setPartnerFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [slideoutPartner, setSlideoutPartner] = useState<string | null>(null);

  const allPartnerNames = useMemo(() => PARTNERS.map((p) => p.name), []);

  const sortedPartners = useMemo(() => {
    let list = [...PARTNERS];
    if (partnerFilter !== "All") list = list.filter((p) => p.tier === partnerFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      const av = a[partnerSort], bv = b[partnerSort];
      return partnerSortDir === "desc" ? (bv as number) - (av as number) : (av as number) - (bv as number);
    });
    return list;
  }, [partnerSort, partnerSortDir, partnerFilter, searchQuery]);

  function toggleSort(col: PartnerSort) {
    if (partnerSort === col) setPartnerSortDir((d) => (d === "desc" ? "asc" : "desc"));
    else { setPartnerSort(col); setPartnerSortDir("desc"); }
  }

  const sortArrow = (col: PartnerSort) =>
    partnerSort === col ? (partnerSortDir === "desc" ? " ↓" : " ↑") : "";

  /* Compute top grower & biggest decliner for overview */
  const topGrower = [...PARTNERS].sort((a, b) => b.revenueChange - a.revenueChange)[0];
  const topDecliner = [...PARTNERS].filter((p) => p.revenueChange < 0).sort((a, b) => a.revenueChange - b.revenueChange)[0];

  return (
    <div className="flex flex-col gap-[20px] w-full">

      {/* ═══ Header ═══ */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-foreground" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "var(--text-xl)", lineHeight: 1.3 }}>Overview</h1>
          <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--muted-foreground)" }}>
            Last 30 days · Understand how your partners drive revenue
          </span>
        </div>
        <div className="flex gap-[10px] items-center">
          <button
            className="bg-card text-foreground h-[36px] px-[16px] cursor-pointer transition-colors hover:bg-muted/40"
            style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", borderRadius: "var(--radius-button)", border: "1px solid var(--border)" }}
          >
            Export
          </button>
          <button
            className="h-[36px] px-[16px] cursor-pointer transition-colors"
            style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
            onClick={() => navigate("/reports/data-lab")}
          >
            Build Report
          </button>
        </div>
      </div>

      {/* ═══ KPI Cards ═══ */}
      <div className="grid grid-cols-4 gap-[12px] w-full">
        {KPIS.map((k) => (
          <div
            key={k.label}
            className="bg-card flex flex-col gap-[6px] p-[16px] relative overflow-hidden"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: k.positive ? "var(--chart-1)" : "var(--destructive-foreground)" }} />
            <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{k.label}</span>
            <div className="flex items-end gap-[8px]">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-lg)", fontWeight: 700, lineHeight: "1.1", color: "var(--foreground)" }}>{k.value}</span>
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: k.positive ? "var(--positive)" : "var(--negative)" }}>
                {k.delta}
              </span>
            </div>
            <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{k.sub}</span>
          </div>
        ))}
      </div>

      {/* ═══ Tab Navigation ═══ */}
      <div className="flex items-center w-full" style={{ borderBottom: "1px solid var(--border)" }}>
        {(
          [
            { id: "overview", label: "Overview" },
            { id: "partners", label: "Partner Leaderboard" },
            { id: "insights", label: "Insights & Actions" },
          ] as { id: Tab; label: string }[]
        ).map((t) => (
          <button
            key={t.id}
            className="px-[16px] py-[10px] cursor-pointer transition-colors relative"
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-base)",
              fontWeight: activeTab === t.id ? 600 : 400,
              color: activeTab === t.id ? "var(--accent)" : "var(--muted-foreground)",
              background: "transparent",
              border: "none",
            }}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
            {activeTab === t.id && (
              <span className="absolute bottom-0 left-[16px] right-[16px] h-[2px]" style={{ background: "var(--accent)" }} />
            )}
          </button>
        ))}
      </div>

      {/* ═══════════ TAB: OVERVIEW ═══════════ */}
      {activeTab === "overview" && (
        <div className="flex flex-col gap-[16px]">

          {/* Revenue trend + Revenue by category side by side */}
          <div className="grid grid-cols-3 gap-[16px]">

            {/* Revenue over time (2/3) */}
            <div className="col-span-2 bg-card" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <div className="px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", color: "var(--foreground)" }}>Revenue & Clicks — Last 12 Weeks</span>
              </div>
              <div className="px-[8px] py-[12px]" style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={REVENUE_TREND} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray={chartTokens.gridDash} stroke={chartTokens.gridStroke} vertical={false} />
                    <XAxis dataKey="week" tick={chartTokens.axisTick} axisLine={chartTokens.axisLine} tickLine={false} />
                    <YAxis tick={chartTokens.axisTick} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} />
                    <Tooltip content={<ChartTooltip />} />
                    <Area type="monotone" dataKey="revenue" stroke="var(--chart-1)" strokeWidth={2} fill="url(#revGrad)" />
                    <Area type="monotone" dataKey="clicks" stroke="var(--chart-3)" strokeWidth={1.5} fill="transparent" strokeDasharray="4 3" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-[16px] px-[16px] pb-[12px]">
                <span className="flex items-center gap-[5px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
                  <span className="inline-block w-[12px] h-[3px]" style={{ background: "var(--chart-1)", borderRadius: 2 }} /> Revenue
                </span>
                <span className="flex items-center gap-[5px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
                  <span className="inline-block w-[12px] h-[3px]" style={{ background: "var(--chart-3)", borderRadius: 2, borderTop: "1px dashed var(--chart-3)" }} /> Clicks
                </span>
              </div>
            </div>

            {/* Revenue by partner type (1/3) */}
            <div className="col-span-1 bg-card" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <div className="px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", color: "var(--foreground)" }}>Revenue by Partner Type</span>
              </div>
              <div className="px-[8px] py-[12px]" style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={REVENUE_BY_CATEGORY} layout="vertical" margin={{ top: 0, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray={chartTokens.gridDash} stroke={chartTokens.gridStroke} horizontal={false} />
                    <XAxis type="number" tick={chartTokens.axisTick} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} />
                    <YAxis type="category" dataKey="name" tick={chartTokens.axisTick} axisLine={false} tickLine={false} width={85} />
                    <Tooltip content={<ChartTooltip />} />
                    <Bar dataKey="revenue" radius={[0, 4, 4, 0]} barSize={18}>
                      {REVENUE_BY_CATEGORY.map((_, i) => (
                        <Cell key={i} fill={i === 0 ? "var(--chart-1)" : i === 1 ? "var(--chart-2)" : i === 2 ? "var(--chart-3)" : i === 3 ? "var(--chart-4)" : "var(--chart-5)"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Top 5 partners + quick highlights */}
          <div className="grid grid-cols-3 gap-[16px]">

            {/* Top 5 Partners table (2/3) */}
            <div className="col-span-2 bg-card overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", color: "var(--foreground)" }}>Top Partners by Revenue</span>
                <button
                  className="cursor-pointer"
                  style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--accent)", background: "none", border: "none" }}
                  onClick={() => setActiveTab("partners")}
                >
                  View All Partners →
                </button>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {["#", "Partner", "Revenue", "Conversions", "Conv. Rate", "Trend"].map((h) => (
                      <th key={h} className="text-left px-[16px] py-[8px]" style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PARTNERS.slice(0, 5).map((p, i) => (
                    <tr key={p.id} className="transition-colors hover:bg-muted/20 cursor-pointer" style={{ borderBottom: "1px solid var(--border)" }}>
                      <td className="px-[16px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)", width: 40 }}>{i + 1}</td>
                      <td className="px-[16px] py-[10px]">
                        <div className="flex items-center gap-[8px]">
                          <button
                            className="cursor-pointer hover:underline"
                            style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--accent)", background: "none", border: "none", padding: 0 }}
                            onClick={() => setSlideoutPartner(p.name)}
                          >
                            {p.name}
                          </button>
                          <span className="inline-flex items-center px-[8px] h-[20px]" style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-sm)", fontWeight: 600, fontFamily: FONT, background: TIER_COLORS[p.tier].bg, color: TIER_COLORS[p.tier].text }}>
                            {p.tier}
                          </span>
                        </div>
                      </td>
                      <td className="px-[16px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)" }}>{fmtCurrency(p.revenue)}</td>
                      <td className="px-[16px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{p.conversions.toLocaleString()}</td>
                      <td className="px-[16px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--foreground)" }}>{p.convRate.toFixed(2)}%</td>
                      <td className="px-[16px] py-[10px]">
                        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: p.revenueChange >= 0 ? "var(--positive)" : "var(--negative)" }}>
                          {p.revenueChange >= 0 ? "+" : ""}{p.revenueChange}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick highlights (1/3) */}
            <div className="col-span-1 flex flex-col gap-[12px]">
              {/* Fastest growing */}
              <div className="bg-card p-[16px] flex flex-col gap-[6px] relative overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "var(--positive)" }} />
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>Fastest Growing Partner</span>
                <button className="self-start cursor-pointer hover:underline" style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--accent)", background: "none", border: "none", padding: 0 }} onClick={() => setSlideoutPartner(topGrower.name)}>{topGrower.name}</button>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--positive)" }}>+{topGrower.revenueChange}% revenue growth</span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{fmtCurrency(topGrower.revenue)} revenue · {topGrower.convRate}% conv. rate</span>
                <button
                  className="mt-[4px] self-start h-[28px] px-[14px] cursor-pointer transition-colors"
                  style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                >
                  Review Partner
                </button>
              </div>

              {/* Biggest decliner */}
              {topDecliner && (
                <div className="bg-card p-[16px] flex flex-col gap-[6px] relative overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "var(--destructive-foreground)" }} />
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>Needs Attention</span>
                  <button className="self-start cursor-pointer hover:underline" style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--accent)", background: "none", border: "none", padding: 0 }} onClick={() => setSlideoutPartner(topDecliner.name)}>{topDecliner.name}</button>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--destructive-foreground)" }}>{topDecliner.revenueChange}% revenue decline</span>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{fmtCurrency(topDecliner.revenue)} revenue · {topDecliner.tier} tier</span>
                  <button
                    className="mt-[4px] self-start h-[28px] px-[14px] cursor-pointer transition-colors hover:bg-muted/40 bg-card text-foreground"
                    style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", border: "1px solid var(--border)" }}
                  >
                    Investigate
                  </button>
                </div>
              )}

              {/* Program milestone */}
              <div className="bg-card p-[16px] flex flex-col gap-[6px] relative overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "var(--accent)" }} />
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>Program Health</span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>{PARTNERS.length} Active Partners</span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>
                  {PARTNERS.filter((p) => p.status === "growing").length} growing · {PARTNERS.filter((p) => p.status === "declining").length} declining · {PARTNERS.filter((p) => p.status === "new").length} new
                </span>
                <button
                  className="mt-[4px] self-start cursor-pointer"
                  style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--accent)", background: "none", border: "none" }}
                  onClick={() => setActiveTab("insights")}
                >
                  View All Insights →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════ TAB: PARTNER LEADERBOARD ═══════════ */}
      {activeTab === "partners" && (
        <div className="flex flex-col gap-[12px]">

          {/* Filters */}
          <div className="flex items-center gap-[10px]">
            <div
              className="flex items-center gap-[8px] h-[36px] px-[12px] bg-card"
              style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", width: 240 }}
            >
              <svg className="size-[14px] shrink-0" viewBox="0 0 16 16" fill="none">
                <circle cx="6.5" cy="6.5" r="5" stroke="var(--muted-foreground)" strokeWidth="1.3" />
                <path d="M10.5 10.5L14.5 14.5" stroke="var(--muted-foreground)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <input
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400 }}
                placeholder="Search partners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {["All", "Gold", "Silver", "Bronze", "New"].map((tier) => (
              <button
                key={tier}
                className="h-[32px] px-[14px] cursor-pointer transition-colors"
                style={{
                  fontFamily: FONT,
                  fontSize: "var(--text-sm)",
                  fontWeight: partnerFilter === tier ? 600 : 400,
                  borderRadius: "var(--radius-button)",
                  border: partnerFilter === tier ? "1.5px solid var(--accent)" : "1px solid var(--border)",
                  background: partnerFilter === tier ? "var(--card)" : "var(--card)",
                  color: partnerFilter === tier ? "var(--accent)" : "var(--muted-foreground)",
                }}
                onClick={() => setPartnerFilter(tier)}
              >
                {tier}
              </button>
            ))}
            <span className="ml-auto" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>
              {sortedPartners.length} partner{sortedPartners.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Full table */}
          <div className="w-full bg-card overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th className="text-left px-[16px] py-[10px]" style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--muted-foreground)", width: 40 }}>#</th>
                  <th className="text-left px-[16px] py-[10px]" style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>Partner</th>
                  {(
                    [
                      { col: "revenue" as PartnerSort, label: "Revenue" },
                      { col: "clicks" as PartnerSort, label: "Clicks" },
                      { col: "conversions" as PartnerSort, label: "Conversions" },
                      { col: "convRate" as PartnerSort, label: "Conv. Rate" },
                      { col: "revenueChange" as PartnerSort, label: "30d Trend" },
                    ]
                  ).map(({ col, label }) => (
                    <th
                      key={col}
                      className="text-right px-[16px] py-[10px] cursor-pointer select-none transition-colors hover:text-foreground"
                      style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", color: partnerSort === col ? "var(--accent)" : "var(--muted-foreground)" }}
                      onClick={() => toggleSort(col)}
                    >
                      {label}{sortArrow(col)}
                    </th>
                  ))}
                  <th className="text-left px-[16px] py-[10px]" style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--muted-foreground)", width: 100 }}>Status</th>
                  <th className="px-[16px] py-[10px]" style={{ width: 120 }} />
                </tr>
              </thead>
              <tbody>
                {sortedPartners.map((p, i) => (
                  <tr key={p.id} className="transition-colors hover:bg-muted/20 cursor-pointer group" style={{ borderBottom: "1px solid var(--border)" }}>
                    <td className="px-[16px] py-[12px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)" }}>{i + 1}</td>
                    <td className="px-[16px] py-[12px]">
                      <div className="flex items-center gap-[8px]">
                        <button
                          className="cursor-pointer hover:underline"
                          style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--accent)", background: "none", border: "none", padding: 0 }}
                          onClick={() => setSlideoutPartner(p.name)}
                        >
                          {p.name}
                        </button>
                        <span className="inline-flex items-center px-[8px] h-[20px]" style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-sm)", fontWeight: 600, fontFamily: FONT, background: TIER_COLORS[p.tier].bg, color: TIER_COLORS[p.tier].text }}>
                          {p.tier}
                        </span>
                      </div>
                    </td>
                    <td className="px-[16px] py-[12px] text-right" style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)" }}>{fmtCurrency(p.revenue)}</td>
                    <td className="px-[16px] py-[12px] text-right" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{fmtNumber(p.clicks)}</td>
                    <td className="px-[16px] py-[12px] text-right" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{p.conversions.toLocaleString()}</td>
                    <td className="px-[16px] py-[12px] text-right" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--foreground)" }}>{p.convRate.toFixed(2)}%</td>
                    <td className="px-[16px] py-[12px] text-right">
                      <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: p.revenueChange >= 0 ? "var(--positive)" : "var(--negative)" }}>
                        {p.revenueChange >= 0 ? "+" : ""}{p.revenueChange}%
                      </span>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: STATUS_LABELS[p.status].color }}>
                        {STATUS_LABELS[p.status].label}
                      </span>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <div className="flex items-center gap-[6px] opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="h-[26px] px-[10px] cursor-pointer transition-colors"
                          style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                          onClick={() => setSlideoutPartner(p.name)}
                        >
                          View
                        </button>
                        <button
                          className="h-[26px] px-[10px] cursor-pointer transition-colors hover:bg-muted/40 bg-card text-foreground"
                          style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", border: "1px solid var(--border)" }}
                        >
                          Contact
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ═══════════ TAB: INSIGHTS & ACTIONS ═══════════ */}
      {activeTab === "insights" && (
        <div className="flex flex-col gap-[12px]">
          <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>
            Actionable recommendations based on your program's recent performance
          </span>

          {INSIGHTS.map((ins) => {
            const accentColor =
              ins.type === "opportunity" ? "var(--positive)" :
              ins.type === "risk" ? "var(--negative)" :
              "var(--accent)";
            const typeBg =
              ins.type === "opportunity" ? "var(--positive-bg)" :
              ins.type === "risk" ? "var(--negative-bg)" :
              "var(--action-icon-bg)";
            const typeLabel =
              ins.type === "opportunity" ? "Opportunity" :
              ins.type === "risk" ? "Risk" :
              "Milestone";

            return (
              <div
                key={ins.id}
                className="bg-card p-[20px] flex gap-[16px] items-start relative overflow-hidden transition-colors hover:bg-muted/10"
                style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: accentColor }} />

                {/* Icon */}
                <span
                  className="flex items-center justify-center size-[36px] shrink-0 mt-[2px]"
                  style={{ borderRadius: "var(--radius)", background: typeBg, color: accentColor }}
                >
                  {ins.type === "opportunity" ? (
                    <svg className="size-[16px]" viewBox="0 0 16 16" fill="none"><path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" fill="currentColor" /></svg>
                  ) : ins.type === "risk" ? (
                    <svg className="size-[16px]" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 12H1L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /><path d="M7 5.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><circle cx="7" cy="10" r="0.6" fill="currentColor" /></svg>
                  ) : (
                    <svg className="size-[16px]" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L9.5 6H14L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 6H6.5L8 1.5Z" fill="currentColor" /></svg>
                  )}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <span className="inline-flex items-center px-[8px] h-[20px]" style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-sm)", fontWeight: 600, fontFamily: FONT, background: typeBg, color: accentColor }}>
                      {typeLabel}
                    </span>
                    {ins.partnerName && (
                      <button
                        className="cursor-pointer hover:underline"
                        style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--accent)", background: "none", border: "none", padding: 0 }}
                        onClick={() => setSlideoutPartner(ins.partnerName!)}
                      >
                        {ins.partnerName}
                      </button>
                    )}
                  </div>
                  <span className="block" style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)", lineHeight: "1.4" }}>
                    {ins.headline}
                  </span>
                  <span className="block mt-[4px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", lineHeight: "1.5" }}>
                    {ins.detail}
                  </span>
                </div>

                {/* Action */}
                <button
                  className="h-[32px] px-[16px] cursor-pointer transition-colors shrink-0 self-center"
                  style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                  onClick={() => { if (ins.partnerName) setSlideoutPartner(ins.partnerName); }}
                >
                  {ins.action}
                </button>
              </div>
            );
          })}
        </div>
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