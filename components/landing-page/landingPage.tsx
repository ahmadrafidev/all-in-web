import Typewriter from 'typewriter-effect';
import Link from 'next/link'

import { 
  Box,
  Flex,
  Button,
  Text,
  Container,
  Stack,
  Heading
} from "@chakra-ui/react"
import { motion } from "framer-motion";



function LandingPage() {
  return (
    <>
      <Box my="20">
        <Container maxW={"3xl"} py="20" my="20" minH={"100%"}>
          <Stack
            direction={"column"}
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              bgGradient="linear(to-l, #0bf8e4,#a409f1, #ec0d1c)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              fontFamily={"DMSans"}
            >
              JUST TAKE A
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ["NOTES", "TODO LIST", "EVERYTHING"],
                }}
              />
            </Heading>

            <Stack direction={"row"} textAlign={"center"}>
              <Button
                rounded={"full"}
                px={{ md: 20 }}
                mx={"24"}
                bg={"blue.500"}
                colorScheme="blue"
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
              >
                <Link passHref href="/signup">
                  SIGN UP
                </Link>
              </Button>

              <Button
                px={{ md: 20 }}
                rounded={"full"}
                colorScheme="blue"
                bg={"blue.500"}
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
              >
                <Link passHref href="/signin">
                  SIGN IN
                </Link>
              </Button>
            </Stack>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/home" passHref>
                <a>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontFamily={"DMSans"}
                    fontWeight={"bold"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    log in as a guest
                  </Text>
                </a>
              </Link>
            </motion.button>
          </Stack>
        </Container>
      </Box>
      <Box minH={"100%"}>
        <Container
          w={"100%"}
          h={"100%"}
          id="about"
          py="40"
          mb="40"
          textAlign={"center"}
          maxW={"3xl"}
          as={Stack}
        >
          <Heading
            my="10"
            as="h1"
            textAlign={"center"}
            fontFamily={"DMSans"}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            About This Web
          </Heading>
          <Text
            letterSpacing="wide"
            fontFamily={"DMSans"}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={"semibold"}
          >
            This web is all about to save everything, like college notes,
            todolist, or some kind of database. The very first version of this
            web is I can only save notes and todolist. The future update about
            what things could update here is very very soon. Enjoy. Peace out.
            -Rf
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default LandingPage;