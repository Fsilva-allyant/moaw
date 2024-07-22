import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: { fontWeight: "bold" },
  sizes: {
    h1: { fontSize: "4rem" },
    h2: { fontSize: "2.5rem" },
    h3: { fontSize: "1.5rem" },
  },

  variants: {
    white: { color: "white" },
    blue: { color: "blue.bold" },
  },
});

export default Heading;
