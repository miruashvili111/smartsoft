import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import type { AuthContextType, AuthResponse, LoginPayload } from "../../../types/auth"
import type { User, RegistrationValues } from "../../../types/user"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "../../../contexts/useSnackbar"
import { routerPaths } from "../../../config/routerPaths"
import { AppRoutes } from "../../../config/AppRoutes"
import { authService } from "../services/auth.service"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children } : { children: ReactNode }) => {

    const navigate = useNavigate()
    const { showSnackbar } = useSnackbar()

    const [token, setToken] = useState<string | null>(window.localStorage.getItem('accessToken'))
    const [user, setUser] = useState<User | null>(() => {
        const sorted = window.localStorage.getItem('user')
        return sorted ? JSON.parse(sorted) : null
    })
    
    const authInit = useCallback((data: AuthResponse) => {
        setToken(data.token)
        setUser({ id: data._id, username: data.username })

        window.localStorage.setItem('accessToken', data.token)
        window.localStorage.setItem('user', JSON.stringify({
            id: data._id,
            username: data.username
        }))
        navigate(routerPaths[AppRoutes.CAPTIONS])

    }, [navigate, showSnackbar])

    const login = useCallback(async (loginData: LoginPayload) => {
        try {
            const data = await authService.login(loginData)
            authInit(data)
            showSnackbar('Login successful', 'success')
        } catch (error: any) {
            const msg = error?.response?.data?.error || 'Login failed!'
            showSnackbar(msg, 'error')
        }
    }, [authInit])

    const register = useCallback(async ({ username, password, confirmPassword }: RegistrationValues) => {
        try {
            const payload = {
                username,
                password,
                confirm_password: confirmPassword
            }
    
            const data = await authService.register(payload)
            authInit(data)
            showSnackbar('Registration successful', 'success')
        } catch (error: any) {
            const msg = error?.response?.data?.error || 'Register failed!'
            showSnackbar(msg, 'error')
        }
    }, [authInit])

    const logout = useCallback(() => {
        setToken(null)
        setUser(null)
        window.localStorage.removeItem('accessToken')
        window.localStorage.removeItem('user')
        showSnackbar('Logout successful', 'success')
    }, [navigate, showSnackbar])

    return (
        <AuthContext.Provider value={{ token, user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth used inside AuthProvider')
    }
    return context
}

export default AuthProvider