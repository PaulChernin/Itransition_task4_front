import { User } from "../types/user"
import { api } from "../../../api"

const getAll = async (): Promise<User[]> => {
    const response = await api.get('/protected/users')
    return response.data
}

const setStatus = async (userIds: number[], isBlocked: boolean): Promise<void> => {
    await api.post('/protected/users-status', {
        userIds: userIds,
        isBlocked: isBlocked
    })
}

const remove = async (userIds: number[]): Promise<void> => {
    await api.post('/protected/users-delete', userIds)
}

export default {
    getAll,
    setStatus,
    remove
}