"use strict";
/// <reference types="@figma/plugin-typings" />
/*
 * Reporting Mock Generator
 *
 * Generates reporting mocks in Figma:
 *  - Native vector charts modeled on recharts chart types (no images, no runtime recharts)
 *  - Library-driven data tables with per-column type variants
 *
 * Both outputs are wrapped in a frame that has the Styleguide V2 collection's
 * "Vnext" mode explicitly set, so every nested token resolves in Vnext.
 */
// ---------------------------------------------------------------------------
// Configuration the agent should adapt at runtime
// ---------------------------------------------------------------------------
const STYLEGUIDE_LIBRARY_NAME_MATCHERS = [/styleguide\s*v?2/i, /style\s*guide\s*v?2/i];
const VNEXT_MODE_MATCHERS = [/^v?next$/i, /vnext/i];
const TABLE_COMPONENT_NAME_MATCHERS = [/data\s*table/i, /^table$/i, /table\s*row/i, /table\s*cell/i];
const TABLE_CELL_TYPE_PROPERTY_MATCHERS = [/type/i, /variant/i, /cell.?type/i, /data.?type/i];
const TABLE_HEADER_PROPERTY_MATCHERS = [/header/i, /is.?header/i];
/**
 * If you know the exact published component key for the Styleguide V2 Table
 * component, paste it here and the plugin will import it directly. Leave
 * empty to fall back to scanning the current document for a matching
 * component or instance.
 */
