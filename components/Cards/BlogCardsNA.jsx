"use client";

import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  VStack,
  SimpleGrid,
  Link,
  // Image,
} from "@chakra-ui/react";

const BlogPost = ({ title, text, tag, imgSrc, editor, date, readMinutes }) => {
  return (
    <Center>
      <Box maxW={"90%"} w={"full"} boxShadow={"2xl"} rounded={"md"} p={6} overflow={"hidden"}>
        <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Link>
            <Image className="white-mask" src={`/${imgSrc}`} fill alt="" />
          </Link>
        </Box>
        <Stack>
          <Text variant="tag">{tag}</Text>
          <Heading as="span" size="h3">
            <Text variant="link">
              <Link
                className="no-focus-indicator"
                href="#"
                _hover={{ textDecoration: "underline", textDecorationColor: "#6126eb" }}
              >
                {title}
              </Link>
            </Text>
          </Heading>
          <Text variant="blue">{text}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src="/avatar.png" name="" />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text>{editor}</Text>
            <Text>
              {date} · {readMinutes}min read
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default function BlogCardsNA() {
  return (
    <VStack spacing={15} maxW="90%" m="auto" p="0 0.625rem 0">
      <Heading as="h2" variant="blue" size="h2" paddingBottom="2rem">
        Our Blog
      </Heading>
      <SimpleGrid columns={[1, 3]} spacing={10}>
        <BlogPost
          title={"Design Accessibility Issues"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag="Our Story"
          imgSrc="blog1.jpg"
          editor="Sam Hernandez"
          date="Jul 22, 2024"
          readMinutes="6"
        />
        <BlogPost
          title={"Coding ARIA patterns"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag="Our Story"
          imgSrc="blog2.jpeg"
          editor="John Smith"
          date="Jul 23, 2024"
          readMinutes="8"
        />
        <BlogPost
          title={"PDF Standards"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag="Our Story"
          imgSrc="blog3.png"
          editor="Katie Holmes"
          date="Jul 25, 2024"
          readMinutes="3"
        />
      </SimpleGrid>
    </VStack>
  );
}
