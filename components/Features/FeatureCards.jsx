"use client";

import { Box, SimpleGrid, Icon, Text, Stack, Flex, VStack, Heading } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { HiLightBulb } from "react-icons/hi";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack p="0px 20px">
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
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

export default function FeatureCards() {
  return (
    <VStack p={4} spacing={15}>
      <Heading as="h2" variant="blue" size="h2" padding="2.5rem 0">
        What can we use this for?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="90%" m="auto" p="0px 0px">
        <Feature
          icon={<Icon aria-hidden="true" as={HiLightBulb} color={"blue.base"} w={10} h={10} />}
          title={"Rissus Commodo"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon aria-hidden="true" as={HiLightBulb} color={"blue.base"} w={10} h={10} />}
          title={"Rissus Commodo"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon aria-hidden="true" as={HiLightBulb} color={"blue.base"} w={10} h={10} />}
          title={"Rissus Commodo"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </VStack>
  );
}
