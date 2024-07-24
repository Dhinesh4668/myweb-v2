import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { size } from '../../utils/theme/index'
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding:0.5rem 5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const shake = keyframes`
    0% { transform: translateX(0); }
    25% { transform: translateX(-2%); }
    50% { transform: translateX(2%); }
    75% { transform: translateX(-2%); }
    100% { transform: translateX(0); }
`;

export const Logo = styled.img`
    height: 50px;
    width: auto;
    transition: box-shadow 0.3s ease-in-out, border-radius 0.3s ease-in-out; // Smooth transition for glow and border-radius
    border-radius: 200px; // Initial border-radius
    background-color: transparent; // Ensure background is transparent
    cursor: pointer;
    &:hover {
        animation: ${shake} 0.5s ease-in-out; // Apply shake animation on hover
    }
`;


export const LinkContainer = styled.nav`
    display: flex;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`;


export const HeaderLink = styled(Link)`
    text-decoration: none;
    margin: 0 1rem;
    position: relative;
    overflow: hidden;
    font-size: ${size.medium};

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #007bff;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
        transform: translateX(0);
    }

    @media (max-width: 768px) {
        margin: 0.5rem;
    }
`;