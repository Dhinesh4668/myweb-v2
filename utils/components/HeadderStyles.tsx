import styled from "styled-components";
import { Link } from "react-router-dom";
import { size } from '../theme'
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding:0.5rem 5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    height: 50px;
    width: auto;
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
    /* color: ; */
    margin: 0 1rem;
    position: relative;
    overflow: hidden;
    font-size: ${size.medium};

    &:hover::after {
        transform: translateX(0);
    }

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

    @media (max-width: 768px) {
        margin: 0.5rem;
    }
`;

export const Button = styled.button`
    display: flex;
    background-color: #0dff00;
    font-size: ${size.large};
    padding:0.8rem  2rem;
    border-radius: 10rem;
    cursor: pointer;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    &:hover {
        /* background-color: #0056b3; */
        border-radius: 5px;
        /* transform: translateX(0); */
    }
`;

