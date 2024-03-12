import { defineRecipe } from "@pandacss/dev";

export const text = defineRecipe({
  className: "text",
  base: {},
  variants: {
    variant: {
      "96": {
        fontSize: "6rem",
        lineHeight: "6rem",
      },
      "64": {
        fontSize: "4rem",
        lineHeight: "4.25rem",
      },
      "34": {
        fontSize: "2.125rem",
        lineHeight: "3rem",
      },
      "28": {
        fontSize: "1.75rem",
        lineHeight: "2.625rem",
      },
      "24": {
        fontSize: "1.5rem",
        lineHeight: "120%",
      },
      "17": {
        fontSize: "1.0625rem",
        lineHeight: "1.375rem",
      },
      "15": {
        fontSize: "0.9375rem",
        lineHeight: "1.25rem",
      },
      "12": {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
    },
  },
});
