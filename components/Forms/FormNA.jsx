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

export default function HookForm({ theme }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify("error", null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container flexDir="column" display="flex" gap="2rem">
        <FormControl isInvalid={errors.name}>
          {/* <FormLabel htmlFor="name">First name </FormLabel> */}
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <BsPerson aria-hidden="true" color="gray.800" />
            </InputLeftElement>
            <Input
              id="name"
              placeholder="John Smith"
              {...register("name", {
                required: "Message is required",
              })}
              size="md"
              _focus={{ borderColor: theme ? `${theme} !important` : "blue.base !important" }}
              _hover={{ borderColor: "gray.light" }}
              borderColor="gray.light"
              _placeholder={{ color: "gray.base" }}
            />
          </InputGroup>
          {/* {errors.name?.type === "required" && (
            <FormErrorMessage color="red.onLight">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          )} */}
        </FormControl>
        <FormControl isInvalid={errors.email}>
          {/* <FormLabel htmlFor="email">Email </FormLabel> */}
          <InputGroup role="" borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <MdEmail aria-hidden="true" color="gray.800" />
            </InputLeftElement>
            <Input
              id="email"
              placeholder="hello@abc.com"
              {...register("email", {
                required: "Message is required",
              })}
              size="md"
              _focus={{ borderColor: theme ? `${theme} !important` : "blue.base !important" }}
              _hover={{ borderColor: "gray.light" }}
              borderColor="gray.light"
              _placeholder={{ color: "gray.base" }}
            />
          </InputGroup>
          {/* {errors.email?.type === "required" && (
            <FormErrorMessage color="red.onLight">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          )} */}
        </FormControl>
        <FormControl isInvalid={errors.message}>
          {/* <FormLabel>Message </FormLabel> */}
          <Textarea
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
            })}
            _focus={{ borderColor: theme ? `${theme} !important` : "blue.base !important" }}
            _hover={{ borderColor: "gray.bold" }}
            borderColor="gray.light"
            _placeholder={{ color: "gray.base" }}
          />
          {/* {errors.message?.type === "required" && (
            <FormErrorMessage color="red.onLight">
              {errors.message && errors.message.message}
            </FormErrorMessage>
          )} */}
        </FormControl>
        <Button
          backgroundColor={"schneider"}
          isLoading={isSubmitting}
          _focus={{ outlineColor: theme ? `${theme} !important` : "blue.base !important" }}
          type="submit"
        >
          Send Message
        </Button>
      </Container>
    </form>
  );
}
