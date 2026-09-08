import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  AI_NARRATIVE_PIN,
  getPinnedNavReports,
  PINNED_NAV_EVENT,
  type PinnedNavReport,
} from "../pinnedNavReports";

interface NavBadge {
  count: number;
}

interface SecondaryItem {
  navKey: string;
  label: string;
  path?: string;
  badge?: NavBadge;
  indent?: boolean;
  /** Nested tertiary items (e.g. AI Generated → Partner Dashboard) */
  children?: SecondaryItem[];
  showSparkles?: boolean;
}

interface PrimaryItem {
  label: string;
  path?: string;
  defaultExpanded?: boolean;
  secondary?: SecondaryItem[];
}

const PARTNER_DASHBOARD_PATH = AI_NARRATIVE_PIN.path;
const AI_GENERATED_KEY = "reports-ai-generated";

const baseNavStructure: PrimaryItem[] = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Partners",
    path: "/partners",
    defaultExpanded: false,
    secondary: [
      { navKey: "partners", label: "Partners", path: "/partners" },
      { navKey: "partners-groups", label: "Groups", path: "/partners/groups" },
      { navKey: "partners-contacts", label: "Contacts", path: "/partners/contacts" },
      { navKey: "partners-messages", label: "Messages", path: "/partners/messages" },
      {
        navKey: "partners-applications",
        label: "Applications",
        path: "/partners/applications",
        badge: { count: 1 },
      },
      {
        navKey: "partners-proposals",
        label: "Proposals Sent",
        path: "/partners/proposals-sent",
        badge: { count: 1 },
      },
      { navKey: "partners-surveys", label: "Surveys", path: "/partners/surveys" },
    ],
  },
  {
    label: "Campaign Manager",
    path: "/campaigns",
    secondary: [
      { navKey: "campaigns", label: "Campaigns", path: "/campaigns" },
      { navKey: "campaigns-ad-groups", label: "Ad Groups", path: "/campaigns/ad-groups" },
      { navKey: "campaigns-creatives", label: "Creatives", path: "/campaigns/creatives" },
    ],
  },
  {
    label: "Reports",
    secondary: [
      { navKey: "reports-overview", label: "Overview", path: "/reports/overview" },
      {
        navKey: "reports-partner-intelligence",
        label: "Partner Intelligence",
        path: "/reports/partner-intelligence",
      },
      { navKey: "reports-data-lab", label: "Data Lab", path: "/reports/data-lab" },
      {
        navKey: "reports-action-explorer",
        label: "Action Explorer",
        path: "/reports/action-explorer",
      },
      {
        navKey: "reports-performance",
        label: "Program Performance",
        path: "/reports/performance",
      },
      {
        navKey: "reports-by-partner",
        label: "By Partner",
        path: "/reports/performance/by-partner",
        indent: true,
      },
      {
        navKey: "reports-by-day",
        label: "By Day",
        path: "/reports/performance/by-day",
        indent: true,
      },
      {
        navKey: "reports-by-ad",
        label: "By Ad",
        path: "/reports/performance/by-ad",
        indent: true,
      },
      { navKey: "reports-trends", label: "Trends", path: "/reports/trends" },
      { navKey: "reports-custom", label: "Custom", path: "/reports/custom" },
      { navKey: "reports-more", label: "More Reports", path: "/reports/morereports" },
    ],
  },
  {
    label: "Transactions",
    path: "/transactions",
    secondary: [
      { navKey: "tx-actions", label: "Actions", path: "/transactions/actions" },
      {
        navKey: "tx-pending",
        label: "Pending Payouts",
        path: "/transactions/pending-payouts",
      },
      { navKey: "tx-inquiries", label: "Inquiries", path: "/transactions/inquiries" },
      { navKey: "tx-test", label: "Test actions", path: "/transactions/test-actions" },
    ],
  },
  { label: "Content", path: "/content" },
  {
    label: "Contracts",
    secondary: [
      {
        navKey: "contracts-template",
        label: "Template Terms",
        path: "/contracts/template-terms",
      },
      {
        navKey: "contracts-custom",
        label: "Custom Terms",
        path: "/contracts/custom-terms",
      },
      { navKey: "contracts", label: "Contracts", path: "/contracts" },
      {
        navKey: "contracts-changes",
        label: "Changes",
        path: "/contracts/changes",
        badge: { count: 3 },
      },
    ],
  },
];

function dedupePinnedByPath(pinned: PinnedNavReport[]): PinnedNavReport[] {
  const seen = new Set<string>();
  const out: PinnedNavReport[] = [];
  for (const p of pinned) {
    if (seen.has(p.path)) continue;
    seen.add(p.path);
    out.push(p);
  }
  return out;
}

