import { useState, useCallback } from "react";
import modalSvg from "../../imports/svg-y6gci7csof";

/* ── Types ── */
interface MeasureRow {
  id: string;
  metric: string;
  pivot: string;
  chartType: string;
  goal: string;
}

interface EditProgramHealthModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (rows: MeasureRow[], setMonthlyGoals: boolean, showSparkLines: boolean) => void;
  initialRows?: MeasureRow[];
  initialSetMonthlyGoals?: boolean;
  initialShowSparkLines?: boolean;
}

/* ── Metric, Pivot, Chart options ── */
const METRIC_OPTIONS = ["Clicks", "Actions", "Action Cost", "Revenue", "Total Cost", "CR"];
const PIVOT_OPTIONS = ["Pivot by", "Partner", "Campaign", "Channel"];
const CHART_OPTIONS = ["Line Chart", "Bar Chart"];

/* ── Default rows matching the Figma design ── */
const DEFAULT_ROWS: MeasureRow[] = [
  { id: "1", metric: "Clicks", pivot: "Pivot by", chartType: "Line Chart", goal: "20,000" },
  { id: "2", metric: "Actions", pivot: "Pivot by", chartType: "Bar Chart", goal: "12,000" },
  { id: "3", metric: "Action Cost", pivot: "Pivot by", chartType: "Line Chart", goal: "$3,000" },
  { id: "4", metric: "Revenue", pivot: "Pivot by", chartType: "Bar Chart", goal: "$250,000" },
  { id: "5", metric: "Total Cost", pivot: "Pivot by", chartType: "Line Chart", goal: "" },
  { id: "6", metric: "CR", pivot: "Pivot by", chartType: "Bar Chart", goal: "" },
];

/* ─────────── Icon sub-components (using imported SVG paths) ─────────── */

function CloseIcon() {
  return (
    <svg className="block size-[12px]" viewBox="0 0 12.0001 12" fill="none">
      <path
        clipRule="evenodd"
        d={modalSvg.p2d1a5700}
        fill="var(--foreground)"
        fillRule="evenodd"
      />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg className="block size-[16px]" viewBox="0 0 16 16" fill="none">
      <path
        clipRule="evenodd"
        d={modalSvg.p1caec100}
        fill="var(--border)"
        fillRule="evenodd"
      />
      <path d={modalSvg.p28336d00} fill="white" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg className="block size-[10px] shrink-0" viewBox="0 0 10 10" fill="none">
      <path d={modalSvg.p382bad00} fill="var(--foreground)" />
    </svg>
  );
}

function DragHandle() {
  return (
    <svg className="block size-[16px]" viewBox="0 0 16 16" fill="none">
      <path
        d={modalSvg.p163ed900}
        stroke="var(--foreground)"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg className="block size-[12px]" viewBox="0 0 12 12" fill="none">
      <path
        clipRule="evenodd"
        d={modalSvg.pa4953f0}
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

/* ─────────── Checkbox component ─────────── */
function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-[8px] cursor-pointer"
      style={{ background: "none", border: "none", padding: 0 }}
      onClick={() => onChange(!checked)}
    >
      {checked ? (
        <div
          className="flex items-center justify-center shrink-0 size-[16px]"
          style={{
            borderRadius: "var(--radius-checkbox)",
            background: "var(--accent)",
          }}
        >
          <CheckmarkIcon />
        </div>
      ) : (
        <div
          className="shrink-0 size-[16px] relative"
          style={{ borderRadius: "var(--radius-checkbox)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: "var(--radius-checkbox)",
              border: "1.5px solid var(--muted-foreground)",
            }}
          />
        </div>
      )}
      <span
        className="font-['Sarabun',sans-serif] text-foreground whitespace-nowrap"
        style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "19px" }}
      >
        {label}
      </span>
    </button>
  );
}

