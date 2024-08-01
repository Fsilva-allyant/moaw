"use client";

import { SimpleGrid, Icon, Text, Stack, Flex, VStack, Heading } from "@chakra-ui/react";
import { HiLightBulb } from "react-icons/hi";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack alignItems={["center", "start"]} textAlign={["center", "start"]} maxW="90%">
      <Flex
        color="white"
        rounded="full"
        bg="gray.light"
        w="3.5rem"
        h="3.5rem"
        mb="0.25rem"
        align="center"
        justify="center"
      >
        <Icon maxWidth="2.5rem" aria-hidden="true" as={icon} color="blue.base" w="4rem" h="4rem" />
      </Flex>
      <Heading as="h3" size="h3" variant="blue">
        {title}
      </Heading>
      <Text size="sm" variant="blue" maxW={["50%", "100%"]}>
        {text}
      </Text>
    </Stack>
  );
};

export default function FeatureCards() {
  return (
    <VStack maxW="90%" m="auto" p="0 0.75rem 0" spacing="1rem">
      <Heading as="span" variant="blue" size="h2" paddingBottom="2rem">
        What can we use this for?
      </Heading>
      <SimpleGrid columns={[1, 3]} spacing="2.5rem">
        <Feature
          icon={HiLightBulb}
          title="Rissus Commodo"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={HiLightBulb}
          title="Rissus Commodo"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={HiLightBulb}
          title="Rissus Commodo"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
      </SimpleGrid>
    </VStack>
  );
}
