/*
  EventTable — pivot-style freeform table for Event Explorer.

  Each column header shows a small dot in the source's tone so users see
  at a glance which fields come from which data source. Drop targets
  accept fields dragged from EventFieldsPanel.
*/

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { ExplorerAction, ExplorerState } from "../../event-explorer/state";
import {
  type ColumnRef, refKey, fieldOf, isMeasureType, sourceOf,
  AGGREGATION_LABELS, type Aggregation,
} from "../../event-explorer/schema";
import type { TableRow } from "../../event-explorer/mock-data";

const FONT = "'Sarabun', sans-serif";
const PAGE_SIZE_OPTIONS = [25, 50, 100, 250];
const DEFAULT_PAGE_SIZE = 50;
const DRAG_MIME = "application/x-event-explorer-field";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  rows: TableRow[];
  onOpenConditionalFormat: (ref: ColumnRef) => void;
}

export function EventTable({ state, dispatch, rows, onOpenConditionalFormat }: Props) {
  const dims = state.rowDimensions;
  const measures = state.measures;
  const [isDropTarget, setIsDropTarget] = useState(false);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [page, setPage] = useState(0);

  /* Reset to page 0 when underlying row set changes */
  const sig = state.primarySource + "|" +
    dims.map((d) => refKey(d)).join(",") + "|" +
    measures.map((m) => refKey(m.ref)).join(",") + "|" +
    state.valueFilters.map((f) => `${refKey(f.ref)}=${f.values.join("/")}`).join(",") + "|" +
    (state.sort ? `${refKey(state.sort.ref)}:${state.sort.direction}` : "") + "|" +
    pageSize;
  const prevSig = React.useRef(sig);
  if (prevSig.current !== sig) {
    prevSig.current = sig;
    if (page !== 0) setPage(0);
  }

  const totalRows = rows.length;
  const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));
  const safePage = Math.min(page, pageCount - 1);
  const pageStart = safePage * pageSize;
  const pageEnd = Math.min(pageStart + pageSize, totalRows);
  const pageRows = rows.slice(pageStart, pageEnd);

  /* Totals (all filtered rows, not just page) */
  const totals: Record<string, number> = {};
  if (state.showTotals) {
    for (const m of measures) {
      const key = refKey(m.ref);
      totals[key] = rows.reduce((s, r) => s + (r.measures[key] || 0), 0);
    }
  }

  /* Conditional format ranges per measure */
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
      {/* Toolbar (small) */}
      <div
        className="flex items-center justify-between px-[20px] py-[10px]"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--card)", flexShrink: 0 }}
      >
        <div className="flex items-center gap-[10px]">
          <span style={{
            fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700,
            color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase",
          }}>
            Dataset table
          </span>
          <span style={{ fontFamily: FONT, fontSize: 11, color: "var(--muted-foreground)" }}>
            {dims.length + measures.length} {dims.length + measures.length === 1 ? "column" : "columns"}
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <button
            onClick={() => dispatch({ type: "TOGGLE_TOTALS" })}
            className="cursor-pointer"
            style={{
              height: 28, padding: "0 12px",
              borderRadius: "var(--radius-button)",
              background: state.showTotals ? "var(--explorer-accent)" : "var(--card)",
              color: state.showTotals ? "white" : "var(--foreground)",
              border: state.showTotals ? "1px solid transparent" : "1px solid var(--border)",
              fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
            }}
          >Totals</button>
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
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsDropTarget(false);
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
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
            style={{ background: "color-mix(in srgb, var(--ai-background) 80%, transparent)" }}>
            <div className="flex items-center gap-[8px] px-[14px] py-[8px]"
              style={{
                background: "var(--card)",
                border: "2px dashed var(--ai-accent)",
                borderRadius: "var(--radius-button)",
                fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600,
                color: "var(--ai-foreground)", boxShadow: "var(--elevation-md)",
              }}>
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
                {dims.map((d) => (
                  <DimHeader key={refKey(d)} dim={d} dispatch={dispatch} />
                ))}
                {measures.map((m) => (
                  <MeasureHeader
                    key={refKey(m.ref)}
                    meas={m}
                    sort={state.sort}
                    dispatch={dispatch}
                    onOpenCf={() => onOpenConditionalFormat(m.ref)}
                  />
                ))}
                <th style={{ width: 1 }} />
              </tr>
            </thead>
            <tbody>
              {pageRows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid var(--border)" }}>
                  {dims.map((d) => (
                    <td key={refKey(d)} className="px-[12px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-base)", color: "var(--foreground)", whiteSpace: "nowrap" }}>
                      {row.groupValues[refKey(d)] || "—"}
                    </td>
                  ))}
                  {measures.map((m) => {
                    const key = refKey(m.ref);
                    const v = row.measures[key] ?? 0;
                    const colSum = m.showAsPercent ? rows.reduce((s, r) => s + (r.measures[key] || 0), 0) : 0;
                    const display = m.showAsPercent
                      ? (colSum > 0 ? `${((v / colSum) * 100).toFixed(1)}%` : "0%")
                      : formatNumber(v);
                    const cf = state.conditionalFormats.find((c) => refKey(c.ref) === key);
                    const bg = cf ? colorForValue(v, cf, cfRangeByKey[key]) : undefined;
                    return (
                      <td key={key} className="px-[12px] py-[10px] text-right tabular-nums"
                        style={{ fontFamily: FONT, fontSize: "var(--text-base)", color: "var(--foreground)", background: bg, whiteSpace: "nowrap" }}>
                        {display}
                      </td>
                    );
                  })}
                  <td />
                </tr>
              ))}
              {state.showTotals && totalRows > 0 && (
                <tr style={{ borderTop: "2px solid var(--border)", background: "var(--background-subdued)" }}>
                  {dims.map((d, i) => (
                    <td key={refKey(d)} className="px-[12px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)" }}>
                      {i === 0 ? "Total" : ""}
                    </td>
                  ))}
                  {measures.map((m) => {
                    const key = refKey(m.ref);
                    return (
                      <td key={`${key}::total`} className="px-[12px] py-[10px] text-right tabular-nums"
                        style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)" }}>
                        {m.showAsPercent ? "100%" : formatNumber(totals[key] || 0)}
                      </td>
                    );
                  })}
                  <td />
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {totalRows > 0 && (
        <div className="flex items-center justify-between px-[20px] py-[10px] gap-[12px]"
          style={{ borderTop: "1px solid var(--border)", background: "var(--card)", flexShrink: 0 }}>
          <div style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
            Showing <span style={{ color: "var(--foreground)", fontWeight: 600 }}>{pageStart + 1}–{pageEnd}</span>{" "}
            of <span style={{ color: "var(--foreground)", fontWeight: 600 }}>{totalRows.toLocaleString()}</span>{" "}
            {totalRows === 1 ? "row" : "rows"}
            {state.showTotals && (
              <span style={{ marginLeft: 8 }}>· Totals reflect all {totalRows.toLocaleString()} rows</span>
            )}
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[6px]">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>Rows per page</span>
              <select
                value={pageSize}
                onChange={(e) => { setPageSize(parseInt(e.target.value, 10)); setPage(0); }}
                className="outline-none cursor-pointer"
                style={{
                  height: 28, padding: "0 8px",
                  borderRadius: "var(--radius-button)",
                  border: "1px solid var(--border)",
                  background: "var(--card)",
                  fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                {PAGE_SIZE_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-[4px]">
              <PageBtn label="‹" disabled={safePage <= 0} onClick={() => setPage(Math.max(0, safePage - 1))} />
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)", fontWeight: 600, padding: "0 8px" }}>
                Page {safePage + 1} of {pageCount}
              </span>
              <PageBtn label="›" disabled={safePage >= pageCount - 1} onClick={() => setPage(Math.min(pageCount - 1, safePage + 1))} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PageBtn({ label, disabled, onClick }: { label: string; disabled: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="cursor-pointer disabled:cursor-not-allowed"
      style={{
        width: 28, height: 28,
        borderRadius: "var(--radius-button)",
        border: "1px solid var(--border)",
        background: "var(--card)",
        fontFamily: FONT, fontSize: 14, fontWeight: 700,
        color: disabled ? "var(--muted-foreground)" : "var(--foreground)",
        opacity: disabled ? 0.5 : 1,
      }}
    >{label}</button>
  );
}

function DimHeader({ dim, dispatch }: { dim: ColumnRef; dispatch: (a: ExplorerAction) => void }) {
  const f = fieldOf(dim);
  const src = sourceOf(dim);
  return (
    <th className="text-left px-[12px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)", whiteSpace: "nowrap" }}>
      <div className="flex items-center gap-[6px] group">
        <span style={{ width: 8, height: 8, borderRadius: "var(--radius-button)", background: src?.tone || "var(--border)" }} title={src?.label} />
        {f?.label || dim.fieldId}
        <button
          onClick={() => dispatch({ type: "REMOVE_COLUMN", ref: dim })}
          className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          style={{
            width: 16, height: 16,
            borderRadius: "var(--radius-button)",
            border: "none", background: "transparent",
            color: "var(--muted-foreground)", fontSize: 14, lineHeight: 1,
          }}
          title="Remove"
        >×</button>
      </div>
    </th>
  );
}

function MeasureHeader({
  meas, sort, dispatch, onOpenCf,
}: {
  meas: { ref: ColumnRef; agg: Aggregation; showAsPercent: boolean };
  sort: ExplorerState["sort"];
  dispatch: (a: ExplorerAction) => void;
  onOpenCf: () => void;
}) {
  const f = fieldOf(meas.ref);
  const src = sourceOf(meas.ref);
  const sortedHere = sort && refKey(sort.ref) === refKey(meas.ref);
  const arrow = sortedHere ? (sort!.direction === "asc" ? "↑" : "↓") : "";

  return (
    <th className="text-right px-[12px] py-[10px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)", whiteSpace: "nowrap" }}>
      <Popover>
        <PopoverTrigger asChild>
          <button className="cursor-pointer transition-colors flex items-center justify-end gap-[6px]"
            style={{
              background: "transparent", border: "none",
              fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700,
              color: "var(--foreground)", padding: 0, marginLeft: "auto",
            }}>
            <span style={{ width: 8, height: 8, borderRadius: "var(--radius-button)", background: src?.tone || "var(--border)" }} title={src?.label} />
            {f?.label || meas.ref.fieldId}
            {meas.showAsPercent && <span style={{ color: "var(--muted-foreground)", fontWeight: 500 }}> %</span>}
            {arrow && <span style={{ color: "var(--muted-foreground)" }}>{arrow}</span>}
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" sideOffset={6} className="p-[6px]" style={{ width: 220, background: "var(--card)" }}>
          <MenuItem label="Sort descending" onClick={() => dispatch({ type: "SET_SORT", sort: { ref: meas.ref, direction: "desc" } })} />
          <MenuItem label="Sort ascending"  onClick={() => dispatch({ type: "SET_SORT", sort: { ref: meas.ref, direction: "asc"  } })} />
          <Divider />
          <MenuItem label="Show as %" checked={meas.showAsPercent} onClick={() => dispatch({ type: "TOGGLE_MEASURE_PERCENT", ref: meas.ref })} />
          <Divider />
          <Caption>Aggregation</Caption>
          {(Object.keys(AGGREGATION_LABELS) as Aggregation[]).map((a) => (
            <MenuItem key={a} label={AGGREGATION_LABELS[a]} checked={meas.agg === a} onClick={() => dispatch({ type: "SET_MEASURE_AGG", ref: meas.ref, agg: a })} />
          ))}
          <Divider />
          <MenuItem label="Conditional formatting…" onClick={onOpenCf} />
          <Divider />
          <MenuItem label="Remove column" destructive onClick={() => dispatch({ type: "REMOVE_COLUMN", ref: meas.ref })} />
        </PopoverContent>
      </Popover>
    </th>
  );
}

