import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#97A87A',    // --primary-color
        },
        secondary: {
            main: '#FFA239',    // --secondary-color
        },
    },
    shape: {
        borderRadius: 8,        // --radius-md
    },
});

export default customTheme;