import { useEffect, useMemo, useState, type ReactNode } from "react";
import { format, startOfDay, subDays } from "date-fns";
import { ReportPageShell } from "../components/ReportPageShell";
import { Skeleton } from "../components/ui/skeleton";
import {
  AI_NARRATIVE_PIN,
  isNavReportPinned,
  PINNED_NAV_EVENT,
  toggleNavReportPin,
} from "../pinnedNavReports";
import historyIcon from "./ai-narrative-assets/history.svg";
import copyIcon from "./ai-narrative-assets/copy.svg";
import downloadIcon from "./ai-narrative-assets/download.svg";
import refreshIcon from "./ai-narrative-assets/refresh.svg";
import pinIcon from "./ai-narrative-assets/pin.svg";

const DEFAULT_PROMPT = `Write a partner wrap report in markdown. Tell it like a story — start with the big takeaway, then walk through the numbers.

Open with a quick summary of how the partner did this period. Lead with whatever moved the most. Then show the five KPIs (impressions, actions, action cost, revenue, AOV) with percent changes vs. last period. Call out anything that swung more than 10%.

Include the impressions trend chart and clicks by day chart. Say what's interesting — any spikes, dips, or patterns worth knowing about.

Break down performance by product (name, SKU, units sold, revenue, payout) and flag the winners and losers. Do the same for event types (actions, revenue, cost, AOV, CPA) — which ones are efficient, which ones aren't. Then cover ad performance by campaign and ad type, highlight best and worst ROAS.

End with 3–5 recommendations. Each one should tie back to something specific in the data. Keep it actionable — what should we actually do next.

Tone: write like a strategist briefing a partner manager. Professional but human. Use headers and bullets so it's easy to scan. Put charts and tables inline, not at the end. Frame wins as momentum and misses as opportunities.`;

const DEFAULT_MARKDOWN = `## Executive summary
Actions rose 11% and AOV rose 11% together — this is a better-aligned audience, not just more spend. Revenue grew 5% while action cost grew only 4%.

## KPI scorecard
| Metric | Value | vs prior |
|---|---|---|
| Partners | 204 | +11% |
| Actions | 61 | +11% |
| Action Cost | $4,561 | +4% |
| Revenue | $47,118 | +5% |
| AOV | $772 | +11% |

## Exposure
Impressions compounded after May 18 — not a one-day spike.

## Attention
Clicks stayed consistent with impressions, so attention is following the same audience.

## Conversion
The same 61 actions are worth more. AOV is the conversion story.

## Recommended next actions
1. Shift about 10% more media to Campaign 1 assets.
2. Double down on partners with green CR/EPC diffs.
3. Review BNPL partners with red EPC diffs.`;

type WrapTab = "prompt" | "markdown";

const KPIS = [
  { label: "Partners", value: "204", delta: "+11%" },
  { label: "Actions", value: "61", delta: "+11%" },
  { label: "Action Cost", value: "$4,561.03", delta: "+4%" },
  { label: "Revenue", value: "$47,118.12", delta: "+5%" },
  { label: "AOV", value: "$772.43", delta: "+11%" },
];

const PARTNERS = [
  { name: "Partner 1", type: "Coupon", clicks: "12.4k", actions: 14, revenue: "$9,210", cr: "1.1%", epc: "$0.74", good: true },
  { name: "Partner 2", type: "Content", clicks: "9.8k", actions: 11, revenue: "$8,040", cr: "1.0%", epc: "$0.82", good: true },
  { name: "Partner 3", type: "Loyalty", clicks: "7.1k", actions: 8, revenue: "$5,120", cr: "0.9%", epc: "$0.61", good: false },
  { name: "Partner 4", type: "Influencer", clicks: "6.4k", actions: 7, revenue: "$6,880", cr: "1.2%", epc: "$1.07", good: true },
  { name: "Partner 5", type: "BNPL", clicks: "5.2k", actions: 4, revenue: "$2,910", cr: "0.6%", epc: "$0.44", good: false },
];

