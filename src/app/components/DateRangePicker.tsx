import { useState, useRef, useEffect, useCallback } from "react";

const FONT = "'Sarabun', sans-serif";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/* ── Preset ranges ── */
const PRESETS = [
  { label: "Today", getRange: () => { const d = new Date(); return [d, d] as [Date, Date]; } },
  { label: "Yesterday", getRange: () => { const d = new Date(); d.setDate(d.getDate() - 1); return [d, d] as [Date, Date]; } },
  { label: "Last 7 days", getRange: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 6); return [s, e] as [Date, Date]; } },
  { label: "Last 14 days", getRange: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 13); return [s, e] as [Date, Date]; } },
  { label: "Last 30 days", getRange: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 29); return [s, e] as [Date, Date]; } },
  { label: "This month", getRange: () => { const now = new Date(); return [new Date(now.getFullYear(), now.getMonth(), 1), now] as [Date, Date]; } },
  { label: "Last month", getRange: () => { const now = new Date(); const s = new Date(now.getFullYear(), now.getMonth() - 1, 1); const e = new Date(now.getFullYear(), now.getMonth(), 0); return [s, e] as [Date, Date]; } },
  { label: "This quarter", getRange: () => { const now = new Date(); const q = Math.floor(now.getMonth() / 3); return [new Date(now.getFullYear(), q * 3, 1), now] as [Date, Date]; } },
];

/* ── Helpers ── */
function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function inRange(d: Date, s: Date, e: Date) {
  const t = d.getTime(), st = s.getTime(), et = e.getTime();
  return t >= Math.min(st, et) && t <= Math.max(st, et);
}
function fmt(d: Date) {
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
}
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

/* ════════════════════════════════════════════════════════════
   DateRangePicker
   ════════════════════════════════════════════════════════════ */

export interface DateRange {
  start: Date;
  end: Date;
}

interface Props {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

export function DateRangePicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Two‑calendar state: left shows start-month, right shows start+1 month */
  const [viewYear, setViewYear] = useState(value.start.getFullYear());
  const [viewMonth, setViewMonth] = useState(value.start.getMonth());

  /* Selection state (temporary while picking) */
  const [picking, setPicking] = useState<"idle" | "start">("idle");
  const [tempStart, setTempStart] = useState<Date>(value.start);
  const [tempEnd, setTempEnd] = useState<Date>(value.end);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const prevMonth = useCallback(() => {
    setViewMonth((m) => { if (m === 0) { setViewYear((y) => y - 1); return 11; } return m - 1; });
  }, []);
  const nextMonth = useCallback(() => {
    setViewMonth((m) => { if (m === 11) { setViewYear((y) => y + 1); return 0; } return m + 1; });
  }, []);

  function handleDayClick(d: Date) {
    if (picking === "idle") {
      setTempStart(d);
      setTempEnd(d);
      setPicking("start");
    } else {
      const [s, e] = d.getTime() < tempStart.getTime() ? [d, tempStart] : [tempStart, d];
      setTempStart(s);
      setTempEnd(e);
      setPicking("idle");
      onChange({ start: s, end: e });
    }
  }

  function applyPreset(pr: typeof PRESETS[number]) {
    const [s, e] = pr.getRange();
    setTempStart(s);
    setTempEnd(e);
    setViewYear(s.getFullYear());
    setViewMonth(s.getMonth());
    setPicking("idle");
    onChange({ start: s, end: e });
  }

  /* Determine effective highlight range */
  const hlStart = picking === "start" && hoverDate
    ? (hoverDate.getTime() < tempStart.getTime() ? hoverDate : tempStart)
    : tempStart;
  const hlEnd = picking === "start" && hoverDate
    ? (hoverDate.getTime() < tempStart.getTime() ? tempStart : hoverDate)
    : tempEnd;

