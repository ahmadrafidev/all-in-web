import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
  Container
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

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
            <Link href='/'>
              <Box
              fontSize={{base:'xl', sm:'2xl', md:'3xl'}}
              fontWeight={'bold'}
              >ALL IN WEB</Box>
            </Link>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7} alignItems={'center'}>
                <Link href="#about">
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