import { useNavigate } from "react-router";
import { ReportPageShell } from "../components/ReportPageShell";

const SUB_REPORTS = [
  {
    title: "By Partner",
    description: "Track clicks, actions, and revenue across your partner network. Identify top performers and underperformers.",
    path: "/reports/performance/by-partner",
    accent: "var(--chart-1)",
  },
  {
    title: "By Day",
    description: "Daily breakdown of impressions, clicks, actions, and revenue with trend analysis over configurable date ranges.",
    path: "/reports/performance/by-day",
    accent: "var(--chart-2)",
  },
  {
    title: "By Ad",
    description: "Analyze clicks, conversions, and revenue across ad creatives, campaigns, and ad types.",
    path: "/reports/performance/by-ad",
    accent: "var(--chart-3)",
  },
];

export function PerformancePage() {
  const navigate = useNavigate();

  return (
    <ReportPageShell
      title="Performance Reports"
      subtitle="Select a report to view detailed performance metrics and analytics"
    >
      <div className="grid grid-cols-3 gap-[16px] w-full">
        {SUB_REPORTS.map((report) => (
          <button
            key={report.path}
            className="flex flex-col gap-[10px] p-[20px] bg-card text-left cursor-pointer transition-all hover:bg-muted/20 relative overflow-hidden"
            style={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
            }}
            onClick={() => navigate(report.path)}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: report.accent, borderRadius: "var(--radius) 0 0 var(--radius)" }}
            />
            <span
              className="font-['Sarabun',sans-serif] text-foreground"
              style={{ fontWeight: 600, fontSize: "var(--text-lg)", lineHeight: "1.4" }}
            >
              {report.title}
            </span>
            <span
              className="font-['Sarabun',sans-serif] text-muted-foreground"
              style={{ fontWeight: 400, fontSize: "var(--text-base)", lineHeight: "1.5" }}
            >
              {report.description}
            </span>
            <span
              className="font-['Sarabun',sans-serif] mt-[4px] flex items-center gap-[4px]"
              style={{ fontWeight: 600, fontSize: "var(--text-base)", color: "var(--accent)" }}
            >
              View Report
              <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </ReportPageShell>
  );
}
