import React, { useState, type ReactNode } from 'react'
import type { themeType } from '../../types/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './theme'
 
const ThemeProvider = ({ children } : { children: ReactNode }) => {

    const [theme, setTheme] = useState<themeType>('light') 

    const toggleTheme = () => {
        setTheme((prevTheme: themeType) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <button onClick={toggleTheme}>
                change Theme
                {/* Test */}
            </button>
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider