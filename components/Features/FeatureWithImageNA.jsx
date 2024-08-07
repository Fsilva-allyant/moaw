"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Link,
} from "@chakra-ui/react";

import prodUrl from "@/common/prodUrl";

import { FaCaretRight } from "react-icons/fa6";

// Icon props are unused unless it's decided to use icons
const Feature = ({ text, href, icon, iconBg }) => {
  return (
    <Stack direction="row" align="center">
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Link
        className="no-focus-indicator"
        href={prodUrl(href)}
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "#6126eb",
          color: "blue.light !important",
        }}
      >
        <Text as="h3" variant="link">
          {text}
        </Text>
      </Link>
    </Stack>
  );
};

export default function FeatureWithImageNA() {
  return (
    <Container maxW="90%" p="0.75rem">
      <SimpleGrid columns={["1", "2"]} spacing="2.5rem">
        <Stack spacing="1rem">
          <Text variant="tag">Our Lab</Text>
          <Heading as="h5" size="h2" variant="blue">
            Before and After
          </Heading>
          <Text variant="blue" size="sm">
            We created both an accessible and an inaccessible version to show the difference between
            them. This lets you see the problems faced by people with disabilities. By comparing the
            two, we hope to make it clear why making websites that are{" "}
            <Link
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "#6126eb",
                color: "blue.base !important",
              }}
              className="no-focus-indicator"
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            >
              WCAG
            </Link>{" "}
            compliant matter{" "}
          </Text>
          <Stack spacing="1rem" py="1rem" divider={<StackDivider borderColor="gray.light" />}>
            <Feature
              icon={<Icon as={FaCaretRight} w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Index"
              href="/"
            />
            <Feature
              icon={<Icon as={FaCaretRight} w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Accessible Site"
              href="/accessible"
            />
            <Feature
              icon={<Icon as={FaCaretRight} w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Inaccessible Site"
              href="/inaccessible"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            className="white-mask"
            src="/stock.jpg"
            alt="/stock.jpg"
            rounded="md"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
