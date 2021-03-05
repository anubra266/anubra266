import { layerStyles } from "./tlStyles/layerStyles";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { textStyles } from "./tlStyles/textStyles";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const overrides: ThemeOverride = {
  config,
  fonts,
  colors,
  styles,
  textStyles,
  layerStyles,
};
