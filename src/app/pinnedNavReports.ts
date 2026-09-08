export type PinnedNavReport = {
  id: string;
  label: string;
  path: string;
};

const STORAGE_KEY = "brand-ui-pinned-nav-reports";
export const PINNED_NAV_EVENT = "brand-ui-pinned-nav-change";

export const AI_NARRATIVE_PIN: PinnedNavReport = {
  id: "partner-dashboard",
  label: "Partner Dashboard",
  path: "/reports/ai-narrative",
};

function readPinned(): PinnedNavReport[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as PinnedNavReport[];
    if (!Array.isArray(parsed)) return [];
    const seen = new Set<string>();
    const deduped: PinnedNavReport[] = [];
    for (const item of parsed) {
      if (!item?.path || seen.has(item.path)) continue;
      seen.add(item.path);
      deduped.push(item);
    }
    if (deduped.length !== parsed.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(deduped));
    }
    return deduped;
  } catch {
    return [];
  }
}

function writePinned(items: PinnedNavReport[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(PINNED_NAV_EVENT));
}

export function getPinnedNavReports(): PinnedNavReport[] {
  return readPinned();
}

export function isNavReportPinned(id: string): boolean {
  return readPinned().some((r) => r.id === id);
}

export function pinNavReport(report: PinnedNavReport) {
  const current = readPinned().filter((r) => r.path !== report.path && r.id !== report.id);
  writePinned([report, ...current]);
}

export function unpinNavReport(id: string) {
  writePinned(readPinned().filter((r) => r.id !== id));
}

export function toggleNavReportPin(report: PinnedNavReport) {
  if (isNavReportPinned(report.id)) {
    unpinNavReport(report.id);
  } else {
    pinNavReport(report);
  }
}
