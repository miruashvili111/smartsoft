import type { AuthResponse, LoginPayload, RegisterPayload } from "../../../types/auth";
import axios from '../../../utils/axios'

const authService = {
    
    async register(payload: RegisterPayload): Promise<AuthResponse> {
        const response = await axios.post<AuthResponse>('api/client/register', payload)
        return response?.data
    },

    async login(payload: LoginPayload): Promise<AuthResponse> {
        const response = await axios.post<AuthResponse>('api/client/login', payload)
        return response?.data
    }
}

export { authService }