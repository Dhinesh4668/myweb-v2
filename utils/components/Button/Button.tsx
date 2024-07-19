import { BackgroundDiv, ButtonContainer, StyledButton } from './ButtonStyle'

interface ButtonProps {
    onClick: () => void,
    title: string,
}

const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
    return (
        <ButtonContainer onClick={onClick}>
            <StyledButton>{title}</StyledButton>
            <BackgroundDiv />
        </ButtonContainer>
    );
}

export default Button;
