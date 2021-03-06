import { Button } from "@chakra-ui/button";
import { Input, InputProps } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Textarea, TextareaProps } from "@chakra-ui/textarea";
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { useForm } from "./useForm";
import { useToast, UseToastOptions } from "@chakra-ui/toast";

const Form = () => {
  const inputStyles: InputProps & TextareaProps = {
    size: "lg",
    focusBorderColor: "brand.400",
    bg: "blackAlpha.300",
    borderColor: "whiteAlpha.200",
    _hover: {
      borderColor: "whiteAlpha.200",
    },
    _placeholder: {
      color: "whiteAlpha.600",
    },
  };
  const toast = useToast();
  const announce = (mes: string, stat: UseToastOptions["status"]) => {
    toast({
      description: mes,
      status: stat,
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };
  const { name, email, subject, message, reset, data } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const validateData = () => {
    let status = true;
    Object.keys(data).every((key) => {
      console.log("key :>> ", key);
      const field = data[key];
      if (!field || 0 === field.trim().length) {
        status = false;
        announce(`${key.toUpperCase()} is required`, "warning");
        console.log("key :>> ", key, field);
        return false;
      }
      return true;
    });
    return status;
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateData()) {
      // setLoading(true);
      // let templateParams = {
      //   from_name: name.value,
      //   from_email: email.value,
      //   to_name: process.env.myName,
      //   subject: subject.value,
      //   message: message.value,
      // };
      // emailjs
      //   .send(
      //     "service_lpbnls3",
      //     "template_1qcfjt3",
      //     templateParams,
      //     "user_Q4UfbP80V0crFqe5nhEHd"
      //   )
      //   .then(
      //     () => {
      //       reset();
      //       announce("Your message was sent successfully", "success");
      //       setLoading(false);
      //     },
      //     (err) => {
      //       console.log("err :>> ", err);
      //       announce(`${err}. Please try again`, "error");
      //     }
      //   );
    }
  };

  return (
    <chakra.form mb={8} onSubmit={handleSubmit}>
      <Stack spacing={8}>
        <Input
          placeholder="Name"
          name="name"
          type="text"
          {...inputStyles}
          {...name}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          {...inputStyles}
          {...email}
        />
        <Input
          placeholder="Subject"
          name="subject"
          type="text"
          {...inputStyles}
          {...subject}
        />
        <Textarea
          placeholder="Your Message"
          name="message"
          {...inputStyles}
          rows={5}
          pt={6}
          {...message}
        />
        <Button
          size="lg"
          textTransform="uppercase"
          w={[, "fit-content"]}
          py={8}
          type="submit"
          isLoading={loading}
        >
          Send Message
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default Form;
