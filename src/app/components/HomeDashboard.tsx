import { useState } from "react";
import { Link } from "react-router";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ── Figma-imported assets ── */
import svgPaths from "../../imports/svg-jlsg700ibw";
import imgScreenshot1 from "figma:asset/7687060c0bea9aaf292ab768d91f78ee560adb2c.png";
import imgForbesBlack1 from "figma:asset/28bad5c88ead278696c2ce8066c5a42b017d901f.png";
import imgScreenshot2 from "figma:asset/d1e0825036b53e605e16c95631e42ba393deb086.png";
import imgBiBlueBackground from "figma:asset/11be7d71e90e667f03c63ad034825194034043ed.png";
import imgScreenshot3 from "figma:asset/7c33bba50b8bdde73f1d4111128b402ca9d40473.png";
import imgCauf1 from "figma:asset/7d1a4c63266b60b438979857610a7a65edacac53.png";
import imgScreenshot4 from "figma:asset/1ec0a7e61b70e915c0e94790d7ef9f8a555f056c.png";
import imgCauf2 from "figma:asset/4280a763617f0265033dd55a180fc4a1def3a15c.png";
import imgScreenshot5 from "figma:asset/bd98a45c5dda7303d58b43733e2bdceb047612a3.png";
import imgImpactCreator from "figma:asset/2a1a0e15d9cb734b45057b4ad030a0b2533cb189.png";
import { imgTShirt, imgNeck, imgNeck1 } from "../../imports/svg-40g1h";
import { EditProgramHealthModal } from "./EditProgramHealthModal";
import { DateRangeCalendar, type DateRange } from "./DateRangeCalendar";
import { format } from "date-fns";

/* ── Mock chart data (Jan 01 – Jan 07) ── */
const CHART_DATA = [
  { day: "Jan 01", Clicks: 1200, Actions: 580, "Action Cost": 420, Revenue: 15200, "Total Cost": 680, CR: 1.6 },
  { day: "Jan 02", Clicks: 2800, Actions: 920, "Action Cost": 610, Revenue: 22400, "Total Cost": 1020, CR: 2.1 },
  { day: "Jan 03", Clicks: 3400, Actions: 1100, "Action Cost": 780, Revenue: 28600, "Total Cost": 1300, CR: 2.4 },
  { day: "Jan 04", Clicks: 2200, Actions: 640, "Action Cost": 510, Revenue: 18100, "Total Cost": 850, CR: 1.8 },
  { day: "Jan 05", Clicks: 3600, Actions: 1250, "Action Cost": 890, Revenue: 31200, "Total Cost": 1480, CR: 2.6 },
  { day: "Jan 06", Clicks: 1800, Actions: 490, "Action Cost": 380, Revenue: 12800, "Total Cost": 620, CR: 1.4 },
  { day: "Jan 07", Clicks: 3100, Actions: 1060, "Action Cost": 710, Revenue: 26500, "Total Cost": 1250, CR: 2.2 },
];

/* ── Metric formatting helpers ── */
const METRIC_PREFIX: Record<string, string> = {
  "Clicks": "", "Actions": "", "Action Cost": "$", "Revenue": "$", "Total Cost": "$", "CR": "",
};
const METRIC_SUFFIX: Record<string, string> = {
  "Clicks": "", "Actions": "", "Action Cost": "", "Revenue": "", "Total Cost": "", "CR": "%",
};

/* ── KPI metrics ── */
const METRICS = [
  { label: "Clicks", value: "11,834", active: true },
  { label: "Actions", value: "4,779", active: false },
  { label: "Action Cost", value: "$3,296.09", active: false },
  { label: "Revenue", value: "$123,486.09", active: false },
  { label: "Total Cost", value: "$5,398.09", active: false },
  { label: "CR", value: "1.95%", active: false },
];

