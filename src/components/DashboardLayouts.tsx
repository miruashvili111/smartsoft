import { Box } from '@mui/material'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const DashboardLayouts = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen((prev: boolean) => !prev)
    }
    
    return (
        <Box 
            sx={{
                display: 'flex',
                maxWidth: '1920px',
                minHeight: '100vh',
                mx: 'auto'
            }}
        >
            <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
            <Box component='main' sx={{ flexGrow: 1, p: { xs: 3, sm: 3 } }}>
                <Header open={toggleSidebar} />
                <Box sx={{ mt: { xs: 10, sm: 10 } }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default DashboardLayouts