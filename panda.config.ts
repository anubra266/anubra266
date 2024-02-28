import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // hash: true,
  // minify: true,
  preflight: true,
  include: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
  strictTokens: true,
});
