import { Form } from "react-bootstrap"

type BsInputProps = {
    label: string,
    type?: string,
    value: string,
    setValue: (value: string) => void
}

const BsInput = ({ label, type, value, setValue }: BsInputProps) => {
    return <>
        <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
    </>
}

export default BsInput