"use client";

import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  VStack,
  SimpleGrid,
  // Image,
} from "@chakra-ui/react";

const BlogPost = ({ title, text, tag, imgSrc }) => {
  return (
    <Center>
      <Box maxW={"445px"} w={"full"} boxShadow={"2xl"} rounded={"md"} p={6} overflow={"hidden"}>
        <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image src={`/${imgSrc}`} fill alt="" />
        </Box>
        <Stack>
          <Text variant="tag">{tag}</Text>
          <Heading as="h3" size="h3">
            {title}
          </Heading>
          <Text variant="blue">{text}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src="/avatar.png" />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text>Federico Silva</Text>
            <Text>Jul 22, 2024 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default function BlogCards() {
  return (
    <VStack p={4} spacing={15}>
      <Heading as="h2" variant="blue" size="h2" padding="2.5rem 0">
        Our Blog
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="90%" m="auto" p="0px 0px">
        <BlogPost
          title={"Rissus Commodo"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag="Our Story"
          imgSrc="blog1.jpg"
        />
        <BlogPost
          title={"Rissus Commodo"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag="Our Story"
          imgSrc="blog2.jpeg"
        />
        <BlogPost
          title={"Rissus Commodo"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag="Our Story"
          imgSrc="blog3.png"
        />
      </SimpleGrid>
    </VStack>
  );
}
