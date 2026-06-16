import { useState } from "react";
import { Search } from "lucide-react";

// Inlined SVG path data
const SVG_PATHS = {
  check: "M0.796316 5.10686C0.609785 4.95674 0.342182 4.96346 0.162192 5.13545C-0.0402953 5.32894 -0.0552179 5.65834 0.128862 5.87119L2.75434 9.19986C2.76598 9.21363 2.77844 9.22688 2.7917 9.23955C2.80207 9.24947 2.81274 9.25883 2.82367 9.26765C2.91178 9.33856 3.01849 9.37497 3.125 9.375C3.23151 9.37497 3.33771 9.33905 3.42582 9.26814C3.43675 9.25932 3.44792 9.24947 3.4583 9.23955C3.47156 9.22688 3.48402 9.21363 3.49566 9.19986L9.87114 2.12119C10.0552 1.90834 10.0403 1.57894 9.83781 1.38545C9.65782 1.21346 9.39021 1.20674 9.20368 1.35686L9.13786 1.42049L3.125 8.07989L0.862135 5.17049L0.796316 5.10686Z",
  dropdownArrow: "M0.796316 1.98186C0.609785 1.83174 0.342182 1.83846 0.162192 2.01045C-0.0402953 2.20394 -0.0552179 2.53334 0.128862 2.74619L4.62934 7.94986C4.64098 7.96363 4.65344 7.97688 4.6667 7.98955C4.67708 7.99947 4.68774 8.00883 4.69867 8.01765C4.78678 8.08856 4.89349 8.12497 5 8.125C5.10651 8.12497 5.21271 8.08905 5.30082 8.01814C5.31175 8.00932 5.32293 7.99947 5.3333 7.98955C5.34656 7.97688 5.35902 7.96363 5.37066 7.94986L9.87114 2.74619C10.0552 2.53334 10.0403 2.20394 9.83781 2.01045C9.65782 1.83846 9.39022 1.83174 9.20368 1.98186L9.13787 2.04549L5 6.82989L0.862135 2.04549L0.796316 1.98186Z",
  showHide: "M8.5 3H15V15H8.5V3ZM7.5 3H1V15H7.5V3ZM0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1Z",
};

interface TemplateTermRow {
  id: string;
  name: string;
  payout: string;
  active: number | string;
  pending: number | string;
  upcomingSchedules: number | string;
  lastUpdated: string;
  isLink?: boolean;
  linkUrl?: string;
}

const mockData: TemplateTermRow[] = [
  {
    id: "1",
    name: "Public Terms",
    payout: "Sale: 1%-6%",
    active: 15,
    pending: 1,
    upcomingSchedules: 2,
    lastUpdated: "Sep 30, 2024",
  },
  {
    id: "2",
    name: "Snow Globe SARL",
    payout: "Sale: 1%-4%",
    active: 1,
    pending: "-",
    upcomingSchedules: "-",
    lastUpdated: "Sep 27, 2024",
    isLink: true,
    linkUrl: "#",
  },
  {
    id: "3",
    name: "PicClick LLC",
    payout: "Sale: 1%-4%",
    active: 1,
    pending: "-",
    upcomingSchedules: "-",
    lastUpdated: "Sep 26, 2024",
  },
];

function CheckIcon() {
  return (
    <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 10 10">
      <path
        clipRule="evenodd"
        d={SVG_PATHS.check}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
      <g>
        <path d="M9 3H11.5V16H9V3Z" fill="currentColor" />
        <rect fill="currentColor" height="8" width="2.5" x="4.5" y="8" />
        <path d="M0 5.5H2.5V16H0V5.5Z" fill="currentColor" />
        <rect fill="currentColor" height="16" width="2.5" x="13.5" />
      </g>
    </svg>
  );
}

