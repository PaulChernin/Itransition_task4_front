import { Form, Table } from 'react-bootstrap'
import { User } from '../types/user'
import { toggleItem } from '../../../utils/toggleItem'

type UsersTableProps = {
    users: User[],
    selected: number[],
    setSelected: (selected: number[]) => void
}

const UsersTable = ({ users, selected, setSelected }: UsersTableProps) => {
    const getStatus = (user: User): string => {
        return user.isBlocked ? 'blocked' : 'active'
    }

    const toggleSelected = (id: number): void => {
        setSelected(toggleItem(selected, id))
    }

    const allCheked = selected.length === users.length

    const toggleAllChecked = () => {
        if (!allCheked) {
            setSelected(users.map(user => user.id))
        } else {
            setSelected([])
        }
    }

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>
                        <Form.Check
                            checked={allCheked}
                            onChange={toggleAllChecked}
                        />
                    </th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Signup Date</th>
                    <th>Last Login Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                    <tr key={user.id}>
                        <th>
                            <Form.Check
                                checked={selected.includes(user.id)}
                                onChange={() => toggleSelected(user.id)}
                            />
                        </th>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>{user.mail}</th>
                        <th>{user.signupDate}</th>
                        <th>{user.lastLoginDate}</th>
                        <th>{getStatus(user)}</th>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default UsersTable