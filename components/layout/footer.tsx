import {
  Box,
  Container, 
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  chakra,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};


function Footer(){
  return (
    <Box
      as="footer"
      bottom={'0'}
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
       <Container
        as={Stack}
        maxW={'container.xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text fontFamily={'DMSans'} fontWeight={'bold'} fontSize={{base: 'lg', md: 'xl'}}>© 2021 Ahmad Rafi Wirana. All rights reserved.</Text>
        <Stack direction={'row'} spacing={6}>
          <Text fontFamily={'DMSans'} fontWeight={'bold'} fontSize={{base: 'lg', md: 'xl'}}>Feedback: </Text>
          <SocialButton label={'Twitter'} href={'https://twitter.com/ahhmadrafi'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/ahhmadrafi/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/ahmadrafiwirana/'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
       </Container>
    </Box>
  );
}

export default Footer;