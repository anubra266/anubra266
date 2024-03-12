import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  base: {
    px: "6",
    py: "0.8125rem",
    borderRadius: "0.75rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3",
    cursor: "pointer",
    transition: "all ease 0.2s",
  },
  variants: {
    variant: {
      primary: {
        bg: { base: "grey.08", _hover: "grey.05" },
        _dark: { bg: "grey.00", _hover: "grey.03" },
        _light: { boxShadow: { _hover: "02" } },
        color: { base: "white", _dark: { base: "black", _hover: "black/87" } },
      },
      secondary: {
        bg: "grey.00",
        _dark: { bg: "grey.08", _hover: "grey.09" },
        _light: {
          boxShadow: { _hover: "01" },
          backdropFilter: { base: "blur(100)", _hover: "none" },
        },
        color: { base: "black/87", _dark: "white" },
      },
    },
  },
});
