/*
  Action Explorer — raw-event schema.

  Modeled on Impact.com's Advanced Action Listing report
  (see sample CSV: 4244-AdvancedActionListi.csv). Every column is a raw
  per-event attribute — no pre-aggregated metrics, no dimension/measure
  registry at the schema level. When a column is dropped into the
  freeform table the UI infers role from `type`:
    - "number"  → measure (sum/avg/count/uniq aggregation choices)
    - anything else → grouping dimension

  Click listing mirrors the Action listing shape and adds a few
  click-side columns (Landing URL, Action Tracker). Fields with the
  same id on both listings are flagged `shared: true`.
*/

export type FieldType = "number" | "string" | "date" | "link" | "status" | "boolean";

export type ListingId = "action_listing" | "click_listing";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  /** Optional category used to organize the Fields panel. */
  group?: string;
  /** True if this field exists on both listings (used for cross-listing grouping). */
  shared?: boolean;
}

/* ─── Action Listing — direct mapping of the Impact.com columns ─── */
export const ACTION_FIELDS: Field[] = [
  { id: "action_date",     label: "Action Date",     type: "date",   group: "Time" },
  { id: "action_id",       label: "Action ID",       type: "string", group: "Identity" },
  { id: "oid",             label: "OID",             type: "string", group: "Identity" },
  { id: "status",          label: "Status",          type: "status", group: "Lifecycle" },
  { id: "revenue",         label: "Revenue",         type: "number", group: "Value" },
  { id: "action_cost",     label: "Action Cost",     type: "number", group: "Value" },
  { id: "rate",            label: "Rate",            type: "number", group: "Value" },
  { id: "indirect_tax",    label: "Indirect Tax",    type: "number", group: "Value" },
  { id: "promo_code",      label: "Promo Code",      type: "string", group: "Marketing" },
  { id: "partner",         label: "Partner",         type: "string", group: "Partner", shared: true },
  { id: "partner_id",      label: "Partner ID",      type: "string", group: "Partner", shared: true },
  { id: "event_type",      label: "Event Type",      type: "string", group: "Event",   shared: true },
  { id: "event_type_id",   label: "Event Type ID",   type: "string", group: "Event",   shared: true },
  { id: "referring_url",   label: "Referring URL",   type: "link",   group: "Source",  shared: true },
  { id: "sub_id1",         label: "SubId1",          type: "string", group: "Tracking", shared: true },
  { id: "sub_id2",         label: "SubId2",          type: "string", group: "Tracking", shared: true },
  { id: "sub_id3",         label: "SubId3",          type: "string", group: "Tracking", shared: true },
  { id: "shared_id",       label: "Shared ID",       type: "string", group: "Tracking", shared: true },
  { id: "referral_id",     label: "Referral ID",     type: "string", group: "Tracking" },
];

/* ─── Click Listing — Impact.com Advanced Click Listing-flavored. ───
   Same shared keys as Action Listing plus click-specific columns. */
export const CLICK_FIELDS: Field[] = [
  { id: "click_date",          label: "Click Date",       type: "date",   group: "Time" },
  { id: "click_id",            label: "Click ID",         type: "string", group: "Identity" },
  { id: "oid",                 label: "OID (attributed)", type: "string", group: "Attribution" },
  { id: "partner",             label: "Partner",          type: "string", group: "Partner",   shared: true },
  { id: "partner_id",          label: "Partner ID",       type: "string", group: "Partner",   shared: true },
  { id: "event_type",          label: "Event Type",       type: "string", group: "Event",     shared: true },
  { id: "event_type_id",       label: "Event Type ID",    type: "string", group: "Event",     shared: true },
  { id: "referring_url",       label: "Referring URL",    type: "link",   group: "Source",    shared: true },
  { id: "landing_url",         label: "Landing URL",      type: "link",   group: "Source" },
  { id: "sub_id1",             label: "SubId1",           type: "string", group: "Tracking",  shared: true },
  { id: "sub_id2",             label: "SubId2",           type: "string", group: "Tracking",  shared: true },
  { id: "sub_id3",             label: "SubId3",           type: "string", group: "Tracking",  shared: true },
  { id: "shared_id",           label: "Shared ID",        type: "string", group: "Tracking",  shared: true },
  { id: "action_tracker_id",   label: "Action Tracker ID",   type: "string", group: "Attribution" },
  { id: "action_tracker_name", label: "Action Tracker Name", type: "string", group: "Attribution" },
];

export const LISTINGS: { id: ListingId; label: string; fields: Field[] }[] = [
  { id: "action_listing", label: "Action Listing", fields: ACTION_FIELDS },
  { id: "click_listing",  label: "Click Listing",  fields: CLICK_FIELDS  },
];

/* A column placed in the freeform table — identifies field by (listing, id). */
export interface ColumnRef {
  listingId: ListingId;
  fieldId: string;
}

export function refKey(ref: ColumnRef): string {
  return `${ref.listingId}:${ref.fieldId}`;
}

export function refsEqual(a: ColumnRef, b: ColumnRef): boolean {
  return a.listingId === b.listingId && a.fieldId === b.fieldId;
}

export function fieldOf(ref: ColumnRef): Field | undefined {
  const listing = LISTINGS.find((l) => l.id === ref.listingId);
  return listing?.fields.find((f) => f.id === ref.fieldId);
}

export function listingLabel(id: ListingId): string {
  return LISTINGS.find((l) => l.id === id)?.label || id;
}

export function isMeasureType(t: FieldType): boolean {
  return t === "number";
}

/* Aggregation choices for measure columns. */
export type Aggregation = "sum" | "avg" | "count" | "uniq";

export const AGGREGATION_LABELS: Record<Aggregation, string> = {
  sum: "Sum",
  avg: "Average",
  count: "Count",
  uniq: "Unique",
};
