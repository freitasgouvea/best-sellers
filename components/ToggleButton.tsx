"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <button>⬜️</button>
  }

  return <button onClick={handleChange}>{resolvedTheme === "dark" ? "🌞" : "🌜"}</button>;
};
