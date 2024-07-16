import { createGlobalStyle } from 'styled-components';
import { size, colors } from '../utils/theme'
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px
  }

  body {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-optical-sizing: auto;
  }

  h1 {
    font-size: ${size.extraLarge};
    color: ${colors.primary};
  }

  h2 {
    font-size: ${size.large};
    color: ${colors.secondary};
  }

  p {
    font-size: ${size.medium};
    color: ${colors.tertiary};
  }
`;

export default GlobalStyle;
