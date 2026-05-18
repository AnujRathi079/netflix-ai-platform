"use client";

import {
  useTheme,
} from "next-themes";

import {
  useEffect,
  useState,
} from "react";

export default function ThemeToggle() {

  const {
    theme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8" />
    );
  }

  const isDark =
    theme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className={`relative w-16 h-8 rounded-full transition-all duration-500 shadow-lg overflow-hidden border ${
        isDark
          ? "bg-zinc-900 border-red-500"
          : "bg-zinc-200 border-blue-400"
      }`}
    >
      {/* GLOW */}
      <div
        className={`absolute inset-0 opacity-30 blur-xl ${
          isDark
            ? "bg-red-500"
            : "bg-blue-400"
        }`}
      />

      {/* SLIDER */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center text-xs font-bold ${
          isDark
            ? "left-8 bg-red-500 text-white"
            : "left-1 bg-blue-500 text-white"
        }`}
      >
        {isDark ? "🌙" : "☀"}
      </div>
    </button>
  );
}