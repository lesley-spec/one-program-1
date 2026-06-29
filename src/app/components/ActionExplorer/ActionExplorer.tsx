/*
  Action Explorer — top-level shell + state container.

  Hosts the branded header, AI prompt bar, filter chips row, freeform
  table, and right rail (AI companion / Fields tabs).

  Visual styling matches Data Lab — same page header pattern, same
  theme tokens — with one extra scoped CSS var --explorer-accent
  driven by the currently selected account.
*/

import { useMemo, useReducer, useState } from "react";
import { reducer, blankState, type ExplorerAction, type ExplorerState } from "../../action-explorer/state";
import { aggregateRows, breakdownRow, detectAnomalies, type TableRow } from "../../action-explorer/mock-data";
import { DEFAULT_ACCOUNT_ID, getAccount } from "../../action-explorer/accounts";
import { BrandedHeader } from "./BrandedHeader";
import { FilterChipsRow } from "./FilterChipsRow";
import { FreeformTable } from "./FreeformTable";
import { RightRail } from "./RightRail";
import { ConditionalFormatDialog } from "./ConditionalFormatDialog";
import { type ColumnRef, refKey } from "../../action-explorer/schema";

const FONT = "'Sarabun', sans-serif";

export function ActionExplorer() {
  const [state, dispatch] = useReducer(reducer, undefined, () => blankState(DEFAULT_ACCOUNT_ID));
  const account = getAccount(state.accountId);

  const [cfDialogRef, setCfDialogRef] = useState<ColumnRef | null>(null);

  /* Top-level rows for the freeform table. */
  const baseRows = useMemo<TableRow[]>(() => {
    return aggregateRows({
      dimensions: state.rowDimensions,
      measures: state.measures,
      primaryListing: state.primaryListing,
      dateRange: state.dateRange,
      valueFilters: state.valueFilters,
    });
  }, [
    state.rowDimensions,
    state.measures,
    state.primaryListing,
    state.dateRange,
    state.valueFilters,
  ]);

  /* Per-row sub-rows when the user has dropped a breakdown on that row. */
  const subRowsByKey = useMemo<Record<string, TableRow[]>>(() => {
    const out: Record<string, TableRow[]> = {};
    for (const row of baseRows) {
      const key = rowKeyFor(row);
      const breakdownDim = state.rowBreakdowns[key];
      if (breakdownDim && state.expandedRows[key]) {
        out[key] = breakdownRow(row, state.rowDimensions, breakdownDim, {
          dimensions: state.rowDimensions,
          measures: state.measures,
          primaryListing: state.primaryListing,
          dateRange: state.dateRange,
          valueFilters: state.valueFilters,
        });
      }
    }
    return out;
  }, [
    baseRows,
    state.rowBreakdowns,
    state.expandedRows,
    state.rowDimensions,
    state.measures,
    state.primaryListing,
    state.dateRange,
    state.valueFilters,
  ]);

  const anomalies = useMemo(
    () => detectAnomalies(baseRows, state.measures),
    [baseRows, state.measures]
  );

  const sortedRows = useMemo(() => sortRows(baseRows, state.sort), [baseRows, state.sort]);

  return (
    <div
      className="flex flex-col h-full"
      style={{ ["--explorer-accent" as any]: account.accent }}
    >
      {/* Page title — same pattern as DataLabPage */}
      <div className="px-[24px] pt-[24px] pb-[8px]">
        <div className="flex items-center gap-[10px]">
          <h1
            className="font-['Sarabun',sans-serif] text-foreground"
            style={{ fontSize: 26, fontWeight: 700, lineHeight: "30px" }}
          >
            Action Explorer
          </h1>
          <span
            className="inline-flex items-center h-[22px] px-[8px]"
            style={{
              borderRadius: "var(--radius-button)",
              background: "var(--ai-background)",
              color: "var(--ai-foreground)",
              fontFamily: FONT,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            AI-powered
          </span>
        </div>
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground"
          style={{ fontSize: "var(--text-base)", fontWeight: 400, lineHeight: 1.4 }}
        >
          Explore raw action and click listings — no pre-aggregated metrics, no chart picker. Ask in plain English or build freeform.
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
            <BrandedHeader state={state} dispatch={dispatch} />
            <FilterChipsRow state={state} dispatch={dispatch} />
            <FreeformTable
              state={state}
              dispatch={dispatch}
              rows={sortedRows}
              subRowsByKey={subRowsByKey}
              onOpenConditionalFormat={(ref) => setCfDialogRef(ref)}
            />
          </div>
          {/* Right rail */}
          <RightRail
            state={state}
            dispatch={dispatch}
            anomalies={anomalies}
          />
        </div>
      </div>

      {/* Conditional Formatting dialog */}
      {cfDialogRef && (
        <ConditionalFormatDialog
          state={state}
          dispatch={dispatch}
          initialRef={cfDialogRef}
          onClose={() => setCfDialogRef(null)}
        />
      )}
    </div>
  );
}

/* ─── Helpers ─── */

export function rowKeyFor(row: TableRow): string {
  return Object.entries(row.groupValues)
    .map(([k, v]) => `${k}=${v}`)
    .join("|");
}

function sortRows(rows: TableRow[], sort: ExplorerState["sort"]): TableRow[] {
  if (!sort) return rows;
  const key = refKey(sort.ref);
  return [...rows].sort((a, b) => {
    const av = a.measures[key];
    const bv = b.measures[key];
    if (av == null && bv == null) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;
    return sort.direction === "asc" ? av - bv : bv - av;
  });
}

export type Dispatch = (a: ExplorerAction) => void;
