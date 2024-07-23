"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Header />
        <Flex as="main" id="main" gap="2rem">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};
export default Layout;
