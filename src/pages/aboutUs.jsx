import {Box, Grid, Paper, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';

import {fusionEatsTheme} from "../muiTheme.js";
import {Header} from "../components/header.jsx";
import {Footer} from "../components/footer";

export const AboutUs = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: fusionEatsTheme.palette.background.elevation1,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.primary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <>
            <section
                style={{
                    height: '95vh',
                    width: '100vw',
                    backgroundColor: fusionEatsTheme.palette.background.default,
                }}
            >
                <Header />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
color 'white',                          
backgroundColor: fusionEatsTheme.palette.background.elevation2,
                            width: '35vw',
                            borderRadius: '1rem',
                            marginTop: '2rem',
                            padding: '1rem',
                        }}
                    >
                        <h3 style={{fontWeight: '700', color: fusionEatsTheme.palette.secondary.main}}>FusionEats</h3>
                        <p style={{color:'white'}}>
                            <strong style={{ color: fusionEatsTheme.palette.secondary.main }}>FusionEats</strong> er en moderne restaurant som
                            kombinerer det beste fra asiatisk og europeisk matkunst. Vi ønsker å gi gjestene våre en
                            unik matopplevelse i en varm og lun atmosfære – perfekt for både familier, venner og
                            kollegaer. Hos oss står ferske råvarer, gode smaker og hyggelig service i sentrum.
                        </p>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: fusionEatsTheme.palette.background.elevation2,
                            width: '35vw',
                            borderRadius: '1rem',
                            marginTop: '2rem',
                            padding: '1rem',
                        }}
                    >
                        <h3 style={{fontWeight: '700', color: fusionEatsTheme.palette.secondary.main}}>Kontaktinformasjon:</h3>
                        <p>
                            Adresse: Kongsgata 14, 4005 Stavanger<br/>
                            Telefon: 51 22 33 44<br/>
                            E-post: kontakt@fusioneats.no<br/>
                            <br/>
                            Du finner oss midt i sentrum, bare et par minutter unna torget. Det er både parkering og bussholdeplass rett i nærheten.<br/>
                            Vi svarer vanligvis på e-post innen 24 timer.
                        </p>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: fusionEatsTheme.palette.background.elevation2,
                            width: '35vw',
                            borderRadius: '1rem',
                            marginTop: '2rem',
                            padding: '1rem',
                        }}>
                        <h3 style={{fontWeight: '700', marginBottom: '1rem',color: fusionEatsTheme.palette.secondary.main}}>Åpningstider</h3>

                        <Grid container spacing={2}>
                            <Grid size={6}>
                                <Item>Mandag — Torsdag</Item>
                            </Grid>
                            <Grid size={6}>
                                <Item>13:00 — 21:00</Item>
                            </Grid>
                            <Grid size={6}>
                                <Item>Fredag — Lørdag</Item>
                            </Grid>
                            <Grid size={6}>
                                <Item>13:00 — 23:30</Item>
                            </Grid>
                            <Grid size={6}>
                                <Item>Søndag</Item>
                            </Grid>
                            <Grid size={6}>
                                <Item>14:00 — 21.00</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </section>
        </>
    )
}