function MenuItem({ label, onClick, checked, destructive }: { label: string; onClick: () => void; checked?: boolean; destructive?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left flex items-center justify-between px-[10px] h-[32px] cursor-pointer transition-colors"
      style={{
        borderRadius: "var(--radius-sm)", fontFamily: FONT, fontSize: "var(--text-sm)",
        color: destructive ? "var(--error-default)" : "var(--foreground)", background: "transparent",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <span>{label}</span>
      {checked && <span style={{ color: "var(--explorer-accent)", fontWeight: 700 }}>✓</span>}
    </button>
  );
}
function Divider() { return <div style={{ height: 1, background: "var(--border)", margin: "4px 6px" }} />; }
function Caption({ children }: { children: React.ReactNode }) {
  return <div style={{ padding: "4px 10px", fontFamily: FONT, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.4px", textTransform: "uppercase" }}>{children}</div>;
}

function qualifies(value: number, cf: ExplorerState["conditionalFormats"][number]): boolean {
  if (cf.operator === ">") return value > cf.value;
  if (cf.operator === "<") return value < cf.value;
  return value >= cf.value && value <= (cf.value2 ?? Number.POSITIVE_INFINITY);
}

function colorForValue(value: number, cf: ExplorerState["conditionalFormats"][number], range: { min: number; max: number } | undefined): string | undefined {
  if (!qualifies(value, cf)) return undefined;
  if (!range || range.max === range.min) return cf.colorMax;
  const t = (value - range.min) / (range.max - range.min);
  return lerpHex(cf.colorMin, cf.colorMax, Math.max(0, Math.min(1, t)));
}

function lerpHex(a: string, b: string, t: number): string {
  const ax = parseHex(a); const bx = parseHex(b);
  if (!ax || !bx) return b;
  const r = Math.round(ax.r + (bx.r - ax.r) * t);
  const g = Math.round(ax.g + (bx.g - ax.g) * t);
  const bl = Math.round(ax.b + (bx.b - ax.b) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}
function parseHex(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.trim().replace("#", "");
  if (m.length === 3) return { r: parseInt(m[0] + m[0], 16), g: parseInt(m[1] + m[1], 16), b: parseInt(m[2] + m[2], 16) };
  if (m.length === 6) return { r: parseInt(m.slice(0, 2), 16), g: parseInt(m.slice(2, 4), 16), b: parseInt(m.slice(4, 6), 16) };
  return null;
}

function formatNumber(n: number): string {
  if (Math.abs(n) >= 1000000) return `${(n / 1000000).toFixed(2)}M`;
  if (Math.abs(n) >= 10000) return `${(n / 1000).toFixed(1)}K`;
  if (Number.isInteger(n)) return n.toLocaleString();
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-[24px] py-[60px] text-center gap-[8px]">
      <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: "var(--foreground)" }}>
        Start your dataset
      </span>
      <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", color: "var(--muted-foreground)", maxWidth: 380 }}>
        Drag fields from the right panel, or click them to add. Every step shows up in the history.
      </span>
    </div>
  );
}
