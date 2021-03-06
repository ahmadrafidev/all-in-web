import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Textarea,
  Input
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  MdNotes,
  MdAddTask,
  MdStorage,
  MdDashboard,
  MdPerson,
  MdLogout,
} from "react-icons/md";
import { motion } from "framer-motion";
import Link from 'next/link'
import React from 'react';

const Links = ['Dashboard'];

const NavLinkHome = ({ children }: { children: ReactNode }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/home'}>
    {children}
  </ChakraLink>
);

const NavLink = ({ children }: { children: ReactNode }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </ChakraLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const firstField = React.useRef();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container as={Stack} maxW={"container.xl"}>
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box
                fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                fontWeight={"bold"}
              >
                <NavLinkHome>ALL IN WEB</NavLinkHome>
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                fontSize={{ base: "lg", md: "xl" }}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MenuButton
                    as={Button}
                    variant={"outline"}
                    colorScheme="gray.900"
                    size={"sm"}
                    mr={4}
                    rightIcon={<AddIcon />}
                  >
                    Add
                  </MenuButton>
                </motion.button>

                <MenuList>
                  <Link href="/notes" passHref>
                    <MenuItem icon={<Icon as={MdNotes} w={5} h={5} />}>
                      <a>Notes</a>
                    </MenuItem>
                  </Link>

                  <MenuItem
                    onClick={onOpen}
                    icon={<Icon as={MdAddTask} w={5} h={5} />}
                  >
                    Todo
                  </MenuItem>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    initialFocusRef={firstField}
                    onClose={onClose}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader borderBottomWidth="1px">
                        CREATE NEW TODO
                      </DrawerHeader>
                      <DrawerBody>
                        <Stack spacing="24px" mt={5}>
                          <Box>
                            <Input
                              ref={firstField}
                              id="username"
                              placeholder="Title"
                            />
                          </Box>
                          <Box>
                            <Textarea
                              id="desc"
                              placeholder="Enter litte notes"
                            />
                          </Box>
                        </Stack>
                      </DrawerBody>
                      <DrawerFooter borderTopWidth="1px">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button rightIcon={<CloseIcon/>} variant="outline" mr={3} onClick={onClose}>
                            Cancel
                          </Button>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button rightIcon={<AddIcon />} colorScheme="blue">
                            Add
                          </Button>
                        </motion.button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <MenuItem icon={<Icon as={MdStorage} w={5} h={5} />}>
                    Database
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                    />
                  </MenuButton>
                </motion.button>

                <MenuList>
                  <MenuItem icon={<Icon as={MdDashboard} w={5} h={5} />}>
                    Dashboard
                  </MenuItem>
                  <MenuItem icon={<Icon as={MdPerson} w={5} h={5} />}>
                    Profile
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<Icon as={MdLogout} w={5} h={5} />}>
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button onClick={toggleColorMode} ml={4}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </motion.button>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}