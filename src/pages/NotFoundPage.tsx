import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {

    const navigate = useNavigate()

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
                404 - Page Not Found
            </Typography>
            <Typography variant="h6" color="textSecondary">
                Sorry, the page you requested does not exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
                sx={{ mt: 5 }}
            >
                Back to Home
            </Button>
        </Box>
    )
}

export default NotFoundPage