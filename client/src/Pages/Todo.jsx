import React, { useReducer, useEffect } from "react";
import retrieveTasks from "../Helpers/retrieveTasks";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { Box, Heading, VStack } from "@chakra-ui/react";
import deleteTask from "../Helpers/deleteTask";
import addtask from "../Helpers/addTask";
import retrieveTask from "../Helpers/retrieveTask";

const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case 'DELETE_TASK':
      return state.filter(el => el._id !== action.payload);
    case 'INSERT_TASK':
      return [action.payload ,...state]
    case 'RETRIEVE_TASKS':
      return (action.payload);
    default:
      return state;
  }
}

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    asyncDispatch('RETRIEVE_TASKS');
  }, []);

  const asyncDispatch = async(type, data) =>{
    let payload;
    switch (type) {
      case 'RETRIEVE_TASKS':
        payload = await retrieveTasks();
        dispatch({ type: type, payload: payload});
        break;
      case 'INSERT_TASK':
        const id = await addtask(data.text)
        payload = await retrieveTask(id);
        dispatch({ type: type, payload: payload});
        break;
      case 'DELETE_TASK':
        await deleteTask(data).then(dispatch({ type: type, payload: data}))
        break;
      default:
        break;
    }
  }
  
  return (
    <VStack
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      p="5"
      my={["150"]}
      w={["100%", "300px", "600px"]}
    >
      <Box w="100%">
        <Heading textAlign="center" pb="3">
          Todo
        </Heading>
      </Box>
      <AddTask dispatch={asyncDispatch} />
      {state && state.length > 0 && <Tasks tasks={state} dispatch={asyncDispatch} />}
    </VStack>
  );
}

export default Todo;