/* ─────────── Select dropdown component ─────────── */
function SelectField({
  value,
  options,
  placeholder,
  onChange,
}: {
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (val: string) => void;
}) {
  const isPlaceholder = !value || value === placeholder;

  return (
    <div className="flex-1 min-w-0 h-[40px] relative" style={{ borderRadius: "var(--radius)" }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-['Sarabun',sans-serif] w-full h-full appearance-none cursor-pointer pr-[32px] pl-[12px] py-[7px] bg-card"
        style={{
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-normal)",
          color: isPlaceholder ? "var(--muted-foreground)" : "var(--foreground)",
          lineHeight: "18px",
          outline: "none",
        }}
      >
        {placeholder && (
          <option value={placeholder} style={{ color: "var(--muted-foreground)" }}>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown />
      </div>
    </div>
  );
}

/* ─────────── Main modal component ─────────── */

export function EditProgramHealthModal({
  open,
  onClose,
  onSave,
  initialRows,
  initialSetMonthlyGoals = true,
  initialShowSparkLines = false,
}: EditProgramHealthModalProps) {
  const [rows, setRows] = useState<MeasureRow[]>(initialRows ?? DEFAULT_ROWS);
  const [setMonthlyGoals, setSetMonthlyGoals] = useState(initialSetMonthlyGoals);
  const [showSparkLines, setShowSparkLines] = useState(initialShowSparkLines);

  /* Drag state */
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  const updateRow = useCallback((id: string, field: keyof MeasureRow, value: string) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }, []);

  const removeRow = useCallback((id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const handleDragStart = (idx: number) => {
    setDragIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (dragIdx === null || dragIdx === idx) return;
    setRows((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(dragIdx, 1);
      updated.splice(idx, 0, moved);
      return updated;
    });
    setDragIdx(idx);
  };

  const handleDragEnd = () => setDragIdx(null);

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, 0.4)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal container */}
      <div
        className="bg-card flex flex-col w-[650px] max-h-[90vh]"
        style={{
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center gap-[8px] p-[16px] shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* Title & subtitle */}
          <div className="flex-1 flex flex-col gap-[4px] min-w-0">
            <span
              className="font-['Sarabun',sans-serif] text-foreground"
              style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)", lineHeight: "23px" }}
            >
              Edit Program Health Widget
            </span>
            <span
              className="font-['Sarabun',sans-serif] text-muted-foreground"
              style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "18px" }}
            >
              A maximum of 6 measures can be displayed on the dashboard.
            </span>
          </div>

          {/* Close button */}
          <button
            type="button"
            className="shrink-0 size-[32px] flex items-center justify-center cursor-pointer bg-muted"
            style={{
              borderRadius: "9999px",
              border: "none",
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── Body (scrollable) ── */}
        <div className="flex-1 overflow-y-auto px-[16px] py-[16px]">
          {/* Table wrapper */}
          <div
            className="bg-card w-full"
            style={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Table heading row */}
            <div
              className="flex items-center justify-between px-[16px] py-[8px]"
              style={{ borderBottom: "1px solid var(--muted)", minHeight: "40px" }}
            >
              <span
                className="font-['Sarabun',sans-serif] text-foreground overflow-hidden text-ellipsis"
                style={{ fontSize: "var(--text-base)", fontWeight: 700, lineHeight: "20px" }}
              >
                Select measures to display
              </span>
              <div className="flex items-center gap-[8px]">
                <Checkbox
                  checked={setMonthlyGoals}
                  onChange={setSetMonthlyGoals}
                  label="Set monthly goals"
                />
                <Checkbox
                  checked={showSparkLines}
                  onChange={setShowSparkLines}
                  label="Show spark lines"
                />
              </div>
            </div>

            {/* Measure rows */}
            {rows.map((row, idx) => (
              <div
                key={row.id}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragEnd={handleDragEnd}
                className="flex items-center gap-[8px] px-[16px] py-[16px] transition-colors"
                style={{
                  borderBottom: idx < rows.length - 1 ? "1px solid var(--muted)" : "none",
                  background: dragIdx === idx ? "var(--muted)" : "transparent",
                }}
              >
                {/* Remove button */}
                <button
                  type="button"
                  className="shrink-0 size-[16px] flex items-center justify-center cursor-pointer"
                  style={{ background: "none", border: "none", padding: 0 }}
                  onClick={() => removeRow(row.id)}
                  title="Remove measure"
                >
                  <RemoveIcon />
                </button>

                {/* Metric select */}
                <SelectField
                  value={row.metric}
                  options={METRIC_OPTIONS}
                  onChange={(val) => updateRow(row.id, "metric", val)}
                />

                {/* Pivot select */}
                <SelectField
                  value={row.pivot}
                  options={PIVOT_OPTIONS}
                  placeholder="Pivot by"
                  onChange={(val) => updateRow(row.id, "pivot", val)}
                />

                {/* Chart type select */}
                <SelectField
                  value={row.chartType}
                  options={CHART_OPTIONS}
                  onChange={(val) => updateRow(row.id, "chartType", val)}
                />

                {/* Goal input */}
                <div
                  className="shrink-0 w-[80px] h-[40px] relative"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  <input
                    type="text"
                    value={row.goal}
                    onChange={(e) => updateRow(row.id, "goal", e.target.value)}
                    placeholder=" "
                    className="font-['Sarabun',sans-serif] w-full h-full px-[12px] py-[7px] bg-card text-foreground"
                    style={{
                      borderRadius: "var(--radius)",
                      border: "1px solid var(--border)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-normal)",
                      lineHeight: "18px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Drag handle */}
                <button
                  type="button"
                  className="shrink-0 size-[30px] flex items-center justify-center cursor-grab bg-card"
                  style={{ borderRadius: "var(--radius)", border: "none" }}
                  title="Drag to reorder"
                >
                  <DragHandle />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          className="flex items-center px-[16px] py-[8px] shrink-0"
          style={{ borderTop: "1px solid var(--muted)" }}
        >
          <button
            type="button"
            className="h-[40px] min-w-[65px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer transition-colors"
            style={{
              borderRadius: "var(--radius-button)",
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              border: "none",
              lineHeight: "19px",
            }}
            onClick={() => {
              onSave(rows, setMonthlyGoals, showSparkLines);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
