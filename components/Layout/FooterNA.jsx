"use client";

import { Box, Button, Stack, Text, VisuallyHidden, Link, Image } from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import prodUrl from "@/common/prodUrl";

const SocialButton = ({ children, label, href }) => {
  return (
    <Button as="a" href={href} variant="social">
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function FooterNA() {
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
        <Link
          _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
          href={prodUrl("/accessible")}
        >
          <Image src="/moaw_light.png" alt="Museum of Accessibility Woes" />
        </Link>
        <Text variant="white">© 2024 Allyant. All rights reserved</Text>
        <Stack direction="row">
          <SocialButton label="Instagram" href="#">
            <FaInstagram aria-hidden="true" />
          </SocialButton>
          <SocialButton label="LinkedIn" href="#">
            <FaLinkedin aria-hidden="true" />
          </SocialButton>
          <SocialButton label="Twitter" href="#">
            <FaTwitter aria-hidden="true" />
          </SocialButton>
        </Stack>
      </Stack>
    </Box>
  );
}
