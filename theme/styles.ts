import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "white")(props),
      bg: mode("gray.200", "black")(props),
    },
    html: {
      minH: "100%",
    },
  }),
};
