import { useTheme } from "next-themes";
import { css } from "styled-system/css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={css({
        cursor: "pointer",
        w: "8",
        h: "8",
        p: "1.5",
        transition: "[all 0.2s]",
        rounded: "sm",
        _hover: { bg: "bg.subtle" },
      })}
    >
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={css({
          "& .sun": {
            fill: { base: "black", _dark: "transparent" },
            stroke: { _dark: "transparent" },
          },
          "& .moon": { stroke: { base: "transparent", _dark: "white" } },
        })}
      >
        <circle className="sun" cx="12" cy="12" r="4"></circle>
        <path className="sun" d="M12 2v2"></path>
        <path className="sun" d="M12 20v2"></path>
        <path className="sun" d="m4.93 4.93 1.41 1.41"></path>
        <path className="sun" d="m17.66 17.66 1.41 1.41"></path>
        <path className="sun" d="M2 12h2"></path>
        <path className="sun" d="M20 12h2"></path>
        <path className="sun" d="m6.34 17.66-1.41 1.41"></path>
        <path className="sun" d="m19.07 4.93-1.41 1.41"></path>

        <path className="moon" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    </button>
  );
}
