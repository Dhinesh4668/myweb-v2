import styled from 'styled-components'
const ButtonContainer = styled.div`
    position: relative;
    width: 148px;
    height: 58px;
    cursor: pointer;
`;

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    position: relative;
    z-index: 2;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    background-color: black;
    transition: transform 0.3s ease;
    color: white;
    ${ButtonContainer}:hover & {
        transform: translate(8px, 8px);
    }

    ${ButtonContainer}:active & {
        transform: translate(8px, 8px)
    }
`;

const BackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
    z-index: 1;
    transform: translate(8px, 8px);
    transition: transform 0.3s ease;
`;

export {
    BackgroundDiv,
    StyledButton,
    ButtonContainer,
}
