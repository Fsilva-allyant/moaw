import { extendTheme, theme as chakraTheme, typography } from "@chakra-ui/react";
import "@fontsource/roboto/300.css";

import Button from "./components/Button";
import Link from "./components/Link";
import Text from "./components/Text";
import Heading from "./components/Heading";
import FormErrorMessage from "./components/FormErrorMessage";

// function goldenRatio() {
//   return {
//     md: 1 * 1.618033988749,
//     lg: 1 * 1.618033988749 * 1.618033988749,
//     xl: 1 * 1.618033988749 * 1.618033988749 * 1.618033988749,
//     xxl: 1 * 1.618033988749 * 1.618033988749 * 1.618033988749 * 1.618033988749,
//   };
// }

const customTheme = extendTheme({
  styles: {
    global: {
      "*": {
        ":host,:root": {
          "--chakra-ui-focus-ring-color": "#00244b!important",
          "--chakra-shadows-outline": "0 0 0 3px #6126eb",
        },
      },
      ".js-focus-visible :focus:not(.focus-visible), .js-focus-visible :focus:not(.focus-visible) + [data-focus]":
        { outline: "none", shadow: "none " },
      html: {
        fontSize: "18px",
      },
      body: {
        maxWidth: "100%",
        w: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
        margin: "auto!important",
        fontFamily: `Roboto, ${chakraTheme.fonts?.body}`,
      },
      main: {
        flex: "1 0 auto",
      },
      ul: {
        "list-style-type": "none",
      },

      button: {
        fontWeight: 700,
        _focus: {
          boxShadow: "none !important",
          outline: "3px solid #6126eb",
          outlineOffset: "2px",
        },
      },
      a: {
        fontWeight: "700 !important",
        _focus: {
          boxShadow: "none !important",
          outline: "3px solid #6126eb",
          outlineOffset: "2px",
        },
      },
    },
  },

  breakpoints: {
    base: "0px",
    sm: "863px",
    md: "1440px",
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "1536px", // ~1536px
  },

  colors: {
    blue: {
      base: "#6126eb",
      bold: "#00244b",
      light: "#75e7ef",
      opacity: "#efe9fd",
    },
    white: "#FFFFFF",
    gray: {
      cc: "#808080",
      bold: "#A0AEC0",
      base: "#CBD5E0",
      light: "#E2E8F0",
    },
    red: { onLight: "#C53030" },
    schneider: "#3DCD58",
  },
  fonts: {
    body: `Roboto, ${chakraTheme.fonts?.body}`,
    heading: `Roboto, ${chakraTheme.fonts?.body}`,
    subHeading: `Roboto, ${chakraTheme.fonts?.heading}`,
    number: `Roboto, ${chakraTheme.fonts?.body}`,
  },
  fontSizes: {
    sm: "0.7rem !important",
    base: "1rem !important",
    md: "1.125rem !important",
    lg: "1.5rem !important",
    xl: "3rem !important",
    xxl: "4rem !important",
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },

  components: {
    Button,
    Link,
    Text,
    Heading,
    FormErrorMessage,
  },
});

export default customTheme;
