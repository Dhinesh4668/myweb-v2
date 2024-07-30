import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  color: black;  // Updated color to ensure visibility on a white background
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: transform 0.3s ease, opacity 0.3s ease; // Added opacity for smooth fade
  transform: ${({ hideHeader }) => hideHeader ? 'translateY(-100%)' : 'translateY(0)'};
  opacity: ${({ hideHeader }) => hideHeader ? '0' : '1'}; // Smooth fade out effect
  z-index: 1000; // Ensure it stays on top of other elements

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black; // Ensure the text color is visible
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative; 
  overflow: hidden; // Hide the underline when it's out of bounds

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.2px; // Adjusted spacing between text and underline
    height: 2px;
    width: 100%;
    background-color: ${colors.primary};
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {    
    &::after {
      transform: translateX(0);
    }
  }
`;
export const Button = styled.button`
  position: relative; // Make sure the button is positioned relative to contain the pseudo-element
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden; // Hide the underline when it's out of bounds
  transition: color 0.3s ease; // Smooth color transition

  
`;

