import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // hash: true,
  // minify: true,
  preflight: true,
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
  include: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
  strictTokens: true,
  jsxFramework: "react",
});
