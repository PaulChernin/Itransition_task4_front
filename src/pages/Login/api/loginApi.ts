import { api } from "../../../api"
import { LoginCredentials } from "../types/LoginCredentials"

const login = async (credentials: LoginCredentials): Promise<void> => {
    const response = await api.post('/login', credentials)
    sessionStorage.setItem('token', response.data.token)
}

export default {
    login
}