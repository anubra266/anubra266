import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "white")(props),
      bg: mode("gray.200", "gray.900")(props),
    },
    html: {
      minH: "100%",
    },
  }),
};
