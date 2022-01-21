import React, { useState } from "react";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Task(props) {
  const { deleteTask, id, text } = props;
  const [isCompleted, toggleCompletion] = useState(false);
  
  return (
    <Flex alignItems='center' py='2'>
      <Box cursor='pointer' className="" onClick={() => toggleCompletion(!isCompleted)} flex='1 0 0'>
        <Text textDecorationLine={isCompleted ? 'line-through' : ''} fontSize='xl' whiteSpace='initial'>{text}</Text>
        {id}
      </Box>
      <Box>
        <Button onClick={deleteTask(id)} colorScheme="red">
          <DeleteIcon />
        </Button>
      </Box>
    </ Flex>
  );
}

export default Task;
