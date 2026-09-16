import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import {
  APP_CHECKS,
  BPA,
  CHECKS,
  PROGRAM_INFO,
  type CheckId,
  type TrafficTab,
  checksForTab,
} from "./tracking-quality/data";
import {
  CheckCard,
  FONT,
  PageChrome,
  PrimaryButton,
  ScoreRing,
  SecondaryButton,
  Slideout,
  StatusBadge,
  VariantSwitcher,
  cardStyle,
  type TqVariant,
} from "./tracking-quality/shared";

const SCORE_SERIES = [42, 45, 48, 50, 52, 55, 54, 56, 57, 58, 58, 58];

const FIX_PRIORITY: { id: CheckId; label: string }[] = [
  { id: "comprehensive_conversion_tracking", label: "P1 · Highest recovery" },
  { id: "server_side_conversions", label: "P2 · Purchase reliability" },
  { id: "custom_first_party_identifier_implemented", label: "P3 · Identity coverage" },
  { id: "consent_mode_implemented", label: "P4 · Confirm when ready" },
];

function TrackingInfoRail() {
  return (
    <aside className="flex flex-col gap-[4px] p-[16px] h-fit" style={cardStyle}>
      <h2
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: 700,
          color: "var(--text-default)",
          marginBottom: 8,
        }}
      >
        Tracking Info
      </h2>
      {PROGRAM_INFO.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-[2px] py-[8px]"
          style={{ borderBottom: "1px solid var(--border-default)" }}
        >
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
            {row.label}
          </span>
          <span
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-default)",
            }}
          >
            {row.value}
          </span>
        </div>
      ))}
    </aside>
  );
}

