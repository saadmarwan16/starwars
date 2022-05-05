import { extendTheme} from "@chakra-ui/react";

const colors = {
  blacks: {
    base: "#000020",
    accent: "#1F1F1F",
  },
  reds: {
    base: "#F5003D",
    accent: "#FF4775",
  },
  whites: {
    base: "#FFFFFF",
    accent: "#A3A3A3",
  },
};

const components = {
  Heading: {
    baseStyle: {
      color: "whites.base",
    },
    variants: {
      logo: {
        lineHeight: "0.75",
      },
    },
  },
  Text: {
    baseStyle: {
      color: "whites.base",
    },
    variants: {
      "hover-red": {
        color: "reds.base",
        _hover: {
          color: "reds.accent",
        },
      },
    },
  },
};

const theme = extendTheme({ colors, components });

export default theme;