function DropdownArrowIcon() {
  return (
    <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 10 10">
      <path
        clipRule="evenodd"
        d={SVG_PATHS.dropdownArrow}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ShowHideIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
      <path
        clipRule="evenodd"
        d={SVG_PATHS.showHide}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function TemplateTermsTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === mockData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(mockData.map((row) => row.id));
    }
  };

  const allSelected = selectedRows.length === mockData.length;
  const someSelected = selectedRows.length > 0;

  return (
    <div className="w-full flex flex-col" style={{ gap: "var(--spacing-8, 30px)" }}>
      {/* Title and Action Buttons */}
      <div className="flex items-start justify-between w-full" style={{ gap: "20px" }}>
        <div className="flex-1 flex flex-col" style={{ gap: "4px" }}>
          <h1
            className="text-foreground font-['Sarabun',sans-serif] capitalize whitespace-nowrap"
            style={{
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "30px",
            }}
          >
            Template Terms
          </h1>
        </div>
        <div className="flex items-start" style={{ gap: "10px" }}>
          {/* Report button */}
          <button
            className="h-[38px] bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
            style={{
              borderRadius: "var(--radius)",
              width: "56px",
            }}
            aria-label="View report"
          >
            <div className="flex items-center" style={{ gap: "10px" }}>
              <span className="text-foreground"><ChartIcon /></span>
              <span className="text-foreground"><DropdownArrowIcon /></span>
            </div>
          </button>
          {/* Create Template Terms button */}
          <button
            className="h-[38px] bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover transition-colors font-['Sarabun',sans-serif]"
            style={{
              borderRadius: "var(--radius)",
              minWidth: "65px",
              paddingLeft: "10px",
              paddingRight: "10px",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              lineHeight: "18px",
            }}
          >
            Create Template Terms
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-start w-full" style={{ gap: "10px" }}>
        {/* Search Input */}
        <div
          className="bg-card border border-border h-[38px] flex items-center relative"
          style={{
            borderRadius: "var(--radius)",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "7px",
            paddingBottom: "7px",
            width: "255px",
          }}
        >
          <Search
            className="text-muted-foreground shrink-0"
            style={{ width: "16px", height: "16px" }}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-foreground placeholder:text-muted-foreground font-['Sarabun',sans-serif]"
            style={{
              fontSize: "var(--text-base)",
              lineHeight: "18px",
              fontWeight: 400,
              marginLeft: "10px",
            }}
          />
        </div>
        {/* Filter Buttons */}
        {["Partner", "Status", "Type", "Label"].map((filter) => (
          <button
            key={filter}
            className="bg-card border border-border h-[38px] flex items-center justify-center hover:bg-muted transition-colors font-['Sarabun',sans-serif] text-foreground"
            style={{
              borderRadius: "var(--radius)",
              paddingLeft: "10px",
              paddingRight: "10px",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              lineHeight: "18px",
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table Actions */}
      <div className="flex items-center justify-between w-full">
        {/* Left side */}
        <div className="flex items-center" style={{ gap: "10px" }}>
          {/* Checkbox + count */}
          <div className="flex items-center" style={{ gap: "10px" }}>
            <button
              onClick={toggleAll}
              className="flex items-center justify-center transition-colors"
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "var(--radius-checkbox)",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: someSelected
                  ? "var(--foreground)"
                  : "var(--border)",
                background: someSelected
                  ? "var(--foreground)"
                  : "var(--card)",
                color: someSelected
                  ? "var(--card)"
                  : "transparent",
              }}
            >
              {someSelected && <CheckIcon />}
            </button>
            <span
              className="text-foreground font-['Sarabun',sans-serif] whitespace-nowrap"
              style={{
                fontSize: "var(--text-base)",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              {selectedRows.length} items selected
            </span>
          </div>
          {/* Bulk action buttons */}
          <div className="flex" style={{ gap: "10px" }}>
            <button
              className="bg-muted hover:opacity-80 transition-opacity flex items-center justify-center font-['Sarabun',sans-serif] text-foreground"
              style={{
                height: "30px",
                minWidth: "65px",
                borderRadius: "var(--radius)",
                paddingLeft: "10px",
                paddingRight: "10px",
                gap: "10px",
                fontWeight: 600,
                fontSize: "var(--text-base)",
                lineHeight: "18px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--muted)",
              }}
            >
              Labels
              <span className="text-foreground"><DropdownArrowIcon /></span>
            </button>
            <button
              className="bg-muted hover:opacity-80 transition-opacity flex items-center justify-center font-['Sarabun',sans-serif] text-foreground"
              style={{
                height: "30px",
                minWidth: "65px",
                borderRadius: "var(--radius)",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontWeight: 600,
                fontSize: "var(--text-base)",
                lineHeight: "18px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--muted)",
              }}
            >
              Modify
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center">
          <button
            className="bg-card flex items-center justify-center hover:bg-muted transition-colors text-foreground"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "var(--radius)",
            }}
            aria-label="Show/hide columns"
          >
            <ShowHideIcon />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr
              className="bg-card"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Checkbox header */}
              <th
                className="text-left"
                style={{
                  height: "40px",
                  width: "36px",
                  minWidth: "36px",
                  padding: "8px 10px",
                }}
              >
                <span>&nbsp;</span>
              </th>
              {/* Name */}
              <th
                className="text-left"
                style={{ height: "40px", padding: "8px 10px" }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Name
                </span>
              </th>
              {/* Payout */}
              <th
                className="text-left"
                style={{ height: "40px", padding: "8px 10px" }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Payout
                </span>
              </th>
              {/* Active */}
              <th
                className="text-left"
                style={{ height: "40px", padding: "8px 10px" }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Active
                </span>
              </th>
              {/* Pending */}
              <th
                className="text-left"
                style={{ height: "40px", padding: "8px 10px" }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Pending
                </span>
              </th>
              {/* Upcoming Schedules */}
              <th
                className="text-left"
                style={{ height: "40px", padding: "8px 10px" }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Upcoming Schedules
                </span>
              </th>
              {/* Last Updated */}
              <th
                className="text-left"
                style={{
                  height: "40px",
                  padding: "8px 10px",
                  width: "137px",
                  minWidth: "137px",
                }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Last Updated
                </span>
              </th>
              {/* Report */}
              <th
                className="text-left"
                style={{ height: "40px", padding: "8px 10px" }}
              >
                <span
                  className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    lineHeight: "18px",
                  }}
                >
                  Report
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr
                key={row.id}
                className="bg-card hover:bg-muted transition-colors"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Checkbox */}
                <td
                  style={{
                    height: "54px",
                    padding: "15px 10px",
                    width: "36px",
                    minWidth: "36px",
                  }}
                >
                  <button
                    onClick={() => toggleRow(row.id)}
                    className="flex items-center justify-center transition-colors"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "var(--radius-checkbox)",
                      borderWidth: "1.5px",
                      borderStyle: "solid",
                      borderColor: selectedRows.includes(row.id)
                        ? "var(--foreground)"
                        : "var(--border)",
                      background: selectedRows.includes(row.id)
                        ? "var(--foreground)"
                        : "var(--card)",
                      color: selectedRows.includes(row.id)
                        ? "var(--card)"
                        : "transparent",
                    }}
                  >
                    {selectedRows.includes(row.id) && <CheckIcon />}
                  </button>
                </td>
                {/* Name */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    {row.isLink ? (
                      <a
                        href={row.linkUrl}
                        className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap hover:underline block"
                        style={{
                          fontWeight: 600,
                          fontSize: "var(--text-sm)",
                          lineHeight: "15px",
                        }}
                      >
                        {row.name}
                      </a>
                    ) : (
                      <span
                        className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                        style={{
                          fontWeight: 600,
                          fontSize: "var(--text-sm)",
                          lineHeight: "15px",
                        }}
                      >
                        {row.name}
                      </span>
                    )}
                  </div>
                </td>
                {/* Payout */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.payout}
                    </span>
                  </div>
                </td>
                {/* Active */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.active}
                    </span>
                  </div>
                </td>
                {/* Pending */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.pending}
                    </span>
                  </div>
                </td>
                {/* Upcoming Schedules */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.upcomingSchedules}
                    </span>
                  </div>
                </td>
                {/* Last Updated */}
                <td
                  style={{
                    height: "54px",
                    padding: "15px 10px",
                    width: "137px",
                    minWidth: "137px",
                  }}
                >
                  <span
                    className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{
                      fontWeight: 400,
                      fontSize: "var(--text-sm)",
                      lineHeight: "24px",
                      minWidth: "65px",
                    }}
                  >
                    {row.lastUpdated}
                  </span>
                </td>
                {/* Report */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div className="flex items-center" style={{ height: "24px" }}>
                    <button
                      className="text-foreground hover:text-accent transition-colors"
                      aria-label="View report"
                    >
                      <ChartIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}