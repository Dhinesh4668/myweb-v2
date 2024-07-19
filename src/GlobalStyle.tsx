import { createGlobalStyle } from 'styled-components';
import { size, colors } from '../utils/theme'
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    background-color: gba(255,255,255,0.5);
    font-family: "Spline Sans Mono", monospace;
  }

  *::-webkit-scrollbar {
    display: none; 
  }

  body {
    /* font-family: "Plus Jakarta Sans", sans-serif; */
    font-family: "Spline Sans Mono", monospace;
  }
`;

export default GlobalStyle;
