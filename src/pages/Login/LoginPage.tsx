import { useState } from "react"
import { Button, Form, Stack } from "react-bootstrap"
import BsInput from "../../ui/BsInput"
import api from "./api/loginApi"
import { useNavigate } from "react-router-dom"
import HomeButton from "../../ui/HomeButton"

const LoginPage = () => {
    const navigate = useNavigate()

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const signup = async () => {
        setIsLoading(true)
        try {
            await api.login({mail, password})
            navigate('/users')
        } catch (e) {}
        finally {
            setIsLoading(false)
        }    
    }

    return <Stack gap={2} style={{maxWidth: '600px'}}>
        <HomeButton label='Back'/>
        <Form.Group>
            <BsInput
                label='Mail'
                type='mail'
                value={mail}
                setValue={setMail}
            />
            <BsInput
                label='Password'
                type='password'
                value={password}
                setValue={setPassword}
            />
            <Button
                onClick={signup}
                className="mt-4"
                disabled={!mail.trim() || !password || isLoading}
            >
                Log in
            </Button>
        </Form.Group>
    </Stack>
}

export default LoginPage