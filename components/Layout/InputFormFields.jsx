import {
  FormControl,
  FormLabel,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function InputFormFields(isRequired, id, label) {
  return (
    <FormControl isRequired={isRequired} id={id}>
      <FormLabel>{label}</FormLabel>
      <InputGroup role="" borderColor="#E0E1E7">
        <InputLeftElement pointerEvents="none">
          <BsPerson aria-hidden="true" color="gray.800" />
        </InputLeftElement>
        <Input type="text" size="md" />
      </InputGroup>
    </FormControl>
  );
}
