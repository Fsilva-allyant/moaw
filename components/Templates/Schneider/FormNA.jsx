"use client";

import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Textarea,
  Container,
  Text,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container flexDir="column" display="flex" gap="2rem">
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">First name </FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <BsPerson aria-hidden="true" color="gray.800" />
            </InputLeftElement>
            <Input
              id="name"
              placeholder="John Smith"
              {...register("name")}
              size="md"
              _focus={{ borderColor: "blue.base !important" }}
              _hover={{ borderColor: "gray.bold" }}
              borderColor="gray.cc"
            />
          </InputGroup>
          {errors.name?.type === "required" && (
            <FormErrorMessage color="red.onLight">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email </FormLabel>
          <InputGroup role="" borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <MdEmail aria-hidden="true" color="gray.bold" />
            </InputLeftElement>
            <Input
              id="email"
              placeholder="hello@abc.com"
              {...register("email")}
              size="md"
              _focus={{ borderColor: "blue.base !important" }}
              _hover={{ borderColor: "gray.bold" }}
              borderColor="gray.cc"
            />
          </InputGroup>
          {errors.email?.type === "required" && (
            <FormErrorMessage color="red.onLight">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Message </FormLabel>
          <Textarea
            placeholder="Message"
            {...register("message")}
            _focus={{ borderColor: "blue.base !important" }}
            _hover={{ borderColor: "gray.bold" }}
            borderColor="gray.cc"
          />
          {errors.message?.type === "required" && (
            <FormErrorMessage color="red.onLight">
              {errors.message && errors.message.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Button variant="blue" isLoading={isSubmitting} type="submit">
          Send Message
        </Button>
      </Container>
    </form>
  );
}