/* ── To Do items ── */
const TODO_ITEMS = [
  {
    id: "tq",
    icon: "document" as const,
    text: "Review tracking quality — 3 checks need attention",
    badge: "Action needed",
    action: "Open report",
    dismiss: true,
    to: "/tracking-quality",
  },
  {
    id: "1",
    icon: "progress" as const,
    text: "Complete your account set up",
    badge: null,
    action: "Return to Checklist",
    dismiss: false,
  },
  {
    id: "2",
    icon: "bank" as const,
    text: "Fill out your finance contact",
    badge: "Past due",
    action: "Add Contact",
    dismiss: false,
  },
  {
    id: "3",
    icon: "document" as const,
    text: "Review 3 applications for Top Island Getaways campaign",
    badge: null,
    action: "View Campaign",
    dismiss: true,
  },
];

/* ── Partner data ── */
const PARTNERS = [
  { name: "Krista Horton", size: "Large", photo: "https://images.unsplash.com/photo-1694185766467-e2a104a79382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBob2xkaW5nJTIwY2hpbGQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEzMzE2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: null, bgImg: null },
  { name: "A Pinch of Healthy", size: "Large", photo: "https://images.unsplash.com/photo-1556911073-52527ac43761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGJsb2dnZXIlMjB3b21hbiUyMGtpdGNoZW58ZW58MXx8fHwxNzcxMzQ1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: null, bgImg: imgForbesBlack1 },
  { name: "Sarah", size: "Large", photo: "https://images.unsplash.com/photo-1737678812331-4250eb3efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwbGlmZXN0eWxlJTIwcG9ydHJhaXQlMjBvdXRkb29yc3xlbnwxfHx8fDE3NzEzNDUxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#185f7d", bgImg: imgBiBlueBackground },
  { name: "HollyStrand", size: "Large", photo: "https://images.unsplash.com/photo-1756277161350-39ea0f18cc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlYWNoJTIwc3RyYW5kJTIwc3VtbWVyJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzEzNDUxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: null, bgImg: imgCauf1 },
  { name: "Natalie Borton", size: "Large", photo: "https://images.unsplash.com/photo-1768599064940-611c34ef079a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd29tYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXQlMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzcxMzQ1MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: null, bgImg: imgCauf2 },
];

/* ─────────── Shared styling tokens ─────────── */
const FONT = "'Sarabun', sans-serif";

const CHART_TOOLTIP_STYLE: React.CSSProperties = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  fontFamily: FONT,
  fontSize: "var(--text-sm)",
  color: "var(--foreground)",
};

/* ─────────── Sub-components ─────────── */

function VerifiedBadge() {
  return (
    <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p2421d600} fill="#12A7EA" />
      <path
        d={svgPaths.p566ac00}
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
        transform="translate(4, 4)"
      />
    </svg>
  );
}

function SizingBadge() {
  return (
    <svg className="size-[12px] shrink-0" viewBox="0 0 12 12" fill="none">
      <rect fill="var(--foreground)" height="12" rx="2" width="12" />
      <path d={svgPaths.p2aa6b480} fill="white" />
    </svg>
  );
}

function ProgressCircle() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" viewBox="0 0 32 32" fill="none">
        <path d={svgPaths.p4373480} fill="var(--muted)" />
      </svg>
      <div className="absolute bottom-1/2 flex items-center justify-center left-1/2 right-0 top-0">
        <div className="size-[16px]" style={{ transform: "rotate(180deg) scaleY(-1)" }}>
          <svg className="block size-full" viewBox="0 0 16 16" fill="none">
            <path d={svgPaths.pa4b3300} fill="var(--accent)" />
          </svg>
        </div>
      </div>
      <span
        className="absolute inset-0 flex items-center justify-center font-['Sarabun',sans-serif]"
        style={{ fontSize: "10px", color: "var(--foreground)" }}
      >
        25%
      </span>
    </div>
  );
}

