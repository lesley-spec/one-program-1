/*
  Conditional format dialog — Figma "Filter by condition" parity.

  Measure dropdown, condition (>, <, between), value(s), and a two-color
  scale. Save dispatches ADD_CONDITIONAL_FORMAT.
*/

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "../ui/dialog";
import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";
import { type ColumnRef, fieldOf, refKey } from "../../action-explorer/schema";

const FONT = "'Sarabun', sans-serif";

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
  initialRef: ColumnRef;
  onClose: () => void;
}

const PRESET_MAX_COLORS = ["#F03D5D", "#0046BE", "#065F46", "#92400E", "#7B189F"];
const PRESET_MIN_COLORS = ["#FFFFFF", "#FFE4E8", "#E0EAFF", "#E6FBF1", "#FFF7E0"];

export function ConditionalFormatDialog({ state, dispatch, initialRef, onClose }: Props) {
  const existing = state.conditionalFormats.find((c) => refKey(c.ref) === refKey(initialRef));
  const [measureRef, setMeasureRef] = useState<ColumnRef>(initialRef);
  const [op, setOp] = useState<">" | "<" | "between">(existing?.operator || ">");
  const [val, setVal] = useState<string>(String(existing?.value ?? 250000));
  const [val2, setVal2] = useState<string>(String(existing?.value2 ?? ""));
  const [colorMax, setColorMax] = useState(existing?.colorMax || PRESET_MAX_COLORS[0]);
  const [colorMin, setColorMin] = useState(existing?.colorMin || PRESET_MIN_COLORS[0]);

  useEffect(() => {
    if (existing) {
      setOp(existing.operator);
      setVal(String(existing.value));
      setVal2(String(existing.value2 ?? ""));
      setColorMax(existing.colorMax);
      setColorMin(existing.colorMin);
    }
  }, [existing?.ref.fieldId, existing?.ref.listingId]);

  const measureLabel = fieldOf(measureRef)?.label || measureRef.fieldId;

  const save = () => {
    dispatch({
      type: "ADD_CONDITIONAL_FORMAT",
      cf: {
        ref: measureRef,
        operator: op,
        value: Number(val) || 0,
        value2: op === "between" ? Number(val2) || 0 : undefined,
        colorMax,
        colorMin,
      },
    });
    onClose();
  };

  return (
    <Dialog open onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent style={{ maxWidth: 460, background: "var(--card)" }}>
        <DialogHeader>
          <DialogTitle style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700 }}>
            Filter by condition
          </DialogTitle>
          <DialogDescription style={{ fontFamily: FONT, color: "var(--muted-foreground)", fontSize: "var(--text-base)" }}>
            Color-scale cells in the {measureLabel} column based on a condition.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-[16px]">
          {/* Measure */}
          <div className="flex flex-col gap-[6px]">
            <Label>Measure</Label>
            <FakeSelect>
              {state.measures.map((m) => {
                const f = fieldOf(m.ref);
                const active = refKey(m.ref) === refKey(measureRef);
                return (
                  <button
                    key={refKey(m.ref)}
                    onClick={() => setMeasureRef(m.ref)}
                    className="cursor-pointer transition-colors"
                    style={{
                      padding: "6px 12px",
                      borderRadius: "var(--radius-button)",
                      background: active ? "var(--explorer-accent)" : "var(--muted)",
                      color: active ? "white" : "var(--foreground)",
                      border: "none",
                      fontFamily: FONT,
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                    }}
                  >
                    {f?.label || m.ref.fieldId}
                  </button>
                );
              })}
            </FakeSelect>
          </div>

          {/* Condition */}
          <div className="flex flex-col gap-[6px]">
            <Label>Condition</Label>
            <FakeSelect>
              {(["<", ">", "between"] as const).map((o) => {
                const active = op === o;
                const label = o === ">" ? "> More than" : o === "<" ? "< Less than" : "↔ Between";
                return (
                  <button
                    key={o}
                    onClick={() => setOp(o)}
                    className="cursor-pointer transition-colors"
                    style={{
                      padding: "6px 12px",
                      borderRadius: "var(--radius-button)",
                      background: active ? "var(--explorer-accent)" : "var(--muted)",
                      color: active ? "white" : "var(--foreground)",
                      border: "none",
                      fontFamily: FONT,
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </FakeSelect>
          </div>

          {/* Value(s) */}
          <div className="flex gap-[12px]">
            <div className="flex-1 flex flex-col gap-[6px]">
              <Label>{op === "between" ? "From" : "Value"}</Label>
              <NumberInput value={val} onChange={setVal} />
            </div>
            {op === "between" && (
              <div className="flex-1 flex flex-col gap-[6px]">
                <Label>To</Label>
                <NumberInput value={val2} onChange={setVal2} />
              </div>
            )}
          </div>

          {/* Color scale */}
          <div className="flex flex-col gap-[6px]">
            <Label>Color scale</Label>
            <div className="grid grid-cols-2 gap-[12px]">
              <ColorField label="Max" value={colorMax} onChange={setColorMax} presets={PRESET_MAX_COLORS} />
              <ColorField label="Min" value={colorMin} onChange={setColorMin} presets={PRESET_MIN_COLORS} />
            </div>
            {/* Preview gradient */}
            <div
              style={{
                marginTop: 8,
                height: 14,
                borderRadius: "var(--radius-sm)",
                background: `linear-gradient(90deg, ${colorMin}, ${colorMax})`,
                border: "1px solid var(--border)",
              }}
            />
          </div>
        </div>

        <DialogFooter className="flex items-center justify-between">
          <div className="flex gap-[8px]">
            {existing && (
              <button
                onClick={() => { dispatch({ type: "REMOVE_CONDITIONAL_FORMAT", ref: measureRef }); onClose(); }}
                className="cursor-pointer"
                style={{
                  height: 36,
                  padding: "0 16px",
                  borderRadius: "var(--radius-button)",
                  background: "transparent",
                  border: "1px solid var(--border)",
                  fontFamily: FONT,
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  color: "var(--error-default)",
                }}
              >
                Remove
              </button>
            )}
          </div>
          <div className="flex gap-[8px]">
            <button
              onClick={onClose}
              className="cursor-pointer"
              style={{
                height: 36,
                padding: "0 16px",
                borderRadius: "var(--radius-button)",
                background: "transparent",
                border: "1px solid var(--border)",
                fontFamily: FONT,
                fontSize: "var(--text-base)",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Cancel
            </button>
            <button
              onClick={save}
              className="cursor-pointer"
              style={{
                height: 36,
                padding: "0 20px",
                borderRadius: "var(--radius-button)",
                background: "var(--button-primary)",
                color: "var(--button-primary-foreground)",
                border: "none",
                fontFamily: FONT,
                fontSize: "var(--text-base)",
                fontWeight: 600,
              }}
            >
              Save
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        color: "var(--foreground)",
      }}
    >
      {children}
    </span>
  );
}

function FakeSelect({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-[6px]">{children}</div>;
}

function NumberInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputMode="numeric"
      className="outline-none"
      style={{
        height: 36,
        padding: "0 12px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border)",
        background: "var(--card)",
        fontFamily: FONT,
        fontSize: "var(--text-base)",
        color: "var(--foreground)",
      }}
    />
  );
}

function ColorField({
  label, value, onChange, presets,
}: { label: string; value: string; onChange: (v: string) => void; presets: string[] }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <span
        style={{
          fontFamily: FONT,
          fontSize: 11,
          fontWeight: 600,
          color: "var(--muted-foreground)",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div className="flex items-center gap-[8px]">
        <div
          style={{
            width: 24, height: 24,
            borderRadius: "var(--radius-button)",
            background: value,
            border: "1px solid var(--border)",
          }}
        />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="outline-none flex-1"
          style={{
            height: 32,
            padding: "0 10px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)",
            background: "var(--card)",
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            color: "var(--foreground)",
          }}
        />
      </div>
      <div className="flex gap-[4px]">
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            style={{
              width: 18, height: 18,
              borderRadius: "var(--radius-button)",
              background: p,
              border: value === p ? "2px solid var(--foreground)" : "1px solid var(--border)",
              cursor: "pointer",
            }}
            title={p}
          />
        ))}
      </div>
    </div>
  );
}
