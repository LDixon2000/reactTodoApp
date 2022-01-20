import React from 'react'
import InputField from './InputField'
import { Box } from '@chakra-ui/react';

function AddTask(props) {
    const {addTask} = props;
    return (
        <Box w='100%'>
            <InputField inputType='text' addTask={addTask}/>
        </Box>
    )
}

export default AddTask
