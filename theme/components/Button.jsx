import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: { alignSelf: "center", fontWeight: 700, padding: "1.5rem 2rem !important" },
  sizes: {
    lg: {
      fontSize: "1.5rem",
      padding: "2rem 3rem",
    },
  },
  variants: {
    blue: {
      backgroundColor: "blue.base",
      color: "white",
      _hover: {
        bg: "blue.bold",
      },
      _focus: { bg: "white", color: "blue.bold" },
    },
    white: {
      backgroundColor: "white",
      color: "blue.bold",
      _hover: {
        bg: "blue.bold",
        color: "white",
      },
    },
  },
});

export default Button;
