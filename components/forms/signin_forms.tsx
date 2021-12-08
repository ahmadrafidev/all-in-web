/* eslint-disable react/no-unescaped-entities */
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
  Center
} from '@chakra-ui/react';
import Link from 'next/link'

export default function SignIn() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
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
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
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
                type="submit"
                width="full"
                bg={"blue.500"}
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
              >
                Sign In
              </Button>
              <Center>
                <Text color="blue.500" fontSize={"lg"} fontWeight={"semibold"}>
                  <Link href={"/"} passHref>
                    Go Back
                  </Link>
                </Text>
              </Center>
              <Center>
                <Text fontSize={"lg"} fontWeight={"semibold"} mr={"4"}>
                  Don't have an account?
                </Text>
                <Text color="blue.500" fontSize={"lg"} fontWeight={"semibold"}>
                  <Link href={"/signup"} passHref>
                    Sign Up
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