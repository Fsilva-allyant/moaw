import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: { fontWeight: "700 !important" },
  variants: {
    logo: {
      _focus: { outline: "3px solid white", outlineOffset: "2px" },
    },
    schneider: {
      _hover: {
        textDecoration: "underline",
        textDecorationColor: "#3DCD58",
        color: "#3DCD58 !important",
      },
    },
  },
});

export default Link;
