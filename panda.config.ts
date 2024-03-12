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
      tokens: {
        shadows: {
          "01": { value: "0px 12px 24px rgba(0, 0, 0, 0.08)" },
          "02": { value: "0px 16px 24px rgba(0, 0, 0, 0.12)" },
          "03": { value: "0px 32px 40px rgba(0, 0, 0, 0.16)" },
        },
        colors: {
          grey: {
            "00": { value: "#FFFFFF" },
            "01": { value: "#F2F2F2" },
            "02": { value: "#E0E0E0" },
            "03": { value: "#BDBDBD" },
            "04": { value: "#828282" },
            "05": { value: "#4F4F4F" },
            "06": { value: "#333333" },
            "07": { value: "#111111" },
          },
        },
      },
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
              value: { base: "{colors.black/60}", _dark: "{colors.white/70}" },
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
