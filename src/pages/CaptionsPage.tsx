import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../features/auth/context/useAuth'

const CaptionsPage = () => {

    const { logout } = useAuth()

    return (
        <div>
            <Button
                variant='outlined'
                color='primary'
                size='medium'
                onClick={logout}
            >
                LogOut
            </Button>
            <h1>
                CaptionsPage
            </h1>
        </div>
    )
}

export default CaptionsPage