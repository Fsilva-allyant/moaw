"use client";

import { SimpleGrid, Icon, Text, Stack, Flex, VStack, Heading } from "@chakra-ui/react";
import { HiLightBulb } from "react-icons/hi";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        color="white"
        rounded="full"
        bg="gray.light"
        w="4rem"
        h="4rem"
        mb="0.25rem"
        align="center"
        justify="center"
      >
        {icon}
      </Flex>
      <Heading as="h3" size="h3" variant="blue">
        {title}
      </Heading>
      <Text size="sm" variant="blue">
        {text}
      </Text>
    </Stack>
  );
};

export default function FeatureCardsNA() {
  return (
    <VStack maxW="90%" m="auto" p="0 0.75rem 0" spacing="1rem">
      <Heading as="h2" variant="blue" size="h2" paddingBottom="2rem 0">
        What can we use this for?
      </Heading>
      <SimpleGrid columns={[1, 3]} spacing="2.5rem">
        <Feature
          icon={<Icon aria-hidden="true" as={HiLightBulb} color={"blue.base"} w="4rem" h="4rem" />}
          title="Rissus Commodo"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon aria-hidden="true" as={HiLightBulb} color={"blue.base"} w="4rem" h="4rem" />}
          title="Rissus Commodo"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon aria-hidden="true" as={HiLightBulb} color={"blue.base"} w="4rem" h="4rem" />}
          title="Rissus Commodo"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
      </SimpleGrid>
    </VStack>
  );
}
