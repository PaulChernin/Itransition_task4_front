import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
})

api.interceptors.response.use(response => response, (error) => {
    const message = error.response?.data || 'Something went wrong'
    alert(message)
    return Promise.reject(error)
})

export { api }