/*
  Event Explorer (V2) — top-level shell.

  Per the meeting notes, this is positioned as a pivot-table-builder for
  raw events across 5 data sources, with a visible history of how the
  dataset was built. AI is a secondary convenience surface, opened on
  demand from the toolbar.
*/

import { useMemo, useReducer, useState } from "react";
import { reducer, blankState, type ExplorerAction, type ExplorerState } from "../../event-explorer/state";
import { aggregateRows, type TableRow } from "../../event-explorer/mock-data";
import { DEFAULT_ACCOUNT_ID, getAccount } from "../../action-explorer/accounts";
import { refKey, type ColumnRef } from "../../event-explorer/schema";
import { EventToolbar } from "./EventToolbar";
import { EventFilterRow } from "./EventFilterRow";
import { EventTable } from "./EventTable";
import { EventRightRail } from "./EventRightRail";
import { AIAskDrawer } from "./AIAskDrawer";
import { EventCondFormatDialog } from "./EventCondFormatDialog";

const FONT = "'Sarabun', sans-serif";

export function EventExplorer() {
  const [state, dispatch] = useReducer(reducer, undefined, () => blankState(DEFAULT_ACCOUNT_ID));
  const account = getAccount(state.accountId);
  const [cfDialogRef, setCfDialogRef] = useState<ColumnRef | null>(null);

  const baseRows = useMemo<TableRow[]>(
    () =>
      aggregateRows({
        dimensions: state.rowDimensions,
        measures: state.measures,
        primarySource: state.primarySource,
        dateRange: state.dateRange,
        valueFilters: state.valueFilters,
      }),
    [
      state.rowDimensions,
      state.measures,
      state.primarySource,
      state.dateRange,
      state.valueFilters,
    ]
  );

  const sortedRows = useMemo(() => {
    if (!state.sort) return baseRows;
    const k = refKey(state.sort.ref);
    return [...baseRows].sort((a, b) => {
      const av = a.measures[k]; const bv = b.measures[k];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      return state.sort!.direction === "asc" ? av - bv : bv - av;
    });
  }, [baseRows, state.sort]);

  return (
    <div
      className="flex flex-col h-full"
      style={{ ["--explorer-accent" as any]: account.accent }}
    >
      {/* Page title */}
      <div className="px-[24px] pt-[12px] pb-[8px]">
        <div className="flex items-center gap-[10px]">
          <h1
            className="font-['Sarabun',sans-serif] text-foreground"
            style={{ fontSize: 26, fontWeight: 700, lineHeight: "30px" }}
          >
            Event Explorer
          </h1>
          <span
            className="inline-flex items-center h-[22px] px-[8px]"
            style={{
              borderRadius: "var(--radius-button)",
              background: "var(--muted)",
              color: "var(--muted-foreground)",
              fontFamily: FONT,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Prototype · V2
          </span>
        </div>
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground"
          style={{ fontSize: "var(--text-base)", fontWeight: 400, lineHeight: 1.4 }}
        >
          Build a dataset from raw events across performance, creators, benchmarks, Spot, and Product Boost — anchored on advertiser and campaign IDs. AI optional.
        </span>
      </div>

      {/* Body */}
      <div
        className="flex-1 mx-[24px] mb-[24px] mt-[12px] overflow-hidden"
        style={{ borderRadius: "var(--radius)" }}
      >
        <div
          className="flex h-full"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
          }}
        >
          {/* Main column */}
          <div className="flex-1 flex flex-col min-w-0">
            <EventToolbar state={state} dispatch={dispatch} />
            <EventFilterRow state={state} dispatch={dispatch} />
            <EventTable
              state={state}
              dispatch={dispatch}
              rows={sortedRows}
              onOpenConditionalFormat={(ref) => setCfDialogRef(ref)}
            />
          </div>

          {/* Right rail — History / Fields */}
          <EventRightRail state={state} dispatch={dispatch} />
        </div>
      </div>

      {/* AI drawer (overlay, opens from toolbar) */}
      <AIAskDrawer state={state} dispatch={dispatch} />

      {/* Conditional Formatting dialog */}
      {cfDialogRef && (
        <EventCondFormatDialog
          state={state}
          dispatch={dispatch}
          initialRef={cfDialogRef}
          onClose={() => setCfDialogRef(null)}
        />
      )}
    </div>
  );
}
