/*
  AIPromptBar — chat-input footer for the AI Assistant panel.

  Lives at the bottom of the right-rail chat window. Uses the styleguide
  AI tokens (--ai-background, --ai-foreground, --ai-border, --ai-accent)
  rather than the account accent so it reads unambiguously as an AI
  surface.

  Submitting:
    - appends a user message to chatLog
    - runs the canned pattern matcher in ai-canned.ts
    - dispatches the resulting state mutation
    - appends an AI response to chatLog
*/

import { useState } from "react";
import { EXAMPLE_PROMPTS, runPrompt } from "../../action-explorer/ai-canned";
import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  /** Show inline example chips above the input (only useful before first send). */
  showExamples?: boolean;
}

export function AIPromptBar({ state, dispatch, showExamples = false }: Props) {
  const [value, setValue] = useState("");

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg = { id: String(Date.now()), role: "user" as const, text: trimmed };
    dispatch({ type: "APPEND_CHAT", message: userMsg });
    dispatch({ type: "SET_RIGHT_TAB", tab: "ai" });
    const result = runPrompt(trimmed, state);
    dispatch(result.action);
    dispatch({
      type: "APPEND_CHAT",
      message: { id: `${Date.now()}-ai`, role: "ai", text: result.response },
    });
    setValue("");
  };

  return (
    <div
      className="px-[12px] py-[10px] flex flex-col gap-[8px]"
      style={{
        borderTop: "1px solid var(--ai-border)",
        background: "var(--ai-background)",
        flexShrink: 0,
      }}
    >
      {showExamples && (
        <div className="flex flex-wrap gap-[4px]">
          {EXAMPLE_PROMPTS.slice(0, 4).map((p) => (
            <button
              key={p}
              onClick={() => submit(p)}
              className="cursor-pointer transition-colors"
              style={{
                height: 22,
                padding: "0 8px",
                borderRadius: "var(--radius-button)",
                background: "var(--card)",
                border: "1px solid var(--ai-border)",
                fontFamily: FONT,
                fontSize: 11,
                fontWeight: 500,
                color: "var(--ai-foreground)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--background)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card)")}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-end gap-[6px]">
        <div
          className="flex-1 flex items-end gap-[8px] px-[10px] py-[8px]"
          style={{
            background: "var(--card)",
            border: "1px solid var(--ai-border)",
            borderRadius: "var(--radius)",
          }}
        >
          <span
            className="flex items-center justify-center shrink-0"
            style={{
              width: 18, height: 18,
              borderRadius: "var(--radius-button)",
              background: "var(--ai-accent)",
              color: "white",
              fontFamily: FONT,
              fontSize: 10,
              fontWeight: 700,
              marginBottom: 2,
            }}
            aria-hidden
          >
            ✦
          </span>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit(value);
              }
            }}
            placeholder="Ask in plain English"
            rows={1}
            className="flex-1 outline-none resize-none bg-transparent"
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              color: "var(--foreground)",
              lineHeight: "18px",
              maxHeight: 96,
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
            fontFamily: FONT,
            fontSize: 16,
            fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          title="Send"
          aria-label="Send"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
