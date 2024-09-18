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
    social: {
      color: "white",
      bg: "blue.bold",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "background 0.3s ease",
      _focus: { outline: "3px solid white", outlineOffset: "2px" },
      _hover: {
        bg: "white",
        color: "blue.bold",
      },
    },
    schneider: {
      backgroundColor: "white",
      color: "blue.bold",
    },
  },
});

export default Button;
