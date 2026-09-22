import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import {
  APP_CHECKS,
  BPA,
  CHECKS,
  MVP_FOCUS,
  MVP_ON_TRACK,
  PROGRAM_INFO,
  type CheckId,
  type TrafficTab,
  checksForTab,
} from "./tracking-quality/data";
import {
  AskImpactPanel,
  CheckCard,
  CriteriaActionCard,
  FONT,
  OnTrackTable,
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

const SCORE_SERIES = [42, 45, 48, 50, 52, 55, 54, 56, 57, 50, 50, 50];

const FIX_PRIORITY: { id: CheckId; label: string; detail: string }[] = [
  {
    id: "comprehensive_conversion_tracking",
    label: "P1 · Highest recovery",
    detail:
      "Actions per conversion are running high. Aim for a ratio below 0.6. Fixing this could recover ~40–55 attributed conversions. Chat with Ask Impact →",
  },
  {
    id: "server_side_conversions",
    label: "P2 · Purchase reliability",
    detail:
      "Send Purchase via API or batch — pixel-only still posts on some trackers. Chat with Ask Impact →",
  },
  {
    id: "custom_first_party_identifier_implemented",
    label: "P3 · Identity coverage",
    detail:
      "Custom profile ID fill rate 61% (need ≥90%). Storage confirmation still required for pass. Chat with Ask Impact →",
  },
  {
    id: "consent_mode_implemented",
    label: "P4 · Confirm when ready",
    detail:
      "Confirm Consent Mode is configured if you sell in EEA/UK/CH. Chat with Ask Impact →",
  },
];

const LATER_DETAILS: Partial<Record<CheckId, string>> = {
  landing_page_tracking:
    "Landing-page tag is on 3.2% of clicks — above the 1% target. No change needed.",
  verified_landing_page_tracking_quality:
    "Building data — need ≥1,000 clicks before scoring quality.",
  cross_device_supported:
    "Clear at 34% conversion identity (≥20%). Has login still unknown for page-half review.",
  tracking_domain_match:
    "Custom tracking domain aligns with your landing page. As-of 12 Jun 2026.",
};

function TrackingInfoRail({
  tab,
  onTab,
}: {
  tab: TrafficTab;
  onTab: (t: TrafficTab) => void;
}) {
  return (
    <aside className="flex flex-col gap-[4px] p-[16px] h-fit" style={cardStyle}>
      <div className="flex gap-[8px] mb-[8px]">
        {(["web", "app"] as TrafficTab[]).map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => onTab(t)}
              className="h-[32px] px-[12px] cursor-pointer capitalize"
              style={{
                borderRadius: "var(--radius-button)",
                border: active
                  ? "1px solid var(--button-primary)"
                  : "1px solid var(--border-default)",
                background: active ? "var(--button-primary)" : "var(--background-on-surface)",
                color: active ? "var(--button-primary-foreground)" : "var(--text-default)",
                fontFamily: FONT,
                fontWeight: "var(--font-weight-medium)",
                fontSize: "var(--text-sm)",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
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

function MvpScoreHero() {
  return (
    <div className="flex flex-col lg:flex-row gap-[24px] p-[24px] items-center" style={cardStyle}>
      <div className="flex items-center gap-[20px] flex-1">
        <ScoreRing value={BPA.score} size={88} label="" />
        <div className="flex flex-col gap-[8px] min-w-0">
          <div className="flex flex-wrap items-center gap-[8px]">
            <h2
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                color: "var(--text-default)",
              }}
            >
              Tracking quality
            </h2>
            <span
              className="inline-flex items-center h-[24px] px-[8px]"
              style={{
                borderRadius: 4,
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                background: "var(--warning-bg)",
                color: "var(--warning-default)",
              }}
            >
              Needs Improvement
            </span>
          </div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-default)", margin: 0 }}>
            P1 · Comprehensive conversion tracking
          </p>
          <p style={{ fontSize: 14, color: "var(--text-subdued)", margin: 0, maxWidth: 520 }}>
            Purchase + Lead gen above partnership bar (84%, 99%). Remove conditional rules → unlocks
            Good Tracking Foundations.
          </p>
        </div>
      </div>
      <div
        className="flex gap-[16px] text-[12px]"
        style={{ color: "var(--text-subdued)" }}
      >
        <span>▲ 0–49</span>
        <span>■ 50–89</span>
        <span>● 90–100</span>
      </div>
    </div>
  );
}

function ScoreHero({
  intro,
  chartTitle = "Score over time",
  scoreBadge = "action_needed",
}: {
  intro: string;
  chartTitle?: string;
  scoreBadge?: "action_needed" | "needs_improvement";
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
          {scoreBadge === "needs_improvement" ? (
            <span
              className="inline-flex items-center h-[24px] px-[8px] shrink-0"
              style={{
                borderRadius: 4,
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: "15px",
                background: "var(--warning-bg)",
                color: "var(--warning-default)",
              }}
            >
              Needs improvement
            </span>
          ) : (
            <StatusBadge status="action_needed" />
          )}
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

/** V4 Alex — 30-day check history (monitor + act) */
function CheckHistory() {
  const days = Array.from({ length: 30 }, (_, i) => i);
  const rows: {
    name: string;
    meta: string;
    pattern: (i: number) => "ok" | "warn" | "bad";
  }[] = [
    {
      name: "Conversion ratio below threshold",
      meta: "11/30 pass · improved",
      pattern: (i) => (i < 12 ? "bad" : i < 19 ? "warn" : "ok"),
    },
    {
      name: "LP quality score: 58%",
      meta: "4/30 pass · improving",
      pattern: (i) => (i < 20 ? "bad" : i < 26 ? "warn" : "ok"),
    },
    {
      name: "Impact tag on landing pages",
      meta: "30/30 pass · stable",
      pattern: () => "ok",
    },
  ];
  const color = {
    ok: "var(--success-border)",
    warn: "var(--warning-border)",
    bad: "var(--error-border)",
  };
  return (
    <div className="flex flex-col gap-[16px] p-[24px]" style={cardStyle}>
      <div className="flex flex-wrap items-end justify-between gap-[12px]">
        <div>
          <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-default)" }}>
            Check history
          </h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)", marginTop: 4 }}>
            Last 30 days · 1 block per daily scan
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
            Needed
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        {rows.map((row) => (
          <div key={row.name} className="flex flex-col gap-[6px]">
            <div className="flex flex-wrap items-baseline justify-between gap-[8px]">
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-default)" }}>
                {row.name}
              </span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>{row.meta}</span>
            </div>
            <div className="flex gap-[2px]">
              {days.map((d) => (
                <div
                  key={d}
                  className="flex-1 h-[12px] rounded-[2px]"
                  style={{ background: color[row.pattern(d)] }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-between"
        style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}
      >
        <span>4 Aug</span>
        <span>11 Aug</span>
        <span>18 Aug</span>
        <span>25 Aug</span>
        <span>2 Sep</span>
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

export function TrackingQualityPage({ variant = "mvp" }: { variant?: TqVariant }) {
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
    }).filter(Boolean) as {
      id: CheckId;
      label: string;
      detail: string;
      check: (typeof CHECKS)[number];
    }[];
  }, []);

  const laterQueue = useMemo(
    () => CHECKS.filter((c) => c.traffic.includes("web") && !FIX_PRIORITY.some((p) => p.id === c.id)),
    [],
  );

  const mvpFocus = useMemo(() => {
    const web = CHECKS.filter((c) => c.traffic.includes("web"));
    return MVP_FOCUS.map((p) => {
      const check = web.find((c) => c.id === p.id);
      return check ? { ...p, check } : null;
    }).filter(Boolean) as {
      id: CheckId;
      priorityLabel: string;
      detail: string;
      check: (typeof CHECKS)[number];
    }[];
  }, []);

  const mvpOnTrack = useMemo(
    () => CHECKS.filter((c) => MVP_ON_TRACK.includes(c.id)),
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
    mvp: {
      title: "Tracking quality",
      subtitle: `Score out of 100 · Last checked ${BPA.lastChecked} · ${BPA.freshness}`,
      intro:
        "Priority fixes first. Clear checks stay collapsed — open a card for why, what to change, and Ask Impact.",
    },
    v3: {
      title: "Tracking quality",
      subtitle: `Score out of 100 · Last checked ${BPA.lastChecked} · ${BPA.freshness}`,
      intro:
        "See what’s clear, what needs action, and what to change — same facts CS and Scoring use.",
    },
    v4: {
      title: "Tracking quality",
      subtitle: `Last checked ${BPA.lastChecked} · ${BPA.freshness} · One screen to monitor and act`,
      intro:
        "Monitor health over time and act on what matters today — impact-led next steps, not a full audit. Clear checks stay quiet; Action needed leads.",
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

        {variant === "mvp" ? (
          <MvpScoreHero />
        ) : variant === "pulse" ? (
          <HeatmapHero />
        ) : (
          <ScoreHero
            intro={meta.intro}
            chartTitle={
              variant === "v4" || variant === "everything" || variant === "fix-queue"
                ? "Score over the last 30 days"
                : "Score over time"
            }
            scoreBadge={variant === "fix-queue" ? "needs_improvement" : "action_needed"}
          />
        )}

        {variant === "v4" && <CheckHistory />}

        {variant !== "fix-queue" && variant !== "mvp" && (
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

        {variant === "mvp" ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <section className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                    Focus on these first
                  </h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Priority Action needed only. Open a card for why, what to change, and Ask Impact.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  {mvpFocus.map(({ check, priorityLabel, detail }) => (
                    <CriteriaActionCard
                      key={check.id}
                      check={check}
                      onOpen={openCheck}
                      priorityLabel={priorityLabel}
                      detail={detail}
                    />
                  ))}
                </div>
              </section>
              <section className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>On track</h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Clear / Building data / Worth confirming — review when foundations clear.
                  </p>
                </div>
                <OnTrackTable checks={mvpOnTrack} onOpen={openCheck} />
              </section>
            </div>
            <div className="flex flex-col gap-[16px]">
              <TrackingInfoRail tab={tab} onTab={setTab} />
              <AskImpactPanel />
            </div>
          </div>
        ) : variant === "fix-queue" ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <section className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>Do this week</h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Priority Action needed only. Impact estimate on each card.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  {actionNeeded.map(({ check, label, detail }) => (
                    <CriteriaActionCard
                      key={check.id}
                      check={check}
                      onOpen={openCheck}
                      priorityLabel={label}
                      detail={detail}
                    />
                  ))}
                </div>
              </section>
              <section className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                    Later · when foundations clear
                  </h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-subdued)" }}>
                    Clear / Building data items stay here until you finish the queue.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  {laterQueue.map((c) => (
                    <CriteriaActionCard
                      key={c.id}
                      check={c}
                      onOpen={openCheck}
                      detail={LATER_DETAILS[c.id]}
                    />
                  ))}
                </div>
              </section>
            </div>
            <TrackingInfoRail tab={tab} onTab={setTab} />
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
                      : variant === "v4"
                        ? "Fix these first. Each card shows status, why it matters, and how to get help in Ask Impact."
                        : "These essentials set the foundation for reliable tracking."}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                  {foundations.map((c) => (
                    <CheckCard
                      key={c.id}
                      check={c}
                      onOpen={openCheck}
                      cta={variant === "v4" ? "Chat with Ask Impact →" : undefined}
                    />
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
                        : variant === "v4"
                          ? "Raise standing once foundations are clear. Open Ask Impact from any card for how-to-meet guidance."
                          : "Once foundations are solid, complete these to strengthen your setup."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                    {(variant === "pulse"
                      ? excellence.filter((c) => c.status !== "clear")
                      : excellence
                    ).map((c) => (
                      <CheckCard
                        key={c.id}
                        check={c}
                        onOpen={openCheck}
                        cta={variant === "v4" ? "Chat with Ask Impact →" : undefined}
                      />
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
            <TrackingInfoRail tab={tab} onTab={setTab} />
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

export function TrackingQualityV3Page() {
  return <TrackingQualityPage variant="v3" />;
}

export function TrackingQualityV4Page() {
  return <TrackingQualityPage variant="v4" />;
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