function buildNavStructure(pinned: PinnedNavReport[]): PrimaryItem[] {
  const uniquePinned = dedupePinnedByPath(pinned);

  return baseNavStructure.map((item) => {
    if (item.label !== "Reports" || !item.secondary) return item;

    const secondary: SecondaryItem[] = item.secondary.map((s) => ({ ...s }));
    const overviewIdx = secondary.findIndex((s) => s.navKey === "reports-overview");
    const insertAt = overviewIdx >= 0 ? overviewIdx + 1 : 0;

    if (uniquePinned.length > 0) {
      secondary.splice(insertAt, 0, {
        navKey: AI_GENERATED_KEY,
        label: "AI Generated",
        showSparkles: true,
        children: uniquePinned.map((p) => ({
          navKey: `pinned-${p.id}`,
          label: p.label,
          path: p.path,
          indent: true,
        })),
      });
    } else {
      secondary.splice(insertAt, 0, {
        navKey: "reports-partner-dashboard",
        label: "Partner Dashboard",
        path: PARTNER_DASHBOARD_PATH,
      });
    }

    return { ...item, secondary };
  });
}

function flattenSecondary(items: SecondaryItem[]): SecondaryItem[] {
  return items.flatMap((s) => (s.children?.length ? [s, ...s.children] : [s]));
}

function NavChevron({ open, size = 10 }: { open: boolean; size?: number }) {
  return (
    <svg
      className="shrink-0 transition-transform duration-200"
      width={size}
      height={size}
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
      }}
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 2L7 5L3.5 8"
        stroke="var(--sidebar-foreground)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AiSparklesIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6.2 1.2c.18-.55.96-.55 1.14 0l.7 2.14c.08.24.27.43.51.51l2.14.7c.55.18.55.96 0 1.14l-2.14.7c-.24.08-.43.27-.51.51l-.7 2.14c-.18.55-.96.55-1.14 0l-.7-2.14a.86.86 0 0 0-.51-.51l-2.14-.7c-.55-.18-.55-.96 0-1.14l2.14-.7c.24-.08.43-.27.51-.51l.7-2.14Z"
        fill="var(--sidebar-foreground)"
      />
      <path
        d="M12.05 9.1c.1-.32.55-.32.65 0l.32.98c.05.14.15.24.29.29l.98.32c.32.1.32.55 0 .65l-.98.32a.4.4 0 0 0-.29.29l-.32.98c-.1.32-.55.32-.65 0l-.32-.98a.4.4 0 0 0-.29-.29l-.98-.32c-.32-.1-.32-.55 0-.65l.98-.32a.4.4 0 0 0 .29-.29l.32-.98Z"
        fill="var(--sidebar-foreground)"
      />
    </svg>
  );
}

