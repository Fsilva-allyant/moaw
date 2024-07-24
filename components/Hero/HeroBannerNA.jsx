"use client";

import { Stack, Flex, Button, Text, VStack, Heading, useBreakpointValue } from "@chakra-ui/react";

export default function HeroBannerNA() {
  return (
    <Flex
      w="full"
      h={["30rem", "40rem"]}
      backgroundImage="/hero-background.webp"
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundColor="blue.bold"
    >
      <VStack w="full" justify="center" px={["1rem", "2rem"]} bgColor="blue.base" opacity="0.9">
        <Stack maxW="50%" align="flex-start" spacing="2rem" textAlign="center">
          <Heading as="h1" size={["h2", "h1"]} variant="white">
            Let&apos;s improve the usability of our empathy
          </Heading>
          <Text variant="white" size={["sm", "md"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </Text>
          <Button
            as="a"
            href="#"
            variant="white"
            size={["md", "lg"]}
            _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
          >
            Read more
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
