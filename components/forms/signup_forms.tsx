import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  CircularProgress
} from '@chakra-ui/react';
import Link from 'next/link'
import React, {useState} from "react";

// TODO: setting up firebase for sign up and log in


export default function SignUp() {

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Register your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="example@mail.com" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="******" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                type='submit'
                width="full"
                bg={"blue.500"}
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
              >
                Sign Up
              </Button>
              <Center>
                <Text color="blue.500" fontSize={"lg"} fontWeight={"semibold"}>
                  <Link href={"/"} passHref>
                    Go Home
                  </Link>
                </Text>
              </Center>
              <Center>
                <Text fontSize={"lg"} fontWeight={"semibold"} mr={"4"}>
                  Already have an account?
                </Text>
                <Text color="blue.500" fontSize={"lg"} fontWeight={"semibold"}>
                  <Link href={"/signin"} passHref>
                    Log In
                  </Link>
                </Text>
              </Center>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}