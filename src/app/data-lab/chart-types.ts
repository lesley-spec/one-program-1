/*
  Data Lab V2 — Chart catalog.

  This is a V2-only catalog. V1 (DataLabBuilder.tsx and ReportCanvas.tsx)
  already has two diverged inline copies of CHART_TYPES that we
  intentionally do not touch. See docs/data-lab-multi-model-build-instructions.md §0.
*/

import svgPaths from "../../imports/svg-t747lx98vt";

export interface ChartTypeDef {
  id: string;
  label: string;
  viewBox: string;
  paths: { d: string; clipRule?: string; fillRule?: string }[];
}

export const CHART_TYPES: ChartTypeDef[] = [
  { id: "data-table",      label: "Data Table",  viewBox: "0 0 32 32",         paths: [{ d: svgPaths.p23579000, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "number",          label: "Number",      viewBox: "0 0 32.3927 32",    paths: [{ d: svgPaths.p201abf00, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "area",            label: "Area",        viewBox: "0 0 32 32",         paths: [{ d: svgPaths.p360dea00, clipRule: "evenodd", fillRule: "evenodd" }] },
  { id: "line",            label: "Line",        viewBox: "0 0 32 32",         paths: [
    { d: svgPaths.p6827180,  clipRule: "evenodd", fillRule: "evenodd" },
    { d: svgPaths.p1511a580, clipRule: "evenodd", fillRule: "evenodd" },
  ] },
  { id: "vertical-bar",    label: "Bar",         viewBox: "0 0 32 32.3556",    paths: [
    { d: svgPaths.p1fed22a0, clipRule: "evenodd", fillRule: "evenodd" },
    { d: svgPaths.p13dfaf80, clipRule: "evenodd", fillRule: "evenodd" },
    { d: svgPaths.p536ad00,  clipRule: "evenodd", fillRule: "evenodd" },
  ] },
  { id: "horizontal-bar",  label: "H-Bar",       viewBox: "0 0 32.3556 32.1777", paths: [
    { d: svgPaths.p3810ff80 },
    { d: svgPaths.p22172480 },
    { d: svgPaths.p21c41e00 },
  ] },
  { id: "donut",           label: "Donut",       viewBox: "0 0 32 32",         paths: [{ d: svgPaths.p3ed2bff0, clipRule: "evenodd", fillRule: "evenodd" }] },
];

export function getChartType(id: string): ChartTypeDef | undefined {
  return CHART_TYPES.find((c) => c.id === id);
}
