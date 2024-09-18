"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";

import HeaderNA from "./HeaderNA";
import FooterNA from "./FooterNA";

const LayoutNA = ({ children, layout }) => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <HeaderNA props={layout} />
        <Flex as="main" id="main" gap="4rem">
          {children}
        </Flex>
        <FooterNA props={layout} />
      </Flex>
    </>
  );
};
export default LayoutNA;
