import { createGlobalStyle } from 'styled-components';
import { size, colors } from '../utils/theme'
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    background-color: gba(255,255,255,0.5);
      font-family: "IBM Plex Sans", sans-serif;
      /* font-family: "Lora", serif; */
  }

  *::-webkit-scrollbar {
    display: none; 
  }

  body {
    /* font-family: "Plus Jakarta Sans", sans-serif; */
    //font-family: "Spline Sans Mono", monospace;
  }
`;

export default GlobalStyle;
