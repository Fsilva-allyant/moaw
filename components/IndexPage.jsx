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
  Box,
  Center,
  VisuallyHidden,
} from "@chakra-ui/react";

import prodUrl from "@/common/prodUrl";

// Icon props are unused unless it's decided to use icons
const Feature = ({ text, href, icon, iconBg }) => {
  return (
    <Stack as="li" direction="row" align="center">
      {/* <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex> */}
      <Link
        href={href}
        _hover={{ textDecoration: "underline", textDecorationColor: "white" }}
        _focus={{ outline: "3px solid white", outlineOffset: "2px" }}
      >
        <Text variant="link-white" size="md">
          {text}
        </Text>
      </Link>
    </Stack>
  );
};

export default function IndexPage() {
  return (
    <Center className="body-index">
      <Container maxW="90%" p="3rem" className="main-index">
        <SimpleGrid columns={["1", "2"]} spacing="2.5rem">
          <Stack spacing="1rem">
            <Text variant="tag">Our Lab</Text>
            <Heading as="h2" size="h2" variant="white">
              Museum of Accessibility Woes
            </Heading>
            <Stack>
              <Text variant="blue" size="sm" color="white">
                Welcome to the &quot;Museum of Accessibility Woes&quot;, an educational demo page
                that shows common accessibility problems with real examples. You&apos;ll see an
                inaccessible landing page, an accessible version, and explanations of the
                highlighted issues.
              </Text>
              <Text variant="blue" size="sm" color="white">
                This demo doesn&apos;t cover all Web Content Accessibility Guidelines (WCAG) or list
                every problem, but it helps you understand some key points of web accessibility.
              </Text>
            </Stack>
            <Stack
              as="ul"
              spacing="1rem"
              py="1rem"
              divider={<StackDivider borderColor="gray.light" />}
            >
              {/* <Feature
              icon={<Icon as="" w="1.25rem" h="1.25rem" />}
              iconBg=""
              text="Index"
              href="/index.html"
            /> */}
              <Feature
                icon={<Icon as="" w="1.25rem" h="1.25rem" />}
                iconBg=""
                text="Accessible Site"
                href={prodUrl("/accessible")}
              />
              <Feature
                icon={<Icon as="" w="1.25rem" h="1.25rem" />}
                iconBg=""
                text="Inaccessible Site"
                href={prodUrl("/inaccessible")}
              />
            </Stack>
          </Stack>
          <Box
            role="img"
            alt="Museum of Accessibility Woes logo"
            backgroundImage={'url("/logo_big.png")'}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            w="100%"
            h="100%"
          >
            {/* <VisuallyHidden>Museum of Accessibility Woes logo</VisuallyHidden> */}
          </Box>
        </SimpleGrid>
      </Container>
    </Center>
  );
}