function BankIcon() {
  return (
    <div
      className="shrink-0 size-[32px] flex items-center justify-center"
      style={{ borderRadius: "16px", background: "var(--action-icon-bg)" }}
    >
      <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
        <path d="M1.5 6H14.5L8 2L1.5 6Z" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 6V11" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 6V11" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 6V11" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 6V11" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 11H14" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 13H15" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DocumentIcon() {
  return (
    <div
      className="shrink-0 size-[32px] flex items-center justify-center"
      style={{ borderRadius: "16px", background: "var(--action-icon-bg)" }}
    >
      <svg className="size-[16px]" viewBox="0 0 12.7538 16" fill="none">
        <path d={svgPaths.p18832f80} fill="var(--foreground)" />
        <path d={svgPaths.p21f2a180} fill="var(--foreground)" />
        <path d={svgPaths.p21a9c500} fill="var(--foreground)" />
      </svg>
    </div>
  );
}

/** Figma Program Health area fill (Reporting chart) */
const CHART_AREA_FILL = "#56B5FF";

function AiInsightsIcon() {
  return (
    <svg
      className="size-[16px] shrink-0"
      viewBox="0 0 16 16.2502"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.7167 7.56226C14.5864 8.63797 14.0726 9.537 13.6103 10.1853C13.3698 10.5224 12.9016 10.6006 12.5644 10.3601C12.2275 10.1195 12.1492 9.65133 12.3896 9.31421C12.6445 8.95668 12.8749 8.56268 13.0341 8.14233C13.641 8.05944 14.2094 7.85816 14.7167 7.56226Z" fill="currentColor" />
      <path d="M8.49994 0.298585C8.72227 0.298585 8.93942 0.318322 9.15131 0.354249C8.73832 0.769287 8.40377 1.26259 8.17279 1.8103C5.51436 1.98243 3.25025 4.22779 3.24994 6.81616C3.24994 7.74734 3.50972 8.61732 3.96185 9.36011C4.17712 9.71377 4.06531 10.1749 3.71185 10.3904C3.35804 10.6058 2.89598 10.4932 2.6806 10.1394C2.09005 9.16906 1.74994 8.03077 1.74994 6.81616C1.75026 3.22376 4.94617 0.298585 8.49994 0.298585Z" fill="currentColor" />
      <path d="M8.25 8.34363C7.46913 8.34363 6.79947 7.94888 6.26953 7.39246C5.98398 7.09259 5.99523 6.61758 6.29492 6.33192C6.5948 6.04637 7.0698 6.05762 7.35547 6.35731C7.7059 6.72532 8.0088 6.84363 8.25 6.84363C8.4912 6.84363 8.7941 6.72533 9.14453 6.35731C9.4302 6.05762 9.9052 6.04637 10.2051 6.33192C10.5048 6.61758 10.516 7.09259 10.2305 7.39246C9.70053 7.94888 9.03087 8.34363 8.25 8.34363Z" fill="currentColor" />
      <path d="M11.0016 10.4374C11.0967 10.4374 11.2009 10.437 11.2897 10.4423C11.3572 10.4463 11.4507 10.4546 11.5543 10.4823L11.6618 10.5175L11.818 10.5917C12.1165 10.7617 12.3262 11.0543 12.3922 11.3905L12.4127 11.5624L12.4118 11.6737C12.4053 11.7807 12.3844 11.8719 12.3668 11.9374C12.3438 12.0233 12.3101 12.1221 12.2799 12.2128C12.1707 12.5416 12.0795 12.8329 11.9245 13.078C11.6245 13.5519 11.1542 13.8932 10.61 14.0292C10.3284 14.0995 10.0233 14.0936 9.67836 14.0936H6.82094C6.47595 14.0936 6.17088 14.0995 5.8893 14.0292C5.34506 13.8932 4.87479 13.5519 4.57484 13.078C4.4198 12.8329 4.32857 12.5416 4.21938 12.2128C4.18925 12.1221 4.15551 12.0233 4.13246 11.9374C4.10908 11.8502 4.07919 11.7173 4.08656 11.5624L4.10707 11.3905C4.18407 10.9983 4.45654 10.6658 4.83754 10.5175L4.94496 10.4823C5.04856 10.4546 5.14208 10.4463 5.20961 10.4423C5.29839 10.437 5.40256 10.4374 5.4977 10.4374H11.0016ZM5.71059 11.9374C5.79101 12.1739 5.81556 12.2328 5.84242 12.2753C5.93678 12.4244 6.08418 12.5308 6.25356 12.5731C6.31272 12.5879 6.39471 12.5936 6.82094 12.5936H9.67836C10.1046 12.5936 10.1866 12.5879 10.2457 12.5731C10.4151 12.5308 10.5625 12.4244 10.6569 12.2753C10.6837 12.2328 10.7083 12.1739 10.7887 11.9374H5.71059Z" fill="currentColor" />
      <path d="M8.10244 3.85857C9.79999 3.85857 11.8585 1.7805 11.8585 0.102441C11.8585 -0.0341461 12.1414 -0.0341461 12.1414 0.102441C12.1414 1.72195 14.3072 3.85857 15.8975 3.85857C16.0342 3.85857 16.0342 4.14152 15.8975 4.14152C14.3268 4.14152 12.1414 6.44389 12.1414 7.89752C12.1414 8.03416 11.8585 8.03416 11.8585 7.89752C11.8585 6.44389 9.83901 4.14152 8.10244 4.14152C7.96585 4.14152 7.96585 3.85857 8.10244 3.85857Z" fill="currentColor" />
      <path d="M11.1416 13.4914L11.0488 13.9563C10.9582 14.4097 10.887 14.8106 10.6992 15.1418C10.4313 15.6142 9.99722 15.9698 9.48145 16.1399C9.2102 16.2293 8.91344 16.2472 8.58691 16.2502H7.91309C7.58656 16.2472 7.2898 16.2293 7.01855 16.1399C6.50278 15.9698 6.0687 15.6142 5.80078 15.1418C5.61295 14.8106 5.54185 14.4097 5.45117 13.9563L5.3584 13.4914L6.8291 13.1965L6.92188 13.6614C7.03433 14.2237 7.06565 14.3313 7.10547 14.4016C7.18968 14.5501 7.32616 14.6626 7.48828 14.7161C7.56503 14.7413 7.67652 14.7502 8.25 14.7502C8.82348 14.7502 8.93497 14.7413 9.01172 14.7161C9.17384 14.6626 9.31032 14.5501 9.39453 14.4016C9.43434 14.3313 9.46567 14.2237 9.57812 13.6614L9.6709 13.1965L11.1416 13.4914Z" fill="currentColor" />
      <path d="M7.49977 10.828V7.59363C7.49977 7.17942 7.83579 6.84363 8.25 6.84363C8.66421 6.84363 8.99977 7.17942 8.99977 7.59363V10.828C8.99977 11.2422 8.66398 11.578 8.24977 11.578C7.83555 11.578 7.49977 11.2422 7.49977 10.828Z" fill="currentColor" />
    </svg>
  );
}

function SecondaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="h-[32px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer transition-colors shrink-0 flex items-center justify-center"
      style={{
        borderRadius: "var(--radius-button)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-medium)",
        background: "var(--muted)",
        color: "var(--foreground)",
        border: "1px solid var(--muted)",
        minWidth: "65px",
      }}
    >
      {children}
    </button>
  );
}

