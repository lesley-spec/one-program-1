import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";

// Inlined SVG path for Show/Hide columns icon
const SVG_PATHS = {
  showHide:
    "M8.5 3H15V15H8.5V3ZM7.5 3H1V15H7.5V3ZM0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1Z",
};

interface ContractRow {
  id: string;
  slug: string;
  templateTerm: string;
  type: string;
  status: string;
  startDate: string;
  brandSignatory: { name: string; date: string };
  partnerSignatory: { name: string; date: string };
}

const mockData: ContractRow[] = [
  {
    id: "1",
    slug: "cnndigital",
    templateTerm: "CNN Digital",
    type: "Word-is",
    status: "Active",
    startDate: "Sep 30, 2024 21:18 MST",
    brandSignatory: { name: "System", date: "Sep 30, 2024" },
    partnerSignatory: { name: "ebay:tAOv7mYmR-6", date: "Sep 30, 2024" },
  },
  {
    id: "2",
    slug: "rokuten",
    templateTerm: "Rokuten",
    type: "BlushRushBeauty4u",
    status: "Active",
    startDate: "Sep 30, 2024 21:18 MST",
    brandSignatory: { name: "System", date: "Sep 30, 2024" },
    partnerSignatory: { name: "ebay:ladc942srwc", date: "Sep 30, 2024" },
  },
  {
    id: "3",
    slug: "skimlinks",
    templateTerm: "SkimLinks",
    type: "Leo's and lions",
    status: "Active",
    startDate: "Sep 30, 2024 21:18 MST",
    brandSignatory: { name: "System", date: "Sep 30, 2024" },
    partnerSignatory: { name: "ebay:RkXvDt0ZSSW", date: "Sep 30, 2024" },
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

export function ContractsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredData = mockData.filter((row) =>
    row.templateTerm.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (row: ContractRow) => {
    navigate(`/contracts/viewterms?=${row.slug}`);
  };

  return (
    <div
      className="w-full flex flex-col"
      style={{ gap: "var(--spacing-8, 30px)" }}
    >
      {/* Title */}
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
            Contracts
          </h1>
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
        <div className="flex items-center" style={{ gap: "10px" }}>
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
              {[
                "Template Term",
                "Type",
                "Status",
                "Start Date",
                "Brand Signatory",
                "Partner Signatory",
              ].map((col) => (
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
                className="bg-card hover:bg-muted transition-colors cursor-pointer"
                style={{ borderBottom: "1px solid var(--border)" }}
                onClick={() => handleRowClick(row)}
              >
                {/* Template Term */}
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
                      {row.templateTerm}
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
                {/* Status */}
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
                      {row.status}
                    </span>
                  </div>
                </td>
                {/* Start Date */}
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
                      {row.startDate}
                    </span>
                  </div>
                </td>
                {/* Brand Signatory */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] whitespace-pre-wrap"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.brandSignatory.name}
                      {"\n"}
                      {row.brandSignatory.date}
                    </span>
                  </div>
                </td>
                {/* Partner Signatory */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div
                    className="flex flex-col justify-center"
                    style={{ width: "180px" }}
                  >
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] whitespace-pre-wrap"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.partnerSignatory.name}
                      {"\n"}
                      {row.partnerSignatory.date}
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
