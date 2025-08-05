import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
      Switch to {currentTheme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
