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
    Stack
} from '@chakra-ui/react';

import {
  MdKeyboardArrowRight
} from 'react-icons/md'

import React, {useState} from 'react';


export default function NotesForm(){
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [notesError, setNotesError] = useState(false)

  const submitHandler = (event: any) => {
    event.preventDefault()
    setTitleError(false)
    setNotesError(false)

    if(title == ''){
      setTitleError(true)
    }
    if(notes == ''){
      setNotesError(true)
    }

  }

  return(
      <>
        <Box>
          <Container 
            maxW='container.sm' 
            my={'15%'}
            >
              <Text
                fontSize={'3xl'}
                align={'center'}
                >CREATE A NEW NOTES
              </Text>
              <form onSubmit={submitHandler}>
                  <FormControl my={8} id='title' isRequired>
                      <FormLabel>Title</FormLabel>
                      <Input 
                        onChange={(e) => setTitle(e.target.value)} 
                        variant='outline' 
                        id='title'
                        type="text" 
                        placeholder='Title'
                        error={titleError}
                      />
                      <FormHelperText>Title for notes here</FormHelperText>
                  </FormControl>

                  <FormControl my={8} id='notes' isRequired>
                      <FormLabel>Notes</FormLabel>
                      <Textarea 
                        onChange={(e) => setNotes(e.target.value)}  
                        variant={'outline'} 
                        id='notes'
                        type="text" 
                        placeholder='Notes here'
                        error={notesError}
                        />
                      <FormHelperText>Take notes here</FormHelperText>
                  </FormControl>
                  <Button
                    my={10}
                    colorScheme={'blue'}
                    size={'md'}
                    variant={'solid'}
                    type='submit'
                    rightIcon={<MdKeyboardArrowRight/>}
                  >
                    Submit
                  </Button>
              </form>
              
          </Container>
        </Box>
      </>
      
      
  );
}