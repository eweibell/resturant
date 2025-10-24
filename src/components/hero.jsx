import {Box, Typography} from '@mui/material';
import {fusionEatsTheme} from "../muiTheme.js";

import backgroundImg from '../assets/food-frontpage.png'

export const Hero = () => {
    return (
        <Box
            sx={{
                backgroundColor: fusionEatsTheme.palette.background.default,
                height: '80vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    paddingLeft: '0rem',
                    paddingRight: '0.5rem',
                    marginBottom: '15rem',
                }}
            >
                <Typography sx={{
                    paddingLeft: '5rem',
                    fontSize: '4.5rem',
                    fontWeight: '850',
                    textAlign: 'left',
                    color: fusionEatsTheme.palette.text.primary,
                }}>Velkommen til FusionEats</Typography>
                <Typography sx={{
                    textAlign: 'left',
                    fontSize: '2rem',
                    paddingLeft: '5rem',
                    marginTop: '0',
                    color: fusionEatsTheme.palette.text.primary,
                }}>En unik blanding av nordiske råvarer og <br/>
                    asiatiske smaker – laget fra bunnen av, med lidenskap.</Typography>
            </Box>
            <img
                src={backgroundImg}
                style={{
                    height: '70vh',
                }}
            ></img>

        </Box>
    )
}