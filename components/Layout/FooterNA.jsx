"use client";

import { Box, Button, Container, Stack, Text, VisuallyHidden, Link, Image } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      as={"a"}
      href={href}
      _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      color="white"
      bg="blue.bold"
      _hover={{
        bg: "white",
        color: "blue.bold",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function Footer() {
  return (
    <Box bg="blue.bold" color="white" as="footer">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link href="/" _focus={{ outline: "3px solid white", outlineOffset: "2px" }}>
          <Image src="/moaw_light.png" alt="Museum of Accessibility Woes" />
        </Link>
        <Text variant="white">© 2024 Allyant. All rights reserved</Text>
        <Stack direction={"row"}>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram aria-hidden="true" />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={"#"}>
            <FaLinkedin aria-hidden="true" />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter aria-hidden="true" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
