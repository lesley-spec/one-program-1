import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-t747lx98vt";

interface ChartType {
  id: string;
  label: string;
  viewBox: string;
  paths: { d: string; clipRule?: string; fillRule?: string }[];
  gradient?: boolean;
}

const CHART_TYPES: ChartType[] = [
  {
    id: "data-table",
    label: "Data Table",
    viewBox: "0 0 32 32",
    paths: [{ d: svgPaths.p23579000, clipRule: "evenodd", fillRule: "evenodd" }],
  },
  {
    id: "line",
    label: "Line",
    viewBox: "0 0 32 32",
    paths: [
      { d: svgPaths.p6827180, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p1511a580, clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "area",
    label: "Area",
    viewBox: "0 0 32 32",
    paths: [{ d: svgPaths.p360dea00, clipRule: "evenodd", fillRule: "evenodd" }],
  },
  {
    id: "treemap",
    label: "Treemap",
    viewBox: "0 0 32 32",
    paths: [{ d: svgPaths.p2465e600, clipRule: "evenodd", fillRule: "evenodd" }],
  },
  {
    id: "vertical-bar",
    label: "Vertical bar",
    viewBox: "0 0 32 32.3556",
    paths: [
      { d: svgPaths.p1fed22a0, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p13dfaf80, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p536ad00, clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "vertical-stack",
    label: "Vertical Stack",
    viewBox: "0 0 32 32",
    paths: [
      { d: svgPaths.p1872fc00, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p2d3b6180, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p13dfaf80, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.peb77e00, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p133de800, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p23ee9300, clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "horizontal-bar",
    label: "Horizontal Bar",
    viewBox: "0 0 32.3556 32.1777",
    paths: [
      { d: svgPaths.p3810ff80 },
      { d: svgPaths.p22172480 },
      { d: svgPaths.p21c41e00 },
    ],
    gradient: true,
  },
  {
    id: "horizontal-stack",
    label: "Horizontal Stack",
    viewBox: "0 0 32 32",
    paths: [
      { d: svgPaths.p3ec6b900, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.pb34e9f0, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p1dea2f60, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p2d74e900, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p227f3080, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p12c28000, clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "combo",
    label: "Combo",
    viewBox: "0 0 32 32.3556",
    paths: [
      { d: svgPaths.p1d9f9af0, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.pdacd000, clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "scatter",
    label: "Scatter",
    viewBox: "0 0 32 32",
    paths: [
      { d: "M3 4a1 1 0 0 1 2 0v22h22a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V4Z", clipRule: "evenodd", fillRule: "evenodd" },
      { d: "M10 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "decomp-tree",
    label: "Decomposition Tree",
    viewBox: "0 0 32 32",
    paths: [
      { d: "M1 12h7v8H1Zm18-10h12v6H19Zm0 11h12v6H19Zm0 11h12v6H19Z", clipRule: "evenodd", fillRule: "evenodd" },
      { d: "M8 15h7v2H8Zm7-10h1v22h-1Zm1-1h4v2h-4Zm0 10h4v2h-4Zm0 10h4v2h-4Z", clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "funnel",
    label: "Funnel",
    viewBox: "0 0 32 32.0001",
    paths: [{ d: svgPaths.p19696b00, clipRule: "evenodd", fillRule: "evenodd" }],
  },
  {
    id: "donut",
    label: "Donut",
    viewBox: "0 0 32 32",
    paths: [{ d: svgPaths.p3ed2bff0, clipRule: "evenodd", fillRule: "evenodd" }],
  },
  {
    id: "goals",
    label: "Goals",
    viewBox: "0 0 32 32",
    paths: [
      { d: svgPaths.p16ad2e00, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.p29eb7900, clipRule: "evenodd", fillRule: "evenodd" },
    ],
  },
  {
    id: "number",
    label: "Number",
    viewBox: "0 0 32.3927 32",
    paths: [{ d: svgPaths.p201abf00, clipRule: "evenodd", fillRule: "evenodd" }],
  },
  {
    id: "text",
    label: "Text",
    viewBox: "0 0 32 32",
    paths: [
      { d: svgPaths.p34b51200, clipRule: "evenodd", fillRule: "evenodd" },
      { d: svgPaths.pa045bc0 },
    ],
  },
];

function GradientDefs() {
  return (
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="hbar_grad_0"
        x1="0"
        x2="32.3556"
        y1="16.1778"
        y2="16.1778"
      >
        <stop stopColor="#2378CE" />
        <stop offset="1" stopColor="#D73184" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="hbar_grad_1"
        x1="0"
        x2="32.3556"
        y1="16.1778"
        y2="16.1778"
      >
        <stop stopColor="#2378CE" />
        <stop offset="1" stopColor="#D73184" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="hbar_grad_2"
        x1="0"
        x2="32.3556"
        y1="16.1778"
        y2="16.1778"
      >
        <stop stopColor="#2378CE" />
        <stop offset="1" stopColor="#D73184" />
      </linearGradient>
    </defs>
  );
}

export function DataLabBuilder() {
  const [selected, setSelected] = useState<string>("horizontal-bar");
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center flex-1 h-full w-full px-[32px] py-[32px]"
      style={{ background: "var(--card)" }}
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-[8px] mb-[32px]">
        <p
          className="font-['Sarabun',sans-serif] text-foreground text-center capitalize"
          style={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "33px",
          }}
        >
          Build Your Report
        </p>
        <p
          className="font-['Sarabun',sans-serif] text-foreground text-center max-w-[413px]"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: 400,
            lineHeight: "18px",
          }}
        >
          Select a visualization to start building a report according to your
          specific Dimensions and Measures.
        </p>
      </div>

      {/* Chart type grid */}
      <div className="flex flex-wrap gap-[16px] justify-center" style={{ maxWidth: "652px" }}>
        {CHART_TYPES.map((chart) => {
          const isSelected = selected === chart.id;
          return (
            <button
              key={chart.id}
              className="flex flex-col items-center justify-center gap-[4px] cursor-pointer transition-colors"
              style={{
                width: "148px",
                height: "110px",
                borderRadius: "var(--radius)",
                background: isSelected ? "var(--muted)" : "var(--background)",
                border: isSelected
                  ? "1px solid var(--foreground)"
                  : "1px solid var(--border)",
              }}
              onClick={() => setSelected(chart.id)}
            >
              {/* Icon */}
              <div className="size-[32px] flex items-center justify-center">
                <svg
                  className="size-full"
                  fill="none"
                  viewBox={chart.viewBox}
                >
                  {chart.gradient && <GradientDefs />}
                  {chart.paths.map((path, i) => (
                    <path
                      key={i}
                      d={path.d}
                      fill={
                        chart.gradient
                          ? `url(#hbar_grad_${i})`
                          : "var(--foreground)"
                      }
                      clipRule={path.clipRule as any}
                      fillRule={path.fillRule as any}
                    />
                  ))}
                </svg>
              </div>
              {/* Label */}
              <span
                className="font-['Sarabun',sans-serif] text-foreground text-center"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: 400,
                  lineHeight: "15px",
                }}
              >
                {chart.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Build button */}
      <button
        className="mt-[32px] h-[42px] px-[32px] cursor-pointer transition-colors"
        style={{
          fontFamily: "'Sarabun', sans-serif",
          fontWeight: 600,
          fontSize: "var(--text-base)",
          borderRadius: "var(--radius-button)",
          background: "var(--button-primary)",
          color: "var(--button-primary-foreground)",
          border: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
        onClick={() => navigate(`/reports/data-lab/builder?type=${selected}`)}
      >
        Start Building →
      </button>
    </div>
  );
}