const TABLE_COMPONENT_KEY = "";
const VARIANT_VALUE_HINTS = {
    Text: [/^text$/i, /^string$/i, /label/i],
    Dollar: [/dollar/i, /currency/i, /usd/i, /money/i, /^\$/],
    Number: [/^number$/i, /numeric/i, /count/i, /int/i, /\d/],
};
// ---------------------------------------------------------------------------
// Plugin entry
// ---------------------------------------------------------------------------
figma.showUI(__html__, { width: 480, height: 680, themeColors: true });
const ds = {
    collection: null,
    vnextModeId: null,
    tableComponent: null,
};
void initialize();
async function initialize() {
    try {
        notify("status", "Discovering Styleguide V2…");
        const { collection, vnextModeId, warnings } = await resolveStyleguideV2();
        ds.collection = collection;
        ds.vnextModeId = vnextModeId;
        notify("status", "Locating Table component…");
        ds.tableComponent = await resolveTableComponent();
        const summary = [];
        summary.push(collection ? `Styleguide V2 found` : `Styleguide V2 NOT found`);
        summary.push(vnextModeId ? `Vnext mode resolved` : `Vnext mode NOT found`);
        summary.push(ds.tableComponent ? `Table component ready` : `Table component NOT found`);
        if (warnings.length)
            summary.push(`(${warnings.join("; ")})`);
        notify("ready", summary.join(" · "));
    }
    catch (err) {
        notify("error", `Init failed: ${errMessage(err)}`);
    }
}
figma.ui.onmessage = async (raw) => {
    const msg = raw;
    try {
        if (msg.type === "insert-chart") {
            await handleInsertChart(msg.payload);
        }
        else if (msg.type === "insert-table") {
            await handleInsertTable(msg.payload);
        }
    }
    catch (err) {
        notify("error", errMessage(err));
    }
};
// ---------------------------------------------------------------------------
// Design system discovery
// ---------------------------------------------------------------------------
async function resolveStyleguideV2() {
    const warnings = [];
    let libraryCollections = [];
    try {
        libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
    }
    catch (err) {
        warnings.push(`team library unavailable (${errMessage(err)})`);
    }
    const libCollection = libraryCollections.find((c) => STYLEGUIDE_LIBRARY_NAME_MATCHERS.some((re) => re.test(c.libraryName || "") || re.test(c.name || "")));
    let collection = null;
    if (libCollection) {
        try {
            const vars = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(libCollection.key);
            if (vars.length > 0) {
                const imported = await figma.variables.importVariableByKeyAsync(vars[0].key);
                collection = await figma.variables.getVariableCollectionByIdAsync(imported.variableCollectionId);
            }
        }
        catch (err) {
            warnings.push(`could not import library variables (${errMessage(err)})`);
        }
    }
    if (!collection) {
        const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
        collection =
            localCollections.find((c) => STYLEGUIDE_LIBRARY_NAME_MATCHERS.some((re) => re.test(c.name))) || null;
    }
    let vnextModeId = null;
    if (collection) {
        const mode = collection.modes.find((m) => VNEXT_MODE_MATCHERS.some((re) => re.test(m.name)));
        vnextModeId = mode ? mode.modeId : null;
        if (!mode)
            warnings.push(`no Vnext mode on ${collection.name}`);
    }
    return { collection, vnextModeId, warnings };
}
async function resolveTableComponent() {
    // 1. Explicit key wins.
    if (TABLE_COMPONENT_KEY) {
        try {
            return await figma.importComponentByKeyAsync(TABLE_COMPONENT_KEY);
        }
        catch (err) {
            console.warn("importComponentByKeyAsync failed:", errMessage(err));
        }
    }
    // 2. Look for a local component (or component set) by name. Loading every
    //    page is required because the plugin runs in `dynamic-page` mode.
    await figma.loadAllPagesAsync();
    const localMatch = findLocalComponent(figma.root);
    if (localMatch)
        return localMatch;
    // 3. Look for an existing instance in the document whose main component
    //    came from the library and matches our name. This lets the plugin
    //    "borrow" a component already used in the file.
    const instanceMatch = await findInstanceMainComponent();
    return instanceMatch;
}
function findLocalComponent(root) {
    if (!("findAllWithCriteria" in root))
        return null;
    const all = root.findAllWithCriteria({
        types: ["COMPONENT_SET", "COMPONENT"],
    });
    for (const node of all) {
        if (TABLE_COMPONENT_NAME_MATCHERS.some((re) => re.test(node.name))) {
            return node;
        }
    }
    return null;
}
async function findInstanceMainComponent() {
    const instances = figma.root.findAllWithCriteria({ types: ["INSTANCE"] });
    for (const inst of instances) {
        const main = await inst.getMainComponentAsync();
        if (!main)
            continue;
        const set = main.parent && main.parent.type === "COMPONENT_SET" ? main.parent : null;
        const candidateName = set ? set.name : main.name;
        if (TABLE_COMPONENT_NAME_MATCHERS.some((re) => re.test(candidateName))) {
            return set || main;
        }
    }
    return null;
}
// ---------------------------------------------------------------------------
// Frame creation + Vnext mode binding
// ---------------------------------------------------------------------------
function createReportFrame(title, width, height) {
    const frame = figma.createFrame();
    frame.name = title;
    frame.resize(width, height);
    frame.cornerRadius = 12;
    frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.92 } }];
    frame.strokeWeight = 1;
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "FIXED";
    frame.counterAxisSizingMode = "FIXED";
    frame.itemSpacing = 16;
    frame.paddingLeft = 24;
    frame.paddingRight = 24;
    frame.paddingTop = 20;
    frame.paddingBottom = 24;
    if (ds.collection && ds.vnextModeId) {
        try {
            frame.setExplicitVariableModeForCollection(ds.collection, ds.vnextModeId);
        }
        catch (err) {
            console.warn("Failed to set Vnext mode:", errMessage(err));
        }
    }
    return frame;
}
function placeAtViewport(frame) {
    const c = figma.viewport.center;
    frame.x = Math.round(c.x - frame.width / 2);
    frame.y = Math.round(c.y - frame.height / 2);
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);
}
// ---------------------------------------------------------------------------
// Typography helper
// ---------------------------------------------------------------------------
async function loadFonts() {
    await Promise.all([
        figma.loadFontAsync({ family: "Inter", style: "Regular" }),
        figma.loadFontAsync({ family: "Inter", style: "Medium" }),
        figma.loadFontAsync({ family: "Inter", style: "Semi Bold" }),
    ]);
}
function makeText(characters, opts) {
    const t = figma.createText();
    t.fontName = { family: "Inter", style: opts?.weight || "Regular" };
    t.fontSize = opts?.size ?? 12;
    t.characters = characters;
    t.fills = [{ type: "SOLID", color: opts?.color || { r: 0.1, g: 0.1, b: 0.12 } }];
    return t;
}
// ---------------------------------------------------------------------------
// CHART INSERT
// ---------------------------------------------------------------------------
async function handleInsertChart(payload) {
    await loadFonts();
    const FRAME_W = 720;
    const FRAME_H = 460;
    const frame = createReportFrame(`Chart · ${payload.chartType}`, FRAME_W, FRAME_H);
    const title = makeText(humanizeChartTitle(payload.chartType), {
        weight: "Semi Bold",
        size: 16,
    });
    frame.appendChild(title);
    const subtitle = makeText("Mock report · Vnext mode", { size: 11, color: { r: 0.45, g: 0.45, b: 0.5 } });
    frame.appendChild(subtitle);
    const plot = figma.createFrame();
    plot.name = "plot";
    plot.layoutMode = "NONE";
    plot.resize(FRAME_W - 48, FRAME_H - 120);
    plot.fills = [];
    plot.clipsContent = false;
    frame.appendChild(plot);
    const data = makeMockSeries(payload.seriesCount, payload.pointCount);
    drawChart(plot, payload.chartType, data);
    placeAtViewport(frame);
    notify("status", `Inserted ${payload.chartType}.`);
}
function humanizeChartTitle(t) {
    return t.replace(/([A-Z])/g, " $1").trim();
}
function makeMockSeries(seriesCount, pointCount) {
    const series = [];
    for (let s = 0; s < seriesCount; s++) {
        const arr = [];
        const phase = s * 0.9;
        for (let i = 0; i < pointCount; i++) {
            const t = i / Math.max(1, pointCount - 1);
            const base = 0.55 + 0.35 * Math.sin(t * Math.PI * 1.2 + phase);
            const trend = 0.15 * t;
            const jitter = 0.06 * Math.sin(i * 1.7 + s);
            arr.push(Math.max(0.05, Math.min(0.98, base + trend + jitter)));
        }
        series.push(arr);
    }
    return series;
}
const SERIES_COLORS = [
    { r: 0.05, g: 0.6, b: 1.0 },
    { r: 0.95, g: 0.46, b: 0.13 },
    { r: 0.31, g: 0.76, b: 0.47 },
    { r: 0.68, g: 0.4, b: 0.92 },
];
function drawChart(plot, type, data) {
    const W = plot.width;
    const H = plot.height;
    switch (type) {
        case "LineChart":
            drawAxes(plot, W, H);
            data.forEach((s, i) => drawLine(plot, s, SERIES_COLORS[i % SERIES_COLORS.length], W, H));
            break;
        case "BarChart":
            drawAxes(plot, W, H);
            drawBars(plot, data, W, H);
            break;
        case "AreaChart":
            drawAxes(plot, W, H);
            data.forEach((s, i) => drawArea(plot, s, SERIES_COLORS[i % SERIES_COLORS.length], W, H));
            break;
        case "PieChart":
            drawPie(plot, data[0] || [0.3, 0.25, 0.2, 0.15, 0.1], W, H);
            break;
        case "ScatterChart":
            drawAxes(plot, W, H);
            data.forEach((s, i) => drawScatter(plot, s, SERIES_COLORS[i % SERIES_COLORS.length], W, H));
            break;
        case "ComposedChart":
            drawAxes(plot, W, H);
            drawBars(plot, [data[0]], W, H);
            if (data[1])
                drawLine(plot, data[1], SERIES_COLORS[1], W, H);
            break;
        case "RadarChart":
            drawRadar(plot, data, W, H);
            break;
        case "RadialBarChart":
            drawRadialBars(plot, data[0] || [0.3, 0.5, 0.7, 0.9], W, H);
            break;
        case "Treemap":
            drawTreemap(plot, data[0] || [0.32, 0.22, 0.18, 0.12, 0.1, 0.06], W, H);
            break;
        case "Funnel":
            drawFunnel(plot, data[0] || [1.0, 0.78, 0.55, 0.32, 0.18], W, H);
            break;
        case "Sankey":
            drawSankey(plot, W, H);
            break;
    }
}
// ---------------------------------------------------------------------------
// Vector chart primitives
// ---------------------------------------------------------------------------
const AXIS_COLOR = { r: 0.78, g: 0.78, b: 0.82 };
const GRID_COLOR = { r: 0.92, g: 0.92, b: 0.94 };
const PADDING_L = 36;
const PADDING_R = 16;
const PADDING_T = 16;
const PADDING_B = 28;
function plotArea(W, H) {
    return {
        x: PADDING_L,
        y: PADDING_T,
        w: W - PADDING_L - PADDING_R,
        h: H - PADDING_T - PADDING_B,
    };
}
function drawAxes(plot, W, H) {
    const a = plotArea(W, H);
    const gridCount = 4;
    for (let i = 0; i <= gridCount; i++) {
        const y = a.y + (a.h * i) / gridCount;
        const line = figma.createLine();
        line.x = a.x;
        line.y = y;
        line.resize(a.w, 0);
        line.strokes = [{ type: "SOLID", color: GRID_COLOR }];
        line.strokeWeight = 1;
        plot.appendChild(line);
    }
    const xAxis = figma.createLine();
    xAxis.x = a.x;
    xAxis.y = a.y + a.h;
    xAxis.resize(a.w, 0);
    xAxis.strokes = [{ type: "SOLID", color: AXIS_COLOR }];
    xAxis.strokeWeight = 1;
    plot.appendChild(xAxis);
    const yAxis = figma.createLine();
    yAxis.x = a.x;
    yAxis.y = a.y;
    yAxis.resize(0, a.h);
    yAxis.rotation = -90;
    yAxis.strokes = [{ type: "SOLID", color: AXIS_COLOR }];
    yAxis.strokeWeight = 1;
    plot.appendChild(yAxis);
}
function drawLine(plot, series, color, W, H) {
    const a = plotArea(W, H);
    const path = seriesToPath(series, a);
    const v = figma.createVector();
    v.vectorPaths = [{ windingRule: "NONZERO", data: path }];
    v.strokes = [{ type: "SOLID", color }];
    v.strokeWeight = 2;
    v.strokeCap = "ROUND";
    v.strokeJoin = "ROUND";
    v.fills = [];
    plot.appendChild(v);
    series.forEach((val, i) => {
        const cx = a.x + (a.w * i) / Math.max(1, series.length - 1);
        const cy = a.y + a.h - val * a.h;
        const dot = figma.createEllipse();
        dot.resize(6, 6);
        dot.x = cx - 3;
        dot.y = cy - 3;
        dot.fills = [{ type: "SOLID", color }];
        dot.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        dot.strokeWeight = 1.5;
        plot.appendChild(dot);
    });
}
function seriesToPath(series, a) {
    let d = "";
    series.forEach((v, i) => {
        const x = a.x + (a.w * i) / Math.max(1, series.length - 1);
        const y = a.y + a.h - v * a.h;
        d += `${i === 0 ? "M" : " L"} ${x} ${y}`;
    });
    return d;
}
function drawBars(plot, dataSets, W, H) {
    const a = plotArea(W, H);
    const groups = dataSets[0].length;
    const groupW = a.w / groups;
    const barGap = 4;
    const groupPadding = 8;
    const barW = Math.max(6, (groupW - groupPadding - barGap * (dataSets.length - 1)) / dataSets.length);
    dataSets.forEach((series, sIdx) => {
        series.forEach((val, i) => {
            const x = a.x + i * groupW + groupPadding / 2 + sIdx * (barW + barGap);
            const h = val * a.h;
            const y = a.y + a.h - h;
            const r = figma.createRectangle();
            r.x = x;
            r.y = y;
            r.resize(barW, h);
            r.cornerRadius = 3;
            r.fills = [{ type: "SOLID", color: SERIES_COLORS[sIdx % SERIES_COLORS.length] }];
            plot.appendChild(r);
        });
    });
}
function drawArea(plot, series, color, W, H) {
    const a = plotArea(W, H);
    let d = "";
    series.forEach((v, i) => {
        const x = a.x + (a.w * i) / Math.max(1, series.length - 1);
        const y = a.y + a.h - v * a.h;
        d += `${i === 0 ? "M" : " L"} ${x} ${y}`;
    });
    d += ` L ${a.x + a.w} ${a.y + a.h} L ${a.x} ${a.y + a.h} Z`;
    const v = figma.createVector();
    v.vectorPaths = [{ windingRule: "NONZERO", data: d }];
    v.fills = [{ type: "SOLID", color, opacity: 0.25 }];
    v.strokes = [{ type: "SOLID", color }];
    v.strokeWeight = 2;
    plot.appendChild(v);
}
function drawPie(plot, values, W, H) {
    const total = values.reduce((s, n) => s + n, 0) || 1;
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) * 0.35;
    let start = -Math.PI / 2;
    values.forEach((val, i) => {
        const sweep = (val / total) * Math.PI * 2;
        const path = arcPath(cx, cy, r, start, start + sweep);
        const v = figma.createVector();
        v.vectorPaths = [{ windingRule: "NONZERO", data: path }];
        v.fills = [{ type: "SOLID", color: SERIES_COLORS[i % SERIES_COLORS.length] }];
        plot.appendChild(v);
        start += sweep;
    });
}
function arcPath(cx, cy, r, a0, a1) {
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
}
function drawScatter(plot, series, color, W, H) {
    const a = plotArea(W, H);
    series.forEach((v, i) => {
        const cx = a.x + (a.w * (i + 0.5)) / series.length;
        const cy = a.y + a.h - v * a.h;
        const dot = figma.createEllipse();
        dot.resize(10, 10);
        dot.x = cx - 5;
        dot.y = cy - 5;
        dot.fills = [{ type: "SOLID", color, opacity: 0.8 }];
        plot.appendChild(dot);
    });
}
function drawRadar(plot, data, W, H) {
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) * 0.4;
    const points = (data[0] || [0.5, 0.5, 0.5, 0.5, 0.5]).length;
    for (let g = 1; g <= 4; g++) {
        const gr = (r * g) / 4;
        let d = "";
        for (let i = 0; i < points; i++) {
            const ang = -Math.PI / 2 + (i * Math.PI * 2) / points;
            const x = cx + gr * Math.cos(ang);
            const y = cy + gr * Math.sin(ang);
            d += `${i === 0 ? "M" : " L"} ${x} ${y}`;
        }
        d += " Z";
        const v = figma.createVector();
        v.vectorPaths = [{ windingRule: "NONZERO", data: d }];
        v.strokes = [{ type: "SOLID", color: GRID_COLOR }];
        v.strokeWeight = 1;
        v.fills = [];
        plot.appendChild(v);
    }
    data.forEach((series, sIdx) => {
        let d = "";
        for (let i = 0; i < series.length; i++) {
            const ang = -Math.PI / 2 + (i * Math.PI * 2) / series.length;
            const rr = r * series[i];
            const x = cx + rr * Math.cos(ang);
            const y = cy + rr * Math.sin(ang);
            d += `${i === 0 ? "M" : " L"} ${x} ${y}`;
        }
        d += " Z";
        const v = figma.createVector();
        v.vectorPaths = [{ windingRule: "NONZERO", data: d }];
        const color = SERIES_COLORS[sIdx % SERIES_COLORS.length];
        v.fills = [{ type: "SOLID", color, opacity: 0.2 }];
        v.strokes = [{ type: "SOLID", color }];
        v.strokeWeight = 2;
        plot.appendChild(v);
    });
}
function drawRadialBars(plot, values, W, H) {
    const cx = W / 2;
    const cy = H / 2;
    const rMax = Math.min(W, H) * 0.4;
    const rMin = rMax * 0.35;
    const band = (rMax - rMin) / values.length;
    values.forEach((v, i) => {
        const rOuter = rMin + (i + 0.85) * band;
        const rInner = rMin + i * band;
        const sweep = v * Math.PI * 1.8;
        const start = -Math.PI / 2;
        const path = ringArcPath(cx, cy, rInner, rOuter, start, start + sweep);
        const node = figma.createVector();
        node.vectorPaths = [{ windingRule: "NONZERO", data: path }];
        node.fills = [{ type: "SOLID", color: SERIES_COLORS[i % SERIES_COLORS.length] }];
        plot.appendChild(node);
    });
}
function ringArcPath(cx, cy, rIn, rOut, a0, a1) {
    const large = a1 - a0 > Math.PI ? 1 : 0;
    const x0o = cx + rOut * Math.cos(a0);
    const y0o = cy + rOut * Math.sin(a0);
    const x1o = cx + rOut * Math.cos(a1);
    const y1o = cy + rOut * Math.sin(a1);
    const x0i = cx + rIn * Math.cos(a0);
    const y0i = cy + rIn * Math.sin(a0);
    const x1i = cx + rIn * Math.cos(a1);
    const y1i = cy + rIn * Math.sin(a1);
    return `M ${x0o} ${y0o} A ${rOut} ${rOut} 0 ${large} 1 ${x1o} ${y1o} L ${x1i} ${y1i} A ${rIn} ${rIn} 0 ${large} 0 ${x0i} ${y0i} Z`;
}
function drawTreemap(plot, values, W, H) {
    // Simple squarified-ish layout: alternate horizontal/vertical splits
    const total = values.reduce((s, n) => s + n, 0) || 1;
    const norm = values.map((v) => v / total);
    layoutTreemap(plot, norm, 0, 0, W, H, true, 0);
}
function layoutTreemap(plot, values, x, y, w, h, horizontal, depth) {
    if (values.length === 0)
        return;
    if (values.length === 1) {
        drawTreeRect(plot, x, y, w, h, depth);
        return;
    }
    const half = Math.ceil(values.length / 2);
    const left = values.slice(0, half);
    const right = values.slice(half);
    const leftSum = left.reduce((s, n) => s + n, 0);
    const total = leftSum + right.reduce((s, n) => s + n, 0) || 1;
    const ratio = leftSum / total;
    if (horizontal) {
        layoutTreemap(plot, left, x, y, w * ratio, h, !horizontal, depth + 1);
        layoutTreemap(plot, right, x + w * ratio, y, w * (1 - ratio), h, !horizontal, depth + 1);
    }
    else {
        layoutTreemap(plot, left, x, y, w, h * ratio, !horizontal, depth + 1);
        layoutTreemap(plot, right, x, y + h * ratio, w, h * (1 - ratio), !horizontal, depth + 1);
    }
}
function drawTreeRect(plot, x, y, w, h, depth) {
    const r = figma.createRectangle();
    r.x = x + 2;
    r.y = y + 2;
    r.resize(Math.max(1, w - 4), Math.max(1, h - 4));
    r.cornerRadius = 4;
    r.fills = [{ type: "SOLID", color: SERIES_COLORS[depth % SERIES_COLORS.length], opacity: 0.85 }];
    plot.appendChild(r);
}
function drawFunnel(plot, values, W, H) {
    const stepH = H / values.length;
    values.forEach((v, i) => {
        const wTop = v * W * 0.9;
        const next = values[i + 1] != null ? values[i + 1] : v * 0.85;
        const wBot = next * W * 0.9;
        const xTop = (W - wTop) / 2;
        const xBot = (W - wBot) / 2;
        const yTop = i * stepH + 2;
        const yBot = (i + 1) * stepH - 2;
        const path = `M ${xTop} ${yTop} L ${xTop + wTop} ${yTop} L ${xBot + wBot} ${yBot} L ${xBot} ${yBot} Z`;
        const node = figma.createVector();
        node.vectorPaths = [{ windingRule: "NONZERO", data: path }];
        node.fills = [{ type: "SOLID", color: SERIES_COLORS[i % SERIES_COLORS.length] }];
        plot.appendChild(node);
    });
}
function drawSankey(plot, W, H) {
    const sources = [
        { label: "A", weight: 0.5 },
        { label: "B", weight: 0.3 },
        { label: "C", weight: 0.2 },
    ];
    const targets = [
        { label: "X", weight: 0.45 },
        { label: "Y", weight: 0.35 },
        { label: "Z", weight: 0.2 },
    ];
    const nodeW = 14;
    const gap = 8;
    const srcX = 20;
    const tgtX = W - nodeW - 20;
    const layoutCol = (col, x) => {
        const totalH = H - gap * (col.length - 1) - 20;
        let y = 10;
        return col.map((c) => {
            const h = c.weight * totalH;
            const rect = figma.createRectangle();
            rect.x = x;
            rect.y = y;
            rect.resize(nodeW, h);
            rect.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.22, b: 0.28 } }];
            plot.appendChild(rect);
            const out = { x, y, h };
            y += h + gap;
            return out;
        });
    };
    const srcRects = layoutCol(sources, srcX);
    const tgtRects = layoutCol(targets, tgtX);
    for (let i = 0; i < srcRects.length; i++) {
        for (let j = 0; j < tgtRects.length; j++) {
            const s = srcRects[i];
            const t = tgtRects[j];
            const thickness = Math.min(s.h, t.h) * 0.5;
            const y1 = s.y + s.h / 2;
            const y2 = t.y + t.h / 2;
            const cx1 = srcX + nodeW + (tgtX - srcX - nodeW) * 0.4;
            const cx2 = srcX + nodeW + (tgtX - srcX - nodeW) * 0.6;
            const path = `M ${srcX + nodeW} ${y1 - thickness / 2} C ${cx1} ${y1 - thickness / 2}, ${cx2} ${y2 - thickness / 2}, ${tgtX} ${y2 - thickness / 2} L ${tgtX} ${y2 + thickness / 2} C ${cx2} ${y2 + thickness / 2}, ${cx1} ${y1 + thickness / 2}, ${srcX + nodeW} ${y1 + thickness / 2} Z`;
            const v = figma.createVector();
            v.vectorPaths = [{ windingRule: "NONZERO", data: path }];
            v.fills = [
                { type: "SOLID", color: SERIES_COLORS[(i + j) % SERIES_COLORS.length], opacity: 0.18 },
            ];
            plot.appendChild(v);
        }
    }
}
// ---------------------------------------------------------------------------
// TABLE INSERT
// ---------------------------------------------------------------------------
async function handleInsertTable(payload) {
    await loadFonts();
    const FRAME_W = Math.max(520, payload.columns.length * 140 + 48);
    const FRAME_H = 120 + (payload.rows + 1) * 44;
    const frame = createReportFrame("Data Table", FRAME_W, FRAME_H);
    const title = makeText("Data Table", { weight: "Semi Bold", size: 16 });
    frame.appendChild(title);
    const subtitle = makeText(`Mock report · ${payload.rows} rows · Vnext mode`, {
        size: 11,
        color: { r: 0.45, g: 0.45, b: 0.5 },
    });
    frame.appendChild(subtitle);
    if (ds.tableComponent) {
        const tableContainer = await buildLibraryTable(payload);
        frame.appendChild(tableContainer);
    }
    else {
        const fallback = await buildFallbackTable(payload);
        frame.appendChild(fallback);
    }
    placeAtViewport(frame);
    notify("status", `Inserted table (${payload.columns.length} columns, ${payload.rows} rows)${ds.tableComponent ? "" : " · fallback (library Table not found)"}.`);
}
async function buildLibraryTable(payload) {
    const container = figma.createFrame();
    container.name = "Table";
    container.layoutMode = "VERTICAL";
    container.primaryAxisSizingMode = "AUTO";
    container.counterAxisSizingMode = "AUTO";
    container.itemSpacing = 0;
    container.fills = [];
    // The library Table component may either:
    //   (a) be a single instance that exposes row/cell configuration via component properties, or
    //   (b) be a composition where you instantiate one component per row.
    // We attempt (b) first because it maps cleanly to per-row variants.
    const cellVariantProperty = findCellVariantPropertyName();
    const headerProperty = findHeaderPropertyName();
    // Header row
    const headerRow = await instantiateTableRow(payload.columns, "header", cellVariantProperty, headerProperty);
    container.appendChild(headerRow);
    for (let r = 0; r < payload.rows; r++) {
        const bodyRow = await instantiateTableRow(payload.columns, "body", cellVariantProperty, headerProperty, r);
        container.appendChild(bodyRow);
    }
    return container;
}
function findCellVariantPropertyName() {
    const set = ds.tableComponent;
    if (!set)
        return null;
    const defs = "componentPropertyDefinitions" in set
        ? set.componentPropertyDefinitions
        : null;
    if (!defs)
        return null;
    for (const name of Object.keys(defs)) {
        if (TABLE_CELL_TYPE_PROPERTY_MATCHERS.some((re) => re.test(name)))
            return name;
    }
    return null;
}
function findHeaderPropertyName() {
    const set = ds.tableComponent;
    if (!set)
        return null;
    const defs = "componentPropertyDefinitions" in set
        ? set.componentPropertyDefinitions
        : null;
    if (!defs)
        return null;
    for (const name of Object.keys(defs)) {
        if (TABLE_HEADER_PROPERTY_MATCHERS.some((re) => re.test(name)))
            return name;
    }
    return null;
}
async function instantiateTableRow(columns, kind, cellVariantProperty, headerProperty, rowIndex = 0) {
    // If the library component represents a whole table, we degrade to a per-cell layout:
    // we instantiate the component once per cell to apply variant per column.
    const row = figma.createFrame();
    row.name = kind === "header" ? "Header row" : `Row ${rowIndex + 1}`;
    row.layoutMode = "HORIZONTAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 0;
    row.fills = [];
    for (const col of columns) {
        const cellSource = ds.tableComponent;
        const defaultVariant = cellSource.type === "COMPONENT_SET"
            ? cellSource.defaultVariant
            : cellSource;
        const instance = defaultVariant.createInstance();
        const props = {};
        if (cellVariantProperty) {
            const variantValue = resolveVariantValueForType(col.type, cellVariantProperty);
            if (variantValue != null)
                props[cellVariantProperty] = variantValue;
        }
        if (headerProperty) {
            props[headerProperty] = kind === "header";
        }
        if (Object.keys(props).length > 0) {
            try {
                instance.setProperties(props);
            }
            catch (err) {
                console.warn("setProperties failed:", errMessage(err));
            }
        }
        // Try to populate text content for this cell
        const text = kind === "header" ? col.header : mockValue(col.type, rowIndex);
        setFirstTextInNode(instance, text);
        row.appendChild(instance);
    }
    return row;
}
function resolveVariantValueForType(type, propertyName) {
    const set = ds.tableComponent;
    if (!set)
        return null;
    const defs = "componentPropertyDefinitions" in set
        ? set.componentPropertyDefinitions
        : null;
    if (!defs)
        return null;
    const def = defs[propertyName];
    if (!def || def.type !== "VARIANT" || !def.variantOptions)
        return null;
    const hints = VARIANT_VALUE_HINTS[type];
    for (const opt of def.variantOptions) {
        if (hints.some((re) => re.test(opt)))
            return opt;
    }
    return def.variantOptions[0] || null;
}
function setFirstTextInNode(node, value) {
    if (node.type === "TEXT") {
        figma.loadFontAsync(node.fontName).then(() => {
            node.characters = value;
        }).catch(() => undefined);
        return;
    }
    if ("findAll" in node) {
        const texts = node.findAll((n) => n.type === "TEXT");
        if (texts.length > 0) {
            const target = texts[0];
            figma.loadFontAsync(target.fontName).then(() => {
                target.characters = value;
            }).catch(() => undefined);
        }
    }
}
async function buildFallbackTable(payload) {
    const container = figma.createFrame();
    container.name = "Table (fallback)";
    container.layoutMode = "VERTICAL";
    container.primaryAxisSizingMode = "AUTO";
    container.counterAxisSizingMode = "AUTO";
    container.itemSpacing = 0;
    container.cornerRadius = 8;
    container.clipsContent = true;
    container.strokes = [{ type: "SOLID", color: { r: 0.88, g: 0.88, b: 0.92 } }];
    container.strokeWeight = 1;
    container.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    container.appendChild(buildFallbackRow(payload.columns, "header", 0));
    for (let r = 0; r < payload.rows; r++) {
        container.appendChild(buildFallbackRow(payload.columns, "body", r));
    }
    return container;
}
function buildFallbackRow(columns, kind, rowIndex) {
    const row = figma.createFrame();
    row.name = kind === "header" ? "Header" : `Row ${rowIndex + 1}`;
    row.layoutMode = "HORIZONTAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 0;
    row.fills = [
        {
            type: "SOLID",
            color: kind === "header"
                ? { r: 0.96, g: 0.96, b: 0.98 }
                : rowIndex % 2 === 0
                    ? { r: 1, g: 1, b: 1 }
                    : { r: 0.985, g: 0.985, b: 0.99 },
        },
    ];
    for (const col of columns) {
        const cell = figma.createFrame();
        cell.layoutMode = "HORIZONTAL";
        cell.primaryAxisSizingMode = "FIXED";
        cell.counterAxisSizingMode = "AUTO";
        cell.resize(140, 40);
        cell.paddingLeft = 12;
        cell.paddingRight = 12;
        cell.paddingTop = 10;
        cell.paddingBottom = 10;
        cell.fills = [];
        cell.strokes = [{ type: "SOLID", color: { r: 0.92, g: 0.92, b: 0.95 } }];
        cell.strokeWeight = 1;
        cell.strokeRightWeight = 0;
        cell.strokeTopWeight = 0;
        cell.strokeLeftWeight = 0;
        const text = makeText(kind === "header" ? col.header : mockValue(col.type, rowIndex), {
            weight: kind === "header" ? "Semi Bold" : "Regular",
            size: 12,
            color: kind === "header" ? { r: 0.35, g: 0.35, b: 0.4 } : { r: 0.1, g: 0.1, b: 0.12 },
        });
        if (kind === "body" && (col.type === "Dollar" || col.type === "Number")) {
            text.textAlignHorizontal = "RIGHT";
        }
        cell.appendChild(text);
        row.appendChild(cell);
    }
    return row;
}
// ---------------------------------------------------------------------------
// Mock data per column type
// ---------------------------------------------------------------------------
const TEXT_SAMPLES = [
    "Acme Co",
    "Northwind",
    "Globex",
    "Initech",
    "Umbrella",
    "Stark Inc",
    "Wayne LLC",
    "Hooli",
    "Pied Piper",
    "Massive Dynamic",
    "Cyberdyne",
    "Wonka",
];
const usdFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const numFormatter = new Intl.NumberFormat("en-US");
function mockValue(type, rowIndex) {
    switch (type) {
        case "Text":
            return TEXT_SAMPLES[rowIndex % TEXT_SAMPLES.length];
        case "Dollar": {
            const v = 250 + ((rowIndex * 137) % 9000) + ((rowIndex * 19) % 99) / 100;
            return usdFormatter.format(v);
        }
        case "Number": {
            const v = 42 + ((rowIndex * 89) % 9999);
            return numFormatter.format(v);
        }
    }
}
// ---------------------------------------------------------------------------
// UI messaging helpers
// ---------------------------------------------------------------------------
function notify(type, detail) {
    figma.ui.postMessage({ type, detail });
}
function errMessage(err) {
    if (err instanceof Error)
        return err.message;
    try {
        return String(err);
    }
    catch {
        return "Unknown error";
    }
}
