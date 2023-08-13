import { api } from "../../../api"
import { LoginCredentials } from "../types/LoginCredentials"

const login = async (credentials: LoginCredentials): Promise<void> => {
    await api.post('/login', credentials)
}

export default {
    login
}