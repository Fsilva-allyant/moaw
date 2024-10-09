"use client";

import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Stack,
  VisuallyHidden,
  Box,
  Image,
} from "@chakra-ui/react";
import { MdPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import SocialMediaLinks from "../SocialMediaLinks";
import FormNA from "@/components/Forms/FormNA";
import { usePathname } from "next/navigation";

export default function Contact({ theme }) {
  const isSchneider = usePathname().includes("schneider");
  return (
    <Container maxW="full" m="auto" centerContent overflow="hidden">
      <Flex
        bg="blue.bold"
        color="white"
        borderRadius="lg"
        w="100%"
        p="2rem"
        justify={"space-around"}
      >
        <Stack justifyContent={"center"}>
          <Heading textAlign={"center"} as="h1" fontSize={"3rem"} variant="white">
            Contact
          </Heading>
          <Text variant="white" fontSize={"1.25rem"} textTransform={"none"}>
            Get in touch for more information
          </Text>
          <VStack spacing={3} alignItems="center" py="1.5rem">
            <VisuallyHidden>Phone</VisuallyHidden>
            <Button
              as="span"
              variant="social"
              size="md"
              height="48px"
              width="200px"
              leftIcon={<MdPhone color="white" size="20px" />}
              _hover={{ backgroundColor: "blue.bold" }}
            >
              +1 613 236 0866
            </Button>

            <VisuallyHidden>Email</VisuallyHidden>
            <Button
              as="span"
              href="mailto:hello@allyant.com"
              variant="social"
              size="md"
              height="48px"
              width="200px"
              leftIcon={<MdOutlineEmail color="white" size="20px" />}
              _hover={{ backgroundColor: "blue.bold" }}
            >
              hello@allyant.com
            </Button>

            <VisuallyHidden>Location</VisuallyHidden>
            <Button
              as="span"
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              color="white"
              leftIcon={<MdLocationOn color="white" size="20px" />}
              _hover={{ backgroundColor: "blue.bold" }}
            >
              1200 G Street NW Suite 800 Washington, DC 20005
            </Button>
          </VStack>
          <SocialMediaLinks />
        </Stack>
        <Box borderRadius="lg" width="40%">
          <Image
            src={isSchneider ? "/schn_light.png" : "/moaw_light.png"}
            alt="logo"
            width="50%"
            margin="auto"
            padding="0 0 1rem"
          />
          <Stack bg="white" color="#0B0E3F">
            <VStack spacing={5} m={8}>
              <p>
                <Text as="span" color="red.onLight">
                  *
                </Text>{" "}
                indicates a required field
              </p>
              <FormNA />
            </VStack>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
}
