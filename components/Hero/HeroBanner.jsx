"use client";

import { Stack, Flex, Button, Text, VStack, Heading, useBreakpointValue } from "@chakra-ui/react";

export default function HeroBanner() {
  return (
    <Flex
      w="full"
      h={["30rem", "40rem"]}
      backgroundImage="/hero-background.webp"
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundColor="blue.bold"
    >
      <VStack w="full" justify="center" px={["1rem", "2rem"]} bgColor="#6126eb82">
        <Stack maxW="65%" align="flex-start" spacing="2rem" textAlign="center">
          <Heading as="h1" size={["h2", "h1"]} variant="white" textShadow={"2px 2px 3px #00244b"}>
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
            size={["md"]}
            _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
            boxShadow={"1px 1px 2px #00244b"}
          >
            Read more
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
