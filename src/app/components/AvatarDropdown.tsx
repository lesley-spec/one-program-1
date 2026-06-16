import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";

export function AvatarDropdown() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "Auto" },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="size-10 rounded-full flex items-center justify-center outline-none cursor-pointer hover:opacity-80 transition-opacity font-['Sarabun',sans-serif] text-[length:var(--text-base)]"
          style={{
            background: "rgba(0,0,0,0.2)",
            color: "var(--sidebar-foreground)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          C
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 bg-card border-border rounded-[--radius] p-1.5 shadow-[var(--elevation-sm)]"
      >
        <DropdownMenuItem className="px-3 py-2 rounded-[calc(var(--radius)-2px)] text-foreground cursor-pointer hover:bg-muted focus:bg-muted focus:text-foreground">
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="px-3 py-2 rounded-[calc(var(--radius)-2px)] text-foreground cursor-pointer hover:bg-muted focus:bg-muted focus:text-foreground">
          <span>Edit Profile</span>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-3 py-2 rounded-[calc(var(--radius)-2px)] text-foreground cursor-pointer hover:bg-muted focus:bg-muted focus:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground">
            <span>Theme</span>
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent
            sideOffset={8}
            className="min-w-[120px] bg-card border-border rounded-[--radius] p-1.5 shadow-[var(--elevation-sm)]"
          >
            {themeOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setTheme(option.value)}
                className="px-3 py-2 rounded-[calc(var(--radius)-2px)] text-foreground cursor-pointer hover:bg-muted focus:bg-muted focus:text-foreground flex items-center justify-between"
              >
                <span>{option.label}</span>
                {mounted && theme === option.value && (
                  <Check className="size-4 text-foreground" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuItem className="px-3 py-2 rounded-[calc(var(--radius)-2px)] text-foreground cursor-pointer hover:bg-muted focus:bg-muted focus:text-foreground">
          <span>Sign Out</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border my-1.5" />

        <div className="px-3 py-2 flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="text-[length:var(--text-sm)] text-muted-foreground hover:text-foreground hover:underline transition-colors">
            Terms of Use
          </a>
          <a href="#" className="text-[length:var(--text-sm)] text-muted-foreground hover:text-foreground hover:underline transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[length:var(--text-sm)] text-muted-foreground hover:text-foreground hover:underline transition-colors">
            System Status
          </a>
          <a href="#" className="text-[length:var(--text-sm)] text-muted-foreground hover:text-foreground hover:underline transition-colors">
            Master Program Agreement
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}