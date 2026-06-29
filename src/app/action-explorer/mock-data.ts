/*
  Action Explorer — deterministic mock event generator.

  Modeled on the Impact.com Advanced Action Listing CSV
  (4244-AdvancedActionListi.csv). Distributions, partner names, and
  promo codes match what the sample contains.

  Aggregation/sort/breakdown helpers live here so component code stays
  presentational.
*/

import {
  ACTION_FIELDS, CLICK_FIELDS, type Aggregation, type ColumnRef,
  type Field, type ListingId, fieldOf,
} from "./schema";

/* Partner names, IDs, and weights pulled from the sample CSV. */
const PARTNERS: { name: string; id: string; weight: number }[] = [
  { name: "RetailMeNot",          id: "1207461", weight: 18 },
  { name: "ShopStyle",            id: "1210499", weight: 14 },
  { name: "Rakuten Rewards",      id: "1207474", weight: 12 },
  { name: "Natural Intelligence", id: "1210498", weight: 10 },
  { name: "Slickdeals",           id: "2824734", weight: 9 },
  { name: "TopCashback",          id: "1207480", weight: 8 },
  { name: "WireCutter",           id: "1207475", weight: 7 },
  { name: "Buzzfeed",             id: "2047546", weight: 6 },
  { name: "Meredith Corp.",       id: "2047539", weight: 5 },
  { name: "StockX",               id: "1207477", weight: 4 },
  { name: "Condé Nast",           id: "2047535", weight: 3 },
  { name: "CNN",                  id: "2047531", weight: 3 },
  { name: "The Independent",      id: "2047551", weight: 2 },
  { name: "Marla Catherine",      id: "2055625", weight: 2 },
  { name: "Chloe Wen",            id: "2935629", weight: 2 },
  { name: "Kassidy Cook",         id: "1210477", weight: 2 },
  { name: "Jessica Neistadt",     id: "2935642", weight: 2 },
];

const STATUSES: { name: string; weight: number }[] = [
  { name: "Pending",  weight: 8 },
  { name: "Locked",   weight: 9 },
  { name: "Reversed", weight: 1 },
];

const PROMO_CODES = ["", "", "", "", "CELEBRATE", "CYBERSAVE", "FX43B", "HAPPY", "ONPROMO", "SHIPFREE", "TWEET"];

const REFERRING_URLS = [
  "www.google.com.sa", "www.google.com.pk", "www.google.com.eg", "www.google.com.tr",
  "www.google.ie", "www.google.no", "lm.facebook.com", "m.facebook.com",
  "www.bing.com", "search.myway.com", "search.twcc.com", "nortonsafe.search.ask.com",
  "www.bradsdeals.com", "www.topcashback.com", "www.shopathome.com", "connect.themediatrust.com",
  "webmailb.juno.com", "web.mail.comcast.net", "mail.centurylink.net",
  "dealsea.com", "smartbuy.tips", "procouponcode.com",
];

const LANDING_URLS = [
  "/products/laptops", "/products/tvs", "/products/headphones",
  "/category/appliances", "/category/gaming", "/deals/weekly",
  "/black-friday", "/cyber-monday", "/clearance",
];

const EVENT_TYPES = [
  { name: "Online Sale",     id: "14239", weight: 18 },
  { name: "Lead Submission", id: "14240", weight: 2  },
  { name: "App Install",     id: "14241", weight: 1  },
];

const ACTION_TRACKERS = [
  { id: "3914693", name: "Default Sales Tracker" },
  { id: "3878603", name: "Influencer Sales Tracker" },
  { id: "450577",  name: "Loyalty Tracker"        },
  { id: "532532",  name: "Coupon Tracker"         },
  { id: "3692720", name: "Content Tracker"        },
];

