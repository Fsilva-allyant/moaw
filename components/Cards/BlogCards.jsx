"use client";

import Image from "next/image";
// import Link from "next/link";
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

import BLOGS from "@/common/blogsData";

const BlogPost = ({ blog }) => {
  const { img, text, info } = blog;
  console.log(blog);
  return (
    <Center as="li" height={"fit-content"}>
      <Box
        role="group"
        aria-label="blog"
        maxW={"90%"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image className="white-mask" src={`/${img.src}`} fill alt="" />
        </Box>
        <Stack>
          <Text variant="tag">{text.tag}</Text>
          <Heading as="h3" size="h3">
            <Text variant="link">
              <Link
                href="#"
                _hover={{ textDecoration: "underline", textDecorationColor: "#6126eb" }}
                _focus={{
                  outline: "3px solid #6126eb !important",
                  outlineOffset: "2px !important",
                  boxShadow: "none !important",
                }}
              >
                {text.heading}
              </Link>
            </Text>
          </Heading>
          <Text variant="blue">{text.body}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src="/avatar.png" name="" />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text>{info.name}</Text>
            <Text>
              {info.date} · {info.readMinutes}min read
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default function BlogCards() {
  return (
    <VStack spacing={15} maxW="90%" m="auto" p="0 0.625rem 0">
      <Heading as="h2" variant="blue" size="h2" paddingBottom="2rem">
        Our Blog
      </Heading>
      <SimpleGrid as="ul" columns={[1, 3]} spacing={10}>
        {BLOGS.map((blog) => {
          return <BlogPost key={blog.id} blog={blog} />;
        })}
      </SimpleGrid>
    </VStack>
  );
}
