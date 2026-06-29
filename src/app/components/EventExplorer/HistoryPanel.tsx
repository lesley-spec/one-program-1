/*
  HistoryPanel — dataset-evolution thread.

  Per meeting notes: "History of how the data set evolved stays visible
  (like a chat thread, but for tables). Save, fork, and pin specific
  table states."

  Renders a vertical timeline of every column/filter/sort/breakdown step.
  Each entry shows: source dot, action label, timestamp, and a
  "Fork from here" button that snapshots the state at that step.
*/

import type { ExplorerAction, ExplorerState, HistoryEntry, SavedState } from "../../event-explorer/state";
import { SOURCES } from "../../event-explorer/schema";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function HistoryPanel({ state, dispatch }: Props) {
  const entries = [...state.history].reverse();
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-auto px-[16px] py-[14px]">
        {/* Saved snapshots */}
        {state.saved.length > 0 && (
          <Section title="Saved">
            <div className="flex flex-col gap-[6px]">
              {state.saved.map((s) => (
                <SavedCard key={s.id} saved={s} dispatch={dispatch} />
              ))}
            </div>
          </Section>
        )}

        {/* History thread */}
        <Section title="Dataset history">
          {entries.length === 0 ? (
            <EmptyHistory />
          ) : (
            <div className="relative">
              {/* Vertical thread line */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: 11, top: 6, bottom: 6,
                  width: 2,
                  background: "var(--border)",
                  borderRadius: 1,
                }}
              />
              <div className="flex flex-col gap-[12px]">
                {entries.map((h, i) => (
                  <HistoryItem key={h.id} entry={h} isLatest={i === 0} dispatch={dispatch} />
                ))}
              </div>
            </div>
          )}
        </Section>

        <div className="mt-[16px] p-[10px]" style={{
          borderRadius: "var(--radius-sm)",
          background: "var(--muted)",
          fontFamily: FONT, fontSize: 11,
          color: "var(--muted-foreground)", lineHeight: 1.4,
        }}>
          Every column, filter, and sort is captured here. Fork from any step to branch a new dataset.
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[16px] flex flex-col gap-[8px]">
      <span style={{
        fontFamily: FONT, fontSize: 10, fontWeight: 700,
        color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase",
      }}>{title}</span>
      {children}
    </div>
  );
}

function HistoryItem({ entry, isLatest, dispatch }: { entry: HistoryEntry; isLatest: boolean; dispatch: (a: ExplorerAction) => void }) {
  const source = entry.sourceId ? SOURCES.find((s) => s.id === entry.sourceId) : undefined;
  const dotColor = source?.tone || "var(--muted-foreground)";
  const ts = new Date(entry.ts);
  const timeStr = ts.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="flex items-start gap-[10px] group">
      {/* Dot */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 24, height: 24,
          borderRadius: "var(--radius-button)",
          background: "var(--card)",
          border: `2px solid ${dotColor}`,
          marginTop: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "var(--radius-button)", background: dotColor }} />
      </div>

      {/* Entry content */}
      <div className="flex-1 min-w-0 pb-[2px]">
        <div className="flex items-center gap-[6px] flex-wrap">
          <span style={{
            fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
            color: "var(--foreground)",
          }}>
            {entry.label}
          </span>
          {isLatest && (
            <span style={{
              fontFamily: FONT, fontSize: 9, fontWeight: 700,
              color: "var(--ai-foreground)", letterSpacing: "0.5px", textTransform: "uppercase",
              padding: "1px 6px",
              borderRadius: "var(--radius-button)",
              background: "var(--ai-background)",
            }}>Current</span>
          )}
        </div>
        {entry.detail && (
          <div style={{
            fontFamily: FONT, fontSize: 11,
            color: "var(--muted-foreground)", marginTop: 2,
            lineHeight: 1.4,
          }}>
            {entry.detail}
          </div>
        )}
        <div className="flex items-center gap-[8px] mt-[3px]">
          <span style={{ fontFamily: FONT, fontSize: 10, color: "var(--muted-foreground)" }}>
            {timeStr}
          </span>
          {!isLatest && (
            <button
              onClick={() => {
                const name = prompt("Name this fork", `Fork from "${entry.label}"`);
                if (!name) return;
                dispatch({ type: "FORK_FROM_HISTORY", historyId: entry.id, name });
              }}
              className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                fontFamily: FONT, fontSize: 10, fontWeight: 700,
                color: "var(--ai-foreground)",
                letterSpacing: "0.4px", textTransform: "uppercase",
                background: "none", border: "none", padding: 0,
              }}
              title="Fork dataset from this step"
            >
              Fork from here →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SavedCard({ saved, dispatch }: { saved: SavedState; dispatch: (a: ExplorerAction) => void }) {
  return (
    <div
      className="flex items-center gap-[8px] p-[8px] transition-colors"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
      }}
    >
      <button
        onClick={() => dispatch({ type: "RESTORE_SAVED", savedId: saved.id })}
        className="flex-1 text-left cursor-pointer"
        style={{
          background: "transparent", border: "none", padding: 0,
          fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
          color: "var(--foreground)",
        }}
        title="Restore"
      >
        {saved.name}
        <div style={{ fontFamily: FONT, fontSize: 10, color: "var(--muted-foreground)", fontWeight: 400, marginTop: 2 }}>
          {saved.snapshot.rowDimensions.length} dims · {saved.snapshot.measures.length} measures
        </div>
      </button>
      <button
        onClick={() => dispatch({ type: "TOGGLE_PIN", savedId: saved.id })}
        className="cursor-pointer transition-colors"
        style={{
          width: 24, height: 24,
          borderRadius: "var(--radius-button)",
          border: "none",
          background: saved.pinned ? "var(--muted)" : "transparent",
          color: saved.pinned ? "var(--foreground)" : "var(--muted-foreground)",
          fontSize: 14, lineHeight: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        title={saved.pinned ? "Unpin" : "Pin to toolbar"}
      >
        {saved.pinned ? "📌" : "📍"}
      </button>
    </div>
  );
}

function EmptyHistory() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-[20px] gap-[6px]">
      <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)" }}>
        No steps yet
      </span>
      <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)", maxWidth: 260, lineHeight: 1.4 }}>
        Add a field from the Fields tab or drag one into the table. Each step shows up here as you build.
      </span>
    </div>
  );
}
