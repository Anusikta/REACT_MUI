import { Typography } from "@mui/material";

export const MuiTypo = () => {
    return (
        <div>
            <Typography variant="h1" >Heading1</Typography>
            <Typography variant="h3" >Heading3</Typography>
            <Typography variant="h5" >Heading5</Typography>
            <Typography variant="subtitle1" component='h1' gutterBottom>Sub title 1</Typography>
            <Typography variant="subtitle2" >Sub title 2</Typography>

            <Typography variant="body1" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, iusto quidem odit excepturi unde suscipit cum corrupti hic dolores quae.</Typography>
            <Typography variant="body2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident corrupti vel illo doloremque soluta consectetur aperiam in nulla voluptate?</Typography>
        </div>
    )
}