function ScoreHero({
  intro,
  chartTitle = "Score over time",
}: {
  intro: string;
  chartTitle?: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-[24px] p-[24px]" style={cardStyle}>
      <div className="flex flex-col gap-[12px] flex-1">
        <div className="flex items-center gap-[8px]">
          <h2
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-default)",
            }}
          >
            Tracking quality score
          </h2>
          <StatusBadge status="action_needed" />
        </div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)", maxWidth: 440 }}>
          {intro}
        </p>
        <div className="flex flex-wrap gap-[24px] pt-[8px]">
          <ScoreRing value={BPA.foundationsScore} size={72} label="Foundations" />
          <ScoreRing value={BPA.excellenceScore} size={72} label="Excellence" />
          <ScoreRing value={BPA.score} size={96} label="Overall" />
        </div>
      </div>
      <div className="flex-1 min-h-[160px] flex flex-col gap-[8px]">
        <span
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-default)",
          }}
        >
          {chartTitle}
        </span>
        <div
          className="flex-1 flex items-end gap-[4px] px-[8px] py-[12px]"
          style={{
            background: "var(--background-subdued)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border-default)",
            minHeight: 140,
          }}
        >
          {SCORE_SERIES.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${v}%`,
                background:
                  i === SCORE_SERIES.length - 1
                    ? "var(--button-primary)"
                    : "color-mix(in srgb, var(--button-primary) 35%, transparent)",
              }}
              title={`${v}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeatmapHero() {
  const days = Array.from({ length: 30 }, (_, i) => i);
  const rows = [
    { name: "Conversion ratio", pattern: (i: number) => (i < 18 ? "bad" : i < 24 ? "warn" : "ok") },
    { name: "LP quality", pattern: (i: number) => (i < 10 ? "bad" : i < 20 ? "warn" : "ok") },
    { name: "LP tag present", pattern: () => "ok" as const },
    { name: "Server-side", pattern: (i: number) => (i < 28 ? "bad" : "warn") },
  ];
  const color = { ok: "var(--success-border)", warn: "var(--warning-border)", bad: "var(--error-border)" };
  return (
    <div className="flex flex-col gap-[16px] p-[24px]" style={cardStyle}>
      <div className="flex flex-wrap items-end justify-between gap-[12px]">
        <div>
          <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-default)" }}>
            Attribution pulse · last 30 days
          </h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)", marginTop: 4 }}>
            Estimated GTV at stake this month if Action needed stays open:{" "}
            <strong style={{ color: "var(--error-default)" }}>$18k–$24k</strong>
          </p>
        </div>
        <div className="flex items-center gap-[16px]" style={{ fontSize: "var(--text-sm)" }}>
          <span className="flex items-center gap-[6px]">
            <span className="size-[10px] rounded-full" style={{ background: color.ok }} /> Healthy
          </span>
          <span className="flex items-center gap-[6px]">
            <span className="size-[10px] rounded-full" style={{ background: color.warn }} /> Watch
          </span>
          <span className="flex items-center gap-[6px]">
            <span className="size-[10px] rounded-full" style={{ background: color.bad }} /> Action
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-[12px]">
            <span
              className="w-[140px] shrink-0"
              style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}
            >
              {row.name}
            </span>
            <div className="flex flex-1 gap-[2px]">
              {days.map((d) => (
                <div
                  key={d}
                  className="flex-1 h-[14px] rounded-[2px]"
                  style={{ background: color[row.pattern(d)] }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrackingQualityPage({ variant = "v3" }: { variant?: TqVariant }) {
  const [params, setParams] = useSearchParams();
  const tab = (params.get("tab") === "app" ? "app" : "web") as TrafficTab;
  const openId = params.get("check") as CheckId | null;
  const [localOpen, setLocalOpen] = useState<CheckId | null>(openId);

  const activeId = localOpen ?? openId;
  const checks = useMemo(() => checksForTab(tab), [tab]);
  const foundations = checks.filter((c) => c.section === "foundations");
  const excellence = checks.filter((c) => c.section === "excellence");
  const activeCheck =
    CHECKS.find((c) => c.id === activeId) ||
    APP_CHECKS.find((c) => c.id === activeId) ||
    null;

  const actionNeeded = useMemo(() => {
    const web = CHECKS.filter((c) => c.traffic.includes("web"));
    return FIX_PRIORITY.map((p) => {
      const check = web.find((c) => c.id === p.id);
      return check ? { ...p, check } : null;
    }).filter(Boolean) as { id: CheckId; label: string; check: (typeof CHECKS)[number] }[];
  }, []);

  const laterQueue = useMemo(
    () => CHECKS.filter((c) => c.traffic.includes("web") && !FIX_PRIORITY.some((p) => p.id === c.id)),
    [],
  );

  function setTab(next: TrafficTab) {
    const nextParams = new URLSearchParams(params);
    nextParams.set("tab", next);
    nextParams.delete("check");
    setParams(nextParams);
    setLocalOpen(null);
  }

  function openCheck(id: CheckId) {
    setLocalOpen(id);
    const nextParams = new URLSearchParams(params);
    nextParams.set("check", id);
    setParams(nextParams);
  }

  function closeCheck() {
    setLocalOpen(null);
    const nextParams = new URLSearchParams(params);
    nextParams.delete("check");
    setParams(nextParams);
  }

  const titles: Record<TqVariant, { title: string; subtitle: string; intro: string }> = {
    v3: {
      title: "Tracking quality",
      subtitle: `Score out of 100 · Last checked ${BPA.lastChecked} · ${BPA.freshness}`,
      intro:
        "See what’s clear, what needs action, and what to change — same facts CS and Scoring use.",
    },
    everything: {
      title: "Tracking quality · Full contract",
      subtitle: `All WEB evaluators + setup attributes · Last checked ${BPA.lastChecked}`,
      intro:
        "Docs-complete view: every WEB evaluator, display status, metrics, and Tracking Info attributes (integration type, domain, storage, login).",
    },
    pulse: {
      title: "Tracking pulse",
      subtitle: `Living attribution risk · Last checked ${BPA.lastChecked} · ${BPA.freshness}`,
      intro:
        "Wild take: heat over 30 days and estimated GTV at stake — act on the hottest rows first.",
    },
    "fix-queue": {
      title: "Tracking quality · Fix queue",
      subtitle: `Highest-impact fixes first · Last checked ${BPA.lastChecked}`,
      intro:
        "Do the highest-impact fix first. Queue ordered by estimated attributed conversions recovered — Clear checks stay collapsed.",
    },
  };

  const meta = titles[variant];

  return (
    <div
      className="w-full min-h-full"
      style={{
        fontFamily: FONT,
        color: "var(--text-default)",
        background: "var(--background-default)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-[24px] py-[32px] flex flex-col gap-[24px]">
        <VariantSwitcher />

        <PageChrome title={meta.title} subtitle={meta.subtitle} standing={BPA.standing}>
          <SecondaryButton>Download Assessment</SecondaryButton>
        </PageChrome>

        {variant === "pulse" ? (
          <HeatmapHero />
        ) : (
          <ScoreHero
            intro={meta.intro}
            chartTitle={
              variant === "everything" ? "Score over the last 30 days" : "Score over time"
            }
          />
        )}

        {variant !== "fix-queue" && (
          <div className="flex gap-[8px]">
            {(["web", "app"] as TrafficTab[]).map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className="h-[36px] px-[16px] cursor-pointer capitalize"
                  style={{
                    borderRadius: "var(--radius-button)",
                    border: active
                      ? "1px solid var(--button-primary)"
                      : "1px solid var(--border-default)",
                    background: active ? "var(--button-primary)" : "var(--background-on-surface)",
                    color: active ? "var(--button-primary-foreground)" : "var(--text-default)",
                    fontFamily: FONT,
                    fontWeight: "var(--font-weight-medium)",
                    fontSize: "var(--text-base)",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}

        {variant === "fix-queue" ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <section className="flex flex-col gap-[12px]">
                <div>
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>Do this week</h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Priority Action needed only. Impact estimate on each card.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-[12px]">
                  {actionNeeded.map(({ check, label }) => (
                    <CheckCard
                      key={check.id}
                      check={check}
                      onOpen={openCheck}
                      priorityLabel={label}
                      cta="Chat with Ask Impact →"
                    />
                  ))}
                </div>
              </section>
              <section className="flex flex-col gap-[12px]">
                <div>
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                    Later · when foundations clear
                  </h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Clear / Building data items stay here until you finish the queue.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                  {laterQueue.map((c) => (
                    <CheckCard key={c.id} check={c} onOpen={openCheck} />
                  ))}
                </div>
              </section>
            </div>
            <TrackingInfoRail />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <section className="flex flex-col gap-[12px]">
                <div>
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                    {variant === "everything"
                      ? "Good Tracking Foundations · musts"
                      : "Good Tracking Foundations"}
                  </h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    {variant === "everything"
                      ? "Must-tier WEB checks + eligibility. Nothing deferred to a later slice."
                      : "These essentials set the foundation for reliable tracking."}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                  {foundations.map((c) => (
                    <CheckCard key={c.id} check={c} onOpen={openCheck} />
                  ))}
                </div>
              </section>

              {excellence.length > 0 && (
                <section className="flex flex-col gap-[12px]">
                  <div>
                    <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                      {variant === "everything"
                        ? "Achieve Tracking Excellence · full set"
                        : variant === "pulse"
                          ? "Hot checks"
                          : "Achieve Tracking Excellence"}
                    </h2>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                      {variant === "everything"
                        ? "All excellence evaluators including Tracking domain match, Consent Mode, and storage confirmation gates."
                        : "Once foundations are solid, complete these to strengthen your setup."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                    {(variant === "pulse"
                      ? excellence.filter((c) => c.status !== "clear")
                      : excellence
                    ).map((c) => (
                      <CheckCard key={c.id} check={c} onOpen={openCheck} />
                    ))}
                  </div>
                </section>
              )}

              {variant === "everything" && tab === "web" && (
                <section
                  className="flex flex-col gap-[12px] p-[16px]"
                  style={{
                    ...cardStyle,
                    background: "var(--background-subdued)",
                  }}
                >
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                    Process fields (WEB)
                  </h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Required for pass on related checks — overrides cannot skip storage confirmation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                    {[
                      { label: "has_login", value: "Unknown — review", status: "worth_confirming" as const },
                      {
                        label: "custom_first_party_storage_confirmed",
                        value: "Not confirmed",
                        status: "action_needed" as const,
                      },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-[12px] p-[12px]" style={cardStyle}>
                        <div className="flex flex-col gap-[2px]">
                          <span style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>{row.label}</span>
                          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                            {row.value}
                          </span>
                        </div>
                        <StatusBadge status={row.status} />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
            <TrackingInfoRail />
          </div>
        )}

        {variant === "pulse" && (
          <div className="flex justify-end">
            <PrimaryButton>Chat with Ask Impact about today’s pulse</PrimaryButton>
          </div>
        )}
      </div>

      {activeCheck && <Slideout check={activeCheck} onClose={closeCheck} />}
    </div>
  );
}

export function TrackingQualityEverythingPage() {
  return <TrackingQualityPage variant="everything" />;
}

export function TrackingQualityPulsePage() {
  return <TrackingQualityPage variant="pulse" />;
}

export function TrackingQualityFixQueuePage() {
  return <TrackingQualityPage variant="fix-queue" />;
}