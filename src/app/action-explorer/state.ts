/*
  Action Explorer — single reducer used by every UI surface.

  Both the manual UI controls (Fields panel, breakdown menus, conditional
  format dialog, filter chips) AND the AI surfaces (prompt bar, suggestion
  cards) dispatch into the same reducer. The AI canned patterns produce
  `ExplorerAction` values just like the UI does.
*/

import {
  type Aggregation, type ColumnRef, type ListingId, fieldOf, isMeasureType,
  refsEqual,
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
  /** Upper bound used when operator === "between". */
  value2?: number;
  /** Hex color used for the high end of the scale. */
  colorMax: string;
  /** Hex color used for the low end of the scale. */
  colorMin: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
}

export interface ExplorerState {
  accountId: string;
  reportName: string;

  primaryListing: ListingId;

  /** Grouping dimensions in row order. */
  rowDimensions: ColumnRef[];
  /** Aggregated measures shown as columns. */
  measures: { ref: ColumnRef; agg: Aggregation; showAsPercent: boolean }[];
  /** Dimension used as a column breakdown (nested under every measure). */
  columnBreakdown: ColumnRef | null;

  /** Per-row breakdowns: rowKey → next dimension to break down by. */
  rowBreakdowns: Record<string, ColumnRef>;
  /** Which rowKeys are expanded. */
  expandedRows: Record<string, boolean>;

  sort: SortState | null;
  showTotals: boolean;

  dateRange: { start: Date; end: Date } | null;
  valueFilters: ValueFilter[];
  conditionalFormats: ConditionalFormat[];

  rightTab: "ai" | "fields";
  chatLog: ChatMessage[];
}

export type ExplorerAction =
  | { type: "SET_ACCOUNT"; accountId: string }
  | { type: "SET_REPORT_NAME"; name: string }
  | { type: "SET_PRIMARY_LISTING"; listingId: ListingId }
  | { type: "ADD_COLUMN"; ref: ColumnRef }
  | { type: "REMOVE_COLUMN"; ref: ColumnRef }
  | { type: "MOVE_COLUMN"; ref: ColumnRef; toIndex: number }
  | { type: "SET_MEASURE_AGG"; ref: ColumnRef; agg: Aggregation }
  | { type: "TOGGLE_MEASURE_PERCENT"; ref: ColumnRef }
  | { type: "SET_COLUMN_BREAKDOWN"; ref: ColumnRef | null }
  | { type: "SET_ROW_BREAKDOWN"; rowKey: string; ref: ColumnRef | null }
  | { type: "TOGGLE_ROW_EXPANDED"; rowKey: string }
  | { type: "COLLAPSE_ALL" }
  | { type: "SET_SORT"; sort: SortState | null }
  | { type: "TOGGLE_TOTALS" }
  | { type: "SET_DATE_RANGE"; range: { start: Date; end: Date } | null }
  | { type: "ADD_FILTER"; filter: ValueFilter }
  | { type: "REMOVE_FILTER"; ref: ColumnRef }
  | { type: "UPDATE_FILTER"; ref: ColumnRef; values: string[] }
  | { type: "ADD_CONDITIONAL_FORMAT"; cf: ConditionalFormat }
  | { type: "REMOVE_CONDITIONAL_FORMAT"; ref: ColumnRef }
  | { type: "SET_RIGHT_TAB"; tab: "ai" | "fields" }
  | { type: "APPEND_CHAT"; message: ChatMessage }
  | { type: "RESET_TO_BLANK" }
  | { type: "BATCH"; actions: ExplorerAction[] };

