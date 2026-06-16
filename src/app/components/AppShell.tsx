import svgPaths from "../../imports/svg-4mdkeb7ycr";
import svgPaths2 from "../../imports/svg-w751u6a6wp";
import imgBrandProfilePicture from "figma:asset/7582cfd7dca9a384cd94bd5dbf01449baba1c8d7.png";
import { AvatarDropdown } from "./AvatarDropdown";
import { FinanceDropdown } from "./FinanceDropdown";
import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

type Page = "dashboard" | "contracts";

interface NavItem {
  id: string;
  label: string;
  paths: { d: string; clipRule?: string; fillRule?: string }[];
  viewBox?: string;
}

const navItems: NavItem[] = [
  {
    id: "engage",
    label: "Engage",
    paths: [{ d: svgPaths2.p78afd80 }],
    viewBox: "0 0 20 20",
  },
  {
    id: "discover",
    label: "Discover",
    paths: [
      { d: svgPaths.p2f68d1c0, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p15b06e00, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p53838c0 },
    ],
    viewBox: "0 0 20 20",
  },
  {
    id: "optimize",
    label: "Optimize",
    paths: [
      { d: svgPaths.p53fa530, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p1d966900 },
      { d: svgPaths.p347f6600 },
    ],
    viewBox: "0 0 20 20",
  },
  {
    id: "protect",
    label: "Protect",
    paths: [
      { d: svgPaths.p24e341c0, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p277cb900, clipRule: "evenodd", fillRule: "evenodd" },
    ],
    viewBox: "0 0 20 20",
  },
  {
    id: "insights",
    label: "Insights",
    paths: [
      { d: svgPaths2.p35084b00 },
      { d: svgPaths2.p14aaad70 },
      { d: svgPaths2.p9a2eb00 },
      { d: svgPaths2.pe092080 },
      { d: svgPaths2.p3eecc100 },
      { d: svgPaths2.p360c5a80 },
      { d: svgPaths2.p199c6d80 },
      { d: svgPaths2.p1aaa8280 },
    ],
    viewBox: "0 0 22.65 24",
  },
];

interface AppShellProps {
  leftNav: ReactNode;
  children: ReactNode;
}

