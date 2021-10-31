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

/*
  Todo:
  benerin sign up dan sign in button
  buat about as a page jadi pas diklik kayak satu halaman (ide: jadiin beda box)
*/


function LandingPage() {
  return(
    <>
      <Box my='20'>
        <Container
          maxW={'3xl'}
          py='20'
          my='20'
          minH={'100%'}
        >
          <Stack 
            direction={'column'}
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
          <Heading
            bgGradient="linear(to-l, #0bf8e4,#a409f1, #ec0d1c)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            fontFamily={'DMSans'}
          >JUST TAKE A 
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                "NOTES",
                "TODO LIST"
                ]
              }}
            />
          </Heading>

          <Stack 
            direction={'row'}
            textAlign={'center'}
          >
            <Button  
              rounded={'full'} 
              px={{md:20}} 
              mx={'24'} 
              bg={'#1F1C2C'} 
              color={'white'}>
              SIGN UP</Button>

            <Button 
              px={{md:20}}
              rounded={'full'}
              bg={'#1F1C2C'} 
              color={'white'}>
                SIGN IN</Button>
          </Stack>

          <Link href="/home" passHref>
            <a>
              <Text
                fontSize={{base: '2xl', md: '3xl'}}
                fontFamily={'DMSans'}
                fontWeight={'bold'}
              >log in as a guest</Text>
            </a>
          </Link>
          </Stack>
        </Container>
      </Box>
      <Box
        minH={'100%'}
      >
        <Container
          w={'100%'}
          h={'100%'}
          id='about'
          py='40'
          mb='40'
          textAlign={'center'}
          maxW={'3xl'}
          as={Stack}
        >
          <Heading
            my='10'
            as='h1'
            textAlign={'center'}
            fontFamily={'DMSans'}
            fontSize={{base:'2xl', md:'4xl'}}
          >About This Web</Heading>
          <Text
            letterSpacing='wide'
            fontFamily={'DMSans'}
            fontSize={{base:'xl', md: '2xl'}}
            fontWeight={'semibold'}
          >
            This web is all about to save everything, like college notes, todolist,
            or some kind of database. The very first version of this web is I can only
            save notes and todolist. The future update about what things could update 
            here is very very soon.
            Enjoy. Peace out. -Rf
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default LandingPage;