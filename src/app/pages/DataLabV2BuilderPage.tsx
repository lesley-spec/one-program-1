import { useSearchParams } from "react-router";
import { DataLabWorkbook } from "../components/DataLabWorkbook";

export function DataLabV2BuilderPage() {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template") || undefined;

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <DataLabWorkbook templateId={templateId} />
    </div>
  );
}
