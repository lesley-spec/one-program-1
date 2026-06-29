/*
  FreeformTable — central canvas of Action Explorer.

  Columns = row dimensions + measures.
  Rows = aggregated groups; can expand into child rows when a row-level
  breakdown is set. Conditional formatting applies cell backgrounds.

  Mirrors the Figma Freefrom Table:
   - sortable measure headers
   - row-level breakdown chevrons
   - totals row at the bottom
   - column breakdown nested headers
   - color-scale cells
*/

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";
import {
  type ColumnRef, refKey, fieldOf, isMeasureType,
  AGGREGATION_LABELS, type Aggregation, type ListingId,
} from "../../action-explorer/schema";
import { type TableRow, distinctValues } from "../../action-explorer/mock-data";
import { rowKeyFor } from "./ActionExplorer";

const DRAG_MIME = "application/x-action-explorer-field";

const FONT = "'Sarabun', sans-serif";

const BREAKDOWN_OPTIONS: { ref: ColumnRef; label: string }[] = [
  { ref: { listingId: "action_listing", fieldId: "status"        }, label: "Status"      },
  { ref: { listingId: "action_listing", fieldId: "event_type"    }, label: "Event Type"  },
  { ref: { listingId: "action_listing", fieldId: "promo_code"    }, label: "Promo Code"  },
  { ref: { listingId: "action_listing", fieldId: "partner"       }, label: "Partner"     },
  { ref: { listingId: "action_listing", fieldId: "referring_url" }, label: "Referring URL" },
  { ref: { listingId: "action_listing", fieldId: "sub_id1"       }, label: "SubId1"      },
];

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  rows: TableRow[];
  subRowsByKey: Record<string, TableRow[]>;
  onOpenConditionalFormat: (ref: ColumnRef) => void;
}

const PAGE_SIZE_OPTIONS = [25, 50, 100, 250];
const DEFAULT_PAGE_SIZE = 50;

