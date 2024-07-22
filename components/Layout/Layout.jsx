import React from "react";
import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
// import styles from "@modules/Layout/Layout.module.scss";
// className={styles.main}

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      {/* <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head> */}
      <Flex direction={"column"} minH="100vh">
        <Header />
        <Box as="main" width="100%" gap="2rem" display={"flex"} flexDir={"column"}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};
export default Layout;
