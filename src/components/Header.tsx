import React from 'react'
import { useAuth } from '../contexts/useAuth'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { DarkMode, LightMode, Menu } from '@mui/icons-material'
import { useTheme } from '../contexts/ThemeProvider'

const Header = ({ open } : { open: () => void }) => {

    const { user, logout } = useAuth()
    const { theme, toggleTheme } = useTheme()
 
    return (
        <AppBar
            position='fixed'
            sx={{
                mx: 'auto',
                top: 0
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        onClick={open}
                        color="inherit"
                        sx={{ display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ ml: 1 }}>
                        Dashboard
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}
                >   
                    <IconButton
                        onClick={toggleTheme}
                        color='inherit'
                    >
                        {theme === 'light' ? <LightMode /> : <DarkMode />}
                    </IconButton>
                    <Typography
                        variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        {user?.username}
                    </Typography>
                    <Button onClick={logout} color='inherit'>
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header