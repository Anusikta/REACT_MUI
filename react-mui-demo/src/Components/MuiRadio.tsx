import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material';
import { useState } from 'react';

export const MuiRadio = () => {
    const [value, setValue] = useState('')

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-grp'>Years of experience</FormLabel>
                <RadioGroup
                    name='job-exp'
                    aria-labelledby='job-experience-grp'
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5'/>
                    <FormControlLabel control={<Radio />} label='6-10' value='6-10'/>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}