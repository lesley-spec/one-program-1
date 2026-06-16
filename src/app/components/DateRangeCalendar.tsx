import { useState, useRef, useEffect, useCallback } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  addDays,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  isBefore,
  isAfter,
  subDays,
  startOfDay,
} from "date-fns";

/* ── Types ── */
export interface DateRange {
  from: Date;
  to: Date;
}

interface DateRangeCalendarProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
  children: React.ReactNode;
}

/* ── Preset helpers ── */
const TODAY = startOfDay(new Date());

const PRESETS: { label: string; range: () => DateRange }[] = [
  { label: "Today", range: () => ({ from: TODAY, to: TODAY }) },
  { label: "Yesterday", range: () => ({ from: subDays(TODAY, 1), to: subDays(TODAY, 1) }) },
  { label: "Last 7 days", range: () => ({ from: subDays(TODAY, 6), to: TODAY }) },
  { label: "Last 30 days", range: () => ({ from: subDays(TODAY, 29), to: TODAY }) },
  {
    label: "This month",
    range: () => ({ from: startOfMonth(TODAY), to: endOfMonth(TODAY) }),
  },
  {
    label: "Last month",
    range: () => {
      const prev = subMonths(TODAY, 1);
      return { from: startOfMonth(prev), to: endOfMonth(prev) };
    },
  },
];

/* ── Utility: build calendar grid ── */
function getCalendarDays(month: Date): Date[] {
  const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: 0 });
  const days: Date[] = [];
  let d = start;
  while (!isAfter(d, end)) {
    days.push(d);
    d = addDays(d, 1);
  }
  return days;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const FONT = "'Sarabun', sans-serif";

