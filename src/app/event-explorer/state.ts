/*
  Event Explorer (V2) — state reducer with built-in history.

  Every mutation records a HistoryEntry. The HistoryPanel renders these
  as a vertical thread, like a chat for tables, with "fork from here"
  to roll back to any previous state.

  Also tracks saved/pinned snapshots — the "Save", "Fork", "Pin" toolbar
  actions all produce a SavedState the user can return to.
*/

import {
  type Aggregation, type ColumnRef, type SourceId,
  fieldOf, isMeasureType, refsEqual, refKey,
} from "./schema";

export interface SortState {
  ref: ColumnRef;
  direction: "asc" | "desc";
}
export interface ValueFilter {
  ref: ColumnRef;
  values: string[];
}
export interface ConditionalFormat {
  ref: ColumnRef;
  operator: ">" | "<" | "between";
  value: number;
  value2?: number;
  colorMax: string;
  colorMin: string;
}

export interface HistoryEntry {
  id: string;
  ts: number;
  kind:
    | "add_column"
    | "remove_column"
    | "move_column"
    | "set_sort"
    | "toggle_totals"
    | "set_date"
    | "add_filter"
    | "remove_filter"
    | "set_source"
    | "ai_prompt"
    | "save"
    | "fork"
    | "pin";
  label: string;        // human-readable description for the history thread
  detail?: string;      // optional secondary line
  sourceId?: SourceId;  // for coloring the dot in the timeline
  /** Snapshot of just the fields/filters/sort/totals at this step so the
      user can fork-from-here. We don't snapshot the full state — just enough. */
  snapshot: ExplorerSnapshot;
}

export interface ExplorerSnapshot {
  primarySource: SourceId;
  rowDimensions: ColumnRef[];
  measures: { ref: ColumnRef; agg: Aggregation; showAsPercent: boolean }[];
  sort: SortState | null;
  showTotals: boolean;
  dateRange: { start: Date; end: Date } | null;
  valueFilters: ValueFilter[];
  conditionalFormats: ConditionalFormat[];
}

export interface SavedState {
  id: string;
  name: string;
  pinned: boolean;
  createdAt: number;
  snapshot: ExplorerSnapshot;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
}

export interface ExplorerState extends ExplorerSnapshot {
  accountId: string;
  datasetName: string;
  history: HistoryEntry[];
  saved: SavedState[];
  rightTab: "history" | "fields";
  /** AI chat surface is secondary — opens in a drawer on demand. */
  aiOpen: boolean;
  chatLog: ChatMessage[];
}

export type ExplorerAction =
  | { type: "SET_ACCOUNT"; accountId: string }
  | { type: "SET_DATASET_NAME"; name: string }
  | { type: "SET_PRIMARY_SOURCE"; sourceId: SourceId }
  | { type: "ADD_COLUMN"; ref: ColumnRef }
  | { type: "REMOVE_COLUMN"; ref: ColumnRef }
  | { type: "MOVE_COLUMN"; ref: ColumnRef; toIndex: number }
  | { type: "SET_MEASURE_AGG"; ref: ColumnRef; agg: Aggregation }
  | { type: "TOGGLE_MEASURE_PERCENT"; ref: ColumnRef }
  | { type: "SET_SORT"; sort: SortState | null }
  | { type: "TOGGLE_TOTALS" }
  | { type: "SET_DATE_RANGE"; range: { start: Date; end: Date } | null }
  | { type: "ADD_FILTER"; filter: ValueFilter }
  | { type: "UPDATE_FILTER"; ref: ColumnRef; values: string[] }
  | { type: "REMOVE_FILTER"; ref: ColumnRef }
  | { type: "ADD_CONDITIONAL_FORMAT"; cf: ConditionalFormat }
  | { type: "REMOVE_CONDITIONAL_FORMAT"; ref: ColumnRef }
  | { type: "SET_RIGHT_TAB"; tab: "history" | "fields" }
  | { type: "OPEN_AI"; open: boolean }
  | { type: "APPEND_CHAT"; message: ChatMessage }
  /* Snapshots */
  | { type: "SAVE_SNAPSHOT"; name: string }
  | { type: "FORK_FROM_HISTORY"; historyId: string; name: string }
  | { type: "TOGGLE_PIN"; savedId: string }
  | { type: "RESTORE_SAVED"; savedId: string }
  | { type: "RESET_TO_BLANK" }
  | { type: "BATCH"; actions: ExplorerAction[] };

function snapshotOf(state: ExplorerState): ExplorerSnapshot {
  return {
    primarySource: state.primarySource,
    rowDimensions: state.rowDimensions.map((r) => ({ ...r })),
    measures: state.measures.map((m) => ({ ref: { ...m.ref }, agg: m.agg, showAsPercent: m.showAsPercent })),
    sort: state.sort ? { ref: { ...state.sort.ref }, direction: state.sort.direction } : null,
    showTotals: state.showTotals,
    dateRange: state.dateRange ? { start: state.dateRange.start, end: state.dateRange.end } : null,
    valueFilters: state.valueFilters.map((f) => ({ ref: { ...f.ref }, values: [...f.values] })),
    conditionalFormats: state.conditionalFormats.map((cf) => ({ ...cf, ref: { ...cf.ref } })),
  };
}

