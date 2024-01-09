import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material';
import { useState } from 'react';

export const MuiCheck = () => {
    const [acceptInc, setAcceptTnc] = useState(false);
    const [skills, setSkills] = useState<string[]>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked);
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel label='I accept all the tnc'
                    control={<Checkbox checked={acceptInc} onChange={handleChange} />} />
            </Box>
            <Box>
                <FormControl >
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label='HTML'
                            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />} />
                        <FormControlLabel label='CSS'
                            control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />} />
                        <FormControlLabel label='JS'
                            control={<Checkbox value='js' checked={skills.includes('js')} onChange={handleSkillChange} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}