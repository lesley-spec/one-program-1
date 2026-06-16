const SVG_PATHS = {
  showHide:
    "M8.5 3H15V15H8.5V3ZM7.5 3H1V15H7.5V3ZM0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1Z",
};

interface ChangeRow {
  id: string;
  partner: string;
  message: string;
}

const mockData: ChangeRow[] = [
  {
    id: "1",
    partner: "Partner 1",
    message: "Contract active on Oct 01, 2024 00:00 MST",
  },
  {
    id: "2",
    partner: "Partner 2",
    message: "Contract active on Oct 01, 2024 00:00 MST",
  },
  {
    id: "3",
    partner: "Partner 3",
    message: "Contract active on Oct 01, 2024 00:00 MST",
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

export function ImminentChangesTable() {
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
            Imminent Changes
          </h1>
        </div>
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
            {mockData.length} rows
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
                  Partner
                </span>
              </th>
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
                  Message
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
                {/* Partner */}
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
                      {row.partner}
                    </span>
                  </div>
                </td>
                {/* Message */}
                <td style={{ height: "54px", padding: "15px 10px" }}>
                  <div className="flex flex-col justify-center">
                    <span
                      className="text-foreground font-['Sarabun',sans-serif] overflow-hidden text-ellipsis"
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--text-sm)",
                        lineHeight: "15px",
                      }}
                    >
                      {row.message}
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