  const rightMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const rightYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  /* ── Render a single calendar grid ── */
  function renderCalendar(year: number, month: number) {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    const today = new Date();

    return (
      <div className="flex flex-col" style={{ width: 224 }}>
        {/* Month label */}
        <div className="flex items-center justify-center h-[28px]">
          <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)" }}>
            {MONTHS[month]} {year}
          </span>
        </div>

        {/* Day-of-week headers */}
        <div className="grid grid-cols-7 gap-0">
          {DAYS.map((d) => (
            <div key={d} className="flex items-center justify-center h-[28px]">
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)" }}>{d}</span>
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-0">
          {cells.map((date, idx) => {
            if (!date) return <div key={`e${idx}`} className="h-[32px]" />;
            const isStart = sameDay(date, hlStart);
            const isEnd = sameDay(date, hlEnd);
            const isInRange = inRange(date, hlStart, hlEnd);
            const isToday = sameDay(date, today);
            const isEndpoint = isStart || isEnd;

            let bg = "transparent";
            let fg = "var(--foreground)";
            let borderRad = "0";

            if (isEndpoint) {
              bg = "var(--accent)";
              fg = "var(--accent-foreground)";
              borderRad = "var(--radius)";
            } else if (isInRange) {
              bg = "var(--sidebar-accent)";
              fg = "var(--sidebar-accent-foreground)";
            }

            return (
              <div
                key={idx}
                className="flex items-center justify-center h-[32px] cursor-pointer transition-colors"
                style={{ background: isInRange && !isEndpoint ? bg : "transparent" }}
              >
                <div
                  className="flex items-center justify-center size-[28px] transition-all"
                  style={{
                    background: isEndpoint ? bg : "transparent",
                    color: fg,
                    borderRadius: borderRad || "var(--radius)",
                    fontFamily: FONT,
                    fontSize: "var(--text-sm)",
                    fontWeight: isEndpoint ? 700 : isToday ? 600 : 400,
                    outline: isToday && !isEndpoint ? "1px solid var(--accent)" : "none",
                    outlineOffset: "-1px",
                  }}
                  onClick={() => handleDayClick(date)}
                  onMouseEnter={() => { if (picking === "start") setHoverDate(date); }}
                  onMouseLeave={() => setHoverDate(null)}
                >
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        className="flex items-center gap-[8px] h-[34px] px-[12px] cursor-pointer transition-colors"
        style={{
          borderRadius: "var(--radius)",
          border: open ? "1px solid var(--accent)" : "1px solid var(--border)",
          background: "var(--card)",
          width: 220,
        }}
        onClick={() => setOpen(!open)}
      >
        <svg className="size-[14px] shrink-0" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="2" stroke={open ? "var(--accent)" : "var(--muted-foreground)"} strokeWidth="1.2" />
          <path d="M2 6H14" stroke={open ? "var(--accent)" : "var(--muted-foreground)"} strokeWidth="1" />
          <path d="M5 1V3M11 1V3" stroke={open ? "var(--accent)" : "var(--muted-foreground)"} strokeWidth="1" strokeLinecap="round" />
        </svg>
        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: open ? "var(--accent)" : "var(--muted-foreground)" }}>
          {sameDay(value.start, value.end) ? fmt(value.start) : `${fmt(value.start)} – ${fmt(value.end)}`}
        </span>
      </button>

      {/* Dropdown popover */}
      {open && (
        <div
          className="absolute top-[40px] left-0 z-50 flex"
          style={{
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            background: "var(--card)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
          }}
        >
          {/* Presets sidebar */}
          <div className="flex flex-col py-[10px] px-[6px]" style={{ borderRight: "1px solid var(--border)", width: 140 }}>
            <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--muted-foreground)", padding: "4px 8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Presets</span>
            {PRESETS.map((pr) => (
              <button
                key={pr.label}
                className="text-left px-[8px] py-[5px] cursor-pointer transition-colors rounded-[4px]"
                style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)", background: "none", border: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                onClick={() => applyPreset(pr)}
              >
                {pr.label}
              </button>
            ))}
          </div>

          {/* Calendars */}
          <div className="flex flex-col p-[12px]">
            <div className="flex items-center justify-between mb-[4px]">
              <button
                className="flex items-center justify-center size-[28px] cursor-pointer transition-colors rounded-[4px]"
                style={{ background: "none", border: "none", color: "var(--foreground)", fontFamily: FONT, fontSize: "16px" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                onClick={prevMonth}
              >
                ‹
              </button>
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)" }}>
                {picking === "start" ? "Select end date" : "Select start date"}
              </span>
              <button
                className="flex items-center justify-center size-[28px] cursor-pointer transition-colors rounded-[4px]"
                style={{ background: "none", border: "none", color: "var(--foreground)", fontFamily: FONT, fontSize: "16px" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                onClick={nextMonth}
              >
                ›
              </button>
            </div>

            <div className="flex gap-[16px]">
              {renderCalendar(viewYear, viewMonth)}
              {renderCalendar(rightYear, rightMonth)}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-[10px] pt-[10px]" style={{ borderTop: "1px solid var(--border)" }}>
              <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>
                {fmt(tempStart)} – {fmt(tempEnd)}
              </span>
              <div className="flex gap-[6px]">
                <button
                  className="h-[28px] px-[12px] cursor-pointer transition-colors"
                  style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", border: "1px solid var(--border)", background: "var(--card)", color: "var(--foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card)")}
                  onClick={() => { setTempStart(value.start); setTempEnd(value.end); setPicking("idle"); setOpen(false); }}
                >
                  Cancel
                </button>
                <button
                  className="h-[28px] px-[12px] cursor-pointer transition-colors"
                  style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                  onClick={() => { onChange({ start: tempStart, end: tempEnd }); setOpen(false); }}
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
