import React from 'react'
import Task from './Task'
import { Box } from '@chakra-ui/react'

function RenderTasks({id, task_text, deleteTask}) {
    console.log('test')
    return (
        <Task id={id} text={task_text} deleteTask={deleteTask} />
    )
}

function Tasks(props) {
    const { tasks, deleteTask } = props;
    const tasksItems = tasks && tasks.length > 0 && tasks.map((task) =>
    <RenderTasks key={task._id} id={task._id} task_text={task.task_text} deleteTask={deleteTask} /> );

    return (
        <Box w='100%'>
            {tasksItems}
        </Box>
    )}

export default Tasks;
