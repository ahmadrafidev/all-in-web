import {
  Text,
  Box,
  Container,
} from '@chakra-ui/react';

export default function HomePage(){
  return(
    <>
      <Box>
        <Container
          minH={'100%'}
          w={"100%"}
          h={"100%"}
          maxW="container.xl"
        >
          <Text 
            my='31%'
            textAlign={"center"}
            fontFamily={'DMSans'}
            fontSize={30}
            fontWeight={'bold'}
            >
              Nothing here. Maybe add one?
            </Text>
          </Container>
      </Box>
    </>
  );
}