/* ── Component ── */
export function DateRangeCalendar({ value, onChange, children }: DateRangeCalendarProps) {
  const [open, setOpen] = useState(false);
  const [leftMonth, setLeftMonth] = useState(startOfMonth(value.from));
  const [selecting, setSelecting] = useState<{ from: Date; to: Date | null } | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSelecting(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  /* Sync left month when value changes externally */
  useEffect(() => {
    setLeftMonth(startOfMonth(value.from));
  }, [value.from]);

  const rightMonth = addMonths(leftMonth, 1);

  const handleDayClick = useCallback((day: Date) => {
    setActivePreset(null);
    if (!selecting || (selecting.from && selecting.to)) {
      setSelecting({ from: day, to: null });
    } else {
      const from = selecting.from;
      if (isBefore(day, from)) {
        setSelecting({ from: day, to: from });
      } else {
        setSelecting({ from, to: day });
      }
    }
  }, [selecting]);

  const handlePreset = useCallback((preset: typeof PRESETS[number]) => {
    const range = preset.range();
    setSelecting({ from: range.from, to: range.to });
    setActivePreset(preset.label);
    setLeftMonth(startOfMonth(range.from));
  }, []);

  const handleApply = useCallback(() => {
    if (selecting?.from && selecting?.to) {
      onChange({ from: selecting.from, to: selecting.to });
      setOpen(false);
      setSelecting(null);
    }
  }, [selecting, onChange]);

  const handleCancel = useCallback(() => {
    setOpen(false);
    setSelecting(null);
    setActivePreset(null);
  }, []);

  /* Determine displayed range (selecting state > committed value) */
  const displayFrom = selecting?.from ?? value.from;
  const displayTo = selecting?.to ?? (selecting?.from ? null : value.to);

  const isInRange = (day: Date) => {
    if (!displayFrom || !displayTo) return false;
    const start = isBefore(displayFrom, displayTo) ? displayFrom : displayTo;
    const end = isAfter(displayFrom, displayTo) ? displayFrom : displayTo;
    return isWithinInterval(day, { start, end });
  };

  const isRangeStart = (day: Date) => displayFrom && isSameDay(day, displayFrom);
  const isRangeEnd = (day: Date) => displayTo && isSameDay(day, displayTo);

  /* ── Render a single month grid ── */
  function renderMonth(month: Date) {
    const days = getCalendarDays(month);
    return (
      <div className="flex flex-col gap-[4px]">
        {/* Month header */}
        <div className="flex items-center justify-center h-[32px]">
          <span
            className="font-['Sarabun',sans-serif]"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--foreground)",
              lineHeight: "18px",
            }}
          >
            {format(month, "MMMM yyyy")}
          </span>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-0">
          {WEEKDAYS.map((wd) => (
            <div
              key={wd}
              className="flex items-center justify-center h-[28px] font-['Sarabun',sans-serif]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--muted-foreground)",
              }}
            >
              {wd}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-0">
          {days.map((day, idx) => {
            const inMonth = isSameMonth(day, month);
            const rangeStart = isRangeStart(day);
            const rangeEnd = isRangeEnd(day);
            const inRange = isInRange(day);
            const isEndpoint = rangeStart || rangeEnd;

            return (
              <button
                key={idx}
                className="relative flex items-center justify-center h-[32px] cursor-pointer font-['Sarabun',sans-serif] transition-colors"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: isEndpoint ? 700 : "var(--font-weight-normal)",
                  color: !inMonth
                    ? "var(--muted-foreground)"
                    : isEndpoint
                    ? "var(--accent-foreground)"
                    : "var(--foreground)",
                  background: isEndpoint
                    ? "var(--accent)"
                    : inRange
                    ? "var(--sidebar-accent)"
                    : "transparent",
                  borderRadius: rangeStart && !rangeEnd
                    ? "var(--radius) 0 0 var(--radius)"
                    : rangeEnd && !rangeStart
                    ? "0 var(--radius) var(--radius) 0"
                    : rangeStart && rangeEnd
                    ? "var(--radius)"
                    : "0",
                  border: "none",
                  padding: 0,
                  lineHeight: "18px",
                  opacity: inMonth ? 1 : 0.4,
                }}
                onClick={() => handleDayClick(day)}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative inline-flex">
      {/* Trigger */}
      <div
        className="flex items-center gap-[8px] cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        {children}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 mt-[8px] z-50 flex bg-card"
          style={{
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            boxShadow: "var(--elevation-sm)",
            minWidth: "620px",
          }}
        >
          {/* Left: Presets */}
          <div
            className="flex flex-col py-[8px] shrink-0"
            style={{
              borderRight: "1px solid var(--border)",
              width: "160px",
            }}
          >
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                className="flex items-center h-[36px] px-[16px] cursor-pointer font-['Sarabun',sans-serif] transition-colors text-left"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight:
                    activePreset === preset.label
                      ? "var(--font-weight-medium)"
                      : "var(--font-weight-normal)",
                  color:
                    activePreset === preset.label
                      ? "var(--accent)"
                      : "var(--foreground)",
                  background:
                    activePreset === preset.label
                      ? "var(--sidebar-accent)"
                      : "transparent",
                  border: "none",
                  lineHeight: "18px",
                }}
                onClick={() => handlePreset(preset)}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Right: Calendars + actions */}
          <div className="flex flex-col flex-1">
            {/* Navigation + two months */}
            <div className="flex items-start gap-[16px] p-[16px]">
              {/* Prev arrow */}
              <button
                className="shrink-0 flex items-center justify-center size-[28px] cursor-pointer mt-[2px]"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
                onClick={() => setLeftMonth((m) => subMonths(m, 1))}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M7.5 2.5L4 6L7.5 9.5"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Left month */}
              <div className="flex-1">{renderMonth(leftMonth)}</div>

              {/* Right month */}
              <div className="flex-1">{renderMonth(rightMonth)}</div>

              {/* Next arrow */}
              <button
                className="shrink-0 flex items-center justify-center size-[28px] cursor-pointer mt-[2px]"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
                onClick={() => setLeftMonth((m) => addMonths(m, 1))}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 2.5L8 6L4.5 9.5"
                    stroke="var(--foreground)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between px-[16px] py-[12px]"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {/* Selected range display */}
              <span
                className="font-['Sarabun',sans-serif]"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--muted-foreground)",
                  lineHeight: "18px",
                }}
              >
                {displayFrom ? format(displayFrom, "MMM dd, yyyy") : "Start date"}
                {" - "}
                {displayTo ? format(displayTo, "MMM dd, yyyy") : "End date"}
              </span>

              {/* Action buttons */}
              <div className="flex items-center gap-[8px]">
                <button
                  className="h-[32px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer"
                  style={{
                    borderRadius: "var(--radius-button)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    background: "var(--card)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    lineHeight: "18px",
                  }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="h-[32px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer transition-colors"
                  style={{
                    borderRadius: "var(--radius-button)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    background:
                      selecting?.from && selecting?.to
                        ? "var(--button-primary)"
                        : "var(--button-disabled)",
                    color:
                      selecting?.from && selecting?.to
                        ? "var(--button-primary-foreground)"
                        : "var(--button-disabled-foreground)",
                    border: "none",
                    lineHeight: "18px",
                    cursor: selecting?.from && selecting?.to ? "pointer" : "default",
                  }}
                  onClick={handleApply}
                  disabled={!selecting?.from || !selecting?.to}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