function nextId(prefix = "h"): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

function pushHistory(
  next: ExplorerState,
  kind: HistoryEntry["kind"],
  label: string,
  detail?: string,
  sourceId?: SourceId,
): ExplorerState {
  const entry: HistoryEntry = {
    id: nextId("h"),
    ts: Date.now(),
    kind,
    label,
    detail,
    sourceId,
    snapshot: snapshotOf(next),
  };
  return { ...next, history: [...next.history, entry] };
}

export function reducer(state: ExplorerState, action: ExplorerAction): ExplorerState {
  switch (action.type) {
    case "BATCH":
      return action.actions.reduce((s, a) => reducer(s, a), state);

    case "SET_ACCOUNT":
      return { ...state, accountId: action.accountId };

    case "SET_DATASET_NAME":
      return { ...state, datasetName: action.name };

    case "SET_PRIMARY_SOURCE": {
      if (action.sourceId === state.primarySource) return state;
      return pushHistory(
        { ...state, primarySource: action.sourceId },
        "set_source",
        `Switched primary source to ${action.sourceId}`,
        undefined,
        action.sourceId,
      );
    }

    case "ADD_COLUMN": {
      const f = fieldOf(action.ref);
      if (!f) return state;
      if (isMeasureType(f.type)) {
        if (state.measures.some((m) => refsEqual(m.ref, action.ref))) return state;
        const next: ExplorerState = {
          ...state,
          measures: [
            ...state.measures,
            { ref: action.ref, agg: "sum", showAsPercent: false },
          ],
        };
        return pushHistory(next, "add_column", `Added ${f.label}`, "as a measure", action.ref.sourceId);
      }
      if (state.rowDimensions.some((d) => refsEqual(d, action.ref))) return state;
      const next: ExplorerState = { ...state, rowDimensions: [...state.rowDimensions, action.ref] };
      return pushHistory(next, "add_column", `Added ${f.label}`, "as a dimension", action.ref.sourceId);
    }

    case "REMOVE_COLUMN": {
      const f = fieldOf(action.ref);
      const next: ExplorerState = {
        ...state,
        rowDimensions: state.rowDimensions.filter((d) => !refsEqual(d, action.ref)),
        measures: state.measures.filter((m) => !refsEqual(m.ref, action.ref)),
        sort: state.sort && refsEqual(state.sort.ref, action.ref) ? null : state.sort,
        conditionalFormats: state.conditionalFormats.filter((cf) => !refsEqual(cf.ref, action.ref)),
      };
      return pushHistory(next, "remove_column", `Removed ${f?.label || action.ref.fieldId}`, undefined, action.ref.sourceId);
    }

    case "MOVE_COLUMN": {
      const fld = fieldOf(action.ref);
      if (!fld) return state;
      if (isMeasureType(fld.type)) {
        const arr = [...state.measures];
        const i = arr.findIndex((m) => refsEqual(m.ref, action.ref));
        if (i < 0) return state;
        const [item] = arr.splice(i, 1);
        arr.splice(action.toIndex, 0, item);
        return { ...state, measures: arr };
      }
      const arr = [...state.rowDimensions];
      const i = arr.findIndex((d) => refsEqual(d, action.ref));
      if (i < 0) return state;
      const [item] = arr.splice(i, 1);
      arr.splice(action.toIndex, 0, item);
      return { ...state, rowDimensions: arr };
    }

    case "SET_MEASURE_AGG":
      return {
        ...state,
        measures: state.measures.map((m) =>
          refsEqual(m.ref, action.ref) ? { ...m, agg: action.agg } : m
        ),
      };

    case "TOGGLE_MEASURE_PERCENT":
      return {
        ...state,
        measures: state.measures.map((m) =>
          refsEqual(m.ref, action.ref) ? { ...m, showAsPercent: !m.showAsPercent } : m
        ),
      };

    case "SET_SORT": {
      if (!action.sort) return { ...state, sort: null };
      const f = fieldOf(action.sort.ref);
      return pushHistory(
        { ...state, sort: action.sort },
        "set_sort",
        `Sorted by ${f?.label || action.sort.ref.fieldId} ${action.sort.direction}`,
      );
    }

    case "TOGGLE_TOTALS":
      return pushHistory({ ...state, showTotals: !state.showTotals }, "toggle_totals", state.showTotals ? "Hid totals row" : "Showed totals row");

    case "SET_DATE_RANGE": {
      const next = { ...state, dateRange: action.range };
      const label = action.range
        ? `Set date range`
        : "Cleared date range";
      const detail = action.range
        ? `${formatDate(action.range.start)} – ${formatDate(action.range.end)}`
        : undefined;
      return pushHistory(next, "set_date", label, detail);
    }

    case "ADD_FILTER": {
      const f = fieldOf(action.filter.ref);
      const exists = state.valueFilters.some((vf) => refsEqual(vf.ref, action.filter.ref));
      const next = {
        ...state,
        valueFilters: exists
          ? state.valueFilters.map((vf) => (refsEqual(vf.ref, action.filter.ref) ? action.filter : vf))
          : [...state.valueFilters, action.filter],
      };
      return pushHistory(
        next,
        "add_filter",
        `Filtered ${f?.label || action.filter.ref.fieldId}`,
        action.filter.values.length > 0 ? action.filter.values.slice(0, 3).join(", ") + (action.filter.values.length > 3 ? `, +${action.filter.values.length - 3}` : "") : undefined,
        action.filter.ref.sourceId,
      );
    }

    case "UPDATE_FILTER":
      return {
        ...state,
        valueFilters: state.valueFilters.map((vf) =>
          refsEqual(vf.ref, action.ref) ? { ...vf, values: action.values } : vf
        ),
      };

    case "REMOVE_FILTER": {
      const f = fieldOf(action.ref);
      return pushHistory(
        { ...state, valueFilters: state.valueFilters.filter((vf) => !refsEqual(vf.ref, action.ref)) },
        "remove_filter",
        `Removed filter on ${f?.label || action.ref.fieldId}`,
        undefined,
        action.ref.sourceId,
      );
    }

    case "ADD_CONDITIONAL_FORMAT": {
      const without = state.conditionalFormats.filter((cf) => !refsEqual(cf.ref, action.cf.ref));
      return { ...state, conditionalFormats: [...without, action.cf] };
    }

    case "REMOVE_CONDITIONAL_FORMAT":
      return {
        ...state,
        conditionalFormats: state.conditionalFormats.filter((cf) => !refsEqual(cf.ref, action.ref)),
      };

    case "SET_RIGHT_TAB":
      return { ...state, rightTab: action.tab };

    case "OPEN_AI":
      return { ...state, aiOpen: action.open };

    case "APPEND_CHAT":
      return { ...state, chatLog: [...state.chatLog, action.message] };

    case "SAVE_SNAPSHOT": {
      const saved: SavedState = {
        id: nextId("s"),
        name: action.name,
        pinned: false,
        createdAt: Date.now(),
        snapshot: snapshotOf(state),
      };
      return pushHistory({ ...state, saved: [...state.saved, saved] }, "save", `Saved "${action.name}"`);
    }

    case "FORK_FROM_HISTORY": {
      const entry = state.history.find((h) => h.id === action.historyId);
      if (!entry) return state;
      const saved: SavedState = {
        id: nextId("s"),
        name: action.name,
        pinned: false,
        createdAt: Date.now(),
        snapshot: entry.snapshot,
      };
      const restored = applySnapshot(state, entry.snapshot);
      const withSaved: ExplorerState = { ...restored, saved: [...state.saved, saved] };
      return pushHistory(withSaved, "fork", `Forked from "${entry.label}"`, `as "${action.name}"`);
    }

    case "TOGGLE_PIN":
      return {
        ...state,
        saved: state.saved.map((s) =>
          s.id === action.savedId ? { ...s, pinned: !s.pinned } : s
        ),
      };

    case "RESTORE_SAVED": {
      const s = state.saved.find((x) => x.id === action.savedId);
      if (!s) return state;
      const restored = applySnapshot(state, s.snapshot);
      return pushHistory(restored, "fork", `Restored "${s.name}"`);
    }

    case "RESET_TO_BLANK":
      return blankState(state.accountId);
  }
}

