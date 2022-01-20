import React, { useState } from 'react'
import { Input } from '@chakra-ui/react';

function InputField(props) {
    const {inputType, addTask} = props;
    const [inputValue, setInputValue] = useState('')

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    async function handleKeyPress(event) {
        if (event.key === 'Enter'){
            await addTask(inputValue);
            setInputValue('');
        }
    }

    return (
        <>
            <Input
            type={inputType}
            value={inputValue}
            placeholder='Task to add'
            name=''
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            />
        </>
    )
}

export default InputField