function last7Days() {
  const to = startOfDay(new Date());
  return { from: subDays(to, 6), to };
}

function formatDateRangeLabel(from: Date, to: Date) {
  if (format(from, "yyyy") === format(to, "yyyy")) {
    return `${format(from, "MMM d")}–${format(to, "MMM d, yyyy")}`;
  }
  return `${format(from, "MMM d, yyyy")}–${format(to, "MMM d, yyyy")}`;
}

function ReportSkeleton() {
  return (
    <div className="flex flex-col gap-[16px] w-full" aria-busy="true" aria-label="Generating report">
      <div
        className="bg-card p-[16px] flex flex-col gap-[10px]"
        style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
      >
        <Skeleton className="h-[12px] w-[96px]" />
        <Skeleton className="h-[22px] w-[92%]" />
        <Skeleton className="h-[16px] w-[70%]" />
      </div>

      <div className="grid grid-cols-5 gap-[12px] w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-card p-[14px] flex flex-col gap-[10px]"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <Skeleton className="h-[12px] w-[64px]" />
            <Skeleton className="h-[24px] w-[80px]" />
            <Skeleton className="h-[12px] w-[40px]" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[10px] w-full">
        <Skeleton className="h-[12px] w-[88px]" />
        <Skeleton className="h-[18px] w-[75%]" />
        <div className="grid grid-cols-2 gap-[12px]">
          <div
            className="bg-card p-[14px]"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <Skeleton className="h-[12px] w-[120px] mb-[10px]" />
            <Skeleton className="h-[120px] w-full" />
          </div>
          <div
            className="bg-card p-[14px]"
            style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <Skeleton className="h-[12px] w-[100px] mb-[10px]" />
            <Skeleton className="h-[120px] w-full" />
          </div>
        </div>
      </div>

      <div
        className="bg-card p-[14px] flex flex-col gap-[10px]"
        style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
      >
        <Skeleton className="h-[16px] w-full" />
        <Skeleton className="h-[16px] w-full" />
        <Skeleton className="h-[16px] w-[85%]" />
        <Skeleton className="h-[16px] w-full" />
        <Skeleton className="h-[16px] w-[70%]" />
      </div>

      <div
        className="bg-card p-[14px] flex flex-col gap-[10px]"
        style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
      >
        <Skeleton className="h-[12px] w-[160px]" />
        <Skeleton className="h-[16px] w-[90%]" />
        <Skeleton className="h-[16px] w-[80%]" />
        <Skeleton className="h-[16px] w-[75%]" />
      </div>
    </div>
  );
}

