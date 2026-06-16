import { useSearchParams } from "react-router";
import { ReportCanvas } from "../components/ReportCanvas";

export function ReportCanvasPage() {
  const [searchParams] = useSearchParams();
  const chartType = searchParams.get("type") || "area";

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <ReportCanvas initialChartType={chartType} />
    </div>
  );
}
