/*
  Action Explorer — canned AI behavior (prototype, no real LLM).

  PROMPT_PATTERNS: ordered list of { match, build }. When the user types in
  the AIPromptBar, the first matching pattern's `build` function returns
  both a state-mutation action and a natural-language response.

  SUGGESTIONS: derived from current state. The AI side-panel renders these
  as "Try these next" cards; each card carries an action to dispatch.
*/

import type { ExplorerAction, ExplorerState } from "./state";
import type { ColumnRef } from "./schema";

export interface PromptResult {
  action: ExplorerAction;
  response: string;
}

const FIELD_KEYWORDS: Record<string, ColumnRef> = {
  partner:    { listingId: "action_listing", fieldId: "partner" },
  partners:   { listingId: "action_listing", fieldId: "partner" },
  status:     { listingId: "action_listing", fieldId: "status" },
  "event type":{ listingId: "action_listing", fieldId: "event_type" },
  event:      { listingId: "action_listing", fieldId: "event_type" },
  events:     { listingId: "action_listing", fieldId: "event_type" },
  promo:      { listingId: "action_listing", fieldId: "promo_code" },
  "promo code":{ listingId: "action_listing", fieldId: "promo_code" },
  code:       { listingId: "action_listing", fieldId: "promo_code" },
  codes:      { listingId: "action_listing", fieldId: "promo_code" },
  referrer:   { listingId: "action_listing", fieldId: "referring_url" },
  "referring url":{ listingId: "action_listing", fieldId: "referring_url" },
  url:        { listingId: "action_listing", fieldId: "referring_url" },
  source:     { listingId: "action_listing", fieldId: "referring_url" },
  subid1:     { listingId: "action_listing", fieldId: "sub_id1" },
  subid2:     { listingId: "action_listing", fieldId: "sub_id2" },
  subid3:     { listingId: "action_listing", fieldId: "sub_id3" },
  tracker:    { listingId: "click_listing", fieldId: "action_tracker_name" },
  "action tracker":{ listingId: "click_listing", fieldId: "action_tracker_name" },
};

const MEASURE_KEYWORDS: Record<string, ColumnRef> = {
  revenue:     { listingId: "action_listing", fieldId: "revenue" },
  sales:       { listingId: "action_listing", fieldId: "revenue" },
  "action cost":{ listingId: "action_listing", fieldId: "action_cost" },
  cost:        { listingId: "action_listing", fieldId: "action_cost" },
  commission:  { listingId: "action_listing", fieldId: "action_cost" },
  commissions: { listingId: "action_listing", fieldId: "action_cost" },
  rate:        { listingId: "action_listing", fieldId: "rate" },
  tax:         { listingId: "action_listing", fieldId: "indirect_tax" },
  "indirect tax":{ listingId: "action_listing", fieldId: "indirect_tax" },
  actions:     { listingId: "action_listing", fieldId: "action_id" }, // count
  conversions: { listingId: "action_listing", fieldId: "action_id" },
  orders:      { listingId: "action_listing", fieldId: "oid" },       // count of orders
  clicks:      { listingId: "click_listing",  fieldId: "click_id" },  // count of clicks
};

function findDim(text: string): ColumnRef | null {
  const lower = text.toLowerCase();
  for (const key of Object.keys(FIELD_KEYWORDS)) {
    if (lower.includes(key)) return FIELD_KEYWORDS[key];
  }
  return null;
}

function findMeasure(text: string): { ref: ColumnRef; label: string } | null {
  const lower = text.toLowerCase();
  for (const key of Object.keys(MEASURE_KEYWORDS)) {
    if (lower.includes(key)) return { ref: MEASURE_KEYWORDS[key], label: key };
  }
  return null;
}

interface Pattern {
  match: RegExp;
  build: (m: RegExpMatchArray, state: ExplorerState) => PromptResult | null;
}

