"use client";

import { Button, Flex, Heading, Image, Stack, Text, Box } from "@chakra-ui/react";

export default function HeroFooterNA() {
  return (
    <Box maxWidth="100%" bgColor="blue.base">
      <Stack direction={["column", "row"]} maxW="90%" margin="auto">
        <Flex flex="1" align="center" justify="center">
          <Stack spacing="1.5rem" w="full" maxW="32rem" m="2rem 0">
            <Heading as="h2" size="h2" variant="white">
              Let&apos;s start facing the barriers.
            </Heading>
            <Text variant="white" size="base">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum.
            </Text>
            <Stack direction={["column", "row"]} spacing="1rem">
              <Button variant="white" _focus={{ outline: "3px solid white", outlineOffset: "2px" }}>
                Accessible
              </Button>
              <Button
                variant="blue"
                border="3px solid white"
                _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
              >
                Inaccessible
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex="1" p="2rem 2rem 0 0">
          <Image alt="" objectFit="cover" src="/hero-footer.png" />
          <Text className="sr-only">Do you have any questions?</Text>
        </Flex>
      </Stack>
    </Box>
  );
}
