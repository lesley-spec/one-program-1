import { useState } from "react";
import { ActionExplorer } from "../components/ActionExplorer/ActionExplorer";
import { EventExplorer } from "../components/EventExplorer/EventExplorer";

const FONT = "'Sarabun', sans-serif";

type Version = "v1" | "v2";

export function ActionExplorerPage() {
  const [version, setVersion] = useState<Version>("v1");

  return (
    <div className="flex flex-col h-full">
      {/* Version tabs at the top of the page */}
      <div
        className="flex items-center gap-[8px] px-[24px] pt-[16px]"
        style={{ flexShrink: 0 }}
      >
        <VersionTab
          label="V1"
          sublabel="Action Explorer"
          active={version === "v1"}
          onClick={() => setVersion("v1")}
        />
        <VersionTab
          label="V2"
          sublabel="Event Explorer"
          active={version === "v2"}
          onClick={() => setVersion("v2")}
        />
      </div>

      {/* Active version */}
      <div className="flex-1 min-h-0">
        {version === "v1" ? <ActionExplorer /> : <EventExplorer />}
      </div>
    </div>
  );
}

function VersionTab({
  label, sublabel, active, onClick,
}: { label: string; sublabel: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[8px] cursor-pointer transition-colors"
      style={{
        height: 34,
        padding: "0 16px 0 12px",
        borderRadius: "var(--radius-button)",
        background: active ? "var(--foreground)" : "var(--card)",
        color: active ? "var(--background)" : "var(--foreground)",
        border: active ? "1px solid var(--foreground)" : "1px solid var(--border)",
        fontFamily: FONT,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.5px",
          padding: "2px 8px",
          borderRadius: "var(--radius-button)",
          background: active ? "var(--background)" : "var(--muted)",
          color: active ? "var(--foreground)" : "var(--muted-foreground)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: 600,
        }}
      >
        {sublabel}
      </span>
    </button>
  );
}
