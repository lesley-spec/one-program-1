import { Link, useLocation } from "react-router";
import type { CheckDetail, CheckId, DisplayStatus } from "./data";
import { STATUS_LABEL } from "./data";

export const FONT = "var(--font-family, 'Sarabun', sans-serif)";

export const cardStyle: React.CSSProperties = {
  background: "var(--background-on-surface)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius)",
  fontFamily: FONT,
};

export function statusStyles(status: DisplayStatus): React.CSSProperties {
  switch (status) {
    case "clear":
      return { background: "var(--success-bg)", color: "var(--success-default)" };
    case "action_needed":
      return { background: "var(--error-bg)", color: "var(--error-default)" };
    case "building_data":
      return { background: "var(--info-bg)", color: "var(--info-default)" };
    case "worth_confirming":
      return { background: "var(--warning-bg)", color: "var(--warning-default)" };
    case "not_applicable":
      return {
        background: "var(--background-dimmed, var(--muted))",
        color: "var(--text-subdued, var(--muted-foreground))",
      };
  }
}

export function StatusBadge({ status }: { status: DisplayStatus }) {
  return (
    <span
      className="inline-flex items-center h-[24px] px-[8px] shrink-0"
      style={{
        borderRadius: 4,
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        lineHeight: "15px",
        ...statusStyles(status),
      }}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function StandingBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-[24px] px-[8px] items-center shrink-0"
      style={{
        borderRadius: 4,
        background: "var(--warning-bg)",
        color: "var(--warning-default)",
        fontFamily: FONT,
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
      }}
    >
      {label}
    </span>
  );
}

export function SecondaryButton({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="h-[40px] min-w-[65px] px-[16px] cursor-pointer inline-flex items-center justify-center shrink-0"
      style={{
        borderRadius: "var(--radius-button)",
        border: "1px solid var(--border-default)",
        background: "var(--background-dimmed)",
        color: "var(--text-default)",
        fontFamily: FONT,
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-medium)",
      }}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[40px] min-w-[65px] px-[16px] cursor-pointer inline-flex items-center justify-center shrink-0"
      style={{
        borderRadius: "var(--radius-button)",
        border: "none",
        background: "var(--button-primary)",
        color: "var(--button-primary-foreground)",
        fontFamily: FONT,
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-medium)",
      }}
    >
      {children}
    </button>
  );
}

export function ScoreRing({
  value,
  size = 120,
  label,
}: {
  value: number;
  size?: number;
  label: string;
}) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.min(100, Math.max(0, value)) / 100);
  const color =
    value < 50
      ? "var(--error-default)"
      : value < 90
        ? "var(--warning-default)"
        : "var(--success-default)";
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--border-default, var(--muted))"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: FONT,
            fontSize: size > 80 ? 28 : 18,
            fontWeight: 700,
            color: "var(--text-default, var(--foreground))",
          }}
        >
          {value}
        </div>
      </div>
      <span
        style={{
          fontFamily: FONT,
          fontSize: "var(--text-sm)",
          color: "var(--text-subdued, var(--muted-foreground))",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function CheckCard({
  check,
  onOpen,
  priorityLabel,
  cta = "View details →",
}: {
  check: CheckDetail;
  onOpen: (id: CheckId) => void;
  priorityLabel?: string;
  cta?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(check.id)}
      className="text-left flex flex-col gap-[12px] p-[16px] w-full cursor-pointer"
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--background-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--background-on-surface)";
      }}
    >
      <div className="flex items-start justify-between gap-[12px]">
        <div className="flex flex-col gap-[4px] min-w-0">
          {priorityLabel ? (
            <span
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-interactive)",
              }}
            >
              {priorityLabel}
            </span>
          ) : null}
          <span
            style={{
              fontSize: "var(--text-base)",
              fontWeight: 700,
              lineHeight: "20px",
              color: "var(--text-default, var(--foreground))",
            }}
          >
            {check.title}
          </span>
        </div>
        <StatusBadge status={check.status} />
      </div>
      <p
        style={{
          fontSize: "var(--text-sm)",
          lineHeight: "18px",
          color: "var(--text-subdued, var(--muted-foreground))",
        }}
      >
        {check.summary}
      </p>
      <span
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--text-interactive)",
          fontWeight: "var(--font-weight-medium)",
        }}
      >
        {cta}
      </span>
    </button>
  );
}