/* ─────────── Main component ─────────── */

export function HomeDashboard() {
  const [activeMetric, setActiveMetric] = useState("Clicks");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({ from: new Date("2025-01-01"), to: new Date("2025-01-07") });

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-[24px] w-[80%] py-[48px] px-[24px]">
        {/* ── Welcome heading ── */}
        <h1
          className="font-['Sarabun',sans-serif] text-foreground capitalize"
          style={{
            fontSize: "26px",
            fontWeight: 700,
            lineHeight: "33px",
          }}
        >
          Welcome back, Christine
        </h1>

        {/* ── To Do List ── */}
        <div
          className="bg-card w-full"
          style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
        >
          <div className="flex flex-col gap-[16px] p-[24px]">
            <span
              className="font-['Sarabun',sans-serif] text-foreground"
              style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)", lineHeight: "23px" }}
            >
              To Do List
            </span>

            {TODO_ITEMS.map((item, idx) => (
              <div key={item.id}>
                {idx > 0 && (
                  <div className="w-full h-px mb-[16px]" style={{ background: "var(--border)" }} />
                )}
                <div className="flex items-center gap-[8px] w-full">
                  {/* Icon */}
                  {item.icon === "progress" && <ProgressCircle />}
                  {item.icon === "bank" && <BankIcon />}
                  {item.icon === "document" && <DocumentIcon />}

                  {/* Text + badge */}
                  <div className="flex-1 flex items-center gap-[8px]">
                    <span
                      className="font-['Sarabun',sans-serif] text-foreground"
                      style={{ fontSize: "var(--text-base)", fontWeight: 700, lineHeight: "20px" }}
                    >
                      {item.text}
                    </span>
                    {item.badge && (
                      <span
                        className="inline-flex items-center justify-center h-[24px] px-[8px] font-['Sarabun',sans-serif] shrink-0"
                        style={{
                          borderRadius: "4px",
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          background: "var(--destructive)",
                          color: "var(--destructive-foreground)",
                          lineHeight: "15px",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-[16px] shrink-0">
                    {item.dismiss && (
                      <button
                        className="font-['Sarabun',sans-serif] underline cursor-pointer"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--foreground)",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                      >
                        Dismiss
                      </button>
                    )}
                    {"to" in item && item.to ? (
                      <Link
                        to={item.to}
                        className="h-[32px] px-[16px] font-['Sarabun',sans-serif] cursor-pointer transition-colors shrink-0 flex items-center justify-center no-underline"
                        style={{
                          borderRadius: "var(--radius-button)",
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-medium)",
                          background: "var(--muted)",
                          color: "var(--foreground)",
                          border: "1px solid var(--muted)",
                          minWidth: "65px",
                        }}
                      >
                        {item.action}
                      </Link>
                    ) : (
                      <SecondaryBtn>{item.action}</SecondaryBtn>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* View All */}
            <button
              className="w-full text-center font-['Sarabun',sans-serif] underline cursor-pointer"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--foreground)",
                background: "none",
                border: "none",
                lineHeight: "18px",
              }}
            >
              View All
            </button>
          </div>
        </div>

        {/* ── Program Health (Figma 9487:50121) ── */}
        <div
          className="bg-card w-full flex flex-col"
          style={{ borderRadius: "var(--radius)", border: "1px solid var(--border-default, var(--border))" }}
        >
          {/* Header: title + Explore with AI */}
          <div className="flex items-center justify-between p-[16px]" style={{ borderBottom: "1px solid var(--border-default, var(--border))" }}>
            <span
              className="font-['Sarabun',sans-serif] text-foreground"
              style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)", lineHeight: "23px" }}
            >
              Program Health
            </span>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-[8px] h-[32px] px-[16px] cursor-pointer shrink-0"
              style={{
                borderRadius: "var(--radius-button)",
                fontFamily: FONT,
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: "18px",
                color: "var(--text-default, var(--foreground))",
                background: "transparent",
                border: "none",
                minWidth: "65px",
              }}
            >
              <AiInsightsIcon />
              Explore with AI
            </button>
          </div>

          {/* Body */}
          <div className="px-[20px] pb-[20px] flex flex-col gap-[8px]">
            {/* Controls: date range + Edit */}
            <div className="flex items-center justify-between w-full pt-[8px]">
              <DateRangeCalendar value={dateRange} onChange={setDateRange}>
                <div
                  className="flex items-center gap-[8px] h-[32px] px-[12px] overflow-hidden"
                  style={{
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--border-interactive, var(--border))",
                    minWidth: "219px",
                  }}
                >
                  <span
                    className="font-['Sarabun',sans-serif] text-foreground whitespace-nowrap"
                    style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "18px" }}
                  >
                    {format(dateRange.from, "MMM dd, yyyy")} - {format(dateRange.to, "MMM dd, yyyy")}
                  </span>
                  <svg className="size-[12px] shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p17277d00}
                      fill="var(--icon-default, var(--muted-foreground))"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </DateRangeCalendar>

              <button
                type="button"
                className="font-['Sarabun',sans-serif] cursor-pointer h-[30px] px-[10px] min-w-[65px]"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  color: "var(--text-default, var(--foreground))",
                  background: "transparent",
                  border: "none",
                  borderRadius: "var(--radius)",
                }}
                onClick={() => setEditModalOpen(true)}
              >
                Edit
              </button>
            </div>

            {/* Chart — solid area fill per Figma */}
            <div className="w-full">
              <ResponsiveContainer width="100%" height={218}>
                <AreaChart data={CHART_DATA} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="0"
                    stroke="var(--border-default, var(--border))"
                    horizontal
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{
                      fill: "var(--text-subdued, var(--muted-foreground))",
                      fontFamily: FONT,
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    domain={[0, 5000]}
                    ticks={[0, 2500, 5000]}
                    tick={{
                      fill: "var(--text-subdued, var(--muted-foreground))",
                      fontFamily: FONT,
                      fontSize: 11,
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => {
                      if (v >= 1000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K`;
                      return `${v}`;
                    }}
                  />
                  <Tooltip
                    contentStyle={CHART_TOOLTIP_STYLE}
                    labelStyle={{ color: "var(--foreground)", fontWeight: "var(--font-weight-medium)" }}
                    formatter={(value: number) => {
                      const prefix = METRIC_PREFIX[activeMetric] ?? "";
                      const suffix = METRIC_SUFFIX[activeMetric] ?? "";
                      return [`${prefix}${value.toLocaleString()}${suffix}`, activeMetric];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={activeMetric}
                    stroke="none"
                    fill={CHART_AREA_FILL}
                    fillOpacity={1}
                    dot={false}
                    activeDot={{ r: 4, fill: CHART_AREA_FILL, stroke: "var(--card)", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* KPI metrics — selected uses background-dimmed */}
            <div className="flex w-full" style={{ height: "88px" }}>
              {METRICS.map((m) => {
                const selected = activeMetric === m.label;
                return (
                  <button
                    key={m.label}
                    type="button"
                    className="flex-1 flex flex-col items-center justify-center gap-[6px] p-[10px] cursor-pointer transition-colors"
                    style={{
                      borderRadius: selected ? "var(--radius)" : "0",
                      background: selected ? "var(--background-dimmed)" : "transparent",
                      border: "none",
                    }}
                    onClick={() => setActiveMetric(m.label)}
                  >
                    <span
                      className="font-['Sarabun',sans-serif] text-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: "18px" }}
                    >
                      {m.label}
                    </span>
                    <span
                      className="font-['Sarabun',sans-serif] text-foreground"
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "20px",
                      }}
                    >
                      {m.value}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Partners you'll love ── */}
        <div
          className="bg-card w-full"
          style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
        >
          <div className="flex flex-col gap-[20px] px-[30px] py-[20px]">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <span
                className="font-['Sarabun',sans-serif] text-foreground"
                style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)", lineHeight: "23px" }}
              >
                Partners you'll love
              </span>
              <button
                className="font-['Sarabun',sans-serif] underline cursor-pointer"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--foreground)",
                  background: "none",
                  border: "none",
                  lineHeight: "18px",
                }}
              >
                View All
              </button>
            </div>

            {/* Partner cards */}
            <div className="flex gap-[30px] w-full overflow-hidden">
              {PARTNERS.map((p) => (
                <div key={p.name} className="flex-1 flex flex-col gap-[10px] min-w-0">
                  {/* Photo */}
                  <div
                    className="relative w-full overflow-hidden shrink-0"
                    style={{
                      borderRadius: "var(--radius)",
                      border: "1px solid var(--border)",
                      aspectRatio: "1",
                    }}
                  >
                    {p.bgImg && p.bg && (
                      <div
                        className="absolute inset-[19%] rounded-[4px]"
                        style={{ background: p.bg }}
                      >
                        <img
                          alt=""
                          src={p.bgImg}
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[4px]"
                        />
                      </div>
                    )}
                    {p.bgImg && !p.bg && (
                      <div className="absolute inset-[19%] overflow-hidden pointer-events-none rounded-[4px]">
                        <img
                          alt=""
                          src={p.bgImg}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <img
                      alt={p.name}
                      src={p.photo}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-[5px] w-full">
                    <div className="flex items-center gap-[10px]">
                      <span
                        className="font-['Sarabun',sans-serif] text-foreground truncate"
                        style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: "18px" }}
                      >
                        {p.name}
                      </span>
                      <VerifiedBadge />
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <div
                        className="shrink-0 flex items-center justify-center rounded-[2px] h-[12px] px-[2.5px]"
                        style={{ background: "var(--foreground)" }}
                      >
                        <span
                          className="font-['Sarabun',sans-serif] text-center leading-[12px]"
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "var(--background)",
                          }}
                        >
                          L
                        </span>
                      </div>
                      <span
                        className="font-['Sarabun',sans-serif] text-foreground"
                        style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "18px" }}
                      >
                        {p.size}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Maximize ROI Promo Banner ── */}
        <div
          className="w-full relative overflow-hidden"
          style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", background: "var(--muted)" }}
        >
          <div className="flex items-center w-full">
            {/* Left content */}
            <div className="flex flex-col gap-[16px] p-[24px] pr-[64px] flex-1">
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-wrap items-center gap-[10px]">
                  <span
                    className="font-['Sarabun',sans-serif] text-foreground"
                    style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-medium)", lineHeight: "23px" }}
                  >
                    Maximize influencer marketing ROI with
                  </span>
                  <img
                    alt="impact.com / creator"
                    src={imgImpactCreator}
                    className="h-[23px] w-auto object-contain shrink-0 pointer-events-none"
                  />
                </div>
                <p
                  className="font-['Sarabun',sans-serif] text-muted-foreground"
                  style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-normal)", lineHeight: "18px" }}
                >
                  Discover the right creators for your business and enhance your program with comprehensive
                  performance insights, streamlining every step from recruitment to evolution.
                </p>
              </div>
              <button
                className="h-[40px] px-[15px] font-['Sarabun',sans-serif] cursor-pointer transition-colors self-start"
                style={{
                  borderRadius: "var(--radius-button)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  background: "var(--foreground)",
                  color: "var(--background)",
                  border: "none",
                  lineHeight: "24px",
                }}
              >
                Get Started
              </button>
            </div>

            {/* Right illustration area — uses imported SVG mask images */}
            <div className="relative shrink-0 w-[138px] h-[123px] mr-[24px] overflow-hidden">
              {/* Decorative circles using imported mask assets */}
              <div
                className="absolute size-[70px] right-[8px] top-[4px] rounded-full overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #F77300, #EB0987)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  <img
                    src={`data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" fill="%23F77300" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" /></svg>')}`}
                    alt=""
                    className="size-[40px] opacity-60 pointer-events-none"
                    style={{ maskImage: `url('${imgTShirt}')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}
                  />
                </div>
              </div>
              <div
                className="absolute size-[50px] right-[60px] top-[20px] rounded-full overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #238BDC, #D73184)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  <img
                    src={`data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" fill="%23238BDC" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" /></svg>')}`}
                    alt=""
                    className="size-[28px] opacity-60 pointer-events-none"
                    style={{ maskImage: `url('${imgNeck}')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}
                  />
                </div>
              </div>
              <div
                className="absolute size-[44px] left-[12px] bottom-[4px] rounded-full overflow-hidden"
                style={{
                  background: "var(--accent)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  <img
                    src={`data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" fill="%230077DB" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" /></svg>')}`}
                    alt=""
                    className="size-[24px] opacity-60 pointer-events-none"
                    style={{ maskImage: `url('${imgNeck1}')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}
                  />
                </div>
              </div>
            </div>

            {/* Triple dots menu */}
            <button
              className="absolute top-[16px] right-[16px] size-[32px] flex items-center justify-center cursor-pointer"
              style={{ background: "none", border: "none" }}
            >
              <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
                <path clipRule="evenodd" d={svgPaths.p2f8c8800} fill="var(--foreground)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p938e400} fill="var(--foreground)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3c3700} fill="var(--foreground)" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Edit Program Health Modal */}
      <EditProgramHealthModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={(rows, goals, sparkLines) => {
          console.log("Saved measures:", rows, "Goals:", goals, "Spark lines:", sparkLines);
        }}
      />
    </div>
  );
}