function applySnapshot(state: ExplorerState, snap: ExplorerSnapshot): ExplorerState {
  return {
    ...state,
    primarySource: snap.primarySource,
    rowDimensions: snap.rowDimensions.map((r) => ({ ...r })),
    measures: snap.measures.map((m) => ({ ref: { ...m.ref }, agg: m.agg, showAsPercent: m.showAsPercent })),
    sort: snap.sort ? { ref: { ...snap.sort.ref }, direction: snap.sort.direction } : null,
    showTotals: snap.showTotals,
    dateRange: snap.dateRange ? { start: snap.dateRange.start, end: snap.dateRange.end } : null,
    valueFilters: snap.valueFilters.map((f) => ({ ref: { ...f.ref }, values: [...f.values] })),
    conditionalFormats: snap.conditionalFormats.map((cf) => ({ ...cf, ref: { ...cf.ref } })),
  };
}

function formatDate(d: Date): string {
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export function blankState(accountId: string): ExplorerState {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 29);
  return {
    accountId,
    datasetName: "Untitled Dataset",
    primarySource: "performance",
    rowDimensions: [{ sourceId: "performance", fieldId: "partner" }],
    measures: [
      { ref: { sourceId: "performance", fieldId: "revenue"     }, agg: "sum", showAsPercent: false },
      { ref: { sourceId: "performance", fieldId: "action_cost" }, agg: "sum", showAsPercent: false },
    ],
    sort: {
      ref: { sourceId: "performance", fieldId: "revenue" },
      direction: "desc",
    },
    showTotals: true,
    dateRange: { start, end },
    valueFilters: [],
    conditionalFormats: [],
    history: [],
    saved: [],
    rightTab: "history",
    aiOpen: false,
    chatLog: [],
  };
}
