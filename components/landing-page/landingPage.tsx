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


function LandingPage() {
  return(
    <Container
      maxW={'3xl'}
    >
      <Stack 
        direction={'column'}
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        fontFamily={'DMSans'}
      >JUST TAKE A NOTE
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
  );
}

export default LandingPage;