export const PROMPT_PATTERNS: Pattern[] = [
  // "top 5 partners by commission" / "top partners by clicks"
  {
    match: /\btop\s+(\d+)?\s*([a-z]+?)s?\s+by\s+([a-z\s]+?)(?:\b|$)/i,
    build: (m, _state) => {
      const dim = findDim(m[2]);
      const meas = findMeasure(m[3]);
      if (!dim || !meas) return null;
      const limitWord = m[1] ? ` (top ${m[1]})` : "";
      return {
        action: {
          type: "BATCH",
          actions: [
            { type: "COLLAPSE_ALL" },
            ...buildSimpleView(dim, meas.ref),
          ],
        },
        response: `Showing ${m[2]} ranked by ${meas.label}${limitWord}.`,
      };
    },
  },
  // "show commission by partner" / "show clicks by country"
  {
    match: /(?:show|view|see)\s+([a-z\s]+?)\s+(?:by|per)\s+([a-z]+)/i,
    build: (m) => {
      const meas = findMeasure(m[1]);
      const dim = findDim(m[2]);
      if (!dim || !meas) return null;
      return {
        action: {
          type: "BATCH",
          actions: buildSimpleView(dim, meas.ref),
        },
        response: `Grouping by ${m[2]} with ${meas.label}.`,
      };
    },
  },
  // "break down ... by country" → adds row breakdown for top row
  {
    match: /break\s*down.*\bby\s+([a-z]+)/i,
    build: (m, state) => {
      const dim = findDim(m[1]);
      if (!dim) return null;
      // We don't know which row — set column breakdown so every group splits.
      return {
        action: { type: "SET_COLUMN_BREAKDOWN", ref: dim },
        response: `Added a ${m[1]} breakdown to every column.`,
      };
    },
  },
  // "last 7 days" / "last 30 days"
  {
    match: /last\s+(\d+)\s+days?/i,
    build: (m) => {
      const days = parseInt(m[1], 10) || 30;
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - (days - 1));
      return {
        action: { type: "SET_DATE_RANGE", range: { start, end } },
        response: `Date range set to the last ${days} days.`,
      };
    },
  },
  // "this month"
  {
    match: /this\s+month/i,
    build: () => {
      const now = new Date();
      return {
        action: {
          type: "SET_DATE_RANGE",
          range: { start: new Date(now.getFullYear(), now.getMonth(), 1), end: now },
        },
        response: "Date range set to this month.",
      };
    },
  },
  // "highlight ... over N" — adds conditional format
  {
    match: /(?:highlight|color|format)\s+([a-z\s]+?)\s+(?:over|above|greater than|>)\s*([\d,.]+)/i,
    build: (m, _state) => {
      const meas = findMeasure(m[1]);
      if (!meas) return null;
      const value = parseFloat(m[2].replace(/,/g, "")) || 0;
      return {
        action: {
          type: "ADD_CONDITIONAL_FORMAT",
          cf: { ref: meas.ref, operator: ">", value, colorMax: "#F03D5D", colorMin: "#FFFFFF" },
        },
        response: `Highlighting ${meas.label} values over ${value.toLocaleString()}.`,
      };
    },
  },
  // "reversed actions" / "pending actions" — filter on status
  {
    match: /(pending|locked|reversed)\s+(?:actions?|only)?/i,
    build: (m) => {
      const status = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
      return {
        action: {
          type: "ADD_FILTER",
          filter: { ref: { listingId: "action_listing", fieldId: "status" }, values: [status] },
        },
        response: `Filtered to ${status} actions.`,
      };
    },
  },
  // "actions with promo code" / "promo code only"
  {
    match: /\bpromo\s*(?:code)?s?\s+(?:only|used|applied)/i,
    build: () => ({
      action: {
        type: "ADD_FILTER",
        filter: {
          ref: { listingId: "action_listing", fieldId: "promo_code" },
          values: ["CELEBRATE", "CYBERSAVE", "FX43B", "HAPPY", "ONPROMO", "SHIPFREE", "TWEET"],
        },
      },
      response: "Filtered to actions that used a promo code.",
    }),
  },
  // "total" / "totals on"
  {
    match: /\b(turn|show|enable)\s+(?:on\s+)?totals?\b/i,
    build: () => ({
      action: { type: "TOGGLE_TOTALS" },
      response: "Totals row toggled.",
    }),
  },
  // "switch to clicks" / "use click listing"
  {
    match: /\b(switch|use)\s+(?:to\s+)?clicks?(?:\s+listing)?/i,
    build: () => ({
      action: { type: "SET_PRIMARY_LISTING", listingId: "click_listing" },
      response: "Now exploring click listing data.",
    }),
  },
  {
    match: /\b(switch|use)\s+(?:to\s+)?actions?(?:\s+listing)?/i,
    build: () => ({
      action: { type: "SET_PRIMARY_LISTING", listingId: "action_listing" },
      response: "Now exploring action listing data.",
    }),
  },
];

