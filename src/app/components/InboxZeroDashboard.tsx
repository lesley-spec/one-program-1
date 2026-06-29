import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line,
} from "recharts";
import { PartnerSlideout } from "./PartnerSlideout";

/* ─── chart data ─── */
const CHART_DATA = [
  { day: "Jan 01", Clicks: 1200, Revenue: 15200, Actions: 580 },
  { day: "Jan 02", Clicks: 2800, Revenue: 22400, Actions: 920 },
  { day: "Jan 03", Clicks: 3400, Revenue: 28600, Actions: 1100 },
  { day: "Jan 04", Clicks: 2200, Revenue: 18100, Actions: 640 },
  { day: "Jan 05", Clicks: 3600, Revenue: 31200, Actions: 1250 },
  { day: "Jan 06", Clicks: 1800, Revenue: 12800, Actions: 490 },
  { day: "Jan 07", Clicks: 3100, Revenue: 26500, Actions: 1060 },
];
const COMP_DATA = [
  { week: "W1", "This Month": 8430, "Last Month": 7200 },
  { week: "W2", "This Month": 12500, "Last Month": 11200 },
  { week: "W3", "This Month": 14200, "Last Month": 12800 },
  { week: "W4", "This Month": 15307, "Last Month": 13900 },
];

const FONT = "'Sarabun', sans-serif";
const TT: React.CSSProperties = {
  background: "var(--card)", border: "1px solid var(--border)",
  borderRadius: "8px", fontFamily: FONT, fontSize: "12px", color: "var(--foreground)",
};

