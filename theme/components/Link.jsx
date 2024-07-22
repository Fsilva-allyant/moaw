import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: { fontWeight: "700 !important" },
  variants: {
    base: {},
    heading: {},
  },
});

export default Link;
