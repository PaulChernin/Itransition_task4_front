import { User } from "../types/user"
import { api } from "../../../api"

const getAll = async (): Promise<User[]> => {
    const response = await api.get('/users')
    return response.data
}

const block = async (userIds: number[]): Promise<void> => {
    await api.post('/users-block', userIds)
}

const unblock = async (userIds: number[]): Promise<void> => {
    await api.post('/users-unblock', userIds)
}

const remove = async (userIds: number[]): Promise<void> => {
    await api.post('/users-delete', userIds)
}

export default {
    getAll,
    block,
    unblock,
    remove
}