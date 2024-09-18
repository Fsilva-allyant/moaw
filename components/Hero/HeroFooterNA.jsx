"use client";

import { Button, Flex, Heading, Image, Stack, Text, Box } from "@chakra-ui/react";

import prodUrl from "@/common/prodUrl";
import { usePathname } from "next/navigation";

export default function HeroFooterNA() {
  const isSchneider = usePathname().includes("schneider");
  return (
    <Box maxWidth="100%" bgColor={isSchneider ? "schneider" : "blue.base"}>
      <Stack direction={["column", "row"]} maxW="90%" margin="auto">
        <Flex flex="1" align="center" justify="center">
          <Stack spacing="1.5rem" w="full" maxW="32rem" m="2rem 0">
            <Heading as="h2" size="h2" color={isSchneider ? "black" : "white"}>
              Let&apos;s start facing the barriers.
            </Heading>
            <Text color={isSchneider ? "black" : "white"} size="base">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum.
            </Text>
            <Stack direction={["column", "row"]} spacing="1rem">
              <Button
                as="a"
                href={
                  isSchneider ? prodUrl("/schneider/contact") : prodUrl("/inaccessible/contact")
                }
                variant={isSchneider ? "schneider" : "white"}
                _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
              >
                Contact Us
              </Button>
              {/* <Button
                as="a"
                href={prodUrl("/inaccessible")}
                variant="blue"
                border="3px solid white"
                _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
              >
                Inaccessible
              </Button> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex display={["none", "flex"]} flex="1" p="2rem 2rem 0 0">
          <Image alt="" objectFit="cover" src="/textwithinimage_2.png" />
          {/* <Text className="sr-only">Do you have any questions?</Text>
          <Text visibility={"hidden"}>
            If you want to know more about this project and other projects in our lab, do not
            hesitate to contact us!
          </Text> */}
        </Flex>
      </Stack>
    </Box>
  );
}
