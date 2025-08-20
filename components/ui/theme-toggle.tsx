"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const effective = theme === "system" ? systemTheme : theme; // "light" | "dark"
  const isDark = effective === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(next!)}
      className="inline-flex items-center gap-2 rounded-md border px-2 py-2 text-sm hover:cursor-pointer"
      aria-label={`Switch to ${next} mode`}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      
    </button>
  );
}
