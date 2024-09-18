"use client";

import { Box, Button, Stack, Text, Flex, Link, Image } from "@chakra-ui/react";

import SocialMediaLinks from "../SocialMediaLinks";

import prodUrl from "@/common/prodUrl";

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      as="a"
      href={href}
      variant="social"
      _focus={{ outline: "3px solid blue.base", outlineOffset: "2px" }}
      color="blue.base"
    >
      <Box display={"none"}>{label}</Box>
      {children}
    </Button>
  );
};

export default function FooterNA({ props }) {
  return (
    <Box as="footer" bg="blue.bold" color="white">
      <Stack
        direction={["column", "row"]}
        justify={["center", "space-between"]}
        align="center"
        m="auto"
        maxW="90%"
        py="1rem"
        spacing="1rem" //mobile
      >
        <Link _focus={{ outline: "3px solid blue.base", outlineOffset: "2px" }} href={prodUrl("/")}>
          <Image
            src={props?.logo?.footer !== undefined ? props?.logo?.footer : "/moaw_light.png"}
          />
        </Link>
        <Flex direction={"column"} alignItems={"center"}>
          <Text>+1 613 236 0866</Text>
          <Text variant="white">© 2024 Allyant. All rights reserved</Text>
        </Flex>
        <SocialMediaLinks />
      </Stack>
    </Box>
  );
}