export function FreeformTable({ state, dispatch, rows, subRowsByKey, onOpenConditionalFormat }: Props) {
  const dims = state.rowDimensions;
  const measures = state.measures;
  const colBreakdown = state.columnBreakdown;
  const [isDropTarget, setIsDropTarget] = useState(false);
  const [reorderIdx, setReorderIdx] = useState<{ kind: "dim" | "measure"; index: number } | null>(null);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [page, setPage] = useState(0);

  /* Reset to page 0 whenever the underlying row set materially changes —
     filters, dimensions, measures, sort, listing. We watch a signature
     string rather than the rows array to avoid resetting on chart-only
     re-renders. */
  const pagingSignature =
    state.primaryListing +
    "|" +
    dims.map((d) => refKey(d)).join(",") +
    "|" +
    measures.map((m) => refKey(m.ref)).join(",") +
    "|" +
    state.valueFilters.map((f) => `${refKey(f.ref)}=${f.values.join("/")}`).join(",") +
    "|" +
    (state.sort ? `${refKey(state.sort.ref)}:${state.sort.direction}` : "") +
    "|" +
    pageSize;
  const prevSig = React.useRef(pagingSignature);
  if (prevSig.current !== pagingSignature) {
    prevSig.current = pagingSignature;
    if (page !== 0) setPage(0);
  }

  const totalRows = rows.length;
  const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));
  const safePage = Math.min(page, pageCount - 1);
  const pageStart = safePage * pageSize;
  const pageEnd = Math.min(pageStart + pageSize, totalRows);
  const pageRows = rows.slice(pageStart, pageEnd);

  /* For column breakdown, we synthesize distinct sub-column values from the data. */
  const colBreakdownValues = colBreakdown
    ? distinctValues(colBreakdown, 6)
    : [];

  /* Totals (measure-only). */
  const totals: Record<string, number> = {};
  if (state.showTotals) {
    for (const m of measures) {
      const key = refKey(m.ref);
      totals[key] = rows.reduce((s, r) => s + (r.measures[key] || 0), 0);
    }
  }

  /* Sum used to derive percentages per column. */
  const colSums: Record<string, number> = {};
  for (const m of measures) {
    const key = refKey(m.ref);
    if (m.showAsPercent) {
      colSums[key] = rows.reduce((s, r) => s + (r.measures[key] || 0), 0);
    }
  }

  /* Per-measure min/max of qualifying values across visible rows.
     Used to interpolate the conditional-format color scale. */
  const cfRangeByKey: Record<string, { min: number; max: number }> = {};
  for (const cf of state.conditionalFormats) {
    const key = refKey(cf.ref);
    const vals = rows
      .map((r) => r.measures[key])
      .filter((v): v is number => typeof v === "number" && qualifies(v, cf));
    if (vals.length === 0) continue;
    cfRangeByKey[key] = { min: Math.min(...vals), max: Math.max(...vals) };
  }

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-[20px] py-[10px]"
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--card)",
          flexShrink: 0,
        }}
      >
        <div className="flex items-center gap-[12px]">
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: 700,
              color: "var(--muted-foreground)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Freeform Table
          </span>
          <ListingToggle
            value={state.primaryListing}
            onChange={(l) => dispatch({ type: "SET_PRIMARY_LISTING", listingId: l })}
          />
        </div>
        <div className="flex items-center gap-[6px]">
          <ToolbarToggle
            label="Totals"
            active={state.showTotals}
            onClick={() => dispatch({ type: "TOGGLE_TOTALS" })}
          />
          <ColumnBreakdownPicker state={state} dispatch={dispatch} />
        </div>
      </div>

      {/* Table */}
      <div
        className="flex-1 overflow-auto relative"
        style={{
          background: "var(--card)",
          outline: isDropTarget ? "2px dashed var(--ai-accent)" : "none",
          outlineOffset: -4,
        }}
        onDragOver={(e) => {
          if (e.dataTransfer.types.includes(DRAG_MIME)) {
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
            if (!isDropTarget) setIsDropTarget(true);
          }
        }}
        onDragLeave={(e) => {
          // Only clear when leaving the container entirely
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setIsDropTarget(false);
          }
        }}
        onDrop={(e) => {
          setIsDropTarget(false);
          const raw = e.dataTransfer.getData(DRAG_MIME);
          if (!raw) return;
          try {
            const ref = JSON.parse(raw) as ColumnRef;
            dispatch({ type: "ADD_COLUMN", ref });
          } catch { /* noop */ }
        }}
      >
        {isDropTarget && (
          <div
            className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
            style={{ background: "color-mix(in srgb, var(--ai-background) 80%, transparent)" }}
          >
            <div
              className="flex items-center gap-[8px] px-[14px] py-[8px]"
              style={{
                background: "var(--card)",
                border: "2px dashed var(--ai-accent)",
                borderRadius: "var(--radius-button)",
                fontFamily: FONT,
                fontSize: "var(--text-base)",
                fontWeight: 600,
                color: "var(--ai-foreground)",
                boxShadow: "var(--elevation-md)",
              }}
            >
              <span style={{ fontSize: 16 }}>↓</span>
              Drop to add column
            </div>
          </div>
        )}
        {dims.length === 0 && measures.length === 0 ? (
          <EmptyState />
        ) : (
          <table className="w-full border-collapse" style={{ fontSize: "var(--text-sm)", fontFamily: FONT }}>
            <thead style={{ position: "sticky", top: 0, zIndex: 1, background: "var(--card)" }}>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {/* Dimension headers */}
                {dims.map((d, i) => (
                  <DimensionHeader
                    key={refKey(d)}
                    dim={d}
                    index={i}
                    reorderIdx={reorderIdx}
                    setReorderIdx={setReorderIdx}
                    dispatch={dispatch}
                  />
                ))}
                {/* Measure headers */}
                {measures.map((m, mi) => {
                  if (colBreakdown && colBreakdownValues.length > 0) {
                    return colBreakdownValues.map((cbv, ci) => (
                      <MeasureHeader
                        key={`${refKey(m.ref)}::${cbv}`}
                        meas={m}
                        measureIndex={mi}
                        reorderIdx={reorderIdx}
                        setReorderIdx={setReorderIdx}
                        showDragHandle={ci === 0}
                        sort={state.sort}
                        suffixLabel={cbv}
                        dispatch={dispatch}
                        onOpenCf={() => onOpenConditionalFormat(m.ref)}
                      />
                    ));
                  }
                  return (
                    <MeasureHeader
                      key={refKey(m.ref)}
                      meas={m}
                      measureIndex={mi}
                      reorderIdx={reorderIdx}
                      setReorderIdx={setReorderIdx}
                      sort={state.sort}
                      dispatch={dispatch}
                      onOpenCf={() => onOpenConditionalFormat(m.ref)}
                    />
                  );
                })}
                {/* Spacer column for actions */}
                <th style={{ width: 1 }}></th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((row) => (
                <RowGroup
                  key={rowKeyFor(row)}
                  row={row}
                  state={state}
                  dispatch={dispatch}
                  colBreakdownValues={colBreakdownValues}
                  colSums={colSums}
                  cfRangeByKey={cfRangeByKey}
                  subRows={subRowsByKey[rowKeyFor(row)]}
                />
              ))}
              {state.showTotals && totalRows > 0 && (
                <TotalsRow state={state} totals={totals} colBreakdownValues={colBreakdownValues} />
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination footer */}
      {totalRows > 0 && (
        <PaginationFooter
          page={safePage}
          pageCount={pageCount}
          pageSize={pageSize}
          pageStart={pageStart}
          pageEnd={pageEnd}
          totalRows={totalRows}
          showTotals={state.showTotals}
          onPageSizeChange={(n) => { setPageSize(n); setPage(0); }}
          onPageChange={(p) => setPage(p)}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Pagination footer
   ───────────────────────────────────────────── */

function PaginationFooter({
  page, pageCount, pageSize, pageStart, pageEnd, totalRows, showTotals,
  onPageSizeChange, onPageChange,
}: {
  page: number;
  pageCount: number;
  pageSize: number;
  pageStart: number;
  pageEnd: number;
  totalRows: number;
  showTotals: boolean;
  onPageSizeChange: (n: number) => void;
  onPageChange: (p: number) => void;
}) {
  const atFirst = page <= 0;
  const atLast = page >= pageCount - 1;
  return (
    <div
      className="flex items-center justify-between px-[20px] py-[10px] gap-[12px]"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--card)",
        flexShrink: 0,
      }}
    >
      {/* Left: range summary */}
      <div
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          color: "var(--muted-foreground)",
        }}
      >
        Showing <span style={{ color: "var(--foreground)", fontWeight: 600 }}>
          {pageStart + 1}–{pageEnd}
        </span>{" "}
        of <span style={{ color: "var(--foreground)", fontWeight: 600 }}>
          {totalRows.toLocaleString()}
        </span>{" "}
        {totalRows === 1 ? "row" : "rows"}
        {showTotals && (
          <span style={{ marginLeft: 8, color: "var(--muted-foreground)" }}>
            · Totals reflect all {totalRows.toLocaleString()} rows
          </span>
        )}
      </div>

      {/* Right: page size + pager */}
      <div className="flex items-center gap-[16px]">
        {/* Page size */}
        <div className="flex items-center gap-[6px]">
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              color: "var(--muted-foreground)",
            }}
          >
            Rows per page
          </span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}
            className="outline-none cursor-pointer"
            style={{
              height: 28,
              padding: "0 8px",
              borderRadius: "var(--radius-button)",
              border: "1px solid var(--border)",
              background: "var(--card)",
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              color: "var(--foreground)",
              fontWeight: 600,
            }}
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Pager */}
        <div className="flex items-center gap-[4px]">
          <PagerButton
            label="‹"
            disabled={atFirst}
            onClick={() => onPageChange(Math.max(0, page - 1))}
            title="Previous page"
          />
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              color: "var(--foreground)",
              fontWeight: 600,
              padding: "0 8px",
            }}
          >
            Page {page + 1} of {pageCount}
          </span>
          <PagerButton
            label="›"
            disabled={atLast}
            onClick={() => onPageChange(Math.min(pageCount - 1, page + 1))}
            title="Next page"
          />
        </div>
      </div>
    </div>
  );
}

