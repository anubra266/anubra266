import { defineConfig } from "@pandacss/dev";
import { recipes } from "~/theme/recipes";

export default defineConfig({
  // hash: true,
  // minify: true,
  preflight: true,
  include: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      recipes,
      semanticTokens: {
        colors: {
          bg: {
            canvas: {
              value: { base: "{colors.white}", _dark: "#2a2a2a" },
            },
            default: {
              value: { base: "{colors.white}", _dark: "#222222" },
            },
            subtle: {
              value: { base: "{colors.gray.200}", _dark: "#333333" },
            },
          },
          fg: {
            default: {
              value: { base: "{colors.black}", _dark: "{colors.white}" },
            },
            subtle: {
              value: { base: "{colors.black/60}", _dark: "{colors.white/60}" },
            },
            muted: {
              value: { base: "{colors.black/70}", _dark: "{colors.white/60}" },
            },
          },
        },
      },
      keyframes: {
        blink: {
          "90%": {
            transform: "none",
            animationTimingFunction: "ease-in",
          },
          "93%": {
            transform: "translateY(15px) scaleY(0)",
          },
          "100%": {
            animationTimingFunction: "ease-out",
          },
        },
        squeeze: {
          "90%": {
            transform: "none",
            animationTimingFunction: "ease-in",
          },
          "93%": {
            transform: "translateY(3px) scaleY(0.8)",
          },
          "100%": {
            animationTimingFunction: "ease-out",
          },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "bg.canvas",
      color: "fg.default",
    },
  },
  outdir: "styled-system",
  strictTokens: true,
  jsxFramework: "react",
});