export function reducer(state: ExplorerState, action: ExplorerAction): ExplorerState {
  switch (action.type) {
    case "BATCH": {
      return action.actions.reduce((s, a) => reducer(s, a), state);
    }
    case "SET_ACCOUNT":
      return { ...state, accountId: action.accountId };
    case "SET_REPORT_NAME":
      return { ...state, reportName: action.name };
    case "SET_PRIMARY_LISTING":
      return { ...state, primaryListing: action.listingId };

    case "ADD_COLUMN": {
      const f = fieldOf(action.ref);
      if (!f) return state;
      if (isMeasureType(f.type)) {
        if (state.measures.some((m) => refsEqual(m.ref, action.ref))) return state;
        return {
          ...state,
          measures: [
            ...state.measures,
            { ref: action.ref, agg: f.type === "number" ? "sum" : "count", showAsPercent: false },
          ],
        };
      }
      if (state.rowDimensions.some((d) => refsEqual(d, action.ref))) return state;
      return { ...state, rowDimensions: [...state.rowDimensions, action.ref] };
    }
    case "REMOVE_COLUMN": {
      return {
        ...state,
        rowDimensions: state.rowDimensions.filter((d) => !refsEqual(d, action.ref)),
        measures: state.measures.filter((m) => !refsEqual(m.ref, action.ref)),
        sort: state.sort && refsEqual(state.sort.ref, action.ref) ? null : state.sort,
        conditionalFormats: state.conditionalFormats.filter((cf) => !refsEqual(cf.ref, action.ref)),
      };
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
    case "SET_COLUMN_BREAKDOWN":
      return { ...state, columnBreakdown: action.ref };
    case "SET_ROW_BREAKDOWN": {
      const next = { ...state.rowBreakdowns };
      const expanded = { ...state.expandedRows };
      if (action.ref == null) {
        delete next[action.rowKey];
        delete expanded[action.rowKey];
      } else {
        next[action.rowKey] = action.ref;
        expanded[action.rowKey] = true;
      }
      return { ...state, rowBreakdowns: next, expandedRows: expanded };
    }
    case "TOGGLE_ROW_EXPANDED":
      return {
        ...state,
        expandedRows: {
          ...state.expandedRows,
          [action.rowKey]: !state.expandedRows[action.rowKey],
        },
      };
    case "COLLAPSE_ALL":
      return { ...state, expandedRows: {}, rowBreakdowns: {} };
    case "SET_SORT":
      return { ...state, sort: action.sort };
    case "TOGGLE_TOTALS":
      return { ...state, showTotals: !state.showTotals };
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.range };
    case "ADD_FILTER": {
      if (state.valueFilters.some((f) => refsEqual(f.ref, action.filter.ref))) {
        return {
          ...state,
          valueFilters: state.valueFilters.map((f) =>
            refsEqual(f.ref, action.filter.ref) ? action.filter : f
          ),
        };
      }
      return { ...state, valueFilters: [...state.valueFilters, action.filter] };
    }
    case "UPDATE_FILTER":
      return {
        ...state,
        valueFilters: state.valueFilters.map((f) =>
          refsEqual(f.ref, action.ref) ? { ...f, values: action.values } : f
        ),
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        valueFilters: state.valueFilters.filter((f) => !refsEqual(f.ref, action.ref)),
      };
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
    case "APPEND_CHAT":
      return { ...state, chatLog: [...state.chatLog, action.message] };
    case "RESET_TO_BLANK":
      return blankState(state.accountId);
  }
}

export function blankState(accountId: string): ExplorerState {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 29);
  return {
    accountId,
    reportName: "Untitled Exploration",
    primaryListing: "action_listing",
    rowDimensions: [{ listingId: "action_listing", fieldId: "partner" }],
    measures: [
      { ref: { listingId: "action_listing", fieldId: "revenue"     }, agg: "sum", showAsPercent: false },
      { ref: { listingId: "action_listing", fieldId: "action_cost" }, agg: "sum", showAsPercent: false },
    ],
    columnBreakdown: null,
    rowBreakdowns: {},
    expandedRows: {},
    sort: {
      ref: { listingId: "action_listing", fieldId: "revenue" },
      direction: "desc",
    },
    showTotals: true,
    dateRange: { start, end },
    valueFilters: [],
    conditionalFormats: [],
    rightTab: "ai",
    chatLog: [],
  };
}
