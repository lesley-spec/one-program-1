/*
  EventFieldsPanel — fields grouped by data source.

  Each source gets a colored header so users see at a glance which source
  a field belongs to. Anchor fields (advertiser_id, campaign_id) are
  highlighted to communicate they exist on every source.
*/

import { useMemo, useState } from "react";
import type { ExplorerAction, ExplorerState } from "../../event-explorer/state";
import {
  SOURCES, type SourceId, type Field, isMeasureType, refsEqual,
} from "../../event-explorer/schema";

const FONT = "'Sarabun', sans-serif";
const DRAG_MIME = "application/x-event-explorer-field";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function EventFieldsPanel({ state, dispatch }: Props) {
  const [search, setSearch] = useState("");
  const [collapsedSources, setCollapsedSources] = useState<Set<SourceId>>(new Set());

  const filteredSources = useMemo(() => {
    const term = search.trim().toLowerCase();
    return SOURCES.map((src) => ({
      ...src,
      fields: term ? src.fields.filter((f) => f.label.toLowerCase().includes(term) || f.id.includes(term)) : src.fields,
    })).filter((s) => s.fields.length > 0);
  }, [search]);

  const isInUse = (sourceId: SourceId, field: Field) => {
    const ref = { sourceId, fieldId: field.id };
    if (isMeasureType(field.type)) return state.measures.some((m) => refsEqual(m.ref, ref));
    return state.rowDimensions.some((d) => refsEqual(d, ref));
  };

  const toggleSource = (id: SourceId) => {
    setCollapsedSources((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="px-[16px] pt-[14px] pb-[8px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search fields"
          className="w-full outline-none"
          style={{
            height: 32, padding: "0 12px",
            borderRadius: "var(--radius-button)",
            border: "1px solid var(--border)",
            background: "var(--background)",
            fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)",
          }}
        />
      </div>
      <div className="flex-1 overflow-auto px-[16px] pb-[16px]">
        {filteredSources.map((src) => {
          const collapsed = collapsedSources.has(src.id);
          return (
            <div key={src.id} className="mb-[16px]">
              <button
                onClick={() => toggleSource(src.id)}
                className="w-full flex items-center justify-between mb-[8px] cursor-pointer"
                style={{ background: "transparent", border: "none", padding: 0 }}
              >
                <div className="flex items-center gap-[8px]">
                  <span style={{ width: 10, height: 10, borderRadius: "var(--radius-button)", background: src.tone }} />
                  <span style={{
                    fontFamily: FONT, fontSize: 10, fontWeight: 700,
                    color: "var(--foreground)", letterSpacing: "0.5px", textTransform: "uppercase",
                  }}>
                    {src.label}
                  </span>
                  <span style={{ fontFamily: FONT, fontSize: 10, color: "var(--muted-foreground)" }}>
                    {src.fields.length} fields
                  </span>
                </div>
                <span style={{ color: "var(--muted-foreground)", fontSize: 10 }}>{collapsed ? "▸" : "▾"}</span>
              </button>
              {!collapsed && (
                <div className="flex flex-col">
                  {src.fields.map((f) => {
                    const inUse = isInUse(src.id as SourceId, f);
                    return (
                      <button
                        key={`${src.id}:${f.id}`}
                        onClick={() => dispatch({ type: "ADD_COLUMN", ref: { sourceId: src.id as SourceId, fieldId: f.id } })}
                        disabled={inUse}
                        draggable={!inUse}
                        onDragStart={(e) => {
                          const ref = { sourceId: src.id as SourceId, fieldId: f.id };
                          e.dataTransfer.setData(DRAG_MIME, JSON.stringify(ref));
                          e.dataTransfer.effectAllowed = "copy";
                          e.currentTarget.style.opacity = "0.5";
                        }}
                        onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                        className="text-left flex items-center gap-[8px] px-[8px] h-[30px] cursor-pointer transition-colors disabled:cursor-not-allowed"
                        style={{
                          borderRadius: "var(--radius-sm)", background: "transparent",
                          opacity: inUse ? 0.5 : 1, border: "none",
                        }}
                        onMouseEnter={(e) => { if (!inUse) e.currentTarget.style.background = "var(--muted)"; }}
                        onMouseLeave={(e) => { if (!inUse) e.currentTarget.style.background = "transparent"; }}
                      >
                        <FieldTypeIcon type={f.type} />
                        <span style={{
                          fontFamily: FONT, fontSize: "var(--text-sm)",
                          color: "var(--foreground)", flex: 1,
                        }}>
                          {f.label}
                        </span>
                        {f.anchor && (
                          <span style={{
                            fontFamily: FONT, fontSize: 9, fontWeight: 700,
                            color: "var(--ai-foreground)",
                            padding: "1px 5px",
                            borderRadius: "var(--radius-sm)",
                            background: "var(--ai-background)",
                          }} title="Anchor field — exists on every source">
                            ANCHOR
                          </span>
                        )}
                        {f.shared && !f.anchor && (
                          <span style={{
                            fontFamily: FONT, fontSize: 9, fontWeight: 600,
                            color: "var(--muted-foreground)",
                            padding: "1px 5px",
                            borderRadius: "var(--radius-sm)",
                            background: "var(--muted)",
                          }} title="Field exists on multiple sources">
                            SHARED
                          </span>
                        )}
                        {!inUse && (
                          <span style={{ fontFamily: FONT, fontSize: 12, color: "var(--muted-foreground)" }}>+</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FieldTypeIcon({ type }: { type: Field["type"] }) {
  let label: string;
  switch (type) {
    case "number":  label = "#";  break;
    case "date":    label = "📅"; break;
    case "link":    label = "🔗"; break;
    case "boolean": label = "✓";  break;
    case "status":  label = "●";  break;
    default:        label = "T";  break;
  }
  return (
    <span className="flex items-center justify-center" style={{
      width: 18, height: 18, borderRadius: "var(--radius-sm)",
      background: "var(--muted)", color: "var(--muted-foreground)",
      fontFamily: FONT, fontSize: 10, fontWeight: 700,
    }}>{label}</span>
  );
}
