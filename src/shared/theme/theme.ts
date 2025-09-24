import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1E3A8A',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#F06292',
            contrastText: '#FFFFFF'
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF'
        },
        text: {
            primary: '#1F2937',
            secondary: '#4B5563'
        },
        error: {
            main: '#EF4444'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 600 },
        h2: { fontSize: '2rem', fontWeight: 500 },
        h3: { fontSize: '1.75rem', fontWeight: 400 },
        h4: { fontSize: '1.5rem', fontWeight: 400 },
        h5: { fontSize: '1.25rem', fontWeight: 300 },
        h6: { fontSize: '1rem', fontWeight: 200 },
        body1: { fontSize: '1rem' },
        body2: { fontSize: '0.875rem' }
    }
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#60A5FA',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#F472B6',
            contrastText: '#FFFFFF'
        },
        background: {
            default: '#111827',
            paper: '#1F2937'
        },
        text: {
            primary: '#D1D5DB',
            secondary: '#9CA3AF'
        },
        error: {
            main: '#F87171'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 600 },
        h2: { fontSize: '2rem', fontWeight: 500 },
        h3: { fontSize: '1.75rem', fontWeight: 400 },
        h4: { fontSize: '1.5rem', fontWeight: 400 },
        h5: { fontSize: '1.25rem', fontWeight: 300 },
        h6: { fontSize: '1rem', fontWeight: 200 },
        body1: { fontSize: '1rem' },
        body2: { fontSize: '0.875rem' }
    }
})

export { lightTheme, darkTheme }