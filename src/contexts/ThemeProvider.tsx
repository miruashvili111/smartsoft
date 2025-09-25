import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { type ThemeContextType, type themeType } from '../types/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '../shared/theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider = ({ children } : { children: ReactNode }) => {

    const [theme, setTheme] = useState<themeType>('light') 

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('appTheme') as themeType
        if(savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme)
        }
    }, [])

    const toggleTheme = () => {
        setTheme((prevTheme: themeType) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            window.localStorage.setItem('appTheme', newTheme)
            return newTheme
        })
    }

    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error('useTheme used inside ThemeProvider')
    }
    return context
}

export default ThemeProvider