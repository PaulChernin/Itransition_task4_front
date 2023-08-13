import { Button, ButtonGroup } from "react-bootstrap"

type UsersControlsProps = {
    block: () => void,
    unblock: () => void,
    remove: () => void,
    disabled: boolean
}

const UsersControls = ({ block, unblock, remove, disabled }: UsersControlsProps) => {
    const controls = [
        { label: 'Block', onClick: block },
        { label: 'Unblock', onClick: unblock },
        { label: 'Delete', onClick: remove },
    ]
    
    return (
        <ButtonGroup style={{width: 'fit-content'}}>
            {controls.map(control =>
                <Button
                    onClick={control.onClick}
                    disabled={disabled}
                    style={{width: 'fit-content'}}
                    key={control.label}
                >
                    {control.label}
                </Button>
            )}
        </ButtonGroup>
    )
}

export default UsersControls