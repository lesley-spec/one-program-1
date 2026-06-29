/*
  FieldsPanel — searchable list of raw event columns grouped by listing.

  Click a field to add it to the freeform table. Disabled state if it's
  already in the active row dims or measures.
*/

import { useMemo, useState } from "react";
import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";
import { LISTINGS, type Field, type ListingId, isMeasureType, refsEqual } from "../../action-explorer/schema";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function FieldsPanel({ state, dispatch }: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return LISTINGS.map((l) => ({
      ...l,
      fields: term
        ? l.fields.filter((f) =>
            f.label.toLowerCase().includes(term) || f.id.includes(term)
          )
        : l.fields,
    })).filter((l) => l.fields.length > 0);
  }, [search]);

  const isInUse = (listingId: ListingId, field: Field) => {
    const ref = { listingId, fieldId: field.id };
    if (isMeasureType(field.type)) {
      return state.measures.some((m) => refsEqual(m.ref, ref));
    }
    return state.rowDimensions.some((d) => refsEqual(d, ref));
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Search */}
      <div className="px-[16px] pt-[14px] pb-[8px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search fields"
          className="w-full outline-none"
          style={{
            height: 32,
            padding: "0 12px",
            borderRadius: "var(--radius-button)",
            border: "1px solid var(--border)",
            background: "var(--background)",
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <div className="flex-1 overflow-auto px-[16px] pb-[16px]">
        {filtered.map((l) => (
          <div key={l.id} className="mb-[16px]">
            <div
              className="flex items-center justify-between mb-[6px]"
            >
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {l.label}
              </span>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 10,
                  color: "var(--muted-foreground)",
                }}
              >
                {l.fields.length} fields
              </span>
            </div>
            <div className="flex flex-col">
              {l.fields.map((f) => {
                const inUse = isInUse(l.id as ListingId, f);
                return (
                  <button
                    key={`${l.id}:${f.id}`}
                    onClick={() => dispatch({ type: "ADD_COLUMN", ref: { listingId: l.id as ListingId, fieldId: f.id } })}
                    disabled={inUse}
                    draggable={!inUse}
                    onDragStart={(e) => {
                      const ref = { listingId: l.id as ListingId, fieldId: f.id };
                      e.dataTransfer.setData(
                        "application/x-action-explorer-field",
                        JSON.stringify(ref),
                      );
                      e.dataTransfer.effectAllowed = "copy";
                      e.currentTarget.style.opacity = "0.5";
                    }}
                    onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                    className="text-left flex items-center gap-[8px] px-[8px] h-[30px] cursor-pointer transition-colors disabled:cursor-not-allowed"
                    style={{
                      borderRadius: "var(--radius-sm)",
                      background: "transparent",
                      opacity: inUse ? 0.5 : 1,
                      border: "none",
                    }}
                    onMouseEnter={(e) => { if (!inUse) e.currentTarget.style.background = "var(--muted)"; }}
                    onMouseLeave={(e) => { if (!inUse) e.currentTarget.style.background = "transparent"; }}
                  >
                    <FieldTypeIcon type={f.type} />
                    <span
                      style={{
                        fontFamily: FONT,
                        fontSize: "var(--text-sm)",
                        color: "var(--foreground)",
                        flex: 1,
                      }}
                    >
                      {f.label}
                    </span>
                    {f.shared && (
                      <span
                        style={{
                          fontFamily: FONT,
                          fontSize: 9,
                          fontWeight: 600,
                          color: "var(--muted-foreground)",
                          padding: "1px 5px",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--muted)",
                        }}
                        title="Field exists on both listings"
                      >
                        SHARED
                      </span>
                    )}
                    {!inUse && (
                      <span
                        style={{
                          fontFamily: FONT,
                          fontSize: 12,
                          color: "var(--muted-foreground)",
                        }}
                      >
                        +
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FieldTypeIcon({ type }: { type: Field["type"] }) {
  let label: string;
  switch (type) {
    case "number":  label = "#"; break;
    case "date":    label = "📅"; break;
    case "link":    label = "🔗"; break;
    case "boolean": label = "✓"; break;
    case "status":  label = "●"; break;
    default:        label = "T"; break;
  }
  return (
    <span
      className="flex items-center justify-center"
      style={{
        width: 18, height: 18,
        borderRadius: "var(--radius-sm)",
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontFamily: FONT,
        fontSize: 10,
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}
