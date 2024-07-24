"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";

import HeaderNA from "./HeaderNA";
import FooterNA from "./FooterNA";

const LayoutNA = ({ children }) => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <HeaderNA />
        <Flex as="main" id="main" gap="4rem">
          {children}
        </Flex>
        <FooterNA />
      </Flex>
    </>
  );
};
export default LayoutNA;
