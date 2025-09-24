interface RegistrationValues {
    username: string
    password: string
    confirmPassword: string
} 

interface User {
    id: string
    username: string
}

export type { RegistrationValues, User }