import { BrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "./contexts/useSnackbar"
import AppRouter from "./router/AppRouter"
import ThemeProvider from "./contexts/ThemeProvider"
import AuthProvider from "./contexts/useAuth"
import { Analytics } from "@vercel/analytics/react"

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <SnackbarProvider>
                    <AuthProvider>
                        <AppRouter />
                        <Analytics />
                    </AuthProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App