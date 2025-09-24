import { BrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "./contexts/useSnackbar"
import AppRouter from "./router/AppRouter"
import ThemeProvider from "./shared/theme/ThemeProvider"

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <SnackbarProvider>
                    <AppRouter />
                </SnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App