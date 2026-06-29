/*
  AIAssistantPanel — chat transcript + "Try these next" suggestion cards
  + anomaly callouts. All actions dispatch through the same reducer so
  the user sees the table update immediately.
*/

import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";
import type { Anomaly } from "../../action-explorer/mock-data";
import { getSuggestions } from "../../action-explorer/ai-canned";
import { AIPromptBar } from "./AIPromptBar";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  anomalies: Anomaly[];
}

export function AIAssistantPanel({ state, dispatch, anomalies }: Props) {
  const suggestions = getSuggestions(state);
  const chatStarted = state.chatLog.length > 0;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-auto px-[16px] py-[14px]">
        {/* Notable in this view */}
        {anomalies.length > 0 && (
          <Section title="Notable in this view">
            {anomalies.map((a, i) => (
              <Callout
                key={`${a.value}-${i}`}
                label={`${a.value}'s ${a.measureLabel}`}
                detail={`${a.multiple}× the median across the visible group.`}
              />
            ))}
          </Section>
        )}

        {/* Try these next */}
        <Section title="Try these next">
          {suggestions.length === 0 ? (
            <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
              You've covered the main angles. Ask a free-form question below.
            </span>
          ) : (
            suggestions.map((s) => (
              <SuggestionCard
                key={s.id}
                title={s.title}
                detail={s.detail}
                onApply={() => dispatch(s.action)}
              />
            ))
          )}
        </Section>

        {/* Conversation */}
        {chatStarted && (
          <Section title="Conversation">
            <div className="flex flex-col gap-[8px]">
              {state.chatLog.map((m) => (
                <ChatBubble key={m.id} role={m.role} text={m.text} />
              ))}
            </div>
          </Section>
        )}

        {/* Disclaimer */}
        <div
          className="mt-[16px] p-[10px]"
          style={{
            borderRadius: "var(--radius-sm)",
            background: "var(--muted)",
            fontFamily: FONT,
            fontSize: 11,
            color: "var(--muted-foreground)",
            lineHeight: 1.4,
          }}
        >
          Prototype — sample responses. Wired to canned patterns, not a live model.
        </div>
      </div>

      {/* Chat input — sticks to the bottom of the AI panel */}
      <AIPromptBar state={state} dispatch={dispatch} showExamples={!chatStarted} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[16px] flex flex-col gap-[8px]">
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
        {title}
      </span>
      {children}
    </div>
  );
}

function Callout({ label, detail }: { label: string; detail: string }) {
  return (
    <div
      className="p-[10px]"
      style={{
        borderRadius: "var(--radius-sm)",
        background: "var(--caution-bg)",
        border: "1px solid var(--warning-border)",
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          fontWeight: 700,
          color: "var(--caution)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          color: "var(--foreground)",
          marginTop: 2,
        }}
      >
        {detail}
      </div>
    </div>
  );
}

function SuggestionCard({ title, detail, onApply }: { title: string; detail: string; onApply: () => void }) {
  return (
    <button
      onClick={onApply}
      className="text-left transition-colors cursor-pointer"
      style={{
        padding: 12,
        background: "var(--card)",
        border: "1px solid var(--ai-border)",
        borderRadius: "var(--radius)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ai-background)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card)")}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-base)",
          fontWeight: 600,
          color: "var(--foreground)",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          color: "var(--muted-foreground)",
          marginTop: 4,
          lineHeight: 1.4,
        }}
      >
        {detail}
      </div>
      <div className="flex items-center gap-[6px] mt-[8px]">
        <span
          style={{
            fontFamily: FONT,
            fontSize: 11,
            fontWeight: 700,
            color: "var(--ai-foreground)",
            letterSpacing: "0.4px",
            textTransform: "uppercase",
          }}
        >
          Apply →
        </span>
      </div>
    </button>
  );
}

function ChatBubble({ role, text }: { role: "user" | "ai"; text: string }) {
  const isUser = role === "user";
  return (
    <div
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        maxWidth: "85%",
        padding: "8px 12px",
        borderRadius: "var(--radius)",
        background: isUser ? "var(--muted)" : "var(--ai-background)",
        border: isUser ? "1px solid var(--border)" : "1px solid var(--ai-border)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        color: isUser ? "var(--foreground)" : "var(--ai-foreground)",
        lineHeight: 1.45,
        whiteSpace: "pre-wrap",
      }}
    >
      {text}
    </div>
  );
}
