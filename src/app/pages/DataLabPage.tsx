import { DataLabBuilder } from "../components/DataLabBuilder";

export function DataLabPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Page title */}
      <div className="px-[24px] pt-[24px] pb-[8px]">
        <div className="flex flex-col gap-[4px]">
          <h1
            className="font-['Sarabun',sans-serif] text-foreground"
            style={{ fontSize: "26px", fontWeight: 700, lineHeight: "30px" }}
          >
            Data Lab
          </h1>
          <span
            className="font-['Sarabun',sans-serif] text-muted-foreground"
            style={{ fontSize: "var(--text-base)", fontWeight: 400, lineHeight: "1.4" }}
          >
            Build custom visualizations by selecting a chart type and configuring your data
          </span>
        </div>
      </div>

      {/* Builder content */}
      <div
        className="flex-1 mx-[24px] mb-[24px] mt-[12px] overflow-hidden"
        style={{ borderRadius: "var(--radius)" }}
      >
        <DataLabBuilder />
      </div>
    </div>
  );
}
