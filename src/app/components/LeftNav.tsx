import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

interface NavBadge {
  count: number;
}

interface SecondaryItem {
  label: string;
  path?: string;
  badge?: NavBadge;
  indent?: boolean;
}

interface PrimaryItem {
  label: string;
  path?: string;
  defaultExpanded?: boolean;
  secondary?: SecondaryItem[];
}

const navStructure: PrimaryItem[] = [
  { label: "Dashboard", path: "/" },
  {
    label: "Partners",
    path: "/partners",
    defaultExpanded: false,
    secondary: [
      { label: "Partners", path: "/partners" },
      { label: "Groups", path: "/partners/groups" },
      { label: "Contacts", path: "/partners/contacts" },
      { label: "Messages", path: "/partners/messages" },
      { label: "Applications", path: "/partners/applications", badge: { count: 1 } },
      { label: "Proposals Sent", path: "/partners/proposals-sent", badge: { count: 1 } },
      { label: "Surveys", path: "/partners/surveys" },
    ],
  },
  {
    label: "Campaign Manager",
    path: "/campaigns",
    secondary: [
      { label: "Campaigns", path: "/campaigns" },
      { label: "Ad Groups", path: "/campaigns/ad-groups" },
      { label: "Creatives", path: "/campaigns/creatives" },
    ],
  },
  {
    label: "Reports",
    secondary: [
      { label: "Overview", path: "/reports/overview" },
      { label: "Partner Intelligence", path: "/reports/partner-intelligence" },
      { label: "Data Lab", path: "/reports/data-lab" },
      { label: "Program Performance", path: "/reports/performance" },
      { label: "By Partner", path: "/reports/performance/by-partner", indent: true },
      { label: "By Day", path: "/reports/performance/by-day", indent: true },
      { label: "By Ad", path: "/reports/performance/by-ad", indent: true },
      { label: "Trends", path: "/reports/trends" },
      { label: "Custom", path: "/reports/custom" },
      { label: "More Reports", path: "/reports/morereports" },
    ],
  },
  { label: "Transactions", path: "/transactions", secondary: [
    { label: "Actions", path: "/transactions/actions" },
    { label: "Pending Payouts", path: "/transactions/pending-payouts" },
    { label: "Inquiries", path: "/transactions/inquiries" },
    { label: "Test actions", path: "/transactions/test-actions" },
  ] },
  { label: "Content", path: "/content" },
  {
    label: "Contracts",
    secondary: [
      { label: "Template Terms", path: "/contracts/template-terms" },
      { label: "Custom Terms", path: "/contracts/custom-terms" },
      { label: "Contracts", path: "/contracts" },
      { label: "Changes", path: "/contracts/changes", badge: { count: 3 } },
    ],
  },
];

/* Chevron SVG arrow — points right when collapsed, down when expanded */
function NavChevron({ open }: { open: boolean }) {
  return (
    <svg
      className="size-[10px] shrink-0 transition-transform duration-200"
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
      }}
      viewBox="0 0 10 10"
      fill="none"
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

export function LeftNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSecondary, setActiveSecondary] = useState("");

  /* Track which sections are expanded — initialise from defaultExpanded */
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    navStructure.forEach((item) => {
      if (item.defaultExpanded && item.secondary) {
        initial.add(item.label);
      }
    });
    return initial;
  });

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <nav className="flex flex-col gap-1">
      {navStructure.map((item) => {
        const hasChildren = !!(item.secondary && item.secondary.length > 0);
        const isOpen = hasChildren && expandedSections.has(item.label);

        /* Determine if this primary item is active:
           - Direct path match (e.g. Dashboard → "/")
           - Or one of its children's paths matches the current location */
        const isPrimaryActive = item.path
          ? location.pathname === item.path
          : hasChildren &&
            item.secondary!.some((sub) => sub.path && location.pathname === sub.path);

        return (
          <div key={item.label} className="flex flex-col gap-1">
            {/* Primary nav item */}
            <button
              className="w-full text-left h-10 rounded-full transition-colors flex items-center px-4 gap-2 cursor-pointer"
              style={{
                background: isPrimaryActive
                  ? "var(--sidebar-accent)"
                  : "var(--sidebar-panel)",
              }}
              onClick={() => {
                if (hasChildren) {
                  toggleSection(item.label);
                } else if (item.path) {
                  navigate(item.path);
                }
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

            {/* Collapsible secondary items — uses CSS grid-rows for smooth animation */}
            {hasChildren && (
              <div
                className="grid transition-[grid-template-rows] duration-250 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-[10px] pb-1">
                    {item.secondary!.map((sub) => {
                      const isSubActive = sub.label === activeSecondary;
                      return (
                        <button
                          key={sub.label}
                          className="w-full text-left h-8 rounded-full transition-colors flex items-center justify-between pr-2 cursor-pointer"
                          style={{
                            paddingLeft: sub.indent ? "48px" : "32px",
                            background: isSubActive
                              ? "var(--sidebar-accent)"
                              : "var(--sidebar-panel)",
                          }}
                          onClick={() => {
                            setActiveSecondary(sub.label);
                            if (sub.path) navigate(sub.path);
                          }}
                        >
                          <span
                            className="font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
                            style={{
                              color: isSubActive
                                ? "var(--sidebar-accent-foreground)"
                                : "var(--sidebar-foreground)",
                              fontWeight: "var(--font-weight-medium)",
                            }}
                          >
                            {sub.label}
                          </span>
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