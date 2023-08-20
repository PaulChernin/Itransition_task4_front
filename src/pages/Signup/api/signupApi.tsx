import { api } from "../../../api"
import { SignupCredentials } from "../types/SignupCredentials"

const signup = async (credentials: SignupCredentials) => {
    const response = await api.post('/signup', credentials)
    sessionStorage.setItem('token', response.data.token)
}

export default {
    signup
}