import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack>
                <TextField label='Name' required variant="outlined" />
                <TextField label='cvv' helperText="do not share your cvv" variant="filled" />
                <TextField label='password' type="password" InputProps={{ readOnly: true }} variant="standard" />
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }} />
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }} variant="outlined" />
                <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)} error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password'} />
            </Stack>
        </Stack>
    )
}