function PagerButton({
  label, disabled, onClick, title,
}: { label: string; disabled: boolean; onClick: () => void; title: string }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={title}
      className="cursor-pointer transition-colors disabled:cursor-not-allowed"
      style={{
        width: 28, height: 28,
        borderRadius: "var(--radius-button)",
        border: "1px solid var(--border)",
        background: "var(--card)",
        fontFamily: FONT,
        fontSize: 14,
        fontWeight: 700,
        color: disabled ? "var(--muted-foreground)" : "var(--foreground)",
        opacity: disabled ? 0.5 : 1,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = "var(--muted)"; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = "var(--card)"; }}
    >
      {label}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Subcomponents
   ───────────────────────────────────────────── */

function ListingToggle({ value, onChange }: { value: ListingId; onChange: (l: ListingId) => void }) {
  return (
    <div
      className="flex items-center"
      style={{
        height: 28,
        borderRadius: "var(--radius-button)",
        background: "var(--muted)",
        padding: 2,
      }}
    >
      {(["action_listing", "click_listing"] as ListingId[]).map((l) => {
        const active = value === l;
        return (
          <button
            key={l}
            onClick={() => onChange(l)}
            className="cursor-pointer transition-colors"
            style={{
              height: 24,
              padding: "0 12px",
              borderRadius: "var(--radius-button)",
              background: active ? "var(--card)" : "transparent",
              color: active ? "var(--foreground)" : "var(--muted-foreground)",
              border: "none",
              fontFamily: FONT,
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            {l === "action_listing" ? "Actions" : "Clicks"}
          </button>
        );
      })}
    </div>
  );
}

function ToolbarToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer transition-colors"
      style={{
        height: 28,
        padding: "0 12px",
        borderRadius: "var(--radius-button)",
        background: active ? "var(--explorer-accent)" : "var(--card)",
        color: active ? "white" : "var(--foreground)",
        border: active ? "1px solid transparent" : "1px solid var(--border)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 600,
      }}
    >
      {label}
    </button>
  );
}

function ColumnBreakdownPicker({ state, dispatch }: Props) {
  const current = state.columnBreakdown;
  const label = current ? fieldOf(current)?.label || "Breakdown" : "Column breakdown";
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-[6px] cursor-pointer transition-colors"
          style={{
            height: 28,
            padding: "0 12px",
            borderRadius: "var(--radius-button)",
            background: current ? "var(--muted)" : "var(--card)",
            border: "1px solid var(--border)",
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          {label}
          {current && (
            <span
              role="button"
              onClick={(e) => { e.stopPropagation(); dispatch({ type: "SET_COLUMN_BREAKDOWN", ref: null }); }}
              style={{ color: "var(--muted-foreground)" }}
            >
              ×
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={6} className="p-[6px]" style={{ width: 220, background: "var(--card)" }}>
        {BREAKDOWN_OPTIONS.map((b) => (
          <button
            key={refKey(b.ref)}
            onClick={() => dispatch({ type: "SET_COLUMN_BREAKDOWN", ref: b.ref })}
            className="w-full text-left px-[10px] h-[32px] cursor-pointer transition-colors"
            style={{
              borderRadius: "var(--radius-sm)",
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {b.label}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}

type ReorderIdx = { kind: "dim" | "measure"; index: number } | null;

function DimensionHeader({
  dim, index, reorderIdx, setReorderIdx, dispatch,
}: {
  dim: ColumnRef;
  index: number;
  reorderIdx: ReorderIdx;
  setReorderIdx: (i: ReorderIdx) => void;
  dispatch: (a: ExplorerAction) => void;
}) {
  const f = fieldOf(dim);
  const isDropAt = reorderIdx?.kind === "dim" && reorderIdx.index === index;
  return (
    <th
      className="text-left px-[12px] py-[10px] sticky-col"
      style={{
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        color: "var(--foreground)",
        whiteSpace: "nowrap",
        borderLeft: isDropAt ? "2px solid var(--ai-accent)" : "2px solid transparent",
      }}
      onDragOver={(e) => {
        const types = e.dataTransfer.types;
        if (types.includes(DRAG_MIME) || types.includes("application/x-action-explorer-reorder")) {
          e.preventDefault();
          e.dataTransfer.dropEffect = types.includes(DRAG_MIME) ? "copy" : "move";
          if (!isDropAt) setReorderIdx({ kind: "dim", index });
        }
      }}
      onDragLeave={() => { if (isDropAt) setReorderIdx(null); }}
      onDrop={(e) => {
        const moveRaw = e.dataTransfer.getData("application/x-action-explorer-reorder");
        const fromField = e.dataTransfer.getData(DRAG_MIME);
        setReorderIdx(null);
        if (moveRaw) {
          try {
            const ref = JSON.parse(moveRaw) as ColumnRef;
            dispatch({ type: "MOVE_COLUMN", ref, toIndex: index });
          } catch { /* noop */ }
        } else if (fromField) {
          try {
            const ref = JSON.parse(fromField) as ColumnRef;
            dispatch({ type: "ADD_COLUMN", ref });
          } catch { /* noop */ }
        }
      }}
    >
      <div
        className="flex items-center gap-[6px] group"
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("application/x-action-explorer-reorder", JSON.stringify(dim));
          e.dataTransfer.effectAllowed = "move";
        }}
        style={{ cursor: "grab" }}
      >
        <span style={{ color: "var(--muted-foreground)", fontSize: 12 }} aria-hidden>⋮⋮</span>
        {f?.label || dim.fieldId}
        <button
          onClick={() => dispatch({ type: "REMOVE_COLUMN", ref: dim })}
          className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          style={{
            width: 16, height: 16,
            borderRadius: "var(--radius-button)",
            border: "none",
            background: "transparent",
            color: "var(--muted-foreground)",
            fontSize: 14,
            lineHeight: 1,
          }}
          title="Remove"
        >
          ×
        </button>
      </div>
    </th>
  );
}

function MeasureHeader({
  meas, measureIndex, reorderIdx, setReorderIdx, showDragHandle = true,
  sort, suffixLabel, dispatch, onOpenCf,
}: {
  meas: { ref: ColumnRef; agg: Aggregation; showAsPercent: boolean };
  measureIndex: number;
  reorderIdx: ReorderIdx;
  setReorderIdx: (i: ReorderIdx) => void;
  showDragHandle?: boolean;
  sort: ExplorerState["sort"];
  suffixLabel?: string;
  dispatch: (a: ExplorerAction) => void;
  onOpenCf: () => void;
}) {
  const f = fieldOf(meas.ref);
  const sortedHere = sort && refKey(sort.ref) === refKey(meas.ref);
  const arrow = sortedHere ? (sort!.direction === "asc" ? "↑" : "↓") : "";
  const isDropAt = reorderIdx?.kind === "measure" && reorderIdx.index === measureIndex;

  return (
    <th
      className="text-right px-[12px] py-[10px]"
      style={{
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        color: "var(--foreground)",
        whiteSpace: "nowrap",
        borderLeft: isDropAt ? "2px solid var(--ai-accent)" : "2px solid transparent",
      }}
      onDragOver={(e) => {
        const types = e.dataTransfer.types;
        if (types.includes(DRAG_MIME) || types.includes("application/x-action-explorer-reorder")) {
          e.preventDefault();
          e.dataTransfer.dropEffect = types.includes(DRAG_MIME) ? "copy" : "move";
          if (!isDropAt) setReorderIdx({ kind: "measure", index: measureIndex });
        }
      }}
      onDragLeave={() => { if (isDropAt) setReorderIdx(null); }}
      onDrop={(e) => {
        const moveRaw = e.dataTransfer.getData("application/x-action-explorer-reorder");
        const fromField = e.dataTransfer.getData(DRAG_MIME);
        setReorderIdx(null);
        if (moveRaw) {
          try {
            const ref = JSON.parse(moveRaw) as ColumnRef;
            dispatch({ type: "MOVE_COLUMN", ref, toIndex: measureIndex });
          } catch { /* noop */ }
        } else if (fromField) {
          try {
            const ref = JSON.parse(fromField) as ColumnRef;
            dispatch({ type: "ADD_COLUMN", ref });
          } catch { /* noop */ }
        }
      }}
    >
      <div
        className="flex items-center justify-end gap-[6px] group"
        draggable={showDragHandle}
        onDragStart={(e) => {
          if (!showDragHandle) return;
          e.dataTransfer.setData("application/x-action-explorer-reorder", JSON.stringify(meas.ref));
          e.dataTransfer.effectAllowed = "move";
        }}
        style={{ cursor: showDragHandle ? "grab" : "default" }}
      >
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="cursor-pointer transition-colors flex items-center gap-[4px]"
              style={{
                background: "transparent",
                border: "none",
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                fontWeight: 700,
                color: "var(--foreground)",
                padding: 0,
              }}
              title="Column options"
            >
              {f?.label || meas.ref.fieldId}
              {suffixLabel && (
                <span style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>
                  · {suffixLabel}
                </span>
              )}
              {meas.showAsPercent && (
                <span style={{ color: "var(--muted-foreground)", fontWeight: 500 }}> %</span>
              )}
              {arrow && <span style={{ color: "var(--muted-foreground)" }}>{arrow}</span>}
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" sideOffset={6} className="p-[6px]" style={{ width: 220, background: "var(--card)" }}>
            <MenuItem
              label="Sort descending"
              onClick={() => dispatch({ type: "SET_SORT", sort: { ref: meas.ref, direction: "desc" } })}
            />
            <MenuItem
              label="Sort ascending"
              onClick={() => dispatch({ type: "SET_SORT", sort: { ref: meas.ref, direction: "asc" } })}
            />
            <MenuDivider />
            <MenuItem
              label="Show as %"
              checked={meas.showAsPercent}
              onClick={() => dispatch({ type: "TOGGLE_MEASURE_PERCENT", ref: meas.ref })}
            />
            <MenuDivider />
            <div style={{ padding: "4px 10px", fontFamily: FONT, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.4px", textTransform: "uppercase" }}>
              Aggregation
            </div>
            {(Object.keys(AGGREGATION_LABELS) as Aggregation[]).map((a) => (
              <MenuItem
                key={a}
                label={AGGREGATION_LABELS[a]}
                checked={meas.agg === a}
                onClick={() => dispatch({ type: "SET_MEASURE_AGG", ref: meas.ref, agg: a })}
              />
            ))}
            <MenuDivider />
            <MenuItem label="Conditional formatting…" onClick={onOpenCf} />
            <MenuDivider />
            <MenuItem
              label="Remove column"
              destructive
              onClick={() => dispatch({ type: "REMOVE_COLUMN", ref: meas.ref })}
            />
          </PopoverContent>
        </Popover>
      </div>
    </th>
  );
}

function MenuItem({
  label, onClick, checked, destructive,
}: { label: string; onClick: () => void; checked?: boolean; destructive?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left flex items-center justify-between px-[10px] h-[32px] cursor-pointer transition-colors"
      style={{
        borderRadius: "var(--radius-sm)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        color: destructive ? "var(--error-default)" : "var(--foreground)",
        background: "transparent",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <span>{label}</span>
      {checked && <span style={{ color: "var(--explorer-accent)", fontWeight: 700 }}>✓</span>}
    </button>
  );
}

function MenuDivider() {
  return <div style={{ height: 1, background: "var(--border)", margin: "4px 6px" }} />;
}

function RowGroup({
  row, state, dispatch, colBreakdownValues, colSums, cfRangeByKey, subRows,
}: {
  row: TableRow;
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  colBreakdownValues: string[];
  colSums: Record<string, number>;
  cfRangeByKey: Record<string, { min: number; max: number }>;
  subRows?: TableRow[];
}) {
  const key = rowKeyFor(row);
  const isExpanded = !!state.expandedRows[key];
  const hasBreakdown = !!state.rowBreakdowns[key];

  return (
    <>
      <tr style={{ borderBottom: "1px solid var(--border)" }}>
        {state.rowDimensions.map((d, i) => (
          <td
            key={refKey(d)}
            className="px-[12px] py-[10px]"
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-base)",
              color: "var(--foreground)",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
            }}
          >
            {i === 0 ? (
              <div className="flex items-center gap-[4px]">
                <RowBreakdownButton
                  rowKey={key}
                  hasBreakdown={hasBreakdown}
                  isExpanded={isExpanded}
                  dispatch={dispatch}
                />
                <span>{row.groupValues[refKey(d)] || "—"}</span>
              </div>
            ) : (
              row.groupValues[refKey(d)] || "—"
            )}
          </td>
        ))}
        {renderMeasureCells(row, state, colBreakdownValues, colSums, cfRangeByKey)}
        <td></td>
      </tr>

      {isExpanded && hasBreakdown && subRows && (
        <>
          {subRows.map((sr, i) => {
            const subKey = `${key}::sub${i}`;
            return (
              <tr key={subKey} style={{ background: "var(--background-subdued)" }}>
                {state.rowDimensions.map((_, idx) => {
                  if (idx === 0) {
                    const breakdownRef = state.rowBreakdowns[key];
                    const val = breakdownRef ? sr.groupValues[refKey(breakdownRef)] : "—";
                    return (
                      <td
                        key={`sub-${idx}`}
                        className="px-[12px] py-[8px]"
                        style={{
                          paddingLeft: 36,
                          fontFamily: FONT,
                          fontSize: "var(--text-sm)",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>↳ {val}</span>
                      </td>
                    );
                  }
                  return <td key={`sub-${idx}`}></td>;
                })}
                {renderMeasureCells(sr, state, colBreakdownValues, colSums, cfRangeByKey, true)}
                <td></td>
              </tr>
            );
          })}
        </>
      )}
    </>
  );
}

function RowBreakdownButton({
  rowKey, hasBreakdown, isExpanded, dispatch,
}: {
  rowKey: string;
  hasBreakdown: boolean;
  isExpanded: boolean;
  dispatch: (a: ExplorerAction) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={(e) => {
            if (hasBreakdown) {
              e.preventDefault();
              dispatch({ type: "TOGGLE_ROW_EXPANDED", rowKey });
            }
          }}
          className="flex items-center justify-center cursor-pointer transition-colors"
          style={{
            width: 18, height: 18,
            borderRadius: "var(--radius-sm)",
            background: hasBreakdown ? "var(--muted)" : "transparent",
            border: "none",
            color: "var(--muted-foreground)",
            fontSize: 11,
            lineHeight: 1,
          }}
          title={hasBreakdown ? "Toggle breakdown" : "Break down this row"}
        >
          {hasBreakdown ? (isExpanded ? "▾" : "▸") : "+"}
        </button>
      </PopoverTrigger>
      {!hasBreakdown && (
        <PopoverContent align="start" sideOffset={4} className="p-[6px]" style={{ width: 220, background: "var(--card)" }}>
          <div
            style={{
              padding: "4px 10px",
              fontFamily: FONT,
              fontSize: 10,
              color: "var(--muted-foreground)",
              letterSpacing: "0.4px",
              textTransform: "uppercase",
            }}
          >
            Break down by
          </div>
          {BREAKDOWN_OPTIONS.map((b) => (
            <button
              key={refKey(b.ref)}
              onClick={() => dispatch({ type: "SET_ROW_BREAKDOWN", rowKey, ref: b.ref })}
              className="w-full text-left px-[10px] h-[32px] cursor-pointer transition-colors"
              style={{
                borderRadius: "var(--radius-sm)",
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                color: "var(--foreground)",
                background: "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {b.label}
            </button>
          ))}
        </PopoverContent>
      )}
    </Popover>
  );
}

function renderMeasureCells(
  row: TableRow,
  state: ExplorerState,
  colBreakdownValues: string[],
  colSums: Record<string, number>,
  cfRangeByKey: Record<string, { min: number; max: number }>,
  muted = false,
) {
  const cells: React.ReactNode[] = [];
  for (const m of state.measures) {
    const key = refKey(m.ref);
    const rawValue = row.measures[key] ?? 0;

    if (state.columnBreakdown && colBreakdownValues.length > 0) {
      // Distribute the row value pseudo-randomly across breakdown buckets.
      // (Deterministic per row+col.)
      const total = colBreakdownValues.length;
      colBreakdownValues.forEach((cbv) => {
        const seed = hashString(`${key}|${rowKey(row)}|${cbv}`);
        const portion = (((seed % 100) + 30) / 130);
        const val = rawValue * (portion / total) * 2;
        cells.push(renderMeasureCell(m, val, colSums[key] || rawValue, state, cfRangeByKey, muted, `${key}::${cbv}`));
      });
    } else {
      cells.push(renderMeasureCell(m, rawValue, colSums[key] || rawValue, state, cfRangeByKey, muted, key));
    }
  }
  return cells;
}

function rowKey(row: TableRow) {
  return Object.values(row.groupValues).join("|");
}

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function renderMeasureCell(
  m: { ref: ColumnRef; agg: Aggregation; showAsPercent: boolean },
  rawValue: number,
  columnSum: number,
  state: ExplorerState,
  cfRangeByKey: Record<string, { min: number; max: number }>,
  muted: boolean,
  cellKey: string,
) {
  const display = m.showAsPercent
    ? columnSum > 0 ? `${((rawValue / columnSum) * 100).toFixed(1)}%` : "0%"
    : formatNumber(rawValue);

  const cf = state.conditionalFormats.find((c) => refKey(c.ref) === refKey(m.ref));
  const range = cf ? cfRangeByKey[refKey(m.ref)] : undefined;
  const background = cf ? colorForValue(rawValue, cf, range) : undefined;

  return (
    <td
      key={cellKey}
      className="px-[12px] py-[10px] text-right tabular-nums"
      style={{
        fontFamily: FONT,
        fontSize: "var(--text-base)",
        color: muted ? "var(--muted-foreground)" : "var(--foreground)",
        background,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
      }}
    >
      {display}
    </td>
  );
}

export function qualifies(value: number, cf: ExplorerState["conditionalFormats"][number]): boolean {
  if (cf.operator === ">") return value > cf.value;
  if (cf.operator === "<") return value < cf.value;
  return value >= cf.value && value <= (cf.value2 ?? Number.POSITIVE_INFINITY);
}

function colorForValue(
  value: number,
  cf: ExplorerState["conditionalFormats"][number],
  range: { min: number; max: number } | undefined,
): string | undefined {
  if (!qualifies(value, cf)) return undefined;
  if (!range || range.max === range.min) return cf.colorMax;
  const t = (value - range.min) / (range.max - range.min);
  return lerpHex(cf.colorMin, cf.colorMax, Math.max(0, Math.min(1, t)));
}

function lerpHex(a: string, b: string, t: number): string {
  const ax = parseHex(a);
  const bx = parseHex(b);
  if (!ax || !bx) return b;
  const r = Math.round(ax.r + (bx.r - ax.r) * t);
  const g = Math.round(ax.g + (bx.g - ax.g) * t);
  const bl = Math.round(ax.b + (bx.b - ax.b) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

function parseHex(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.trim().replace("#", "");
  if (m.length === 3) {
    const r = parseInt(m[0] + m[0], 16);
    const g = parseInt(m[1] + m[1], 16);
    const b = parseInt(m[2] + m[2], 16);
    return { r, g, b };
  }
  if (m.length === 6) {
    return {
      r: parseInt(m.slice(0, 2), 16),
      g: parseInt(m.slice(2, 4), 16),
      b: parseInt(m.slice(4, 6), 16),
    };
  }
  return null;
}

function formatNumber(n: number): string {
  if (Math.abs(n) >= 1000000) return `${(n / 1000000).toFixed(2)}M`;
  if (Math.abs(n) >= 10000) return `${(n / 1000).toFixed(1)}K`;
  if (Number.isInteger(n)) return n.toLocaleString();
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function TotalsRow({
  state, totals, colBreakdownValues,
}: { state: ExplorerState; totals: Record<string, number>; colBreakdownValues: string[] }) {
  return (
    <tr style={{ borderTop: "2px solid var(--border)", background: "var(--background-subdued)" }}>
      {state.rowDimensions.map((d, i) => (
        <td
          key={refKey(d)}
          className="px-[12px] py-[10px]"
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          {i === 0 ? "Total" : ""}
        </td>
      ))}
      {state.measures.map((m) => {
        const key = refKey(m.ref);
        const sum = totals[key] || 0;
        if (state.columnBreakdown && colBreakdownValues.length > 0) {
          return colBreakdownValues.map((cbv) => (
            <td
              key={`${key}::${cbv}::total`}
              className="px-[12px] py-[10px] text-right tabular-nums"
              style={{
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                fontWeight: 700,
                color: "var(--foreground)",
              }}
            >
              {formatNumber(sum / colBreakdownValues.length)}
            </td>
          ));
        }
        return (
          <td
            key={`${key}::total`}
            className="px-[12px] py-[10px] text-right tabular-nums"
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: 700,
              color: "var(--foreground)",
            }}
          >
            {m.showAsPercent ? "100%" : formatNumber(sum)}
          </td>
        );
      })}
      <td></td>
    </tr>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-[24px] py-[60px] text-center gap-[12px]">
      <div
        className="flex items-center justify-center"
        style={{
          width: 56, height: 56,
          borderRadius: "var(--radius)",
          border: "2px dashed var(--border)",
          color: "var(--muted-foreground)",
          fontSize: 22,
        }}
        aria-hidden
      >
        +
      </div>
      <span
        style={{
          fontFamily: FONT,
          fontSize: 16,
          fontWeight: 600,
          color: "var(--foreground)",
        }}
      >
        Start exploring
      </span>
      <span
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-base)",
          color: "var(--muted-foreground)",
          maxWidth: 380,
        }}
      >
        Drag a field from the right panel onto this area, or ask the AI Assistant below — e.g. "Show revenue by partner, last 30 days".
      </span>
    </div>
  );
}