/** Build a BATCH of actions that resets dims/measures and sets a single dim + measure. */
function buildSimpleView(dim: ColumnRef, measure: ColumnRef): ExplorerAction[] {
  return [
    { type: "ADD_COLUMN", ref: dim },
    { type: "ADD_COLUMN", ref: measure },
    {
      type: "SET_SORT",
      sort: { ref: measure, direction: "desc" },
    },
  ];
}

export function runPrompt(text: string, state: ExplorerState): PromptResult {
  for (const p of PROMPT_PATTERNS) {
    const m = text.match(p.match);
    if (!m) continue;
    const r = p.build(m, state);
    if (r) return r;
  }
  return {
    action: { type: "APPEND_CHAT", message: { id: String(Date.now()), role: "ai", text: "Try: \"Show commission by partner\", \"Last 30 days\", or \"Highlight commission over 200\"." } },
    response: "Try: \"Show commission by partner\", \"Last 30 days\", or \"Highlight commission over 200\".",
  };
}

/* ─────────────────────────────────────────────
   Context-aware suggestion cards for the AI side-panel
   ───────────────────────────────────────────── */

export interface SuggestionCard {
  id: string;
  title: string;
  detail: string;
  action: ExplorerAction;
}

export function getSuggestions(state: ExplorerState): SuggestionCard[] {
  const cards: SuggestionCard[] = [];
  const hasPartnerDim = state.rowDimensions.some((d) => d.fieldId === "partner");
  const hasStatusDim  = state.rowDimensions.some((d) => d.fieldId === "status");
  const hasPromoDim   = state.rowDimensions.some((d) => d.fieldId === "promo_code");

  if (state.rowDimensions.length === 0) {
    cards.push({
      id: "start-partner",
      title: "Start with partners",
      detail: "Group by partner and sum revenue.",
      action: {
        type: "BATCH",
        actions: buildSimpleView(
          { listingId: "action_listing", fieldId: "partner" },
          { listingId: "action_listing", fieldId: "revenue" },
        ),
      },
    });
  }

  if (hasPartnerDim && !state.columnBreakdown) {
    cards.push({
      id: "break-by-status",
      title: "Break down by status",
      detail: "Add a status column breakdown to see Pending vs. Locked vs. Reversed per partner.",
      action: {
        type: "SET_COLUMN_BREAKDOWN",
        ref: { listingId: "action_listing", fieldId: "status" },
      },
    });
  }

  if (hasPartnerDim && state.conditionalFormats.length === 0 && state.measures.length > 0) {
    const firstMeasure = state.measures[0].ref;
    cards.push({
      id: "highlight-top",
      title: "Highlight strong cells",
      detail: "Color-scale the top column so outliers jump out.",
      action: {
        type: "ADD_CONDITIONAL_FORMAT",
        cf: {
          ref: firstMeasure,
          operator: ">",
          value: 0,
          colorMax: "#F03D5D",
          colorMin: "#FFFFFF",
        },
      },
    });
  }

  if (!hasPromoDim) {
    cards.push({
      id: "promo-impact",
      title: "Where are promo codes used?",
      detail: "Group by promo code and sum revenue to see which codes drove sales.",
      action: {
        type: "BATCH",
        actions: buildSimpleView(
          { listingId: "action_listing", fieldId: "promo_code" },
          { listingId: "action_listing", fieldId: "revenue" },
        ),
      },
    });
  }

  if (!hasStatusDim) {
    cards.push({
      id: "status-mix",
      title: "Look at the status mix",
      detail: "Group by status to see how much revenue is still pending or reversed.",
      action: {
        type: "BATCH",
        actions: buildSimpleView(
          { listingId: "action_listing", fieldId: "status" },
          { listingId: "action_listing", fieldId: "revenue" },
        ),
      },
    });
  }

  if (state.primaryListing === "action_listing") {
    cards.push({
      id: "look-at-clicks",
      title: "Look at clicks instead",
      detail: "Switch the explorer to the click listing.",
      action: { type: "SET_PRIMARY_LISTING", listingId: "click_listing" },
    });
  }

  return cards.slice(0, 4);
}

export const EXAMPLE_PROMPTS = [
  "Show revenue by partner",
  "Top 10 partners by action cost",
  "Promo code only, last 7 days",
  "Highlight revenue over 1000",
  "Break down by status",
];
