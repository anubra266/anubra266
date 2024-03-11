import { defineRecipe } from "@pandacss/dev";

export const link = defineRecipe({
  className: "link",
  base: {
    textDecoration: "underline 0.1em transparent",
    textUnderlineOffset: "0.125em",
    transitionDuration: "normal",
    transitionProperty: "text-decoration-color",
    transitionTimingFunction: "default",
    _hover: {
      textDecorationColor: "currentColor",
    },
    "& svg": {
      width: "1em",
      height: "1em",
    },
  },
});
