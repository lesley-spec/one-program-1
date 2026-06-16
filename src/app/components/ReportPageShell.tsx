import { type ReactNode } from "react";

/* ─── Shared tokens for all report pages ─── */

const TOOLTIP_STYLE = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  fontFamily: "'Sarabun', sans-serif",
  fontSize: "12px",
  boxShadow: "var(--elevation-sm)",
};

const AXIS_TICK = {
  fill: "var(--muted-foreground)",
  fontFamily: "'Sarabun', sans-serif",
  fontSize: 11,
};

/* Export chart tokens so pages can import them */
export const chartTokens = {
  tooltipStyle: TOOLTIP_STYLE,
  tooltipLabelStyle: { color: "var(--foreground)", fontWeight: 600, fontFamily: "'Sarabun', sans-serif" },
  tooltipItemStyle: { color: "var(--foreground)", fontFamily: "'Sarabun', sans-serif" },
  axisTick: AXIS_TICK,
  axisLine: { stroke: "var(--border)" },
  gridStroke: "var(--border)",
  gridDash: "3 3",
  legendStyle: { fontFamily: "'Sarabun', sans-serif", fontSize: "11px", color: "var(--muted-foreground)" },
};

/* ─── Search Input ─── */
export function ReportSearchInput({
  value,
  onChange,
  placeholder = "Search...",
  width = "260px",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  width?: string;
}) {
  return (
    <div
      className="flex gap-[8px] h-[36px] items-center px-[10px] bg-card"
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        width,
      }}
    >
      <svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 16 16">
        <circle cx="7" cy="7" r="5.5" stroke="var(--muted-foreground)" strokeWidth="1.5" />
        <path d="M11 11L14.5 14.5" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        className="flex-1 bg-transparent outline-none font-['Sarabun',sans-serif] text-foreground placeholder:text-muted-foreground"
        style={{ fontSize: "var(--text-base)", fontWeight: 400 }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/* ─── Filter Select ─── */
export function ReportSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      className="h-[36px] px-[14px] bg-card font-['Sarabun',sans-serif] text-foreground cursor-pointer"
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        fontSize: "var(--text-base)",
        fontWeight: 600,
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

/* ─── Stat Card ─── */
export function StatCard({
  label,
  value,
  accentColor,
}: {
  label: string;
  value: string;
  accentColor?: string;
}) {
  return (
    <div
      className="flex-1 flex flex-col gap-[6px] p-[16px] bg-card relative overflow-hidden"
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
      }}
    >
      {accentColor && (
        <span
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: accentColor, borderRadius: "var(--radius) 0 0 var(--radius)" }}
        />
      )}
      <span
        className="font-['Sarabun',sans-serif] text-muted-foreground"
        style={{ fontSize: "var(--text-sm)", fontWeight: 400, lineHeight: "1.4" }}
      >
        {label}
      </span>
      <span
        className="font-['Sarabun',sans-serif] text-foreground"
        style={{ fontSize: "var(--text-lg)", fontWeight: 700, lineHeight: "1.3" }}
      >
        {value}
      </span>
    </div>
  );
}

/* ─── Status Badge ─── */
export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; text: string }> = {
    Active: { bg: "var(--positive-bg)", text: "var(--positive)" },
    Paused: { bg: "var(--muted)", text: "var(--muted-foreground)" },
    Pending: { bg: "var(--caution-bg)", text: "var(--caution)" },
  };
  const s = styles[status] || styles.Active;
  return (
    <span
      className="inline-flex items-center px-[10px] h-[22px] font-['Sarabun',sans-serif]"
      style={{
        borderRadius: "var(--radius-button)",
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        lineHeight: "1",
        background: s.bg,
        color: s.text,
      }}
    >
      {status}
    </span>
  );
}

/* ─── Chart Card Wrapper ─── */
export function ChartCard({
  title,
  children,
  actions,
}: {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div
      className="w-full bg-card"
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
      }}
    >
      <div
        className="flex items-center justify-between px-[20px] py-[14px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="font-['Sarabun',sans-serif] text-foreground"
          style={{ fontWeight: 600, fontSize: "var(--text-base)", lineHeight: "1.4" }}
        >
          {title}
        </span>
        {actions}
      </div>
      <div className="px-[20px] py-[16px]">{children}</div>
    </div>
  );
}

/* ─── Table Wrapper ─── */
export function ReportTableCard({
  title,
  count,
  countLabel,
  children,
}: {
  title: string;
  count?: number;
  countLabel?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="w-full bg-card overflow-hidden"
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
      }}
    >
      <div
        className="flex items-center justify-between px-[20px] py-[14px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="font-['Sarabun',sans-serif] text-foreground"
          style={{ fontWeight: 600, fontSize: "var(--text-base)", lineHeight: "1.4" }}
        >
          {title}
        </span>
        {count != null && (
          <span
            className="font-['Sarabun',sans-serif] text-muted-foreground"
            style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}
          >
            {count} {countLabel || "rows"}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/* ─── Table Head Cell ─── */
export function Th({ children, align }: { children: ReactNode; align?: "left" | "right" }) {
  return (
    <th
      className="px-[16px] py-[10px] font-['Sarabun',sans-serif] text-muted-foreground"
      style={{
        fontWeight: 600,
        fontSize: "var(--text-sm)",
        lineHeight: "1.4",
        textAlign: align || "left",
      }}
    >
      {children}
    </th>
  );
}

/* ─── Table Data Cell ─── */
export function Td({
  children,
  bold,
  muted,
  align,
}: {
  children: ReactNode;
  bold?: boolean;
  muted?: boolean;
  align?: "left" | "right";
}) {
  return (
    <td
      className={`px-[16px] py-[12px] font-['Sarabun',sans-serif] ${muted ? "text-muted-foreground" : "text-foreground"}`}
      style={{
        fontWeight: bold ? 600 : 400,
        fontSize: "var(--text-base)",
        lineHeight: "1.4",
        textAlign: align || "left",
      }}
    >
      {children}
    </td>
  );
}

/* ─── Page Shell ─── */
export function ReportPageShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[20px] px-[24px] py-[24px] w-full">
      {/* Header */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-[4px]">
          <h1
            className="text-foreground font-['Sarabun',sans-serif]"
            style={{ fontWeight: 700, fontSize: "var(--text-xl)", lineHeight: 1.3 }}
          >
            {title}
          </h1>
          {subtitle && (
            <span
              className="font-['Sarabun',sans-serif] text-muted-foreground"
              style={{ fontSize: "var(--text-base)", fontWeight: 400, lineHeight: "1.4" }}
            >
              {subtitle}
            </span>
          )}
        </div>
        {actions && <div className="flex items-center gap-[10px]">{actions}</div>}
      </div>
      {children}
    </div>
  );
}