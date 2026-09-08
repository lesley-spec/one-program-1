export type ReportKpi = { label: string; value: string; delta: string; up?: boolean };

export type ReportPartner = {
  name: string;
  type: string;
  clicks: string;
  actions: number;
  revenue: string;
  cr: string;
  epc: string;
  good: boolean;
};

export type ReportContent = {
  takeawayTitle: string;
  takeaway: string;
  takeawayBody: string;
  kpis: ReportKpi[];
  exposureHeadline: string;
  attentionHeadline: string;
  conversionHeadline: string;
  conversionBody: string;
  recommendations: string[];
  partners: ReportPartner[];
  impressionBars: number[];
  clickBars: number[];
};

export type PromptVersion = {
  id: string;
  label: string;
  timestamp: string;
  prompt: string;
  markdown: string;
  report: ReportContent;
};

const STORY_PROMPT = `Write a partner wrap report in markdown. Tell it like a story — start with the big takeaway, then walk through the numbers.

Open with a quick summary of how the partner did this period. Lead with whatever moved the most. Then show the five KPIs (impressions, actions, action cost, revenue, AOV) with percent changes vs. last period. Call out anything that swung more than 10%.

Include the impressions trend chart and clicks by day chart. Say what's interesting — any spikes, dips, or patterns worth knowing about.

Break down performance by product (name, SKU, units sold, revenue, payout) and flag the winners and losers. Do the same for event types (actions, revenue, cost, AOV, CPA) — which ones are efficient, which ones aren't. Then cover ad performance by campaign and ad type, highlight best and worst ROAS.

End with 3–5 recommendations. Each one should tie back to something specific in the data. Keep it actionable — what should we actually do next.

Tone: write like a strategist briefing a partner manager. Professional but human. Use headers and bullets so it's easy to scan. Put charts and tables inline, not at the end. Frame wins as momentum and misses as opportunities.`;

const STRUCTURED_PROMPT = `Generate a **Partner Wrap** report — a narrative-driven performance summary written in markdown. The report should read like an analyst briefing, not a raw data dump.

## Structure

### 1. Executive Summary
Open with a 2–3 sentence overview of the partner's performance for the selected period. Lead with the most notable trend (e.g. "Actions surged 11% while action cost grew only 4%, signaling improving efficiency"). Set the tone for the full narrative.

### 2. KPI Scorecard
Present the five core metrics in a scannable row:
- **Impressions** — total with % change vs. prior period
- **Actions** — total with % change
- **Action Cost** — total spend with % change
- **Revenue** — total earned with % change
- **AOV** (Average Order Value) — value with % change

Flag any metric where change exceeds ±10% as a callout.

### 3. Trend Analysis
Embed the **Impressions trend chart** (line/area, daily granularity) for the full date range. Below it, add the **Clicks by Day** bar chart. Write 1–2 sentences interpreting the shape — spikes, dips, weekly patterns, or anomalies worth noting.

### 4. Product Performance
Render the **By Product** table with columns: Product Name, SKU, Products Sold, Revenue, Payout. After the table, include a short insight block highlighting the top-performing product and any products with declining sales or unusually high/low payout ratios.

### 5. Performance by Event Type
Render the **Event Type** table with columns: Name, Actions, Revenue, Action Cost, AOV, CPA. Annotate which event types are most cost-efficient (lowest CPA) and which drive the most revenue.

### 6. Performance by Ad Creative
Render the **By Ad** table with columns: Name, Ad Type, Actions, Revenue, Action Cost, AOV, CPA. Call out the best- and worst-performing campaigns by ROAS (Revenue ÷ Action Cost). Note any ad types that consistently outperform others.

### 7. Insights & Recommendations
Close with 3–5 actionable recommendations grounded in the data above. Each recommendation should reference the specific metric or table that supports it. Format as a numbered list with bold lead-ins.

## Tone & Style
- Professional but conversational — like a strategist writing to a partner manager
- Use markdown headers, bold, and bullet lists for scannability
- Attach all supporting charts and tables inline, not as appendices
- When a metric is positive, frame it as momentum; when negative, frame it as an opportunity`;

const EFFICIENCY_PROMPT = `Write a Partner Wrap focused on cost efficiency and CPA discipline.

Lead with action cost vs revenue: if spend grew slower than revenue, celebrate efficiency. If CPA spiked, open with the risk.

KPI row: Partners, Actions, Action Cost, Revenue, CPA (not AOV). Call out any ±10% swing.

Charts: spend pacing and actions by day. Partner table should emphasize EPC and CR diffs in green/red.

End with 3 recommendations that cut waste or reallocate budget — no soft suggestions.`;

