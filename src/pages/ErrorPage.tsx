import { Box, Button, Typography } from "@mui/material"

const ErrorPage = () => {
    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 60px)',
                maxWidth: 1920,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <Typography variant="h2" color="textPrimary" gutterBottom>
                Something Went Wrong
            </Typography>
            <Typography variant="h6" color="textSecondary">
                An unexpected error occurred. Please try going back to the home page or reload the page
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.reload()}
                sx={{ mt: 5 }}
            >
                Reload Page
            </Button>
        </Box>
    )
}

export default ErrorPage