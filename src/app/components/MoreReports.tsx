import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  Heart,
  MoreHorizontal,
  Eye,
  FolderPlus,
  Save,
  Clock,
  Navigation,
  CheckCircle2,
  Circle,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import svgPaths from "../../imports/svg-m48z0ftoro";
import { ManageCategoriesSlideout } from "./ManageCategoriesSlideout";
import {
  AI_NARRATIVE_PIN,
  isNavReportPinned,
  PINNED_NAV_EVENT,
  toggleNavReportPin,
} from "../pinnedNavReports";

/* ═══════════════════════════════════════════════════════════
   Types & Data
   ═══════════════════════════════════════════════════════════ */

interface Report {
  id: string;
  name: string;
  description: string;
  category: string;
  pinned: boolean;
  favorited: boolean;
  /** When set, View navigates here */
  path?: string;
  /** When true, Pin toggles the shared sidenav pin (Partner Dashboard) */
  navPin?: boolean;
}

const PARTNER_DASHBOARD_REPORT_ID = AI_NARRATIVE_PIN.id;

const REPORTS: Report[] = [
  {
    id: PARTNER_DASHBOARD_REPORT_ID,
    name: "Partner Dashboard",
    description: "AI-generated Brand performance story with editable prompt and regenerate.",
    category: "AI Generated",
    pinned: false,
    favorited: true,
    path: AI_NARRATIVE_PIN.path,
    navPin: true,
  },
  { id: "2", name: "Action Listing by Clearing Date", description: "Displays data for each individual action that has been credited...", category: "My Own Category", pinned: false, favorited: false },
  { id: "3", name: "Action Risk Listing", description: "-", category: "My Own Category", pinned: false, favorited: false },
  { id: "4", name: "Aalap's Report", description: "Weekly Dashboard", category: "Performance", pinned: false, favorited: false },
  { id: "5", name: "Active Partner Relationships", description: "Show list of all Media Partners who have an active relationship...", category: "Performance", pinned: false, favorited: false },
  { id: "6", name: "Ad Listing", description: "Displays details for all ads that have ever been created.", category: "Performance", pinned: false, favorited: false },
  { id: "7", name: "Nathan's Report", description: "I dont like descriptions", category: "Performance", pinned: true, favorited: false },
  { id: "8", name: "Kollin's Report", description: "Your text goes here", category: "Built", pinned: true, favorited: false },
  { id: "9", name: "Campaign Overview", description: "Shows multiple views of performance for your campaign.", category: "Listing", pinned: false, favorited: false },
  { id: "10", name: "Cash Flow History Listing", description: "Shows a listing of all cash flows within the account.", category: "Performance", pinned: true, favorited: false },
  { id: "11", name: "Alexander's Report", description: "Some Description", category: "Listing", pinned: false, favorited: false },
];

const FAVORITED_REPORTS = [
  { id: "f0", name: "Partner Dashboard", category: "AI Generated" },
  { id: "f1", name: "Performance by Partner", category: "Performance" },
  { id: "f2", name: "Les Perf Dash", category: "Performance" },
  { id: "f3", name: "Albert Finance Dashboard", category: "Performance" },
  { id: "f4", name: "Benchmark Report", category: "Performance" },
];

const CATEGORIES = ["AI Generated", "My Own Category", "Performance", "Built", "Listing"];

/* ═══════════════════════════════════════════════════════════
   Context Menu
   ═══════════════════════════════════════════════════════════ */

