import { useEffect, useState } from "react"
import UsersTable from "./components/UsersTable"
import UsersControls from "./components/UsersControls"
import userApi from "./api/userApi"
import { User } from "./types/user"
import { Stack } from "react-bootstrap"
import HomeButton from "../../ui/HomeButton"

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([])
    const [selected, setSelected] = useState<number[]>([])

    const getUsers = async () => {
        setUsers(await userApi.getAll())
    }

    useEffect(() => {
        getUsers()
    }, [])

    const setBlocked = async (value: boolean) => {
        await userApi.setStatus(selected, value)
        getUsers()
    }
    
    const remove = async () => {
        await userApi.remove(selected)
        getUsers()
    }
    
    return <Stack gap={4}>
        <HomeButton label='Log out' />
        <UsersControls
            block={() => setBlocked(true)}
            unblock={() => setBlocked(false)}
            remove={remove}
            disabled={!selected.length}
        />
        <UsersTable
            users={users}
            selected={selected}
            setSelected={setSelected}
        />
    </Stack>
}

export default UsersPage