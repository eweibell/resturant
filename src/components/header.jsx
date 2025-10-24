import {Box, Button} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/pictogram-logo-transparent.png';
import {fusionEatsTheme} from "../muiTheme";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '10vh',
                backgroundColor: 'primary.dark',
            }}
        >
            <img
                src={logo}
                onClick={() => navigate('/')}
                style={{
                    height: '8vh',
                }}
            ></img>
            <Box>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/')}
                    sx={{
                        margin: '1rem',
                        color: location.pathname === '/'
                            ? fusionEatsTheme.palette.secondary.main
                            : fusionEatsTheme.palette.text.primary,
                    }}
                >Hjem</Button>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/menu')}
                    sx={{
                        margin: '1rem',
                        color: location.pathname === '/menu'
                            ? fusionEatsTheme.palette.secondary.main
                            : fusionEatsTheme.palette.text.primary,
                    }}
                >Meny</Button>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/book')}
                    sx={{
                        margin: '1rem',
                        color: location.pathname === '/book'
                            ? fusionEatsTheme.palette.secondary.main
                            : fusionEatsTheme.palette.text.primary,
                    }}
                >Bestill bord</Button>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/about')}
                    sx={{
                        margin: '1rem',
                        color: location.pathname === '/about'
                            ? fusionEatsTheme.palette.secondary.main
                            : fusionEatsTheme.palette.text.primary,
                    }}
                >Om oss</Button>
            </Box>
        </Box>
    )
}