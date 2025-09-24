import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/context/useAuth'
import { routerPaths } from '../config/routerPaths'
import { AppRoutes } from '../config/AppRoutes'
import Loading from './Loading'
import DashboardLayouts from '../components/DashboardLayouts'

const AuthGuard = () => {

    const navigation = useNavigate()
    const { token, user } = useAuth()
    const [isUserCheck, setIsUserCheck] = useState(true)

    useEffect(() => {
        if(!token || !user) {
            navigation(routerPaths[AppRoutes.HOME], { replace: true })
        } else {
            setIsUserCheck(false)
        }
    }, [token, user])

    if(isUserCheck) {
        return <Loading />
    }

    return (
        <DashboardLayouts />
    )
}

export default AuthGuard