const MIX_PROMPT = `Write a Partner Wrap about partner mix and diversification.

Open with how concentration changed: top-3 partners' share of revenue vs prior period. Then KPI scorecard (Partners, Actions, Revenue, AOV, New partners).

Include a partner mix table ranked by revenue share. Flag over-reliance (>35% from one partner) and under-activated media types.

Recommendations must name specific partner types to grow or pause.`;

const RECOVERY_PROMPT = `Write a Partner Wrap as a recovery narrative after a soft prior period.

Lead with the rebound metric (revenue or actions). Compare to the trough week. KPI row: Revenue, Actions, Action Cost, AOV, Return rate.

Charts should show the V-shape recovery in impressions and clicks. Conversion section explains what drove the bounce-back (creative, offer, or partner).

Close with 3–4 next steps to lock in the recovery, not just celebrate it.`;

export const PROMPT_VERSIONS: PromptVersion[] = [
  {
    id: "v1",
    label: "Version 1",
    timestamp: "Sep 4, 2026 8:56 AM",
    prompt: STORY_PROMPT,
    markdown: `## Executive summary
Actions rose 11% and AOV rose 11% together — this is a better-aligned audience, not just more spend. Revenue grew 5% while action cost grew only 4%.

## KPI scorecard
| Metric | Value | vs prior |
|---|---|---|
| Partners | 204 | +11% |
| Actions | 61 | +11% |
| Action Cost | $4,561 | +4% |
| Revenue | $47,118 | +5% |
| AOV | $772 | +11% |

## Recommended next actions
1. Shift about 10% more media to Campaign 1 assets.
2. Double down on partners with green CR/EPC diffs.
3. Review BNPL partners with red EPC diffs.`,
    report: {
      takeawayTitle: "KEY TAKEAWAY",
      takeaway:
        "Actions rose 11% and AOV rose 11% together — this is a better-aligned audience, not just more spend.",
      takeawayBody:
        "Revenue grew 5% while action cost grew only 4%. Efficiency held while quality of conversion improved.",
      kpis: [
        { label: "Partners", value: "204", delta: "+11%" },
        { label: "Actions", value: "61", delta: "+11%" },
        { label: "Action Cost", value: "$4,561.03", delta: "+4%" },
        { label: "Revenue", value: "$47,118.12", delta: "+5%" },
        { label: "AOV", value: "$772.43", delta: "+11%" },
      ],
      exposureHeadline: "Impressions compounded after May 18 — not a one-day spike.",
      attentionHeadline: "Clicks stayed consistent with impressions, so attention is following the same audience.",
      conversionHeadline: "The same 61 actions are worth more. AOV is the conversion story.",
      conversionBody:
        "Growth concentrates in Campaign 1 assets and higher-AOV product mix. CPA remains stable while revenue per action rises.",
      recommendations: [
        "Shift about 10% more media to Campaign 1 assets.",
        "Double down on partners with green CR/EPC diffs.",
        "Review BNPL partners with red EPC diffs before next flight.",
      ],
      partners: [
        { name: "Partner 1", type: "Coupon", clicks: "12.4k", actions: 14, revenue: "$9,210", cr: "1.1%", epc: "$0.74", good: true },
        { name: "Partner 2", type: "Content", clicks: "9.8k", actions: 11, revenue: "$8,040", cr: "1.0%", epc: "$0.82", good: true },
        { name: "Partner 3", type: "Loyalty", clicks: "7.1k", actions: 8, revenue: "$5,120", cr: "0.9%", epc: "$0.61", good: false },
        { name: "Partner 4", type: "Influencer", clicks: "6.4k", actions: 7, revenue: "$6,880", cr: "1.2%", epc: "$1.07", good: true },
        { name: "Partner 5", type: "BNPL", clicks: "5.2k", actions: 4, revenue: "$2,910", cr: "0.6%", epc: "$0.44", good: false },
      ],
      impressionBars: [28, 32, 30, 35, 38, 42, 48, 55, 62, 70, 78, 86, 90, 94, 98],
      clickBars: [16, 20, 18, 23, 26, 30, 36, 43, 50, 58, 66, 74, 78, 82, 86],
    },
  },
  {
    id: "v2",
    label: "Version 2",
    timestamp: "Sep 5, 2026 8:56 AM",
    prompt: EFFICIENCY_PROMPT,
    markdown: `## Executive summary
Action cost fell 9% while revenue held flat — CPA improved and waste came out of the mid-funnel.

## KPI scorecard
| Metric | Value | vs prior |
|---|---|---|
| Partners | 198 | -3% |
| Actions | 58 | -5% |
| Action Cost | $4,142 | -9% |
| Revenue | $46,890 | -0.5% |
| CPA | $71.41 | -5% |`,
    report: {
      takeawayTitle: "EFFICIENCY TAKEAWAY",
      takeaway: "Action cost fell 9% while revenue held — CPA improved without gutting volume.",
      takeawayBody:
        "Fewer partners drove cleaner traffic. Mid-funnel coupon spend was trimmed; content and loyalty held share.",
      kpis: [
        { label: "Partners", value: "198", delta: "-3%", up: false },
        { label: "Actions", value: "58", delta: "-5%", up: false },
        { label: "Action Cost", value: "$4,142.10", delta: "-9%", up: false },
        { label: "Revenue", value: "$46,890.00", delta: "-0.5%", up: false },
        { label: "CPA", value: "$71.41", delta: "-5%", up: false },
      ],
      exposureHeadline: "Impressions flattened mid-period after coupon throttle — intentional, not a demand cliff.",
      attentionHeadline: "Clicks dipped with impressions; EPC rose on remaining partners.",
      conversionHeadline: "Slightly fewer actions, meaningfully cheaper. Efficiency is the win.",
      conversionBody:
        "Campaign 2 coupon units were cut 18%. Loyalty and content offset most of the action loss at better CPA.",
      recommendations: [
        "Keep coupon throttle; reallocate 8% budget to top EPC content partners.",
        "Pause Partner 5 BNPL until EPC clears $0.55.",
        "Set a CPA ceiling of $75 for the next flight.",
      ],
      partners: [
        { name: "Partner 2", type: "Content", clicks: "11.2k", actions: 13, revenue: "$9,400", cr: "1.2%", epc: "$0.84", good: true },
        { name: "Partner 4", type: "Influencer", clicks: "7.0k", actions: 9, revenue: "$7,210", cr: "1.3%", epc: "$1.03", good: true },
        { name: "Partner 1", type: "Coupon", clicks: "8.1k", actions: 10, revenue: "$6,100", cr: "0.9%", epc: "$0.58", good: false },
        { name: "Partner 3", type: "Loyalty", clicks: "6.8k", actions: 8, revenue: "$5,900", cr: "1.0%", epc: "$0.72", good: true },
        { name: "Partner 5", type: "BNPL", clicks: "3.9k", actions: 3, revenue: "$2,100", cr: "0.5%", epc: "$0.38", good: false },
      ],
      impressionBars: [70, 68, 72, 66, 60, 55, 52, 50, 48, 50, 52, 54, 53, 51, 50],
      clickBars: [58, 56, 60, 54, 48, 44, 40, 38, 36, 38, 40, 42, 41, 39, 38],
    },
  },
  {
    id: "v3",
    label: "Version 3",
    timestamp: "Sep 6, 2026 8:56 AM",
    prompt: MIX_PROMPT,
    markdown: `## Executive summary
Top-3 partners now drive 61% of revenue (was 48%). Mix is stronger but concentration risk is up.

## KPI scorecard
| Metric | Value | vs prior |
|---|---|---|
| Partners | 221 | +8% |
| Actions | 74 | +21% |
| Revenue | $52,440 | +11% |
| AOV | $709 | -8% |
| New partners | 17 | +6 |`,
    report: {
      takeawayTitle: "MIX TAKEAWAY",
      takeaway: "Top-3 partners now drive 61% of revenue — stronger mix, higher concentration risk.",
      takeawayBody:
        "Partner count and actions are up, but AOV dipped as coupon volume scaled. Diversify before the next peak.",
      kpis: [
        { label: "Partners", value: "221", delta: "+8%" },
        { label: "Actions", value: "74", delta: "+21%" },
        { label: "Revenue", value: "$52,440.00", delta: "+11%" },
        { label: "AOV", value: "$709.00", delta: "-8%", up: false },
        { label: "New partners", value: "17", delta: "+6" },
      ],
      exposureHeadline: "Reach broadened across 17 new partners; impressions are less peaky week to week.",
      attentionHeadline: "Click share shifted toward influencer and loyalty — coupon no longer dominates.",
      conversionHeadline: "More actions at a lower AOV. Volume is winning; basket quality needs attention.",
      conversionBody:
        "Influencer Partner 4 alone is 28% of revenue. Loyalty and content are healthy second tier; BNPL still trails.",
      recommendations: [
        "Cap any single partner at 30% of media until AOV recovers.",
        "Brief two new content partners on higher-AOV SKUs.",
        "Run a loyalty-only test on premium SKUs next week.",
      ],
      partners: [
        { name: "Partner 4", type: "Influencer", clicks: "14.2k", actions: 18, revenue: "$14,680", cr: "1.3%", epc: "$1.03", good: true },
        { name: "Partner 2", type: "Content", clicks: "10.1k", actions: 14, revenue: "$9,820", cr: "1.1%", epc: "$0.97", good: true },
        { name: "Partner 3", type: "Loyalty", clicks: "9.4k", actions: 12, revenue: "$7,540", cr: "1.0%", epc: "$0.80", good: true },
        { name: "Partner 1", type: "Coupon", clicks: "11.0k", actions: 16, revenue: "$6,900", cr: "0.8%", epc: "$0.63", good: false },
        { name: "Partner 6", type: "Content", clicks: "4.2k", actions: 6, revenue: "$4,110", cr: "1.4%", epc: "$0.98", good: true },
      ],
      impressionBars: [40, 45, 42, 50, 55, 52, 60, 58, 65, 70, 68, 75, 80, 78, 82],
      clickBars: [30, 34, 32, 38, 42, 40, 48, 46, 52, 56, 54, 60, 64, 62, 66],
    },
  },
  {
    id: "v4",
    label: "Version 4",
    timestamp: "Sep 7, 2026 8:56 AM",
    prompt: RECOVERY_PROMPT,
    markdown: `## Executive summary
Revenue rebounded 18% off last period's trough. Actions followed; AOV is still rebuilding.

## KPI scorecard
| Metric | Value | vs prior |
|---|---|---|
| Revenue | $55,210 | +18% |
| Actions | 69 | +15% |
| Action Cost | $4,890 | +7% |
| AOV | $800 | +4% |
| Return rate | 4.1% | -0.6pp |`,
    report: {
      takeawayTitle: "RECOVERY TAKEAWAY",
      takeaway: "Revenue rebounded 18% off last period's trough — the V-shape is real, not noise.",
      takeawayBody:
        "Actions and AOV both turned up. Return rate improved, which supports the quality of the bounce-back.",
      kpis: [
        { label: "Revenue", value: "$55,210.00", delta: "+18%" },
        { label: "Actions", value: "69", delta: "+15%" },
        { label: "Action Cost", value: "$4,890.00", delta: "+7%" },
        { label: "AOV", value: "$800.00", delta: "+4%" },
        { label: "Return rate", value: "4.1%", delta: "-0.6pp" },
      ],
      exposureHeadline: "Impressions show a clear V: trough mid-window, then a steady climb into period end.",
      attentionHeadline: "Clicks tracked the recovery with a 1–2 day lag — attention followed creative refresh.",
      conversionHeadline: "Recovery is conversion-led: same partners, better offer and creative.",
      conversionBody:
        "Campaign 1 relaunch plus Partner 2 content push drove the second-half lift. CPA rose slightly but ROAS improved.",
      recommendations: [
        "Lock the winning Campaign 1 creative for the next two weeks.",
        "Extend Partner 2 content budget +12% while ROAS stays above 9×.",
        "Watch return rate weekly — protect the quality signal.",
        "Do not reinstate paused low-EPC coupon until AOV clears $820.",
      ],
      partners: [
        { name: "Partner 2", type: "Content", clicks: "12.8k", actions: 16, revenue: "$12,400", cr: "1.3%", epc: "$0.97", good: true },
        { name: "Partner 1", type: "Coupon", clicks: "10.5k", actions: 13, revenue: "$9,100", cr: "1.0%", epc: "$0.87", good: true },
        { name: "Partner 4", type: "Influencer", clicks: "8.2k", actions: 11, revenue: "$10,200", cr: "1.4%", epc: "$1.24", good: true },
        { name: "Partner 3", type: "Loyalty", clicks: "6.0k", actions: 7, revenue: "$5,400", cr: "0.9%", epc: "$0.90", good: true },
        { name: "Partner 5", type: "BNPL", clicks: "4.1k", actions: 4, revenue: "$2,700", cr: "0.6%", epc: "$0.66", good: false },
      ],
      impressionBars: [88, 72, 55, 42, 35, 38, 45, 52, 60, 68, 75, 82, 88, 92, 96],
      clickBars: [70, 58, 44, 34, 28, 30, 36, 42, 50, 56, 62, 70, 76, 80, 84],
    },
  },
  {
    id: "v5",
    label: "Version 5",
    timestamp: "Sep 8, 2026 8:56 AM",
    prompt: STRUCTURED_PROMPT,
    markdown: `## Executive summary
Actions surged 11% while action cost grew only 4%, signaling improving efficiency. Structured KPI scorecard and product/ad breakdowns follow.

## KPI scorecard
| Metric | Value | vs prior |
|---|---|---|
| Impressions | 1.24M | +14% |
| Actions | 61 | +11% |
| Action Cost | $4,561 | +4% |
| Revenue | $47,118 | +5% |
| AOV | $772 | +11% |

## Insights & recommendations
1. **Scale Campaign 1** — best ROAS in By Ad table.
2. **Protect AOV mix** — top SKU payout ratio is healthy.
3. **Review high-CPA event types** before next flight.`,
    report: {
      takeawayTitle: "ANALYST BRIEFING",
      takeaway:
        "Actions surged 11% while action cost grew only 4% — improving efficiency, not just more spend.",
      takeawayBody:
        "Structured scorecard: impressions +14%, AOV +11%. Flag any ±10% swing; three metrics cleared that bar.",
      kpis: [
        { label: "Impressions", value: "1.24M", delta: "+14%" },
        { label: "Actions", value: "61", delta: "+11%" },
        { label: "Action Cost", value: "$4,561.03", delta: "+4%" },
        { label: "Revenue", value: "$47,118.12", delta: "+5%" },
        { label: "AOV", value: "$772.43", delta: "+11%" },
      ],
      exposureHeadline: "Trend analysis: impressions compounding daily after May 18 — weekly pattern holds.",
      attentionHeadline: "Clicks by day track impressions; no attention leak after the mid-period spike.",
      conversionHeadline: "Product and ad creative tables point to Campaign 1 and SKU-A as the ROAS leaders.",
      conversionBody:
        "Best ROAS: Campaign 1 display. Worst: BNPL placement ads. Event type 'Sale' is most cost-efficient CPA.",
      recommendations: [
        "Scale Campaign 1 assets — best ROAS in the By Ad table.",
        "Protect AOV mix; double down on SKU-A payout ratio.",
        "Review high-CPA event types before the next flight.",
        "Keep charts inline in the wrap; do not demote tables to an appendix.",
      ],
      partners: [
        { name: "Campaign 1", type: "Display", clicks: "15.1k", actions: 19, revenue: "$14,200", cr: "1.3%", epc: "$0.94", good: true },
        { name: "SKU-A push", type: "Content", clicks: "9.6k", actions: 12, revenue: "$10,800", cr: "1.3%", epc: "$1.12", good: true },
        { name: "Sale event", type: "Coupon", clicks: "8.8k", actions: 11, revenue: "$7,400", cr: "1.0%", epc: "$0.84", good: true },
        { name: "Brand lift", type: "Influencer", clicks: "6.2k", actions: 7, revenue: "$5,900", cr: "1.1%", epc: "$0.95", good: true },
        { name: "BNPL place", type: "BNPL", clicks: "4.0k", actions: 3, revenue: "$1,800", cr: "0.4%", epc: "$0.45", good: false },
      ],
      impressionBars: [25, 28, 30, 34, 38, 44, 50, 58, 66, 74, 82, 88, 92, 96, 100],
      clickBars: [20, 22, 24, 28, 32, 36, 42, 48, 54, 60, 68, 74, 78, 82, 86],
    },
  },
];

export const DEFAULT_VERSION_ID = "v1";
export const DEFAULT_VERSION_STORAGE_KEY = "ai-narrative-default-version";

export function getVersionById(id: string): PromptVersion {
  return PROMPT_VERSIONS.find((v) => v.id === id) ?? PROMPT_VERSIONS[0];
}

export function loadStoredDefaultVersionId(): string {
  try {
    const stored = localStorage.getItem(DEFAULT_VERSION_STORAGE_KEY);
    if (stored && PROMPT_VERSIONS.some((v) => v.id === stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_VERSION_ID;
}

export function persistDefaultVersionId(id: string) {
  try {
    localStorage.setItem(DEFAULT_VERSION_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
}
