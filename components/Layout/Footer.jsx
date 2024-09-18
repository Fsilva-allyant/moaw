"use client";

import { Box, Button, Stack, Text, VisuallyHidden, Flex, Link, Image } from "@chakra-ui/react";

import SocialMediaLinks from "../SocialMediaLinks";

import prodUrl from "@/common/prodUrl";

export default function Footer({ props }) {
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
        <Link href={prodUrl("/")} _focus={{ outline: "3px solid white", outlineOffset: "2px" }}>
          <Image
            src={props?.logo.footer !== undefined ? props?.logo.footer : "/moaw_light.png"}
            alt="Museum of Accessibility Woes homepage"
          />
        </Link>
        <Flex direction={"column"} alignItems={"center"}>
          <VisuallyHidden>Contact us for more information</VisuallyHidden>
          <Link
            _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
            href="tel:+16132360866"
          >
            +1 613 236 0866
          </Link>
          <Text variant="white">© 2024 Allyant. All rights reserved</Text>
        </Flex>
        <SocialMediaLinks />
      </Stack>
    </Box>
  );
}
