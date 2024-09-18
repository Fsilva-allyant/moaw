"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";

import HeaderNA from "./HeaderNA";
import FooterNA from "./FooterNA";

const LayoutNA = ({ children, props }) => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <HeaderNA props={props} />
        <Flex as="main" id="main" gap="4rem">
          {children}
        </Flex>
        <FooterNA props={props} />
      </Flex>
    </>
  );
};
export default LayoutNA;
