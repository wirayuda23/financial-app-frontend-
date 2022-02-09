import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props: Dict<any> | StyleFunctionProps) => ({
    body: {
      bg: mode("white", "gray.800")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#B4A360",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 10,
      },
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config, styles, components });

export default theme;
