import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
  Textarea,
  Button,
  VStack
} from "@chakra-ui/react";
import {
  MdKeyboardArrowRight
} from 'react-icons/md'


export default function Todo(){
    return (
      <>
        <Box>
          <Container maxW="container.sm" my={"10%"}>
            <Box borderWidth={1} margin={2} p={6}>
              <VStack spacing={8} align={"center"}>
                <Text fontSize={"3xl"} align={"center"} fontWeight={"bold"}>
                  Create New Todo
                </Text>
                <Box p={4} borderWidth={1} display={{ md: "flex" }} margin={2}>
                  <form>
                    <FormControl p={2}>
                      <Input
                        variant="outline"
                        id="title"
                        type="title"
                        placeholder="Title"
                      />
                    </FormControl>
                    <FormControl p={2}>
                      <Textarea
                        variant="outline"
                        id="title"
                        type="title"
                        placeholder="What to do"
                      />
                    </FormControl>
                  </form>
                </Box>
                <Button
                  my={10}
                  colorScheme={"blue"}
                  size={"md"}
                  variant={"solid"}
                  type="submit"
                  rightIcon={<MdKeyboardArrowRight />}
                >
                  Submit
                </Button>
              </VStack>
            </Box>
          </Container>
        </Box>
      </>
    );
}