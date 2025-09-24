import React, { useEffect, useState, type ReactNode } from 'react'
import type { themeType } from '../../types/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './theme'
import CssBaseline from '@mui/material/CssBaseline'
 
const ThemeProvider = ({ children } : { children: ReactNode }) => {

    const [theme, setTheme] = useState<themeType>('light') 

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('appTheme') as themeType
        if(savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme)
        }
    })

    const toggleTheme = () => {
        setTheme((prevTheme: themeType) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            window.localStorage.setItem('appTheme', newTheme)
            return newTheme
        })
    }

    
    return (
        <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <button onClick={toggleTheme}>
                change Theme
                {/* Test */}
            </button>
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider