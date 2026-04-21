"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("theme") === "light";
}

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const light = getInitialTheme();
    if (light) document.documentElement.classList.add("light");
    setIsLight(light);
    setMounted(true);
  }, []);

  const toggle = () => {
    setIsLight((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
      return next;
    });
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-secondary/60 transition-colors text-muted-foreground hover:text-foreground"
      aria-label="Toggle theme"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggle;
