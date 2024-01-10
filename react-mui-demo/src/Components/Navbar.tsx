import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { CImage } from './CImage';
import { CButton } from './CButton';

interface NavItem {
    title: string
    href: string
    component: React.ComponentType;
}

interface NavbarProps {
    logo: string
    navItems: NavItem[]
}

export const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between' }} >
                <Typography variant='h6' >
                    <CImage logo={logo} alt="logo" />
                </Typography>
                <Stack spacing={2} direction='row'>
                    {navItems.map((item, index) => (
                        <CButton color='success' href={item.href} variant='contained' label={item.title} />
                        ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

