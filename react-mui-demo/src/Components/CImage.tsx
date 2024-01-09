import { Avatar } from "@mui/material";

interface ImageProps {
    logo: string
    alt: string
}

export const CImage: React.FC<ImageProps> = ({logo, alt }) => {
    return (
        <Avatar src={logo} alt={alt} />
    )
}