import { BackgroundDiv, ButtonContainer, StyledButton } from './ButtonStyle'

interface ButtonProps {
    onClick: () => void,
    title: string,
    link: string
}

const Button: React.FC<ButtonProps> = ({ onClick, title, link }) => {
    return (
        <ButtonContainer herf={link} onClick={onClick}>
            <StyledButton>{title}</StyledButton>
            <BackgroundDiv />
        </ButtonContainer>
    );
}

export default Button;
