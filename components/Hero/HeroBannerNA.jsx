"use client";

import { Stack, Flex, Button, Text, VStack, Heading, useBreakpointValue } from "@chakra-ui/react";

export default function HeroBanner() {
  return (
    <Flex
      w={"full"}
      h={"40rem"}
      backgroundImage="/hero-background.webp"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundColor={"blue.bold"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgColor={"blue.base"}
        opacity={"0.9"}
        // bgGradient={"linear(to-r, blue.opacity, transparent)"}
      >
        <Stack maxW={"50%"} align={"flex-start"} spacing={8} textAlign={"center"}>
          <Heading as="h1" size="h1" variant="white">
            Let&apos;s improve the usability of our empathy
          </Heading>
          <Text variant="white" size="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </Text>
          <Button
            as="a"
            href="#"
            variant="white"
            size="lg"
            _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
          >
            Read more
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
