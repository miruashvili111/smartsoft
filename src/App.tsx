import { SnackbarProvider } from "./contexts/useSnackbar"
import ThemeProvider from "./shared/theme/ThemeProvider"

const App = () => {

    return (
        <ThemeProvider>
            <SnackbarProvider>
                <div>App</div>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App