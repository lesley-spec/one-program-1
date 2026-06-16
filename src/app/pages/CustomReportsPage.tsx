import { useState } from "react";
import { ReportPageShell, ReportSearchInput } from "../components/ReportPageShell";

/* ─── Data ─── */

interface CustomReport {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  lastRun: string;
  schedule: string;
}

const CUSTOM_REPORTS: CustomReport[] = [
  { id: "1", name: "Weekly Partner Revenue Summary", description: "Aggregated revenue by partner for the trailing 7-day period", createdBy: "Christine A.", lastRun: "Feb 16, 2026", schedule: "Weekly" },
  { id: "2", name: "Monthly Conversion Funnel", description: "Impressions to clicks to actions funnel breakdown by month", createdBy: "Christine A.", lastRun: "Feb 14, 2026", schedule: "Monthly" },
  { id: "3", name: "Top 10 Partner Deep Dive", description: "Detailed KPIs for the ten highest revenue partners", createdBy: "Aalap M.", lastRun: "Feb 10, 2026", schedule: "On demand" },
  { id: "4", name: "Seasonal Campaign Performance", description: "Comparison of campaign metrics across seasonal promotions", createdBy: "Nathan K.", lastRun: "Feb 8, 2026", schedule: "Monthly" },
  { id: "5", name: "New Partner Onboarding Tracker", description: "Performance ramp for partners in their first 90 days", createdBy: "Christine A.", lastRun: "Feb 5, 2026", schedule: "Weekly" },
];

const SCHEDULE_COLORS: Record<string, { bg: string; text: string }> = {
  Weekly: { bg: "var(--positive-bg)", text: "var(--positive)" },
  Monthly: { bg: "var(--action-icon-bg)", text: "var(--accent)" },
  "On demand": { bg: "var(--muted)", text: "var(--muted-foreground)" },
};

/* ─── Component ─── */

export function CustomReportsPage() {
  const [search, setSearch] = useState("");

  const filtered = CUSTOM_REPORTS.filter(
    (r) => !search || r.name.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ReportPageShell
      title="Custom Reports"
      subtitle="Build and manage custom reports tailored to your business needs"
      actions={
        <button
          className="h-[36px] px-[20px] font-['Sarabun',sans-serif] cursor-pointer transition-colors"
          style={{
            borderRadius: "var(--radius-button)",
            fontSize: "var(--text-base)",
            fontWeight: 600,
            background: "var(--button-primary)",
            color: "var(--button-primary-foreground)",
            border: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
        >
          Build Report
        </button>
      }
    >
      {/* Search */}
      <div className="flex items-center gap-[10px]">
        <ReportSearchInput value={search} onChange={setSearch} placeholder="Search custom reports..." width="300px" />
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground ml-auto"
          style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}
        >
          {filtered.length} reports
        </span>
      </div>

      {/* Reports List */}
      <div className="flex flex-col gap-[12px] w-full">
        {filtered.map((report) => {
          const schedStyle = SCHEDULE_COLORS[report.schedule] || SCHEDULE_COLORS["On demand"];
          return (
            <div
              key={report.id}
              className="w-full bg-card flex items-center gap-[16px] px-[20px] py-[16px] cursor-pointer transition-colors hover:bg-muted/20 relative overflow-hidden"
              style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: "var(--chart-1)", borderRadius: "var(--radius) 0 0 var(--radius)" }}
              />
              <div className="flex-1 flex flex-col gap-[4px]">
                <span
                  className="font-['Sarabun',sans-serif] text-foreground"
                  style={{ fontWeight: 600, fontSize: "var(--text-base)", lineHeight: "1.4" }}
                >
                  {report.name}
                </span>
                <span
                  className="font-['Sarabun',sans-serif] text-muted-foreground"
                  style={{ fontWeight: 400, fontSize: "var(--text-sm)", lineHeight: "1.4" }}
                >
                  {report.description}
                </span>
              </div>

              <div className="flex items-center gap-[24px] shrink-0">
                <div className="flex flex-col items-center">
                  <span className="font-['Sarabun',sans-serif] text-muted-foreground" style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}>
                    Created by
                  </span>
                  <span className="font-['Sarabun',sans-serif] text-foreground" style={{ fontSize: "var(--text-base)", fontWeight: 600 }}>
                    {report.createdBy}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-['Sarabun',sans-serif] text-muted-foreground" style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}>
                    Last Run
                  </span>
                  <span className="font-['Sarabun',sans-serif] text-foreground" style={{ fontSize: "var(--text-base)", fontWeight: 600 }}>
                    {report.lastRun}
                  </span>
                </div>
                <span
                  className="inline-flex items-center px-[12px] h-[24px] font-['Sarabun',sans-serif]"
                  style={{
                    borderRadius: "var(--radius-button)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                    background: schedStyle.bg,
                    color: schedStyle.text,
                  }}
                >
                  {report.schedule}
                </span>
              </div>

              <button
                className="h-[32px] px-[14px] font-['Sarabun',sans-serif] cursor-pointer transition-colors shrink-0"
                style={{
                  borderRadius: "var(--radius)",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  background: "transparent",
                  color: "var(--accent)",
                  border: "1px solid var(--border)",
                }}
              >
                Run
              </button>
            </div>
          );
        })}
      </div>
    </ReportPageShell>
  );
}