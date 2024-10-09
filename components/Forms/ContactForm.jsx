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
  Image,
  Box,
} from "@chakra-ui/react";
import { MdPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import SocialMediaLinks from "../SocialMediaLinks";
import Form from "@/components/Forms/Form";

export default function Contact() {
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
          <VStack as="ul" spacing={3} alignItems="center" py="1.5rem">
            <li>
              <VisuallyHidden>Phone</VisuallyHidden>
              <Button
                as="a"
                href="tel:+16132360866"
                variant="social"
                size="md"
                height="48px"
                width="200px"
                leftIcon={<MdPhone color="white" size="20px" />}
                _hover={{ textDecoration: "underline" }}
              >
                +1 613 236 0866
              </Button>
            </li>
            <li>
              <VisuallyHidden>Email</VisuallyHidden>
              <Button
                as="a"
                href="mailto:hello@allyant.com"
                variant="social"
                size="md"
                height="48px"
                width="200px"
                leftIcon={<MdOutlineEmail color="white" size="20px" />}
                _hover={{ textDecoration: "underline" }}
              >
                hello@allyant.com
              </Button>
            </li>
            <li>
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
            </li>
          </VStack>
          <SocialMediaLinks />
        </Stack>
        <Box borderRadius="lg" width="40%">
          <Image
            src={"/moaw_light.png"}
            alt="Museum of Accessibility Woes"
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
              <Form />
            </VStack>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
}
