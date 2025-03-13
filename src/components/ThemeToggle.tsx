"use client";

import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark like Spotify

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(savedTheme === "dark" || (!savedTheme && prefersDark));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-melody-surface-low transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun
          size={20}
          className="text-text-secondary hover:text-text-primary transition-colors"
        />
      ) : (
        <Moon
          size={20}
          className="text-text-secondary hover:text-text-primary transition-colors"
        />
      )}
    </button>
  );
}
