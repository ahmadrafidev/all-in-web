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
          <Text textAlign={"center"}>soon</Text>
          </Container>
      </Box>
    </>
  );
}