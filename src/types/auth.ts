import type { User } from "./user"

interface  RegisterPayload {
    username: string
    password: string
    confirm_password: string
}

interface LoginPayload {
    username: string
    password: string
}

interface AuthResponse {
    _id: string
    username: string
    token: string
}

interface AuthContextType {
    token: string | null
    user: User | null
    login: (payload: LoginPayload) => void
    register: (payload: { username: string; password: string; confirmPassword: string }) => void
    logout: () => void
}

export type { RegisterPayload, LoginPayload, AuthResponse, AuthContextType }