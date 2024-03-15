import { defineConfig } from "@pandacss/dev";
import { recipes } from "~/theme/recipes";

export default defineConfig({
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
          black: { value: "#000000" },
          brand: {
            primary: { value: "#FC50B7" },
            secondary: { value: "#FFC56F" },
          },
          grey: {
            "00": { value: "#FFFFFF" },
            "005": { value: "#F5F5F5" },
            "01": { value: "#F2F2F2" },
            "02": { value: "#E0E0E0" },
            "03": { value: "#BDBDBD" },
            "04": { value: "#828282" },
            "05": { value: "#4F4F4F" },
            "06": { value: "#333333" },
            "07": { value: "#111111" },
            "08": { value: "#2A2A2A" },
            "09": { value: "#3A3A3A" },
            "10": { value: "#222222" },
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            canvas: {
              value: { base: "{colors.white}", _dark: "{colors.grey.08}" },
            },
            default: {
              value: { base: "{colors.white}", _dark: "{colors.grey.10}" },
            },
            subtle: {
              value: { base: "{colors.gray.200}", _dark: "{colors.grey.06}" },
            },
          },
          fg: {
            default: {
              value: { base: "{colors.black/87}", _dark: "{colors.white/100}" },
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
      fontFamily: "var(--font-body)",
    },
  },
  outdir: "styled-system",
  strictTokens: true,
  jsxFramework: "react",
});
