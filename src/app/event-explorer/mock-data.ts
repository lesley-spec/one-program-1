/*
  Event Explorer (V2) — deterministic mock data across 5 sources.

  All sources share advertiser_id + campaign_id so cross-source joins
  always have an anchor. Distributions and partner names mirror the
  Impact.com Advanced Action Listing sample.
*/

import {
  SOURCES, type Aggregation, type ColumnRef, type Field, type SourceId,
  fieldOf, refKey,
} from "./schema";

const ADVERTISER_IDS = ["adv_4244"];
const CAMPAIGNS = [
  { id: "cmp_1001", name: "Q2 Always-On" },
  { id: "cmp_1002", name: "Memorial Day Sale" },
  { id: "cmp_1003", name: "Father's Day" },
  { id: "cmp_1004", name: "Back to School" },
  { id: "cmp_1005", name: "Tech Week" },
];

const PARTNERS = [
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
  { name: "Marla Catherine",      id: "2055625", weight: 2 },
  { name: "Chloe Wen",            id: "2935629", weight: 2 },
  { name: "Kassidy Cook",         id: "1210477", weight: 2 },
];

const STATUSES: { name: string; weight: number }[] = [
  { name: "Pending", weight: 8 }, { name: "Locked", weight: 9 }, { name: "Reversed", weight: 1 },
];
const PROMO_CODES = ["", "", "", "", "CELEBRATE", "CYBERSAVE", "HAPPY", "SHIPFREE", "TWEET"];
const EVENT_TYPES = ["Online Sale", "Lead Submission", "App Install"];
const REFERRING_URLS = ["www.google.com", "lm.facebook.com", "www.bing.com", "search.myway.com", "www.bradsdeals.com", "www.topcashback.com", "dealsea.com", "smartbuy.tips"];
const LANDING_URLS = ["/laptops", "/tvs", "/headphones", "/cameras", "/smart-home", "/appliances", "/gaming", "/wearables"];
const INDUSTRIES = ["Retail", "Electronics", "Apparel", "Travel", "Finance"];
const VERTICALS = ["Consumer Electronics", "Home", "Beauty", "Fashion"];
const REGIONS = ["AMER", "EMEA", "APAC"];
const QUARTERS = ["2025-Q3", "2025-Q4", "2026-Q1", "2026-Q2"];
const SOCIAL_PLATFORMS = ["Instagram", "TikTok", "YouTube", "Pinterest"];
const POST_TYPES = ["Reel", "Story", "Static", "Video", "Carousel"];
const CREATOR_TIERS = ["Top 10%", "11-25%", "26-50%", "51-100%"];
const COMPETITORS = ["Amazon", "Walmart", "Target", "Costco", "Newegg", "B&H"];
const PLACEMENTS = ["Sidebar", "In-Article", "Hero", "Email"];
const PUBLISHERS = ["Wirecutter", "CNET", "Reviewed", "The Verge", "Engadget"];
const SPOT_CATEGORIES = ["Laptops", "TVs", "Audio", "Cameras", "Smart Home"];
const PRODUCT_CATEGORIES = ["Laptops", "Televisions", "Headphones", "Cameras", "Smart Home", "Appliances", "Gaming", "Wearables"];
const PRODUCT_NAMES = ["Sony WH-1000XM5", "MacBook Air M3", "LG OLED C3", "Samsung QN90C", "Bose QuietComfort", "iPad Air", "Sonos Beam"];
const BOOST_STATUSES = ["Active", "Paused", "Ended"];

