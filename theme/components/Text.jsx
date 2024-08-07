import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: { fontWeight: "normal", color: "blue.bold" },
  sizes: {
    sm: { fontSize: "1.125rem" },
    base: { fontSize: "1.5rem" },
    md: { fontSize: "1.75rem" },
    lg: { fontSize: "2.25rem" },
  },
  variants: {
    white: { color: "white" },
    blue: { color: "blue.bold" },
    tag: {
      color: "white",
      bg: "blue.base",
      opacity: "0.9",
      alignSelf: "flex-start",
      textTransform: "uppercase",
      p: 1.5,
      rounded: "md",
      fontSize: "sm",
      fontWeight: 700,
    },
    link: { color: "blue.bold", fontWeight: "700", _hover: { color: "blue.base" } },
    "link-white": {
      color: "white",
      fontWeight: "700",
      _hover: { opacity: 0.9 },
      textShadow:
        "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1),  0px 18px 23px rgba(0,0,0,0.1)",
    },
  },
});

export default Text;
