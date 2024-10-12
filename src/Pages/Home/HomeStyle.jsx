import styled, { Styled } from 'styled-components'
import { Link } from 'react-router-dom'
// main
const HomeContainer = styled.div``

// center container 
const CenterContainer = styled.div``

// main continaer 
const PrimaryText = styled.p``

// sub text 
const SubTitle = styled.p``

// buttom 
const Button = styled(Link)`

color: ${colorPalette.primary.highlight};  // Use your palette colors
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colorPalette.primary.background};  // Use background on hover
    color: ${colorPalette.text.primary};  // Change color on hover
  }

  &:active {
    background-color: ${colorPalette.secondary.background};  // When active
  }

  &.active {  // This can be used for active class styles
    border-bottom: 2px solid ${colorPalette.primary.highlight};
  }
  
  `


export {
    HomeContainer,
    CenterContainer,
    PrimaryText,
    SubTitle,
    Button
}
