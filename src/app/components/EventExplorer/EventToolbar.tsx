/*
  EventToolbar — sticky top bar for Event Explorer.

  Layout:
    [Dataset name (editable)]  [Pinned chips ...]    [Save] [Fork] [Ask AI ✦]
*/

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { ExplorerAction, ExplorerState } from "../../event-explorer/state";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function EventToolbar({ state, dispatch }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(state.datasetName);
  const pinned = state.saved.filter((s) => s.pinned);

  return (
    <div
      className="flex items-center px-[20px] gap-[10px]"
      style={{
        height: 52,
        borderBottom: "1px solid var(--border)",
        background: "var(--card)",
        flexShrink: 0,
      }}
    >
      {/* Dataset name */}
      <div className="flex items-center gap-[6px] min-w-0">
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
          Dataset
        </span>
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => {
              dispatch({ type: "SET_DATASET_NAME", name: draft.trim() || "Untitled Dataset" });
              setEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") (e.target as HTMLInputElement).blur();
              if (e.key === "Escape") { setDraft(state.datasetName); setEditing(false); }
            }}
            className="bg-transparent outline-none"
            style={{
              fontFamily: FONT,
              fontSize: 16,
              fontWeight: 600,
              color: "var(--foreground)",
              minWidth: 200,
            }}
          />
        ) : (
          <button
            onClick={() => { setDraft(state.datasetName); setEditing(true); }}
            className="cursor-pointer hover:underline truncate"
            style={{
              fontFamily: FONT,
              fontSize: 16,
              fontWeight: 600,
              color: "var(--foreground)",
              background: "none",
              border: "none",
              padding: 0,
            }}
            title="Rename dataset"
          >
            {state.datasetName}
          </button>
        )}
      </div>

      {/* Pinned chips */}
      <div className="flex items-center gap-[6px] flex-1 overflow-hidden">
        {pinned.length > 0 && (
          <span
            style={{
              fontFamily: FONT,
              fontSize: 10,
              fontWeight: 700,
              color: "var(--muted-foreground)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginLeft: 16,
            }}
          >
            Pinned
          </span>
        )}
        {pinned.map((p) => (
          <button
            key={p.id}
            onClick={() => dispatch({ type: "RESTORE_SAVED", savedId: p.id })}
            className="cursor-pointer transition-colors"
            style={{
              height: 26,
              padding: "0 10px",
              borderRadius: "var(--radius-button)",
              background: "var(--muted)",
              border: "1px solid var(--border)",
              fontFamily: FONT,
              fontSize: 11,
              fontWeight: 600,
              color: "var(--foreground)",
              whiteSpace: "nowrap",
            }}
            title="Restore this saved state"
          >
            📌 {p.name}
          </button>
        ))}
      </div>

      {/* Right-side action buttons */}
      <SaveButton state={state} dispatch={dispatch} />
      <ForkButton state={state} dispatch={dispatch} />
      <AskAIButton state={state} dispatch={dispatch} />
    </div>
  );
}

function SaveButton({ state, dispatch }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const submit = () => {
    const n = name.trim() || state.datasetName;
    dispatch({ type: "SAVE_SNAPSHOT", name: n });
    setName("");
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="cursor-pointer transition-colors"
          style={{
            height: 32, padding: "0 12px",
            borderRadius: "var(--radius-button)",
            background: "var(--card)", border: "1px solid var(--border)",
            fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          Save
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={6} className="p-[12px]" style={{ width: 260, background: "var(--card)" }}>
        <div style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 8 }}>
          Save snapshot
        </div>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          placeholder={state.datasetName}
          className="w-full outline-none mb-[10px]"
          style={{
            height: 32, padding: "0 10px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)",
            background: "var(--background)",
            fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)",
          }}
        />
        <button
          onClick={submit}
          className="w-full cursor-pointer"
          style={{
            height: 32,
            borderRadius: "var(--radius-button)",
            background: "var(--button-primary)",
            color: "var(--button-primary-foreground)",
            border: "none",
            fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
          }}
        >
          Save
        </button>
      </PopoverContent>
    </Popover>
  );
}

function ForkButton({ state, dispatch }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="cursor-pointer transition-colors"
          style={{
            height: 32, padding: "0 12px",
            borderRadius: "var(--radius-button)",
            background: "var(--card)", border: "1px solid var(--border)",
            fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          Fork
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={6} className="p-[6px]" style={{ width: 280, background: "var(--card)" }}>
        <div style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase", padding: "6px 8px" }}>
          Fork from history
        </div>
        <div className="max-h-[260px] overflow-auto">
          {state.history.length === 0 ? (
            <div style={{ padding: 12, fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
              No history yet. Add a column to start.
            </div>
          ) : (
            [...state.history].reverse().slice(0, 10).map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  const name = prompt("Name this fork", `Fork of ${h.label}`);
                  if (!name) return;
                  dispatch({ type: "FORK_FROM_HISTORY", historyId: h.id, name });
                  setOpen(false);
                }}
                className="w-full text-left cursor-pointer transition-colors"
                style={{
                  padding: "8px 10px",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: FONT,
                  fontSize: "var(--text-sm)",
                  color: "var(--foreground)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ fontWeight: 600 }}>{h.label}</div>
                {h.detail && (
                  <div style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 2 }}>
                    {h.detail}
                  </div>
                )}
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function AskAIButton({ state, dispatch }: Props) {
  return (
    <button
      onClick={() => dispatch({ type: "OPEN_AI", open: !state.aiOpen })}
      className="cursor-pointer transition-opacity flex items-center gap-[6px]"
      style={{
        height: 32, padding: "0 14px",
        borderRadius: "var(--radius-button)",
        background: state.aiOpen ? "var(--ai-accent)" : "var(--ai-background)",
        border: state.aiOpen ? "1px solid var(--ai-accent)" : "1px solid var(--ai-border)",
        color: state.aiOpen ? "white" : "var(--ai-foreground)",
        fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600,
      }}
    >
      <span aria-hidden>✦</span>
      Ask AI
    </button>
  );
}