export function LeftNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSecondary, setActiveSecondary] = useState("");
  const [pinned, setPinned] = useState<PinnedNavReport[]>(() =>
    dedupePinnedByPath(getPinnedNavReports()),
  );
  const navStructure = buildNavStructure(pinned);

  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    baseNavStructure.forEach((item) => {
      if (item.defaultExpanded && item.secondary) {
        initial.add(item.label);
      }
    });
    return initial;
  });

  const [expandedSecondary, setExpandedSecondary] = useState<Set<string>>(
    () => new Set([AI_GENERATED_KEY]),
  );

  useEffect(() => {
    const sync = () => setPinned(dedupePinnedByPath(getPinnedNavReports()));
    window.addEventListener(PINNED_NAV_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PINNED_NAV_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    const activeSection = buildNavStructure(pinned).find((item) =>
      flattenSecondary(item.secondary ?? []).some(
        (sub) => sub.path && location.pathname === sub.path,
      ),
    );
    if (!activeSection) return;
    setExpandedSections((prev) => {
      if (prev.has(activeSection.label)) return prev;
      const next = new Set(prev);
      next.add(activeSection.label);
      return next;
    });
  }, [location.pathname, pinned]);

  useEffect(() => {
    setActiveSecondary("");
  }, [location.pathname]);

  useEffect(() => {
    if (pinned.length === 0) return;
    setExpandedSections((prev) => {
      if (prev.has("Reports")) return prev;
      const next = new Set(prev);
      next.add("Reports");
      return next;
    });
    setExpandedSecondary((prev) => {
      if (prev.has(AI_GENERATED_KEY)) return prev;
      const next = new Set(prev);
      next.add(AI_GENERATED_KEY);
      return next;
    });
  }, [pinned.length]);

  /* Keep AI Generated open when a child route is active */
  useEffect(() => {
    const onPinnedRoute = pinned.some((p) => p.path === location.pathname);
    if (!onPinnedRoute) return;
    setExpandedSecondary((prev) => {
      if (prev.has(AI_GENERATED_KEY)) return prev;
      const next = new Set(prev);
      next.add(AI_GENERATED_KEY);
      return next;
    });
  }, [location.pathname, pinned]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const toggleSecondary = (navKey: string) => {
    setExpandedSecondary((prev) => {
      const next = new Set(prev);
      if (next.has(navKey)) next.delete(navKey);
      else next.add(navKey);
      return next;
    });
  };

  const navigateTo = (path: string, navKey: string) => {
    setActiveSecondary(navKey);
    if (path.endsWith(".html") || path.startsWith("http")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="flex flex-col gap-1">
      {navStructure.map((item) => {
        const hasChildren = !!(item.secondary && item.secondary.length > 0);
        const isOpen = hasChildren && expandedSections.has(item.label);
        const flat = flattenSecondary(item.secondary ?? []);

        /* Primary is active only on its own route — nested items carry their own active state */
        const isPrimaryActive = !!(item.path && location.pathname === item.path);

        const pathMatches = flat.filter(
          (s) => s.path && s.path === location.pathname && !s.children?.length,
        );
        const activeKey =
          (
            pathMatches.find((s) => s.navKey === activeSecondary) ??
            pathMatches.find((s) => s.indent) ??
            pathMatches[0]
          )?.navKey ?? null;

        return (
          <div key={item.label} className="flex flex-col gap-1">
            <button
              type="button"
              className="w-full text-left h-10 rounded-full transition-colors flex items-center px-4 gap-2 cursor-pointer"
              style={{
                background: isPrimaryActive
                  ? "var(--sidebar-accent)"
                  : "var(--sidebar-panel)",
              }}
              onClick={() => {
                if (hasChildren) toggleSection(item.label);
                else if (item.path) navigate(item.path);
              }}
            >
              <span
                className="flex-1 font-['Sarabun',sans-serif] text-[16px] leading-[20px]"
                style={{
                  color: isPrimaryActive
                    ? "var(--sidebar-accent-foreground)"
                    : "var(--sidebar-foreground)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                {item.label}
              </span>
              {hasChildren && <NavChevron open={isOpen} />}
            </button>

            {hasChildren && (
              <div
                className="grid transition-[grid-template-rows] duration-250 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-[10px] pb-1">
                    {item.secondary!.map((sub) => {
                      const hasNested = !!(sub.children && sub.children.length > 0);
                      const nestedOpen = hasNested && expandedSecondary.has(sub.navKey);
                      const isSubActive = !hasNested && sub.navKey === activeKey;

                      return (
                        <div key={sub.navKey} className="flex flex-col gap-[10px]">
                          <button
                            type="button"
                            className="w-full text-left h-8 rounded-full transition-colors flex items-center gap-2 pr-2 cursor-pointer"
                            style={{
                              paddingLeft: hasNested ? "20px" : sub.indent ? "48px" : "32px",
                              background: isSubActive
                                ? "var(--sidebar-accent)"
                                : "var(--sidebar-panel)",
                            }}
                            onClick={() => {
                              if (hasNested) {
                                toggleSecondary(sub.navKey);
                                return;
                              }
                              if (!sub.path) return;
                              navigateTo(sub.path, sub.navKey);
                            }}
                          >
                            {hasNested && <NavChevron open={nestedOpen} size={10} />}
                            <span
                              className="flex-1 font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
                              style={{
                                color: isSubActive
                                  ? "var(--sidebar-accent-foreground)"
                                  : "var(--sidebar-foreground)",
                                fontWeight: "var(--font-weight-medium)",
                              }}
                            >
                              {sub.label}
                            </span>
                            {sub.showSparkles && <AiSparklesIcon />}
                            {sub.badge && (
                              <span
                                className="size-4 rounded-full flex items-center justify-center text-white font-['Sarabun',sans-serif] text-[10px] leading-[10px] shrink-0"
                                style={{
                                  background: "var(--badge-count)",
                                  fontWeight: "var(--font-weight-medium)",
                                }}
                              >
                                {sub.badge.count}
                              </span>
                            )}
                          </button>

                          {hasNested && (
                            <div
                              className="grid transition-[grid-template-rows] duration-250 ease-in-out"
                              style={{ gridTemplateRows: nestedOpen ? "1fr" : "0fr" }}
                            >
                              <div className="overflow-hidden">
                                <div className="flex flex-col gap-[10px]">
                                  {sub.children!.map((child) => {
                                    const isChildActive = child.navKey === activeKey;
                                    return (
                                      <button
                                        key={child.navKey}
                                        type="button"
                                        className="w-full text-left h-8 rounded-full transition-colors flex items-center pr-2 cursor-pointer"
                                        style={{
                                          paddingLeft: "48px",
                                          background: isChildActive
                                            ? "var(--sidebar-accent)"
                                            : "var(--sidebar-panel)",
                                        }}
                                        onClick={() => {
                                          if (!child.path) return;
                                          navigateTo(child.path, child.navKey);
                                        }}
                                      >
                                        <span
                                          className="flex-1 font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
                                          style={{
                                            color: isChildActive
                                              ? "var(--sidebar-accent-foreground)"
                                              : "var(--sidebar-foreground)",
                                            fontWeight: "var(--font-weight-medium)",
                                          }}
                                        >
                                          {child.label}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