/* Deterministic RNG */
function mulberry32(seed: number): () => number {
  let t = seed;
  return () => {
    t = (t + 0x6D2B79F5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
function pick<T>(rng: () => number, arr: T[]): T { return arr[Math.floor(rng() * arr.length)]; }
function weightedPick<T extends { weight: number }>(rng: () => number, arr: T[]): T {
  const total = arr.reduce((s, x) => s + x.weight, 0);
  let r = rng() * total;
  for (const x of arr) { r -= x.weight; if (r <= 0) return x; }
  return arr[arr.length - 1];
}
function daysAgo(rng: () => number, max: number): Date {
  const d = new Date();
  d.setMinutes(d.getMinutes() - Math.floor(rng() * max * 24 * 60));
  return d;
}

const RNG = mulberry32(7321);
const ADV = ADVERTISER_IDS[0];

/* ─── Performance rows ─── */
type Row = Record<string, unknown>;
function genPerformance(count: number): Row[] {
  const out: Row[] = [];
  for (let i = 0; i < count; i++) {
    const partner = weightedPick(RNG, PARTNERS);
    const cmp = pick(RNG, CAMPAIGNS);
    const revenue = Math.round((30 + RNG() * 1900) * 100) / 100;
    const rate = RNG() < 0.15 ? 0 : 0.04 + RNG() * 0.12;
    out.push({
      advertiser_id: ADV,
      campaign_id: cmp.id,
      campaign: cmp.name,
      event_date: daysAgo(RNG, 30),
      action_id: `8011.${6740 + Math.floor(RNG() * 12)}.${2400000 + Math.floor(RNG() * 250000)}`,
      oid: `O${Math.floor(RNG() * 9999999) + 1}`,
      status: weightedPick(RNG, STATUSES).name,
      event_type: pick(RNG, EVENT_TYPES),
      revenue,
      action_cost: Math.round(revenue * rate * 100) / 100,
      rate: Math.round(rate * 1e8) / 1e8,
      promo_code: pick(RNG, PROMO_CODES),
      partner: partner.name,
      partner_id: partner.id,
      landing_url: pick(RNG, LANDING_URLS),
      referring_url: RNG() < 0.05 ? "" : pick(RNG, REFERRING_URLS),
      sub_id1: RNG() < 0.08 ? `Site${100000 + Math.floor(RNG() * 900000)}` : "",
      sub_id2: RNG() < 0.08 ? `Component${100000 + Math.floor(RNG() * 900000)}` : "",
    });
  }
  return out;
}

function genBenchmark(count: number): Row[] {
  const out: Row[] = [];
  for (let i = 0; i < count; i++) {
    const cmp = pick(RNG, CAMPAIGNS);
    out.push({
      advertiser_id: ADV,
      campaign_id: cmp.id,
      campaign: cmp.name,
      quarter: pick(RNG, QUARTERS),
      industry: pick(RNG, INDUSTRIES),
      vertical: pick(RNG, VERTICALS),
      region: pick(RNG, REGIONS),
      benchmark_cpa: Math.round((10 + RNG() * 40) * 100) / 100,
      benchmark_roas: Math.round((2 + RNG() * 6) * 100) / 100,
      benchmark_conv_rate: Math.round((0.5 + RNG() * 6) * 100) / 100,
      industry_index: Math.round((80 + RNG() * 60) * 100) / 100,
    });
  }
  return out;
}

function genCreator(count: number): Row[] {
  const CREATORS = ["Mara K.", "Devon R.", "Yuki T.", "Priya N.", "Liam O.", "Sasha B.", "Cameron J.", "Aria P."];
  const out: Row[] = [];
  for (let i = 0; i < count; i++) {
    const cmp = pick(RNG, CAMPAIGNS);
    const followers = 5000 + Math.floor(RNG() * 800000);
    const impressions = Math.round(followers * (0.6 + RNG() * 1.5));
    const engagements = Math.round(impressions * (0.005 + RNG() * 0.08));
    out.push({
      advertiser_id: ADV,
      campaign_id: cmp.id,
      campaign: cmp.name,
      post_date: daysAgo(RNG, 30),
      creator_id: `cr_${(10000 + i).toString(36)}`,
      creator_name: pick(RNG, CREATORS),
      creator_tier: pick(RNG, CREATOR_TIERS),
      social_platform: pick(RNG, SOCIAL_PLATFORMS),
      post_url: `https://example.com/p/${(100000 + Math.floor(RNG() * 900000))}`,
      post_type: pick(RNG, POST_TYPES),
      followers,
      impressions,
      engagements,
      engagement_rate: Math.round((engagements / Math.max(impressions, 1)) * 1000) / 10,
      creator_payout: Math.round((50 + RNG() * 2500) * 100) / 100,
    });
  }
  return out;
}

function genSpot(count: number): Row[] {
  const out: Row[] = [];
  for (let i = 0; i < count; i++) {
    const cmp = pick(RNG, CAMPAIGNS);
    out.push({
      advertiser_id: ADV,
      campaign_id: cmp.id,
      campaign: cmp.name,
      observed_date: daysAgo(RNG, 30),
      competitor: pick(RNG, COMPETITORS),
      category: pick(RNG, SPOT_CATEGORIES),
      placement: pick(RNG, PLACEMENTS),
      publisher: pick(RNG, PUBLISHERS),
      share_of_voice: Math.round((1 + RNG() * 60) * 10) / 10,
      competitor_rank: 1 + Math.floor(RNG() * 12),
      promo_active: RNG() < 0.42,
      estimated_clicks: Math.round(100 + RNG() * 80000),
    });
  }
  return out;
}

function genProductBoost(count: number): Row[] {
  const out: Row[] = [];
  for (let i = 0; i < count; i++) {
    const cmp = pick(RNG, CAMPAIGNS);
    const cost = Math.round((20 + RNG() * 800) * 100) / 100;
    const views = Math.round(cost * (50 + RNG() * 150));
    const actions = Math.round(views * (0.005 + RNG() * 0.05));
    out.push({
      advertiser_id: ADV,
      campaign_id: cmp.id,
      campaign: cmp.name,
      boost_date: daysAgo(RNG, 30),
      product_sku: `SKU-${Math.floor(RNG() * 9000 + 1000)}`,
      product_name: pick(RNG, PRODUCT_NAMES),
      category: pick(RNG, PRODUCT_CATEGORIES),
      boost_cost: cost,
      boosted_views: views,
      attributed_actions: actions,
      attributed_revenue: Math.round(actions * (50 + RNG() * 700) * 100) / 100,
      boost_status: pick(RNG, BOOST_STATUSES),
    });
  }
  return out;
}

export const SOURCE_ROWS: Record<SourceId, Row[]> = {
  performance:   genPerformance(500),
  benchmark:     genBenchmark(60),
  creator:       genCreator(220),
  spot:          genSpot(180),
  product_boost: genProductBoost(140),
};

const DATE_FIELD: Record<SourceId, string> = {
  performance:   "event_date",
  benchmark:     "quarter",
  creator:       "post_date",
  spot:          "observed_date",
  product_boost: "boost_date",
};

function applyDateFilter(rows: Row[], sourceId: SourceId, range: { start: Date; end: Date } | null): Row[] {
  if (!range) return rows;
  const fld = DATE_FIELD[sourceId];
  if (!fld) return rows;
  return rows.filter((r) => {
    const v = r[fld];
    if (v instanceof Date) return v >= range.start && v <= range.end;
    return true;
  });
}

function applyValueFilters(rows: Row[], sourceId: SourceId, filters: Array<{ ref: ColumnRef; values: string[] }>): Row[] {
  if (filters.length === 0) return rows;
  return rows.filter((r) =>
    filters.every((f) => {
      if (f.ref.sourceId !== sourceId) return true;
      const v = String(r[f.ref.fieldId] ?? "");
      return f.values.includes(v);
    })
  );
}

function aggregate(values: unknown[], agg: Aggregation): number {
  if (agg === "count") return values.length;
  if (agg === "uniq") return new Set(values.map(String)).size;
  const nums = values.filter((v) => typeof v === "number") as number[];
  if (nums.length === 0) return 0;
  if (agg === "avg") return nums.reduce((s, n) => s + n, 0) / nums.length;
  return nums.reduce((s, n) => s + n, 0);
}

export interface TableRow {
  groupValues: Record<string, string>;
  measures: Record<string, number>;
  count: number;
}

export interface AggregateOptions {
  dimensions: ColumnRef[];
  measures: { ref: ColumnRef; agg: Aggregation }[];
  primarySource: SourceId;
  dateRange: { start: Date; end: Date } | null;
  valueFilters: Array<{ ref: ColumnRef; values: string[] }>;
}

export function aggregateRows(opts: AggregateOptions): TableRow[] {
  const sourceId = opts.primarySource;
  let rows = SOURCE_ROWS[sourceId];
  rows = applyDateFilter(rows, sourceId, opts.dateRange);
  rows = applyValueFilters(rows, sourceId, opts.valueFilters);

  if (opts.dimensions.length === 0) {
    const measures: Record<string, number> = {};
    for (const m of opts.measures) {
      const f = fieldOf(m.ref);
      if (!f) continue;
      const sourceRowsForMeasure = m.ref.sourceId === sourceId ? rows : crossSourceRows(rows, m.ref.sourceId);
      const vals = sourceRowsForMeasure.map((r) => r[f.id]);
      measures[refKey(m.ref)] = aggregate(vals, m.agg);
    }
    return [{ groupValues: {}, measures, count: rows.length }];
  }

  const map = new Map<string, Row[]>();
  const order: string[] = [];
  const valuesByKey = new Map<string, Record<string, string>>();

  for (const r of rows) {
    const groupValues: Record<string, string> = {};
    const key = opts.dimensions
      .map((d) => {
        const f = fieldOf(d);
        const sourceField = d.sourceId === sourceId ? f : matchSharedField(sourceId, f);
        const raw = sourceField ? r[sourceField.id] : undefined;
        const v = raw == null || raw === "" ? "—" : String(raw);
        groupValues[refKey(d)] = v;
        return v;
      })
      .join("|");
    if (!map.has(key)) { map.set(key, []); order.push(key); valuesByKey.set(key, groupValues); }
    map.get(key)!.push(r);
  }

  const result: TableRow[] = [];
  for (const k of order) {
    const groupRows = map.get(k)!;
    const measures: Record<string, number> = {};
    for (const m of opts.measures) {
      const f = fieldOf(m.ref);
      if (!f) continue;
      let measureRows: Row[];
      if (m.ref.sourceId === sourceId) {
        measureRows = groupRows;
      } else {
        const sample = groupRows[0];
        measureRows = crossSourceRowsForGroup(sample, m.ref.sourceId, opts.dimensions);
      }
      const vals = measureRows.map((r) => r[f.id]);
      measures[refKey(m.ref)] = aggregate(vals, m.agg);
    }
    result.push({ groupValues: valuesByKey.get(k)!, measures, count: groupRows.length });
  }
  return result;
}

function matchSharedField(sourceId: SourceId, field?: Field): Field | undefined {
  if (!field || (!field.shared && !field.anchor)) return undefined;
  const src = SOURCES.find((s) => s.id === sourceId);
  return src?.fields.find((f) => f.id === field.id);
}

/** Filter cross-source rows to match the active campaign-anchor and grouping. */
function crossSourceRows(primary: Row[], otherSource: SourceId): Row[] {
  const campaignIds = new Set(primary.map((r) => String(r.campaign_id || "")));
  return SOURCE_ROWS[otherSource].filter((r) =>
    campaignIds.has(String(r.campaign_id || ""))
  );
}

function crossSourceRowsForGroup(sample: Row, otherSource: SourceId, dims: ColumnRef[]): Row[] {
  const campaignId = String(sample.campaign_id || "");
  return SOURCE_ROWS[otherSource].filter((r) => {
    if (String(r.campaign_id || "") !== campaignId) return false;
    for (const d of dims) {
      const f = fieldOf(d);
      if (!f) continue;
      if (!f.shared && !f.anchor) continue;
      const want = String(sample[f.id] ?? "");
      if (String(r[f.id] ?? "") !== want) return false;
    }
    return true;
  });
}

export function distinctValues(ref: ColumnRef, limit = 50): string[] {
  const field = fieldOf(ref);
  if (!field) return [];
  const rows = SOURCE_ROWS[ref.sourceId];
  const set = new Set<string>();
  for (const r of rows) {
    const v = r[field.id];
    if (v == null || v === "") continue;
    if (v instanceof Date) continue;
    set.add(String(v));
    if (set.size >= limit) break;
  }
  return Array.from(set).sort();
}
