import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Google Font Imports */
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

  /* Custom Font - DXGliter */
  @font-face {
    font-family: 'DXGliter';
    src: url('./assets/fonts/DxGlitar-free-font.ttf') format('truetype'); /* Use correct font format */
    font-weight: normal;
    font-style: normal;
  }

  /* Global Styling */
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Cabin', sans-serif; /* Default body font */
  }

  body {
      background-color: #0D0D0D; /* Dark background */
      color: #E0E0E0; /* Light text color */
      line-height: 1.6;
      overflow-y: scroll; /* Enable scrolling */
      font-family: 'Cabin', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
      color: #FFFFFF; /* Header text color */
      margin-bottom: 0.5rem;
  }

  p {
      color: #B0BEC5; /* Paragraph text color */
      margin-bottom: 1rem;
  }

  a {
      color: #BB86FC; /* Link color */
      text-decoration: none;
  }

  input, textarea, select {
      background-color: #1E1E1E; /* Input background */
      color: #E0E0E0; /* Input text color */
      border: 1px solid #444; /* Input border */
      border-radius: 4px;
      padding: 0.5rem;
      &:focus {
          outline: none;
          border-color: #BB86FC; /* Input focus border color */
      }
  }

  button {
      background-color: #BB86FC; /* Button background */
      color: #121212; /* Button text color */
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
          background-color: #9B67E3; /* Button hover color */
      }
  }

  /* Hide scrollbar */
  *::-webkit-scrollbar {
    display: none; 
  }
`;

export default GlobalStyle;
