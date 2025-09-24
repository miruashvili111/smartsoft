import { BrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "./contexts/useSnackbar"
import AppRouter from "./router/AppRouter"
import ThemeProvider from "./shared/theme/ThemeProvider"
import AuthProvider from "./features/auth/context/useAuth"

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <SnackbarProvider>
                    <AuthProvider>
                        <AppRouter />
                    </AuthProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App