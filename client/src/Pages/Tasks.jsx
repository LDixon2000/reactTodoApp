import React from 'react'
import Task from './Task'
import { Box } from '@chakra-ui/react'

function RenderTasks({id, task_text, dispatch}) {
    return (
        <Task id={id} text={task_text} dispatch={dispatch} />
    )
}

function Tasks(props) {
    const { dispatch, tasks } = props;
    const tasksItems = tasks && tasks.length > 0 && tasks.map((task) =>
    <RenderTasks key={task._id} dispatch={dispatch} id={task._id} task_text={task.task_text} /> );
    
    return (
        <Box w='100%'>
            {tasksItems}
        </Box>
    )}

export default Tasks;
