"use client";

import { SimpleGrid, Icon, Text, Stack, Flex, VStack, Heading } from "@chakra-ui/react";
import { FaArchway, FaMedapps, FaLaptopCode, FaHandshake } from "react-icons/fa6";

const Feature = ({ title, text, icon, maxW }) => {
  return (
    <Stack alignItems={["center", "start"]} textAlign={["center", "start"]} maxW="90%">
      <Flex
        color="white"
        rounded="full"
        bg="blue.opacity"
        w="3.5rem"
        h="3.5rem"
        mb="0.25rem"
        align="center"
        justify="center"
      >
        <Icon
          maxWidth={maxW ?? "2.5rem"}
          aria-hidden="true"
          as={icon}
          color="blue.base"
          w="4rem"
          h="4rem"
        />
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
      <Heading as="h2" variant="blue" size="h2" paddingBottom="2rem">
        What can we use this for?
      </Heading>
      <SimpleGrid columns={[1, 3]} spacing="2.5rem">
        <Feature
          icon={FaArchway}
          title="Educational Tours"
          text="Gain insights into web accessibility by exploring our curated exhibits."
          maxW="2rem"
        />
        <Feature
          icon={FaLaptopCode}
          title="Accessibility Learning"
          text="Learn about common accessibility barriers and how to remediate them."
          maxW="2.5rem"
        />
        <Feature
          icon={FaMedapps}
          title="Live User Demos"
          text="Use our site for live demonstrations of accessibility issues and solutions."
          maxW="1.5rem"
        />
      </SimpleGrid>
    </VStack>
  );
}
