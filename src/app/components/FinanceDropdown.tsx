import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const navLinks = [
  { label: "Overview", path: "/finance/overview" },
  { label: "Transfers", path: "/finance/transfers" },
  { label: "Payment Requests", path: "/finance/payment-requests" },
  { label: "Reports", path: "/finance/reports" },
  { label: "Subscriptions", path: "/finance/subscriptions" },
  { label: "Documents", path: "/finance/documents" },
  { label: "Settings", path: "/finance/settings" },
];

export function FinanceDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-[9999px] pl-4 pr-3 h-10 flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
        style={{ background: "var(--finance-widget)" }}
      >
        <span
          className="font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
          style={{
            color: "var(--sidebar-foreground)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          $23,505.44
        </span>
        <ChevronDown
          className={`size-[10px] transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--sidebar-foreground)" }}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-[570px] bg-card rounded-[--radius] border border-sidebar-border shadow-[var(--elevation-sm)] z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-['Sarabun',sans-serif]">Finance</h3>
              <p className="text-muted-foreground text-[length:var(--text-sm)] font-['Sarabun',sans-serif]">
                Funding Account 1 : USD
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="px-4 h-8 rounded-[--radius-button] bg-transparent text-foreground font-[var(--font-weight-medium)] hover:bg-muted/50 transition-colors font-['Sarabun',sans-serif]">
                Request Payment
              </button>
              <button
                className="px-4 h-8 font-['Sarabun',sans-serif] hover:opacity-80 transition-colors"
                style={{ 
                  borderRadius: "var(--radius-button)",
                  borderWidth: "var(--border-width-thin)",
                  borderStyle: "solid",
                  borderColor: "var(--border-default)",
                  backgroundColor: "var(--surface-default)",
                  color: "var(--text-default)",
                  fontWeight: 600
                }}
              >
                Make Deposit
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex">
            {/* Left: Finance details */}
            <div className="flex-1 flex flex-col gap-4 p-4 border-r border-sidebar-border">
              {/* Required funding card */}
              <div className="bg-accent/5 rounded-[--radius] flex flex-col items-center justify-center py-6">
                <p className="text-foreground text-[length:var(--text-base)] font-['Sarabun',sans-serif]">
                  Required funding
                </p>
                <p className="text-foreground text-[length:var(--text-xl)] font-[var(--font-weight-medium)] font-['Sarabun',sans-serif]">
                  $23,505.44
                </p>
              </div>

              {/* Balance rows */}
              <div className="flex flex-col gap-2 text-[length:var(--text-base)]">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-['Sarabun',sans-serif]">
                    Current balance
                  </span>
                  <span className="text-foreground font-[var(--font-weight-medium)] font-['Sarabun',sans-serif]">
                    $35,239.67
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-['Sarabun',sans-serif]">
                    Pending payments{" "}
                    <span className="text-muted-foreground">(Due through Aug 01, 2024)</span>
                  </span>
                  <span className="text-foreground font-[var(--font-weight-medium)] font-['Sarabun',sans-serif]">
                    $58,745.11
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Nav links */}
            <div className="flex flex-col min-w-[150px] py-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setOpen(false);
                    navigate(link.path);
                  }}
                  className={`w-full text-left px-4 py-2 transition-colors font-['Sarabun',sans-serif] text-[length:var(--text-base)] ${
                    location.pathname === link.path
                      ? "bg-muted text-foreground font-[var(--font-weight-medium)]"
                      : "text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}