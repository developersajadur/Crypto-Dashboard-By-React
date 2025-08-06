import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button className="h-9 flex items-center justify-center text-white" onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
      Switch to {currentTheme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
