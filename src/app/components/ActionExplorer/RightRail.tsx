/*
  RightRail — tabbed sidebar (AI ◇ Fields).

  Width matches Data Lab's right config panel feel (320px). Uses the
  global Tabs styling via our own minimal segmented control so it
  feels integrated with the branded explorer rather than the generic
  ui/tabs treatment.
*/

import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";
import type { Anomaly } from "../../action-explorer/mock-data";
import { AIAssistantPanel } from "./AIAssistantPanel";
import { FieldsPanel } from "./FieldsPanel";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  anomalies: Anomaly[];
}

export function RightRail({ state, dispatch, anomalies }: Props) {
  const tab = state.rightTab;
  return (
    <div
      className="flex flex-col"
      style={{
        width: 340,
        flexShrink: 0,
        borderLeft: "1px solid var(--border)",
        background: "var(--card)",
      }}
    >
      {/* Tab strip */}
      <div
        className="flex items-center gap-[2px] px-[12px] pt-[12px] pb-[8px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <TabButton
          label="AI Assistant"
          active={tab === "ai"}
          ai
          onClick={() => dispatch({ type: "SET_RIGHT_TAB", tab: "ai" })}
        />
        <TabButton
          label="Fields"
          active={tab === "fields"}
          onClick={() => dispatch({ type: "SET_RIGHT_TAB", tab: "fields" })}
        />
      </div>
      <div className="flex-1 overflow-hidden">
        {tab === "ai" ? (
          <AIAssistantPanel state={state} dispatch={dispatch} anomalies={anomalies} />
        ) : (
          <FieldsPanel state={state} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}

function TabButton({
  label, active, ai, onClick,
}: { label: string; active: boolean; ai?: boolean; onClick: () => void }) {
  const activeBg = ai ? "var(--ai-background)" : "var(--muted)";
  const activeFg = ai ? "var(--ai-foreground)" : "var(--foreground)";
  return (
    <button
      onClick={onClick}
      className="cursor-pointer transition-colors flex items-center gap-[6px]"
      style={{
        height: 32,
        padding: "0 14px",
        borderRadius: "var(--radius-button)",
        background: active ? activeBg : "transparent",
        color: active ? activeFg : "var(--muted-foreground)",
        border: "none",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 600,
      }}
    >
      {ai && (
        <span
          style={{
            width: 16, height: 16,
            borderRadius: "var(--radius-button)",
            background: active ? "var(--ai-accent)" : "transparent",
            color: active ? "white" : "var(--muted-foreground)",
            fontSize: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: active ? "none" : "1px solid var(--border)",
          }}
        >
          ✦
        </span>
      )}
      {label}
    </button>
  );
}
