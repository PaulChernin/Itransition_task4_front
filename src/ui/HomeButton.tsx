import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

type HomeButtonProps = {
    label: string
}

const HomeButton = ({ label }: HomeButtonProps) => {
    const navigate = useNavigate()
    
    return <Button
        onClick={() => navigate('/')}
        style={{width: 'fit-content'}}
    >
        {label}
    </Button>
}

export default HomeButton