export function AiNarrativeReportPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tab, setTab] = useState<WrapTab>("prompt");
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [isLoading, setIsLoading] = useState(false);
  const [pinned, setPinned] = useState(() => isNavReportPinned(AI_NARRATIVE_PIN.id));
  const [dateRange, setDateRange] = useState(() => ({
    from: new Date(2024, 4, 1),
    to: new Date(2024, 4, 30),
  }));

  const impressionBars = useMemo(
    () => [28, 32, 30, 35, 38, 42, 48, 55, 62, 70, 78, 86, 90, 94, 98],
    [],
  );

  useEffect(() => {
    const sync = () => setPinned(isNavReportPinned(AI_NARRATIVE_PIN.id));
    window.addEventListener(PINNED_NAV_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PINNED_NAV_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  function handleRegenerate() {
    setDrawerOpen(false);
    setDateRange(last7Days());
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 1400);
  }

  function handlePinToggle() {
    toggleNavReportPin(AI_NARRATIVE_PIN);
  }

  function handleGenerate() {
    handleRegenerate();
  }

  function handleRestore() {
    setPrompt(DEFAULT_PROMPT);
    setMarkdown(DEFAULT_MARKDOWN);
  }

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "brand-ai-narrative-report.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  const rangeLabel = formatDateRangeLabel(dateRange.from, dateRange.to);

  return (
    <>
      <ReportPageShell
        title="Partner Dashboard"
        subtitle={`AI-generated Brand report · ${rangeLabel}`}
        actions={
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              onClick={handlePinToggle}
              disabled={isLoading}
              className="h-[40px] min-w-[65px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer inline-flex items-center justify-center gap-[8px] shrink-0 disabled:opacity-60"
              style={{
                borderRadius: "var(--radius-button, 9999px)",
                background: pinned ? "transparent" : "var(--muted)",
                border: pinned ? "1px solid transparent" : "1px solid var(--muted)",
                color: "var(--foreground)",
                fontSize: 14,
                lineHeight: "18px",
                fontWeight: 600,
              }}
            >
              <img src={pinIcon} alt="" width={16} height={16} className="block size-[16px]" />
              {pinned ? "Unpin" : "Pin to sidenav"}
            </button>
            <button
              type="button"
              onClick={handleRegenerate}
              disabled={isLoading}
              className="h-[40px] min-w-[65px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer inline-flex items-center justify-center gap-[8px] shrink-0 disabled:opacity-60 disabled:cursor-wait"
              style={{
                borderRadius: "var(--radius-button, 9999px)",
                background: "var(--muted)",
                border: "1px solid var(--muted)",
                color: "var(--foreground)",
                fontSize: 14,
                lineHeight: "18px",
                fontWeight: 600,
              }}
            >
              <img src={refreshIcon} alt="" width={16} height={16} className="block size-[16px]" />
              Regenerate
            </button>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              disabled={isLoading}
              className="h-[40px] min-w-[65px] px-[16px] font-['Sarabun',sans-serif] text-white cursor-pointer inline-flex items-center justify-center gap-[8px] disabled:opacity-60"
              style={{
                borderRadius: "var(--radius-button, 9999px)",
                background: "var(--button-primary, #1D66DE)",
                border: "none",
                fontSize: 14,
                lineHeight: "18px",
                fontWeight: 600,
              }}
            >
              Edit prompt
            </button>
          </div>
        }
      >
        {isLoading ? (
          <ReportSkeleton />
        ) : (
        <div
          className="flex flex-col gap-[16px] w-full"
          style={{ opacity: drawerOpen ? 0.55 : 1, transition: "opacity 0.2s ease" }}
        >
          <div
            className="bg-card p-[16px]"
            style={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="font-['Sarabun',sans-serif] text-[11px] tracking-[0.4px] mb-[6px]"
              style={{ color: "var(--accent, #0077DB)", fontWeight: 600 }}
            >
              KEY TAKEAWAY
            </div>
            <div
              className="font-['Sarabun',sans-serif] text-foreground"
              style={{ fontSize: "var(--text-lg)", fontWeight: 600, lineHeight: 1.4 }}
            >
              Actions rose 11% and AOV rose 11% together — this is a better-aligned audience, not just more spend.
            </div>
            <div
              className="font-['Sarabun',sans-serif] text-muted-foreground mt-[8px]"
              style={{ fontSize: "var(--text-base)", lineHeight: 1.5 }}
            >
              Revenue grew 5% while action cost grew only 4%. Efficiency held while quality of conversion improved.
              {" "}Reporting window: {rangeLabel}.
            </div>
          </div>

          <div className="grid grid-cols-5 gap-[12px] w-full">
            {KPIS.map((k) => (
              <div
                key={k.label}
                className="bg-card p-[14px]"
                style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
              >
                <div className="font-['Sarabun',sans-serif] text-muted-foreground" style={{ fontSize: 12 }}>
                  {k.label}
                </div>
                <div
                  className="font-['Sarabun',sans-serif] text-foreground mt-[6px]"
                  style={{ fontSize: 20, fontWeight: 700 }}
                >
                  {k.value}
                </div>
                <div className="mt-[4px]" style={{ fontSize: 12, fontWeight: 600, color: "var(--success, #16a34a)" }}>
                  {k.delta}
                </div>
              </div>
            ))}
          </div>

          <Section title="01 · Exposure" headline="Impressions compounded after May 18 — not a one-day spike.">
            <div className="grid grid-cols-2 gap-[12px]">
              <ChartCard label="Impressions trend">
                <div className="flex items-end gap-[4px] h-[120px]">
                  {impressionBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[3px]"
                      style={{
                        height: `${h}%`,
                        background: "linear-gradient(180deg, #60a5fa 0%, var(--accent, #2563eb) 100%)",
                        opacity: i > 8 ? 1 : 0.55,
                      }}
                    />
                  ))}
                </div>
              </ChartCard>
              <ChartCard label="Clicks by day">
                <div className="flex items-end gap-[4px] h-[120px]">
                  {impressionBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[3px]"
                      style={{
                        height: `${Math.max(18, h - 12)}%`,
                        background: "#38bdf8",
                      }}
                    />
                  ))}
                </div>
              </ChartCard>
            </div>
          </Section>

          <Section title="02 · Attention" headline="Clicks stayed consistent with impressions, so attention is following the same audience.">
            <div
              className="bg-card overflow-x-auto"
              style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
            >
              <table className="w-full border-collapse font-['Sarabun',sans-serif]" style={{ fontSize: 13 }}>
                <thead>
                  <tr className="text-muted-foreground text-left">
                    {["Partner", "Media type", "Clicks", "Actions", "Revenue", "CR", "EPC"].map((h) => (
                      <th key={h} className="px-[10px] py-[8px]" style={{ fontWeight: 500 }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PARTNERS.map((p) => (
                    <tr key={p.name} style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-[10px] py-[10px] text-foreground">{p.name}</td>
                      <td className="px-[10px] py-[10px] text-foreground">{p.type}</td>
                      <td className="px-[10px] py-[10px] text-foreground">{p.clicks}</td>
                      <td className="px-[10px] py-[10px] text-foreground">{p.actions}</td>
                      <td className="px-[10px] py-[10px] text-foreground">{p.revenue}</td>
                      <td className="px-[10px] py-[10px]">
                        <Chip good={p.good}>{p.cr}</Chip>
                      </td>
                      <td className="px-[10px] py-[10px]">
                        <Chip good={p.good}>{p.epc}</Chip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="03 · Conversion" headline="The same 61 actions are worth more. AOV is the conversion story.">
            <div
              className="bg-card p-[14px] font-['Sarabun',sans-serif] text-foreground"
              style={{
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                fontSize: "var(--text-base)",
                lineHeight: 1.5,
              }}
            >
              Growth concentrates in Campaign 1 assets and higher-AOV product mix. CPA remains stable while revenue per action rises.
            </div>
          </Section>

          <div
            className="bg-card p-[14px]"
            style={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--accent, #0077DB)",
            }}
          >
            <div
              className="font-['Sarabun',sans-serif] text-[11px] tracking-[0.4px] mb-[6px]"
              style={{ color: "var(--accent, #0077DB)", fontWeight: 600 }}
            >
              RECOMMENDED NEXT ACTIONS
            </div>
            <ol
              className="m-0 pl-[18px] font-['Sarabun',sans-serif] text-foreground"
              style={{ lineHeight: 1.7, fontSize: 14 }}
            >
              <li>Shift about 10% more media to Campaign 1 assets.</li>
              <li>Double down on partners with green CR/EPC diffs.</li>
              <li>Review BNPL partners with red EPC diffs before next flight.</li>
            </ol>
          </div>
        </div>
        )}
      </ReportPageShell>

      {drawerOpen && (
        <>
          <button
            type="button"
            aria-label="Close prompt drawer overlay"
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 z-[200] border-0 cursor-pointer"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Partner Wrap"
            className="fixed top-0 right-0 bottom-0 z-[201] flex flex-col overflow-hidden"
            style={{
              width: "min(517px, 100vw)",
              background: "var(--card)",
              borderLeft: "1px solid var(--border)",
              boxShadow: "var(--elevation-sm, -12px 0 40px rgba(0,0,0,0.18))",
              animation: "aiPromptDrawerIn 180ms ease-out",
            }}
          >
            <style>{`@keyframes aiPromptDrawerIn { from { transform: translateX(24px); opacity: 0.6; } to { transform: translateX(0); opacity: 1; } }`}</style>

            {/* Slideout Top Bar — Figma 9607:40356 / ManageCategoriesSlideout pattern */}
            <div
              className="shrink-0 flex flex-col gap-[16px] p-[32px]"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setDrawerOpen(false)}
                className="size-[40px] rounded-[var(--radius-button,9999px)] flex items-center justify-center cursor-pointer shrink-0 border-0"
                style={{ background: "var(--muted)" }}
              >
                <CloseXIcon />
              </button>
              <div className="flex flex-col gap-[8px] items-start w-full">
                <h2
                  className="font-['Sarabun',sans-serif] m-0 capitalize"
                  style={{
                    color: "var(--foreground)",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "30px",
                  }}
                >
                  Partner Wrap
                </h2>
                <p
                  className="font-['Sarabun',sans-serif] m-0"
                  style={{
                    color: "var(--muted-foreground)",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "18px",
                  }}
                >
                  This is a description of the template
                </p>
              </div>
            </div>

            {/* Slideout Content — dark prompt editor card */}
            <div className="flex-1 min-h-0 overflow-auto p-[32px]">
              <div
                className="flex flex-col gap-[8px] h-full min-h-[420px] p-[12px] overflow-hidden"
                style={{
                  background: "#18191d",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                }}
              >
                <div className="flex gap-[8px] items-start w-full">
                  <div
                    className="flex gap-[4px] items-center p-[4px] rounded-full"
                    style={{ background: "var(--muted)" }}
                  >
                    <PillTab active={tab === "prompt"} onClick={() => setTab("prompt")}>
                      Prompt
                    </PillTab>
                    <PillTab active={tab === "markdown"} onClick={() => setTab("markdown")}>
                      Markdown
                    </PillTab>
                  </div>
                  <IconCircleButton ariaLabel="Prompt history" title="History">
                    <img src={historyIcon} alt="" width={16} height={16} className="block size-[16px]" />
                  </IconCircleButton>
                </div>

                <div className="flex-1 min-h-0 flex flex-col justify-between relative w-full">
                  <textarea
                    value={tab === "prompt" ? prompt : markdown}
                    onChange={(e) =>
                      tab === "prompt" ? setPrompt(e.target.value) : setMarkdown(e.target.value)
                    }
                    className="w-full flex-1 min-h-[280px] resize-none border-0 outline-none font-['Sarabun',sans-serif]"
                    style={{
                      background: "transparent",
                      color: "#F5F5F5",
                      fontSize: 13,
                      lineHeight: "normal",
                      padding: 0,
                      boxSizing: "border-box",
                    }}
                  />
                  <div className="flex gap-[10px] items-start justify-end shrink-0 pt-[8px]">
                    <IconCircleButton
                      ariaLabel="Copy prompt"
                      title="Copy"
                      onClick={() => {
                        const text = tab === "prompt" ? prompt : markdown;
                        void navigator.clipboard?.writeText(text);
                      }}
                    >
                      <img src={copyIcon} alt="" width={16} height={16} className="block size-[16px]" />
                    </IconCircleButton>
                    <IconCircleButton ariaLabel="Prompt history" title="History">
                      <img src={historyIcon} alt="" width={16} height={16} className="block size-[16px]" />
                    </IconCircleButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer — Figma 9607:40365 */}
            <div
              className="shrink-0 flex items-center gap-[8px] px-[32px] py-[8px] overflow-x-auto"
              style={{
                background: "var(--card)",
                borderTop: "1px solid var(--border)",
                boxShadow: "0 -1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <button
                type="button"
                onClick={handleGenerate}
                className="h-[40px] min-w-[65px] px-[16px] cursor-pointer font-['Sarabun',sans-serif] border-0 shrink-0"
                style={{
                  borderRadius: "var(--radius-button, 9999px)",
                  background: "var(--button-primary, #1D66DE)",
                  color: "var(--button-primary-foreground, #fff)",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                }}
              >
                Generate
              </button>
              <button
                type="button"
                onClick={handleRestore}
                className="h-[40px] min-w-[65px] px-[16px] cursor-pointer font-['Sarabun',sans-serif] shrink-0 whitespace-nowrap"
                style={{
                  borderRadius: "var(--radius-button, 9999px)",
                  background: "var(--muted)",
                  border: "1px solid var(--muted)",
                  color: "var(--foreground)",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                }}
              >
                Restore Default Template
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="h-[40px] min-w-[65px] px-[16px] cursor-pointer font-['Sarabun',sans-serif] inline-flex items-center justify-center gap-[8px] border-0 shrink-0 whitespace-nowrap"
                style={{
                  borderRadius: "var(--radius-button, 9999px)",
                  background: "transparent",
                  color: "var(--foreground)",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                }}
              >
                <img src={downloadIcon} alt="" width={16} height={16} className="block size-[16px]" />
                Download .md
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

function CloseXIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12.0001 12" fill="none" aria-hidden="true">
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        fill="var(--foreground)"
        d="M0.298242 0.298195C0.646616 -0.0501797 1.18352 -0.0929844 1.57893 0.168094L1.60071 0.182469L1.72 0.279911L6.00005 4.55996L10.2801 0.279912L10.3994 0.182469L10.4212 0.168093C10.8166 -0.0929844 11.3535 -0.0501794 11.7019 0.298194C12.0995 0.69585 12.0995 1.34058 11.7019 1.73823L7.44009 6L11.7019 10.2618C12.0995 10.6594 12.0995 11.3042 11.7019 11.7018C11.3535 12.0502 10.8166 12.093 10.4212 11.8319L10.3994 11.8175L10.2801 11.7201L6.00005 7.44004L1.72 11.7201L1.60071 11.8175L1.57893 11.8319C1.18352 12.093 0.646616 12.0502 0.298242 11.7018C-0.0994139 11.3042 -0.0994139 10.6594 0.298242 10.2618L4.56001 6L0.298242 1.73823C-0.0994137 1.34058 -0.0994136 0.69585 0.298242 0.298195Z"
      />
    </svg>
  );
}

function IconCircleButton({
  children,
  ariaLabel,
  title,
  onClick,
}: {
  children: ReactNode;
  ariaLabel: string;
  title?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      className="size-[40px] min-w-[40px] rounded-[var(--radius-button,9999px)] flex items-center justify-center cursor-pointer shrink-0"
      style={{
        background: "var(--muted)",
        border: "1px solid var(--muted)",
      }}
    >
      {children}
    </button>
  );
}

function PillTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[32px] px-[24px] cursor-pointer font-['Sarabun',sans-serif] border-0"
      style={{
        borderRadius: "var(--radius-button, 9999px)",
        background: active ? "var(--card)" : "transparent",
        color: "var(--foreground)",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "18px",
        boxShadow: active ? "0 2px 1px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {children}
    </button>
  );
}

function Section({
  title,
  headline,
  children,
}: {
  title: string;
  headline: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div
        className="font-['Sarabun',sans-serif]"
        style={{ fontSize: 12, color: "var(--accent, #0077DB)", fontWeight: 600 }}
      >
        {title}
      </div>
      <div
        className="font-['Sarabun',sans-serif] text-foreground"
        style={{ fontSize: 16, fontWeight: 600 }}
      >
        {headline}
      </div>
      {children}
    </div>
  );
}

function ChartCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="bg-card p-[14px]"
      style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
    >
      <div className="font-['Sarabun',sans-serif] text-muted-foreground mb-[10px]" style={{ fontSize: 12 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function Chip({ good, children }: { good: boolean; children: ReactNode }) {
  return (
    <span
      className="inline-block px-[8px] py-[2px] rounded-full"
      style={{
        background: good ? "rgba(22,163,74,0.12)" : "rgba(220,38,38,0.12)",
        color: good ? "var(--success, #16a34a)" : "var(--destructive, #dc2626)",
        fontSize: 12,
      }}
    >
      {children}
    </span>
  );
}
