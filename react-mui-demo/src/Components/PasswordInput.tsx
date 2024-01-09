import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    FormControl,
    Input,
    Checkbox,
    FormGroup,
    FormLabel,
    FormControlLabel,
} from '@mui/material';

//For typescript
interface PasswordInputProps {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    validate: RegExp;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    type,
    value,
    placeholder,
    onChange,
    validate,
}) => {
    const [isValid, setIsValid] = useState(false);
    const [isLcValid, setIsLcValid] = useState(false);
    const [isUcValid, setIsUcValid] = useState(false);
    const [isSpValid, setIsSpValid] = useState(false);
    const [isNumValid, setIsNumValid] = useState(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pass = event.target.value;
        onChange(pass);
        const valPass = validate.test(pass);
        setIsValid(valPass);

        let valLc = /(?=.*[a-z])/;
        const valLcPass = valLc.test(pass);
        setIsLcValid(valLcPass);

        let valUc = /(?=.*[A-Z])/;
        const valUcPass = valUc.test(pass);
        setIsUcValid(valUcPass);

        let valSp = /(?=.*[!@#$%^&*])/;
        const valSpPass = valSp.test(pass);
        setIsSpValid(valSpPass);

        let valNum = /(?=.*[0-9])/;
        const valNumPass = valNum.test(pass);
        setIsNumValid(valNumPass);
    };

    return (
        <Box>
            <FormControl variant="outlined" >
                <FormLabel>{label}</FormLabel>
                <Input
                    type={type}
                    value={value}
                    onChange={handlePasswordChange}
                    placeholder={placeholder}
                />
            </FormControl>
            <FormGroup >
                <FormControlLabel
                    control={<Checkbox checked={isValid} readOnly color='primary' />} 
                    label="Password must contain 8-16 characters"
                /> 
                <FormControlLabel
                    control={<Checkbox checked={isLcValid} readOnly color="primary" />}
                    label="Must contain a lowercase letter"
                />
                <FormControlLabel
                    control={<Checkbox checked={isUcValid} readOnly color="primary" />}
                    label="Must contain an uppercase letter"
                />
                <FormControlLabel
                    control={<Checkbox checked={isSpValid} readOnly color="primary" />}
                    label="Must contain a Special character"
                />
                <FormControlLabel
                    control={<Checkbox checked={isNumValid} readOnly color="primary" />}
                    label="Must contain a Numeric character"
                />
            </FormGroup>
        </Box>
    );
};

PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    validate: PropTypes.instanceOf(RegExp).isRequired,
};
