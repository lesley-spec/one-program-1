/*
  Branded header for Action Explorer.

  Layout: [Account chip · brand monogram + name]  [Editable report title]  [Saved-for badge] [Account switcher]

  Uses the global theme for surfaces but pulls --explorer-accent for the
  account monogram tile only.
*/

import { useState } from "react";
import { getAccount } from "../../action-explorer/accounts";
import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function BrandedHeader({ state, dispatch }: Props) {
  const account = getAccount(state.accountId);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(state.reportName);

  return (
    <div
      className="flex items-center px-[20px] gap-[12px]"
      style={{
        height: 56,
        borderBottom: "1px solid var(--border)",
        background: "var(--card)",
        flexShrink: 0,
      }}
    >
      {/* Account brand chip */}
      <div
        className="flex items-center gap-[8px] h-[32px] pl-[4px] pr-[10px]"
        style={{
          borderRadius: "var(--radius-button)",
          background: "var(--muted)",
        }}
      >
        <span
          className="flex items-center justify-center text-white"
          style={{
            width: 24,
            height: 24,
            borderRadius: "var(--radius-button)",
            background: "var(--explorer-accent)",
            fontFamily: FONT,
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {account.monogram}
        </span>
        <span
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          {account.name}
        </span>
      </div>

      {/* Editable report title */}
      <div className="flex-1 min-w-0">
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => {
              dispatch({ type: "SET_REPORT_NAME", name: draft.trim() || "Untitled Exploration" });
              setEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") (e.target as HTMLInputElement).blur();
              if (e.key === "Escape") {
                setDraft(state.reportName);
                setEditing(false);
              }
            }}
            className="w-full bg-transparent outline-none"
            style={{
              fontFamily: FONT,
              fontSize: 18,
              fontWeight: 600,
              color: "var(--foreground)",
            }}
          />
        ) : (
          <button
            onClick={() => { setDraft(state.reportName); setEditing(true); }}
            className="text-left cursor-pointer hover:underline truncate max-w-full"
            style={{
              fontFamily: FONT,
              fontSize: 18,
              fontWeight: 600,
              color: "var(--foreground)",
              background: "none",
              border: "none",
              padding: 0,
            }}
            title="Click to rename"
          >
            {state.reportName}
          </button>
        )}
      </div>

      {/* Saved-for badge */}
      <span
        className="hidden md:inline-flex items-center h-[24px] px-[10px]"
        style={{
          borderRadius: "var(--radius-button)",
          background: "var(--ai-background)",
          color: "var(--ai-foreground)",
          fontFamily: FONT,
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        Saved for {account.name}
      </span>
    </div>
  );
}
