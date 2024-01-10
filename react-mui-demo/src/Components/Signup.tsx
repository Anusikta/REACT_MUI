import { useState } from 'react';
import { PasswordInput } from './PasswordInput';
import { FieldInput } from './FieldInput';
import { Box } from '@mui/material';

export const Signup = () => {

    const [fieldInput, setFieldInput] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Box>
            <FieldInput
                type="text"
                label="Input field"
                value={fieldInput}
                placeholder="Enter the input"
                onChange={setFieldInput}
                validate={/^[\w\.]{4,}@[a-zA-Z\.]{5,}\.[a-zA-Z]{2,}/}
            />

            <PasswordInput 
                type="password" 
                label="Enter Password" 
                value={password}
                placeholder="Enter a strong password" 
                onChange={setPassword}
                validate={/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/}
            />
        </Box>
    )
}