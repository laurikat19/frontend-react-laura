import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#328734',
        },
        secondary: {
            main: '#D9B101',
        },
        dark: {
            main: '#1F1A1B',
            light: '#4b4748',
        },
        light: {
            main: '#FFFFFF',
        }
    },
});