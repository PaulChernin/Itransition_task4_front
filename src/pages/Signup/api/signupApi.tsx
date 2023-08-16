import { api } from "../../../api"
import { SignupCredentials } from "../types/SignupCredentials"

const signup = async (credentials: SignupCredentials) => {
    await api.post('/signup', credentials)
}

export default {
    signup
}