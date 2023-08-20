import axios from "axios"
import router from "./router/router"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
})

api.interceptors.request.use((request) => {
    if (request.url?.startsWith('/protected')) {
        request.headers.Authorization = sessionStorage.getItem('token')
    }
    return request
})

api.interceptors.response.use(response => response, (error) => {
    if (error?.response?.status === 403) {
        router.navigate('/')
    }
    const message = error.response?.data || 'Something went wrong'
    alert(message)
    return Promise.reject(error)
})

export { api }