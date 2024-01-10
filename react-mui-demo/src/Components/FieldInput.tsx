import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    FormControl,
    Input,
    FormLabel,
    Typography
} from '@mui/material';

//For typescript
interface FieldInputProps {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    validate: RegExp;
}

export const FieldInput: React.FC<FieldInputProps> = ({
    label,
    type,
    value,
    placeholder,
    onChange,
    validate,
}) => {
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        onChange(event.target.value);
        const inp = event.target.value;
        const valInp = validate.test(inp);
        console.log(valInp);
        setIsValid(valInp);
    }

    return (
        <Box>
            <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input type={type} value={value} placeholder={placeholder}
                onChange={handleInputChange}/>
            <Typography variant="body1" >{isValid ? '' : 'Enter a valid Input'}</Typography>

            </FormControl>

        </Box>
    )
}

FieldInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    validate: PropTypes.instanceOf(RegExp).isRequired,
};