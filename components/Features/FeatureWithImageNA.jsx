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

// Icon props are unused unless it's decided to use icons
const Feature = ({ text, href, icon, iconBg }) => {
  return (
    <Stack direction="row" align="center">
      {/* <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex> */}
      <Link href={prodUrl(href)}>
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack spacing="1rem" py="1rem" divider={<StackDivider borderColor="gray.light" />}>
            <Feature
              icon={<Icon as="" w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Index"
              href="/"
            />
            <Feature
              icon={<Icon as="" w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Accessible Site"
              href="/accessible"
            />
            <Feature
              icon={<Icon as="" w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Inaccessible Site"
              href="/inaccessible"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image src="/stock.jpg" alt="/stock.jpg" rounded="md" objectFit="cover" />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
