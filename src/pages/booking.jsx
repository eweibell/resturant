import React, {useState} from 'react'
import {Typography, Box, Button, DialogActions, DialogContent, IconButton, DialogTitle, Dialog} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {styled} from '@mui/material/styles';

import {Header} from "../components/header";
import {fusionEatsTheme} from "../muiTheme";
import {Footer} from "../components/footer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function TableBooking() {
    const [open, setOpen] = React.useState(false);
    const baseUrl = window.location.origin;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        margin: '2rem',
                    }}
                >
                    Book et bord</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '3rem',
                        backgroundColor: fusionEatsTheme.palette.background.elevation2,
                        width: '35rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleClickOpen();
                        }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: fusionEatsTheme.palette.background.paper,
                            padding: "2.5rem",
                            borderRadius: "0.5rem",
                            width: "30rem",
                        }}>
                        <input
                            type="text"
                            placeholder="Fullt navn"
                            required
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                borderRadius: "5%",
                                border: '1px solid grey',
                                backgroundColor: fusionEatsTheme.palette.background.elevation2,
                                color: fusionEatsTheme.palette.text.primary,
                                fontSize: "1rem",
                                width: "20rem",
                        }}/>
                        <input
                            type="tel"
                            placeholder="Telefonnummer"
                            required
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                borderRadius: "5%",
                                border: '1px solid grey',
                                backgroundColor: fusionEatsTheme.palette.background.elevation2,
                                color: fusionEatsTheme.palette.text.primary,
                                fontSize: "1rem",
                                width: "20rem",
                            }}/>
                        <input
                            type="number"
                            placeholder="Antall personer"
                            min="1"
                            required
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                borderRadius: "5%",
                                border: '1px solid grey',
                                backgroundColor: fusionEatsTheme.palette.background.elevation2,
                                color: fusionEatsTheme.palette.text.primary,
                                fontSize: "1rem",
                                width: "20rem",
                            }}/>
                        <input
                            type="date"
                            required
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                borderRadius: "5%",
                                border: '1px solid grey',
                                backgroundColor: fusionEatsTheme.palette.background.elevation2,
                                color: fusionEatsTheme.palette.text.primary,
                                fontSize: "1rem",
                                width: "20rem",
                            }}/>
                        <input
                            type="time"
                            required
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                borderRadius: "5%",
                                border: '1px solid grey',
                                backgroundColor: fusionEatsTheme.palette.background.elevation2,
                                color: fusionEatsTheme.palette.text.primary,
                                fontSize: "1rem",
                                width: "20rem",
                            }}/>
                        <textarea
                            placeholder="Eventuelle ønsker (allergier, vindusbord, bursdag osv.)"
                            rows="3"
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                borderRadius: "5%",
                                border: '1px solid grey',
                                backgroundColor: fusionEatsTheme.palette.background.elevation2,
                                color: fusionEatsTheme.palette.text.primary,
                                fontSize: "1rem",
                                width: "20rem",
                            }}
                        ></textarea>

                        <Button
                            variant={"contained"}
                            type="submit"
                            style={{
                                width: '15rem',
                                marginTop: '1.5rem',
                            }}
                        >
                            Send inn reservasjon
                        </Button>
                    </form>
                </Box>
            </Box>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Bordbestilling
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Vi har mottatt forespørselen din og kontakter deg snart for å bekrefte bordet ditt hos{' '}
                        <strong>Fusion Eats</strong>.
                    </Typography>
                    <Typography gutterBottom>
                        Vi ser frem til å ønske deg velkommen til en kveld fylt med smaker fra hele verden.
                        Kombinasjonen av nordisk kvalitet og internasjonale krydder gir deg en opplevelse utenom det vanlige.
                    </Typography>
                    <Typography gutterBottom>
                        I mellomtiden kan du ta en titt på menyen vår her:{' '}
                        <a href={`${baseUrl}/menu`} target="_blank">
                            {`${baseUrl}/menu`}
                        </a>
                    </Typography>
                    <Typography gutterBottom>
                        Hvis du ønsker å endre eller avbestille reservasjonen, ta kontakt på{' '}
                        <strong>booking@fusioneats.no</strong> eller ring oss på <strong>+47 51 22 33 44</strong>.
                    </Typography>
                </DialogContent><DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        OK
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </section>
    );
}
