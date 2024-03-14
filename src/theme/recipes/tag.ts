import { defineRecipe } from "@pandacss/dev";

export const tag = defineRecipe({
  className: "tag",
  base: {
    borderRadius: "0.5rem",
    color: "fg.default",
    px: "3",
    py: "1.5",
    fontWeight: "medium",
    bg: { base: "grey.005/80", _dark: "grey.09" },
    w: "fit",
  },
});
