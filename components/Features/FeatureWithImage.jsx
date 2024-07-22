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
  List,
  ListItem,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack as="li" direction={"row"} align={"center"}>
      {/* <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex> */}
      <Link href="#">
        <Text variant="link">{text}</Text>
      </Link>
    </Stack>
  );
};

export default function FeatureWithImage() {
  return (
    <Container maxW="90%" p="3.5rem 0 0 0">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text variant="tag">Our Lab</Text>
          <Heading as="h2" size="h2" variant="blue">
            Before and After
          </Heading>
          <Text variant="blue" size="sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack as="ul" spacing={4} py="1rem" divider={<StackDivider borderColor="gray.300" />}>
            <Feature icon={<Icon as={""} w={5} h={5} />} iconBg="" text={"Index"} />
            <Feature icon={<Icon as={""} w={5} h={5} />} iconBg="" text={"Accessible Site"} />
            <Feature icon={<Icon as={""} w={5} h={5} />} iconBg="" text={"Inaccessible Site"} />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt=""
            src="/ljx221101webaccessiblitydesign1.jpg"
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
