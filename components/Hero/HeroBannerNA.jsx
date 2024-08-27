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
      <VStack w="full" justify="center" px={["1rem", "2rem"]} bgColor="#6126eb1f">
        <Stack maxW="50%" align="flex-start" spacing="2rem" textAlign="center">
          <Heading as="span" size={["h2", "h1"]} variant="white" textShadow={"2px 2px 3px #00244b"}>
            Discover the Museum of Accessibility Woes
          </Heading>
          <Text variant="white" size={["sm", "md"]}>
            Explore the common pitfalls of web accessibility through our exhibits.
          </Text>
          <Text variant="white" size={["sm", "md"]}>
            Learn why accessible design matters and how we can create a more inclusive web.
          </Text>
          <Button
            as="a"
            variant="white"
            size={["md"]}
            _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
            aria-label="Read More about Museum of Accessibility Woes"
          >
            Learn more
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
