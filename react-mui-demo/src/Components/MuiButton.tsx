import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react';

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null >(null);

    const handleFormatChange = (_event : React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats);
        console.log(setFormats);
        
    }
    return (
        <Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="text" size="small" color="info" href='https://google.com'>Text</Button>
                <Button variant="contained" size="medium" color="primary" >Contained</Button>
                <Button variant="outlined" size="large" color="warning">Outlined</Button>
            </Stack>
            
            <Stack spacing={2} direction='row' >
                <Button variant="contained" endIcon={<SendIcon />} disableElevation onClick={() => alert('send')}>Send</Button>
            </Stack>

            <IconButton color="success" size="small"><SendIcon /></IconButton>

            <Stack direction='row' >
                <ButtonGroup variant="text" orientation="vertical" size="small" color="error" 
                    aria-label="alignment button group" >
                    <Button onClick={() => alert('left clicked')}>Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup exclusive aria-label='text formatting' value={formats} onChange={handleFormatChange} >
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic' ><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined' ><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}