function mulberry32(seed: number): () => number {
  let t = seed;
  return () => {
    t = (t + 0x6D2B79F5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

function weightedPick<T extends { weight: number }>(rng: () => number, arr: T[]): T {
  const total = arr.reduce((s, x) => s + x.weight, 0);
  let r = rng() * total;
  for (const item of arr) {
    r -= item.weight;
    if (r <= 0) return item;
  }
  return arr[arr.length - 1];
}

function daysAgoMinutes(rng: () => number, daysWindow: number): Date {
  const d = new Date();
  const totalMins = daysWindow * 24 * 60;
  d.setMinutes(d.getMinutes() - Math.floor(rng() * totalMins));
  return d;
}

function actionIdLike(rng: () => number): string {
  const middle = 6740 + Math.floor(rng() * 12);
  const last = 2400000 + Math.floor(rng() * 250000);
  const prefix = rng() < 0.4 ? "M.8011" : "8011";
  return `${prefix}.${middle}.${last}`;
}

function oidLike(rng: () => number): string {
  return `O${Math.floor(rng() * 9999999) + 1}`;
}

function sharedIdLike(rng: () => number, partnerId: string, trackerId: string): string {
  const hex = Math.floor(rng() * 0xffffffff).toString(16).padStart(8, "0");
  const order = 582800000 + Math.floor(rng() * 600000);
  return `C${hex}-${randHex(rng, 4)}-${randHex(rng, 4)}-${randHex(rng, 4)}-${randHex(rng, 12)}/${partnerId}/${trackerId}/${order}`;
}

function randHex(rng: () => number, len: number): string {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(rng() * 16).toString(16);
  return s;
}

/* ─────────────────────────────────────────────
   Row generation — Action Listing
   ───────────────────────────────────────────── */

export interface ActionRow {
  action_date: Date;
  action_id: string;
  oid: string;
  status: string;
  revenue: number;
  action_cost: number;
  rate: number;
  promo_code: string;
  partner: string;
  partner_id: string;
  event_type: string;
  event_type_id: string;
  referring_url: string;
  sub_id1: string;
  sub_id2: string;
  sub_id3: string;
  shared_id: string;
  referral_id: string;
  indirect_tax: number;
}

export interface ClickRow {
  click_date: Date;
  click_id: string;
  oid: string;
  partner: string;
  partner_id: string;
  event_type: string;
  event_type_id: string;
  referring_url: string;
  landing_url: string;
  sub_id1: string;
  sub_id2: string;
  sub_id3: string;
  shared_id: string;
  action_tracker_id: string;
  action_tracker_name: string;
}

const SEED = 7321; // deterministic across sessions

function generateActions(rng: () => number, count: number): ActionRow[] {
  const rows: ActionRow[] = [];
  for (let i = 0; i < count; i++) {
    const partner = weightedPick(rng, PARTNERS);
    const event = weightedPick(rng, EVENT_TYPES);
    const tracker = pick(rng, ACTION_TRACKERS);
    const revenue = Math.round((30 + rng() * 1900) * 100) / 100;
    const rate = rng() < 0.15 ? 0 : (0.04 + rng() * 0.12);
    const actionCost = Math.round(revenue * rate * 100) / 100;
    const date = daysAgoMinutes(rng, 30);
    rows.push({
      action_date: date,
      action_id: actionIdLike(rng),
      oid: oidLike(rng),
      status: weightedPick(rng, STATUSES).name,
      revenue,
      action_cost: actionCost,
      rate: Math.round(rate * 1e8) / 1e8,
      promo_code: pick(rng, PROMO_CODES),
      partner: partner.name,
      partner_id: partner.id,
      event_type: event.name,
      event_type_id: event.id,
      referring_url: rng() < 0.05 ? "" : pick(rng, REFERRING_URLS),
      sub_id1: rng() < 0.08 ? `Site${100000 + Math.floor(rng() * 900000)}` : "",
      sub_id2: rng() < 0.08 ? `Component${100000 + Math.floor(rng() * 900000)}` : "",
      sub_id3: rng() < 0.06 ? `Provider${100000 + Math.floor(rng() * 900000)}` : "",
      shared_id: sharedIdLike(rng, partner.id, tracker.id),
      referral_id: "",
      indirect_tax: 0,
    });
  }
  return rows;
}

function generateClicks(rng: () => number, count: number, actions: ActionRow[]): ClickRow[] {
  const rows: ClickRow[] = [];
  for (let i = 0; i < count; i++) {
    const partner = weightedPick(rng, PARTNERS);
    const event = weightedPick(rng, EVENT_TYPES);
    const tracker = pick(rng, ACTION_TRACKERS);
    const attributed = rng() < 0.18 ? actions[Math.floor(rng() * actions.length)] : null;
    rows.push({
      click_date: daysAgoMinutes(rng, 30),
      click_id: `clk_${(100000 + i).toString(36)}`,
      oid: attributed ? attributed.oid : "",
      partner: partner.name,
      partner_id: partner.id,
      event_type: event.name,
      event_type_id: event.id,
      referring_url: rng() < 0.05 ? "" : pick(rng, REFERRING_URLS),
      landing_url: pick(rng, LANDING_URLS),
      sub_id1: rng() < 0.08 ? `Site${100000 + Math.floor(rng() * 900000)}` : "",
      sub_id2: rng() < 0.08 ? `Component${100000 + Math.floor(rng() * 900000)}` : "",
      sub_id3: rng() < 0.06 ? `Provider${100000 + Math.floor(rng() * 900000)}` : "",
      shared_id: sharedIdLike(rng, partner.id, tracker.id),
      action_tracker_id: tracker.id,
      action_tracker_name: tracker.name,
    });
  }
  return rows;
}

const RNG = mulberry32(SEED);
export const ACTIONS: ActionRow[] = generateActions(RNG, 500);
export const CLICKS: ClickRow[] = generateClicks(RNG, 1200, ACTIONS);

/* ─────────────────────────────────────────────
   Aggregation primitives
   ───────────────────────────────────────────── */

type AnyRow = ActionRow | ClickRow;

function getRows(listingId: ListingId): AnyRow[] {
  return listingId === "action_listing" ? ACTIONS : CLICKS;
}

function getValue(row: AnyRow, field: Field): unknown {
  return (row as any)[field.id];
}

function applyDateFilter(rows: AnyRow[], listingId: ListingId, range: { start: Date; end: Date } | null): AnyRow[] {
  if (!range) return rows;
  const tsField = listingId === "action_listing" ? "action_date" : "click_date";
  return rows.filter((r) => {
    const d = (r as any)[tsField] as Date;
    return d >= range.start && d <= range.end;
  });
}

function applyValueFilters(
  rows: AnyRow[],
  listingId: ListingId,
  filters: Array<{ ref: ColumnRef; values: string[] }>,
): AnyRow[] {
  if (filters.length === 0) return rows;
  return rows.filter((r) =>
    filters.every((f) => {
      if (f.ref.listingId !== listingId) return true; // doesn't apply
      const v = String((r as any)[f.ref.fieldId] ?? "");
      return f.values.includes(v);
    })
  );
}

function aggregate(values: unknown[], agg: Aggregation): number {
  if (agg === "count") return values.length;
  if (agg === "uniq") return new Set(values.map((v) => String(v))).size;
  const nums = values.filter((v) => typeof v === "number") as number[];
  if (nums.length === 0) return 0;
  if (agg === "avg") return nums.reduce((s, n) => s + n, 0) / nums.length;
  return nums.reduce((s, n) => s + n, 0);
}

/* A single row in the rendered freeform table. */
export interface TableRow {
  /** Composite grouping key — joined with " ▸ " when there are breakdowns. */
  groupValues: Record<string, string>;
  /** Aggregated measures keyed by refKey(measureCol). */
  measures: Record<string, number>;
  /** Number of source rows that fell into this group (for % totals). */
  count: number;
  /** Sub-rows when this row has been "broken down" by another dimension. */
  children?: TableRow[];
}

export interface AggregateOptions {
  dimensions: ColumnRef[];
  measures: { ref: ColumnRef; agg: Aggregation }[];
  primaryListing: ListingId;
  dateRange: { start: Date; end: Date } | null;
  valueFilters: Array<{ ref: ColumnRef; values: string[] }>;
}

/** Aggregate the primary listing by the chosen dimensions and measures. */
export function aggregateRows(opts: AggregateOptions): TableRow[] {
  const listingId = opts.primaryListing;
  let rows = getRows(listingId);
  rows = applyDateFilter(rows, listingId, opts.dateRange);
  rows = applyValueFilters(rows, listingId, opts.valueFilters);

  if (opts.dimensions.length === 0) {
    const measures: Record<string, number> = {};
    for (const m of opts.measures) {
      const f = fieldOf(m.ref);
      if (!f) continue;
      const vals = rows.map((r) => getValue(r, f));
      measures[refKeyStr(m.ref)] = aggregate(vals, m.agg);
    }
    return [{ groupValues: {}, measures, count: rows.length }];
  }

  const map = new Map<string, AnyRow[]>();
  const orderedKeys: string[] = [];
  const valuesByKey = new Map<string, Record<string, string>>();
  const dimFields = opts.dimensions.map((d) => ({ ref: d, field: fieldOf(d) }));

  for (const r of rows) {
    const groupValues: Record<string, string> = {};
    const key = dimFields
      .map(({ ref, field }) => {
        // Cross-listing dimensions: fall back to shared field if present on this listing
        const sourceField = field
          ? (ref.listingId === listingId ? field : matchSharedField(listingId, field))
          : undefined;
        const raw = sourceField ? (r as any)[sourceField.id] : undefined;
        const v = raw == null || raw === "" ? "—" : String(raw);
        groupValues[refKeyStr(ref)] = v;
        return v;
      })
      .join("|");

    if (!map.has(key)) {
      map.set(key, []);
      orderedKeys.push(key);
      valuesByKey.set(key, groupValues);
    }
    map.get(key)!.push(r);
  }

  const result: TableRow[] = [];
  for (const k of orderedKeys) {
    const groupRows = map.get(k)!;
    const measures: Record<string, number> = {};
    for (const m of opts.measures) {
      const f = fieldOf(m.ref);
      if (!f) continue;
      const vals = groupRows.map((r) => getValue(r, f));
      measures[refKeyStr(m.ref)] = aggregate(vals, m.agg);
    }
    result.push({
      groupValues: valuesByKey.get(k)!,
      measures,
      count: groupRows.length,
    });
  }
  return result;
}

/** Break down a single row by a new dimension; returns sub-rows. */
export function breakdownRow(
  parent: TableRow,
  parentDimensions: ColumnRef[],
  newDimension: ColumnRef,
  opts: AggregateOptions,
): TableRow[] {
  const valueFilters: Array<{ ref: ColumnRef; values: string[] }> = [
    ...opts.valueFilters,
    ...parentDimensions.map((d) => ({
      ref: d,
      values: [parent.groupValues[refKeyStr(d)] || ""],
    })),
  ];
  return aggregateRows({
    ...opts,
    dimensions: [newDimension],
    valueFilters,
  });
}

/** Returns the equivalent field on `listingId` for a shared field on another listing. */
function matchSharedField(listingId: ListingId, field: Field): Field | undefined {
  const target = listingId === "action_listing" ? ACTION_FIELDS : CLICK_FIELDS;
  if (!field.shared) return undefined;
  return target.find((f) => f.id === field.id && f.shared);
}

function refKeyStr(ref: ColumnRef): string {
  return `${ref.listingId}:${ref.fieldId}`;
}

/* ─────────────────────────────────────────────
   Distinct values for filter chips & breakdown menus
   ───────────────────────────────────────────── */

export function distinctValues(ref: ColumnRef, limit = 50): string[] {
  const field = fieldOf(ref);
  if (!field) return [];
  const rows = getRows(ref.listingId);
  const set = new Set<string>();
  for (const r of rows) {
    const v = (r as any)[field.id];
    if (v == null || v === "") continue;
    if (v instanceof Date) continue;
    set.add(String(v));
    if (set.size >= limit) break;
  }
  return Array.from(set).sort();
}

/* ─────────────────────────────────────────────
   Top-1 anomaly detector for the AI side-panel
   ───────────────────────────────────────────── */

export interface Anomaly {
  dim: string;
  value: string;
  measureLabel: string;
  multiple: number; // e.g. 2.3 means "2.3× the median"
}

export function detectAnomalies(rows: TableRow[], measures: { ref: ColumnRef; agg: Aggregation }[]): Anomaly[] {
  if (rows.length < 4 || measures.length === 0) return [];
  const result: Anomaly[] = [];
  for (const m of measures.slice(0, 2)) {
    const f = fieldOf(m.ref);
    if (!f) continue;
    const vals = rows.map((r) => r.measures[refKeyStr(m.ref)]).filter((n) => typeof n === "number");
    if (vals.length < 4) continue;
    const sorted = [...vals].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)] || 1;
    const maxIdx = vals.indexOf(Math.max(...vals));
    const mult = vals[maxIdx] / Math.max(median, 1);
    if (mult >= 1.8) {
      const dimKey = Object.keys(rows[maxIdx].groupValues)[0];
      const dimRefStr = dimKey || "";
      const dimLabel = dimRefStr.split(":")[1] || "value";
      result.push({
        dim: dimLabel,
        value: rows[maxIdx].groupValues[dimKey] || "—",
        measureLabel: f.label,
        multiple: Math.round(mult * 10) / 10,
      });
    }
  }
  return result;
}
