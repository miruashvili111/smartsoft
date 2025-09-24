import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { routerPaths } from '../config/routerPaths'
import AuthGuard from '../widgets/AuthGuard'

const HomePage = lazy(() => import('../pages/HomePage'))
const CaptionsPage = lazy(() => import('../pages/CaptionsPage'))
const CountriesPage = lazy(() => import('../pages/CountriesPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

export const routerConfig: RouteObject[] = [
    {
        path: routerPaths['home'],
        element: <HomePage />
    },
    {
        path: routerPaths['error'],
        element: <ErrorPage />
    },
    {
        element: <AuthGuard />,
        children: [
            {
                path: routerPaths['captions'],
                element: <CaptionsPage />
            },
            {
                path: routerPaths['countries'],
                element: <CountriesPage />
            }
        ]
    },
    {
        path: routerPaths['notFound'],
        element: <NotFoundPage />
    },
]