function ContextMenu({
  x,
  y,
  report,
  onClose,
  onView,
  onPinToNav,
}: {
  x: number;
  y: number;
  report: Report;
  onClose: () => void;
  onView: () => void;
  onPinToNav: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const pinLabel = report.navPin
    ? report.pinned
      ? "Unpin from sidenav"
      : "Pin to sidenav"
    : "Pin to nav";

  const items = [
    { icon: Eye, label: "View", onClick: onView },
    { icon: Heart, label: "Favorite", onClick: onClose },
    { icon: Navigation, label: pinLabel, onClick: onPinToNav },
    { icon: FolderPlus, label: "Add to category", onClick: onClose },
    { icon: Save, label: "Saves", onClick: onClose },
    { icon: Clock, label: "Schedules", onClick: onClose },
  ];

  return (
    <div
      ref={ref}
      className="fixed z-50 rounded-[var(--radius)] py-[6px] min-w-[160px]"
      style={{
        background: "var(--card)",
        boxShadow: "var(--elevation-sm), 0 4px 12px rgba(0,0,0,0.08)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--border)",
        left: x,
        top: y,
      }}
    >
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="w-full flex items-center gap-[10px] px-[14px] py-[8px] font-['Sarabun',sans-serif] text-[14px] leading-[18px] cursor-pointer transition-colors hover:opacity-80"
          style={{
            color: "var(--foreground)",
            fontWeight: "var(--font-weight-normal)",
            background: "transparent",
          }}
          onClick={() => {
            item.onClick();
            onClose();
          }}
        >
          <item.icon size={14} style={{ color: "var(--muted-foreground)" }} />
          {item.label}
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Heart SVG (filled) from Figma import
   ═══════════════════════════════════════════════════════════ */

function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d={svgPaths.pc48ae40}
        fill="var(--foreground)"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════ */

export function MoreReports() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [reports, setReports] = useState(() =>
    REPORTS.map((r) =>
      r.navPin ? { ...r, pinned: isNavReportPinned(AI_NARRATIVE_PIN.id) } : r,
    ),
  );
  const [showManageCategories, setShowManageCategories] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    reportId: string;
  } | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowCategoryFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Keep Partner Dashboard pin in sync with sidenav pin store */
  useEffect(() => {
    const sync = () => {
      const pinned = isNavReportPinned(AI_NARRATIVE_PIN.id);
      setReports((prev) =>
        prev.map((r) => (r.navPin ? { ...r, pinned } : r)),
      );
    };
    window.addEventListener(PINNED_NAV_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PINNED_NAV_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const filteredReports = useMemo(() => {
    return reports.filter((r) => {
      const matchSearch =
        !searchQuery ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(r.category);
      return matchSearch && matchCategory;
    });
  }, [reports, searchQuery, selectedCategories]);

  const handleView = (report: Report) => {
    if (report.path) {
      navigate(report.path);
      return;
    }
  };

  const handleGenerate = (report: Report) => {
    if (report.path) {
      navigate(`${report.path}?generate=1`);
      return;
    }
  };

  const handlePin = (report: Report) => {
    if (report.navPin) {
      toggleNavReportPin(AI_NARRATIVE_PIN);
      return;
    }
    setReports((prev) =>
      prev.map((r) => (r.id === report.id ? { ...r, pinned: !r.pinned } : r)),
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const contextReport = contextMenu
    ? reports.find((r) => r.id === contextMenu.reportId) ?? null
    : null;

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2
          className="font-['Sarabun',sans-serif] text-[length:var(--text-xl)] leading-[33px] capitalize"
          style={{
            color: "var(--foreground)",
            fontWeight: 700,
          }}
        >
          More Reports
        </h2>
        <div className="flex items-center gap-[10px]">
          <button
            className="h-[40px] min-w-[65px] px-[16px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
            style={{
              background: "transparent",
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={() => setShowManageCategories(true)}
          >
            Manage Categories
          </button>
          <button
            className="h-[40px] min-w-[65px] px-[16px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
            style={{
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Build Report
          </button>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="flex items-center gap-[10px] flex-wrap">
        <div
          className="flex items-center gap-[8px] h-[40px] px-[12px] py-[7px] rounded-[var(--radius)] w-[246px]"
          style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--border)" }}
        >
          <Search
            size={16}
            style={{ color: "var(--muted-foreground)", flexShrink: 0 }}
          />
          <input
            type="text"
            placeholder="Search Name, Description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none font-['Sarabun',sans-serif] text-[14px] leading-[18px] placeholder:opacity-50"
            style={{
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-normal)",
            }}
          />
        </div>

        <div className="relative" ref={filterRef}>
          <button
            className="h-[40px] px-[16px] rounded-[var(--radius-button)] flex items-center gap-[8px] cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
            style={{
              background: selectedCategories.length > 0
                ? "var(--sidebar-accent)"
                : "var(--muted)",
              color: selectedCategories.length > 0
                ? "var(--sidebar-accent-foreground)"
                : "var(--foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={() => setShowCategoryFilter((v) => !v)}
          >
            Categories
            {selectedCategories.length > 0 && (
              <span
                className="font-['Sarabun',sans-serif] text-[14px] leading-[18px] flex items-center gap-[4px]"
                style={{
                  color: selectedCategories.length > 0
                    ? "var(--sidebar-accent-foreground)"
                    : "var(--accent)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                · {selectedCategories.length}
              </span>
            )}
          </button>

          {showCategoryFilter && (
            <div
              className="absolute top-[44px] left-0 z-40 rounded-[var(--radius)] py-[6px] min-w-[180px]"
              style={{
                background: "var(--card)",
                boxShadow: "var(--elevation-sm), 0 4px 12px rgba(0,0,0,0.08)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--border)",
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className="w-full flex items-center gap-[8px] px-[14px] py-[8px] font-['Sarabun',sans-serif] text-[14px] leading-[18px] cursor-pointer hover:opacity-80"
                  style={{
                    color: "var(--foreground)",
                    fontWeight: "var(--font-weight-normal)",
                    background: "transparent",
                  }}
                  onClick={() => toggleCategory(cat)}
                >
                  {selectedCategories.includes(cat) ? (
                    <CheckCircle2
                      size={14}
                      style={{ color: "var(--accent)" }}
                    />
                  ) : (
                    <Circle
                      size={14}
                      style={{ color: "var(--muted-foreground)" }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Favorited Section */}
      <div className="flex flex-col gap-[8px]">
        <p
          className="font-['Sarabun',sans-serif] text-[16px] leading-[20px]"
          style={{
            color: "var(--foreground)",
            fontWeight: 700,
          }}
        >
          Favorited
        </p>
        <div className="flex gap-[15px] overflow-x-auto pb-[4px]">
          {FAVORITED_REPORTS.map((fav) => (
            <div
              key={fav.id}
              className="flex-shrink-0 min-w-[180px] flex-1 rounded-[var(--radius)] p-[10px]"
              style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--border)" }}
            >
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-[8px]">
                  <p
                    className="font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
                    style={{
                      color: "var(--foreground)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    {fav.name}
                  </p>
                  <span
                    className="inline-flex h-[24px] items-center px-[16px] rounded-[var(--radius-button)] font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
                    style={{
                      background: "var(--muted)",
                      color: "var(--foreground)",
                      fontWeight: "var(--font-weight-normal)",
                    }}
                  >
                    {fav.category}
                  </span>
                </div>
                <HeartFilledIcon className="shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Actions Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <label className="flex items-center gap-[8px] cursor-pointer">
            <div
              className="size-[16px] rounded-[var(--radius-checkbox)] flex items-center justify-center"
              style={{
                borderWidth: selectAll ? 0 : "1.5px",
                borderStyle: selectAll ? "none" : "solid",
                borderColor: selectAll ? "transparent" : "var(--muted-foreground)",
                background: selectAll ? "var(--accent)" : "transparent",
              }}
              onClick={() => setSelectAll(!selectAll)}
            >
              {selectAll && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className="font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
              style={{
                color: "var(--foreground)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              Select All
            </span>
          </label>
          <span
            className="font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
            style={{ color: "var(--foreground)" }}
          >
            |
          </span>
          <span
            className="font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
            style={{
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-normal)",
            }}
          >
            {filteredReports.length} reports
          </span>
        </div>
        <button
          className="size-[32px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer"
          style={{ background: "var(--card)", color: "var(--foreground)" }}
        >
          <LayoutGrid size={16} />
        </button>
      </div>

      {/* Table */}
      <div
        className="w-full rounded-[var(--radius)] overflow-hidden"
        style={{ background: "var(--card)" }}
      >
        {/* Table Header */}
        <div
          className="grid h-[40px] items-center px-[8px]"
          style={{
            gridTemplateColumns: "minmax(200px, 1.2fr) minmax(200px, 2fr) minmax(120px, 1fr) 120px",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "var(--muted)",
          }}
        >
          {["Name", "Description", "Categories", "Pinned"].map((col) => (
            <p
              key={col}
              className="font-['Sarabun',sans-serif] text-[14px] leading-[18px] overflow-hidden text-ellipsis px-[8px]"
              style={{
                color: "var(--foreground)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              {col}
            </p>
          ))}
        </div>

        {/* Table Rows */}
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="grid h-[54px] items-center px-[8px] group"
            style={{
              gridTemplateColumns: "minmax(200px, 1.2fr) minmax(200px, 2fr) minmax(120px, 1fr) 120px",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "var(--muted)",
            }}
          >
            {/* Name */}
            <div className="flex items-center px-[8px] overflow-hidden">
              <button
                type="button"
                className="font-['Sarabun',sans-serif] text-[12px] leading-[15px] overflow-hidden text-ellipsis whitespace-nowrap text-left cursor-pointer bg-transparent border-0 p-0"
                style={{
                  color: "var(--foreground)",
                  fontWeight: "var(--font-weight-medium)",
                }}
                onClick={() => handleView(report)}
              >
                {report.name}
              </button>
            </div>

            {/* Description */}
            <div className="flex items-center px-[8px] overflow-hidden">
              <p
                className="font-['Sarabun',sans-serif] text-[12px] leading-[15px] overflow-hidden text-ellipsis whitespace-nowrap"
                style={{
                  color: "var(--foreground)",
                  fontWeight: "var(--font-weight-normal)",
                }}
              >
                {report.description}
              </p>
            </div>

            {/* Category */}
            <div className="flex items-center px-[8px]">
              <span
                className="inline-flex h-[24px] items-center px-[16px] rounded-[var(--radius-button)] font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
                style={{
                  background: "var(--muted)",
                  color: "var(--foreground)",
                  fontWeight: "var(--font-weight-normal)",
                }}
              >
                {report.category}
              </span>
            </div>

            {/* Pinned + Actions */}
            <div className="flex items-center gap-[6px] px-[8px] justify-end relative min-h-[40px]">
              {/* Row hover actions — View / Generate / Pin / more */}
              <div className="hidden group-hover:flex items-center gap-[8px]">
                <button
                  type="button"
                  className="h-[32px] min-w-[65px] px-[16px] rounded-[var(--radius-button,9999px)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px] border-0"
                  style={{
                    background: "var(--button-primary, #1D66DE)",
                    color: "var(--button-primary-foreground, #fff)",
                    fontWeight: 600,
                  }}
                  onClick={() => handleView(report)}
                >
                  View
                </button>
                <button
                  type="button"
                  className="h-[32px] min-w-[65px] px-[16px] rounded-[var(--radius-button,9999px)] flex items-center justify-center gap-[8px] cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
                  style={{
                    background: "var(--muted)",
                    border: "1px solid var(--muted)",
                    color: "var(--foreground)",
                    fontWeight: 600,
                  }}
                  onClick={() => handleGenerate(report)}
                >
                  <Sparkles size={16} />
                  Generate
                </button>
                {report.navPin && (
                  <button
                    type="button"
                    className="h-[32px] min-w-[65px] px-[16px] rounded-[var(--radius-button,9999px)] flex items-center justify-center gap-[8px] cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
                    style={{
                      background: "var(--muted)",
                      border: "1px solid var(--muted)",
                      color: "var(--foreground)",
                      fontWeight: 600,
                    }}
                    onClick={() => handlePin(report)}
                  >
                    <Navigation size={16} />
                    {report.pinned ? "Unpin" : "Pin"}
                  </button>
                )}
                <button
                  type="button"
                  className="size-[32px] rounded-[var(--radius-button,9999px)] flex items-center justify-center cursor-pointer"
                  style={{
                    background: "var(--muted)",
                    border: "1px solid var(--muted)",
                    color: "var(--foreground)",
                  }}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setContextMenu({
                      x: Math.min(rect.right - 160, window.innerWidth - 180),
                      y: rect.bottom + 4,
                      reportId: report.id,
                    });
                  }}
                >
                  <MoreHorizontal size={16} />
                </button>
              </div>
              {/* Pin indicator when not hovering */}
              <div className="group-hover:hidden">
                {report.pinned ? (
                  <CheckCircle2
                    size={20}
                    style={{ color: "var(--accent)" }}
                  />
                ) : (
                  <Circle
                    size={20}
                    style={{ color: "var(--muted-foreground)", opacity: 0.4 }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Context Menu */}
      {contextMenu && contextReport && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          report={contextReport}
          onClose={() => setContextMenu(null)}
          onView={() => handleView(contextReport)}
          onPinToNav={() => handlePin(contextReport)}
        />
      )}

      {/* Manage Categories Slideout */}
      <ManageCategoriesSlideout
        open={showManageCategories}
        onClose={() => setShowManageCategories(false)}
      />
    </div>
  );
}