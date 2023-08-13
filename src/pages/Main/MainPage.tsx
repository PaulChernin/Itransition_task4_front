import { Button, Stack } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()

    return <Stack gap={4} style={{maxWidth: 300}}>
        <Button onClick={() => navigate('/login')}>Log in</Button>
        <Button onClick={() => navigate('/signup')}>Sign up</Button>
    </Stack>
}

export default MainPage