/* ─── brand logo badge ─── */
function BrandLogo({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n.includes("credit karma"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 select-none"><span className="font-extrabold text-white text-sm">ck</span></div>;
  if (n.includes("us news"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-700 to-slate-900 relative overflow-hidden select-none"><div className="absolute top-0 inset-x-0 h-1 bg-red-500"/><span className="font-serif font-black text-white text-sm">U.S.</span></div>;
  if (n.includes("cnn"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-red-600 to-rose-800 select-none"><span className="font-black tracking-widest text-white text-xs">CNN</span></div>;
  if (n.includes("forbes"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-neutral-900 to-zinc-800 select-none"><span className="font-serif italic font-extrabold text-white text-xl">F</span></div>;
  if (n.includes("business insider"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-600 to-indigo-900 select-none"><span className="font-black text-white text-sm">BI</span></div>;
  if (n.includes("cnet"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500 to-rose-700 select-none"><span className="font-black tracking-tighter text-white text-xs">cnet</span></div>;
  if (n.includes("brandpartnering"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-600 to-fuchsia-900 select-none"><span className="font-extrabold text-white text-sm">BP</span></div>;
  if (n.includes("honey"))
    return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500 select-none"><span className="font-black text-white text-sm">H</span></div>;
  const initials = name.substring(0, 2).toUpperCase();
  return <div className="w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 select-none"><span className="font-bold text-white text-sm">{initials}</span></div>;
}

/* ─── partner photo card ─── */
const PARTNER_PHOTOS = [
  { name: "Krista Horton", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80" },
  { name: "A Pinch of Healthy", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=80" },
  { name: "Sarah", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&q=80" },
  { name: "HollyStrand", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80" },
  { name: "Natalie Borton", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&q=80" },
];

/* ─── shared stat pills ─── */
function StatPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-card border rounded-xl p-3 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-xl font-extrabold text-foreground">{value}</span>
        <span className="text-[10px] text-muted-foreground font-semibold">{label}</span>
      </div>
      <span className={`size-2 rounded-full shrink-0 ${color}`} />
    </div>
  );
}

/* ══════════════════════════════════════════
   VARIATION 1 — Daily Digest
══════════════════════════════════════════ */
function DigestVariation({
  toast,
  cadence,
  onSelectCadence,
  onSelectPartner
}: {
  toast: (m: string) => void;
  cadence: "weekly" | "monthly";
  onSelectCadence: (c: "weekly" | "monthly") => void;
  onSelectPartner: (name: string) => void;
}) {
  const [reviewQueue, setReviewQueue] = useState([
    {
      id: "rev-1",
      creator: "Avery Brooks",
      reach: "85K",
      campaign: "Walmart Summer Beachwear",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&q=80",
      caption: "So ready for the sun in this organic beach linen! Check my link for 15% off at Walmart. #ad #walmartfinds"
    },
    {
      id: "rev-2",
      creator: "Nico Martinez",
      reach: "140K",
      campaign: "Walmart Hiking & Travel Essentials",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&q=80",
      caption: "Tested the new Walmart outdoor trail pack this weekend. Honestly, premium quality without the markups! #ad #outdoorstyle"
    },
    {
      id: "rev-3",
      creator: "Sophia Patel",
      reach: "62K",
      campaign: "Walmart Summer Beachwear",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&q=80",
      caption: "Bikini coverups that actually fit and feel premium. Walmart's summer styles are dropping soon! #WalmartFinds"
    }
  ]);

  const handleReviewAction = (id: string, action: string, name: string) => {
    setReviewQueue(prev => prev.filter(item => item.id !== id));
    toast(`Asset by ${name} successfully ${action}!`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Cadence Selection Onboarding Card */}
      <div className="bg-card border rounded-2xl p-5 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-extrabold text-foreground">Operational Focus Cadence</h3>
            <p className="text-xs text-muted-foreground">Select how you want the platform to organize your priorities and briefing layout.</p>
          </div>
          <div className="flex bg-muted p-1 rounded-xl border border-border shrink-0">
            <button
              onClick={() => onSelectCadence("weekly")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                cadence === "weekly"
                  ? "bg-card text-accent shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🗓 Weekly Review
            </button>
            <button
              onClick={() => onSelectCadence("monthly")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                cadence === "monthly"
                  ? "bg-card text-accent shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📊 Monthly Analysis
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="size-16 rounded-full bg-emerald-100 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center shrink-0">
          <span className="text-3xl">🏆</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-2">
            ✓ Inbox Zero Achieved
          </div>
          <h2 className="font-extrabold text-foreground text-xl mb-1">You're All Caught Up, Christine! 🎉</h2>
          <p className="text-muted-foreground text-sm">All 4 compliance tasks verified. Your program is fully operational and running smoothly.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center shrink-0">
          {[
            { label: "Tasks Done", val: "4/4" },
            { label: "USD Funded", val: "$20,000" },
            { label: "Status", val: "✓ Compliant" },
          ].map(s => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-xs font-black text-foreground">{s.val}</span>
              <span className="text-[9px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* JTBD Morning Briefing */}
      {cadence === "weekly" ? (
        <div className="bg-card border rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <span className="size-6 rounded bg-accent/15 text-accent flex items-center justify-center text-xs">✦</span>
              <span className="text-sm font-extrabold text-foreground">Today's Morning Briefing · 4 Priorities</span>
            </div>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider bg-accent/5 px-2 py-0.5 rounded">Weekly Mode</span>
          </div>
          <div className="flex flex-col gap-3">
            {/* Action 1 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📅</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Prepare for Partner Check-in with CNN Digital</p>
                  <p className="text-[10px] text-muted-foreground">Scheduled for 2:00 PM today · Surface check-in brief & talking points</p>
                </div>
              </div>
              <button
                onClick={() => onSelectPartner("CNN Digital")}
                className="px-3 py-1.5 bg-accent hover:bg-accent/80 text-white text-[10px] font-bold rounded-lg cursor-pointer transition-colors"
              >
                Open Check-in Prep
              </button>
            </div>

            {/* Action 2 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📝</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Review Pending Walmart Creator Campaign Submissions</p>
                  <p className="text-[10px] text-muted-foreground">Review submitted image drafts and captions below</p>
                </div>
              </div>
              <a
                href="#review-queue"
                className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer transition-colors flex items-center"
              >
                Go to Queue
              </a>
            </div>

            {/* Action 3 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">💸</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Approve Pending Payout for Krista Horton</p>
                  <p className="text-[10px] text-muted-foreground">Amount: $4,250.00 · payment verification completed</p>
                </div>
              </div>
              <button
                onClick={() => {
                  toast("Payout of $4,250.00 approved for Krista Horton");
                }}
                className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer transition-colors"
              >
                Approve Payout
              </button>
            </div>

            {/* Action 4 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📈</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Review Skimlinks Network Commission Terms</p>
                  <p className="text-[10px] text-muted-foreground">Partner is up +18% in revenue this week. Adjust performance contract terms.</p>
                </div>
              </div>
              <button
                onClick={() => onSelectPartner("Skimlinks Network")}
                className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer transition-colors"
              >
                Adjust Terms
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-card border rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <span className="size-6 rounded bg-accent/15 text-accent flex items-center justify-center text-xs">✦</span>
              <span className="text-sm font-extrabold text-foreground">Monthly Review & Strategy Briefing</span>
            </div>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 px-2 py-0.5 rounded">Monthly Mode</span>
          </div>
          <div className="flex flex-col gap-3">
            {/* Monthly Action 1 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📊</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Consolidate and Close May Analytics Report</p>
                  <p className="text-[10px] text-muted-foreground">Consolidated performance across Engage & Optimize programs</p>
                </div>
              </div>
              <button
                onClick={() => toast("May Analytics Report generated & closed.")}
                className="px-3 py-1.5 bg-accent hover:bg-accent/80 text-white text-[10px] font-bold rounded-lg cursor-pointer transition-colors"
              >
                Run Report
              </button>
            </div>

            {/* Monthly Action 2 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🤝</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Audit Top 5 Partners Renewal Pipeline</p>
                  <p className="text-[10px] text-muted-foreground">Honey / PayPal, RetailMeNot, Skimlinks have contracts expiring in 30 days</p>
                </div>
              </div>
              <button
                onClick={() => onSelectPartner("Honey / PayPal")}
                className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer transition-colors"
              >
                Review Pipeline
              </button>
            </div>

            {/* Monthly Action 3 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">💼</span>
                <div>
                  <p className="text-xs font-bold text-foreground">Fast-Track Partnerize welcome onboarding</p>
                  <p className="text-[10px] text-muted-foreground">New partner shows +32% early revenue growth signals. Set up introductory contract tier.</p>
                </div>
              </div>
              <button
                onClick={() => onSelectPartner("Influencer Hub Co.")}
                className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer transition-colors"
              >
                Complete Onboarding
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top 5 Partners / Opportunities */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3 flex items-center gap-2">
          <span className="size-5 rounded bg-accent/15 text-accent flex items-center justify-center text-xs">🚀</span>
          {cadence === "weekly" ? "Top 5 Partners Worth Doubling Down On" : "High-Score Contract Opportunities"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { name: "CouponFollow", rev: "$34,560", growth: "+18%", cr: "2.85%", epc: "$0.76", score: 95 },
            { name: "RetailMeNot", rev: "$28,410", growth: "+12%", cr: "2.58%", epc: "$0.75", score: 92 },
            { name: "Honey / PayPal", rev: "$22,890", growth: "+9%", cr: "2.78%", epc: "$0.73", score: 88 },
            { name: "Influencer Hub Co.", rev: "$1,450", growth: "+32%", cr: "2.29%", epc: "$0.69", score: 78 },
            { name: "NerdWallet Recs", rev: "$980", growth: "+28%", cr: "2.13%", epc: "$0.61", score: 74 }
          ].map(p => (
            <div
              key={p.name}
              onClick={() => onSelectPartner(p.name)}
              className="bg-card border rounded-xl p-4 flex flex-col gap-2 hover:border-accent hover:shadow-sm cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{p.growth}</span>
                <span className="text-xs font-black text-muted-foreground font-semibold">Score: {p.score}</span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground truncate">{p.name}</p>
                <p className="text-lg font-black text-foreground mt-1">{p.rev}</p>
              </div>
              <div className="flex justify-between border-t pt-2 text-[9px] text-muted-foreground font-semibold">
                <span>CR: <strong className="text-foreground">{p.cr}</strong></span>
                <span>EPC: <strong className="text-foreground">{p.epc}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Queue */}
      <div id="review-queue">
        <h3 className="text-sm font-extrabold text-foreground mb-3 flex items-center gap-2">
          <span className="size-5 rounded bg-accent/15 text-accent flex items-center justify-center text-xs">📷</span>
          Creator Content Review Queue ({reviewQueue.length} pending drafts)
        </h3>
        {reviewQueue.length === 0 ? (
          <div className="bg-card border rounded-xl p-6 text-center text-muted-foreground text-xs">
            ✓ All creator assets reviewed. Queue is empty!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewQueue.map(item => (
              <div key={item.id} className="bg-card border rounded-xl overflow-hidden flex flex-col hover:shadow-sm transition-shadow">
                <div className="h-48 overflow-hidden bg-muted relative">
                  <img src={item.photo} alt={item.creator} className="w-full h-full object-cover object-center" />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                    {item.campaign}
                  </span>
                </div>
                <div className="p-3 flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">{item.creator}</span>
                    <span className="text-[10px] text-muted-foreground font-semibold">{item.reach} reach</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground italic line-clamp-2">"{item.caption}"</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleReviewAction(item.id, "approved", item.creator)}
                      className="flex-1 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold rounded-lg cursor-pointer transition-colors"
                    >
                      Approve Asset
                    </button>
                    <button
                      onClick={() => handleReviewAction(item.id, "rejected", item.creator)}
                      className="flex-1 py-1 bg-card border text-muted-foreground hover:bg-muted text-[10px] font-bold rounded-lg cursor-pointer transition-colors"
                    >
                      Request Edits
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Today's digest cards */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3 flex items-center gap-2">
          <span className="size-5 rounded bg-accent/15 text-accent flex items-center justify-center text-xs">📋</span>
          Today's Activity Digest
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "📈", title: "Revenue Up", value: "$50,437", sub: "+18% vs last month", color: "text-emerald-600" },
            { icon: "🤝", title: "New Partners", value: "247", sub: "Joined this month", color: "text-accent" },
            { icon: "🔗", title: "Active Links", value: "1,500", sub: "Promotional assets shared", color: "text-violet-600" },
          ].map(c => (
            <div key={c.title} className="bg-card border rounded-xl p-4 flex flex-col gap-2 hover:shadow-sm transition-shadow">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="text-[11px] text-muted-foreground font-semibold">{c.title}</p>
                <p className={`text-xl font-extrabold ${c.color}`}>{c.value}</p>
                <p className="text-[10px] text-muted-foreground">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Health mini charts */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3">📊 Program Health — This Month vs Last Month</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border rounded-xl p-4">
            <p className="text-xs font-bold text-foreground mb-1">Revenue</p>
            <p className="text-lg font-black text-foreground mb-3">$50,437.00</p>
            <ResponsiveContainer width="100%" height={90}>
              <BarChart data={COMP_DATA} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="week" tick={{ fill: "var(--muted-foreground)", fontSize: 9 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 9 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={TT} />
                <Bar dataKey="This Month" fill="var(--accent)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Last Month" fill="#F77300" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-card border rounded-xl p-4">
            <p className="text-xs font-bold text-foreground mb-1">Clicks Over Time</p>
            <p className="text-lg font-black text-foreground mb-3">11,834</p>
            <ResponsiveContainer width="100%" height={90}>
              <AreaChart data={CHART_DATA} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                <defs>
                  <linearGradient id="digestGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: "var(--muted-foreground)", fontSize: 8 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 9 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={TT} />
                <Area type="monotone" dataKey="Clicks" stroke="var(--accent)" strokeWidth={2} fill="url(#digestGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   VARIATION 2 — AI Matching Radar
══════════════════════════════════════════ */
function RadarVariation({ toast, onSelectPartner }: { toast: (m: string) => void; onSelectPartner: (name: string) => void }) {
  const [sent, setSent] = useState<string[]>([]);
  const matches = [
    { name: "Avery Brooks", category: "Active Travel", match: 98, reach: "85K", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120", platform: "Instagram" },
    { name: "Nico Martinez", category: "Island Hiking", match: 94, reach: "140K", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120", platform: "YouTube" },
    { name: "Sophia Patel", category: "Beachwear Vlog", match: 89, reach: "62K", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120", platform: "TikTok" },
    { name: "Jordan Kim", category: "Wellness & Fitness", match: 85, reach: "230K", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120", platform: "TikTok" },
    { name: "Taylor Reed", category: "Family Lifestyle", match: 81, reach: "55K", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120", platform: "Blog" },
    { name: "Morgan Laine", category: "Fashion & Trends", match: 77, reach: "310K", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120", platform: "Instagram" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Radar hero */}
      <div className="bg-gradient-to-br from-accent/5 via-blue-50/50 to-indigo-50/50 dark:from-accent/10 dark:via-blue-950/20 dark:to-indigo-950/20 border border-accent/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="relative size-16 shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20 animate-ping opacity-30" />
          <div className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20" />
          <span className="text-2xl z-10">📡</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-accent text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-2 animate-pulse">
            ● LIVE — AI Matching Radar Active
          </div>
          <h2 className="font-extrabold text-foreground text-xl mb-1">6 High-Match Creators Detected</h2>
          <p className="text-muted-foreground text-sm">AI scanned 12,400 profiles in the last hour. These creators align perfectly with your Mother's Day campaign goals.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center shrink-0">
          <div className="bg-card border rounded-xl p-3">
            <p className="text-lg font-black text-accent">12,400</p>
            <p className="text-[9px] text-muted-foreground font-semibold">Profiles Scanned</p>
          </div>
          <div className="bg-card border rounded-xl p-3">
            <p className="text-lg font-black text-emerald-600">6</p>
            <p className="text-[9px] text-muted-foreground font-semibold">Top Matches</p>
          </div>
        </div>
      </div>

      {/* Match score bar */}
      <div className="bg-card border rounded-xl p-4 flex flex-col gap-3">
        <p className="text-xs font-bold text-foreground">Match Quality Distribution</p>
        <div className="flex gap-1 h-3 rounded-full overflow-hidden">
          <div className="bg-emerald-500 rounded-full" style={{ width: "33%" }} title="90-100% match" />
          <div className="bg-accent rounded-full" style={{ width: "33%" }} title="80-90% match" />
          <div className="bg-amber-400 rounded-full" style={{ width: "21%" }} title="70-80% match" />
          <div className="bg-muted rounded-full flex-1" title="Below 70%" />
        </div>
        <div className="flex gap-4 text-[9px] text-muted-foreground font-semibold">
          <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-emerald-500 inline-block" />90-100%: 2 creators</span>
          <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-accent inline-block" />80-89%: 2 creators</span>
          <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-amber-400 inline-block" />70-79%: 2 creators</span>
        </div>
      </div>

      {/* Creator match cards */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3">🎯 Recommended Creator Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {matches.map(m => {
            const wasSent = sent.includes(m.name);
            const barColor = m.match >= 90 ? "bg-emerald-500" : m.match >= 80 ? "bg-accent" : "bg-amber-400";
            return (
              <div key={m.name} className="bg-card border rounded-xl p-4 flex flex-col gap-3 hover:border-accent transition-colors">
                <div className="flex items-center gap-3">
                  <img src={m.avatar} alt={m.name} className="size-10 rounded-full object-cover border-2 border-accent/20" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">{m.name}</p>
                    <p className="text-[9px] text-muted-foreground">{m.category} · {m.platform}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[9px] font-semibold">
                    <span className="text-muted-foreground">Match Score</span>
                    <span className="font-extrabold text-foreground">{m.match}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${m.match}%` }} />
                  </div>
                </div>
                <div className="flex justify-between text-[9px] text-muted-foreground">
                  <span>Reach: <strong className="text-foreground">{m.reach}</strong></span>
                </div>
                <button
                  onClick={() => { setSent(prev => [...prev, m.name]); toast(`Offer sent to ${m.name}!`); }}
                  className={`w-full py-1.5 text-[10px] font-bold rounded-lg cursor-pointer transition-all ${wasSent ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30" : "bg-accent hover:bg-accent/80 text-white"}`}
                >
                  {wasSent ? "✓ Offer Sent" : "Send Recruitment Offer"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content partners */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3">🤝 Content / Review Partners You Should Work With</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { name: "CNN Digital", match: "92%" },
            { name: "Forbes", match: "78%" },
            { name: "Business Insider", match: "56%" },
            { name: "CNET", match: "75%" },
            { name: "Brandpartnering", match: "90%" },
          ].map(c => (
            <div key={c.name} onClick={() => onSelectPartner(c.name)} className="bg-card border rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:border-accent transition-colors">
              <div className="size-10"><BrandLogo name={c.name} /></div>
              <p className="text-[10px] font-bold text-foreground text-center truncate w-full">{c.name}</p>
              <span className="text-[9px] font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{c.match} match</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   VARIATION 3 — Campaign Command
══════════════════════════════════════════ */
function CommandVariation({ toast, onSelectPartner }: { toast: (m: string) => void; onSelectPartner: (name: string) => void }) {
  const [launched, setLaunched] = useState<string[]>([]);
  const campaigns = [
    { name: "Mother's Day Gift Guide", status: "Live", clicks: "3,430", revenue: "$14,200", cr: "4.8%", trend: "+18%", up: true },
    { name: "Summer Travel Launch", status: "Scheduled", clicks: "—", revenue: "—", cr: "—", trend: "Starts Jun 15", up: true },
    { name: "Back to School Prep", status: "Draft", clicks: "—", revenue: "—", cr: "—", trend: "Setup needed", up: false },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Command hero */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="size-16 rounded-full bg-amber-100 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 flex items-center justify-center shrink-0">
          <span className="text-3xl">⚡</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-2">
            ⚡ Campaign Command Center
          </div>
          <h2 className="font-extrabold text-foreground text-xl mb-1">You're Halfway to Your Monthly Goal</h2>
          <p className="text-muted-foreground text-sm">Revenue target: $250,000 · Achieved: $123,486 · Keep pushing — you're on track!</p>
        </div>
        <div className="w-full md:w-[200px] shrink-0">
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-foreground">$123,486</span>
            <span className="text-muted-foreground">/ $250,000</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" style={{ width: "49%" }} />
          </div>
          <p className="text-[9px] text-muted-foreground mt-1 text-right">49% achieved</p>
        </div>
      </div>

      {/* KPI summary row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatPill label="Active Inquiry" value="102" color="bg-red-500" />
        <StatPill label="App Returns" value="43" color="bg-accent" />
        <StatPill label="Expiring" value="3" color="bg-amber-500" />
        <StatPill label="Unread" value="1" color="bg-accent" />
      </div>

      {/* Campaigns table */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3">🚀 Active & Upcoming Campaigns</h3>
        <div className="flex flex-col gap-3">
          {campaigns.map(c => (
            <div key={c.name} className="bg-card border rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs font-bold text-foreground">{c.name}</p>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                    c.status === "Live" ? "bg-emerald-500/15 text-emerald-600" :
                    c.status === "Scheduled" ? "bg-accent/15 text-accent" :
                    "bg-muted text-muted-foreground"
                  }`}>{c.status}</span>
                </div>
                <div className="flex gap-4 text-[10px] text-muted-foreground font-semibold">
                  {c.clicks !== "—" && <span>Clicks: <strong className="text-foreground">{c.clicks}</strong></span>}
                  {c.revenue !== "—" && <span>Revenue: <strong className="text-foreground">{c.revenue}</strong></span>}
                  {c.cr !== "—" && <span>CR: <strong className="text-emerald-600">{c.cr}</strong></span>}
                  <span className={c.up ? "text-emerald-600 font-bold" : "text-muted-foreground"}>{c.trend}</span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                {c.status === "Live" && (
                  <button onClick={() => toast(`Opening performance for ${c.name}`)} className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer">View Stats</button>
                )}
                {c.status === "Draft" && (
                  <button
                    onClick={() => { setLaunched(p => [...p, c.name]); toast(`${c.name} queued for launch!`); }}
                    className={`px-3 py-1.5 text-[10px] font-bold rounded-lg cursor-pointer transition-all ${launched.includes(c.name) ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30" : "bg-accent hover:bg-accent/80 text-white"}`}
                  >
                    {launched.includes(c.name) ? "✓ Queued" : "Activate"}
                  </button>
                )}
                {c.status === "Scheduled" && (
                  <button onClick={() => toast(`Editing schedule for ${c.name}`)} className="px-3 py-1.5 bg-card border text-[10px] font-bold rounded-lg hover:bg-muted cursor-pointer">Edit Schedule</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Click match widget */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3">🔗 Partners Generating Clicks — Take Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Credit Karma", clicks: "3,430", delta: "+18%", up: true, action: "Send Product Catalog" },
            { name: "Christina Chen", clicks: "682", delta: "+10%", up: true, action: "Invite to Campaign" },
            { name: "Honey", clicks: "235", delta: "-5%", up: false, action: "Send Promo Code" },
          ].map(p => (
            <div key={p.name} className="bg-card border rounded-xl p-4 flex flex-col gap-3 hover:border-accent/40 hover:shadow-sm cursor-pointer transition-all" onClick={() => onSelectPartner(p.name === "Honey" ? "Honey / PayPal" : p.name)}>
              <div className="flex items-center gap-2">
                <div className="size-8"><BrandLogo name={p.name} /></div>
                <p className="text-xs font-bold text-foreground">{p.name}</p>
              </div>
              <div className="flex items-center gap-3 py-2 border-y">
                <span className="text-sm font-extrabold text-foreground">{p.clicks} Clicks</span>
                <span className={`text-[10px] font-bold ${p.up ? "text-emerald-600" : "text-red-500"}`}>{p.up ? "↑" : "↓"} {p.delta} last 3 days</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); toast(`${p.action} sent to ${p.name}!`); }} className="w-full py-1.5 bg-accent hover:bg-accent/80 text-white text-[10px] font-bold rounded-lg cursor-pointer">
                {p.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Referred transactions chart */}
      <div>
        <h3 className="text-sm font-extrabold text-foreground mb-3">📈 Referred Transactions — 2024 vs 2025</h3>
        <div className="bg-card border rounded-xl p-4 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-1 shrink-0 text-center md:text-left">
            <p className="text-xl font-extrabold text-emerald-600">↑ 80%</p>
            <p className="text-xs text-muted-foreground font-semibold">Increase in referred<br />transactions YoY</p>
            <div className="flex gap-4 mt-2 text-[10px] font-bold font-semibold">
              <span className="text-muted-foreground">● 2024: 49,204</span>
              <span className="text-accent">● 2025: 88,294</span>
            </div>
          </div>
          <div className="flex-1 h-[120px] w-full">
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={[{ m: "Jan", "2024": 12400, "2025": 22800 }, { m: "Feb", "2024": 14500, "2025": 26400 }, { m: "Mar", "2024": 18600, "2025": 31200 }]} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="m" tick={{ fill: "var(--muted-foreground)", fontSize: 9 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 9 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={TT} />
                <Bar dataKey="2024" fill="#94a3b8" radius={[3, 3, 0, 0]} />
                <Bar dataKey="2025" fill="var(--accent)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT — Tab shell
══════════════════════════════════════════ */
type Variation = "digest" | "radar" | "command";

const TABS: { key: Variation; emoji: string; label: string; sub: string }[] = [
  { key: "digest",  emoji: "📋", label: "Daily Digest",        sub: "All caught up — today's summary" },
  { key: "radar",   emoji: "📡", label: "AI Matching Radar",   sub: "6 high-match creators detected" },
  { key: "command", emoji: "⚡", label: "Campaign Command",    sub: "Goal 49% achieved · 3 campaigns" },
];

export function InboxZeroDashboard({ variation }: { variation?: Variation }) {
  const [active, setActive] = useState<Variation>(variation ?? "digest");
  const [toast, setToast] = useState<string | null>(null);
  const [cadence, setCadence] = useState<"weekly" | "monthly">("weekly");
  const [slideoutPartner, setSlideoutPartner] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background relative">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-[999] flex items-center gap-3 bg-card border border-accent rounded-xl px-4 py-3 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="size-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">✓</span>
          <span className="text-foreground text-sm font-semibold">{toast}</span>
          <button onClick={() => setToast(null)} className="text-muted-foreground hover:text-foreground ml-1">✕</button>
        </div>
      )}

      <div className="flex flex-col gap-6 w-full max-w-[1100px] py-10 px-6">
        {/* Page header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-5">
          <div>
            <h1 className="font-extrabold text-foreground text-2xl" style={{ fontFamily: FONT }}>
              Welcome back, Christine 👋
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">Inbox Zero achieved — explore your 3 personalised dashboard views below.</p>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-extrabold px-4 py-2 rounded-full">
            ✓ All tasks complete · Inbox Zero
          </div>
        </div>

        {/* Variation tab switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`flex flex-col gap-1 p-4 rounded-xl border text-left transition-all cursor-pointer ${
                active === t.key
                  ? "bg-accent border-accent text-white shadow-lg shadow-accent/20 scale-[1.02]"
                  : "bg-card border-border text-foreground hover:border-accent/40 hover:shadow-sm"
              }`}
            >
              <span className="text-xl">{t.emoji}</span>
              <span className="font-extrabold text-sm">{t.label}</span>
              <span className={`text-[10px] font-semibold ${active === t.key ? "text-white/80" : "text-muted-foreground"}`}>{t.sub}</span>
            </button>
          ))}
        </div>

        {/* Active variation content */}
        <div className="animate-in fade-in duration-300">
          {active === "digest"  && (
            <DigestVariation
              toast={triggerToast}
              cadence={cadence}
              onSelectCadence={setCadence}
              onSelectPartner={setSlideoutPartner}
            />
          )}
          {active === "radar"   && (
            <RadarVariation
              toast={triggerToast}
              onSelectPartner={setSlideoutPartner}
            />
          )}
          {active === "command" && (
            <CommandVariation
              toast={triggerToast}
              onSelectPartner={setSlideoutPartner}
            />
          )}
        </div>
      </div>

      {/* Partner Slideout for check-in brief & relationship view */}
      <PartnerSlideout
        partnerName={slideoutPartner || ""}
        partnerNames={[
          "CNN Digital",
          "BuzzFeed Commerce",
          "The Wirecutter",
          "RetailMeNot",
          "Honey / PayPal",
          "Skimlinks Network",
          "Rakuten Rewards",
          "CouponFollow",
          "Influencer Hub Co.",
          "DealNews Media",
          "SlickDeals Aff.",
          "NerdWallet Recs"
        ]}
        open={!!slideoutPartner}
        onClose={() => setSlideoutPartner(null)}
        onNavigate={(name) => setSlideoutPartner(name)}
      />
    </div>
  );
}
