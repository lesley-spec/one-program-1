import { useState } from "react";
import { Search } from "lucide-react";

// Inlined SVG path for Show/Hide columns icon
const SVG_PATHS = {
  showHide:
    "M8.5 3H15V15H8.5V3ZM7.5 3H1V15H7.5V3ZM0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1Z",
};

interface CustomTermRow {
  id: string;
  name: string;
  type: string;
  contracts: number | string;
  media: number | string;
}

const mockData: CustomTermRow[] = [
  {
    id: "1",
    name: "General Terms",
    type: "General Terms",
    contracts: 2,
    media: 4,
  },
  {
    id: "2",
    name: "Email Terms",
    type: "Email Terms",
    contracts: 1,
    media: 3,
  },
  {
    id: "3",
    name: "Copywriting Terms",
    type: "Copywriting Terms",
    contracts: "-",
    media: "-",
  },
];

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

export function CustomTermsTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = mockData.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="w-full flex flex-col"
      style={{ gap: "var(--spacing-8, 30px)" }}
    >
      {/* Title and Action Buttons */}
      <div
        className="flex items-start justify-between w-full"
        style={{ gap: "20px" }}
      >
        <div className="flex-1 flex flex-col" style={{ gap: "4px" }}>
          <h1
            className="text-foreground font-['Sarabun',sans-serif] capitalize whitespace-nowrap"
            style={{
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "30px",
            }}
          >
            Custom Terms
          </h1>
        </div>
        <div className="flex items-start" style={{ gap: "10px" }}>
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
            Create Custom Terms
          </button>
        </div>
      </div>

      {/* Filters */}
      <div
        className="flex flex-wrap items-start w-full"
        style={{ gap: "10px" }}
      >
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
            placeholder="Search  Name"
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
        {/* Type Filter Button */}
        <button
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
          Type
        </button>
      </div>

      {/* Table Actions Row */}
      <div className="flex items-center justify-between w-full">
        {/* Left side - Row count */}
        <div
          className="flex items-center"
          style={{ gap: "10px" }}
        >
          <span
            className="text-foreground font-['Sarabun',sans-serif] whitespace-nowrap"
            style={{
              fontSize: "var(--text-base)",
              lineHeight: "18px",
              fontWeight: 400,
            }}
          >
            {filteredData.length} rows
          </span>
        </div>
        {/* Right side - Show/Hide */}
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
              {["Name", "Type", "Contracts", "Media"].map((col) => (
                <th
                  key={col}
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
                    {col}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className="bg-card hover:bg-muted transition-colors"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Name */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
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
                  </div>
                </td>
                {/* Type */}
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
                      {row.type}
                    </span>
                  </div>
                </td>
                {/* Contracts */}
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
                      {row.contracts}
                    </span>
                  </div>
                </td>
                {/* Media */}
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
                      {row.media}
                    </span>
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
