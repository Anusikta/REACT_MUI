import { Button } from "@mui/material";

interface ButtonProps {
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant: 'text' | 'outlined' | 'contained';
    href: string
    label: string
}

export const CButton: React.FC<ButtonProps> = ({color, variant, href, label }) => {
    return (
        <Button variant={variant} size="medium" color={color} href={href} >{label}</Button>
    )
}