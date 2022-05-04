import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

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
    accent: "#C2C2C2",
  },
};

//   const fonts = {
//     heading: `Kalam Permanent-Maker ${defaultTheme.fonts.heading}`,
//   };

const components = {
  Heading: {
    baseStyle: {
      color: "whites.base",
    },
    variants: {
      logo: {
        lineHeight: "0.85",
        //   fonts: "Kalam",
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
