import { createTheme } from '@mui/material'

export const fusionEatsTheme = createTheme({
    palette: {
        primary: {
            main: '#4A5A3D',
            light: '#6B7A5D',
            dark: '#2E3328',
            contrastText: '#F5F4EF'
        },
        secondary: {
            main: '#E4B97A',
            dark: '#C89E63',
            light: '#F1C88A',
            contrastText: '#2E3328'
        },
        accent: {
            main: '#C1493D',
        },
        background: {
            default: '#383F33',
            paper: '#383E33',
            elevation1: '#3E4538',
            elevation2: '#4A5143',
            elevation3: '#5B6252',
            elevation4: '#707764',
        },
        text: {
            primary: '#F5F4EF',
            secondary: '#E4B97A',
            disabled: '#9CA292',
        },
        status: {
            success: '#80B65A',
            warning: '#E4B97A',
            error: '#C1493D',
            info: '#89A7B5'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    minWidth: '0',
                    color: '#F5F4EF',
                    '&.Mui-disabled': {
                        color: 'grey'
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: '#E4B97A',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#E4B97A',
                        },
                        '&:hover fieldset': {
                            borderColor: '#E4B97A',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#E4B97A',
                        },
                    },
                },
            },
        },
    }
})