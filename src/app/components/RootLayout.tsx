import { Outlet, useLocation } from "react-router";
import { AppShell } from "./AppShell";
import { LeftNav } from "./LeftNav";

export function RootLayout() {
  const location = useLocation();
  const isEmbed = location.pathname === "/reports/data-lab/builder-embed";

  if (isEmbed) {
    return (
      <div
        className="min-h-full font-['Sarabun',sans-serif] h-screen w-screen overflow-hidden"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <Outlet />
      </div>
    );
  }

  return (
    <AppShell leftNav={<LeftNav />}>
      <div
        className="min-h-full font-['Sarabun',sans-serif]"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <Outlet />
      </div>
    </AppShell>
  );
}