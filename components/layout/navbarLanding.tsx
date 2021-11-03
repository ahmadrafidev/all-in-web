import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Text,
  Link
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import Link from 'next/link'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavbarLanding() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
        <Container
          maxW={'container.xl'}
          as={Stack}
        >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Link href='/' passHref>
              <Text 
                textDecoration="none"
                fontSize={{base:'xl', sm:'2xl', md:'3xl'}}
                fontWeight={'bold'}
                >ALL IN WEB
                </Text>
            </Link>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7} alignItems={'center'}>
                <Link href="#about" passHref>
                  <Box 
                    fontSize={{base:'lg', md:'xl'}}
                    fontWeight={'bold'}>
                    About
                  </Box>
                </Link>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}