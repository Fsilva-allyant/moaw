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
    },
    link: { color: "blue.bold", fontWeight: "700", _hover: { color: "blue.base" } },
  },
});

export default Text;
