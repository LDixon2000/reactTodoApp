import React from 'react'
import Task from './Task'
import { Box } from '@chakra-ui/react'

function Tasks(props) {
    const { tasks, deleteTask } = props;
    return (
        <Box w='100%'>
            {tasks && tasks.length > 0 && tasks.map((task) => <Task key={task._id} id={task._id} text={task.task_text} deleteTask={deleteTask} /> )}
        </Box>
    )}

export default Tasks
