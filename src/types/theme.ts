type themeType = 'light' | 'dark'

interface ThemeContextType {
    theme: themeType
    toggleTheme: () => void
}

export type { themeType, ThemeContextType }