export function Slideout({
  check,
  onClose,
}: {
  check: CheckDetail;
  onClose: () => void;
}) {
  return (
    <>
      <button
        type="button"
        aria-label="Close overlay"
        className="fixed inset-0 z-40 cursor-default"
        style={{ background: "var(--background-overlay)" }}
        onClick={onClose}
      />
      <aside
        className="fixed top-0 right-0 z-50 h-full w-full max-w-[517px] overflow-y-auto flex flex-col"
        style={{
          background: "var(--background-on-surface)",
          borderLeft: "1px solid var(--border-default)",
          boxShadow: "var(--elevation-lg)",
          fontFamily: FONT,
          color: "var(--text-default)",
        }}
        role="dialog"
        aria-labelledby="tq-slideout-title"
      >
        <div
          className="flex items-start justify-between gap-[12px] p-[24px]"
          style={{ borderBottom: "1px solid var(--border-default, var(--border))" }}
        >
          <div className="flex flex-col gap-[8px] min-w-0">
            <h2
              id="tq-slideout-title"
              style={{ fontSize: "var(--text-xl)", fontWeight: 700, lineHeight: "30px" }}
            >
              {check.title}
            </h2>
            <StatusBadge status={check.status} />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 size-[32px] flex items-center justify-center cursor-pointer"
            style={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--border-default, var(--border))",
              background: "transparent",
              color: "var(--text-default)",
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-[24px] p-[24px]">
          <p
            style={{
              fontSize: "var(--text-base)",
              lineHeight: "22px",
              color: "var(--text-subdued)",
            }}
          >
            {check.summary}
          </p>

          <section className="flex flex-col gap-[8px]">
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)" }}>
              Why this status
            </h3>
            <p style={{ fontSize: "var(--text-base)", lineHeight: "22px" }}>{check.why}</p>
          </section>

          <section className="flex flex-col gap-[8px]">
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)" }}>
              Evidence
            </h3>
            <div
              className="flex flex-col overflow-hidden"
              style={{
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius)",
              }}
            >
              {check.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="flex justify-between gap-[12px] px-[16px] py-[12px]"
                  style={{
                    borderBottom:
                      i < check.metrics.length - 1
                        ? "1px solid var(--border-default)"
                        : undefined,
                  }}
                >
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    {m.label}
                  </span>
                  <span
                    className="text-right"
                    style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)" }}
                  >
                    {m.value}
                    {m.hint ? (
                      <span style={{ fontWeight: 400, color: "var(--text-subdued)" }}>
                        {" "}
                        · {m.hint}
                      </span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {check.trackers && check.trackers.length > 0 && (
            <section className="flex flex-col gap-[8px]">
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)" }}>
                By action tracker
              </h3>
              <div className="flex flex-col gap-[8px]">
                {check.trackers.map((t) => (
                  <div key={t.name} className="flex flex-col gap-[6px] p-[12px]" style={cardStyle}>
                    <div className="flex items-center justify-between gap-[8px]">
                      <span style={{ fontWeight: 700 }}>{t.name}</span>
                      <StatusBadge status={t.status} />
                    </div>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                      {t.method} · {t.detail}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {check.attributes && (
            <section className="flex flex-col gap-[8px]">
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)" }}>
                Setup context
              </h3>
              {check.attributes.map((a) => (
                <div key={a.label} className="flex justify-between gap-[12px]">
                  <span style={{ color: "var(--text-subdued)", fontSize: "var(--text-sm)" }}>
                    {a.label}
                  </span>
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)" }}>
                    {a.value}
                  </span>
                </div>
              ))}
            </section>
          )}

          <section className="flex flex-col gap-[8px]">
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)" }}>
              What to change
            </h3>
            <ul className="flex flex-col gap-[8px] list-disc pl-[18px]">
              {check.whatToChange.map((line) => (
                <li key={line} style={{ fontSize: "var(--text-base)", lineHeight: "22px" }}>
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="flex flex-col gap-[12px] p-[16px]"
            style={{
              background: "var(--background-subdued)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border-default)",
            }}
          >
            <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700 }}>How to meet</h3>
            <p style={{ fontSize: "var(--text-sm)", lineHeight: "20px" }}>{check.howToMeet}</p>
            <a
              href={check.helpUrl}
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ fontSize: "var(--text-sm)", color: "var(--text-interactive)" }}
            >
              Open Help Center best practices
            </a>
            <PrimaryButton>Chat with Ask Impact</PrimaryButton>
          </section>
        </div>
      </aside>
    </>
  );
}

export type TqVariant = "v3" | "everything" | "pulse" | "fix-queue";

export const VARIANT_META: {
  id: TqVariant;
  path: string;
  label: string;
  short: string;
}[] = [
  { id: "v3", path: "/tracking-quality", label: "V3 · Scorecard", short: "V3" },
  {
    id: "everything",
    path: "/tracking-quality/everything",
    label: "A · Everything",
    short: "A",
  },
  { id: "pulse", path: "/tracking-quality/pulse", label: "B · Pulse", short: "B" },
  {
    id: "fix-queue",
    path: "/tracking-quality/fix-queue",
    label: "C · Fix queue",
    short: "C",
  },
];

export function VariantSwitcher() {
  const { pathname } = useLocation();
  return (
    <div
      className="flex flex-wrap items-center gap-[8px] p-[12px]"
      style={{
        ...cardStyle,
        background: "var(--background-subdued)",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--text-subdued)",
          fontWeight: "var(--font-weight-medium)",
        }}
      >
        Report variations
      </span>
      {VARIANT_META.map((v) => {
        const active =
          v.path === "/tracking-quality"
            ? pathname === "/tracking-quality" || pathname === "/tracking-quality/"
            : pathname.startsWith(v.path);
        return (
          <Link
            key={v.id}
            to={v.path}
            className="h-[32px] px-[12px] inline-flex items-center no-underline"
            style={{
              borderRadius: "var(--radius-button)",
              border: active
                ? "1px solid var(--border-accent)"
                : "1px solid var(--border-default)",
              background: active ? "var(--info-bg)" : "var(--background-on-surface)",
              color: active ? "var(--info-default)" : "var(--text-default)",
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            {v.label}
          </Link>
        );
      })}
    </div>
  );
}

export function PageChrome({
  title,
  subtitle,
  standing,
  children,
}: {
  title: string;
  subtitle: string;
  standing: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-[12px]">
      <div className="flex flex-col gap-[6px]">
        <div
          className="flex items-center gap-[8px]"
          style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}
        >
          <Link to="/" className="underline" style={{ color: "var(--text-interactive)" }}>
            Dashboard
          </Link>
          <span>/</span>
          <span>Tracking quality</span>
        </div>
        <div className="flex flex-wrap items-center gap-[12px]">
          <h1
            style={{
              fontSize: 26,
              fontWeight: 700,
              lineHeight: "33px",
              color: "var(--text-default)",
              fontFamily: FONT,
            }}
          >
            {title}
          </h1>
          <StandingBadge label={standing} />
        </div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