export function AppShell({ leftNav, children }: AppShellProps) {
  const navigate = useNavigate();
  const activeProduct = "engage";
  const [leftNavCollapsed, setLeftNavCollapsed] = useState(false);

  return (
    <div className="h-screen flex flex-col" style={{ background: "var(--sidebar)" }}>
      {/* Top nav - Full width */}
      <div
        className="h-16 shrink-0 flex items-center justify-between px-4 sticky top-0 z-10"
        style={{ background: "var(--color-navigation-top-nav-background-default, #323742)" }}
      >
        {/* Account name pill (left side) */}
          <div
            className="flex items-center gap-2 rounded-full pl-1 pr-4 py-1"
            style={{ background: "var(--card)" }}
          >
            <div className="size-8 rounded-full overflow-hidden">
              <img
                src={imgBrandProfilePicture}
                alt="Adidas"
                className="size-full object-cover"
              />
            </div>
            <div>
              <p
                className="font-['Sarabun',sans-serif] text-[length:var(--text-base)]"
                style={{
                  color: "var(--sidebar-foreground)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Adidas
              </p>
              <p
                className="font-['Sarabun',sans-serif] text-[10px] leading-[13px]"
                style={{ color: "var(--muted-foreground)" }}
              >
                Performance
              </p>
            </div>
            <div className="size-[10px] ml-2">
              <svg className="size-full" fill="none" viewBox="0 0 10 10">
                <path
                  d={svgPaths.p382bad00}
                  fill="var(--sidebar-foreground)"
                />
              </svg>
            </div>
          </div>

        {/* Right side: icons + finance + avatar */}
        <div className="flex items-center gap-2">
            {/* Icon buttons */}
            {[
              { viewBox: "0 0 16 16", path: svgPaths.pb44c500, clip: true },
              { viewBox: "0 0 16 14.0488", path: svgPaths.p25c3e930, clip: true },
              { viewBox: "0 0 16 16", path: svgPaths.pb2cd6c0, clip: true },
              { viewBox: "0 0 16.1667 14.8333", path: svgPaths.p1adfb900, clip: true },
              { viewBox: "0 0 16 16", path: svgPaths.p485000, clip: true },
              { viewBox: "0 0 16 16", path: svgPaths.p22921500, clip: true },
            ].map((icon, i) => (
              <button
                key={i}
                className="size-10 rounded-full hover:opacity-70 flex items-center justify-center transition-opacity"
              >
                <svg className="size-4" fill="none" viewBox={icon.viewBox}>
                  <path
                    clipRule={icon.clip ? "evenodd" : undefined}
                    d={icon.path}
                    fill="var(--sidebar-foreground)"
                    fillRule={icon.clip ? "evenodd" : undefined}
                  />
                </svg>
              </button>
            ))}

            <FinanceDropdown />

          <AvatarDropdown />
        </div>
      </div>

      {/* Main content area with sidebar and content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Icon Sidebar */}
        <div
          className="w-16 flex flex-col items-center py-4 shrink-0"
          style={{ backgroundColor: "var(--color-navigation-top-nav-background-default, #323742)" }}
        >
          {/* Collapse/Expand button */}
          <div className="mb-2">
            <button
              className="size-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setLeftNavCollapsed((prev) => !prev)}
              aria-label={leftNavCollapsed ? "Expand side menu" : "Collapse side menu"}
            >
              <svg
                className="size-5 transition-transform duration-300"
                style={{ transform: leftNavCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d={svgPaths.p20e1f700}
                  fill="var(--sidebar-foreground)"
                />
                <path
                  d={svgPaths.p144c3700}
                  fill="var(--sidebar-foreground)"
                />
              </svg>
            </button>
          </div>

          {/* Separator */}
          <div className="h-px w-5 mb-2" style={{ background: "var(--muted-foreground)" }} />

          {/* Product nav items */}
          <div className="flex flex-col items-center">
            {navItems.map((item) => {
              const isActive = item.id === activeProduct;
              return (
                <button
                  key={item.id}
                  className="flex flex-col items-center justify-center py-2 w-16 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => {
                    if (item.id === "engage") navigate("/dashboard");
                  }}
                >
                  <div
                    className="size-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: isActive
                        ? "var(--sidebar-icon-active-bg)"
                        : "transparent",
                    }}
                  >
                    <svg
                      className="size-5"
                      fill="none"
                      viewBox={item.viewBox || "0 0 20 20"}
                    >
                      {item.paths.map((path, i) => (
                        <path
                          key={i}
                          d={path.d}
                          fill={
                            isActive
                              ? "var(--sidebar-icon-active)"
                              : "var(--sidebar-foreground)"
                          }
                          clipRule={path.clipRule as any}
                          fillRule={path.fillRule as any}
                        />
                      ))}
                    </svg>
                  </div>
                  <span
                    className="text-[10px] tracking-[0.2px] mt-0.5 font-['Sarabun',sans-serif]"
                    style={{
                      color: "var(--sidebar-foreground)",
                      fontWeight: isActive
                        ? "var(--font-weight-medium)"
                        : "var(--font-weight-normal)",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Left navigation panel */}
        <div
          className="overflow-y-auto shrink-0 rounded-tl-2xl transition-all duration-300 ease-in-out"
          style={{
            background: "var(--sidebar-panel)",
            width: leftNavCollapsed ? "0px" : "252px",
            padding: leftNavCollapsed ? "0px" : "12px",
            opacity: leftNavCollapsed ? 0 : 1,
            overflow: leftNavCollapsed ? "hidden" : undefined,
          }}
        >
          {leftNav}
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
