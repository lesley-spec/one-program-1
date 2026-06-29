/*
  EventRightRail — tabbed right panel (History · Fields).

  History is the primary tab in V2: the dataset-evolution thread that
  visualizes every column/filter/sort step as the user builds up their
  dataset. AI lives in a separate drawer, not here.
*/

import type { ExplorerAction, ExplorerState } from "../../event-explorer/state";
import { HistoryPanel } from "./HistoryPanel";
import { EventFieldsPanel } from "./EventFieldsPanel";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function EventRightRail({ state, dispatch }: Props) {
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
      <div
        className="flex items-center gap-[2px] px-[12px] pt-[12px] pb-[8px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Tab label="History" badge={state.history.length} active={tab === "history"} onClick={() => dispatch({ type: "SET_RIGHT_TAB", tab: "history" })} />
        <Tab label="Fields"  active={tab === "fields"}  onClick={() => dispatch({ type: "SET_RIGHT_TAB", tab: "fields" })} />
      </div>
      <div className="flex-1 overflow-hidden">
        {tab === "history" ? <HistoryPanel state={state} dispatch={dispatch} /> : <EventFieldsPanel state={state} dispatch={dispatch} />}
      </div>
    </div>
  );
}

function Tab({ label, badge, active, onClick }: { label: string; badge?: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer transition-colors flex items-center gap-[6px]"
      style={{
        height: 32, padding: "0 14px",
        borderRadius: "var(--radius-button)",
        background: active ? "var(--muted)" : "transparent",
        color: active ? "var(--foreground)" : "var(--muted-foreground)",
        border: "none",
        fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
      }}
    >
      {label}
      {typeof badge === "number" && badge > 0 && (
        <span style={{
          minWidth: 18, height: 18, padding: "0 6px",
          borderRadius: "var(--radius-button)",
          background: active ? "var(--foreground)" : "var(--muted)",
          color: active ? "var(--background)" : "var(--muted-foreground)",
          fontSize: 10, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {badge}
        </span>
      )}
    </button>
  );
}
