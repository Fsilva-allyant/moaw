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

import { FaCaretRight } from "react-icons/fa6";

import prodUrl from "@/common/prodUrl";

// Icon props are unused unless it's decided to use icons
const Feature = ({ text, href, icon, iconBg, content }) => {
  return (
    <Stack as="li" direction="row" align="center" className="list-icons">
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Link
        href={prodUrl(href)}
        _hover={{ textDecoration: "underline", textDecorationColor: "#6126eb" }}
      >
        <Text variant="link">{text}</Text>
      </Link>
    </Stack>
  );
};

export default function FeatureWithImage() {
  return (
    <Container maxW="90%" p="0.75rem">
      <SimpleGrid columns={["1", "2"]} spacing="2.5rem">
        <Stack spacing="1rem">
          <Text variant="tag">Our Lab</Text>
          <Heading as="h2" size="h2" variant="blue">
            Before and After
          </Heading>
          <Text variant="blue" size="sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack
            as="ul"
            spacing="1rem"
            py="1rem"
            divider={<StackDivider borderColor="gray.light" />}
          >
            <Feature
              icon={<Icon as={FaCaretRight} w="1.25rem" h="1.25rem" aria-hidden="true" />}
              iconBg=""
              text="Index"
              href="/"
            />
            <Feature
              icon={<Icon as={FaCaretRight} w="1.25rem" h="1.25rem" aria-hidden="true" />}
              iconBg=""
              text="Accessible Site"
              href="/accessible"
            />
            <Feature
              icon={<Icon as={FaCaretRight} w="1.25rem" h="1.25rem" aria-hidden="true" />}
              iconBg=""
              text="Inaccessible Site"
              href="/inaccessible"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image src="/stock.jpg" alt="" rounded="md" objectFit="cover" className="white-mask" />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
