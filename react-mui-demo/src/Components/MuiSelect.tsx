import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        <Box width='200px'>
            <TextField label='Select country' select
                value={countries} onChange={handleChange} fullWidth
                SelectProps={{
                    multiple: true
                }}>
                <MenuItem value='IND'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AUS'>Australia</MenuItem>
            </TextField>
        </Box>
    );

}