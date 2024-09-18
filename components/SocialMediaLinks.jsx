"use client";

import { Stack, Box, Button, VisuallyHidden } from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ children, label, href }) => {
  return (
    <Box as="li">
      <Button as="a" href={href} variant="social">
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    </Box>
  );
};

export default function SocialMediaLinks() {
  return (
    <Stack as="ul" direction="row">
      <SocialLink label="Instagram" href="#">
        <FaInstagram aria-hidden="true" />
      </SocialLink>
      <SocialLink label="LinkedIn" href="#">
        <FaLinkedin aria-hidden="true" />
      </SocialLink>
      <SocialLink label="Twitter" href="#">
        <FaTwitter aria-hidden="true" />
      </SocialLink>
    </Stack>
  );
}
