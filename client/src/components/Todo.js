import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { Box, Heading, VStack } from "@chakra-ui/react";

function Todo() {
  const [tasks, editTasks] = useState([]);

  useEffect(() => {
      async function getTasks() {
        const response = await fetch('http://localhost:5001/task/');

        if (!response.ok){
            const message = `An error occured: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const tasks = await response.json();
        editTasks(tasks); 
      }

      getTasks();
      return;
  }, [tasks.length]);

  async function deleteTask(id) {
      console.log('test')
    await fetch(`http://localhost:5001/${id}`, {
        method: 'DELETE'
    })
  }

  async function addTask(text) {
    const newTask = { task_author: 'leon', task_text: text };
    editTasks([...tasks, newTask]);
    await fetch("http://localhost:5001/task/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    }).catch((error) => {
      window.alert(error);
      return;
    });
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
      <AddTask addTask={addTask} />
      {tasks && tasks.length > 0 && <Tasks tasks={tasks} deleteTask={deleteTask} />}
    </VStack>
  );
}

export default Todo;
