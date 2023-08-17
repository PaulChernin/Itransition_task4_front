import { useState } from "react"
import { Button, Form, Stack } from "react-bootstrap"
import BsInput from "../../ui/BsInput"
import api from "./api/signupApi"
import { useNavigate } from "react-router-dom"
import HomeButton from "../../ui/HomeButton"

const SignupPage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const signup = async () => {
        try {
            await api.signup({name, mail, password})
            navigate('/users')
        } catch (e) {}
    }

    return <Stack gap={2} style={{maxWidth: '600px'}}>
        <HomeButton label='Back'/>
        <Form.Group>
            <BsInput
                label='Name'
                type='text'
                value={name}
                setValue={setName}
            />
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
                disabled={!name.trim() || !mail.trim() || !password}
            >
                Sign up
            </Button>
        </Form.Group>
    </Stack>
}

export default SignupPage