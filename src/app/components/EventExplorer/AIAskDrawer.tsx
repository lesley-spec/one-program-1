/*
  AIAskDrawer — secondary AI surface for Event Explorer.

  Per the meeting notes, AI is a "convenience layer, not AI-first".
  So instead of taking a permanent slot in the layout, AI lives in a
  drawer that overlays the right side when the user clicks "Ask AI".
*/

import { useState } from "react";
import type { ExplorerAction, ExplorerState } from "../../event-explorer/state";
import { EXAMPLE_PROMPTS, runPrompt } from "../../event-explorer/ai-canned";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function AIAskDrawer({ state, dispatch }: Props) {
  const [value, setValue] = useState("");

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch({ type: "APPEND_CHAT", message: { id: String(Date.now()), role: "user", text: trimmed } });
    const result = runPrompt(trimmed, state);
    dispatch(result.action);
    dispatch({ type: "APPEND_CHAT", message: { id: `${Date.now()}-ai`, role: "ai", text: result.response } });
    setValue("");
  };

  if (!state.aiOpen) return null;
  const chatStarted = state.chatLog.length > 0;

  return (
    <>
      {/* Scrim */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: "var(--background-overlay)" }}
        onClick={() => dispatch({ type: "OPEN_AI", open: false })}
      />
      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 flex flex-col"
        style={{
          width: 380,
          height: "100vh",
          background: "var(--card)",
          borderLeft: "1px solid var(--ai-border)",
          boxShadow: "var(--elevation-xl)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-[20px]"
          style={{
            height: 56, flexShrink: 0,
            borderBottom: "1px solid var(--ai-border)",
            background: "var(--ai-background)",
          }}
        >
          <div className="flex items-center gap-[10px]">
            <span style={{
              width: 28, height: 28,
              borderRadius: "var(--radius-button)",
              background: "var(--ai-accent)",
              color: "white",
              fontFamily: FONT, fontSize: 13, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>✦</span>
            <div className="flex flex-col">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--ai-foreground)" }}>
                AI Assistant
              </span>
              <span style={{ fontFamily: FONT, fontSize: 10, color: "var(--ai-foreground)" }}>
                Convenience layer · prototype responses
              </span>
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: "OPEN_AI", open: false })}
            className="cursor-pointer"
            style={{
              width: 28, height: 28,
              borderRadius: "var(--radius-button)",
              border: "none", background: "transparent",
              color: "var(--ai-foreground)", fontSize: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            title="Close"
            aria-label="Close"
          >×</button>
        </div>

        {/* Conversation area */}
        <div className="flex-1 overflow-auto px-[16px] py-[14px]">
          {!chatStarted ? (
            <div className="flex flex-col gap-[10px]">
              <div style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                Try
              </div>
              {EXAMPLE_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => submit(p)}
                  className="text-left cursor-pointer transition-colors"
                  style={{
                    padding: 10,
                    borderRadius: "var(--radius)",
                    background: "var(--card)",
                    border: "1px solid var(--ai-border)",
                    fontFamily: FONT, fontSize: "var(--text-sm)",
                    color: "var(--foreground)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ai-background)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card)")}
                >
                  {p}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-[8px]">
              {state.chatLog.map((m) => (
                <div
                  key={m.id}
                  style={{
                    alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                    padding: "8px 12px",
                    borderRadius: "var(--radius)",
                    background: m.role === "user" ? "var(--muted)" : "var(--ai-background)",
                    border: m.role === "user" ? "1px solid var(--border)" : "1px solid var(--ai-border)",
                    fontFamily: FONT, fontSize: "var(--text-sm)",
                    color: m.role === "user" ? "var(--foreground)" : "var(--ai-foreground)",
                    lineHeight: 1.45, whiteSpace: "pre-wrap",
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Composer */}
        <div
          className="px-[12px] py-[10px] flex flex-col gap-[8px]"
          style={{
            borderTop: "1px solid var(--ai-border)",
            background: "var(--ai-background)",
            flexShrink: 0,
          }}
        >
          <div className="flex items-end gap-[6px]">
            <div className="flex-1 flex items-end gap-[8px] px-[10px] py-[8px]"
              style={{
                background: "var(--card)",
                border: "1px solid var(--ai-border)",
                borderRadius: "var(--radius)",
              }}
            >
              <span aria-hidden style={{
                width: 18, height: 18,
                borderRadius: "var(--radius-button)",
                background: "var(--ai-accent)",
                color: "white",
                fontFamily: FONT, fontSize: 10, fontWeight: 700,
                marginBottom: 2,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>✦</span>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(value); }
                }}
                placeholder="Ask in plain English"
                rows={1}
                className="flex-1 outline-none resize-none bg-transparent"
                style={{
                  fontFamily: FONT, fontSize: "var(--text-sm)",
                  color: "var(--foreground)", lineHeight: "18px",
                  maxHeight: 120,
                }}
              />
            </div>
            <button
              onClick={() => submit(value)}
              disabled={value.trim().length === 0}
              className="cursor-pointer transition-opacity disabled:cursor-not-allowed"
              style={{
                width: 36, height: 36,
                borderRadius: "var(--radius-button)",
                background: value.trim().length === 0 ? "var(--muted)" : "var(--ai-accent)",
                color: value.trim().length === 0 ? "var(--muted-foreground)" : "white",
                border: "none",
                fontFamily: FONT, fontSize: 16, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
              title="Send" aria-label="Send"
            >↑</button>
          </div>
        </div>
      </div>
    </>
  );
}
