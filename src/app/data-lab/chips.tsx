/*
  Data Lab V2 — Reason-aware chip + field-type badge.

  The chip variant is V2-only. It mirrors the visual language of the existing
  invalid-chip pattern in ReportCanvas.tsx (V1), but carries a ResolutionReason
  prop so the same chip can communicate "incompatible-with-chart",
  "filter-not-applied", "applied-normalized", etc.

  See docs/data-lab-multi-model-build-instructions.md §6.3.
*/

import type { FieldType, DataModelId } from "./models";
import { DATA_MODELS } from "./models";
import { REASON_COPY, type ResolutionReason, type FilterCoverage } from "./filters";

const FONT = "'Sarabun', sans-serif";

const TYPE_BADGE: Record<FieldType, { bg: string; text: string; label: string }> = {
  abc: { bg: "rgba(45,62,80,0.8)", text: "#e4e5e8", label: "abc" },
  "123": { bg: "rgba(45,62,80,0.8)", text: "#9AC0FF", label: "123" },
  date: { bg: "rgba(45,62,80,0.8)", text: "#D73184", label: "Date" },
  link: { bg: "rgba(45,62,80,0.8)", text: "#e4e5e8", label: "Link" },
};

export function FieldTypeBadge({ type }: { type: FieldType }) {
  const t = TYPE_BADGE[type];
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: 28,
        height: 16,
        borderRadius: 3,
        background: t.bg,
        color: t.text,
        fontFamily: FONT,
        fontSize: 10,
        fontWeight: 600,
      }}
    >
      {t.label}
    </span>
  );
}

export type ChipTone = "default" | "warning";

/**
 * A pill used for fields placed into a widget config drop-zone.
 * Communicates "applied" vs every flavor of "not applied", and is
 * tinted by the source model's brand color so cross-model fields are
 * visually distinguishable inside a single widget.
 */
export function ResolvedChip({
  label,
  reason = "applied",
  modelId,
  onRemove,
}: {
  label: string;
  reason?: ResolutionReason;
  /** The model this field comes from. Drives the chip color. */
  modelId?: DataModelId;
  onRemove?: () => void;
}) {
  const isHealthy = reason === "applied" || reason === "applied-normalized";
  const tone: ChipTone = isHealthy ? "default" : "warning";
  const tooltip = REASON_COPY[reason] || undefined;
  const modelColor = modelId ? DATA_MODELS[modelId].color : undefined;

  // Healthy: model-colored outline + tinted fill. Warning: red outlined chip
  // (matches the existing invalid-chip pattern in V1's ReportCanvas).
  const styles =
    tone === "default"
      ? {
          background: modelColor ? hexWithAlpha(modelColor, 0.14) : "var(--muted)",
          color: modelColor || "var(--foreground)",
          border: `1px solid ${modelColor || "var(--border)"}`,
        }
      : {
          background: "transparent",
          color: "var(--destructive, #d73184)",
          border: "1px solid var(--destructive, #d73184)",
        };

  return (
    <span
      title={tooltip}
      className="inline-flex items-center gap-[6px] h-[26px] px-[10px]"
      style={{
        borderRadius: "var(--radius-button)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        ...styles,
      }}
    >
      {modelId && tone === "default" && (
        <span
          aria-hidden
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: modelColor,
            flexShrink: 0,
          }}
        />
      )}
      {reason === "applied-normalized" && (
        <span aria-hidden style={{ fontSize: 11, opacity: 0.85 }}>≈</span>
      )}
      {reason !== "applied" && reason !== "applied-normalized" && (
        <span aria-hidden style={{ fontSize: 11, fontWeight: 700 }}>!</span>
      )}
      <span>{label}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="cursor-pointer ml-[2px] flex items-center justify-center"
          style={{
            background: "none",
            border: "none",
            color: tone === "default" ? (modelColor || "var(--foreground)") : "var(--destructive, #d73184)",
            fontFamily: FONT,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1,
            padding: 0,
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}

/**
 * A small colored dot — used to mark a field row in the field list,
 * or to indicate which models honor a given top-level filter.
 */
export function ModelDot({ modelId, size = 8 }: { modelId: DataModelId; size?: number }) {
  return (
    <span
      aria-hidden
      title={DATA_MODELS[modelId].label}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: DATA_MODELS[modelId].color,
        flexShrink: 0,
      }}
    />
  );
}

/**
 * Top-level filter pill, colored by which models honor it:
 *   universal  → grey
 *   single     → that model's color
 *   partial    → grey base + stack of model dots for honoring models
 *   none       → red outline (filter does not apply anywhere)
 */
export function TopLevelFilterPill({
  label,
  coverage,
  onRemove,
}: {
  label: string;
  coverage: FilterCoverage;
  onRemove?: () => void;
}) {
  const honoringTitle =
    coverage.honored.length === 0
      ? "Not honored by any model in scope"
      : coverage.honored.map((id) => DATA_MODELS[id].label).join(" · ");

  let style: React.CSSProperties;
  if (coverage.kind === "universal") {
    style = {
      background: "var(--foreground)",
      color: "var(--card)",
      border: "1px solid transparent",
    };
  } else if (coverage.kind === "single") {
    const c = DATA_MODELS[coverage.honored[0]].color;
    style = {
      background: c,
      color: "#fff",
      border: `1px solid ${c}`,
    };
  } else if (coverage.kind === "partial") {
    style = {
      background: "var(--muted)",
      color: "var(--foreground)",
      border: "1px solid var(--border)",
    };
  } else {
    style = {
      background: "transparent",
      color: "var(--destructive, #d73184)",
      border: "1px dashed var(--destructive, #d73184)",
    };
  }

  return (
    <span
      title={`Applies to: ${honoringTitle}`}
      className="inline-flex items-center gap-[6px] h-[30px] px-[12px]"
      style={{
        borderRadius: "var(--radius-button)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        ...style,
      }}
    >
      <span>{label}</span>
      {coverage.kind === "partial" && (
        <span className="inline-flex items-center gap-[2px]" aria-hidden>
          {coverage.honored.map((id) => (<ModelDot key={id} modelId={id} />))}
        </span>
      )}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="cursor-pointer ml-[2px] flex items-center justify-center"
          style={{
            background: "none",
            border: "none",
            color: style.color as string,
            fontFamily: FONT,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1,
            padding: 0,
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}

function hexWithAlpha(hex: string, alpha: number): string {
  // Accepts "#RRGGBB" — produces rgba(r,g,b,alpha)
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Compact "N filters not applied" widget-header indicator.
 * Hidden when count is 0.
 */
export function FiltersNotAppliedPill({
  count,
  onClick,
}: {
  count: number;
  onClick?: () => void;
}) {
  if (count <= 0) return null;
  const title = `${count} filter${count === 1 ? "" : "s"} not applied to this widget`;
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex items-center gap-[4px] h-[22px] px-[8px] cursor-pointer"
      style={{
        background: "transparent",
        border: "1px solid var(--destructive, #d73184)",
        borderRadius: "var(--radius-button)",
        color: "var(--destructive, #d73184)",
        fontFamily: FONT,
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      <span aria-hidden style={{ lineHeight: 1 }}>!</span>
      {count} not applied
    </button>
  );
}
