import React, { useEffect, useState, type SyntheticEvent } from 'react'
import { Box, Tabs, Tab, Card, CardContent } from '@mui/material'
import LoginForm from '../widgets/LoginForm'
import RegisterForm from '../widgets/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { routerPaths } from '../config/routerPaths'
import { AppRoutes } from '../config/AppRoutes'
import { useAuth } from '../contexts/useAuth'

const HomePage = () => {

    const navigate = useNavigate()

    const { token, user } = useAuth()
    const [tabValue, setTabValue] = useState(0)

    const handleTabChange = (_: SyntheticEvent, value: number) => {
        setTabValue(value)
    }

    useEffect(() => {
        if(token && user) {
            navigate(routerPaths[AppRoutes.CAPTIONS], { replace: true })
        }
    }, [token, user])

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                bgcolor: 'background.default',
                p: 2
            }}
        > 
            <Card 
                sx={{
                    maxWidth: 400,
                    width: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
                variant='outlined'
            >
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                >
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <CardContent sx={{ p: 3}}>
                    {tabValue === 0 ? <LoginForm /> : <RegisterForm />}
                </CardContent>
            </Card>
        </Box>
    )
}

export default HomePage