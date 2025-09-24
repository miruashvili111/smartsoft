import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
}, (error) => Promise.reject(error))

api.interceptors.response.use((response) => response,
    (error) => {
        if(error.response?.status === 401) {
            localStorage.removeItem('accessToken')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

