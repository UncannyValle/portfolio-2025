"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`duration-200 flex items-center justify-center transition ease-out hover:scale-125 active:scale-100 cursor-pointer`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <BsMoonStarsFill className="text-2xl text-blue-950" />
      ) : (
        <BsSunFill className="text-2xl text-yellow-400" />
      )}
    </button>
  );
};
